export interface User {
  id: string;
  username: string;
  password: string;
  email: string | null;
  pointCurrent: number;
  pointReceived: number;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
}

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  username: string;
  password: string;
}
