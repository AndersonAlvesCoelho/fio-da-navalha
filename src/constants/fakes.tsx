import { IEvent } from '@/src/@types/events';
import { IStudent } from '@/src/@types/my-students';

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

export const FAKE_EVENTS: IEvent[] = [
  {
    id: '1',
    title: 'Aula de Capoeira',
    type: 'daily',
    date: '2025-08-05',
    time: '18:00',
    location: 'Academia Central',
  },
  {
    id: '2',
    title: 'Treino de Jiu-jitsu',
    type: 'daily',
    date: '2025-08-06',
    time: '20:00',
    location: 'Dojo Mestre João',
  },
  {
    id: '3',
    title: 'Festival Cultural',
    type: 'monthly',
    date: '2025-08-15',
    time: '19:00',
    location: 'Praça Central',
  },
  {
    id: '4',
    title: 'Aniversário da Ana',
    type: 'birthday',
    date: '2025-08-10',
  },
];

export const FAKE_STUDENTS_PAYMENT: IStudent[] = [
  {
    id: '1',
    name: 'João Silva',
    avatar: 'https://i.pravatar.cc/150?img=1',
    graduation: 'Faixa Azul',
    monthlyPayment: 120,
    paymentStatus: 'pago',
    isGuest: false,
  },
  {
    id: '2',
    name: 'Maria Souza',
    avatar: 'https://i.pravatar.cc/150?img=2',
    graduation: 'Faixa Amarela',
    monthlyPayment: 100,
    paymentStatus: 'pendente',
    isGuest: false,
  },
  {
    id: '3',
    name: 'Carlos Lima',
    avatar: 'https://i.pravatar.cc/150?img=3',
    graduation: 'Faixa Roxa',
    monthlyPayment: 130,
    paymentStatus: 'pendente',
    isGuest: true,
  },
];

export const FAKE_STUDENTS: IStudent[] = [
  {
    id: '1',
    name: 'João da Silva',
    avatar: 'https://i.pravatar.cc/150?img=1',
    graduation: 'Branca',
    userType: 'aluno',
  },
  {
    id: '2',
    name: 'Maria Oliveira',
    avatar: 'https://i.pravatar.cc/150?img=2',
    graduation: 'Azul',
    userType: 'convidado',
  },
];

export const FAKE_GRADUATIONS = ['Branca', 'Azul', 'Amarela', 'Verde'];
