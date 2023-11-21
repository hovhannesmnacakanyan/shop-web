export interface IAuthInitialState {
  isAuth: boolean;
  currentUser: any | null;
}

export interface ILoginBody {
  username: string;
  password: string;
}

export interface IRegistrationRequestBody {
  name: string;
  role: string;
  phoneNumber: string;
  publicEMail: string;
  text: string;
}
