import Globe from "@/components/Globe"
import React from 'react'
import { defaultGlobeConfig } from '@/constants/data'

const HomePage = () => {
  return(
    <div className="flex justify-center items-center min-h-screen">
      <Globe config={{ ...defaultGlobeConfig, width: 600, height: 600 }} />
    </div>
  )
} 

export default HomePage