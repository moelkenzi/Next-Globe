import Globe from "@/components/Globe"
import React from 'react'
import { defaultGlobeConfig } from '@/constants/data'
import Image from "next/image"
import {  Github } from "lucide-react"
import Link from "next/link"
import WhatsAppIcon from "@/components/icons/whatsapp"

const HomePage = () => {
  return (
    <>
    <div>
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow relative w-full overflow-hidden">
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#aca6a636_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e577_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f40_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1d_1px,transparent_1px)] [background-size:320px_320px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="fixed inset-0 bg-[linear-gradient(to_right,#aca6a636_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e577_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f40_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1d_1px,transparent_1px)] [background-size:320px_320px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000000_70%,transparent_100%)] pointer-events-none"></div>
        <div className="fixed left-1/2 top-0 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/5 opacity-10 blur-[100px] pointer-events-none"></div>
        
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <Globe config={{ ...defaultGlobeConfig, width: 300, height: 300 }} />
        </div>
      </main>
      
      <div className="w-full py-10 text-center flex justify-center items-center">
        <div className="container max-w-4xl">
          <div className="flex flex-col items-center justify-center space-y-4">
            
            <div className="flex items-center justify-center gap-8 pt-4">
              <div>
                <Image
                  src="/elkenzi.jpg"
                  alt="Dusgiiye"
                  width={1000}
                  height={1000}
                  className="w-[90px] h-[90px] rounded-full object-cover shadow-lg relative z-10 shadow-slate-600/50"
                />
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-semibold">Mohamed Abdirizak</h4>
                <p className="text-muted-foreground">Founder & CEO Of BarePlatform</p>
                <div className="flex items-center justify-center gap-4">
                  <Link href="https://github.com/moelkenzi" target="_blank" >
                    <div className="inline-flex items-center rounded-full bg-secondary/10 mt-4 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-secondary transform-none hover:shadow-lg hover:shadow-slate-800/50 transition-shadow duration-300 ease-in-out p-1">
                      <Github className="mr-2 h-4 w-4" />
                      <span className="font-semibold">Elkenzi</span>
                    </div>
                  </Link>
                  <Link href="https://wa.me/+252613734134" target="_blank" >
                    <div className="inline-flex items-center rounded-full bg-secondary/10 mt-4 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-secondary transform-none hover:shadow-lg hover:shadow-slate-800/50 transition-shadow duration-300 ease-in-out p-1">
                      <WhatsAppIcon className="mr-2 h-[14px] w-[14px] text-green-400" />
                        <span className="font-semibold">Hit me up.</span>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className="h-16 w-[2px] bg-primary/20 rounded-full"></div>
              
              <div>
                <Image
                  src="/bareplatform.png"
                  alt="Dusgiiye"
                  width={1000}
                  height={1000}
                  className="w-[90px] h-[90px] rounded-full object-cover shadow-lg relative z-10 shadow-slate-600/50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  )
} 

export default HomePage