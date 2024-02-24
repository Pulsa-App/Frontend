import React from 'react'
import OverviewImage from "@/public/overview/Overview 1 1.png"
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex items-center justify-center flex-col p-20 my-10 ">
        <div className="text-5xl font-bold text-center flex flex-col gap-2">
          <h1>Punya Pulsa Tidak Terpakai?</h1>
          <h1>Coba Jadiin Uang Aja</h1>
        </div>
        <div className="w-3/4 text-center mt-4">
          <p className="text-gray-500 text-xl">Fast Change adalah jasa untuk menukarkan pulsa menjadi uang dengan rate tertinggi. Menghadirkan kemudahan untuk menukarkan pulsa, serta proses yang cepat dan keamanan terjamin</p>
        </div>

        <div className="my-8">
          <Image src={OverviewImage} width={300} alt="Overview" />
        </div>
      </div>
  )
}

export default Hero