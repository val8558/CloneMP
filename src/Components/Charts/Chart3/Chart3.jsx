import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from './Chart.module.css'

function Chart3() {
    const data = [
        { name: "Aircraftgifts", FECI: 0.27, ASE: 0.71, ASD: 1, AAE: 0.82, AAD: 0.93, MCPE: 0.46, MCPD: 0.32, VP: 0.33, MLP:  0.67},
        { name: "BabyZoo", FECI: 0, ASE: 0, ASD: 0, AAE: 0, AAD: 0, MCPE: 0, MCPD: 0, VP: 0, MLP: 0 },
        { name: "BabyZoo", FECI: 0, ASE: 0, ASD: 0, AAE: 0, AAD: 0, MCPE: 0, MCPD: 0, VP: 0, MLP:  0},
        { name: "Aircraftgifts", FECI: 0.91, ASE: 0, ASD: 0, AAE: 0, AAD: 0, MCPE: 0, MCPD: 0, VP: 0, MLP:0},
        { name: "Drop Fruits", FECI: 0, ASE: 0.67, ASD: 0, AAE: 0.27, AAD: 0.13, MCPE: 0, MCPD: 0, VP: 0.05, MLP: 0 },
        { name: "Pirate Party", FECI: 0.68, ASE: 1, ASD: 0.75, AAE: 0.88, AAD: 0.88, MCPE: 0.5, MCPD: 0.07, VP: 0.07, MLP: 0.58 },
        { name: "BabyZoo", FECI: 0, ASE: 0, ASD: 0, AAE: 0, AAD: 0, MCPE: 0, MCPD: 0, VP: 0, MLP: 0 },
        { name: "Aircraftgifts", FECI: 0.88, ASE: 1, ASD: 0.87, AAE: 0.88, AAD: 0.94, MCPE: 0.4, MCPD: 1, VP: 0.43, MLP: 0.58 },
    ];

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
                    <YAxis type="number" domain={[0, 1]}/>
                    <Tooltip />
                    <Legend />
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


    )
}

export default Chart3