export const NumberUtils = {
  toCurrency: (number: number | string) => {
    if (number !== 0 && !number) return '';

    return `R$ ${number.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  },
};
