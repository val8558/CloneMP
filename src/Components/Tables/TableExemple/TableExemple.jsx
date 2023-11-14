
import styles from './tableExemple.module.css'

const TableExemple = () => {
  const data = [
    { Função: "Função Executiva - Controle Inibitório", Sigla: "FECI", Desvio: "±4", Normal: 26, DesLev:"25 - 23", DesMed:"22 - 20", DesGrav:"19 - 17"},
    { Função: "Atenção Seletiva - Esquerda", Sigla: "ASE", Desvio: "±4", Normal: 11, DesLev:"10 - 8", DesMed:"7 - 5", DesGrav:"4 - 2"},
    { Função: "Atenção Seletiva - Direita", Sigla: "ASD", Desvio: "±4", Normal: 11, DesLev:"10 - 8", DesMed:"7 - 5", DesGrav:"4 - 2"},
    { Função: "Atenção Alternada - Esquerda", Sigla: "AAE", Desvio:"±4", Normal: 11, DesLev:"10 - 8", DesMed:"7 - 5", DesGrav:"4 - 2"},
    { Função: "Atenção Alternada - Direita", Sigla: "AAD", Desvio: "±4", Normal: 11, DesLev:"10 - 8", DesMed:"7 - 5", DesGrav:"4 - 2"},
    { Função: "Memória de Curto Prazo - Esquerda", Sigla: "MCPE", Desvio: "±1", Normal: 1, DesLev:"5 - 4", DesMed:" 3 - 2", DesGrav:"1"},
    { Função: "Memória de Curto Prazo - Direita", Sigla: "MCPD", Desvio: "±1", Normal: 1, DesLev:"5 - 4", DesMed:"3 - 2", DesGrav:"1"},
    { Função: "Visuopercepção", Sigla: "VP", Desvio: "±8", Normal: 44, DesLev:"43 - 35", DesMed:"34 - 26", DesGrav:"25 - 17"},
    { Função: "Memória de Longo Prazo", Sigla: "MLP", Desvio: "±3", Normal: 12, DesLev:"11 - 8", DesMed:"7 - 4", DesGrav:"3"}
  ];

  const data2 = [
    { Função: "Visuopercepção", Sigla: "VP", Acerto: 44, Erro: "-", Omissões: 16, Média: 44, Pe: "52±8", Classificação: "Normal"},
    { Função: "Memória de Curto Prazo", Sigla: "MCP", Acerto: 5, Erro: 2, Omissões: 0, Média: 5, Pe: "6±1", Classificação: "Disfunção Grave"},
    { Função: "Atenção Alternada", Sigla: "AA", Acerto: 7, Erro: 0, Omissões: 0, Média: 5,  Pe: "6±1", Classificação:"Disfunção Moderada" },
    { Função: "Função Executiva", Sigla: "FE", Acerto: 11, Erro: 4, Omissões: 4, Média: 9, Pe:"12±3", Classificação:"Disfunção Leve"},
  ]

  return (
    <>
      <div className={styles.name}>
        <h1>Como interpretar os dados da tabela MentalPlus®</h1>
        <p>Para conseguir reconhecer as dificuldades da pessoa avaliada ou reabilitada pelo MentalPlus® é necessário observar a coluna Resultados Obtidos que é o cálculo feito a partir dos pontos obtidos nas colunas Acertos; Erros; Omissões.</p>
        <br />
        <p>Esta coluna Resultados Obtidos deve ser associada à coluna Resultados Esperados para que o avaliador possa interpretar as disfunções cognitivas ou as funções cognitivas que estão preservadas na pessoa que foi avaliada ou está sendo reabilitada.</p>
        <br />
        <p>Os dados calculados para a coluna Resultados Obtidos é a somatória das colunas Erros + Omissões e posteriormente a subtração deste resultado ao resultado da coluna Acertos. </p>
        <br />
        <p>Visuopercepção: para a coluna Erros não existe pontuação. Subtrai-se os resultados da coluna Omissões com os resultados da coluna Acertos: 42-18= 34 pontos. Este resultado é comparado ao resultado da coluna Resultados Esperados. </p>
        <br />
        <p>Para a visuopercepção o resultado esperado é 42 com desvio padrão de 8 pontos. Portanto, pode-se obter dos 42 pontos esperados até menos ou mais 8 pontos para estar dentro do resultado esperado. Para estar com a função visuoperceptiva dentro da normalidade o Resultado Obtido deve estar em um intervalo entre 34 e 60 pontos. Abaixo desta pontuação classificamos a disfunção como leve (33 e 26 pontos); disfunção moderada (25 e 18 pontos), disfunção grave (17 pontos abaixo)</p>
        
        <h1>Funções Cognitivas e Classificação das alterações apresentadas: </h1>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Função</th>
            <th>Sigla</th>
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
              <td>{item.Desvio}</td>
              <td>{item.Normal}</td>
              <td>{item.DesLev}</td>
              <td>{item.DesMed}</td>
              <td>{item.DesGrav}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.name}>
        <h2>Veja um Exemplo</h2>
        <span>Paciente com Declínio Cognitivo, 68 anos. Foi avaliado e obteve os seguintes resultados MentalPlus.</span>
        <br />
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Função Avaliada</th>
            <th>Sigla</th>
            <th>Acerto</th>
            <th>Erro</th>
            <th>Omissões</th>
            <th>Resultado Obtido</th>
            <th>Resultado Esperado</th>
            <th>Classificação</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item, index) => (
            <tr key={item.id}
              className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{item.Função}</td>
              <td>{item.Sigla}</td>
              <td>{item.Acerto}</td>
              <td>{item.Erro}</td>
              <td>{item.Omissões}</td>
              <td>{item.Média}</td>
              <td>{item.Pe}</td>
              <td>{item.Classificação}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.name}>
        <h2>Para a interpretação dos resultados obtidos chegamos a seguinte análise.</h2>
        <p>Paciente com prejuízo cognitivo. Suas dificuldades são para memorizar informações recentes (observe que a memória de curto-prazo está com disfunção grave). Dificuldade em realizar tarefas concomitantes ou simultâneas (veja o resultado para a atenção alternada em disfunção moderada). Consegue ter planejamento, busca de estratégias para solucionar problemas simples, provavelmente das atividades de vida diária, embora apresente falha em controlar seus impulsos (veja os resultados para a função executiva em disfunção leve).</p>
        <br />
      </div>

    </>
  );



  
};

export default TableExemple;
