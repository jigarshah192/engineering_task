import { useEffect, useState } from 'react';
import { getResourcesList } from '../../services';

const useResourcesList = () => {
  const [resList, setResList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiCall = async () => {
    setIsLoading(true)
    const data = await getResourcesList();
    setResList(data)
    setIsLoading(false)
  };

  useEffect(() => {
    apiCall();
  }, []);

  return {
    resList,
    isLoading
  }
}

export default useResourcesList;