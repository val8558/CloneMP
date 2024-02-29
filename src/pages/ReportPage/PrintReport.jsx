import React from 'react'
import Header from '../../Components/Header/Header'
import Cards from '../../Components/Qualifications/QualificationsCards'
import GeneralInfo from '../../Components/GeneralInfo/GeneralInfo'
import Footer from '../../Components/Footer/Footer'
import PDFGeneratorButton from '../../Components/PdfButton/PdfButton'
import NavBar from '@/Components/navBar/index.jsx'
import Table from '../../Components/Tables/Table/Table'
import TableCompare from '../../Components/Tables/TableCompare/TableCompare'
import TableExemple from '../../Components/Tables/TableExemple/TableExemple'
import TableResult from '../../Components/Tables/TableResult/TableResult'
import Chart1 from '../../Components/Charts/Chart1/Chart1.jsx'
import Chart2 from '../../Components/Charts/Chart2/Chart2.jsx'
import Chart3 from '../../Components/Charts/Chart3/Chart3.jsx'
import Chart4 from '../../Components/Charts/Chart4/Chart4.jsx'





function PrintReport() {
  return (
    <>
      <Header />
      <PDFGeneratorButton />
      <Cards />
      <NavBar />
      <GeneralInfo />
      <TableExemple />
      <Table />
      <TableResult />
      <TableCompare />
      <Chart1 />
      <Chart2 />
      <Chart3 />
      <Chart4 />
      <Footer />
    </>

  )
}

export default PrintReport