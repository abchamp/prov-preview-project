<template>
  <div id="right-content-panel" class="h-[calc(100vh-10rem)] bg-slate-50/50">
    <template v-if="selectedNode">
      <!-- Header สำหรับตำแหน่งว่าง -->
      <template v-if="isVacantPosition">
        <div class="sticky top-0 bg-white border-b border-slate-200 p-4">
          <div class="flex items-start justify-between">
            <div>
              <h2 class="text-lg font-semibold text-slate-800">
                {{ position.title }}
              </h2>
              <p class="text-slate-600">ตำแหน่งว่าง</p>
              <span
                class="text-sm px-2 py-1 bg-amber-50 text-amber-600 rounded-full mt-1 inline-block"
              >
                {{ position.positionType }}
              </span>
              <div class="mt-2 text-sm text-slate-500">
                สถานะ: {{ requestStatus }}
                <span class="mx-2">•</span>
                วันที่ร้องขอ: {{ formatDate(requestDate) }}
              </div>
            </div>
            <button
              class="p-2 hover:bg-slate-100 rounded-full"
              @click="handleClose"
            >
              <XMarkIcon class="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        <!-- Content สำหรับตำแหน่งว่าง -->
        <div class="p-4 space-y-4 overflow-y-auto h-full">
          <!-- Search and Filters -->
          <div class="flex gap-2">
            <div class="flex-1">
              <div class="relative">
                <input
                  type="text"
                  placeholder="ค้นหาบุคลากร..."
                  v-model="searchQuery"
                  class="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-sky-100 focus:border-sky-300"
                />
                <MagnifyingGlassIcon
                  class="w-5 h-5 text-slate-400 absolute left-3 top-2.5"
                />
              </div>
            </div>
            <button
              class="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              <FunnelIcon class="w-5 h-5 text-slate-500" />
            </button>
            <button
              class="px-3 py-2 border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              <ArrowsUpDownIcon class="w-5 h-5 text-slate-500" />
            </button>
          </div>

          <!-- Requirements -->
          <div class="bg-amber-50/50 p-3 rounded-lg border border-amber-100">
            <h3 class="text-sm font-medium text-amber-800 mb-2">
              คุณสมบัติที่ต้องการ
            </h3>
            <ul class="space-y-1">
              <li
                v-for="req in requirements"
                :key="req"
                class="flex items-start gap-2 text-sm text-amber-700"
              >
                <CheckIcon class="w-5 h-5 text-amber-500 shrink-0" />
                <span>{{ req }}</span>
              </li>
            </ul>
          </div>

          <!-- Candidates Table -->
          <div class="space-y-4">
            <!-- Candidate Cards -->
            <div class="grid gap-4">
              <div
                v-for="candidate in paginatedCandidates"
                :key="candidate.id"
                class="bg-white rounded-lg border border-slate-200 p-4 hover:border-sky-200 hover:shadow-sm transition-all"
              >
                <!-- Header -->
                <div class="flex items-start justify-between mb-3">
                  <div class="flex items-center gap-3">
                    <img
                      :src="candidate.avatar"
                      :alt="`${candidate.firstName} ${candidate.lastName}`"
                      class="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <div>
                        <span class="font-medium text-slate-700">{{
                          candidate.firstName
                        }}</span>
                        <span class="font-medium text-slate-700 ml-1">{{
                          candidate.lastName
                        }}</span>
                      </div>
                      <div class="text-xs text-slate-500">
                        {{ candidate.rank }}
                      </div>
                    </div>
                  </div>
                  <span
                    class="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full"
                  >
                    {{ candidate.experience }} ปี
                  </span>
                </div>

                <!-- Content -->
                <div class="space-y-3">
                  <!-- ตำแหน่งปัจจุบัน -->
                  <div>
                    <p class="text-xs text-slate-500 mb-1">ตำแหน่งปัจจุบัน</p>
                    <p class="text-sm text-slate-700">
                      {{ candidate.currentPosition }}
                    </p>
                  </div>

                  <!-- ความเชี่ยวชาญ -->
                  <div>
                    <p class="text-xs text-slate-500 mb-1">ความเชี่ยวชาญ</p>
                    <div class="flex flex-wrap gap-1">
                      <span
                        v-for="skill in candidate.skills"
                        :key="skill"
                        class="px-2 py-0.5 bg-slate-50 text-slate-600 rounded text-xs"
                      >
                        {{ skill }}
                      </span>
                    </div>
                  </div>

                  <!-- สถิติ -->
                  <div class="grid grid-cols-3 gap-2 pt-2">
                    <div class="text-center p-2 bg-slate-50 rounded">
                      <p class="text-xs text-slate-500">โครงการ</p>
                      <p class="font-medium text-slate-700">
                        {{ candidate.stats.projects }}
                      </p>
                    </div>
                    <div class="text-center p-2 bg-slate-50 rounded">
                      <p class="text-xs text-slate-500">การฝึกอบรม</p>
                      <p class="font-medium text-slate-700">
                        {{ candidate.stats.trainings }}
                      </p>
                    </div>
                    <div class="text-center p-2 bg-slate-50 rounded">
                      <p class="text-xs text-slate-500">ใบรับรอง</p>
                      <p class="font-medium text-slate-700">
                        {{ candidate.stats.certifications }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pagination -->
            <div
              class="px-4 py-3 bg-white border border-slate-200 rounded-lg flex items-center justify-between"
            >
              <div class="text-sm text-slate-500">
                แสดง {{ startIndex + 1 }}-{{ endIndex }} จาก
                {{ filteredCandidates.length }} รายการ
              </div>
              <div class="flex gap-1">
                <button
                  @click="currentPage--"
                  :disabled="currentPage === 1"
                  class="px-3 py-1 text-sm border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50"
                >
                  ก่อนหน้า
                </button>
                <button
                  @click="currentPage++"
                  :disabled="currentPage >= totalPages"
                  class="px-3 py-1 text-sm border border-slate-200 rounded hover:bg-slate-50 disabled:opacity-50"
                >
                  ถัดไป
                </button>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- แสดงข้อมูลบุคคลแบบเดิม ถ้าไม่ใช่ตำแหน่งว่าง -->
      <template v-else-if="person">
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
            <h3 class="text-sm font-medium text-slate-700 mb-3">
              ข้อมูลส่วนตัว
            </h3>
            <div
              class="bg-white p-4 rounded-lg border border-slate-200 space-y-3"
            >
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
            <h3 class="text-sm font-medium text-slate-700 mb-3">
              ความเชี่ยวชาญ
            </h3>
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
            <h3 class="text-sm font-medium text-slate-700 mb-3">
              ประวัติการทำงาน
            </h3>
            <div
              class="bg-white rounded-lg border border-slate-200 divide-y divide-slate-200"
            >
              <div v-for="history in workHistory" :key="history.id" class="p-3">
                <div class="flex justify-between items-start">
                  <div>
                    <p class="font-medium text-slate-700">
                      {{ history.position }}
                    </p>
                    <p class="text-sm text-slate-500">
                      {{ history.department }}
                    </p>
                  </div>
                  <span class="text-xs text-slate-500">{{
                    history.period
                  }}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </template>
    </template>

    <!-- No node selected -->
    <template v-else>
      <div class="h-full flex items-center justify-center text-slate-400">
        เลือก Node เพื่อดูข้อมูล
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import {
  XMarkIcon,
  CheckCircleIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowsUpDownIcon,
  CheckIcon,
} from "@heroicons/vue/24/outline";

const emit = defineEmits(["close"]);

const handleClose = () => {
  emit("close");
};

// Props
const props = defineProps({
  selectedNode: {
    type: Object,
    default: null,
  },
});

// Computed properties for node data
const isVacantPosition = computed(() => {
  return props.selectedNode?.data.type === "vacant";
});

const position = computed(() => ({
  title: props.selectedNode?.data.positionTitle || "",
  positionType: props.selectedNode?.data.positionType || "",
}));

const person = computed(() => {
  if (!props.selectedNode || isVacantPosition.value) return null;
  return props.selectedNode.data.person;
});

const requirements = computed(() => {
  if (!isVacantPosition.value) return [];
  return props.selectedNode?.data.requirements || [];
});

const requestStatus = computed(() => {
  if (!isVacantPosition.value) return null;
  return props.selectedNode?.data.requestStatus;
});

const requestDate = computed(() => {
  if (!isVacantPosition.value) return null;
  return props.selectedNode?.data.requestDate;
});

const workHistory = computed(() => {
  if (!props.selectedNode || isVacantPosition.value) return [];
  return [
    {
      id: 1,
      position: props.selectedNode.data.positionTitle,
      department: "ฝ่ายพัฒนาระบบ",
      period: "ปัจจุบัน",
    },
  ];
});

// ข้อมูลผู้สมัครและการค้นหา (คงไว้สำหรับการสาธิต)
const candidates = ref([
  {
    id: 1,
    firstName: "นายทดสอบ",
    lastName: "เทสเตอร์ดี",
    rank: "ชำนาญการ",
    currentPosition: "นักทดสอบระบบ",
    experience: 6,
    skills: [
      "Automated Testing",
      "Performance Testing",
      "API Testing",
      "Test Management",
    ],
    stats: {
      projects: 15,
      trainings: 8,
      certifications: 3,
    },
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=ทดสอบ&backgroundColor=b6e3f4",
  },
  {
    id: 2,
    firstName: "นางสาวทดสอบ",
    lastName: "ออโตเมชั่น",
    rank: "ปฏิบัติการ",
    currentPosition: "นักพัฒนาระบบอัตโนมัติ",
    experience: 4,
    skills: ["Selenium", "Cypress", "Jenkins", "Docker"],
    stats: {
      projects: 12,
      trainings: 6,
      certifications: 2,
    },
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=ออโตเมชั่น&backgroundColor=ffecb3",
  },
  {
    id: 3,
    firstName: "นายคุณภาพ",
    lastName: "ประกันดี",
    rank: "ชำนาญการ",
    currentPosition: "วิศวกรคุณภาพซอฟต์แวร์",
    experience: 7,
    skills: ["Quality Assurance", "Test Planning", "Risk Analysis", "ISTQB"],
    stats: {
      projects: 20,
      trainings: 10,
      certifications: 4,
    },
    avatar:
      "https://api.dicebear.com/7.x/avataaars/svg?seed=คุณภาพ&backgroundColor=c8e6c9",
  },
]);

// การค้นหาและการแบ่งหน้า
const searchQuery = ref("");
const currentPage = ref(1);
const itemsPerPage = 5;

const filteredCandidates = computed(() => {
  const searchLower = searchQuery.value.toLowerCase();
  return candidates.value.filter(
    (candidate) =>
      candidate.firstName.toLowerCase().includes(searchLower) ||
      candidate.lastName.toLowerCase().includes(searchLower) ||
      candidate.currentPosition.toLowerCase().includes(searchLower)
  );
});

const totalPages = computed(() =>
  Math.ceil(filteredCandidates.value.length / itemsPerPage)
);
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const endIndex = computed(() =>
  Math.min(startIndex.value + itemsPerPage, filteredCandidates.value.length)
);

const paginatedCandidates = computed(() => {
  return filteredCandidates.value.slice(startIndex.value, endIndex.value);
});

// Helper function
const formatDate = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>

<style scoped></style>
