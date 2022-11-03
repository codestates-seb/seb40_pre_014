import { atom } from 'recoil';

// 추가 하고 싶은 모달 상태 아래 기재

export const pageStates = atom({
  key: `modalStates`,
  default: {
    main: 1,
  },
});
