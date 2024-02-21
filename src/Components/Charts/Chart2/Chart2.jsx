import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from './Chart.module.css'
import { useAuth } from "../../../Context/AuthContext";

function Chart2() {
  const {apiData, gameKey} = useAuth();

  let jogoCorrespondente = null;

    for (let i = 0; i < apiData.games.length; i++) {
      const resultado = apiData.games[i].code;
      
      const gameArray = i;
      if (resultado === gameKey) {
        jogoCorrespondente = apiData.games[gameArray]
        break;
      }
    }

  if (jogoCorrespondente) {

    const resultsData = JSON.parse(jogoCorrespondente.result);

      const data = [
        { name: "FECI", Acertos: resultsData.AteA, Erros: resultsData.AteE, Omissões: resultsData.AteO},
        { name: "ASE", Acertos: resultsData.ConConA, Erros: resultsData.ConConE, Omissões: resultsData.ConConO},
        { name: "ASD", Acertos: resultsData.ConRConA, Erros: resultsData.ConRConE, Omissões: resultsData.ConRConO},
        { name: "AAE", Acertos: resultsData.ConAleA, Erros: resultsData.ConAleE, Omissões: resultsData.ConAleO},
        { name: "AAD", Acertos: resultsData.ConRAleA, Erros: resultsData.ConRAleE, Omissões: resultsData.ConRAleO},
        { name: "MCPE", Acertos: resultsData.ConMenA, Erros: resultsData.ConMenE, Omissões:  resultsData.ConMenO},
        { name: "MCPD", Acertos: resultsData.ConRMenA, Erros: resultsData.ConRMenE, Omissões:  resultsData.ConRMenO},
        { name: "VP", Acertos: resultsData.VmenA, Erros: resultsData.VmenN, Omissões:  resultsData.VmenO},
        { name: "MLP", Acertos: resultsData.MenA, Erros: resultsData.MenE, Omissões:  resultsData.MenO},
      ];
  return (

    <div className={styles.chart}>
      <BarChart width={900} height={600} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Acertos" fill="#699855" /> 
        <Bar dataKey="Erros" fill="red" />
        <Bar dataKey="Omissões" fill="#ffc658" />
      </BarChart>
    </div>
  )};
}

export default Chart2