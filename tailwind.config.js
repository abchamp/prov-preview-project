import { MM_NODE_COLORS } from "./src/utils/selectNodeHelper";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "mm-primary-one": MM_NODE_COLORS.PRIMARY_ONE_NUM,
        "mm-primary-two": MM_NODE_COLORS.PRIMARY_TWO_NUM,
        "mm-primary-three": MM_NODE_COLORS.PRIMARY_THREE_NUM,
        "mm-primary-four": MM_NODE_COLORS.PRIMARY_FOUR_NUM,
        "mm-secondary-one": MM_NODE_COLORS.SECONDARY_ONE_NUM,
        "mm-secondary-two": MM_NODE_COLORS.SECONDARY_TWO_NUM,
        "mm-accent-one": MM_NODE_COLORS.ACCENT_ONE_NUM,
        "mm-accent-two": MM_NODE_COLORS.ACCENT_TWO_NUM,
        "mm-base-one": MM_NODE_COLORS.BASE_ONE_NUM,
        "mm-base-two": MM_NODE_COLORS.BASE_TWO_NUM,
      },
    },
  },
  plugins: [],
};
