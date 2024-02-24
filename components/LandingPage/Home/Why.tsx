import React from 'react'
import { BsAwardFill } from "react-icons/bs";

const Why = () => {


  const listKelebihan = [
    {
      icon: BsAwardFill,
      title: 'Proses Pencairan Dana Cepat',
      description: 'Proses pencairan dana yang cepat dan mudah. Support untuk berbagai e-wallet dan bank yang ada di Indonesia.'
    },
    {
      icon: BsAwardFill,
      title: 'Proses Tukar Mudah',
      description: 'Proses tukar yang mudah, hanya memasukkan nomor handphone dan nominal pulsa. Proses tukar tidak memakan waktu yang lama   '
    },
    {
      icon: BsAwardFill,
      title: 'Sudah di Percaya Banyak Orang',
      description: 'Kami sudah dipercaya oleh ratusan ribu pelanggan. Memproses ratusan ribu transaksi dan miliyaran pulsa. Cek rating kami di App Store dan Play Store'
    },
    {
      icon: BsAwardFill,
      title: 'Customer Service 24 Jam',
      description: 'Dukungan customer service profesional 24 Jam, mempermudah untuk melakukan transaksi dan melaporkan permasalahan yang terjadi.'
    },
    {
      icon: BsAwardFill,
      title: 'Rate Tinggi ',
      description: 'Rate pulsa yang tinggi pada setiap provider yang ada. Kami selalu memberikan rate tinggi pada setiap penukaran pulsa'
    },
    {
      icon: BsAwardFill,
      title: 'Gratis Biaya Transfer',
      description: 'Tidak biaya minimum dalam transaksi dan gratis biaya transfer ke seluruh e-wallet dan bank di Indonesia. '
    },
  ]

  return (
    <div className=' my-10 flex flex-col gap-10 py-10'>
      <div className="flex justify-center flex-col  items-center">
        <h1 className="text-3xl font-bold">Kenapa Harus Memilih Fast Change?</h1>
        <p className="text-gray-500 text-xl mt-4 w-1/2 text-center ">Fast Change memiliki beberapa kelebihan yang mempermudah kamu untuk melakukan transaksi penukaran pulsa</p>
      </div>

      <div className="flex mx-20 overflow-auto flex-wrap">
        {listKelebihan.map(item => (

          <div className="w-1/3 flex flex-col gap-2 my-4 px-2">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex justify-center items-center"><item.icon color="blue" /></div>
            <p className="text-xl text-gray-900 font-bold">{item.title}</p>
            <p className="text-base text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Why