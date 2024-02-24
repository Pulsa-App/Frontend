import Image from 'next/image'
import React from 'react'
import AppStore from '@/public/overview/download app.svg'
import PlayStore from '@/public/overview/download play.svg'
import Link from 'next/link'

const Download = () => {
  return (
    <div>
      <div className="my-10 flex flex-col items-center   py-10">


        <h1 className="text-3xl font-bold text-center">Belum Coba Fast Change?</h1>
        <p className="text-gray-500 text-xl mt-4 w-2/3 text-center ">Coba Fast Change sekarang sebelum kita tutup permanen. Unduh aplikasi kami di </p>
        <div className="flex gap-5 my-5">
          <Link href={'/'}><Image src={AppStore} alt='download' width={150} /></Link>
          <Link href={'/'}><Image src={PlayStore} alt='download' width={150} /></Link>
        </div>
      </div>
    </div>
  )
}

export default Download