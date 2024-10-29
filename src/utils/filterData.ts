function filterDataByText<T>(
  data: T[],
  searchText: string,
  searchKeys: (keyof T)[]
): T[] {
  const normalizedSearchText = searchText.toLowerCase();

  return data.filter((item) =>
    searchKeys.some((key) => {
      const fieldValue = item[key];
      return (
        fieldValue &&
        fieldValue.toString().toLowerCase().includes(normalizedSearchText)
      );
    })
  );
}

export { filterDataByText };

