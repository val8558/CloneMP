import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from './Chart.module.css'
import { useAuth } from "../../../Context/AuthContext";

function Chart4() {

    const { apiData } = useAuth();

    const data = apiData.games.map(item => {
        const resultObject = JSON.parse(item.result);
        const FECIPercentage = ((resultObject.AteA - resultObject.AteE - resultObject.AteO) / 100);
        const ASEPercentage = ((resultObject.ConConA - resultObject.ConConE - resultObject.ConConO) / 100);
        const ASDPercentage = ((resultObject.ConRConA - resultObject.ConRConE - resultObject.ConRConO) / 100);
        const AAEPercentage = ((resultObject.ConAleA - resultObject.ConAleE - resultObject.ConAleO) / 100);
        const AADPercentage = ((resultObject.ConRAleA - resultObject.ConRAleE - resultObject.ConRAleO) / 100);
        const MCPEPercentage = ((resultObject.ConMenA - resultObject.ConMenE - resultObject.ConMenO) / 100);
        const MCPDPercentage = ((resultObject.ConRMenA - resultObject.ConRMenE - resultObject.ConRMenO) / 100);
        const VPPercentage = ((resultObject.VmenA - resultObject.VmenN) / 100);
        const MLPPercentage = ((resultObject.MenA - resultObject.MenE - resultObject.MenO) / 100);

        return {
            name: resultObject.Name,
            FECI: FECIPercentage,
            ASE:  ASEPercentage,
            ASD:  ASDPercentage,
            AAE:  AAEPercentage,
            AAD:  AADPercentage,
            MCPE: MCPEPercentage,
            MCPD: MCPDPercentage,
            VP:   VPPercentage,
            MLP:  MLPPercentage,
        };
    });



    return (

        <>

            <div>
                <div className={styles.name}>
                    <h1>Grafico Cumulativo De Necessidade De Reabilitação</h1>
                    <br />
                    <p>O Gráfico abaixo demonstra a progressão global o reabilitando, ou seja, após a coleta de todos os dados das sessões realizadas dentro do MentalPlus é apresentado os dados referente as progressões e aos défictis existentes</p>
                </div>
            </div>

            <div className={styles.chart}>
                <BarChart width={900} height={600} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" type="category" />
                    <YAxis type="number" domain={[-1, 1]}/>
                    <Legend />
                    <Tooltip />
                    <Bar dataKey="FECI" fill="#699855" />
                    <Bar dataKey="ASE" fill="#FA5F8D" />
                    <Bar dataKey="ASD" fill="#CD4C6B" />
                    <Bar dataKey="AAE" fill="#139Abe" />
                    <Bar dataKey="AAD" fill="#2C8AF2" />
                    <Bar dataKey="MCPE" fill="#42DC8B" />
                    <Bar dataKey="MCPD" fill="#F2AE2C"/>
                    <Bar dataKey="VP" fill="#F25B2C" />
                    <Bar dataKey="MLP" fill="#722F3E"/>

                </BarChart>
            </div>
        </>


    );
}

export default Chart4