import { account } from "../endpoints/types";

// --------------------------
export const accounts: account[] = [
  {
    id: 1,
    name: "Nome 1",
    cpf: "111.111.111-11",
    birthdate: "11-10-1995",
    balance: {
      description: "descrição",
      date: "19-08-2022",
      value: 100,
    },
    historyTransfer: [
      {
        id: 1,
        cpfSender: "111.111.111-11",
        nameSender: "Nome 1",
        value: 100,
        cpfReceiver: "111.111.111-11",
        nameReceiver: "Nome 2",
      },
    ],
  },
  {
    id: 2,
    name: "Nome 2",
    cpf: "111.111.111-11",
    birthdate: "11-10-1995",
    balance: {
      description: "descrição",
      date: "19-08-2022",
      value: 100,
    },
    historyTransfer: [],
  },
  {
    id: 3,
    name: "Nome 3",
    cpf: "111.111.111-11",
    birthdate: "11-10-1995",
    balance: {
      description: "descrição",
      date: "19-08-2022",
      value: 100,
    },
    historyTransfer: [],
  },
  {
    id: 4,
    name: "Nome 4",
    cpf: "111.111.111-11",
    birthdate: "11-10-1995",
    balance: {
      description: "descrição",
      date: "19-08-2022",
      value: 100,
    },
    historyTransfer: [
      {
        id: 1,
        cpfSender: "111.111.111-11",
        nameSender: "Nome 1",
        value: 100,
        cpfReceiver: "111.111.111-11",
        nameReceiver: "Nome 2",
      },
      {
        id: 1,
        cpfSender: "111.111.111-11",
        nameSender: "Nome 1",
        value: 55,
        cpfReceiver: "111.111.111-11",
        nameReceiver: "Nome 5",
      },
    ],
  },
  {
    id: 5,
    name: "Nome 5",
    cpf: "111.111.111-11",
    birthdate: "11-10-1995",
    balance: {
      description: "descrição",
      date: "19-08-2022",
      value: 100,
    },
    historyTransfer: [],
  },
];
// --------------------------
