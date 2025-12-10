# shadcn/ui 컴포넌트 관리

이 폴더는 [shadcn/ui](https://ui.shadcn.com/) 컴포넌트들을 관리하는 공간입니다.

## 구조

```
shadcn/
├── components/     # shadcn/ui 컴포넌트들이 설치되는 위치
├── utils/          # 유틸리티 함수들 (cn 함수 등)
├── layout/         # 레이아웃 관련 컴포넌트
└── components.json # shadcn CLI 설정 파일
```

## 사용 방법

### 1. 컴포넌트 추가하기

shadcn/ui CLI를 사용하여 컴포넌트를 추가할 수 있습니다:

```bash
# 이 디렉토리에서 실행
npx shadcn@latest add [component-name]

# 예시
npx shadcn@latest add button
npx shadcn@latest add input
npx shadcn@latest add card
```

### 2. 컴포넌트 사용하기

설치된 컴포넌트는 다음과 같이 import하여 사용할 수 있습니다:

```tsx
import { Button } from "@/lib/shadcn/components/ui/button"
import { Input } from "@/lib/shadcn/components/ui/input"
import { cn } from "@/lib/shadcn/utils"

export function MyComponent() {
  return (
    <div className={cn("flex gap-2")}>
      <Input placeholder="입력하세요" />
      <Button>클릭</Button>
    </div>
  )
}
```

### 3. 클래스명 병합 유틸리티 (cn)

`cn` 함수는 `clsx`와 `tailwind-merge`를 결합하여 Tailwind CSS 클래스명을 안전하게 병합합니다:

```tsx
import { cn } from "@/lib/shadcn/utils"

// 기본 사용
cn("px-2 py-1", "px-4") // "py-1 px-4" (px-2가 px-4로 덮어씌워짐)

// 조건부 클래스명
cn("base-class", isActive && "active-class", isDisabled && "disabled-class")

// 객체 형태
cn({
  "text-red-500": isError,
  "text-green-500": isSuccess,
})
```

## 설정

`components.json` 파일에서 shadcn/ui의 설정을 관리할 수 있습니다:

- **style**: 컴포넌트 스타일 (`default`, `new-york`)
- **rsc**: React Server Components 사용 여부
- **tsx**: TypeScript 사용 여부
- **tailwind**: Tailwind CSS 설정
- **aliases**: 경로 별칭 설정

## 주의사항

- 컴포넌트는 이 폴더에 직접 설치되며, 프로젝트의 다른 부분에서 재사용할 수 있습니다.
- 컴포넌트를 수정할 때는 원본을 직접 편집할 수 있습니다 (shadcn/ui의 특징).
- 새로운 컴포넌트를 추가할 때는 `components.json`의 설정을 확인하세요.

## 참고 자료

- [shadcn/ui 공식 문서](https://ui.shadcn.com/)
- [shadcn/ui 컴포넌트 목록](https://ui.shadcn.com/docs/components)

