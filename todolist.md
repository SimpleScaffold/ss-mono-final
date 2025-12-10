# 모노레포 구축 Todo List

## 1. 기본 설정 (우선순위: 높음)

### 1.1 Turbo 설정
- [ ] `turbo.json` 파일 생성 및 파이프라인 설정
- [ ] 빌드, dev, lint, check-types 태스크 정의
- [ ] 캐싱 전략 설정

### 1.2 Workspace 설정
- [ ] 루트 `package.json`에 workspaces 추가
- [ ] 각 앱/패키지의 `package.json` 생성

### 1.3 TypeScript 설정
- [ ] 루트 `tsconfig.json` 생성
- [ ] `packages/shared/config/tsconfig.base.json` 생성
- [ ] 각 앱/패키지에 `tsconfig.json` 생성 (extends 사용)

## 2. 공유 설정 패키지 (`packages/shared/config`)

- [ ] `packages/shared/config/` 디렉토리 생성
- [ ] `tsconfig.base.json` 생성
- [ ] `tailwind.base.config.ts` 생성
- [ ] `eslint.base.js` 생성
- [ ] `package.json` 생성
- [ ] `README.md` 작성

## 3. Frontend 앱 구조

### 3.1 Main MFE 구조
- [ ] `apps/fe/main/shell/` - Next.js Host 생성
  - [ ] Next.js 설정
  - [ ] Module Federation 설정
  - [ ] `package.json` 생성
- [ ] `apps/fe/main/product/` - Vite Remote 1 생성
  - [ ] Vite 설정
  - [ ] Module Federation 설정
  - [ ] `package.json` 생성
- [ ] `apps/fe/main/order/` - Vite Remote 2 생성
  - [ ] Vite 설정
  - [ ] Module Federation 설정
  - [ ] `package.json` 생성
- [ ] `apps/fe/main/profile/` - Vite Remote 3 생성
  - [ ] Vite 설정
  - [ ] Module Federation 설정
  - [ ] `package.json` 생성
- [ ] `apps/fe/main/README.md` 작성

### 3.2 Admin & Seller
- [ ] `apps/fe/admin/` - Admin CSR 앱 완성
  - [ ] Vite/Next.js 설정
  - [ ] `package.json` 생성
- [ ] `apps/fe/seller/` - Seller CSR 앱 생성
  - [ ] Vite/Next.js 설정
  - [ ] `package.json` 생성
- [ ] `apps/fe/README.md` 작성



## 5. Frontend 패키지 (`packages/fe/`)

### 5.1 UI 컴포넌트 라이브러리

- [ ] `packages/fe/ui/` 기본 구조 설정
  - [ ] `package.json` 생성
  - [ ] `tsconfig.json` 생성
  - [ ] `src/` 디렉토리 구조 생성
- [ ] Tailwind CSS 설정
  - [ ] `tailwind.config.ts` 생성 (공유 설정 확장)
  - [ ] `postcss.config.js` 생성
  - [ ] `src/styles/globals.css` 생성 (Tailwind directives 포함)
  - [ ] `package.json`에 tailwindcss, postcss, autoprefixer 의존성 추가
- [ ] shadcn/ui 설정
  - [ ] `components.json` 생성 (shadcn 초기화)
  - [ ] `src/components/ui/` 디렉토리 생성
  - [ ] `src/lib/utils.ts` 생성 (cn 유틸리티 함수)
  - [ ] `src/lib/cn.ts` 생성 (클래스명 병합 유틸리티)
  - [ ] shadcn/ui 초기 컴포넌트 추가 (button, input 등)
- [ ] 앱별 UI 컴포넌트 구조
  - [ ] `packages/fe/ui/ss/` - **공통 컴포넌트** (모든 앱에서 공유)
    - [ ] `src/components/` 디렉토리
    - [ ] `src/index.ts` 생성 (export)
    - [ ] `package.json` 생성
    - [ ] Tailwind CSS 및 shadcn/ui 설정 공유
  - [ ] `packages/fe/ui/bgr/` - BGR 앱 전용 컴포넌트
    - [ ] `src/components/` 디렉토리
    - [ ] `src/index.ts` 생성 (export)
    - [ ] `package.json` 생성
    - [ ] `packages/fe/ui/ss` 의존성 추가
  - [ ] `packages/fe/ui/main/` - Main 앱 전용 컴포넌트 (선택사항)
    - [ ] `src/components/` 디렉토리
    - [ ] `src/index.ts` 생성 (export)
    - [ ] `package.json` 생성
    - [ ] `packages/fe/ui/ss` 의존성 추가
  - [ ] `packages/fe/ui/admin/` - Admin 앱 전용 컴포넌트 (선택사항)
    - [ ] `src/components/` 디렉토리
    - [ ] `src/index.ts` 생성 (export)
    - [ ] `package.json` 생성
    - [ ] `packages/fe/ui/ss` 의존성 추가
  - [ ] `packages/fe/ui/seller/` - Seller 앱 전용 컴포넌트 (선택사항)
    - [ ] `src/components/` 디렉토리
    - [ ] `src/index.ts` 생성 (export)
    - [ ] `package.json` 생성
    - [ ] `packages/fe/ui/ss` 의존성 추가
  - [ ] 각 앱별 UI 패키지는 `ss` 패키지를 의존성으로 사용하여 공통 컴포넌트 활용
- [ ] Storybook 설정 (`.storybook/` 디렉토리)
  - [ ] Storybook 초기화 및 설정
  - [ ] Tailwind CSS 연동 설정
  - [ ] 컴포넌트 스토리 작성 예시

### 5.2 기타 FE 패키지
- [ ] `packages/fe/icons/` (또는 `fe-icons/`) 생성
  - [ ] `src/icons/` 디렉토리
  - [ ] `src/index.ts` 생성
  - [ ] `package.json` 생성
- [ ] `packages/fe/utils/` 구조 정리
  - [ ] `src/index.ts` 생성
  - [ ] `package.json` 생성
- [ ] `packages/fe/api-client/` 생성
  - [ ] `src/client.ts` 생성 (Axios 기반)
  - [ ] `src/auth.ts` 생성
  - [ ] `src/index.ts` 생성
  - [ ] `package.json` 생성
  - [ ] `README.md` 작성
- [ ] `packages/fe/types/` 생성
  - [ ] `src/index.ts` 생성
  - [ ] `package.json` 생성

## 6. Backend 패키지 (`packages/be/`)

- [ ] `packages/be/utils/` 구조 정리
  - [ ] `src/index.ts` 생성
  - [ ] `package.json` 생성
- [ ] `packages/be/types/` 생성
  - [ ] `src/index.ts` 생성
  - [ ] `package.json` 생성
- [ ] `packages/be/middleware/` 생성
  - [ ] `src/index.ts` 생성
  - [ ] `package.json` 생성

## 7. 공유 패키지 (`packages/shared/`)

- [ ] `packages/shared/types/` 생성
  - [ ] `src/index.ts` 생성 (DTO, Domain Model)
  - [ ] `package.json` 생성
- [ ] `packages/shared/utils/` 생성
  - [ ] `src/index.ts` 생성
  - [ ] `package.json` 생성
- [ ] `packages/shared/constants/` 생성
  - [ ] `src/index.ts` 생성
  - [ ] `package.json` 생성
- [ ] `packages/shared/schema/` 생성
  - [ ] `src/index.ts` 생성 (Zod/Joi 스키마)
  - [ ] `package.json` 생성

## 8. 문서 시스템 (`docs/`)

- [ ] `docs/00-overview/` 디렉토리 생성
- [ ] `docs/01-onboarding/` 디렉토리 생성
- [ ] `docs/02-architecture/` 디렉토리 생성
- [ ] `docs/03-frontend/` 디렉토리 생성
- [ ] `docs/04-backend/` 디렉토리 생성
- [ ] `docs/05-infra/` 디렉토리 생성
- [ ] `docs/06-troubleshooting/` 디렉토리 생성

## 9. 인프라 설정 (`infra/`)

- [ ] `infra/k8s/` 디렉토리 구조 생성
- [ ] `infra/nginx/` 디렉토리 생성
- [ ] `infra/docker/` 디렉토리 생성
  - [ ] 각 서비스별 Dockerfile 생성
  - [ ] docker-compose.yml 생성

## 10. 개발 환경 설정

- [ ] ESLint 설정 (루트 + 각 패키지)
- [ ] Prettier 설정 (루트에 이미 있음, 확인 필요)
- [ ] `.prettierrc` 또는 `prettier.config.js` 생성
- [ ] `.prettierignore` 생성
- [ ] 환경 변수 예시 파일 생성 (`.env.example`)

## 11. 테스트 설정

- [ ] Jest/Vitest 설정 (루트)
- [ ] 각 앱/패키지에 테스트 설정 추가
- [ ] 테스트 스크립트 추가

## 12. CI/CD 설정

- [ ] GitHub Actions / GitLab CI 설정
- [ ] 빌드 파이프라인 설정
- [ ] 테스트 파이프라인 설정
- [ ] 배포 파이프라인 설정

## 13. 루트 레벨 파일

- [ ] `README.md` 작성 (프로젝트 개요)
- [ ] `CONTRIBUTING.md` 작성
- [ ] `CHANGELOG.md` 생성

## 참고사항

- 각 패키지의 `package.json`에는 적절한 name, version, dependencies 설정 필요
- 모든 TypeScript 프로젝트는 `packages/shared/config/tsconfig.base.json`을 extends
- 패키지 간 의존성은 workspace 프로토콜 사용 (`workspace:*`)
- MFE 설정 시 Module Federation 플러그인 설정 필요