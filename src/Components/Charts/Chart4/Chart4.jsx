import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from './Chart.module.css'

function Chart4() {
    const data = [
        { name: "Aircraftgifts", FECI: -0.71, ASE: 0.08, ASD: 0.15, AAE: 0.8, AAD: 0.08, MCPE: 0, MCPD: 0.32, VP: 0.66, MLP:  0},
        { name: "BabyZoo", FECI: 0, ASE: 0, ASD: 0, AAE: 0, AAD: 0, MCPE: 0, MCPD: 0, VP: 0, MLP: 0 },
        { name: "BabyZoo", FECI: 0, ASE: 0, ASD: 0, AAE: 0, AAD: 0, MCPE: 0, MCPD: 0, VP: 0, MLP:  0},
        { name: "Aircraftgifts", FECI: 0.4, ASE: 0, ASD: 0, AAE: 0, AAD: 0, MCPE: 0, MCPD: 0, VP: 0, MLP:0},
        { name: "Drop Fruits", FECI: -1, ASE: -0.23, ASD: -1, AAE: -0.69, AAD: -0.85, MCPE: -1, MCPD: -1, VP: -0.95, MLP: -1 },
        { name: "Pirate Party", FECI: -0.25, ASE: 0.15, ASD: -0.08, AAE: 0.15, AAD: 0.08, MCPE: 0, MCPD: -0.83, VP: -0.93, MLP: -0.08 },
        { name: "BabyZoo", FECI: 0, ASE: 0, ASD: 0, AAE: 0, AAD: 0, MCPE: 0, MCPD: 0, VP: 0, MLP: 0 },
        { name: "Aircraftgifts", FECI: 0.04, ASE: 0.15, ASD: 0, AAE: 0.15, AAD: 0.15, MCPE: -0.33, MCPD: 0.17, VP: -0.55, MLP: -0.08 },
    ];

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