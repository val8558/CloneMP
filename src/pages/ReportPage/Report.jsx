import React from 'react'
import Header from '../../Components/Header/Header'
import Cards from '../../Components/Qualifications/QualificationsCards'
import GeneralInfo from '../../Components/GeneralInfo/GeneralInfo'
import Footer from '../../Components/Footer/Footer'
import PDFGeneratorButton from '../../Components/PdfButton/PdfButton'
import NavBar from '@/Components/navBar/navBar'




function Report() {


  return (
    <>
      <Header />
      <PDFGeneratorButton />
      <Cards />
      <NavBar />
      <GeneralInfo />
      <Footer />
    </>
  )
}

export default Report