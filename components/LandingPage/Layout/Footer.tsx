import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/assets/logo/logo.png"
import { FaGithub, FaTwitter, FaInstagramSquare, FaFacebookSquare   } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex m-20 gap-20">
        <div className="w-1/3 flex flex-col gap-4">
          <Link href="/">
            <Image src={Logo} width={150} alt="logo" />
          </Link>
          <p className="text-sm text-gray-500">Fast Change adalah jasa untuk menukarkan pulsa menjadi uang dengan rate tertinggi. Menghadirkan kemudahan untuk menukarkan pulsa, serta proses yang cepat dan keamanan terjamin</p>

          <div className="flex gap-3">
          <FaGithub size={20} color='gray'/>
          <FaTwitter size={20} color='gray'/>
          <FaInstagramSquare size={20} color='gray'/>
          <FaFacebookSquare size={20} color='gray'/>
          </div>
        </div>

        <div className="w-1/3 flex gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Perusahaan</h1>
            <div className="text-gray-500 text-sm flex flex-col gap-2">

              <p>Tentang Kami</p>
              <p>Artikel & Blog</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-bold">Bantuan</h1>
            <div className="text-gray-500 text-sm flex flex-col gap-2">

              <p>Kontak Kami</p>
            </div>
          </div>
        </div>

      </div>

      <hr className="h-px mx-20 bg-gray-200 border-0 dark:bg-gray-700"/>

      <div className="text-center text-gray-500 my-10">
        © {new Date().getFullYear()} Fast Change, Inc. All rights reserved.
      </div>
    </div>
  )
}

export default Footer