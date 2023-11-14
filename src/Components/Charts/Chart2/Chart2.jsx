import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from './Chart.module.css'
import { useAuth } from "../../../Context/AuthContext";

function Chart2() {
  const {apiData} = useAuth()

  const resultsData = JSON.parse(apiData.game.result)

  // “Ate” = Função Executiva - Controle Inibitório  
  // “ConCon” = Atenção Seletiva – Esquerda 
  // “ConRCon” = Atenção Seletiva – Direita  
  // ”ConAle” = Atenção Alternada – Esquerda 
  // “ConRAle” = Atenção Alternada – Direita
  // “ConMen” = Memória de Curto Prazo – Esquerda
  // “ConRMen” = Memória de Curto Prazo – Direita
  // “Vmen” = Visuopercepção
  // “Men” = Memória de Longo Prazo
  
  // A = acerto
  // E = erro
  // O = Omissão
  

  const data = [
    { name: "FECI", Acertos: resultsData.AteA, Erros: resultsData.AteE, Omissões: resultsData.AteO},
    { name: "ASE", Acertos: resultsData.ConConA, Erros: resultsData.ConConE, Omissões: resultsData.ConConO},
    { name: "ASD", Acertos: resultsData.ConRConA, Erros: resultsData.ConRConE, Omissões: resultsData.ConRConO},
    { name: "AAE", Acertos: resultsData.ConAleA, Erros: resultsData.ConAleE, Omissões: resultsData.ConAleO},
    { name: "AAD", Acertos: resultsData.ConRAleA, Erros: resultsData.ConRAleE, Omissões: resultsData.ConRAleO},
    { name: "MCPE", Acertos: resultsData.ConMenA, Erros: resultsData.ConMenE, Omissões:  resultsData.ConMenO},
    { name: "MCPD", Acertos: resultsData.ConRMenA, Erros: resultsData.ConRMenE, Omissões:  resultsData.ConRMenO},
    { name: "VP", Acertos: resultsData.VmenA, Erros: resultsData.VmenE, Omissões:  resultsData.VmenO},
    { name: "MLP", Acertos: resultsData.VmenA, Erros: resultsData.VmenE, Omissões:  resultsData.VmenO},
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
  );
}

export default Chart2