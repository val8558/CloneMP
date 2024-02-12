import style from './QualificationsCards.module.css'
import { useAuth } from '../../Context/AuthContext'

// MP-30adf1234d4
function Cards() {

    const {apiData} = useAuth()

  const doctorData = apiData.doctor;
  const patientData = apiData.patient


    return (
        <>
            <div className={style.cards}>
                <div className={style.doctor}>
                    <h1>DADOS GERAIS DO APLICADOR</h1>
                    <br />
                    <p><strong>Nome:</strong> {doctorData.nome}</p>
                    <p><strong>CRM:</strong> {doctorData.register}</p>
                    <p><strong>Área de atuaçâo:</strong> {doctorData.occuopation_area}</p>
                    <p><strong>Telefone:</strong> {doctorData.number}</p>
                    <p><strong>E-mail:</strong> {doctorData.number}</p>
                </div>

                <div className={style.patient}>
                    <h1>DADOS GERAIS DO PACIENTE</h1>
                    <br />
                    <p><strong>Nome:</strong> {patientData.name}</p>
                    <p><strong>Profissão:</strong> {patientData.work}</p>
                    <p><strong>Data de Nascimento:</strong> {patientData.birth_date}</p>
                    <p><strong>Lateralidade:</strong> {patientData.laterality}</p>
                    <p><strong>Escolaridade:</strong> {patientData.category}</p>
                    <p><strong>E-mail:</strong> {patientData.email}</p>
                </div>
            </div>


          
        </>
    )
}

export default Cards