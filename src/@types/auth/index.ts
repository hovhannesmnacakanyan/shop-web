export interface IAuthInitialState {
  isAuth: boolean;
  currentUser: any | null;
}

export interface ILoginBody {
  email: string;
  password: string;
}

export interface IRegistrationBody {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IRegistrationRequestBody {
  name: string;
  role: string;
  phoneNumber: string;
  publicEMail: string;
  text: string;
}
