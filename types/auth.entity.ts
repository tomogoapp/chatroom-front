export interface AuthState {
  user:  UserClass | string;
  token: string | null;
}

export interface UserClass {
  username:  string;
  id:        string;
  roles:     string[];
  is_active: boolean;
}
