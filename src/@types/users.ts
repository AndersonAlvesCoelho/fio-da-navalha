export type EnumMartialArtType = 'Jiu Jitsu' | 'Capoeira';
export type EnumGraduationColor = 'Branca' | 'Azul' | 'Roxa' | 'Marrom' | 'Preta';
export type EnumPaymentStatus = 'paid' | 'pending' | 'overdue';

export interface IStudentClass {
  type: EnumMartialArtType;
  graduation: EnumGraduationColor;
}

export interface IStudent {
  id: string;
  name: string;
  avatar: string;
  classes: IStudentClass[];
  paymentStatus: EnumPaymentStatus;
  createdAt: string;
}

type Graduation = {
  type: string; // "Jiu Jitsu" etc.
  name: string; // "Branca", "Azul" etc.
  color: string; // cor referente à graduação
  main: boolean; // se é a principal
  number: number
};

export interface IUser {
  id: string;
  name: string;
  avatar: string;
  graduations?: Graduation[];
  paymentStatus?: EnumPaymentStatus;
  createdAt?: string;
}