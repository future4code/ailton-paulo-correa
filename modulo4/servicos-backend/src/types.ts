export type address = {
  id?: string;
  code: string;
  street: string;
  number?: string | number;
  complement?: string;
  district: string;
  city: string;
  state: string;
};

export type body = { cep: string; number: string | number; complement: string };

export type searchAddress = {
  cep: string;
  logradouro: string;
  complemento?: string;
  number?: string | number;
  bairro: string;
  localidade: string;
  uf: string;
};

export type searchdata = { data: searchAddress };
