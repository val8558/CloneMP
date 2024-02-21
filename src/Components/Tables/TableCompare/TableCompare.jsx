import { useAuth } from '../../../Context/AuthContext';
import styles from './tableCompare.module.css'


const TableCompare = () => {

  const {apiData, gameKey} = useAuth();


  let jogoCorrespondente = null;
  let ultimojogo = null;

    for (let i = 0; i < apiData.games.length; i++) {
      const resultado = apiData.games[i].code;
      const gameArray = i
      const lastGameArray = (i - 1);

      if (resultado === gameKey) {
        jogoCorrespondente = apiData.games[gameArray];
        ultimojogo = apiData.games[lastGameArray];
        break;
      }
    }

  if (jogoCorrespondente, ultimojogo) {

    const resultsData = JSON.parse(jogoCorrespondente.result);
    const lastResulData = JSON.parse(ultimojogo.result);

    console.log(lastResulData)
    
  const data= [
    { Função: "Função Executiva - Controle Inibitório", Sigla: "FECI", 
    Acerto: resultsData.AteA, Erro: resultsData.AteE, Omissões: resultsData.AteO,
    AcertoLast: lastResulData.AteA, ErroLast: lastResulData.AteE, OmissõesLast: lastResulData.AteO},

    { Função: "Atenção Seletiva - Esquerda", Sigla: "ASE", 
    Acerto: resultsData.ConConA, Erro: resultsData.ConConE, Omissões: resultsData.ConConO, 
    AcertoLast: lastResulData.ConConA, ErroLast: lastResulData.ConConE, OmissõesLast: lastResulData.ConConO},

    { Função: "Atenção Seletiva - Direita", Sigla: "ASD", 
    Acerto: resultsData.ConRConA, Erro: resultsData.ConRConE, Omissões: resultsData.ConRConO,  
    AcertoLast: lastResulData.ConRConA, ErroLast: lastResulData.ConRConE, OmissõesLast: lastResulData.ConRConO},

    { Função: "Atenção Alternada - Esquerda", Sigla: "AAE", 
    Acerto: resultsData.ConAleA, Erro: resultsData.ConAleE, Omissões: resultsData.ConAleO, 
    AcertoLast: lastResulData.ConAleA, ErroLast: lastResulData.ConAleE, OmissõesLast: lastResulData.ConAleO},

    { Função: "Atenção Alternada - Direita", Sigla: "AAD",
    Acerto: resultsData.ConRAleA, Erro: resultsData.ConRAleE, Omissões: resultsData.ConRAleO, 
    AcertoLast: lastResulData.ConRAleA, ErroLast: lastResulData.ConRAleE, OmissõesLast: lastResulData.ConAleO},

    { Função: "Memória de Curto Prazo - Esquerda", Sigla: "MCPE", 
    Acerto: resultsData.ConMenA, Erro: resultsData.ConMenE, Omissões:  resultsData.ConMenO,  
     AcertoLast: lastResulData.ConMenA, ErroLast: lastResulData.ConMenE, OmissõesLast: lastResulData.ConMenO},

    { Função: "Memória de Curto Prazo - Direita", Sigla: "MCPD", 
    Acerto: resultsData.ConRMenA, Erro: resultsData.ConRMenE, Omissões:  resultsData.ConRMenO,  
    AcertoLast: lastResulData.ConRMenA, ErroLast: lastResulData.ConRMenE, OmissõesLast: lastResulData.ConRMenO},

    { Função: "Visuopercepção", Sigla: "VP", 
    Acerto: resultsData.VmenA, Erro: resultsData.VmenN, Omissões: 0, 
    AcertoLast: lastResulData.VmenA, ErroLast: lastResulData.VmenN, OmissõesLast: 0,},

    { Função: "Memória de Longo Prazo", Sigla: "MLP", 
    Acerto: resultsData.MenA, Erro: resultsData.MenE, Omissões: resultsData.MenO, 
    AcertoLast: lastResulData.MenA, ErroLast: lastResulData.MenE, OmissõesLast: lastResulData.MenO},
  ];

  return (
    <>
      <div className={styles.name}>
        <h1>Tabela Comparativa de Resultados </h1>
        <br />
        <p>A presente tabela apresenta um comparativo entre a ultima sessão de reabilitação e a atual, tem como escopo apresentar de forma visual a diferença entre </p>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Função</th>
            <th>Sigla</th>
            <th>Acertos Última Sessão</th>
            <th>Acertos Sessão Atual</th>
            <th>Erros Última Sessão</th>
            <th>Erros Sessão Atual</th>
            <th>Omissões Última Sessão</th>
            <th>Omissões Sessão Atual</th>
      
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}
              className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{item.Função}</td>
              <td>{item.Sigla}</td>
              <td>{item.AcertoLast}</td>
              <td>{item.Acerto}</td>
              <td>{item.ErroLast}</td>
              <td>{item.Erro}</td>
              <td>{item.OmissõesLast}</td>
              <td>{item.Omissões}</td>
            </tr>
          ))}
        </tbody>
      </table>
              <br />
      <table className={styles.table}>
      <thead>
          <tr>
            <th>Valor total de Acertos Última Sessão</th>
            <th>Valor total de Acertos Sessão Atual</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.id}
              className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{item.Acerto - item.Erro - item.Omissões}</td>
              <td>{item.AcertoLast - item.ErroLast - item.OmissõesLast}</td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  )};

};

export default TableCompare;
