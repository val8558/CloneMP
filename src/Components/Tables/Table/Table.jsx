import React from 'react';
import styles from './table.module.css'
import okay from '../../../assets/checkbox.svg'
import nokay from '../../../assets/alert.svg'

const Table = () => {
  const data = [
    { Função: "Função Executiva - Controle Inibitório", Sigla: "FECI", Acerto: 16, Erro: 3, Omissões: 14, Média: 26, Pe:"28±2"},
    { Função: "Atenção Seletiva - Esquerda", Sigla: "ASE", Acerto: 13, Erro: 3, Omissões: 2, Média: 11, Pe:"13±2" },
    { Função: "Atenção Seletiva - Direita", Sigla: "ASD", Acerto: 15, Erro: 0, Omissões: 0, Média: 11, Pe:"13±2" },
    { Função: "Atenção Alternada - Esquerda", Sigla: "AAE", Acerto: 11, Erro: 4, Omissões: 4, Média: 11, Pe:"13±2" },
    { Função: "Atenção Alternada - Direita", Sigla: "AAD", Acerto: 15, Erro: 0, Omissões: 4, Média: 11, Pe: "13±2" },
    { Função: "Memória de Curto Prazo - Esquerda", Sigla: "MCPE", Acerto: 5, Erro: 2, Omissões: 0, Média: 5, Pe: "6±1"  },
    { Função: "Memória de Curto Prazo - Direita", Sigla: "MCPD", Acerto: 7, Erro: 0, Omissões: 0, Média: 5,  Pe: "6±1"},
    { Função: "Visuopercepção", Sigla: "VP", Acerto: 27, Erro: 0, Omissões: 33, Média: 44, Pe: "52±8"},
    { Função: "Memória de Longo Prazo", Sigla: "MLP", Acerto: 11, Erro: 4, Omissões: 4, Média: 9, Pe:"12±3"}
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
