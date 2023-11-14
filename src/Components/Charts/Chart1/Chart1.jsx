import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from './Chart.module.css'
import {useAuth} from '../../../Context/AuthContext'

function Chart1() {

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
    <>
      <div className={styles.name}>
        <h1>Desempenho Da Sessão Diária</h1>
        <br />
        <p>Os Gráficos abaixo representam os resultados da sessão diária. Nos gráficos abaixo você poderá observar a quantidade de acertos, erros e omissões em cada categoria. É importante lembrar que na tabela acima encontramos o parametro dos valores</p>
      </div>
      <div className={styles.chart}>
        <BarChart width={900} height={600} data={data} layout="vertical"
        // margin={{
        //   top: 20,
        //   right: 30,
        //   left: 20
        //   bottom: 5
        // }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100]}/>
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar dataKey="Acertos" stackId="a" fill="#42DC8B" />
          <Bar dataKey="Erros" stackId="a" fill="red" />
          <Bar dataKey="Omissões" stackId="a" fill="#ffc658" />
        </BarChart>
      </div>
    </>
  );
}

export default Chart1;