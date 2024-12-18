<template>
  <div id="left-content-panel" class="h-full flex flex-col p-4">
    <!-- Header Section -->
    <div class="flex justify-between items-center mb-4">
      <div>
        <h1 class="text-xl font-medium text-slate-700">หน่วยงาน</h1>
        <p class="text-slate-500 text-sm">ระบบจัดการข้อมูลหน่วยงาน</p>
      </div>
      <button
        class="bg-sky-500 hover:bg-sky-600 text-white px-3 py-2 rounded-lg flex items-center gap-1.5 transition-all duration-200 shadow-sm shadow-sky-100 hover:shadow-md hover:shadow-sky-100 whitespace-nowrap text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clip-rule="evenodd"
          />
        </svg>
        เพิ่มหน่วยงาน
      </button>
    </div>

    <!-- Search and Sort Section -->
    <div class="flex gap-2 mb-4">
      <div class="relative flex-1">
        <input
          type="text"
          placeholder="ค้นหาหน่วยงาน..."
          class="w-full pl-9 pr-3 py-2 border border-slate-200 rounded-lg bg-white/70 focus:ring-2 focus:ring-sky-100 focus:border-sky-300 outline-none transition-all duration-200 text-slate-600 placeholder:text-slate-400 text-sm"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-slate-400 absolute left-3 top-2.5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <button
        class="px-3 py-2 border border-slate-200 rounded-lg hover:bg-white/80 flex items-center gap-1.5 transition-all duration-200 text-slate-600 whitespace-nowrap text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4 text-slate-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3z"
          />
        </svg>
        เรียงลำดับ
      </button>
    </div>

    <!-- Organizations List -->
    <div class="flex-1 overflow-y-auto space-y-3 pr-1">
      <!-- Organization Card -->
      <div
        class="group bg-white p-4 rounded-lg border border-slate-200 hover:border-sky-200 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-slate-100/80 active:scale-[0.99]"
      >
        <div class="flex justify-between items-start gap-3 mb-2">
          <h3
            class="font-medium text-base text-slate-700 group-hover:text-sky-600 transition-colors"
          >
            ฝ่ายพัฒนาระบบ
          </h3>
          <span
            class="text-xs font-medium px-2 py-0.5 rounded-full bg-sky-50 text-sky-600 shrink-0"
          >
            กำลังดำเนินการ
          </span>
        </div>
        <p
          class="text-slate-500 text-sm mb-3 line-clamp-2 leading-relaxed break-words hyphens-auto"
        >
          พัฒนาและดูแลระบบสารสนเทศขององค์กร
          รวมถึงการวางแผนและปรับปรุงระบบให้ทันสมัย
          เพื่อเพิ่มประสิทธิภาพการทำงาน...
        </p>
        <div class="space-y-2">
          <div class="flex justify-between text-sm items-center">
            <span class="text-slate-500">กำลังพล</span>
            <span class="font-medium text-slate-700">15/20</span>
          </div>
          <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-amber-400/80 rounded-full transition-all"
              style="width: 75%"
            ></div>
          </div>
        </div>
      </div>

      <!-- Another Organization Card -->
      <div
        class="group bg-white p-4 rounded-lg border border-slate-200 hover:border-sky-200 cursor-pointer transition-all duration-200 hover:shadow-lg hover:shadow-slate-100/80 active:scale-[0.99]"
      >
        <div class="flex justify-between items-start gap-3 mb-2">
          <h3
            class="font-medium text-base text-slate-700 group-hover:text-sky-600 transition-colors"
          >
            ฝ่ายบริหารงานทั่วไป
          </h3>
          <span
            class="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 shrink-0"
          >
            พร้อมปฏิบัติงาน
          </span>
        </div>
        <p
          class="text-slate-500 text-sm mb-3 line-clamp-2 leading-relaxed break-words hyphens-auto"
        >
          ดูแลงานด้านการบริหารจัดการทั่วไป งานเอกสาร และประสานงานระหว่างหน่วยงาน
          เพื่อให้การดำเนินงานเป็นไปอย่างราบรื่น...
        </p>
        <div class="space-y-2">
          <div class="flex justify-between text-sm items-center">
            <span class="text-slate-500">กำลังพล</span>
            <span class="font-medium text-slate-700">10/10</span>
          </div>
          <div class="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div
              class="h-full bg-emerald-400/80 rounded-full transition-all"
              style="width: 100%"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
