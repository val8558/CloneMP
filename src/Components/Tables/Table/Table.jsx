import styles from './table.module.css'
import okay from '../../../assets/checkbox.svg'
import nokay from '../../../assets/alert.svg'
import {useAuth} from '../../../Context/AuthContext'


const Table = () => {

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
      { Função: "Função Executiva - Controle Inibitório", Sigla: "FECI", Acerto: resultsData.AteA, Erro: resultsData.AteE, Omissões: resultsData.AteO, Média: 26, Pe:"28±2"},
      { Função: "Atenção Seletiva - Esquerda", Sigla: "ASE", Acerto: resultsData.ConConA, Erro: resultsData.ConConE, Omissões: resultsData.ConConO, Média: 11, Pe:"13±2" },
      { Função: "Atenção Seletiva - Direita", Sigla: "ASD", Acerto: resultsData.ConRConA, Erro: resultsData.ConRConE, Omissões: resultsData.ConRConO, Média: 11, Pe:"13±2" },
      { Função: "Atenção Alternada - Esquerda", Sigla: "AAE", Acerto: resultsData.ConAleA, Erro: resultsData.ConAleE, Omissões: resultsData.ConAleO, Média: 11, Pe:"13±2" },
      { Função: "Atenção Alternada - Direita", Sigla: "AAD", Acerto: resultsData.ConRAleA, Erro: resultsData.ConRAleE, Omissões: resultsData.ConRAleO, Média: 11, Pe: "13±2" },
      { Função: "Memória de Curto Prazo - Esquerda", Sigla: "MCPE", Acerto: resultsData.ConMenA, Erro: resultsData.ConMenE, Omissões:  resultsData.ConMenO, Média: 5, Pe: "6±1"  },
      { Função: "Memória de Curto Prazo - Direita", Sigla: "MCPD", Acerto: resultsData.ConRMenA, Erro: resultsData.ConRMenE, Omissões:  resultsData.ConRMenO,  Média: 5, Pe: "6±1"},
      { Função: "Visuopercepção", Sigla: "VP", Acerto: resultsData.VmenA, Erro: resultsData.VmenE, Omissões:  resultsData.VmenO, Média: 44, Pe: "52±8"},
      { Função: "Memória de Longo Prazo", Sigla: "MLP", Acerto: resultsData.MenA, Erro: resultsData.MenE, Omissões: resultsData.MenO, Média: 9, Pe:"12±3"}
    ];
  ;

console.log(data)

  return (
    <>
      <div className={styles.name}>
        <h1>Tabela De Representação da Sessão Autal</h1>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Função</th>
            <th>Sigla</th>
            <th>Acerto</th>
            <th>Erro</th>
            <th>Omissões</th>
            <th>Valor total de Acertos</th>
            <th>Esperado Pontuação (Média±DP)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}
              className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{item.Função}</td>
              <td>{item.Sigla}</td>
              <td>{item.Acerto}</td>
              <td>{item.Erro}</td>
              <td>{item.Omissões}</td>
              <td>{item.Acerto - item.Erro - item.Omissões}</td>
              <td>{item.Pe}</td>
              <td>
                {item.Acerto < item.Média ? (
                 <img src={nokay} alt=""width={32} />
                ) : (
                  <img src={okay} alt=""width={30} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )};

};

export default Table;


//"{\"Name\":\"BabyZoo\",\"Date\":637307030368567730,\"AteA\":23,\"AteE\":5,\"AteO\":7,\"AteT\":1,\"MenA\":10,\"MenE\":5,\"MenO\":5,\"ConAleA\":15,\"ConAleE\":1,\"ConAleF\":0,\"ConAleO\":0,\"ConAleD\":0,\"ConAleT\":1,\"ConConA\":14,\"ConConE\":0,\"ConConF\":1,\"ConConO\":1,\"ConConD\":0,\"ConConT\":0,\"ConMenA\":7,\"ConMenE\":0,\"ConMenF\":0,\"ConMenO\":0,\"ConMenD\":0,\"ConMenT\":1,\"ConRAleA\":14,\"ConRAleE\":1,\"ConRAleF\":0,\"ConRAleO\":0,\"ConRAleD\":0,\"ConRAleT\":0,\"ConRConA\":15,\"ConRConE\":0,\"ConRConF\":0,\"ConRConO\":0,\"ConRConD\":0,\"ConRConT\":0,\"ConRMenA\":7,\"ConRMenE\":0,\"ConRMenF\":1,\"ConRMenO\":0,\"ConRMenD\":0,\"ConRMenT\":1,\"ConPAleA\":6,\"ConPAleE\":1,\"ConPAleF\":0,\"ConPAleO\":0,\"ConPAleD\":0,\"ConPAleT\":1,\"ConPConA\":7,\"ConPConE\":0,\"ConPConF\":0,\"ConPConO\":0,\"ConPConD\":0,\"ConPConT\":1,\"ConPMenA\":0,\"ConPMenE\":0,\"ConPMenF\":0,\"ConPMenO\":0,\"ConPMenD\":0,\"ConPMenT\":0,\"VmenA\":32,\"VmenN\":28,\"VmenT\":2}"
