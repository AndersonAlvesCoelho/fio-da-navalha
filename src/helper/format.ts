export function getTimeAgo(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHr = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHr / 24);

  if (diffMin < 1) return 'agora mesmo';
  if (diffMin < 60) return `há ${diffMin} min`;
  if (diffHr < 24) return `há ${diffHr}h`;
  if (diffDay === 1) return 'ontem';
  return `há ${diffDay} dias`;
}



// +5523123112323
export function formatToE164(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  return `+55${digits}`;
}

export function formatNumber(value: string): string {
  let cleanedValue = value.replace(/[^0-9,]/g, '');

  const commaCount = (cleanedValue.match(/,/g) || []).length;
  if (commaCount > 1) {
    cleanedValue = cleanedValue.substring(0, cleanedValue.lastIndexOf(','));
  }

  return cleanedValue;
}

// "04 de maio de 2025 às 19:07"
export function formatDateToBR(dateString: string): string {
  const date = new Date(dateString);

  return date
    .toLocaleString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: 'America/Sao_Paulo',
    })
    .replace(',', ' às');
}

// 04/06/2025 11:35
export function formatDateNumeric(dateString: string): string {
  const date = new Date(dateString);

  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'America/Sao_Paulo',
  });
}

// junho 2025
export function formatMonthYear(timestamp: string): string {
  const date = new Date(timestamp);
  const formatted = date.toLocaleDateString('pt-BR', {
    month: 'long',
    year: 'numeric',
  });
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}




export function formatDateToUTC(dateString: string): string {
  if (!dateString) return '0';
  const date = new Date(dateString);
  return date
    .toLocaleString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      timeZone: 'UTC', 
    })
    .replace(',', ' às');
}


