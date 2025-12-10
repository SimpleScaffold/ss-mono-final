import React from 'react'
import BGRbutton from '@ss-mono/fe/ui/bgr/button/BGRbutton'

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h1>모노레포 테스트 앱</h1>
      <p>BGRbutton 컴포넌트 사용 예시:</p>
      <BGRbutton />
    </div>
  )
}

export default App
