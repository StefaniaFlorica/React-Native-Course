export interface LoginFormRef {
  getData: () => {email: string; password: string};
  setData: (newEmail: string, newPassword: string) => void;
}
