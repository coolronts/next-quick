import {IAllColorTheme, IColorTheme} from '../interfaces';
import { RecoilState, atom, selector } from 'recoil';

export const allColorTheme:RecoilState<IAllColorTheme> = atom({
    key: 'allColorTheme',
    default: { } as IAllColorTheme,
});

export const colorMode = atom({
    key: 'colorMode',
    default: true,
})



export const currentTheme = selector({
  key: "currentTheme",
    get: ({ get }) => {
        if(get(colorMode)===true){
            return get(allColorTheme).light;
        } else {
            return get(allColorTheme).dark
        }
    },
});



