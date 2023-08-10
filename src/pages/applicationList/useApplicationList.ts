import { useEffect, useState } from 'react';
import { getApplicationList } from '../../services';

const useApplicationList = () => {
  const [appList, setAppList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const apiCall = async () => {
    setIsLoading(true);
    const data = await getApplicationList();
    setAppList(data);
    setIsLoading(false);
  }

  useEffect(() => {
    apiCall();
  }, []);

  return {
    appList,
    isLoading
  }
}

export default useApplicationList;