import type { Config } from "tailwindcss";
import baseConfig from "@ss-mono/shared/config/tailwind.base.config";

/**
 * SS 앱 전용 Tailwind 설정
 * 공유 설정을 확장하여 사용합니다.
 */
const config: Config = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./button/**/*.{js,jsx,ts,tsx}",
  ],
};

export default config;

