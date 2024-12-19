<template>
  <div class="flex h-dvh">
    <div
      class="transition-all duration-300 ease-in-out border-r border-gray-300"
      :class="[showLeftPanel ? 'w-4/12' : 'w-0 overflow-hidden']"
    >
      <LeftContentPanel />
    </div>
    <div class="transition-all duration-300 ease-in-out h-dvh w-8/12">
      <VueFlow
        :nodes="nodes"
        :edges="edges"
        @nodes-initialized="layoutGraph('TB')"
      >
        <Background pattern-color="#aaa" :gap="16" />
        <template #node-special="specialNodeProps">
          <SpecialNode v-bind="specialNodeProps" />
        </template>

        <!-- <template #edge-special="specialEdgeProps">
          <SpecialEdge v-bind="specialEdgeProps" />
        </template> -->

        <!-- <ActDialog :show="actDialogState" /> -->
      </VueFlow>
    </div>

    <div
      class="transition-all duration-300 ease-in-out border-l border-gray-300"
      :class="[showRightPanel ? 'w-4/12' : 'w-0 overflow-hidden']"
    >
      <RightContentPanel />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, nextTick, onMounted } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { useLayout } from "./composables/useFlowLayout";

import SpecialNode from "./components/SpecialNode.vue";
import SpecialEdge from "./components/SpecialEdge.vue";
import ActDialog from "./components/ActDialog.vue";
import LeftContentPanel from "./components/LeftContentPanel.vue";
import RightContentPanel from "./components/RightContentPanel.vue";
import { nodeEdgeData } from "./utils/nodeEdgeData";
import { preprocessRawEdgeDataHelper } from "./utils/selectNodeHelper";
const showLeftPanel = ref(true);
const showRightPanel = ref(false);

const { layout } = useLayout();
const nodes = ref([]);
const edges = ref([]);
const actDialogState = ref(false);

onMounted(() => {
  const { edges: processedEdges } = preprocessRawEdgeDataHelper(
    nodeEdgeData.edges
  );

  nodes.value = nodeEdgeData.nodes;
  edges.value = processedEdges;
  console.log(edges.value);
});

const { getSelectedNodes, fitView, findNode } = useVueFlow();

async function layoutGraph(direction) {
  nodes.value = layout(nodes.value, edges.value, direction);

  nextTick(() => {
    fitView();
  });
}

watch(getSelectedNodes, (gn) => selectNodesHandler(gn));

let lastSelectedNode = null;
function selectNodesHandler(gn) {
  if (gn.length > 0) {
    lastSelectedNode = gn[0]["id"];
    selectSelectedNode(lastSelectedNode);
    // actDialogState.value = true;
    showLeftPanel.value = false;
    showRightPanel.value = true;
  } else {
    removeSelectedNodes();
    zoomOutToParent(lastSelectedNode, "pair");
    lastSelectedNode = null;
    showLeftPanel.value = true;
    showRightPanel.value = false;
  }
}

function selectSelectedNode(selectedNodeId) {
  const _n = findNode(selectedNodeId);

  console.log(_n);

  fitNode(selectedNodeId);
}

function removeSelectedNodes() {}

function fitNode(nodeId) {
  fitView({
    nodes: [nodeId],
    offset: { x: 0, y: -100 },
    padding: 0,
    duration: 1000,
  });
}

function zoomOutToParent(focusChildNodeId, focusType) {
  try {
    if (!focusChildNodeId) {
      return;
    }

    if (focusType === "pair") {
      let pathing = undefined;
      const _ed = Object.values(edges.value);
      for (let i = 0; i < _ed.length; i++) {
        if (_ed[i]["target"] === focusChildNodeId) {
          pathing = _ed[i];
          break;
        }
      }

      if (pathing) {
        fitView({
          nodes: [pathing["source"], pathing["target"]],
          duration: 500,
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
}
</script>

<style>
@import "@vue-flow/core/dist/style.css";
@import "@vue-flow/core/dist/theme-default.css";

#mm {
  width: 100%;
  height: 100dvh;
}
</style>
