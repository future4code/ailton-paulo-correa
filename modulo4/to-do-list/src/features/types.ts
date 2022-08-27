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
  status?: string;
  creatorUserId: string;
};

export type getUser = { id: string; nickname: string };

export type resultTasks = {
  id: string;
  title: string;
  description: string;
  limitDate: string;
  creatorUserId: string;
  status: string;
  cnickname: string;
};
