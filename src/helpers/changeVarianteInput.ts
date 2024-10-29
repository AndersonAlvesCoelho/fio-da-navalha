export const changeVariantInput = (
  value: string | undefined,
  requiredError: string,
  disabled: boolean
): 'error' | 'success' | 'disabled' | 'default' => {
  switch (true) {
    case disabled:
      return 'disabled';
    case !!requiredError:
      return 'error';
    case !!value && !requiredError:
      return 'success';

    default:
      return 'default';
  }
};
