export interface AuthState {
  user:  UserClass;
  token: string | null;
}

export interface UserClass {
  username:  string;
  id:        string;
  roles:     string[];
  is_active: boolean;
}
