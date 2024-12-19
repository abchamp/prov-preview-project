<script setup>
import { computed } from "vue";
import { Handle, Position } from "@vue-flow/core";
import {
  calculateFocusNodeRingClassHelper,
  calculateProgressNodeHelper,
} from "../utils/selectNodeHelper";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  selected: { type: Boolean, default: false },
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
  return props.data.progress;
});

const getInitial = (index) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[index % letters.length];
};

const avatarColors = [
  "bg-slate-100 text-slate-600",
  "bg-gray-100 text-gray-600",
  "bg-zinc-100 text-zinc-600",
  "bg-neutral-100 text-neutral-600",
  "bg-stone-100 text-stone-600",
];

const getLocation = computed(() => {
  const type = props.data.type;
  return `ตำแหน่ง${type}`;
});
</script>

<template>
  <div
    id="sp_node"
    :class="[
      'w-[200px] p-3 rounded-md bg-white hover:shadow-sm transition-shadow',
      selected
        ? calculateFocusNodeRingClassHelper(progressPercentage)
        : 'border border-slate-300 ',
    ]"
  >
    <div
      v-if="id === '1'"
      class="absolute w-[200px] text-center -top-[100px] right-0"
    >
      <div class="text-[35px]">แผนผังองค์กร</div>
      <div class="text-[28px]">ฝ่ายพัฒนาระบบ</div>
    </div>
    <!-- Title -->
    <h3 class="font-medium text-[15px] text-slate-800 mb-1">
      {{ data.label }}
    </h3>

    <!-- Location -->
    <p class="text-slate-500 text-[13px] mb-2">{{ getLocation }}</p>

    <!-- Profile Letters Stack & Count -->
    <div class="flex items-center gap-1 mb-2">
      <div class="flex -space-x-2">
        <template
          v-for="(profile, index) in (data.profiles || []).slice(0, 5)"
          :key="index"
        >
          <div
            class="w-6 h-6 rounded-full border border-white flex items-center justify-center text-xs font-medium relative"
            :class="avatarColors[index % avatarColors.length]"
            :style="{ zIndex: 5 - index }"
          >
            {{ getInitial(index) }}
          </div>
        </template>
      </div>
      <!-- Member Count -->
      <span class="text-xs text-slate-600 ml-2">
        {{ Math.round(data.progress) }}%
      </span>
    </div>

    <!-- Progress Bar -->
    <div class="h-1 bg-slate-100 rounded-full overflow-hidden">
      <div
        class="h-full bg-slate-400/60 rounded-full transition-all"
        :style="
          `width: ${progressPercentage}%;` +
          calculateProgressNodeHelper(progressPercentage)
        "
      ></div>
    </div>

    <!-- Handles -->
    <Handle
      type="target"
      :position="Position.Top"
      class="!bg-slate-200 !w-2 !h-2"
    />
    <Handle
      type="source"
      :position="Position.Bottom"
      class="!bg-slate-200 !w-2 !h-2"
    />
  </div>
</template>

<style scoped>
.vue-flow__handle {
  min-width: 8px;
  min-height: 8px;
  width: 8px;
  height: 8px;
  border: 2px solid white;
  background: #e2e8f0;
  border-radius: 50%;
}

.vue-flow__node-default {
  transition: all 0.2s ease;
}
</style>
