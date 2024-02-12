import styles from './table.module.css'
import okay from '../../../assets/checkbox.svg'
import nokay from '../../../assets/alert.svg'
import {useAuth} from '../../../Context/AuthContext'


const Table = () => {


  const {apiData} = useAuth()

  const gameData = apiData.games

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
  // MPTGDLPGYT89ZZLQY



  const games = [
    
  ]

  const data = [
    
    { name: "FECI", Acertos: resultsData.AteA, Erros: resultsData.AteE, Omissões: resultsData.AteO},
    { name: "ASE", Acertos: resultsData.ConConA, Erros: resultsData.ConConE, Omissões: resultsData.ConConO},
    { name: "ASD", Acertos: resultsData.ConRConA, Erros: resultsData.ConRConE, Omissões: resultsData.ConRConO},
    { name: "AAE", Acertos: resultsData.ConAleA, Erros: resultsData.ConAleE, Omissões: resultsData.ConAleO},
    { name: "AAD", Acertos: resultsData.ConRAleA, Erros: resultsData.ConRAleE, Omissões: resultsData.ConRAleO},
    { name: "MCPE", Acertos: resultsData.ConMenA, Erros: resultsData.ConMenE, Omissões:  resultsData.ConMenO},
    { name: "MCPD", Acertos: resultsData.ConRMenA, Erros: resultsData.ConRMenE, Omissões:  resultsData.ConRMenO},
    { name: "VP", Acertos: resultsData.VmenA, Erros: resultsData.VmenE, Omissões:  resultsData.VmenO},
    { name: "MLP", Acertos: resultsData.menA, Erros: resultsData.menE, Omissões:  resultsData.menO},
  ];
 

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
  );

};

export default Table;
