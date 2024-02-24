import React from 'react'
import Layout from "@/components/LandingPage/Layout/index"
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

const Blog = () => {

  const listBlog = [
    {
      title: 'Tutorial transfer pulsa Telkomsel',
      desc: 'Isi Form di aplikasi ataupun di samping dengan data yang telah diminta, Setelah semua terisi click Convert sekarang atau lanjutkan'
    },
    {
      title: 'Tutorial transfer pulsa Axis',
      desc: 'Isi Form di aplikasi ataupun di samping dengan data yang telah diminta, Setelah semua terisi click Convert sekarang atau lanjutkan'
    },
    {
      title: 'Tutorial transfer pulsa Live On',
      desc: 'Isi Form di aplikasi ataupun di samping dengan data yang telah diminta, Setelah semua terisi click Convert sekarang atau lanjutkan'
    },
    {
      title: 'Tutorial transfer pulsa Indosat',
      desc: 'Isi Form di aplikasi ataupun di samping dengan data yang telah diminta, Setelah semua terisi click Convert sekarang atau lanjutkan'
    },
    {
      title: 'Tutorial transfer pulsa Three',
      desc: 'Isi Form di aplikasi ataupun di samping dengan data yang telah diminta, Setelah semua terisi click Convert sekarang atau lanjutkan'
    },
    {
      title: 'Tutorial transfer pulsa By.u',
      desc: 'Isi Form di aplikasi ataupun di samping dengan data yang telah diminta, Setelah semua terisi click Convert sekarang atau lanjutkan'
    },
    {
      title: 'Tutorial transfer pulsa Smartfren',
      desc: 'Isi Form di aplikasi ataupun di samping dengan data yang telah diminta, Setelah semua terisi click Convert sekarang atau lanjutkan'
    },
  ]
  return (
    <Layout>
      <div className="my-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">Blog Kami</h1>
        <p className="text-gray-500 text-xl mt-4 w-1/2 text-center ">Cerita mengenai kami, tips & trick, maupun promo ekslusif. Cari tahu semuanya disini</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mx-10">
  {listBlog.map((item, index) => (
    <div className={`gap-4 flex flex-col ${index !== listBlog.length - 1 ? 'border-r pr-4' : ''}`} key={index}>
      <h1 className="text-2xl font-bold">{item.title}</h1>
      <p className="text-base text-gray-500">{item.desc}</p>
      <Link href="/" className="text-base text-blue-600 font-semibold flex items-center gap-2">Baca selengkapnya <FaArrowRight size={12} /></Link>
    </div>
  ))}
</div>


    </Layout>
  )
}

export default Blog