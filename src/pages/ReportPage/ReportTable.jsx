
import Header from '../../Components/Header/Header'
import Cards from '../../Components/Qualifications/QualificationsCards'
import PDFGeneratorButton from '../../Components/PdfButton/PdfButton'
import NavBar from '@/Components/navBar/index.jsx'
import Table from '../../Components/Tables/Table/Table'
import TableCompare from '../../Components/Tables/TableCompare/TableCompare'
import Footer from '../../Components/Footer/Footer'
import TableExemple from '../../Components/Tables/TableExemple/TableExemple'
import TableResult from '../../Components/Tables/TableResult/TableResult'


function ReportTable() {
  return (
    <>
    <Header />
    <PDFGeneratorButton />
    <Cards />
    <NavBar />
    <TableExemple />
    <Table />
    <TableResult />
    {/* <TableCompare /> */}
    <Footer />
    </>
  )
}

export default ReportTable