enum SECTORS {
  MARKETING = "marketing",
  FINANCIAL = "financeiro",
  SALES = "vendas",
}
type collaboratorsType = {
  name: string;
  salary: number;
  sector: SECTORS;
  presential: boolean;
};
const collaborators: collaboratorsType[] = [
  { name: "Marcos", salary: 2500, sector: SECTORS.MARKETING, presential: true },
  { name: "Maria", salary: 1500, sector: SECTORS.SALES, presential: false },
  { name: "Salete", salary: 2200, sector: SECTORS.FINANCIAL, presential: true },
  { name: "João", salary: 2800, sector: SECTORS.MARKETING, presential: false },
  { name: "Josué", salary: 5500, sector: SECTORS.FINANCIAL, presential: true },
  { name: "Natalia", salary: 4700, sector: SECTORS.SALES, presential: true },
  { name: "Paola", salary: 3500, sector: SECTORS.MARKETING, presential: true },
];

const exe4 = (list: collaboratorsType[]): collaboratorsType[] => {
  return list.filter((item: collaboratorsType) => {
    if (item.sector === SECTORS.MARKETING) {
      return item;
    }
  });
};
console.table(exe4(collaborators));
