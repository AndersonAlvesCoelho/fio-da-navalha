import { EnumEventType } from '@/@types/events';

export const getColorByType = (type: EnumEventType | null) => {
  switch (type) {
    case 'daily':
      return '#2563EB';
    case 'weekly':
      return '#4F46E5';
    case 'monthly':
      return '#10B981';
    case 'birthday':
      return '#F59E0B';
    case 'special':
      return '#D946EF';
    case 'other':
      return '#6B7280';
    default:
      return '#6B7280';
  }
};
