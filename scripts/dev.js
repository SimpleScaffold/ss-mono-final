#!/usr/bin/env node

const { spawn } = require('child_process');

// yarn dev 또는 yarn dev test 같은 인자 처리
const args = process.argv.slice(2);
const filterArg = args[0];

// turbo run dev 실행
const turboArgs = ['run', 'dev'];

// 필터가 지정된 경우
if (filterArg) {
  // test, main, admin 같은 이름이면 경로로 변환
  const filterMap = {
    'test': './apps/fe/test',
    'main': './apps/fe/main',
    'admin': './apps/fe/admin',
  };
  
  const filter = filterMap[filterArg] || filterArg;
  turboArgs.push('--filter', filter);
}

const turbo = spawn('turbo', turboArgs, {
  stdio: 'inherit',
  shell: true,
});

turbo.on('close', (code) => {
  process.exit(code);
});

