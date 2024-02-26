
import styles from './TableExemple.module.css'

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
    { Função: "Função Executiva (Controle Inibitório) FECI", TotalAv: -7, TotalReab1: -1, TotalReab2: 15, TotalReab3: 25, TotalReab4: 28,  Desvio: "±4", Normal: 26,  DesLev:"25 - 23", DesMed:"22 - 20", DesGrav:"19 - 17"},
    { Função: "Atenção Seletiva (à Esquerda) ASE",TotalAv: 15, TotalReab1: 8, TotalReab2: 14, TotalReab3: 14, TotalReab4: 15, Desvio: "±4", Normal: 11, DesLev:"10 - 8", DesMed:"7 - 5", DesGrav:"4 - 2"},
    { Função: "Atenção Seletiva (à Direita) ASD", TotalAv: 14, TotalReab1: 15, TotalReab2: 15, TotalReab3: 15, TotalReab4: 15, Desvio: "±4", Normal: 11, DesLev:"10 - 8", DesMed:"7 - 5", DesGrav:"4 - 2" },
    { Função: "Atenção Alternada (á Esquerda) AAE", TotalAv: 9, TotalReab1: 3, TotalReab2: 9, TotalReab3: 14, TotalReab4: 15, Desvio:"±4", Normal: 11, DesLev:"10 - 8", DesMed:"7 - 5", DesGrav:"4 - 2"},
    { Função: "Atenção Alternada (á Direita) AAD", TotalAv: 13, TotalReab1: 11, TotalReab2: 14, TotalReab3: 14, TotalReab4: 14, Desvio:"±4", Normal: 11, DesLev:"10 - 8", DesMed:"7 - 5", DesGrav:"4 - 2"},
    { Função: "Memória de Curto Prazo (á Esquerda) MCPE", TotalAv: 1, TotalReab1: 3, TotalReab2: 4, TotalReab3: 5, TotalReab4: 7, Desvio: "±1", Normal: 1, DesLev:"5 - 4", DesMed:" 3 - 2", DesGrav:"1"},
    { Função: "Memória de Curto Prazo (á Direita) MCPD", TotalAv: 2, TotalReab1: 7, TotalReab2: 5, TotalReab3: 6, TotalReab4: 7, Desvio: "±1", Normal: 1, DesLev:"5 - 4", DesMed:" 3 - 2", DesGrav:"1"},
    { Função: "Visuopercepção VP", TotalAv: 23, TotalReab1: 27, TotalReab2: 18, TotalReab3: 42, TotalReab4: 53, Desvio: "±8", Normal: 44, DesLev:"43 - 35", DesMed:"34 - 26", DesGrav:"25 - 17"},
    { Função: "Memória de Longo Prazo MLP", TotalAv: 9, TotalReab1: 7, TotalReab2: 1, TotalReab3: 11, TotalReab4: 13, Desvio: "±3", Normal: 12, DesLev:"11 - 8", DesMed:"7 - 4", DesGrav:"3"},
  ]

  return (
    <>
      <div className={styles.name}>
        <h1>Como interpretar os dados da tabela MentalPlus®</h1>
        <p>Para conseguir reconhecer as dificuldades da pessoa avaliada ou reabilitada pelo MentalPlus®  é necessário observar a coluna Resultados Obtidos que é o cálculo feito a partir dos pontos obtidos nas colunas Acertos; Erros; Omissões.</p>
        <br />
        <p>Esta coluna Resultados Obtidos deve ser associada à coluna Resultados Esperados para que o avaliador possa interpretar as disfunções cognitivas ou as funções cognitivas que estão preservadas na pessoa que foi avaliada ou está sendo reabilitada.</p>
        <br />
        <p>Os dados calculados para a coluna Resultados Obtidos é a somatória das colunas Erros + Omissões e posteriormente a subtração deste resultado ao resultado da coluna Acertos</p>
        <br />
        <p>Exceto para a Função Visuopercepção/Visuoconstrução que para a coluna Erros não existe pontuação. Subtrai-se os resultados da coluna Omissões com os resultados da coluna Acertos: 42-18= 34 pontos. Este resultado é comparado ao resultado da coluna Resultados Esperados.</p>
        <br />
        <p>Para a visuopercepção/visuoconstrução o resultado esperado é 42 com desvio padrão de 8 pontos. Portanto, pode-se obter dos 42 pontos esperados até menos ou mais 8 pontos para estar dentro do resultado esperado. Para estar com a função visuoperceptiva/visuoconstrutiva dentro da normalidade o Resultado Obtido deve estar em um intervalo entre 34 e 60 pontos. Abaixo desta pontuação classificamos a disfunção como leve (33 e 26 pontos); disfunção moderada (25 e 18 pontos), disfunção grave (17 pontos abaixo).</p>
        
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
        <p>Paciente com queixa de tremor, queda espontânea e esquecimento constante de senhas bancárias e compromissos importantes. Quando avaliado pelo jogo digital MentalPlus® tinha 54 anos. Na tabela abaixo os resultados avaliativos evidenciam prejuízo cognitivo nas funções executivas, mnemônicas e visuoconstrutivas. A HD neuropsicológica foi de Doença de Parkinson e solicitado exame de neuroimagem, bem como exames laboratoriais para auxílio na conclusão avaliativa. Os exames complementares corroboraram com a HD e o DDf foi de DP. (Doença de Parkinson, sendo solicitado intervenção medicamentosa, acompanhamento neurológico, conduta neuropsiquiátrica e reabilitação neuropsicológica.</p>
        <br />
        <p>A reabilitação neuropsicológica foi realizada com MentalPlus®, em uma série de 12 sessões, uma vez por semana com técnicas de estimulação elétrica concomitantes. Na tabela abaixo estão expostos os resultados da sessão avaliativa com MentalPlus® e 04 (quatro) sessões de reabilitação cognitiva do mesmo instrumento. Observa-se o progresso substancial e efetivo em todas as funções cognitivas progressivamente chegando a 4ª sessão com todas as funções dentro dos resultados esperados em classificação (Normal).</p>
        <br />
      </div>

      <table className={styles.table1}>
        <thead>
          <tr>
            <th>Função Cognitiva</th>
            <th>Resultados Avaliação</th>
            <th>Resultados 1° sessão Reabilitação</th>
            <th>Resultados 2° sessão Reabilitação</th>
            <th>Resultados 3° sessão Reabilitação</th>
            <th>Resultados 4° sessão Reabilitação</th>
            <th>Desvio Padrão</th>
            <th>Resultado Esperado (Normal)</th>
            <th>Disfunção Leve</th>
            <th>Disfunção Moderada</th>
            <th>Disfunção Grave</th>
          </tr>
        </thead>
        <tbody>
          {data2.map((item, index) => (
            <tr key={item.id}
              className={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
              <td>{item.Função}</td>
              <td>{item.TotalAv}</td>
              <td>{item.TotalReab1}</td>
              <td>{item.TotalReab2}</td>
              <td>{item.TotalReab3}</td>
              <td>{item.TotalReab4}</td>
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
        <h2>Para a interpretação dos resultados obtidos chegamos a seguinte análise.</h2>
        <p>Paciente com prejuízo cognitivo decorrente a doença de Parkinson e Parkinsonismo. Dificuldades para planejar, buscar estratégias para memorizar, tomar atitudes e solucionar problemas. Memorizar informações simples ou complexas e visuoperceber e visuoconstruir o ambiente a sua volta. Se analisarmos com cautela, todas estas disfunções ocorrem em um paciente com a Doença de Parkinson.</p>
        <br />
        <p>Para sua informação, segue algumas informações sobre a Doença de Parkinson e Parkinsonismo segundo a CID-11.</p>
        <br />
        <p>Classificada com a sigla 8A00.0 a doença de Parkinson é uma doença degenerativa progressiva de início gradual cujas manifestações incluem bradicinesia mais um dos seguintes sintomas: tremor, rigidez ou instabilidade postural. As manifestações não motoras incluem disfunção autonômica e características neuropsiquiátricas. Pode progredir para a Demência de Parkinson e neste caso a sigla deve ser 6D85.0 Demência devido à doença de Parkinson, ou apresentar dor musculoesquelética secundária crônica devido a doença do sistema nervoso MG30.32.</p>
        <br />
        <p>Para o parkinsonismo a sigla deve ser 8A00 é uma síndrome clínica caracterizada por quatro características principais: tremor de repouso, rigidez muscular, acinesia ou bradicinesia e distúrbios posturais que incluem marcha arrastada e postura flexionada e perda de reflexos posturais. A bradicinesia e uma outra característica clínica são necessárias para fazer um diagnóstico de parkinsonismo. O parkinsonismo pode resultar de uma variedade de condições, incluindo distúrbios neurodegenerativos progressivos, como a doença de Parkinson ou o parkinsonismo atípico, onde a degeneração progressiva dos neurônios negros e de outros neurônios leva à deficiência de dopamina. O parkinsonismo também pode ser resultado de lesões estruturais, como acidentes vasculares cerebrais ou tumores, ou bloqueio dos receptores de dopamina no corpo estriado por medicamentos como os neurolépticos.</p>
      </div>

    </>
  );



  
};

export default TableExemple;
