export interface IStudent {
  id: string;
  name: string;
  avatar: string;
  graduation: string;
  monthlyPayment?: number;
  userType?: 'aluno' | 'convidado';
  paymentStatus?: 'pago' | 'pendente';
  isGuest?: boolean;
}
