<script setup>
import { computed } from "vue";
import { Handle, Position } from "@vue-flow/core";

const props = defineProps({
  position: {
    type: Object,
    required: true,
  },
  data: {
    type: Object,
    required: true,
  },
});

const progressPercentage = computed(() => {
  const { current, total } = props.data.manpower;
  return (current / total) * 100;
});

const progressColor = computed(() => {
  return progressPercentage.value === 100 ? "bg-sky-400/80" : "bg-amber-400/80";
});
</script>

<template>
  <div
    id="sp_node"
    class="vue-flow__node-default min-w-[280px] p-4 rounded-lg bg-white border border-slate-200"
  >
    <!-- ชื่อตำแหน่ง -->
    <h3 class="font-medium text-base text-slate-700 mb-1">
      {{ data.label }}
    </h3>

    <!-- รายละเอียด -->
    <p class="text-slate-500 text-sm mb-3 line-clamp-1 break-words">
      {{ data.description }}
    </p>

    <!-- กำลังพล + Progress bar -->
    <div class="space-y-2">
      <div class="flex justify-between text-sm items-center">
        <span class="text-slate-500">กำลังพล</span>
        <span class="font-medium text-slate-700">
          {{ data.manpower.current }}/{{ data.manpower.total }}
        </span>
      </div>
      <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          class="h-full rounded-full transition-all"
          :class="progressColor"
          :style="{ width: `${progressPercentage}%` }"
        ></div>
      </div>
    </div>

    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>
