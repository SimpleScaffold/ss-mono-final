import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * 클래스명을 병합하는 유틸리티 함수
 * clsx와 tailwind-merge를 결합하여 Tailwind CSS 클래스 충돌을 자동으로 해결합니다.
 * 
 * @param inputs - 병합할 클래스명들
 * @returns 병합된 클래스명 문자열
 * 
 * @example
 * ```tsx
 * cn("px-2 py-1", "px-4") // "py-1 px-4" (px-2가 px-4로 덮어씌워짐)
 * cn("bg-red-500", isActive && "bg-blue-500") // 조건부 클래스명
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

