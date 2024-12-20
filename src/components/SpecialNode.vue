<script setup>
import { computed } from "vue";
import { Handle, Position } from "@vue-flow/core";
import {
  calculateFocusNodeRingClassHelper,
  calculateProgressNodeHelper,
} from "../utils/selectNodeHelper";
import {
  AcademicCapIcon,
  ClockIcon,
  CalendarIcon,
  UserPlusIcon,
} from "@heroicons/vue/24/outline";

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

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
</script>

<template>
  <div
    id="sp_node"
    :class="[
      'w-[280px] p-4 rounded-lg transition-shadow',
      selected
        ? calculateFocusNodeRingClassHelper(data.type)
        : 'border border-slate-200',
      data.type === 'vacant' ? 'bg-slate-50' : 'bg-white',
    ]"
  >
    <!-- Department Stats for Root Node -->
    <div
      v-if="id === '1'"
      class="absolute -top-[180px] left-1/2 transform -translate-x-1/2"
    >
      <div
        class="bg-white p-4 rounded-lg shadow-lg border border-slate-200 w-[600px]"
      >
        <h2 class="text-xl font-semibold text-center mb-4">
          แผนผังอัตรากำลังฝ่ายพัฒนาระบบ
        </h2>
        <div class="grid grid-cols-3 gap-4">
          <div class="text-center p-3 bg-sky-50 rounded-lg">
            <div class="text-sky-600 text-2xl font-semibold">
              {{ data.departmentStats.filledPositions }}/{{
                data.departmentStats.totalPositions
              }}
            </div>
            <div class="text-sky-700 text-sm">อัตรากำลัง</div>
          </div>
          <div class="text-center p-3 bg-sky-50 rounded-lg">
            <div class="text-sky-600 text-2xl font-semibold">
              {{ data.departmentStats.averageServiceYears }} ปี
            </div>
            <div class="text-sky-700 text-sm">อายุราชการเฉลี่ย</div>
          </div>
          <div class="text-center p-3 bg-sky-50 rounded-lg">
            <div class="text-sky-600 text-2xl font-semibold">
              <!-- {{ data.departmentStats.budgetUtilization }}% -->
              XXX
            </div>
            <div class="text-sky-700 text-sm">การใช้งบประมาณ</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Person Node -->
    <template v-if="data.type === 'person'">
      <div class="flex items-start gap-3 mb-3">
        <img
          :src="data.person.avatar"
          :alt="data.person.name"
          class="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
        />
        <div class="flex-1 min-w-0">
          <h3 class="font-medium text-slate-800 truncate">
            {{ data.person.name }}
          </h3>
          <p class="text-sm text-slate-600">{{ data.person.rank }}</p>
          <div
            class="mt-1 text-xs font-medium px-2 py-1 bg-sky-50 text-sky-700 rounded-full inline-block"
          >
            {{ data.positionTitle }}
          </div>
        </div>
      </div>
      <div class="space-y-2 text-sm">
        <div class="flex items-center gap-2 text-slate-600">
          <AcademicCapIcon class="w-4 h-4" />
          <span class="truncate">{{ data.person.education }}</span>
        </div>
        <div class="flex items-center gap-2 text-slate-600">
          <ClockIcon class="w-4 h-4" />
          <span>อายุราชการ {{ data.person.serviceYears }} ปี</span>
        </div>
      </div>
    </template>

    <!-- Vacant Position Node -->
    <template v-else>
      <div class="flex items-center gap-3 mb-3">
        <div
          class="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center"
        >
          <UserPlusIcon class="w-6 h-6 text-slate-400" />
        </div>
        <div>
          <h3 class="font-medium text-slate-800">{{ data.positionTitle }}</h3>
          <p class="text-sm text-slate-500">ตำแหน่งว่าง</p>
        </div>
      </div>
      <div class="text-xs text-slate-600 space-y-1">
        <div class="flex items-center gap-2">
          <CalendarIcon class="w-4 h-4" />
          <span>วันที่ร้องขอ: {{ formatDate(data.requestDate) }}</span>
        </div>
        <div class="flex items-center gap-2">
          <ClockIcon class="w-4 h-4" />
          <span>สถานะ: {{ data.requestStatus }}</span>
        </div>
      </div>
    </template>

    <Handle
      type="target"
      :position="Position.Top"
      class="!bg-slate-300 !w-2 !h-2"
    />
    <Handle
      type="source"
      :position="Position.Bottom"
      class="!bg-slate-300 !w-2 !h-2"
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
