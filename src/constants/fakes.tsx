import { IEvent } from '@/@types/events';

export const FAKE_STORIES = [
  {
    id: '1',
    name: 'Ana 2',
    imageUri: 'https://randomuser.me/api/portraits/women/14.jpg',
    isDefault: true,
  },
  {
    id: '2',
    name: 'Bruno',
    imageUri: 'https://randomuser.me/api/portraits/men/11.jpg',
    view: false,
  },
  {
    id: '3',
    name: 'Clara',
    imageUri: 'https://randomuser.me/api/portraits/women/12.jpg',
    view: true,
  },
  {
    id: '4',
    name: 'Ana',
    imageUri: 'https://randomuser.me/api/portraits/women/10.jpg',
    view: false,
  },
  {
    id: '5',
    name: 'Bruno',
    imageUri: 'https://randomuser.me/api/portraits/men/11.jpg',
    view: false,
  },
  {
    id: '6',
    name: 'Clara',
    imageUri: 'https://randomuser.me/api/portraits/women/12.jpg',
    view: true,
  },
  {
    id: '7',
    name: 'Ana',
    imageUri: 'https://randomuser.me/api/portraits/women/10.jpg',
    view: false,
  },
  {
    id: '8',
    name: 'Bruno',
    imageUri: 'https://randomuser.me/api/portraits/men/11.jpg',
    view: false,
  },
  {
    id: '9',
    name: 'Clara',
    imageUri: 'https://randomuser.me/api/portraits/women/12.jpg',
    view: true,
  },
  {
    id: '10',
    name: 'Ana',
    imageUri: 'https://randomuser.me/api/portraits/women/10.jpg',
    view: false,
  },
  {
    id: '11',
    name: 'Bruno',
    imageUri: 'https://randomuser.me/api/portraits/men/11.jpg',
    view: false,
  },
  {
    id: '12',
    name: 'Clara',
    imageUri: 'https://randomuser.me/api/portraits/women/12.jpg',
    view: true,
  },
  {
    id: '13',
    name: 'Ana',
    imageUri: 'https://randomuser.me/api/portraits/women/10.jpg',
    view: false,
  },
  {
    id: '14',
    name: 'Bruno',
    imageUri: 'https://randomuser.me/api/portraits/men/11.jpg',
    view: false,
  },
  {
    id: '15',
    name: 'Clara',
    imageUri: 'https://randomuser.me/api/portraits/women/12.jpg',
    view: true,
  },
  // adicione mais histórias conforme desejar
];

export const FAKE_POSTS = Array.from({ length: 20 }).map((_, i) => ({
  id: `${i + 1}`,
  userName: `Usuário ${i + 1}`,
  location: `Cidade ${i + 1}, Estado`,
  avatar: `https://randomuser.me/api/portraits/men/${i + 10}.jpg`,
  image: `https://picsum.photos/800/600?random=${i + 1}`,
  likes: Math.floor(Math.random() * 200),
  comments: Math.floor(Math.random() * 50),
  createdAt: new Date(Date.now() - 1000 * 60 * 15 * i).toISOString(),
}));

export const FAKE_GRADUATIONS = ['Branca', 'Azul', 'Amarela', 'Verde'];

// src/constants/fakes.ts

const NAMES = [
  'Anderson Alves', 'Mariana Silva', 'Carlos Souza', 'Fernanda Lima', 'João Pedro',
  'Beatriz Rocha', 'Lucas Almeida', 'Patrícia Ferreira', 'Rafael Martins', 'Camila Ribeiro',
  'Gustavo Carvalho', 'Larissa Santos', 'Pedro Henrique', 'Aline Costa', 'Thiago Oliveira',
  'Juliana Mendes', 'Mateus Pereira', 'Bruna Cardoso', 'Diego Araújo', 'Vanessa Moura'
];

const CLASS_TYPES = ['Jiu Jitsu', 'Capoeira'];
const GRADUATIONS = ['Branca', 'Azul', 'Amarela', 'Verde', 'Roxa', 'Marrom', 'Preta'];
const PAYMENT_STATUS = ['paid', 'pending', 'overdue'];

export const FAKE_STUDENTS_PAYMENT = Array.from({ length: 20 }).map((_, i) => {
  const gender = Math.random() > 0.5 ? 'men' : 'women';
  const name = NAMES[i % NAMES.length];

  const classes = CLASS_TYPES
    .filter(() => Math.random() > 0.3) // aluno pode ter 1 ou 2 aulas
    .map((type) => ({
      type,
      graduation: GRADUATIONS[Math.floor(Math.random() * GRADUATIONS.length)]
    }));

  return {
    id: `${i + 1}`,
    name,
    avatar: `https://randomuser.me/api/portraits/${gender}/${10 + i}.jpg`,
    classes,
    paymentStatus: PAYMENT_STATUS[Math.floor(Math.random() * PAYMENT_STATUS.length)],
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 90) // até 90 dias atrás
    ).toISOString(),
  };
});



const eventTitles = [
  "Aula de Capoeira",
  "Treino de Jiu-jitsu",
  "Seminário de Karate",
  "Festival Cultural",
  "Campeonato Regional",
  "Aniversário da Ana",
  "Workshop de Defesa Pessoal",
  "Treino Intensivo",
];

const eventTypes: IEvent["type"][] = ["daily", "monthly", "birthday"];

const eventLocations = [
  "Academia Central",
  "Dojo Mestre João",
  "Praça Central",
  "Clube da Cidade",
  "Ginásio Municipal",
  "Parque Esportivo",
];

function getRandomDate() {
  const start = new Date(2025, 7, 1); // Agosto 2025
  const end = new Date(2025, 7, 31);
  const randomTime =
    start.getTime() + Math.random() * (end.getTime() - start.getTime());
  return new Date(randomTime).toISOString().split("T")[0];
}

function getRandomTime() {
  const hours = String(Math.floor(Math.random() * 12) + 8).padStart(2, "0"); // entre 08 e 20h
  const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0");
  return `${hours}:${minutes}`;
}

export const FAKE_EVENTS: IEvent[] = Array.from({ length: 100 }, (_, idx) => {
  const type = eventTypes[Math.floor(Math.random() * eventTypes.length)];
  return {
    id: String(idx + 1),
    title: eventTitles[Math.floor(Math.random() * eventTitles.length)],
    type,
    date: getRandomDate(),
    time: type !== "birthday" ? getRandomTime() : undefined,
    location: type !== "birthday"
      ? eventLocations[Math.floor(Math.random() * eventLocations.length)]
      : undefined,
  };
});
