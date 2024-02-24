import React, { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface Props {
  children: ReactNode;
}

const index = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default index