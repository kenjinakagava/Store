import i18n from "i18next";

const getCurrency = () => {
  switch (i18n.language) {
    case "en":
      return { symbol: "$", exchangeRate: 1 };
    case "ptbr":
      return { symbol: "R$", exchangeRate: 5 };
    default:
      return { symbol: "Invalid language", exchangeRate: 1 };
  }
};

export default getCurrency;
