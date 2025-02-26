export type User = {
  login: string;
  avatar_url: string;
  bio: string;
  name: string;
};

export type Repository = {
  id: number;
  name: string;
  description: string;
};

export type Commit = {
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
    };
  };
};
