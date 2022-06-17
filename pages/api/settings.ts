import {IAllColorTheme} from '../../interfaces/index';
import networkClient from '../../configs/axios';

export class SettingDao  {
    static getColorTheme():Promise<IAllColorTheme> {
        return networkClient.get('/1312188d5808fe6d7d8a')
            .then((response:any) => {return response})
            .catch((error:any) => {return error})
    }
}