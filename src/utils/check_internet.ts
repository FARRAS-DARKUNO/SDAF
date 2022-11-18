import {ReactSetter} from './interface';
import axios from 'axios';

export const isInternetConnect = async ({setData}: Props) => {
  let temp = 404
  await axios.get('https://www.google.com/')
  .then(response => {
    temp = response.status
    setData(response.status)
  })
  .catch(() => {
    setData(404)
  }).finally(()=>{
    
    console.log('hallo',temp)
  
    if (temp == 404) {
      console.log("hallo")
      setData(temp)
    }

  })
  
};

type Props = {
  setData: ReactSetter<number>;
};
