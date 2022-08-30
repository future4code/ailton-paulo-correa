export type user = {
  id: number;
  name: string;
  email: string;
  type: string;
};

export type userOrder = {
  name?: string;
  type?: string;
  order?: string;
};

export type allFilters = {
  name?: string;
  type?: string;
  order?: string;
  page?: string;
};
