# UI 컴포넌트 라이브러리

이 패키지는 프로젝트의 공유 UI 컴포넌트를 포함하며, Storybook을 통해 컴포넌트를 문서화하고 테스트할 수 있습니다.

## 구조

```
packages/fe/ui/
├── ss/          # 공통 컴포넌트 (모든 앱에서 공유)
├── bgr/         # BGR 앱 전용 컴포넌트
└── .storybook/  # Storybook 설정
```

## Storybook 사용하기

### 설치

```bash
yarn install
```

### 개발 서버 실행

```bash
yarn storybook
```

브라우저에서 `http://localhost:6006`으로 접속하여 Storybook을 확인할 수 있습니다.

### 빌드

```bash
yarn build-storybook
```

빌드된 Storybook은 `storybook-static` 디렉토리에 생성됩니다.

## 컴포넌트 스토리 작성

각 컴포넌트에 대해 `.stories.tsx` 파일을 생성하여 Storybook에 등록할 수 있습니다.

예시:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import MyComponent from './MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Category/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // props here
  },
};
```

## Tailwind CSS

이 패키지는 Tailwind CSS를 사용합니다. 컴포넌트에서 Tailwind 클래스를 사용할 수 있으며, Storybook에서도 자동으로 적용됩니다.

