import {ReactSetter} from './interface';
import axios from 'axios';

export const isInternetConnect = async ({setData}: Props) => {
  await axios
    .get('https://www.google.com/')
    .then(response => setData(response.status));
};

type Props = {
  setData: ReactSetter<number>;
};
