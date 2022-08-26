export type user = {
  id?: string;
  name: string;
  nickname: string;
  email: string;
};

export type editBody = {
  name: string;
  nickname: string;
};

export type task = {
  id?: string;
  title: string;
  description: string;
  limitDate: string;
  creatorUserId: string;
};
