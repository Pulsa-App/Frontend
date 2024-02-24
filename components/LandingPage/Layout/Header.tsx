import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/public/assets/logo/logo.png"

const Header = () => {
  const listMenu = [
    {
      menu: 'Rate Pulsa',
      type: 'link'
    },
    {
      menu: 'Blog',
      type: 'link'
    },
    {
      menu: 'Tentang Kami',
      type: 'link'
    },
    {
      menu: 'Kontak Kami',
      type: 'link'
    },
    // {
    //   menu: 'Tukar Pulsa',
    //   type: 'button'
    // },
  ]

  return (
    <div className="flex py-6 justify-between px-10 sticky top-0 bg-whie z-50 bg-white" >
      <Link href="/">
        <Image src={Logo} width={200} alt="logo" />
      </Link>
      <ul className="flex items-center text-base gap-8">
        {listMenu.map(item => (

          <Link href="/blog" >{item.menu}</Link>

        ))}
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Tukar Pulsa</button>
      </ul>
    </div>
  )
}

export default Header