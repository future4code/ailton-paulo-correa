// --------------------------
// transfer
export type transfer = {
  id?: number;
  cpfSender: string;
  nameSender: string;
  value: number;
  date: string;
  description: string;
  cpfReceiver?: string;
  nameReceiver?: string;
};
// transfer
// --------------------------
// create account
export type balance = {
  dateUpdate: string;
  value: number;
};

export type account = {
  id?: number;
  name: string;
  cpf: string;
  birthdate: string;
  balance?: balance;
  historyTransfer?: transfer[];
};
// create account
// --------------------------
// get balance
export type getBalance = {
  name: string;
  cpf: string;
};
// get balance
// --------------------------
// add balance
export type addBalance = {
  name: string;
  cpf: string;
  newValue: number;
  date?: string;
};
// add balance
// --------------------------
// payBill
export type payType = {
  value: number;
  cpf: string;
  payDate?: string;
  description: string;
};
// paybill
// --------------------------
