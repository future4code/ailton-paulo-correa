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
  taskId?: string;
  title: string;
  description: string;
  limitDate: string;
  status?: string;
  creatorUserId: string;
  nickname?: string;
};

export type getUser = { id: string; nickname: string };

export type resultTasks = {
  id: string;
  title: string;
  description: string;
  limitDate: string;
  creatorUserId: string;
  status: string;
  nickname: string;
};

export type taskResponsibles = {
  taskId?: string;
  title: string;
  description: string;
  limitDate: string;
  creatorUserId: string;
  creatorUserNickname: string;
  responsibleUsers: getUser[];
};
