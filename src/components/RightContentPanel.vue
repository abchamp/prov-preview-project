<template>
  <div id="right-content-panel" class="h-full bg-slate-50/50">
    <!-- Header Section -->
    <div class="sticky top-0 bg-white border-b border-slate-200 p-4 space-y-3">
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold text-slate-800">
          {{ position.label }}
        </h2>
        <button class="p-2 hover:bg-slate-100 rounded-full">
          <XMarkIcon class="w-5 h-5 text-slate-400" />
        </button>
      </div>
      <p class="text-sm text-slate-600">{{ position.description }}</p>
    </div>

    <!-- Content Scrollable Area -->
    <div class="overflow-y-auto h-[calc(100vh-10rem)]">
      <!-- Position Requirements -->
      <div class="p-4 border-b border-slate-200">
        <h3 class="text-sm font-medium text-slate-700 mb-2">
          คุณสมบัติตำแหน่ง
        </h3>
        <ul class="space-y-2">
          <li
            v-for="req in requirements"
            :key="req.id"
            class="flex items-center text-sm text-slate-600"
          >
            <CheckCircleIcon class="w-4 h-4 text-emerald-500 mr-2" />
            {{ req.text }}
          </li>
        </ul>
      </div>

      <!-- Statistics Cards -->
      <div class="grid grid-cols-2 gap-3 p-4 border-b border-slate-200">
        <div class="bg-white p-3 rounded-lg border border-slate-200">
          <div class="text-xs text-slate-500 mb-1">อวามคืบหน้า</div>
          <div class="font-medium text-slate-800">{{ position.progress }}%</div>
        </div>
        <div class="bg-white p-3 rounded-lg border border-slate-200">
          <div class="text-xs text-slate-500 mb-1">อายุเฉลี่ย</div>
          <div class="font-medium text-slate-800">42 ปี</div>
        </div>
        <div class="bg-white p-3 rounded-lg border border-slate-200">
          <div class="text-xs text-slate-500 mb-1">อายุราชการเฉลี่ย</div>
          <div class="font-medium text-slate-800">15 ปี</div>
        </div>
        <div class="bg-white p-3 rounded-lg border border-slate-200">
          <div class="text-xs text-slate-500 mb-1">ระดับเฉลี่ย</div>
          <div class="font-medium text-slate-800">ชำนาญการพิเศษ</div>
        </div>
        <div class="bg-white p-3 rounded-lg border border-slate-200">
          <div class="text-xs text-slate-500 mb-1">อัตราว่าง</div>
          <div class="font-medium text-slate-800">2 ตำแหน่ง</div>
        </div>
      </div>

      <!-- Personnel List -->
      <div class="p-4">
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-sm font-medium text-slate-700">บุคลากรในตำแหน่ง</h3>
          <button
            class="text-xs bg-sky-50 text-sky-600 px-2.5 py-1.5 rounded-full hover:bg-sky-100"
          >
            + เพิ่มบุคลากร
          </button>
        </div>

        <!-- Personnel Cards -->
        <div class="space-y-3">
          <div
            v-for="person in personnel"
            :key="person.id"
            class="bg-white p-3 rounded-lg border border-slate-200 space-y-3"
          >
            <div class="flex items-center gap-3">
              <img
                :src="person.avatar"
                :alt="person.name"
                class="w-10 h-10 rounded-full object-cover border border-slate-200"
              />
              <div class="flex-1 min-w-0">
                <h4 class="text-sm font-medium text-slate-800 truncate">
                  {{ person.name }}
                </h4>
                <p class="text-xs text-slate-500">{{ person.position }}</p>
              </div>
              <button class="p-1.5 hover:bg-red-50 rounded-full group">
                <TrashIcon
                  class="w-4 h-4 text-slate-400 group-hover:text-red-500"
                />
              </button>
            </div>
            <div class="flex gap-2">
              <span
                class="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
              >
                ระดับ {{ person.level }}
              </span>
              <span
                class="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600"
              >
                อายุราชการ {{ person.experience }} ปี
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Request Section -->
      <div class="p-4 border-t border-slate-200">
        <div class="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <div class="flex items-center gap-2 mb-2">
            <ClockIcon class="w-4 h-4 text-amber-500" />
            <h3 class="text-sm font-medium text-amber-800">คำร้องขอบรรจุ</h3>
          </div>
          <p class="text-xs text-amber-700 mb-3">
            มีคำร้องขอบรรจุ 3 รายการที่รอการพิจารณา
          </p>
          <button
            class="w-full bg-amber-100 hover:bg-amber-200 text-amber-700 text-sm py-2 rounded-md"
          >
            ดูคำร้องทั้งหมด
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  XMarkIcon,
  CheckCircleIcon,
  TrashIcon,
  ClockIcon,
} from "@heroicons/vue/24/outline";

// ข้อมูลจำลอง
const position = ref({
  label: "หัวหน้าทีมพัฒนา Frontend",
  description:
    "ดูแลทีมพัฒนา Frontend และออกแบบ User Interface รวมถึงประสานงานกับทีม UX/UI",
});

const requirements = ref([
  { id: 1, text: "ประสบการณ์บริหารทีม 3 ปีขึ้นไป" },
  { id: 2, text: "ทักษะการเขียนโปรแกรมขั้นสูง" },
  { id: 3, text: "ความเชี่ยวชาญด้าน Vue.js และ React" },
]);

const personnel = ref([
  {
    id: 1,
    name: "นายสมชาย ใจดี",
    position: "นักวิชาการคอมพิวเตอร์",
    level: "ชำนาญการพิเศษ",
    experience: 12,
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "นางสาวสมหญิง รักเรียน",
    position: "นักวิชาการคอมพิวเตอร์",
    level: "ชำนาญการ",
    experience: 8,
    avatar: "https://i.pravatar.cc/150?img=2",
  },
]);
</script>

<style scoped></style>
