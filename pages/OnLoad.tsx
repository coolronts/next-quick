import { allColorTheme, currentTheme } from '../atoms/index'
import { useEffect, useState } from 'react';

import {SettingDao} from './api/settings';
import { useRecoilState } from 'recoil';

type props = {
  setIsLoading: (x: boolean) => void;
}

const OnLoad: React.FC<props> = ({setIsLoading}) => {
  const [allColorThemes, setAllColorThemes] = useRecoilState(allColorTheme);
  useEffect(() => {
      console.log('allColorThemes', allColorThemes);
      SettingDao.getColorTheme().then(res => {
      setAllColorThemes(res)
      setIsLoading(false)
    });
  }, [])
  return (
    <>  </>
  );
}

export default OnLoad;