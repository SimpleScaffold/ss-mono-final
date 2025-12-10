import React from 'react'
import BGRbutton from '@ss-mono/fe/ui/bgr/button/BGRbutton'

function App() {
  return (
    <div className="p-8 flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-blue-600">모노레포 테스트 앱</h1>
      <p className="text-gray-700">BGRbutton 컴포넌트 사용 예시:</p>
      <BGRbutton />
    </div>
  )
}

export default App
