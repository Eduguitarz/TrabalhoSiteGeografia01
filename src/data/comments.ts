import { Comment } from '../types/Comment';

const commentTemplates: { [key: number]: Comment[] } = {
  1: [ // Tênis Esportivo
    {
      id: 1,
      author: 'Ana Silva',
      text: 'Excelente tênis para corrida! Muito confortável e com ótima absorção de impacto. Recomendo para quem pratica esportes regularmente.',
      date: '15/01/2024',
      rating: 5
    },
    {
      id: 2,
      author: 'Carlos Mendes',
      text: 'Bom custo-benefício. O tênis atende às expectativas, mas esperava um pouco mais de durabilidade na sola.',
      date: '12/01/2024',
      rating: 4
    },
    {
      id: 3,
      author: 'Mariana Costa',
      text: 'Infelizmente não gostei. O número veio menor que o esperado e o material parece meio frágil. Vou tentar trocar.',
      date: '10/01/2024',
      rating: 2
    },
    {
      id: 4,
      author: 'Roberto Lima',
      text: 'Uso há 3 meses e está ótimo! Corro 5km todo dia e ainda está em perfeito estado. Valeu cada centavo.',
      date: '08/01/2024',
      rating: 5
    }
  ],
  2: [ // Tênis Casual
    {
      id: 5,
      author: 'Beatriz Santos',
      text: 'Perfeito para o dia a dia! Muito estiloso e combina com tudo. Super confortável para caminhar.',
      date: '14/01/2024',
      rating: 5
    },
    {
      id: 6,
      author: 'Fernando Oliveira',
      text: 'Design interessante, mas achei um pouco apertado. Talvez seja melhor pedir um número maior.',
      date: '11/01/2024',
      rating: 3
    },
    {
      id: 7,
      author: 'Juliana Pereira',
      text: 'Comprei há um mês e já está descascando na lateral. Qualidade deixa a desejar pelo preço pago.',
      date: '09/01/2024',
      rating: 2
    },
    {
      id: 8,
      author: 'Lucas Ferreira',
      text: 'Muito bom! Confortável e elegante. Uso tanto para trabalhar quanto para sair. Recomendo!',
      date: '07/01/2024',
      rating: 4
    }
  ],
  3: [ // Tênis Running
    {
      id: 9,
      author: 'Daniel Rodrigues',
      text: 'Simplesmente fantástico! Melhor tênis de corrida que já tive. A tecnologia de absorção realmente funciona.',
      date: '13/01/2024',
      rating: 5
    },
    {
      id: 10,
      author: 'Camila Alves',
      text: 'Ótimo para treinos, mas achei o preço um pouco salgado. No geral, entrega o que promete.',
      date: '11/01/2024',
      rating: 4
    },
    {
      id: 11,
      author: 'André Souza',
      text: 'Esperava mais. Para corridas longas ainda sinto desconforto. Talvez não seja adequado para meu tipo de pisada.',
      date: '06/01/2024',
      rating: 3
    },
    {
      id: 12,
      author: 'Patrícia Gomes',
      text: 'Excelente para quem está começando a correr. Leve, confortável e com boa ventilação.',
      date: '05/01/2024',
      rating: 5
    }
  ],
  4: [ // Camiseta Básica
    {
      id: 13,
      author: 'João Pedro',
      text: 'Camiseta básica de boa qualidade. Tecido macio e não desbota na lavagem. Ótimo preço!',
      date: '12/01/2024',
      rating: 4
    },
    {
      id: 14,
      author: 'Sofia Ribeiro',
      text: 'Muito boa! Comprei várias cores. Tecido fresquinho e caimento perfeito.',
      date: '10/01/2024',
      rating: 5
    },
    {
      id: 15,
      author: 'Miguel Santos',
      text: 'Tecido é bom, mas o tamanho G ficou meio apertado. Recomendo verificar a tabela de medidas.',
      date: '08/01/2024',
      rating: 3
    },
    {
      id: 16,
      author: 'Laura Martins',
      text: 'Simples mas eficiente. Uso para dormir e para exercícios leves. Muito confortável.',
      date: '06/01/2024',
      rating: 4
    }
  ],
  5: [ // Camiseta Estampada
    {
      id: 17,
      author: 'Rafael Costa',
      text: 'Design muito legal! A estampa é bem feita e não sai na lavagem. Recebi vários elogios.',
      date: '14/01/2024',
      rating: 5
    },
    {
      id: 18,
      author: 'Isabela Freitas',
      text: 'Gostei do estilo, mas a estampa começou a rachar após algumas lavagens. Cuidado na hora de lavar.',
      date: '09/01/2024',
      rating: 3
    },
    {
      id: 19,
      author: 'Thiago Barros',
      text: 'Muito boa! Tecido de qualidade e estampa resistente. Vale o investimento.',
      date: '07/01/2024',
      rating: 4
    },
    {
      id: 20,
      author: 'Gabriela Silva',
      text: 'Adorei! Super estilosa e confortável. Já encomendei mais duas de outras estampas.',
      date: '04/01/2024',
      rating: 5
    }
  ],
  6: [ // Mochila Urbana
    {
      id: 21,
      author: 'Pedro Henrique',
      text: 'Mochila perfeita para o trabalho! Cabe notebook, documentos e ainda sobra espaço. Muito prática.',
      date: '13/01/2024',
      rating: 5
    },
    {
      id: 22,
      author: 'Letícia Rocha',
      text: 'Boa mochila, mas os zíperes são meio frágeis. Já travou duas vezes em um mês de uso.',
      date: '10/01/2024',
      rating: 3
    },
    {
      id: 23,
      author: 'Gustavo Lima',
      text: 'Design moderno e funcional. Uso para faculdade e para viajar. Recomendo!',
      date: '08/01/2024',
      rating: 4
    },
    {
      id: 24,
      author: 'Amanda Dias',
      text: 'Esperava que fosse maior. Para quem precisa carregar muitas coisas, talvez não seja ideal.',
      date: '05/01/2024',
      rating: 2
    },
    {
      id: 25,
      author: 'Bruno Ferreira',
      text: 'Excelente qualidade! Material resistente e bem acabado. Uso há 6 meses sem problemas.',
      date: '03/01/2024',
      rating: 5
    }
  ]
};

export const generateInitialComments = (productId: number): Comment[] => {
  return commentTemplates[productId] || [];
};