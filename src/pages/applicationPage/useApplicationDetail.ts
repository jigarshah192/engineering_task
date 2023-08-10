import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dataset, GroupedData, MainDataItem, MeterTotal, staticColorsArray } from "../../utils";
import { getApplicationData } from "../../services";

const useApplicationDetail = () => {
  const [appDetail, setAppDetail]: [any, any] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const apiCall = async () => {
    setIsLoading(true)
    const data = await getApplicationData(id || '');
    setAppDetail(data)
    setIsLoading(false)
  }

  useEffect(() => {
    apiCall();
  }, [id]);

  const calculateMeterTotals = (inputData: MainDataItem[]): Record<string, MeterTotal> => {
    const meterTotals: Record<string, MeterTotal> = {};
  
    inputData.forEach(item => {
      const meterCategory: string = item.MeterCategory;
      const cost: number = parseFloat(item.Cost);
      const consumedQuantity: number = parseInt(item.ConsumedQuantity);
  
      if (!meterTotals[meterCategory]) {
        meterTotals[meterCategory] = {
          totalCost: 0,
          totalConsumedQuantity: 0
        };
      }
  
      meterTotals[meterCategory].totalCost += cost;
      meterTotals[meterCategory].totalConsumedQuantity += consumedQuantity;
    });
  
    return meterTotals;
  };
  
  const groupData = (inputData: MainDataItem[]): GroupedData => {
    const labelsSet: Set<string> = new Set();
    const datasets: Dataset[] = [];
  
    inputData.forEach(item => {
      const date: string = item.Date;
      labelsSet.add(date);
  
      const meterCategory: string = item.MeterCategory;
      const cost: number = parseFloat(item.Cost);
  
      const datasetIndex: number = datasets.findIndex(dataset => dataset.label === meterCategory);
  
      if (datasetIndex === -1) {
        const randomIndex: number = Math.floor(Math.random() * staticColorsArray.length);
  
        const newDataset: Dataset = {
          label: meterCategory,
          data: [],
          backgroundColor: staticColorsArray[randomIndex]
        };
        datasets.push(newDataset);
      }
  
      datasets[datasetIndex]?.data.push(cost);
    });
  
    const labels: string[] = Array.from(labelsSet);
  
    return {
      labels,
      datasets,
    };
  };

  return {
    appDetail,
    isLoading,
    appId: id,
    groupData,
    calculateMeterTotals
  }
}

export default useApplicationDetail;