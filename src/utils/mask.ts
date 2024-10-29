function applyMask(value: string | undefined, mask: string): string {
  const cleanedValue = (value || '').replace(/\D/g, '');
  let maskedValue = '';
  let maskIndex = 0;

  for (let i = 0; i < cleanedValue.length && maskIndex < mask.length; i++) {
    if (mask[maskIndex] === '0') {
      maskedValue += cleanedValue[i];
    } else {
      maskedValue += mask[maskIndex];
      i--;
    }
    maskIndex++;
  }

  return maskedValue;
}

export { applyMask };

