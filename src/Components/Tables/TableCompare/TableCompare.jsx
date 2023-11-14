
import styles from './TableCompare.module.css'


const TableCompare = () => {
  const data= [
    { Função: "Função Executiva - Controle Inibitório", Sigla: "FECI", Acerto: 16, Erro: 3, Omissões: 14, AcertoLast: 16, ErroLast: 3, OmissõesLast: 14},
    { Função: "Atenção Seletiva - Esquerda", Sigla: "ASE", Acerto: 13, Erro: 3, Omissões: 2, AcertoLast: 13, ErroLast: 3, OmissõesLast: 2},
    { Função: "Atenção Seletiva - Direita", Sigla: "ASD", Acerto: 15, Erro: 0, Omissões: 0,  AcertoLast: 15, ErroLast: 0, OmissõesLast: 0},
    { Função: "Atenção Alternada - Esquerda", Sigla: "AAE", Acerto: 11, Erro: 4, Omissões: 4,  AcertoLast: 11, ErroLast: 4, OmissõesLast: 4},
    { Função: "Atenção Alternada - Direita", Sigla: "AAD", Acerto: 15, Erro: 0, Omissões: 4,  AcertoLast: 15, ErroLast: 0, OmissõesLast: 4},
    { Função: "Memória de Curto Prazo - Esquerda", Sigla: "MCPE",  Acerto: 5, Erro: 2, Omissões: 0,  AcertoLast: 5, ErroLast: 2, OmissõesLast: 0},
    { Função: "Memória de Curto Prazo - Direita", Sigla: "MCPD", Acerto: 7, Erro: 0, Omissões: 0,  AcertoLast: 7, ErroLast: 0, OmissõesLast: 0},
    { Função: "Visuopercepção", Sigla: "VP", Acerto: 27, Erro: 0, Omissões: 33, AcertoLast: 27,  ErroLast: 0, OmissõesLast: 33,},
    { Função: "Memória de Longo Prazo", Sigla: "MLP", Acerto: 11, Erro: 4, Omissões: 4, AcertoLast: 11, ErroLast: 4, OmissõesLast: 4},
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
              <td>{item.Acerto}</td>
              <td>{item.AcertoLast}</td>
              <td>{item.Erro}</td>
              <td>{item.ErroLast}</td>
              <td>{item.Omissões}</td>
              <td>{item.OmissõesLast}</td>
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
  );

};

export default TableCompare;
