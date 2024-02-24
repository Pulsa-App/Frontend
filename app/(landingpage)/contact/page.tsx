import React from 'react'
import Layout from "@/components/LandingPage/Layout/index"
import { Button, Label, TextInput, Textarea  } from 'flowbite-react'

const Contact = () => {


  return (
    <Layout>
      <div className="my-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center">Kontak Kami</h1>
        <p className="text-gray-500 text-xl mt-4 w-1/2 text-center ">Hubungi kami jika kamu memerlukan bantuan atau menemukan masalah pada aplikasi kami.</p>
      </div>

      <div className="flex justify-center">
        <form className="flex flex-col gap-4 w-1/2">

          <div >
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Email" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div >
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Subjek" />
            </div>
            <TextInput id="password1" type="password" required />
          </div>
          <div >
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Pesan Kamu" />
            </div>
            <Textarea id="comment" placeholder="Leave a comment..." required rows={4} style={{ 'resize': 'none'}}/>
          </div>


          <Button type="submit" className="mt-10 w-max">Kirim Pesan</Button>
        </form>
      </div>
    </Layout>
  )
}

export default Contact