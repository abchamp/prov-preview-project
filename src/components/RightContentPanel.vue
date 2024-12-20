<template>
  <div class="h-full bg-slate-50/50">
    <!-- Header -->
    <div class="sticky top-0 bg-white border-b border-slate-200 p-4">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-4">
          <img
            :src="person.avatar"
            :alt="person.name"
            class="w-16 h-16 rounded-full object-cover border-2 border-slate-200"
          />
          <div>
            <h2 class="text-lg font-semibold text-slate-800">
              {{ person.name }}
            </h2>
            <p class="text-slate-600">{{ position.title }}</p>
            <span
              class="text-sm px-2 py-1 bg-sky-50 text-sky-600 rounded-full mt-1 inline-block"
            >
              {{ person.rank }}
            </span>
          </div>
        </div>
        <button class="p-2 hover:bg-slate-100 rounded-full">
          <XMarkIcon class="w-5 h-5 text-slate-400" />
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="p-4 space-y-6">
      <!-- ข้อมูลส่วนตัว -->
      <section>
        <h3 class="text-sm font-medium text-slate-700 mb-3">ข้อมูลส่วนตัว</h3>
        <div class="bg-white p-4 rounded-lg border border-slate-200 space-y-3">
          <div class="grid grid-cols-2 gap-4">
            <div>
              <p class="text-sm text-slate-500">อายุ</p>
              <p class="font-medium text-slate-700">{{ person.age }} ปี</p>
            </div>
            <div>
              <p class="text-sm text-slate-500">อายุราชการ</p>
              <p class="font-medium text-slate-700">
                {{ person.serviceYears }} ปี
              </p>
            </div>
          </div>
          <div>
            <p class="text-sm text-slate-500">การศึกษา</p>
            <p class="font-medium text-slate-700">{{ person.education }}</p>
          </div>
        </div>
      </section>

      <!-- ความเชี่ยวชาญ -->
      <section>
        <h3 class="text-sm font-medium text-slate-700 mb-3">ความเชี่ยวชาญ</h3>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="skill in person.specializations"
            :key="skill"
            class="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm"
          >
            {{ skill }}
          </span>
        </div>
      </section>

      <!-- ใบรับรอง/วุฒิบัตร -->
      <section>
        <h3 class="text-sm font-medium text-slate-700 mb-3">
          ใบรับรอง/วุฒิบัตร
        </h3>
        <div class="space-y-2">
          <div
            v-for="cert in person.certifications"
            :key="cert"
            class="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200"
          >
            <CheckCircleIcon class="w-5 h-5 text-emerald-500" />
            <span class="text-slate-700">{{ cert }}</span>
          </div>
        </div>
      </section>

      <!-- ประวัติการทำงาน -->
      <section>
        <h3 class="text-sm font-medium text-slate-700 mb-3">ประวัติการทำงาน</h3>
        <div
          class="bg-white rounded-lg border border-slate-200 divide-y divide-slate-200"
        >
          <div v-for="history in workHistory" :key="history.id" class="p-3">
            <div class="flex justify-between items-start">
              <div>
                <p class="font-medium text-slate-700">{{ history.position }}</p>
                <p class="text-sm text-slate-500">{{ history.department }}</p>
              </div>
              <span class="text-xs text-slate-500">{{ history.period }}</span>
            </div>
          </div>
        </div>
      </section>
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
  title: "หัวหน้าทีมพัฒนา Frontend",
});

const person = ref({
  name: "นางสาวสมหญิง รักเรียน",
  rank: "ชำนาญการพิเศษ",
  avatar:
    "https://api.dicebear.com/7.x/avataaars/svg?seed=สมหญิง&backgroundColor=b6e3f4",
  age: 38,
  serviceYears: 12,
  education: "ปริญญาตรี วิทยาการคอมพิวเตอร์",
  specializations: ["Vue.js", "React", "UX/UI Design"],
  certifications: ["AWS Certified Developer", "Professional Scrum Master"],
});

const workHistory = ref([
  {
    id: 1,
    position: "หัวหน้าทีมพัฒนา Frontend",
    department: "ฝ่ายพัฒนาระบบ",
    period: "2565 - ปัจจุบัน",
  },
  {
    id: 2,
    position: "นักพัฒนาระบบอาวุโส",
    department: "ฝ่ายพัฒนาระบบ",
    period: "2562 - 2565",
  },
  {
    id: 3,
    position: "นักพัฒนาระบบ",
    department: "ฝ่ายพัฒนาระบบ",
    period: "2559 - 2562",
  },
]);
</script>

<style scoped></style>
