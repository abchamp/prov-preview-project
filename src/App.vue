<template>
  <div class="flex h-dvh">
    <div
      class="transition-all duration-300 ease-in-out border-r border-gray-300"
      :class="[showLeftPanel ? 'w-4/12' : 'w-0 overflow-hidden']"
    >
      <LeftContentPanel />
    </div>
    <div class="transition-all duration-300 ease-in-out h-dvh w-8/12">
      <VueFlow :nodes="nodes" :edges="edges" :node-types="nodeTypes">
        <Background pattern-color="#aaa" :gap="16" />
        <template #node-special="specialNodeProps">
          <SpecialNode v-bind="specialNodeProps" />
        </template>

        <template #edge-special="specialEdgeProps">
          <SpecialEdge v-bind="specialEdgeProps" />
        </template>

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
import { ref, watch } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";

import SpecialNode from "./components/SpecialNode.vue";
import SpecialEdge from "./components/SpecialEdge.vue";
import ActDialog from "./components/ActDialog.vue";
import LeftContentPanel from "./components/LeftContentPanel.vue";
import RightContentPanel from "./components/RightContentPanel.vue";

const nodes = ref([
  {
    id: "1",
    type: "special",
    position: { x: 250, y: 5 },
    data: {
      label: "ผู้อำนวยการฝ่ายพัฒนาระบบ",
      type: "ผู้บริหาร",
      profiles: [
        { avatar: "/avatars/1.jpg" },
        { avatar: "/avatars/2.jpg" },
        { avatar: "/avatars/3.jpg" },
        { avatar: "/avatars/4.jpg" },
        { avatar: "/avatars/5.jpg" },
      ],
      manpower: {
        current: 238,
        total: 238,
      },
    },
  },
  {
    id: "2",
    type: "special",
    position: { x: 100, y: 100 },
    data: {
      label: "หัวหน้าทีมพัฒนา Frontend",
      type: "หัวหน้างาน",
      profiles: [
        { avatar: "/avatars/2.jpg" },
        { avatar: "/avatars/3.jpg" },
        { avatar: "/avatars/4.jpg" },
      ],
      manpower: {
        current: 82,
        total: 82,
      },
    },
  },
  {
    id: "3",
    type: "special",
    position: { x: 400, y: 100 },
    data: {
      label: "หัวหน้าทีมพัฒนา Backend",
      type: "หัวหน้างาน",
      profiles: [
        { avatar: "/avatars/1.jpg" },
        { avatar: "/avatars/2.jpg" },
        { avatar: "/avatars/3.jpg" },
      ],
      manpower: {
        current: 31,
        total: 31,
      },
    },
  },
]);

const edges = ref([
  {
    id: "e1-2",
    source: "1",
    target: "2",
    type: "special",
    data: {
      percentage: 100,
    },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    type: "special",
    data: {
      percentage: 100,
    },
  },
]);

const { getSelectedNodes, fitView } = useVueFlow();

const showLeftPanel = ref(true);
const showRightPanel = ref(false);

watch(getSelectedNodes, (gn) => selectNodesHandler(gn));

function selectNodesHandler(gn) {
  console.log(gn);
  if (gn.length > 0) {
    fitNode(gn[0].id);
    actDialogState.value = true;
    showLeftPanel.value = false;
    showRightPanel.value = true;
  } else {
    showLeftPanel.value = true;
    showRightPanel.value = false;
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
