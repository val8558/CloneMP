import style from './QualificationsCards.module.css'
import { useAuth } from '../../Context/AuthContext'

// MP-30adf1234d4
function Cards() {

    const {apiData} = useAuth()

  const doctorData = apiData.doctor


    return (
        <>
            <div className={style.cards}>
                <div className={style.doctor}>
                    <h1>DADOS GERAIS DO APLICADOR</h1>
                    <br />
                    <p><strong>Nome:</strong> {doctorData.nome}</p>
                    <p><strong>CRM:</strong> {doctorData.register}</p>
                    <p><strong>Área de atuaçâo:</strong> {doctorData.occuoation_area}</p>
                    <p><strong>Telefone:</strong> {doctorData.number}</p>
                    <p><strong>E-mail:</strong> {doctorData.number}</p>
                </div>
            </div>
        </>
    )
}

export default Cards