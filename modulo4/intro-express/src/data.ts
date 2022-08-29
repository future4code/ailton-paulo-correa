export type user = {
  id: number;
  name: string;
  phone: string;
  email: string;
  website: string;
};

export type post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export const users: user[] = [
  {
    id: 1,
    name: "Nome 1",
    phone: "(00)98765-4321",
    email: "email@email.com",
    website: "www.site.com",
  },
  {
    id: 2,
    name: "Nome 2",
    phone: "(77)98765-4321",
    email: "email2@email.com",
    website: "www.site2.com",
  },
  {
    id: 3,
    name: "Nome 3",
    phone: "(88)98765-4321",
    email: "email3@email.com",
    website: "www.site3.com",
  },
  {
    id: 4,
    name: "Nome 4",
    phone: "(99)98765-4321",
    email: "email4@email.com",
    website: "www.site4.com",
  },
];

export const posts: post[] = [
  {
    id: 1,
    title: "titulo",
    body: "uma frase ai",
    userId: 2,
  },
  { id: 2, title: "titulo", body: "um texto ai", userId: 4 },
];
