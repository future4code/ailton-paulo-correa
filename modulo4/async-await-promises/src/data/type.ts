export type user = {
  id: string;
  name: string;
  email: string;
};

export type data = { data: user[] };

export type news = {
  title: string;
  content: string;
  date: number;
};
