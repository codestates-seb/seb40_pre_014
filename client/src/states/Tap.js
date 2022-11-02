import { atom } from 'recoil';

export const TapStates = atom({
  key: `TapStates`,
  default: {
    One: true,
    Two: false,
    Three: false,
  },
});
