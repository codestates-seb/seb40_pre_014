import { atom } from 'recoil';

export const loginStates = atom({
  key: `loginStates`,
  default: {
    Profilelogin: false,
  },
});
