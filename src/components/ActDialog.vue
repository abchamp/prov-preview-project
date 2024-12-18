<template>
  <TransitionRoot appear as="template" :show="show">
    <Dialog as="div" class="h-dvh relative z-20">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0" @click="forceClose"></div>
      </TransitionChild>

      <div class="h-80">
        <TransitionChild
          as="template"
          enter="transition-opacity ease-in duration-100"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-out duration-100"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-0 w-full 2xl:max-w-lg max-w-md overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all"
          >
            <div class="p-4 flex flex-col gap-2">
              <div
                class="text-base text-center p-2 border-2 rounded-md cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
              >
                Add
              </div>
              <div
                class="text-base text-center p-2 border-2 rounded-md cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
              >
                Rewrite
              </div>
              <div
                class="text-base text-center p-2 border-2 rounded-md cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
              >
                Delete
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, watch, defineEmits, defineProps } from "vue";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

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
