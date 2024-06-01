export interface AuthState {
  user:  UserClass | null;
  token: string | null;
}

export interface UserClass {
  username:  string;
  id:        string;
  roles:     string[];
  is_active: boolean;
}
