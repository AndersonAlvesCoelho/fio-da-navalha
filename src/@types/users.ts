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