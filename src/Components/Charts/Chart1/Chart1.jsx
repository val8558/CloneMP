import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import styles from './Chart.module.css'
import { useAuth } from '../../../Context/AuthContext'

function Chart1() {
  const {apiData} = useAuth();


  console.log("API Data:", apiData);

  let jogoCorrespondente = null;

    for (let i = 0; i < apiData.games.length; i++) {
      const resultado = apiData.games[i].code;
      const gameArray = i

      console.log("Resultado:", resultado);
      console.log(gameArray)
      console.log(apiData.games[gameArray])
      ;

      if (resultado === "MPTDHMHA7TZO7MSHX") {
        jogoCorrespondente = apiData.games[gameArray];

      console.log()
        break;
      }
    }

  if (jogoCorrespondente) {
    console.log("Jogo Correspondente:", jogoCorrespondente);

    const resultsData = JSON.parse(jogoCorrespondente.result);

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
          <BarChart width={900} height={600} data={data} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} />
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
  } else {
    console.log("Jogo não encontrado");
    return (
      <>
        <div>Jogo não encontrado.</div>
      </>
    );
  }
}

export default Chart1;
