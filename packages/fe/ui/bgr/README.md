# @ss-mono/fe/ui/bgr

BGR 앱 전용 컴포넌트 라이브러리입니다. BGR 앱에서만 사용하는 컴포넌트를 포함하며, SS 공통 컴포넌트를 자동으로 re-export합니다.

## 설치

```bash
yarn add @ss-mono/fe/ui/bgr
```

## 사용 방법

### 1. 스타일 import

앱의 진입점에서 CSS를 import하세요:

```tsx
import "@ss-mono/fe/ui/bgr/styles";
```

### 2. 컴포넌트 사용

SS 공통 컴포넌트와 BGR 전용 컴포넌트를 모두 사용할 수 있습니다:

```tsx
// SS 공통 컴포넌트 (자동으로 re-export됨)
import { Button } from "@ss-mono/fe/ui/bgr";

// BGR 전용 컴포넌트
import { BGRButton } from "@ss-mono/fe/ui/bgr";

function App() {
  return (
    <>
      <Button>공통 버튼</Button>
      <BGRButton>BGR 전용 버튼</BGRButton>
    </>
  );
}
```

### 3. shadcn/ui 컴포넌트 추가

이 패키지에 shadcn/ui 컴포넌트를 추가하려면:

```bash
cd packages/fe/ui/bgr
npx shadcn@latest add button
```

컴포넌트는 `src/components/ui/` 디렉토리에 추가됩니다.

## 구조

```
bgr/
├── src/
│   ├── components/      # BGR 전용 컴포넌트
│   │   └── ui/          # shadcn/ui 컴포넌트
│   ├── lib/
│   │   └── utils.ts     # 유틸리티 함수 (cn 등)
│   ├── styles/
│   │   └── globals.css  # Tailwind CSS 스타일
│   └── index.ts         # Export 파일 (SS 컴포넌트 re-export 포함)
├── components.json       # shadcn 설정
├── tailwind.config.ts   # Tailwind 설정
└── package.json
```

## 의존성

- `@ss-mono/fe/ui/ss`: SS 공통 컴포넌트 (자동으로 re-export됨)

## Tailwind CSS

이 패키지는 공유 Tailwind 설정(`@ss-mono/shared/config/tailwind.base.config`)을 확장합니다.

## shadcn/ui

shadcn/ui 컴포넌트를 사용할 수 있습니다. `components.json` 파일에서 설정을 확인하세요.

