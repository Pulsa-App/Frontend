'use client'
import React from 'react'
import { Accordion } from 'flowbite-react';

const Questions = () => {

  const listQuestion = [
    {
      question: 'Apakah Fast Change Melayani Convert 24 Jam?',
      answer: 'Layanan convert pulsa di Fast Change melayani online 24 jam, tanpa istirahat.'
    },
    {
      question: 'Apakah Proses Convert Pulsa di Fast Change Mudah?',
      answer: 'Layanan convert pulsa di Fast Change melayani online 24 jam, tanpa istirahat.'
    },
    {
      question: 'Apakah Layanan Viapulsa Bebas Biaya Admin?',
      answer: 'Layanan convert pulsa di Fast Change melayani online 24 jam, tanpa istirahat.'
    },
    {
      question: 'Bagaimana Jika Sudah Telanjur Kirim ke Nomor Sebelumnya?',
      answer: 'Layanan convert pulsa di Fast Change melayani online 24 jam, tanpa istirahat.'
    },
  ]
  return (
    <div className=' my-10 py-10 gap-10 flex flex-col'>
      <h1 className="text-3xl font-bold text-center">Pertanyaan yang sering ditanyakan</h1>
      <div className="flex justify-center">
        <Accordion collapseAll className="w-1/2">

          {listQuestion.map(item => (

            <Accordion.Panel>
              <Accordion.Title>
                <><span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> {item.question}</span>

                </>
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {item.answer}
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          ))}

        </Accordion>
      </div>
    </div>

  )
}

export default Questions