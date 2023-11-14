
import styles from './tableResult.module.css'


const TableResult = () => {
  const data = [
    { Função: "Função Executiva - Controle Inibitório", Sigla: "FECI", Acerto: 16, Erro: 3, Omissões: 14 , Desvio: "±4", Normal: 26, DisLev:"25 - 23", DisMed:"22 - 20", DisGrav:"19 - 17"},
    { Função: "Atenção Seletiva - Esquerda", Sigla: "ASE", Acerto: 13, Erro: 3, Omissões: 2, Desvio: "±4", Normal: 11, DisLev:"10 - 8", DisMed:"7 - 5", DisGrav:"4 - 2"},
    { Função: "Atenção Seletiva - Direita", Sigla: "ASD", Acerto: 15, Erro: 0, Omissões: 0, Desvio: "±4", Normal: 11, DisLev:"10 - 8", DisMed:"7 - 5", DisGrav:"4 - 2"},
    { Função: "Atenção Alternada - Esquerda", Sigla: "AAE", Acerto: 11, Erro: 4, Omissões: 4, Desvio:"±4", Normal: 11, DisLev:"10 - 8", DisMed:"7 - 5", DisGrav:"4 - 2"},
    { Função: "Atenção Alternada - Direita", Sigla: "AAD", Acerto: 15, Erro: 0, Omissões: 4, Desvio: "±4", Normal: 11, DisLev:"10 - 8", DisMed:"7 - 5", DisGrav:"4 - 2"},
    { Função: "Memória de Curto Prazo - Esquerda", Sigla: "MCPE", Acerto: 5, Erro: 2, Omissões: 0, Desvio: "±1", Normal: 1, DisLev:"5 - 4", DisMed:" 3 - 2", DisGrav:"1"},
    { Função: "Memória de Curto Prazo - Direita", Sigla: "MCPD", Acerto: 7, Erro: 0, Omissões: 0, Desvio: "±1", Normal: 1, DisLev:"5 - 4", DisMed:"3 - 2", DisGrav:"1"},
    { Função: "Visuopercepção", Sigla: "VP", Acerto: 27, Erro: 0, Omissões: 33, Desvio: "±8", Normal: 44, DisLev:"43 - 35", DisMed:"34 - 26", DisGrav:"25 - 17"},
    { Função: "Memória de Longo Prazo", Sigla: "MLP", Acerto: 11, Erro: 4, Omissões: 4, Desvio: "±3", Normal: 12, DisLev:"11 - 8", DisMed:"7 - 4", DisGrav:"3"}
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
  );

};

export default TableResult;
