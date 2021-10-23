import { atom } from 'recoil';

export const userAtom = atom({
  key: 'userAtom', 
    default: {
        userId: undefined,
        nickname: undefined
    }
});