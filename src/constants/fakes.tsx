import { IEvent } from '@/@types/events';
import { IComment, ILike, IPost } from '@/@types/post';
import { EnumPaymentStatus } from '@/@types/users';

const NAMES = [
  'Anderson Alves',
  'Mariana Silva',
  'Carlos Souza',
  'Fernanda Lima',
  'João Pedro',
  'Beatriz Rocha',
  'Lucas Almeida',
  'Patrícia Ferreira',
  'Rafael Martins',
  'Camila Ribeiro',
  'Gustavo Carvalho',
  'Larissa Santos',
  'Pedro Henrique',
  'Aline Costa',
  'Thiago Oliveira',
  'Juliana Mendes',
  'Mateus Pereira',
  'Bruna Cardoso',
  'Diego Araújo',
  'Vanessa Moura',
];
const CLASS_TYPES = ['Jiu Jitsu', 'Capoeira'];
const GRADUATIONS = [
  { number: 0, name: 'Branca', color: '#FFF' },
  { number: 1, name: 'Azul', color: '#3B82F6' },
  { number: 2, name: 'Amarela', color: '#FACC15' },
  { number: 3, name: 'Verde', color: '#22C55E' },
  { number: 4, name: 'Roxa', color: '#8B5CF6' },
  { number: 5, name: 'Marrom', color: '#92400E' },
  { number: 6, name: 'Preta', color: '#18181B' },
];
const PAYMENT_STATUS: EnumPaymentStatus[] = ['paid', 'pending', 'overdue'];
const SAMPLE_DESCRIPTIONS = [
  'Compartilhando momentos incríveis!',
  'Este é um post de teste número ',
  'Curtindo esse dia maravilhoso com amigos e família.',
  'Uma pequena reflexão sobre a vida e os desafios diários.',
  'Explorando novos horizontes e aprendizados todos os dias.',
  'Nada melhor que aproveitar cada instante dessa jornada.',
  'Este post é para celebrar as pequenas vitórias diárias.',
  'Deixando aqui registrado um momento especial para sempre.',
  'A vida é feita de momentos simples, aproveite-os ao máximo!',
  'Vivendo intensamente e compartilhando essa energia positiva!',
  'Hoje foi um dia cheio de surpresas e aprendizados que nunca esquecerei, quero compartilhar cada detalhe com vocês.',
  'Entre altos e baixos da vida, perseverar é a chave para alcançar nossos sonhos e superar qualquer obstáculo que apareça no caminho.',
  'Às vezes, o silêncio fala mais alto que palavras, trazendo paz e permitindo que a alma se reconecte com o que realmente importa.',
  'Quando menos esperamos, a vida nos presenteia com encontros inesquecíveis e momentos que transformam nossa história para sempre.',
  'O verdadeiro sentido da felicidade está em encontrar a beleza nas pequenas coisas e valorizar quem está ao nosso lado em todas as jornadas.',
  'Nunca subestime o poder de um sorriso, ele pode mudar o dia de alguém e iluminar até os momentos mais sombrios com esperança.',
  'A gratidão é a memória do coração; que possamos sempre lembrar de agradecer por tudo que somos e temos, vivendo com plenitude.',
  'Esse post é um convite para refletir sobre as escolhas que fazemos diariamente e como elas moldam o futuro que tanto desejamos construir.',
  'O caminho pode ser longo e cheio de desafios, mas cada passo dado com determinação nos aproxima da realização dos nossos maiores objetivos.',
  'A arte de viver está em criar memórias que aquecem a alma, inspiram o coração e fortalecem nossos vínculos com as pessoas que amamos.',
];

export const FAKE_POSTS: IPost[] = Array.from({ length: 20 }).map((_, i) => {
  const gender = Math.random() > 0.5 ? 'men' : 'women';
  const name = NAMES[i % NAMES.length];
  const availableClassTypes = CLASS_TYPES.filter(() => Math.random() > 0.1);
  const graduations = availableClassTypes.map((type, idx) => {
    const grad = GRADUATIONS[Math.floor(Math.random() * GRADUATIONS.length)];
    return {
      type,
      name: grad.name,
      color: grad.color,
      number: grad.number,
      main: idx === 0,
    };
  });

  const commentCount = Math.floor(Math.random() * 10) + 1; // entre 1 e 10 comentários
  const comments: IComment[] = Array.from({ length: commentCount }).map(
    (__, cI) => {
      const cGender = Math.random() > 0.5 ? 'men' : 'women';
      const cName = NAMES[(i + cI + 5) % NAMES.length];
      return {
        id: `${i + 1}-${cI + 1}`,
        user: {
          id: `${i + 1}-${cI + 1}-user`,
          name: cName,
          avatar: `https://randomuser.me/api/portraits/${cGender}/${10 + cI + 5}.jpg`,
        },
        createdAt: new Date(
          Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30)
        ).toISOString(),
        comment: `Comentário de ${cName} no post ${i + 1}.`,
      };
    }
  );

  // Geração de likes fake
  const likeCount = Math.min(Math.floor(Math.random() * 20) + 1, 30); // max 30 likes
  const likes: ILike[] = Array.from({ length: likeCount }).map((__, lI) => {
    const lGender = Math.random() > 0.5 ? 'men' : 'women';
    const lName = NAMES[(i + lI + 10) % NAMES.length];
    return {
      id: `${i + 1}-${lI + 1}-like`,
      user: {
        id: `${i + 1}-${lI + 1}-like-user`,
        name: lName,
        avatar: `https://randomuser.me/api/portraits/${lGender}/${10 + lI + 10}.jpg`,
      },
      createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 60)
      ).toISOString(),
    };
  });

  const randomDesc =
    SAMPLE_DESCRIPTIONS[Math.floor(Math.random() * SAMPLE_DESCRIPTIONS.length)];
  const description = `${randomDesc} ${randomDesc.includes('número') ? `${i + 1}.` : ''}`;

  return {
    id: `${i + 1}`,

    // Mantendo o objeto user para dados adicionais
    user: {
      id: `${i + 1}`,
      name,
      avatar: `https://randomuser.me/api/portraits/${gender}/${10 + i}.jpg`,
      graduations: graduations,
      paymentStatus:
        PAYMENT_STATUS[Math.floor(Math.random() * PAYMENT_STATUS.length)],
      createdAt: new Date(
        Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 90)
      ).toISOString(),
    },

    location: `Cidade ${i + 1}, Estado`,
    image: `https://picsum.photos/800/600?random=${i + 1}`,
    likes,
    comments,
    createdAt: new Date(Date.now() - 1000 * 60 * 15 * i).toISOString(),
    description,
  };
});

export const FAKE_STUDENTS_PAYMENT = Array.from({ length: 20 }).map((_, i) => {
  const gender = Math.random() > 0.5 ? 'men' : 'women';
  const name = NAMES[i % NAMES.length];

  const classes = CLASS_TYPES.filter(() => Math.random() > 0.3) // aluno pode ter 1 ou 2 aulas
    .map((type) => ({
      type,
      graduation: GRADUATIONS[Math.floor(Math.random() * GRADUATIONS.length)],
    }));

  return {
    id: `${i + 1}`,
    name,
    avatar: `https://randomuser.me/api/portraits/${gender}/${10 + i}.jpg`,
    classes,
    paymentStatus:
      PAYMENT_STATUS[Math.floor(Math.random() * PAYMENT_STATUS.length)],
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 90) // até 90 dias atrás
    ).toISOString(),
  };
});


export const FAKES_EVENTS: IEvent[] = [
  {
    title: '2025-08-06',
    data: [
      {
        id: '1',
        title: 'Aula de Capoeira',
        description: 'Treino voltado para iniciantes com musicalidade.',
        timeStart: '19:00',
        timeEnd: '20:30',
        location: 'Sala 1 - Capoeira',
        type: 'daily',
      },
      {
        id: '2',
        title: 'Aniversário da Maria',
        description: 'Comemoração com roda de amigos e confraternização.',
        timeStart: '00:00',
        timeEnd: '02:00',
        location: 'Quadra Central',
        type: 'birthday',
      },
    ],
  },
  {
    title: '2025-08-08',
    data: [
      {
        id: '3',
        title: 'Aula de Jiu-Jitsu',
        description: 'Treino avançado focado em raspagens e finalizações.',
        timeStart: '20:00',
        timeEnd: '22:00',
        location: 'Tatame Principal',
        type: 'daily',
      },
    ],
  },
  {
    title: '2025-08-15',
    data: [
      {
        id: '4',
        title: 'Roda de Capoeira Comemorativa',
        description: 'Evento mensal aberto para familiares e convidados.',
        timeStart: '18:00',
        timeEnd: '20:30',
        location: 'Quadra Central',
        type: 'monthly',
      },
    ],
  },
  {
    title: '2025-08-16',
    data: [
      {
        id: '5',
        title: 'Treino especial de Jiu-Jitsu',
        description: 'Workshop de defesa pessoal com faixa preta convidado.',
        timeStart: '10:00',
        timeEnd: '13:00',
        location: 'Sala Multiuso',
        type: 'special',
      },
    ],
  },
];
