<template>
  <div class="flex h-dvh">
    <div class="w-4/12 border-r-2 border-gray-300">
      <LeftContentPanel />
    </div>
    <div class="w-6/12 h-dvh">
      <VueFlow :nodes="nodes" :edges="edges" :node-types="nodeTypes">
        <Background pattern-color="#aaa" :gap="16" />
        <template #node-special="specialNodeProps">
          <SpecialNode v-bind="specialNodeProps" />
        </template>

        <template #edge-special="specialEdgeProps">
          <SpecialEdge v-bind="specialEdgeProps" />
        </template>

        <ActDialog :show="actDialogState" />
      </VueFlow>
    </div>

    <div class="w-4/12 border-l-2 border-gray-300">
      <LeftContentPanel />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";

import SpecialNode from "./components/SpecialNode.vue";
import SpecialEdge from "./components/SpecialEdge.vue";
import ActDialog from "./components/ActDialog.vue";
import LeftContentPanel from "./components/LeftContentPanel.vue";

const nodes = ref([
  {
    id: "1",
    type: "special",
    position: { x: 250, y: 5 },
    data: {
      label: "ผู้อำนวยการฝ่ายพัฒนาระบบ",
      description:
        "รับผิดชอบการพัฒนาและดูแลระบบสารสนเทศขององค์กร รวมถึงการวางแผนกลยุทธ์ด้านเทคโนโลยี",
      manpower: {
        current: 1,
        total: 1,
      },
    },
  },
  {
    id: "2",
    type: "special",
    position: { x: 100, y: 100 },
    data: {
      label: "หัวหน้าทีมพัฒนา Frontend",
      description: "ดูแลทีมพัฒนา Frontend และออกแบบ User Interface",
      manpower: {
        current: 3,
        total: 5,
      },
    },
  },
  {
    id: "3",
    type: "special",
    position: { x: 400, y: 100 },
    data: {
      label: "หัวหน้าทีมพัฒนา Backend",
      description: "ดูแลทีมพัฒนา Backend และออกแบบสถาปัตยกรรมระบบ",
      manpower: {
        current: 4,
        total: 4,
      },
    },
  },
]);

const edges = ref([
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
  },
]);

const { getSelectedNodes, fitView } = useVueFlow();

watch(getSelectedNodes, (gn) => selectNodesHandler(gn));

function selectNodesHandler(gn) {
  if (gn.length > 0) {
    fitNode(gn[0].id);
    actDialogState.value = true;
  }
}

function fitNode(nodeId) {
  fitView({
    nodes: [nodeId],
    offset: { x: 0, y: -100 },
    padding: 0,
    duration: 500,
  });
}

const actDialogState = ref(false);

const nodeTypes = {
  special: SpecialNode,
};
</script>

<style>
@import "@vue-flow/core/dist/style.css";
@import "@vue-flow/core/dist/theme-default.css";

#mm {
  width: 100%;
  height: 100dvh;
}
</style>
