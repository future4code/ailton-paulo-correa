export const checkEmail = (email: string): boolean =>
  /^[a-z0-9.]+@[a-z0-9]+\.[a-z.]+?$/i.test(email);

export const checkImage = (email: string): boolean =>
  /\.(jpg|jpeg|png|webp|avif|gif|svg)/.test(email);


  // leitura, tirar depois isso
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}  |www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi