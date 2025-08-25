import { IUser } from './users';

export interface IComment {
  id: string;
  user: IUser;
  createdAt: string;
  comment: string;
}

export interface ILike {
  id: string;
  user: IUser;
  createdAt: string;
}

export interface IPost {
  id: string;
  user: IUser;
  location: string;
  image: string;
  likes: ILike[];
  comments: IComment[];
  createdAt: string;
  description: string;
}
