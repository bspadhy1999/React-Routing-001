import React from 'react'
import MensClothing from '../Components/MensClothing'
import WomensClothing from '../Components/WomensClothing'
import Jewelery from '../Components/Jewelery'
import Electronics from '../Components/Electronics'
import Banner from '../Components/Banner'
import Categories from '../Components/Categories'

export default function Home() {
  return (
    <>
      <Categories/>
      <Banner/>
      <MensClothing/>
      <WomensClothing/>
      <Jewelery/>
      <Electronics/>
    </>
  )
}
