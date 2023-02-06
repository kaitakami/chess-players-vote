import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center">
      <div className="animate-ping h-5 w-5 bg-blue-900 rounded-full"></div>
      <div className="animate-ping h-5 w-5 bg-blue-900 rounded-full mx-4"></div>
      <div className="animate-ping h-5 w-5 bg-blue-900 rounded-full"></div>
    </div>
  )
}

export default Loading
