repo/
├── apps/
│   ├── fe/
│   │   ├── main/
│   │   │   ├── shell/                           # Next.js Host (MFE Shell)
│   │   │   ├── product/                         # Vite Remote 1
│   │   │   ├── order/                           # Vite Remote 2
│   │   │   ├── profile/                         # Vite Remote 3
│   │   │   └── README.md
│   │   │
│   │   ├── admin/                               # Admin CSR
│   │   ├── seller/                              # Seller CSR
│   │   └── README.md
│   │
│   ├── be/
│   │   ├── gateway/                             # API Gateway / BFF
│   │   ├── user-service/
│   │   ├── product-service/
│   │   └── README.md
│   │
│   └── README.md
│
├── packages/
│   ├── fe/                                      # FE 전용 패키지 그룹
│   │   ├── ui/                                  # UI 컴포넌트 라이브러리 (Shadcn 기반)
│   │   │   ├── src/
│   │   │   │   ├── components/
│   │   │   │   │   ├── atoms/                   # Button, Text, Input 등
│   │   │   │   │   ├── molecules/               # FormGroup, Card 등
│   │   │   │   │   ├── organisms/               # Header, Footer 등
│   │   │   │   │   └── shadcn/                  # shadcn/ui auto-generated
│   │   │   │   ├── styles/                      # Tailwind base + tokens
│   │   │   │   ├── hooks/                       # UI-only hooks (useToast 등)
│   │   │   │   └── index.ts
│   │   │   ├── .storybook/                      # Storybook for UI components
│   │   │   ├── tailwind.config.ts
│   │   │   ├── package.json
│   │   │   └── README.md
│   │   │
│   │   ├── fe-icons/                            # FE 전용 아이콘 패키지
│   │   │   ├── src/
│   │   │   │   ├── icons/
│   │   │   │   └── index.ts
│   │   │
│   │   ├── fe-utils/                            # FE-only 유틸 현재 또는 미래 확장
│   │   │   └── src/
│   │   │       └── index.ts
│   │   │
│   │   ├── api-client/                          # Axios 기반 FE API Layer
│   │   │   ├── src/
│   │   │   │   ├── client.ts
│   │   │   │   ├── auth.ts
│   │   │   │   └── index.ts
│   │   │   └── README.md
│   │   │
│   │   └── fe-types/                            # FE 전용 타입 (ViewModel 등)
│   │       └── src/
│   │           └── index.ts
│   │
│   ├── be/                                      # BE 전용 패키지 그룹
│   │   ├── be-utils/
│   │   │   └── src/
│   │   │       └── index.ts
│   │   ├── be-types/
│   │   │   └── src/
│   │   │       └── index.ts
│   │   └── middleware/
│   │       └── src/
│   │           └── index.ts
│   │
│   └── shared/                                  # FE+BE 공통 코드
│       ├── types/                               # DTO, Domain Model
│       │   └── src/
│       │       └── index.ts
│       ├── utils/                               # FE/BE 공용 유틸
│       │   └── src/
│       │       └── index.ts
│       ├── constants/                           # 공통 상수
│       │   └── src/
│       │       └── index.ts
│       ├── schema/                              # Zod/Joi 등 검증 스키마
│       │   └── src/
│       │       └── index.ts
│       └── config/                              # TSConfig/Lint/Tailwind 설정 공유
│           ├── tsconfig.base.json
│           ├── tailwind.base.config.ts
│           ├── eslint.base.js
│           └── README.md
│
├── docs/                                        # 중앙 문서 시스템 (번호 정렬)
│   ├── 00-overview/
│   ├── 01-onboarding/
│   ├── 02-architecture/
│   ├── 03-frontend/
│   ├── 04-backend/
│   ├── 05-infra/
│   └── 06-troubleshooting/
│
├── infra/                                       # K8s / Docker / Nginx
│   ├── k8s/
│   ├── nginx/
│   └── docker/
│
├── turbo.json
├── package.json
└── tsconfig.base.json
