import type { Question } from '../types';

export const allQuizzes: Record<string, Question[]> = {
  "2024": [
    {
      id: 1,
      text: "Um grupo escolheu uma planta chamada Matteuccia struthiopteris (Samambaia-avestruz). O que o grupo deve esperar em relação às suas características reprodutivas e estruturais ao observar o crescimento da planta?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.07.22.png",
      options: [
        { id: 'A', text: "A planta exibirá flores e produzirá sementes, com pétalas coloridas." },
        { id: 'B', text: "A planta mostrará o crescimento de folhas compostas e se reproduzirá por meio de esporos." },
        { id: 'C', text: "A planta desenvolverá caules grossos e lenhosos e grandes corpos de frutificação como seu principal meio de reprodução." },
        { id: 'D', text: "A planta exibirá longas estruturas em forma de tubo para capturar insetos, dependendo deles para nutrição e reprodução." }
      ],
      correctAnswerId: 'B',
      explanation: "Matteuccia struthiopteris, ou Samambaia-avestruz, é um tipo de samambaia. As samambaias se reproduzem através de esporos, não de flores e sementes. Elas desenvolvem folhas compostas. Portanto, a opção B é a escolha correta."
    },
    {
      id: 2,
      text: "A fertilização é um processo importante na reprodução sexuada. Escolha o grupo correto de animais que passam por processos de fertilização interna e externa com base na tabela.",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.23.08.png",
      options: [
        { id: 'A', text: "Interna: Apenas Peixes / Externa: Apenas Mamíferos" },
        { id: 'B', text: "Interna: Peixes e Anfíbios / Externa: Répteis, Aves e Mamíferos" },
        { id: 'C', text: "Interna: Répteis, Aves e Mamíferos / Externa: Peixes e Anfíbios" },
        { id: 'D', text: "Interna: Apenas Mamíferos / Externa: Apenas Anfíbios" }
      ],
      correctAnswerId: 'C',
      explanation: "A fertilização externa ocorre em animais como Peixes e Anfíbios. A fertilização interna ocorre em Répteis, Aves e Mamíferos. Isso torna a opção C a escolha correta."
    },
    {
      id: 3,
      text: "Um estudante colocou três objetos de alumínio (P: folha, Q: lata vazia, R: bloco sólido) em um béquer com água. Qual opção descreve corretamente o comportamento deles após 2 minutos?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.24.00.png",
      options: [
        { id: 'A', text: "Todos os três objetos afundarão até o fundo." },
        { id: 'B', text: "A folha (P) e o bloco (R) afundarão, enquanto a lata (Q) flutuará." },
        { id: 'C', text: "O bloco (R) afundará, enquanto a folha (P) e a lata (Q) flutuarão." },
        { id: 'D', text: "Todos os três objetos flutuarão na superfície." }
      ],
      correctAnswerId: 'C',
      explanation: "O bloco sólido de alumínio (R) é mais denso que a água e afundará. A lata oca (Q) e a folha leve (P) têm uma densidade geral menor que a da água (devido ao ar preso e à forma), o que as faz flutuar."
    },
    {
      id: 4,
      text: "Considere os diferentes grupos de animais abaixo. Qual das opções identifica corretamente os animais com base na sua capacidade de regular internamente a temperatura corporal? (Legenda: ✓ - Sim; × – Não)",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.26.25-1024x369.png",
      options: [
        { id: 'A', text: "Grupo W" },
        { id: 'B', text: "Grupo Y" },
        { id: 'C', text: "Grupo X" },
        { id: 'D', text: "Grupo Z" }
      ],
      correctAnswerId: 'D',
      explanation: "Animais de sangue quente (endotérmicos) como mamíferos e aves podem regular sua temperatura. Animais de sangue frio (ectotérmicos) como peixes, anfíbios e répteis não podem. O Grupo Z contém um tubarão (peixe) e uma tartaruga (réptil), ambos de sangue frio e que dependem do calor externo."
    },
    {
      id: 5,
      text: "Qual configuração exibe corretamente o arranjo interno dos ímãs quando o interruptor magnético é ligado para atrair a haste de aço?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.29.16.png",
      options: [
        { id: 'A', text: "Configuração A" },
        { id: 'B', text: "Configuração B" },
        { id: 'C', text: "Configuração C" },
        { id: 'D', text: "Configuração D" }
      ],
      correctAnswerId: 'C',
      explanation: "Quando o interruptor está ligado, os ímãs se alinham para que seus campos se combinem e criem um campo magnético externo forte. A opção C mostra o arranjo correto onde polos opostos (N e S) estão próximos, criando o campo desejado para atrair a haste de aço."
    },
    {
        id: 6,
        text: "Qual propriedade está sendo testada na montagem experimental onde um béquer de água é colocado sobre o 'Material X' suportado por um suporte?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.31.29.png",
        options: [
            { id: 'A', text: "Flexibilidade" },
            { id: 'B', text: "Resistência" },
            { id: 'C', text: "Impermeabilidade" },
            { id: 'D', text: "Transparência" }
        ],
        correctAnswerId: 'B',
        explanation: "A montagem foi projetada para testar a resistência do Material X, observando quanta massa (o béquer com água) ele pode suportar sem falhar. Sua capacidade de suportar peso está diretamente relacionada à sua resistência."
    },
    {
        id: 7,
        text: "Uma árvore de Pinho Bristlecone pode viver por quase 5.000 anos e suportar condições adversas. Qual explicação descreve suas características únicas de sobrevivência?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.33.36.png",
        options: [
            { id: 'A', text: "Ele se transforma em um ser não vivo ao perder todas as suas folhas." },
            { id: 'B', text: "Possui uma forma única de fotossíntese que não requer água." },
            { id: 'C', text: "Ele se adapta como um ser não vivo, não necessitando mais de nutrientes." },
            { id: 'D', text: "Desenvolveu uma camada espessa de casca não viva que o isola e minimiza a perda de água." }
        ],
        correctAnswerId: 'D',
        explanation: "O Pinho Bristlecone evoluiu adaptações de sobrevivência únicas. Sua camada espessa de casca não viva isola seus tecidos vivos, protegendo-os de flutuações de temperatura e reduzindo a perda de água, o que é crucial durante períodos de seca."
    },
    {
        id: 8,
        text: "Qual afirmação está correta sobre as características dos insetos?",
        options: [
            { id: 'A', text: "Os insetos possuem um exoesqueleto de quitina, que fornece suporte e proteção ao corpo." },
            { id: 'B', text: "Os insetos têm um esqueleto interno que sustenta a estrutura do corpo." },
            { id: 'C', text: "Os insetos usam cromóforos na pele para mudar de cor." },
            { id: 'D', text: "Os insetos respiram por pulmões, semelhante aos vertebrados." }
        ],
        correctAnswerId: 'A',
        explanation: "A afirmação 1 está correta: os insetos têm um exoesqueleto de quitina. A afirmação 2 está incorreta; eles têm um esqueleto externo. A afirmação 3 está incorreta; eles não usam cromóforos para mudar de cor. A afirmação 4 está incorreta; eles usam um sistema de traqueias, não pulmões."
    },
    {
        id: 9,
        text: "Qual das seguintes opções representa corretamente o objetivo do experimento em que um estudante enrola um número variável de bobinas de cobre em um prego de ferro e mede o tempo que leva para pegar 10 clipes de papel?",
        options: [
            { id: 'A', text: "Investigar a relação entre o número de bobinas em um eletroímã e sua força magnética." },
            { id: 'B', text: "Ver por quanto tempo um eletroímã pode segurar clipes de papel." },
            { id: 'C', text: "Testar a relação entre o tamanho da bateria e a força magnética." },
            { id: 'D', text: "Medir como a distância afeta a velocidade de atração." }
        ],
        correctAnswerId: 'A',
        explanation: "O objetivo do experimento é investigar como o número de bobinas (a variável independente) afeta sua força magnética, medida pela rapidez com que ele pode pegar um número definido de clipes de papel (a variável dependente)."
    },
    {
        id: 10,
        text: "Gengibre e Cúrcuma são plantas que armazenam compostos bioativos (Gingerol e Curcumina) em suas estruturas subterrâneas. Como são chamados esses órgãos de armazenamento?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.38.54.png",
        options: [
            { id: 'A', text: "Bulbo" },
            { id: 'B', text: "Tubérculo" },
            { id: 'C', text: "Rizoma" },
            { id: 'D', text: "Raiz subterrânea" }
        ],
        correctAnswerId: 'C',
        explanation: "O rizoma é o caule subterrâneo que serve como órgão de armazenamento tanto para o gengibre quanto para a cúrcuma, onde seus respectivos compostos bioativos são concentrados. Bulbos são para plantas como cebolas, e tubérculos para plantas como batatas."
    },
    {
        id: 11,
        text: "Qual afirmação melhor explica o comportamento de crescimento observado das células de levedura nas soluções P (sem glicose/proteína) e Q (com glicose/proteína) com base nos gráficos fornecidos?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.42.38.png",
        options: [
            { id: 'A', text: "O crescimento foi melhor na solução Q devido à presença de minerais e vitaminas." },
            { id: 'B', text: "A levedura na solução P teve um crescimento fraco devido a ingredientes inibidores." },
            { id: 'C', text: "O crescimento foi melhor na solução Q devido à ausência de ingredientes que fornecem energia." },
            { id: 'D', text: "A levedura na solução P teve um crescimento fraco devido à ausência de ingredientes essenciais que fornecem energia." }
        ],
        correctAnswerId: 'D',
        explanation: "O crescimento da levedura na Solução P foi fraco porque faltavam ingredientes que fornecem energia, como glicose e proteínas. A Solução Q continha esses nutrientes necessários, o que permitiu que as células de levedura prosperassem, como mostrado no gráfico."
    },
    {
        id: 12,
        text: "Com base no texto sobre a fabricação de queijo, escolha o papel correto da bactéria Lactobacillus.",
        options: [
            { id: 'A', text: "Determina o teor de açúcar no queijo." },
            { id: 'B', text: "O número de bactérias é fundamental para a embalagem do queijo." },
            { id: 'C', text: "Reduz o tempo de fermentação coalhando o leite." },
            { id: 'D', text: "Influencia o tempo de fermentação produzindo ácidos e gases que contribuem para as características do queijo." }
        ],
        correctAnswerId: 'D',
        explanation: "A espécie selecionada de Lactobacillus desempenha um papel crucial ao influenciar o tempo de fermentação, produzindo subprodutos como ácido lático e dióxido de carbono. Esses subprodutos contribuem para o sabor, textura e maturação final do queijo."
    },
    {
        id: 13,
        text: "O desempenho de uma empresa de açúcar mudou significativamente após o ano 5. Com base no gráfico e nas informações sobre a cana-de-açúcar, qual é a mudança mais relevante que a empresa implementou?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.48.07.png",
        options: [
            { id: 'A', text: "A empresa usou raízes, flores e sementes preservadas para iniciar uma fazenda." },
            { id: 'B', text: "A empresa semeou sementes em germinação." },
            { id: 'C', text: "A empresa plantou mudas de caule de cana-de-açúcar para estabelecer sua própria fazenda." },
            { id: 'D', text: "A empresa passou a usar folhas em vez de caules." }
        ],
        correctAnswerId: 'C',
        explanation: "O aumento acentuado no desempenho a partir do 6º ano é melhor explicado pela adoção do método de plantio de mudas de caule. Esta é uma prática comum e eficiente para o cultivo de cana-de-açúcar, permitindo que a empresa estabeleça sua própria fonte confiável."
    },
    {
        id: 14,
        text: "No experimento com lentilhas pretas embebidas em um frasco selado com hidróxido de potássio, qual processo criou o vácuo?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.51.11.png",
        options: [
            { id: 'A', text: "As lentilhas passaram por germinação e respiração, liberando dióxido de carbono que foi absorvido pelo hidróxido de potássio." },
            { id: 'B', text: "O vácuo foi criado pela troca gasosa na superfície externa da lentilha." },
            { id: 'C', text: "As lentilhas absorveram dióxido de carbono para a fotossíntese." },
            { id: 'D', text: "As lentilhas absorveram dióxido de carbono e liberaram oxigênio." }
        ],
        correctAnswerId: 'A',
        explanation: "Durante a germinação, as lentilhas respiram, quebrando os alimentos armazenados e liberando dióxido de carbono. O hidróxido de potássio no tubo de ensaio absorve esse CO2, reduzindo o volume de gás e a pressão dentro do frasco, criando um vácuo."
    },
    {
        id: 15,
        text: "Com base nas observações do estudante com uma bola de ferro, um ímã e diferentes placas, qual afirmação é verdadeira?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-18.55.29.png",
        options: [
            { id: 'A', text: "A bola de ferro foi sempre atraída, exceto com uma placa de cobre onde foi repelida." },
            { id: 'B', text: "A bola de ferro foi repelida com uma placa de vidro e atraída por todas as outras." },
            { id: 'C', text: "A bola de ferro não mostrou interação com o ímã quando uma placa de aço foi usada." },
            { id: 'D', text: "A bola de ferro foi atraída com uma placa de níquel, mas repelida com uma placa de aço." }
        ],
        correctAnswerId: 'C',
        explanation: "Aço e Níquel são materiais magnéticos que bloqueiam ou redirecionam o campo magnético, levando a nenhuma interação entre a bola de ferro e o ímã. Vidro e Cobre são não magnéticos, então eles permitem que a força magnética passe, atraindo a bola."
    },
    {
        id: 16,
        text: "Os pombos-correio têm uma notável capacidade de navegação. Com base nas informações fornecidas, escolha a afirmação correta.",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.00.05.png",
        options: [
            { id: 'A', text: "A ave mostra instintos de navegação adaptativos respondendo a estímulos ambientais como o campo magnético da Terra." },
            { id: 'B', text: "A ave demonstra migração sazonal usando o campo magnético." },
            { id: 'C', text: "A ave passa por um crescimento notável durante suas longas jornadas." },
            { id: 'D', text: "A navegação da ave é uma característica de salvaguarda, destacando um papel protetor de seus instintos para a sobrevivência." }
        ],
        correctAnswerId: 'D',
        explanation: "O bico de magnetita e as células oculares especializadas ajudam a ave a navegar, garantindo que ela não se perca durante voos longos. Essa adaptação é crucial para a sobrevivência da ave, destacando as características protetoras de suas habilidades únicas de navegação."
    },
    {
        id: 17,
        text: "Como o comportamento das formigas de quebrar sementes difere entre sementes dicotiledôneas (ervilhas, coentro) e monocotiledôneas (arroz, milho) para impedir a germinação?",
        options: [
            { id: 'A', text: "As formigas quebram tanto as sementes dicotiledôneas quanto as monocotiledôneas em quatro metades para impedir a germinação." },
            { id: 'B', text: "As formigas quebram as sementes dicotiledôneas em quatro metades, mas as sementes monocotiledôneas em duas metades." },
            { id: 'C', text: "As formigas quebram as sementes dicotiledôneas em quatro partes, mas quebram as sementes monocotiledôneas em duas metades." },
            { id: 'D', text: "As formigas quebram as sementes dicotiledôneas, mas deixam as sementes monocotiledôneas intactas." }
        ],
        correctAnswerId: 'A',
        explanation: "As formigas quebram tanto as sementes dicotiledôneas quanto as monocotiledôneas em quatro metades. Isso ocorre porque ambos os tipos de sementes ainda podem brotar mesmo quando partidas ao meio, então as formigas tomam medidas adicionais para garantir que não germinem."
    },
    {
        id: 18,
        text: "O ginandromorfismo em borboletas é uma condição com características tanto masculinas quanto femininas. Em qual estágio do ciclo de vida da borboleta essas características são mais prováveis de se tornarem reconhecíveis?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.05.08.png",
        options: [
            { id: 'A', text: "Estágio adulto" },
            { id: 'B', text: "Estágio de larva" },
            { id: 'C', text: "Estágio de pupa" },
            { id: 'D', text: "Estágio de ovo" }
        ],
        correctAnswerId: 'C',
        explanation: "O ginandromorfismo é mais provável de se tornar visível durante o estágio de pupa. É quando a borboleta passa pela metamorfose e desenvolve suas características morfológicas adultas distintas, revelando os traços de gênero duplo."
    },
    {
        id: 19,
        text: "Um estudante testou quatro garrafas térmicas. Qual conclusão ajudará corretamente o estudante a selecionar uma garrafa para manter seu café quente?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.07.56.png",
        options: [
            { id: 'A', text: "As garrafas de cerâmica e isopor são adequadas, pois são excelentes condutoras de calor." },
            { id: 'B', text: "A garrafa de ferro não pode ser usada devido à sua má condução de calor." },
            { id: 'C', text: "Uma garrafa de vidro de parede dupla seria melhor se convertida em uma garrafa de parede tripla." },
            { id: 'D', text: "As garrafas de cerâmica e isopor são as mais adequadas devido às suas excelentes propriedades de isolamento térmico." }
        ],
        correctAnswerId: 'D',
        explanation: "Cerâmica e Isopor são os mais adequados porque são excelentes isolantes térmicos (maus condutores de calor), como demonstrado pela menor queda na temperatura do café em 6 horas. O ferro é um bom condutor e esfriou rapidamente."
    },
    {
        id: 20,
        text: "Duas placas, Material X e Material Y, foram submetidas a um teste de toque com o dedo e a um teste com cubo de gelo. Qual afirmação pode ser inferida corretamente? (Nota: X parece mais quente, derrete o gelo mais devagar. Y parece mais frio, derrete o gelo mais rápido).",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.10.13.png",
        options: [
            { id: 'A', text: "O Material X é ferro (alta condutividade) e o Material Y é cerâmica (baixa resistividade)." },
            { id: 'B', text: "O Material Y é alumínio (alta condutividade) e o Material X é ferro (alta resistividade)." },
            { id: 'C', text: "O Material X é plástico (alta resistividade) e o Material Y é alumínio (alta condutividade)." },
            { id: 'D', text: "O Material Y é cerâmica (baixa resistividade) e o Material X é plástico (alta condutividade)." }
        ],
        correctAnswerId: 'C',
        explanation: "O Material Y parece frio e derrete o gelo rapidamente porque é um bom condutor térmico (como o alumínio), retirando rapidamente o calor do dedo e transferindo-o para o gelo. O Material X parece mais quente e derrete o gelo lentamente porque é um mau condutor/bom isolante (como o plástico)."
    },
    {
        id: 21,
        text: "Cientistas querem criar uma galinha artificial com características da galinha tibetana (adaptada ao frio, baixa pressão). Qual método é mais apropriado?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.12.30.png",
        options: [
            { id: 'A', text: "Criar galinhas-mãe normais em um ambiente de laboratório frio e de baixa pressão." },
            { id: 'B', text: "Desenvolver ovos postos normalmente em um recipiente de vidro frio e parcialmente fechado." },
            { id: 'C', text: "Amadurecer embriões normais em um recipiente parcialmente fechado em um ambiente de laboratório frio e de baixa pressão." },
            { id: 'D', text: "Expor ovos prestes a eclodir a um ambiente frio e de baixa pressão." }
        ],
        correctAnswerId: 'C',
        explanation: "Amadurecer os embriões em um ambiente adverso simulado é o método mais apropriado. Isso permite que os embriões se desenvolvam e se adaptem durante sua fase de crescimento, potencialmente adquirindo as características desejadas, como uma maior ingestão de oxigênio."
    },
    {
        id: 22,
        text: "Qual era o objetivo do experimento que testou a capacidade de retenção de água das folhas X, Y e Z, com base no gráfico?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.17.03.png",
        options: [
            { id: 'A', text: "Provar que a folha Z é o material impermeável mais adequado devido à sua maior capacidade de retenção de água." },
            { id: 'B', text: "Mostrar que X e Y são excelentes materiais impermeáveis devido às suas menores capacidades de retenção de água." },
            { id: 'C', text: "Provar que X e Z são os materiais menos eficientes para reter água." },
            { id: 'D', text: "Demonstrar que a folha Y é o material impermeável mais eficiente." }
        ],
        correctAnswerId: 'A',
        explanation: "O objetivo é encontrar o melhor material impermeável. Quanto mais tempo um material consegue reter água em sua superfície sem deixá-la passar, mais impermeável ele é. A folha Z reteve água pela duração máxima, provando ter as melhores propriedades impermeáveis."
    },
    {
        id: 23,
        text: "Qual razão explica corretamente a diferença entre a planta Monotropa uniflora e uma planta de Cacto?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.23.19.png",
        options: [
            { id: 'A', text: "A ausência de partes verdes na Monotropa indica a necessidade de uma associação fúngica para obter nutrientes, enquanto a capacidade fotossintética do Cacto mostra sua independência." },
            { id: 'B', text: "A aparência fantasmagórica da Monotropa permite que ela obtenha nutrientes em condições desfavoráveis." },
            { id: 'C', text: "A cor branca da Monotropa está ligada à sua dependência de fungos, enquanto a adequação do Cacto a condições secas se deve à sua capacidade fotossintética." },
            { id: 'D', text: "A coloração única da Monotropa indica uma relação mútua com fungos." }
        ],
        correctAnswerId: 'A',
        explanation: "A planta Monotropa uniflora é branca porque não possui clorofila e não pode fazer fotossíntese, tornando-a dependente de uma associação fúngica para obter nutrientes. Em contraste, o Cacto verde pode fazer fotossíntese, tornando-o independente e autossuficiente em energia."
    },
    {
        id: 24,
        text: "Um experimento observou o efeito do fungo Aspergillus em bactérias. A tabela relaciona o tamanho da 'zona de destruição' com a contagem de bactérias. Qual conclusão NÃO é justificada?",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.26.06.png",
        options: [
            { id: 'A', text: "Quanto maior a zona de destruição, maior o crescimento de bactérias." },
            { id: 'B', text: "Quanto maior a zona de destruição, menor a contagem de células bacterianas." },
            { id: 'C', text: "O fungo foi eficaz contra as bactérias ao redor do micélio." },
            { id: 'D', text: "Diferentes tamanhos de zona foram produzidos devido à eficácia contra algumas células bacterianas." }
        ],
        correctAnswerId: 'A',
        explanation: "A afirmação A está incorreta porque contradiz o efeito observado. Uma zona de destruição maior indica uma inibição mais eficaz das células bacterianas pelo fungo, levando a uma redução na contagem de células bacterianas, e não a um maior crescimento."
    },
    {
        id: 25,
        text: "Um paciente teve Epiglotite, uma infecção bacteriana. Quatro conclusões foram tiradas. Identifique o conjunto correto de afirmações. (2 e 4 estão corretas)",
        image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-19-at-19.29.54.png",
        options: [
            { id: 'A', text: "Apenas a afirmação 1" },
            { id: 'B', text: "Apenas as afirmações 1 e 2" },
            { id: 'C', text: "Apenas as afirmações 3 e 4" },
            { id: 'D', text: "Apenas as afirmações 2 e 4" }
        ],
        correctAnswerId: 'D',
        explanation: "A afirmação 2 está correta porque o Haemophilus influenzae infecta a epiglote, que faz parte do sistema respiratório. A afirmação 4 está correta porque os antibióticos atuam para matar as bactérias no sistema respiratório. As afirmações 1 e 3 estão incorretas, pois a epiglote não faz parte do sistema digestivo."
    }
  ],
  "2023": [
    {
      id: 1,
      text: "Qual destes organismos foi classificado incorretamente?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.47.55.png",
      options: [
        { id: 'A', text: "Subconjunto 1: Minhoca, Estrela-do-mar / Subconjunto 2: Musgo, Cogumelo" },
        { id: 'B', text: "Subconjunto 1: Aranha, Caranguejo / Subconjunto 2: Samambaia, Alga" },
        { id: 'C', text: "Subconjunto 1: Salamandra, Caracol / Subconjunto 2: Banana, Conífera" },
        { id: 'D', text: "Subconjunto 1: Água-viva, Coral / Subconjunto 2: Alga marinha, Hepática" }
      ],
      correctAnswerId: 'C',
      explanation: "Os organismos no subconjunto 1 são invertebrados e as plantas no subconjunto 2 não possuem flores. As salamandras são vertebrados e a banana é facilmente reconhecida como um fruto, portanto deve ser classificada como uma planta com flor."
    },
    {
      id: 2,
      text: "Qual dos seguintes é um exemplo de sistema?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.49.40.png",
      options: [
        { id: 'A', text: "Chave" },
        { id: 'B', text: "Copo" },
        { id: 'C', text: "Lápis mecânico" },
        { id: 'D', text: "Nota adesiva" }
      ],
      correctAnswerId: 'C',
      explanation: "Um lápis mecânico é um sistema porque consiste em múltiplos componentes interconectados (grafite, corpo, mecanismo) trabalhando juntos para alcançar um objetivo comum (escrever). Os outros itens são objetos únicos, não sistemas."
    },
    {
      id: 3,
      text: "Se estes clipes de papel forem magnetizados, qual dos seguintes diagramas mostra corretamente os polos dos clipes em relação ao ímã em barra?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.50.50.png",
      options: [
        { id: 'A', text: "Diagrama A" },
        { id: 'B', text: "Diagrama B" },
        { id: 'C', text: "Diagrama C" },
        { id: 'D', text: "Diagrama D" }
      ],
      correctAnswerId: 'B',
      explanation: "Quando um clipe de papel é magnetizado por indução, a extremidade mais próxima de um polo do ímã adquire a polaridade oposta. O polo Sul do ímã induzirá um polo Norte na parte do clipe que o toca, e vice-versa."
    },
    {
      id: 4,
      text: "Qual das seguintes afirmações sobre bactérias é verdadeira?",
      options: [
        { id: 'A', text: "A maioria das bactérias é menor que a levedura." },
        { id: 'B', text: "As bactérias são encontradas apenas no solo e são transmitidas aos seres humanos através do contato com superfícies contaminadas." },
        { id: 'C', text: "Como todos os organismos vivos, todas as bactérias precisam de alimento, água e oxigênio para sobreviver." },
        { id: 'D', text: "Fungos e bactérias são diferentes na forma como obtêm alimento. A maioria dos fungos são decompositores, mas a maioria das bactérias produz seu próprio alimento." }
      ],
      correctAnswerId: 'A',
      explanation: "A afirmação A é verdadeira; as bactérias são microrganismos unicelulares geralmente menores que as células de levedura. As outras afirmações estão incorretas: as bactérias são encontradas em todos os lugares, nem todas precisam de oxigênio (algumas são anaeróbicas) e a maioria das bactérias são heterotróficas (não produzem seu próprio alimento)."
    },
    {
      id: 5,
      text: "Quais dos seguintes são dicotiledôneas?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.53.35.png",
      options: [
        { id: 'A', text: "Apenas 2" },
        { id: 'B', text: "Apenas 4" },
        { id: 'C', text: "Apenas 2 e 4" },
        { id: 'D', text: "1, 2, 3 e 4" }
      ],
      correctAnswerId: 'B',
      explanation: "O feijão (4) é uma dicotiledônea porque possui dois cotilédones (folhas seminais). Arroz (1), trigo (2) e milho (3) são todos monocotiledôneas, possuindo apenas um cotilédone."
    },
    {
      id: 6,
      text: "O gráfico mostra a quantidade média de comida não digerida saindo de diferentes partes do sistema digestivo. Qual linha identifica corretamente as partes?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.56.18.png",
      options: [
        { id: 'A', text: "Linha A" },
        { id: 'B', text: "Linha B" },
        { id: 'C', text: "Linha C" },
        { id: 'D', text: "Linha D" }
      ],
      correctAnswerId: 'A',
      explanation: "A digestão começa na boca (N/O), continua significativamente no estômago (L), e a maior parte da digestão ocorre no intestino delgado (M/K). A quantidade de comida não digerida é maior no início (boca) e menor após o intestino delgado. Nenhuma digestão ocorre no esôfago ou no intestino grosso. A Linha A corresponde corretamente a esse padrão."
    },
    {
      id: 7,
      text: "Com base no experimento da flor, qual sistema humano pode ser comparado ao sistema da planta responsável pela transformação da cor?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-09.59.27.png",
      options: [
        { id: 'A', text: "Sistema Nervoso" },
        { id: 'B', text: "Sistema Circulatório" },
        { id: 'C', text: "Sistema Esquelético" },
        { id: 'D', text: "Sistema Respiratório" }
      ],
      correctAnswerId: 'B',
      explanation: "As pétalas da flor mudaram de cor porque o sistema de transporte da planta (xilema) transportou a água colorida até elas. Isso é análogo ao sistema circulatório humano, que transporta sangue, nutrientes e outras substâncias por todo o corpo."
    },
    {
      id: 8,
      text: "Qual dos seguintes aparelhos seria mais apropriado para medir com precisão o volume de gás hidrogênio produzido?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.04.03.png",
      options: [
        { id: 'A', text: "Béquer" },
        { id: 'B', text: "Frasco Cônico" },
        { id: 'C', text: "Frasco Volumétrico" },
        { id: 'D', text: "Seringa de 10 mL" }
      ],
      correctAnswerId: 'D',
      explanation: "Uma seringa é o aparelho mais apropriado para medir com precisão o volume de gás coletado de uma reação química. Béqueres e frascos são projetados para conter líquidos, não para medição precisa de volume de gases."
    },
    {
      id: 9,
      text: "Um estudante mede o comprimento da sombra de um prédio das 9h às 17h. Qual gráfico representa corretamente as leituras?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.05.33.png",
      options: [
        { id: 'A', text: "Gráfico A" },
        { id: 'B', text: "Gráfico B" },
        { id: 'C', text: "Gráfico C" },
        { id: 'D', text: "Gráfico D" }
      ],
      correctAnswerId: 'C',
      explanation: "A sombra é mais longa pela manhã (quando o sol está baixo), mais curta ao meio-dia (quando o sol está mais alto) e fica mais longa novamente à tarde. Isso cria uma curva em forma de V, como mostrado no Gráfico C."
    },
    {
      id: 10,
      text: "Os anéis de ferro usados para reforçar barris de madeira estão muito apertados. Qual método você sugeriria para fazê-los caber?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.07.44.png",
      options: [
        { id: 'A', text: "Mergulhar o barril em água por várias horas" },
        { id: 'B', text: "Aquecer o anel de ferro na forja de um ferreiro." },
        { id: 'C', text: "Esfriar o anel de ferro em um balde de gelo." },
        { id: 'D', text: "Aquecer o barril por várias horas" }
      ],
      correctAnswerId: 'B',
      explanation: "Aquecer um objeto de metal faz com que ele se expanda (expansão térmica). Ao aquecer o anel de ferro, ele se expandirá, tornando-se grande o suficiente para caber sobre o barril. À medida que esfria, ele se contrairá e apertará, prendendo as aduelas do barril."
    },
    {
      id: 11,
      text: "Com base na classificação dos vertebrados, qual dos seguintes grupos não está classificado corretamente em conjunto?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.09.40.png",
      options: [
        { id: 'A', text: "Grupo A: Ornitorrinco, Golfinho" },
        { id: 'B', text: "Grupo B: Morcego, Águia" },
        { id: 'C', text: "Grupo C: Tartaruga, Cobra" },
        { id: 'D', text: "Grupo D: Tubarão, Salmão" }
      ],
      correctAnswerId: 'B',
      explanation: "O Grupo B está incorreto porque mistura duas classes diferentes de vertebrados. Um morcego é um mamífero, enquanto uma águia é uma ave. Os outros grupos classificam corretamente os animais dentro da mesma classe (A: Mamíferos, C: Répteis, D: Peixes)."
    },
    {
      id: 12,
      text: "Estudantes testaram quatro réguas adicionando água a um saco amarrado em cada régua até que ela quebrasse. Qual propriedade dos materiais eles estavam testando?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.12.35.png",
      options: [
        { id: 'A', text: "Transparência de cada régua usada no experimento" },
        { id: 'B', text: "Flexibilidade de cada régua antes de quebrar" },
        { id: 'C', text: "Resistência de cada régua" },
        { id: 'D', text: "Capacidade de impermeabilização de cada régua" }
      ],
      correctAnswerId: 'C',
      explanation: "O experimento mede a quantidade de carga (peso da água) que cada régua pode suportar antes de quebrar. Este é um teste direto da resistência do material."
    },
    {
      id: 13,
      text: "Com base nas observações de Minji, qual das seguintes opções mostra corretamente as posições dos líquidos imiscíveis K, L e M quando arranjados no mesmo copo?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.15.01.png",
      options: [
        { id: 'A', text: "Diagrama A" },
        { id: 'B', text: "Diagrama B" },
        { id: 'C', text: "Diagrama C" },
        { id: 'D', text: "Diagrama D" }
      ],
      correctAnswerId: 'B',
      explanation: "O cubo de gelo afundou no líquido L, mas flutuou em K e M, então L é o líquido menos denso. O objeto X afundou em K, mas flutuou em M, então M é mais denso que K. Portanto, a ordem de densidade do menor para o maior é L < K < M. Quando em camadas, o menos denso (L) estará no topo e o mais denso (M) na parte inferior."
    },
    {
      id: 14,
      text: "O fluxograma ilustra como os animais são categorizados. Qual das opções não se encaixa corretamente no fluxograma?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.16.24-1024x919.png",
      options: [
        { id: 'A', text: "X = Morcego" },
        { id: 'B', text: "Y = Guppy" },
        { id: 'C', text: "Z = Tartaruga" },
        { id: 'D', text: "W = Pinguim" }
      ],
      correctAnswerId: 'C',
      explanation: "Seguindo o fluxograma: Z põe ovos e tem penas, então é uma ave (como um Pinguim). W põe ovos, não tem penas e não tem guelras, então é um réptil (como uma Tartaruga). A opção C identifica incorretamente Z como uma Tartaruga."
    },
    {
      id: 15,
      text: "Um professor queima um composto de sódio em uma sala escura iluminada por uma lâmpada de sódio amarela. Qual cor a chama provavelmente pareceria?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.19.21.png",
      options: [
        { id: 'A', text: "Amarelo" },
        { id: 'B', text: "Laranja amarelado" },
        { id: 'C', text: "Brilhante ou branco" },
        { id: 'D', text: "Escuro ou preto" }
      ],
      correctAnswerId: 'D',
      explanation: "Isso é um fenômeno conhecido como 'chama negra'. O sódio na chama absorve o comprimento de onda específico da luz amarela emitida pela lâmpada de sódio. Como essa luz não chega aos olhos do observador a partir da chama, a chama parece escura ou preta contra o fundo brilhante."
    },
    {
      id: 16,
      text: "Qual(is) característica(s) dos organismos vivos é(são) demonstrada(s) pela armadilha de Vênus capturando um inseto?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.22.11.png",
      options: [
        { id: 'A', text: "Apenas (1) e (3)" },
        { id: 'B', text: "Apenas (2) e (3)" },
        { id: 'C', text: "Apenas (2) e (4)" },
        { id: 'D', text: "(1), (2), (3) e (4)" }
      ],
      correctAnswerId: 'C',
      explanation: "O fechamento rápido das folhas demonstra que os organismos vivos podem se mover (2). Esta ação é desencadeada pelo toque do inseto nos pelos, o que mostra que os organismos vivos podem responder a mudanças (estímulos) em seu ambiente (4)."
    },
    {
      id: 17,
      text: "Qual das seguintes afirmações sobre o ciclo de vida de um sapo está(ão) incorreta(s)? (1) Reproduz-se antes da metamorfose. (2) Sofre metamorfose. (3) Girinos respiram por brânquias. (4) Ovos fertilizados externamente.",
      options: [
        { id: 'A', text: "Apenas (1)" },
        { id: 'B', text: "Apenas (1) e (2)" },
        { id: 'C', text: "Apenas (2) e (3)" },
        { id: 'D', text: "Apenas (1), (3) e (4)" }
      ],
      correctAnswerId: 'A',
      explanation: "A afirmação (1) está incorreta. Os sapos devem primeiro passar pela metamorfose de girino para adulto antes de atingirem a maturidade sexual e poderem se reproduzir. As afirmações (2), (3) e (4) são todos fatos corretos sobre o ciclo de vida do sapo."
    },
    {
      id: 18,
      text: "Quando um teste de iodo é realizado, qual parte da planta da batata ficará mais azul-escura? (1) Tubérculos (2) Raiz subterrânea (3) Flor (4) Caule",
      options: [
        { id: 'A', text: "Apenas (1)" },
        { id: 'B', text: "Apenas (1) e (2)" },
        { id: 'C', text: "Apenas (2) e (3)" },
        { id: 'D', text: "(1), (2), (3) e (4)" }
      ],
      correctAnswerId: 'A',
      explanation: "O teste de iodo detecta amido. As plantas de batata armazenam a maior parte de seu amido em seus tubérculos, que são caules subterrâneos aumentados. Portanto, os tubérculos mostrarão a reação azul-escura mais forte."
    },
    {
      id: 19,
      text: "Qual(is) das afirmações sobre o resfriamento de chocolate quente em um copo de vidro colocado em uma panela de metal com água fria está(ão) incorreta(s)?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.26.58.png",
      options: [
        { id: 'A', text: "Apenas (1), (2) e (3)" },
        { id: 'B', text: "Apenas (1), (2) e (4)" },
        { id: 'C', text: "(1), (2), (3) e (4)" },
        { id: 'D', text: "Apenas (2) e (3)" }
      ],
      correctAnswerId: 'C',
      explanation: "Todas as quatro afirmações estão incorretas. (1) O vidro é um isolante, mas ainda transfere calor lentamente. (2) O aço é um condutor melhor que o vidro, então uma panela de aço esfria mais rápido. (3) O material da tampa tem um efeito mínimo em comparação com a condução através da panela. (4) O calor é transferido do chocolate quente para a água fria, então a temperatura da água aumentará."
    },
    {
      id: 20,
      text: "Um ímã (150g) está em uma balança de mola acima de outro ímã (300g) em uma balança. O polo sul do ímã de cima está voltado para o polo norte do de baixo. Quais são as possíveis leituras?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.33.30.png",
      options: [
        { id: 'A', text: "Balança de mola: 150 g, Balança: 300 g" },
        { id: 'B', text: "Balança de mola: 200 g, Balança: 250 g" },
        { id: 'C', text: "Balança de mola: 100 g, Balança: 350 g" },
        { id: 'D', text: "Balança de mola: 150 g, Balança: 450 g" }
      ],
      correctAnswerId: 'B',
      explanation: "Polos opostos se atraem. A atração puxa o ímã de cima para baixo, aumentando a tensão e a leitura da balança de mola para >150g. Também puxa o ímã de baixo para cima, reduzindo a força na balança, fazendo a leitura ser <300g. A opção B é a única que se encaixa nessa lógica."
    },
    {
      id: 21,
      text: "A tartaruga-estrelada-indiana tem uma carapaça em forma de Gömböc, o que lhe permite se desvirar quando virada. Que tipo de adaptação é essa?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.55.32.png",
      options: [
        { id: 'A', text: "Comportamental" },
        { id: 'B', text: "Fisiológica" },
        { id: 'C', text: "Estrutural e comportamental" },
        { id: 'D', text: "Estrutural" }
      ],
      correctAnswerId: 'D',
      explanation: "A adaptação é baseada na forma física e na estrutura da carapaça da tartaruga. Esta é uma adaptação estrutural, uma característica física do organismo que o ajuda a sobreviver."
    },
    {
      id: 22,
      text: "A insulina é uma proteína que é decomposta pelo sistema digestivo se ingerida. Se tomada por via oral, onde começaria a decomposição da insulina?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.57.18.png",
      options: [
        { id: 'A', text: "Boca" },
        { id: 'B', text: "Estômago" },
        { id: 'C', text: "Intestino Delgado" },
        { id: 'D', text: "Intestino Grosso" }
      ],
      correctAnswerId: 'B',
      explanation: "A decomposição de proteínas começa no estômago, que contém ácido forte (ácido clorídrico) e enzimas digestoras de proteínas como a pepsina. Este ambiente hostil começaria a decompor a proteína da insulina."
    },
    {
      id: 23,
      text: "Quatro estudantes têm hipóteses sobre a pressão correta dos pneus para uma corrida de F1 em Dubai em julho. Qual afirmação do estudante é verdadeira?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-10.59.14.png",
      options: [
        { id: 'A', text: "Estudante K" },
        { id: 'B', text: "Estudante L" },
        { id: 'C', text: "Estudante M" },
        { id: 'D', text: "Estudante N" }
      ],
      correctAnswerId: 'C',
      explanation: "O Estudante M está correto. Em condições quentes e durante uma corrida de alta velocidade, o atrito causa um aumento significativo na temperatura dos pneus. Isso aquece o ar interno, aumentando sua pressão (energia cinética). Para evitar a superinflação e um possível estouro, a pressão inicial deve ser ajustada para um pouco abaixo do padrão."
    },
    {
      id: 24,
      text: "Qual(is) propriedade(s) da luz permite(m) que o cabo de fibra óptica do dispositivo de Tan funcione? (1) A luz viaja em linhas retas. (2) A luz pode ser refletida. (3) A luz pode viajar em linhas curvas. (4) A luz é uma forma de energia.",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-11.01.18-745x1024.png",
      options: [
        { id: 'A', text: "Apenas a opção 1" },
        { id: 'B', text: "Apenas a opção 2" },
        { id: 'C', text: "Apenas as opções 1, 2 e 4" },
        { id: 'D', text: "Opções 1, 2, 3 e 4" }
      ],
      correctAnswerId: 'C',
      explanation: "As fibras ópticas funcionam porque a luz viaja em linhas retas (1) e sofre reflexão interna total (2) para percorrer o cabo. A luz também é uma forma de energia (4) que é detectada na outra extremidade. A luz não viaja em linhas curvas (3)."
    },
    {
      id: 25,
      text: "Com base na tabela de propriedades dos materiais, quais materiais seriam adequados para fazer o cabo de fibra óptica e a cubeta, respectivamente?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-18-at-11.02.55.png",
      options: [
        { id: 'A', text: "Q, P" },
        { id: 'B', text: "Q, R" },
        { id: 'C', text: "S, R" },
        { id: 'D', text: "S, P" }
      ],
      correctAnswerId: 'B',
      explanation: "O cabo de fibra óptica precisa ser flexível e opaco para manter a luz dentro, então o material Q é adequado. A cubeta precisa ser transparente (baixa opacidade) para permitir a passagem da luz para medição, então o material R é adequado."
    }
  ],
  "2022": [
    {
      id: 1,
      text: "Quatro estudantes fizeram as seguintes afirmações sobre os tubarões serem classificados incorretamente como peixes. Qual dos estudantes está correto?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-11.44.45.png",
      options: [
        { id: 'A', text: "Liam e Stefan" },
        { id: 'B', text: "Apenas Elizabeth" },
        { id: 'C', text: "Josie, Stefan e Elizabeth" },
        { id: 'D', text: "Josie e Stefan" }
      ],
      correctAnswerId: 'B',
      explanation: "As características determinantes de um peixe seriam o fato de viverem na água, respirarem por brânquias e terem nadadeiras e escamas. Embora sejam carnívoros e a maioria dê à luz a filhotes vivos, essas não são características determinantes de um peixe. Apenas Elizabeth identifica a característica chave do motivo pelo qual um tubarão pode ser classificado erroneamente como peixe."
    },
    {
      id: 2,
      text: "João colocou os seguintes itens em um recipiente com água. Qual das seguintes observações está correta?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-11.52.58.png",
      options: [
        { id: 'A', text: "A" },
        { id: 'B', text: "B" },
        { id: 'C', text: "C" },
        { id: 'D', text: "D" }
      ],
      correctAnswerId: 'D',
      explanation: "Um prego de metal é muito mais denso que a água, enquanto uma folha de papel é menos densa que a água, então o prego de metal afundará e o papel flutuará."
    },
    {
      id: 3,
      text: "A imagem acima mostra uma cigarra trocando seu exoesqueleto. O que está acontecendo com a cigarra?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-11.55.05-e1744825725915.png",
      options: [
        { id: 'A', text: "A cigarra vai se desenvolver do estágio larval para o estágio de pupa." },
        { id: 'B', text: "A cigarra faz isso para escapar de predadores." },
        { id: 'C', text: "O exoesqueleto está danificado." },
        { id: 'D', text: "A cigarra cresceu demais para seu antigo exoesqueleto e precisa de um maior." }
      ],
      correctAnswerId: 'D',
      explanation: "A cigarra cresceu demais para seu antigo exoesqueleto e precisa de um maior."
    },
    {
      id: 4,
      text: "Qual das seguintes opções mostra a sequência correta dos processos que envolvem ganho ou perda de calor no ciclo da água?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.09.10.png",
      options: [
        { id: 'A', text: "Precipitação -> Condensação -> Evaporação -> Precipitação" },
        { id: 'B', text: "Condensação -> Precipitação -> Evaporação -> Escoamento" },
        { id: 'C', text: "Evaporação -> Condensação -> Precipitação -> Escoamento" },
        { id: 'D', text: "Precipitação -> Evaporação -> Condensação -> Precipitação" }
      ],
      correctAnswerId: 'D',
      explanation: "O escoamento não é um processo no ciclo da água que envolve ganho ou perda de calor, eliminando as opções B e C. O ciclo envolve evaporação (ganho de calor), condensação (perda de calor) e precipitação. A opção D mostra uma sequência válida desses processos."
    },
    {
      id: 5,
      text: "Os seres vivos têm características chave que os diferenciam dos seres não vivos. Qual dos seguintes cenários não demonstra essas características chave dos seres vivos?",
      options: [
        { id: 'A', text: "Um homem aquecendo um balão inflado em um banho-maria." },
        { id: 'B', text: "Uma planta trepadeira crescendo para cima no tronco de uma árvore." },
        { id: 'C', text: "Uma hiena consumindo comida contaminada e ficando muito doente, eventualmente morrendo." },
        { id: 'D', text: "Um filhote de panda rastejando em direção a alguns brotos de bambu." }
      ],
      correctAnswerId: 'A',
      explanation: "Os seres vivos crescem, respondem a estímulos e precisam de sustento. As opções B, C e D mostram todas essas características. O balão se expandindo na opção A é uma reação física ao calor, não uma característica biológica de um ser vivo."
    },
    {
      id: 6,
      text: "Com base nas informações fornecidas sobre o ornitorrinco, por que os ornitorrincos machos têm esporões venenosos nas patas traseiras?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.11.14-300x201.png",
      options: [
        { id: 'A', text: "Permite que o ornitorrinco macho crave suas patas traseiras no leito do rio, para que possa nadar mais rápido e alcançar a fêmea." },
        { id: 'B', text: "Atrai as fêmeas de ornitorrinco para acasalar com o macho." },
        { id: 'C', text: "Permite que o ornitorrinco macho despedace sua comida." },
        { id: 'D', text: "Fere predadores para se proteger e afugenta outros ornitorrincos machos que possam estar competindo por sua parceira." }
      ],
      correctAnswerId: 'D',
      explanation: "Os esporões venenosos desenvolvidos pelos ornitorrincos machos são usados para defesa contra predadores e para competir com outros machos por parceiras durante a estação de acasalamento."
    },
    {
      id: 7,
      text: "Com base nas definições, qual(is) do(s) seguinte(s) é(são) exemplo(s) de adaptação comportamental? 1. Camaleões se movendo lentamente nos galhos 2. Baleias-cinzentas migrando... 3. Girafas usando seus longos pescoços... 4. Plantas se inclinando... em direção à luz solar",
      options: [
        { id: 'A', text: "Opções 2 e 4" },
        { id: 'B', text: "Opções 1, 3 e 4" },
        { id: 'C', text: "Opções 1, 2 e 4" },
        { id: 'D', text: "Todas as anteriores" }
      ],
      correctAnswerId: 'C',
      explanation: "O longo pescoço de uma girafa é uma adaptação estrutural (uma característica física), não comportamental. As outras opções descrevem ações ou respostas ao ambiente (mover-se lentamente, migrar, crescer em direção à luz), que são adaptações comportamentais."
    },
    {
      id: 8,
      text: "O organismo mostrado pertence à família Agaricaceae. Ele possui hifas, lamelas e um pó marrom-escuro (esporos) para reprodução. Em qual dos grupos do fluxograma ele deveria ser colocado?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.05.43.png",
      options: [
        { id: 'A', text: "Grupo A" },
        { id: 'B', text: "Grupo B" },
        { id: 'C', text: "Grupo C" },
        { id: 'D', text: "Grupo D" }
      ],
      correctAnswerId: 'A',
      explanation: "O organismo descrito é um fungo. Seguindo o fluxograma: Ele absorve oxigênio? Sim. Tem escamas? Não. Tem esporos para reprodução? Sim. Esse caminho leva ao Grupo A."
    },
    {
      id: 9,
      text: "Rosa submergiu uma folha em um béquer com água quente e observou bolhas de ar escapando dela. Por que isso aconteceu?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.12.31-300x263.png",
      options: [
        { id: 'A', text: "O ar que estava preso na folha se expandiu e escapou como bolhas." },
        { id: 'B', text: "Quando a água foi aquecida, o oxigênio na água escapou como bolhas." },
        { id: 'C', text: "O ar foi absorvido pela folha da água, para que ela pudesse sobreviver." },
        { id: 'D', text: "A folha estava respirando, absorvendo oxigênio e liberando dióxido de carbono como bolhas." }
      ],
      correctAnswerId: 'A',
      explanation: "As folhas possuem pequenas aberturas chamadas estômatos para trocas gasosas. O ar dentro desses espaços é aquecido pela água quente, fazendo com que ele se expanda. Esse ar expandido então escapa pelos estômatos, formando bolhas."
    },
    {
      id: 10,
      text: "Lily passou um cotonete sob as unhas e cultivou a amostra em uma placa de Petri. As manchas redondas que cresceram foram identificadas como decompositores. O que poderiam ser?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.15.50-300x160.png",
      options: [
        { id: 'A', text: "Óleo e sujeira" },
        { id: 'B', text: "Bactérias e fungos" },
        { id: 'C', text: "Apenas bactérias" },
        { id: 'D', text: "Apenas fungos" }
      ],
      correctAnswerId: 'B',
      explanation: "Decompositores incluem tanto bactérias quanto fungos, ambos os quais decompõem matéria orgânica. Quando Lily raspou as unhas, ela coletou microrganismos como bactérias e fungos, que então cresceram em colônias visíveis no ágar rico em nutrientes."
    },
    {
      id: 11,
      text: "Com base nas informações sobre edifícios verdes, como materiais como concreto, pedra e terra ajudam a resfriar as casas?",
      options: [
        { id: 'A', text: "São maus condutores de calor, acelerando a taxa de ganho de calor na casa." },
        { id: 'B', text: "São maus condutores de calor, retardando a taxa de ganho de calor na casa." },
        { id: 'C', text: "São bons condutores de calor, acelerando a taxa de perda de calor na casa." },
        { id: 'D', text: "São bons condutores de calor, retardando a taxa de perda de calor na casa." }
      ],
      correctAnswerId: 'B',
      explanation: "Esses materiais são maus condutores de calor (bons isolantes). Essa propriedade significa que eles retardam a taxa com que o calor do sol externo é transferido para o interior mais frio da casa, ajudando assim a mantê-la fresca."
    },
    {
      id: 12,
      text: "Tim está comendo uma tigela de macarrão. Quais dos seguintes sistemas estão funcionando para que ele possa fazer isso? 1. Muscular 2. Esquelético 3. Digestivo 4. Circulatório 5. Respiratório",
      options: [
        { id: 'A', text: "1, 3 e 4" },
        { id: 'B', text: "Apenas 3 e 4" },
        { id: 'C', text: "1, 3, 4 e 5" },
        { id: 'D', text: "1, 2, 3, 4 e 5" }
      ],
      correctAnswerId: 'D',
      explanation: "Todos os cinco sistemas estão envolvidos. Os sistemas muscular e esquelético para o movimento (comer), o sistema digestivo para processar os alimentos, o sistema circulatório para transportar nutrientes, e o sistema respiratório está constantemente funcionando para fornecer oxigênio para todos esses processos."
    },
    {
      id: 13,
      text: "Anna realizou um experimento para descobrir qual nutriente a pepsina decompõe. Com base nos resultados, o que ela pode concluir sobre a pepsina?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.22.05.png",
      options: [
        { id: 'A', text: "A pepsina não decompõe nenhum dos nutrientes em nossa comida." },
        { id: 'B', text: "A pepsina decompõe parcialmente todos os nutrientes." },
        { id: 'C', text: "A pepsina decompõe parcialmente a proteína." },
        { id: 'D', text: "A pepsina decompõe parcialmente carboidratos e proteínas." }
      ],
      correctAnswerId: 'C',
      explanation: "Os resultados mostram que, após a adição de pepsina, as quantidades de carboidratos e gorduras permaneceram 'Presentes', enquanto a quantidade de proteína mudou para 'Parcialmente Presente'. Isso indica que a pepsina atua sobre a proteína, decompondo-a parcialmente."
    },
    {
      id: 14,
      text: "Por que Anna realizou o experimento sobre a pepsina 3 vezes?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.22.05.png",
      options: [
        { id: 'A', text: "Ela não tinha certeza se realizou o experimento corretamente, então o repetiu." },
        { id: 'B', text: "Ela queria realizar o experimento em dias diferentes para descobrir se havia algum efeito." },
        { id: 'C', text: "Ela queria ter certeza de que os resultados eram confiáveis." },
        { id: 'D', text: "Ela tinha equipamento extra disponível." }
      ],
      correctAnswerId: 'C',
      explanation: "Em experimentos científicos, repetir as tentativas é crucial para garantir que os resultados não sejam devidos ao acaso ou a erros. Ao obter resultados consistentes em várias tentativas, ela pode ter mais confiança de que sua conclusão é confiável."
    },
    {
      id: 15,
      text: "Qual(is) do(s) seguinte(s) não é(são) matéria? 1. Esponja 2. Sombra 3. Energia sonora 4. Energia luminosa",
      options: [
        { id: 'A', text: "Apenas 2" },
        { id: 'B', text: "3 e 4" },
        { id: 'C', text: "2, 3 e 4" },
        { id: 'D', text: "1 e 2" }
      ],
      correctAnswerId: 'C',
      explanation: "Matéria é definida como qualquer coisa que tem massa e ocupa espaço. Uma esponja tem massa e ocupa espaço. Uma sombra é a ausência de luz e não tem massa. Som e luz são formas de energia, não matéria."
    },
    {
      id: 16,
      text: "Uma bola de pingue-pongue amassada voltou à sua forma original em água quente. Qual diagrama representa corretamente a substância dentro da bola?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.27.46.png",
      options: [
        { id: 'A', text: "R (Sólido)" },
        { id: 'B', text: "S (Líquido)" },
        { id: 'C', text: "T (Gás)" },
        { id: 'D', text: "U (Sólido)" }
      ],
      correctAnswerId: 'C',
      explanation: "Uma bola de pingue-pongue é preenchida com ar (um gás). O diagrama T mostra corretamente as partículas de gás, que estão distantes e se movem aleatoriamente. O calor fez o ar preso se expandir e empurrar o amassado para fora."
    },
    {
      id: 17,
      text: "Armazenadores são usados para guardar ímãs. Qual(is) é(são) a(s) característica(s) dos armazenadores? 1. Não magnéticos 2. Bons condutores de calor 3. Não são frágeis 4. São materiais magnéticos.",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.29.53.png",
      options: [
        { id: 'A', text: "2, 3 e 4" },
        { id: 'B', text: "2 e 4" },
        { id: 'C', text: "1 e 3" },
        { id: 'D', text: "1, 2 e 3" }
      ],
      correctAnswerId: 'A',
      explanation: "Os armazenadores são feitos de materiais magnéticos macios como o ferro (4), que não são frágeis (3) e são bons condutores de calor (2). Eles completam o circuito magnético, impedindo que o ímã perca seu magnetismo com o tempo. Como são magnéticos, a afirmação 1 está incorreta."
    },
    {
      id: 18,
      text: "Com base na teia alimentar, qual grupo contém apenas consumidores?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.31.51.png",
      options: [
        { id: 'A', text: "Grupo W" },
        { id: 'B', text: "Grupo X" },
        { id: 'C', text: "Grupo Y" },
        { id: 'D', text: "Grupo Z" }
      ],
      correctAnswerId: 'D',
      explanation: "Produtores, como as plantas, criam seu próprio alimento. Consumidores obtêm energia comendo outros organismos. O Grupo Z (Coelho, Águia, Leão) é o único grupo que consiste inteiramente de consumidores. Os outros grupos contêm 'Plantas', que é um produtor."
    },
    {
      id: 19,
      text: "Três copos de água W, X e Y têm a mesma temperatura, mas volumes diferentes. Qual copo tem a maior quantidade de energia térmica?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.33.19.png",
      options: [
        { id: 'A', text: "Copo W" },
        { id: 'B', text: "Copo X" },
        { id: 'C', text: "Copo Y" },
        { id: 'D', text: "Todos os 3 copos de água têm a mesma quantidade de energia térmica." }
      ],
      correctAnswerId: 'C',
      explanation: "A temperatura é a energia cinética média das partículas, enquanto a energia térmica é a energia cinética total. Embora a temperatura seja a mesma, o Copo Y tem mais água (maior massa), o que significa que contém mais partículas e, portanto, tem a maior energia térmica total."
    },
    {
      id: 20,
      text: "Qual das afirmações explica corretamente o mecanismo dos arrepios para nos manter aquecidos?",
      options: [
        { id: 'A', text: "Quando os pelos finos da nossa pele se eriçam, permite que o calor seja absorvido diretamente do ar circundante, e isso nos mantém aquecidos." },
        { id: 'B', text: "Quando os pelos finos da nossa pele se eriçam, eles prendem o ar, que é um mau condutor de calor. Assim, reduz a perda de calor e nos mantém aquecidos." },
        { id: 'C', text: "Quando os pelos finos da nossa pele se eriçam, eles prendem o ar, que é um bom condutor de calor. Assim, mais calor é ganho do ar circundante, o que nos mantém aquecidos." },
        { id: 'D', text: "Quando os pelos finos da nossa pele se eriçam, permite que mais do nosso calor corporal atinja a superfície da pele, nos mantendo aquecidos." }
      ],
      correctAnswerId: 'B',
      explanation: "Os pelos eriçados prendem uma camada de ar perto da pele. O ar é um mau condutor de calor (um isolante), então essa camada presa reduz a quantidade de calor perdida do corpo para o ambiente mais frio."
    },
    {
      id: 21,
      text: "Qual das seguintes opções demonstra corretamente os seres vivos respondendo a mudanças?",
      options: [
        { id: 'A', text: "Ursos polares se alimentando de focas." },
        { id: 'B', text: "Bichos-da-seda se transformando em mariposas." },
        { id: 'C', text: "Um gato brincando com um novelo de lã." },
        { id: 'D', text: "Pássaros voando para longe ao ouvir um tiro disparado por caçadores." }
      ],
      correctAnswerId: 'D',
      explanation: "Responder a mudanças (ou estímulos) é uma característica chave da vida. O tiro alto é um estímulo, e os pássaros voando para longe é a resposta para escapar do perigo potencial. As outras opções descrevem alimentação, crescimento ou brincadeira, que não são respostas diretas a uma mudança externa."
    },
    {
      id: 22,
      text: "Os peixes-boi na Flórida enfrentam uma situação de 'perde-perde' devido à poluição e aos invernos frios. Quais necessidades básicas estão faltando? 1. Ar 2. Comida 3. Água 4. Calor",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.38.29.png",
      options: [
        { id: 'A', text: "2 e 4" },
        { id: 'B', text: "2 e 3" },
        { id: 'C', text: "1 e 4" },
        { id: 'D', text: "Todas as anteriores" }
      ],
      correctAnswerId: 'A',
      explanation: "O texto afirma que os peixes-boi podem morrer de frio se ficarem (falta de calor) ou morrer de fome se migrarem para águas mais quentes onde sua fonte de alimento (ervas marinhas) foi esgotada pela poluição (falta de comida). Portanto, comida e calor são as necessidades críticas que estão faltando."
    },
    {
      id: 23,
      text: "Por que algumas plantas liberam substâncias como o jasmonato de metila para deter insetos como as lagartas?",
      options: [
        { id: 'A', text: "As lagartas atraem pássaros que se alimentam das plantas e as danificam." },
        { id: 'B', text: "A planta quer se livrar das lagartas para ter mais espaço para crescer." },
        { id: 'C', text: "A planta protege suas folhas, pois as folhas são cruciais para a produção de alimento para a planta." },
        { id: 'D', text: "As lagartas se alimentam dos frutos da planta e reduzem a quantidade de alimento disponível para a planta." }
      ],
      correctAnswerId: 'C',
      explanation: "As folhas são o principal local da fotossíntese, o processo pelo qual as plantas produzem seu próprio alimento. Ao produzir uma substância que torna as folhas desagradáveis para as lagartas, a planta está protegendo sua 'fábrica de alimentos' para garantir sua própria sobrevivência e crescimento."
    },
    {
      id: 24,
      text: "A imagem mostra um sistema radicular comumente encontrado em vegetais de raiz como a beterraba. Que tipo de sistema radicular é este?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.42.31-292x300.png",
      options: [
        { id: 'A', text: "Drenagem" },
        { id: 'B', text: "Tubular" },
        { id: 'C', text: "Pivotante" },
        { id: 'D', text: "Fasciculado" }
      ],
      correctAnswerId: 'C',
      explanation: "Este é um sistema radicular pivotante, que é caracterizado por uma única raiz grande e central que cresce profundamente no solo. Raízes laterais menores se ramificam a partir desta raiz principal. A beterraba é um exemplo clássico de uma raiz pivotante modificada para armazenamento de alimentos."
    },
    {
      id: 25,
      text: "Com base nas informações sobre a salamandra-pintada, o que pode ser concluído?",
      image: "http://vanda.simcc.org/wp-content/uploads/2025/04/Screenshot-2025-04-16-at-20.44.09.png",
      options: [
        { id: 'A', text: "É um animal de sangue frio." },
        { id: 'B', text: "É um réptil." },
        { id: 'C', text: "Respira apenas por brânquias." },
        { id: 'D', text: "É um invertebrado." }
      ],
      correctAnswerId: 'A',
      explanation: "A salamandra-pintada é um anfíbio, pois põe ovos e seus filhotes vivem na água antes de se desenvolverem em adultos terrestres. Uma característica chave de todos os anfíbios é que eles são de sangue frio (ectotérmicos)."
    }
  ]
};