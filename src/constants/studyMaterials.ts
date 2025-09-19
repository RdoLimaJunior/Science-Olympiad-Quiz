import type { StudyMaterial } from '../types';

export const studyMaterials: Record<string, StudyMaterial> = {
  "Ciências": {
    title: "Ciências da Natureza",
    summary: "A ciência explora o mundo ao nosso redor, desde as menores partículas até as vastas galáxias. Nesta seção, vamos focar nos ciclos da natureza, como o ciclo da água, e na classificação dos seres vivos, entendendo as diferenças entre plantas, animais, fungos e outros reinos. Aprenderemos também sobre os estados da matéria (sólido, líquido e gasoso) e como a energia se transforma.",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    videoUrl: "https://www.youtube.com/embed/3y_--g-kC_A",
    tips: [
      "Observe a natureza ao seu redor. Tente identificar diferentes tipos de plantas e animais.",
      "Faça pequenos experimentos em casa, como observar o gelo derretendo, para entender as mudanças de estado da matéria.",
      "Desenhe o ciclo da água. Isso ajuda a memorizar as etapas: evaporação, condensação, precipitação e coleta.",
      "Crie cartões de memória com as características de cada grupo de ser vivo (mamíferos, répteis, etc.)."
    ],
    suggestedQuestions: [
      "Qual a diferença entre um ser vivo e um não vivo?",
      "Me explique o ciclo da água de forma simples.",
      "O que são os estados da matéria?",
      "Por que os fungos não são considerados plantas?"
    ]
  },
  "Matemática": {
    title: "Fundamentos de Matemática",
    summary: "A matemática é a linguagem do universo! Aqui, vamos revisar as operações básicas (adição, subtração, multiplicação e divisão) e como elas se aplicam em problemas do dia a dia. Também exploraremos conceitos de geometria, como formas, áreas e perímetros, e introduziremos a lógica para resolver quebra-cabeças e desafios matemáticos.",
    imageUrl: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    videoUrl: "https://www.youtube.com/embed/640p_86y9uA",
    tips: [
      "Pratique contas todos os dias, mesmo que sejam simples. A prática leva à perfeição.",
      "Use objetos do cotidiano (como frutas ou lápis) para visualizar problemas de adição e subtração.",
      "Procure por formas geométricas em sua casa e na rua. Tente nomeá-las!",
      "Desafie seus amigos e familiares com problemas de lógica. Aprender em grupo é mais divertido."
    ],
    suggestedQuestions: [
      "Como posso usar a multiplicação no dia a dia?",
      "Qual a diferença entre área e perímetro?",
      "Me dê um exemplo de um problema de lógica.",
      "Para que serve a geometria?"
    ]
  },
  "Lógica": {
    title: "Raciocínio Lógico",
    summary: "O raciocínio lógico é a habilidade de pensar de forma organizada para resolver problemas. Nesta seção, vamos treinar nosso cérebro com quebra-cabeças, sequências e desafios de dedução. Aprender a pensar logicamente é fundamental não apenas para a ciência e a matemática, mas para tomar decisões inteligentes em qualquer área da vida.",
    imageUrl: "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    videoUrl: "https://www.youtube.com/embed/3oY-D55sO5c",
    tips: [
      "Comece com quebra-cabeças simples, como Sudoku ou palavras-cruzadas, para aquecer o cérebro.",
      "Ao encontrar um problema, divida-o em partes menores. Resolva um passo de cada vez.",
      "Tente explicar seu raciocínio para outra pessoa. Ensinar é uma ótima forma de aprender.",
      "Não tenha medo de errar! Cada erro é uma oportunidade para entender onde seu raciocínio pode melhorar."
    ],
    suggestedQuestions: [
      "Como posso melhorar meu raciocínio lógico?",
      "O que é um argumento dedutivo?",
      "Me dê um exemplo de um quebra-cabeça de lógica.",
      "Por que a lógica é importante na ciência?"
    ]
  }
};