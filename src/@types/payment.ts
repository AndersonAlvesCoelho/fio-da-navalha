export interface IPayment  {
  id?: string
  updater_at: string; 
  month: string
  value: number; 
  proofFileName?: string; 
  status: 'enviado' | 'pendente' | 'confirmado' | 'recusado';
};
