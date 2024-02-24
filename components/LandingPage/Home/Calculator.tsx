import React from 'react'
import { Button, Checkbox, Label, TextInput, Select } from 'flowbite-react';
import Image from 'next/image';
import IconAxis from "@/public/provider/AXIS 1.svg"


const Calculator = () => {
  return (
    <div className="my-10 flex flex-col items-center   py-10">


      <h1 className="text-3xl font-bold text-center">Bingung Bagaimana Cara dan Perhitungannya?</h1>
      <p className="text-gray-500 text-xl mt-4 w-1/2 text-center ">Kami berikan simulasi di bawah ini untuk lebih Detailnya (Perhitungan Hasil Convert, biaya + sisa pulsa dari masing-masing provider)</p>

      <div className="flex gap-12 justify-center mx-40 my-10">
        <div className="w-1/3 flex flex-col gap-12">

          <p className="text-xl font-semibold">Masukkan Nominal Pulsa dan Nama Provider</p>

          <form className="flex max-w-md flex-col gap-4">

            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Masukkan Nominal Pulsa" />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password1" value="Pilih Provider" />
              </div>
              <Select id="countries" required>
                <option>United States</option>
                <option>Canada</option>
                <option>France</option>
                <option>Germany</option>
              </Select>
            </div>


            <Button type="submit" className="mt-10">Cek Sekarang</Button>
          </form>
        </div>
        <div className="w-2/3 flex flex-col gap-12 ">
          <p className="text-xl">Kami berikan simulasi di bawah ini untuk lebih Detailnya (Perhitungan Hasil Convert, biaya + sisa pulsa masing masing provider)</p>

          <div className="bg-slate-200 rounded-xl p-5 flex flex-col gap-7">

            <div className="flex items-center gap-6">
              <div >
                <Image src={IconAxis} width={80} alt="Overview" />
              </div>
              <h1 className="text-3xl font-bold">Axis</h1>
            </div>
            <form className="flex  flex-col gap-4">

              <div className="flex justify-between">
                <h1 className="text-xl">Rate convert</h1>
                <h1 className="text-xl">77%</h1>
              </div>

              <div>
                <div className="mb-2 block ">
                  <Label htmlFor="password1" value="Nominal Pulsa Konversi" />
                </div>
                <TextInput id="password1" type="text" value='300.000' readOnly />
              </div>
              <div>
                <div className="mb-2 block ">
                  <Label htmlFor="password1" value="Nominal Hasil Pulsa Konversi" />
                </div>
                <TextInput id="password1" type="text" value='285.000' readOnly />
              </div>
            </form>

            <div className="flex items-center bg-white rounded-lg gap-2 px-2 py-3 border border-slate-300">
              <div >
                <Image src={IconAxis} width={40} alt="Overview" />
              </div>
              <p className="text-sm text-gray-500">Pastikan pulsa anda 311.500 atau lebih untuk bisa convert pulsa nominal 300.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator