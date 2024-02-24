import React from 'react'
import IconTelkomsel from "@/public/provider/Telkomsel 1.svg"
import IconXl from "@/public/provider/XL 1.svg"
import IconLive from "@/public/provider/Live 1.svg"
import IconAxis from "@/public/provider/AXIS 1.svg"
import IconSmartfren from "@/public/provider/Smartfren 1.svg"
import IconTri from "@/public/provider/Tri 1.svg"
import IconIm3 from "@/public/provider/IM3 1.svg"
import IconByU from "@/public/provider/by 1.svg"
import Image from 'next/image'
import { Progress } from 'flowbite-react'

const Rate = () => {


  const listRate = [
    {
      image: IconTelkomsel,
      provider: 'Telkomsel',
      rate: 78
    },
    {
      image: IconXl,
      provider: 'XL',
      rate: 82
    },
    {
      image: IconAxis,
      provider: 'Axis',
      rate: 79
    },
    {
      image: IconByU,
      provider: 'ByU',
      rate: 85
    },
    {
      image: IconIm3,
      provider: 'Im3',
      rate: 81
    },
    {
      image: IconLive,
      provider: 'Live',
      rate: 79
    },
    {
      image: IconTri,
      provider: 'Tri',
      rate: 83
    },
    {
      image: IconSmartfren,
      provider: 'Smartfren',
      rate: 81
    },
  ]
  return (
    <div className=' my-10 py-10 flex flex-col gap-10'>
        <h1 className="text-3xl font-bold text-center">Informasi Rate Pulsa Fast Change</h1>

        <div className="grid-cols-4 grid gap-20 mx-20">
          {listRate.map(item => (

            <div className="">
              <div className="border-2 border-blue-500 rounded-xl p-4">
                <div>
                  <div><Image src={item.image} width={100} alt="Overview" /></div>
                  <h1 className="text-xl font-bold mt-2">{item.provider}</h1>
                </div>
                <div className="my-4 flex flex-col gap-2">
                  <p className="text-sm">Rate tukar saat ini</p>
                  <p className="text-4xl font-bold">{item.rate}%</p>
                  <Progress progress={item.rate} color="purple" />
                </div>
                <p className="text-sm">*Rate bisa berubah sewaktu-waktu</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default Rate