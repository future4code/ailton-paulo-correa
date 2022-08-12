type clientBankType = {
  client: string;
  balanceTotal: number;
  debts: number[];
};

const clientsBank: clientBankType[] = [
  { client: "João", balanceTotal: 1000, debts: [100, 200, 300] },
  { client: "Paula", balanceTotal: 7500, debts: [200, 1040] },
  { client: "Pedro", balanceTotal: 10000, debts: [5140, 6100, 100, 2000] },
  { client: "Luciano", balanceTotal: 100, debts: [100, 200, 1700] },
  { client: "Artur", balanceTotal: 1800, debts: [200, 300] },
  { client: "Soter", balanceTotal: 1200, debts: [] },
];

const exe6 = (list: clientBankType[]): clientBankType[] => {
  const sumDebts = list.map((item) => {
    return item.debts.reduce((a, b) => a + b, 0);
  });
  const clientBalanceNegative = list
    .map((item, i) => {
      return {
        ...item,
        balanceTotal: item.balanceTotal - sumDebts[i],
        debts: [],
      };
    })
    .filter((item) => {
      return item.balanceTotal < 0;
    });
  return clientBalanceNegative;
};
console.table(exe6(clientsBank));
