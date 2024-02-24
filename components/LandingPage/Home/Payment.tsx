import Image from 'next/image'
import React from 'react'
import ImageBca from '@/public/payments/bca.svg'
import ImageBni from '@/public/payments/bni.svg'
import ImageBri from '@/public/payments/bri.svg'
import ImageDana from '@/public/payments/DANA.svg'
import ImageGopay from '@/public/payments/Gopay (Alt).svg'
import ImageJago from '@/public/payments/jago.svg'
import ImageMandiri from '@/public/payments/mandiri.svg'
import ImageShpay from '@/public/payments/Shopee Pay.svg'
import ImageOvo from '@/public/payments/OVO.svg'

const Payment = () => {

  const listImage = [ImageBca, ImageBni, ImageBri, ImageDana, ImageGopay, ImageJago, ImageMandiri, ImageOvo, ImageShpay]
  return (
    <div className=' my-10 gap-10 py-10 flex flex-col'>
      <h1 className="text-3xl font-bold text-center">Pencairan Uang Bisa Melalui</h1>

      <div className="flex justify-around">
      { listImage.map(item => (

<div><Image src={item} width={100} alt='payments'/></div>
))}
      </div>
    </div>
  )
}

export default Payment