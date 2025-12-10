# @ss-mono/fe/ui/ss

SS 앱 공통 컴포넌트 라이브러리입니다. 모든 앱에서 공유하는 컴포넌트를 포함합니다.

## 설치

```bash
yarn add @ss-mono/fe/ui/ss
```

## 사용 방법

### 1. 스타일 import

앱의 진입점에서 CSS를 import하세요:

```tsx
import "@ss-mono/fe/ui/ss/styles";
```

### 2. 컴포넌트 사용

```tsx
import { Button } from "@ss-mono/fe/ui/ss";

function App() {
  return <Button>Click me</Button>;
}
```

### 3. shadcn/ui 컴포넌트 추가

이 패키지에 shadcn/ui 컴포넌트를 추가하려면:

```bash
cd packages/fe/ui/ss
npx shadcn@latest add button
```

컴포넌트는 `src/components/ui/` 디렉토리에 추가됩니다.

## 구조

```
ss/
├── src/
│   ├── components/      # 공통 컴포넌트
│   │   └── ui/          # shadcn/ui 컴포넌트
│   ├── lib/
│   │   └── utils.ts     # 유틸리티 함수 (cn 등)
│   ├── styles/
│   │   └── globals.css  # Tailwind CSS 스타일
│   └── index.ts         # Export 파일
├── components.json       # shadcn 설정
├── tailwind.config.ts   # Tailwind 설정
└── package.json
```

## Tailwind CSS

이 패키지는 공유 Tailwind 설정(`@ss-mono/shared/config/tailwind.base.config`)을 확장합니다.

## shadcn/ui

shadcn/ui 컴포넌트를 사용할 수 있습니다. `components.json` 파일에서 설정을 확인하세요.

