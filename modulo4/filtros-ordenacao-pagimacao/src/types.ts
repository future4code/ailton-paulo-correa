export type user = {
  id: number;
  name: string;
  email: string;
  type: string;
};

export type userOrder = {
  columnOrder?: string;
  order?: string;
};

export type allFilters = {
  name?: string;
  type?: string;
  columnOrder?: string;
  order?: string;
  page?: string;
};
