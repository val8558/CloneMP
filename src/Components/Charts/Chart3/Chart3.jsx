import { useAuth } from "../../../Context/AuthContext";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from './Chart.module.css'
import { object } from "prop-types";


function Chart3() {
    const { apiData } = useAuth();

    const data = apiData.games.map(item => {
        const resultObject = JSON.parse(item.result);
        return {
            name: resultObject.Name,
            FECI: resultObject.AteA - resultObject.AteE - resultObject.AteO,
            ASE:  resultObject.ConConA - resultObject.ConConE - resultObject.ConConO,
            ASD:  resultObject.ConRConA - resultObject.ConRConE - resultObject.ConRConO,
            AAE:  resultObject.ConAleA - resultObject.ConAleE - resultObject.ConAleO,
            AAD:  resultObject.ConRAleA - resultObject.ConRAleE - resultObject.ConRAleO,
            MCPE: resultObject.ConMenA - resultObject.ConMenE - resultObject.ConMenO,
            MCPD: resultObject.ConRMenA - resultObject.ConRMenE - resultObject.ConRMenO,
            VP:   resultObject.VmenA - resultObject.VmenN,
            MLP:  resultObject.MenA - resultObject.MenE - resultObject.MenO,
        };
    });

console.log(data)

    return (

        <>

            <div>
                <div className={styles.name}>
                    <h1>Progressão de Reabilitação</h1>
                    <br />
                    <p>O Gráfico abaixo representa a comparação da ultima sessão realizada com as anteriores. O intuito deste gráfico é comparar e avaliar a evolução do reabilitando</p>
                </div>
            </div>

            <div className={styles.chart}>
                <BarChart width={900} height={600} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" type="category" />
                    <YAxis type="number" domain={[0, 1]} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="FECI" fill="#699855" />
                    <Bar dataKey="ASE" fill="#FA5F8D" />
                    <Bar dataKey="ASD" fill="#CD4C6B" />
                    <Bar dataKey="AAE" fill="#139Abe" />
                    <Bar dataKey="AAD" fill="#2C8AF2" />
                    <Bar dataKey="MCPE" fill="#42DC8B" />
                    <Bar dataKey="MCPD" fill="#F2AE2C" />
                    <Bar dataKey="VP" fill="#F25B2C" />
                    <Bar dataKey="MLP" fill="#722F3E" />

                </BarChart>
            </div>
        </>


    )
}

export default Chart3