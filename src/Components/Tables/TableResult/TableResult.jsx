import { useAuth } from '../../../Context/AuthContext';
import styles from './tableResult.module.css'


const TableResult = () => {

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

      if (resultado === "MPTMMHM762BTSFDQM") {
        jogoCorrespondente = apiData.games[gameArray];

      console.log()
        break;
      }
    }

  if (jogoCorrespondente) {
    console.log("Jogo Correspondente:", jogoCorrespondente);

    const resultsData = JSON.parse(jogoCorrespondente.result);




  const data = [
    { Função: "Função Executiva - Controle Inibitório", Sigla: "FECI",  Acerto: resultsData.AteA, Erro: resultsData.AteE, Omissões: resultsData.AteO , Desvio: "±4", Normal: 26, DisLev:"25 - 23", DisMed:"22 - 20", DisGrav:"19 - 17"},
    { Função: "Atenção Seletiva - Esquerda", Sigla: "ASE", Acerto: resultsData.ConConA, Erro: resultsData.ConConE, Omissões: resultsData.ConConO, Desvio: "±4", Normal: 11, DisLev:"10 - 8", DisMed:"7 - 5", DisGrav:"4 - 2"},
    { Função: "Atenção Seletiva - Direita", Sigla: "ASD", Acerto: resultsData.ConRConA, Erro: resultsData.ConRConE, Omissões: resultsData.ConRConO, Desvio: "±4", Normal: 11, DisLev:"10 - 8", DisMed:"7 - 5", DisGrav:"4 - 2"},
    { Função: "Atenção Alternada - Esquerda", Sigla: "AAE", Acerto: resultsData.ConAleA, Erro: resultsData.ConAleE, Omissões: resultsData.ConAleO, Desvio:"±4", Normal: 11, DisLev:"10 - 8", DisMed:"7 - 5", DisGrav:"4 - 2"},
    { Função: "Atenção Alternada - Direita", Sigla: "AAD", Acerto: resultsData.ConRAleA, Erro: resultsData.ConRAleE, Omissões: resultsData.ConRAleO, Desvio: "±4", Normal: 11, DisLev:"10 - 8", DisMed:"7 - 5", DisGrav:"4 - 2"},
    { Função: "Memória de Curto Prazo - Esquerda", Sigla: "MCPE", Acerto: resultsData.ConMenA, Erro: resultsData.ConMenE, Omissões:  resultsData.ConMenO, Desvio: "±1", Normal: 1, DisLev:"5 - 4", DisMed:" 3 - 2", DisGrav:"1"},
    { Função: "Memória de Curto Prazo - Direita", Sigla: "MCPD", Acerto: resultsData.ConRMenA, Erro: resultsData.ConRMenE, Omissões:  resultsData.ConRMenO, Desvio: "±1", Normal: 1, DisLev:"5 - 4", DisMed:"3 - 2", DisGrav:"1"},
    { Função: "Visuopercepção", Sigla: "VP", Acerto: resultsData.VmenA, Erro: resultsData.VmenE, Omissões:  resultsData.VmenO, Desvio: "±8", Normal: 44, DisLev:"43 - 35", DisMed:"34 - 26", DisGrav:"25 - 17"},
    { Função: "Memória de Longo Prazo", Sigla: "MLP", Acerto: resultsData.MenA, Erro: resultsData.MenE, Omissões: resultsData.MenO, Desvio: "±3", Normal: 12, DisLev:"11 - 8", DisMed:"7 - 4", DisGrav:"3"}
  ];

  return (
    <>
      <div className={styles.name}>
        <h1>Tabela Interpretada do Resultado Atual</h1>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Função</th>
            <th>Sigla</th>
            <th>Resultados Obtidos</th>
            <th>Desvio Padrão</th>
            <th>Normal</th>
            <th>Disfunção leve</th>
            <th>Disfunção Moderada</th>
            <th>Disfunção Grave</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}
              className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{item.Função}</td>
              <td>{item.Sigla}</td>
              <td>{item.Acerto - item.Erro - item.Omissões}</td>
              <td>{item.Desvio}</td>
              <td>{item.Normal}</td>
              <td>{item.DisLev}</td>
              <td>{item.DisMed}</td>
              <td>{item.DisGrav}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )};

};

export default TableResult;
