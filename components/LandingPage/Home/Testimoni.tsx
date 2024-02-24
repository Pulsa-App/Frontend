import React from 'react'
import IconAxis from "@/public/provider/AXIS 1.svg"
import Image from 'next/image'
import { Button } from 'flowbite-react'

const Testimoni = () => {

  const listTestimoni = [
    {
      name: 'Angeline Sharon',
      comment: 'Bener-bener gak perlu pusing sekarang ada Fast Change, gak punya uang tinggal convert aja pulsa yang gak dipake. Proses nya cepat gak lama',
      profile: IconAxis,
      status: 'Pelanggan Baru'
    },
    {
      name: 'Satria Mahatir',
      comment: 'Sempet skeptis sama layanan kayak begini, paling juga gak beres. Setelah nyobain, rasa skeptis gue ilang, mantap lah pokok nya. Fast respon banget CS nya',
      profile: IconAxis,
      status: 'Pelanggan Baru'
    },
    {
      name: 'Ucup Widiansah',
      comment: 'Mantep banget pelayanan ramah, aplikasi gak lelet, ransfer nya gak lama. Nanti pake terus deh, makasih Fast Change.',
      profile: IconAxis,
      status: 'Pelanggan Baru'
    },
    {
      name: 'Ajiz Sesepuh',
      comment: 'Udah sering pake Fast Change gak bikin kecewa sih. Penolong banget untuk konversi pulsa, yang bikin seneng udah support e-wallet, asik banget. Saran sih ada point gitu biar makin menarik',
      profile: IconAxis,
      status: 'Pelanggan Setia'
    },
    {
      name: 'Aulia Halimawan',
      comment: 'Gak kerasa udah berkali-kali pake Fast Change dan se bagus itu pelayanan nya. Jujur recomend banget untuk convert pulsa disini, dijamin aman.',
      profile: IconAxis,
      status: 'Pelanggan Setia'
    },
    {
      name: 'Nalendro Adil',
      comment: 'Fast Changeeee, udah gaktau lagi seberapa sering tukar pulsa disini. Terima kasih banget udah bantu tukar pulsa aku jadi uang, buat mba cs nya keren banget respon nya cepet ngalahin pacar aku. Sukses terus Fast Change.',
      profile: IconAxis,
      status: 'Pelanggan Setia'
    },

  ]
  return (
    <div className="my-10 py-10  flex flex-col gap-10">
      <div>
      <h1 className="text-3xl font-bold text-center">Apa Kata Pengguna Fast Change?</h1>
      <p className="text-gray-500 text-xl text-center mt-4">Fast Change telah dipercaya para pengguna dari berbagai kalangan.</p>
      </div>

      <div className="gap-4 justify-between mx-20  grid-cols-3 grid ">
        {listTestimoni.map(item => (
          <div className="bg-slate-100 p-6 rounded-lg flex flex-col gap-4 h-max ">
            <q className="text-sm text-gray-500">{item.comment}</q>
            <div className="flex">
              <div className="flex gap-4">
                <div ><Image src={IconAxis} width={40} alt="Overview" /></div>
                <div >
                  <h1 className="text-base font-semibold">{item.name}</h1>
                  <p className="text-sm text-gray-500">{item.status}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <Button outline color="blue" >
          <p className="text-blue-600 hover:text-white">Mau coba memberi testimoni?</p>
        </Button>
      </div>
    </div>
  )
}

export default Testimoni