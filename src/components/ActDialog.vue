<template>
  <TransitionRoot appear as="template" :show="show">
    <div
      class="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-10 w-full 2xl:max-w-lg max-w-md overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
    >
      <TransitionChild
        as="template"
        enter="transition-opacity ease-in duration-100"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="transition-opacity ease-out duration-100"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="py-2 flex flex-col" id="act-dialog-content">
          <!-- <div
            class="flex items-center text-base py-4 gap-4 px-8 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
          >
            <PencilIcon class="w-6 h-6" />
            Edit
          </div> -->
          <div
            class="flex items-center text-base py-4 gap-4 px-8 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
          >
            <PlusIcon class="w-6 h-6" />
            Add
          </div>
          <div
            class="flex items-center text-base py-4 gap-4 px-8 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
          >
            <ArrowPathIcon class="w-6 h-6" />
            Rewrite
          </div>

          <div
            class="flex items-center text-base py-4 gap-4 px-8 text-red-500 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
          >
            <TrashIcon class="w-6 h-6" />
            Delete
          </div>
        </div>
      </TransitionChild>
    </div>
  </TransitionRoot>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";
import { TransitionChild, TransitionRoot } from "@headlessui/vue";
import {
  PencilIcon,
  ArrowPathIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/vue/24/outline";

const emit = defineEmits(["forceClose"]);

const props = defineProps({
  show: {
    type: Boolean,
    required: false,
  },
});

function forceClose() {
  emit("forceClose");
}
</script>
