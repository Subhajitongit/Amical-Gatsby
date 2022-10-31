import React from "react"
import Faq from "../components/Faq"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Pricing from "../components/Pricing"

export default function Home() {
  return (
    <>
      <Navbar />
      <Features />
      <Pricing />
      <Faq />
      <Footer />
    </>
  )
}
