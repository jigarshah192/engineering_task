export const staticColorsArray = [
  '#1F77B4',
  '#1FA4B4',
  '#1FB46B',
  '#5EB41F',
  '#B4B41F',
  '#B47C1F',
  '#B4331F',
  '#9B1FB4',
]

export interface MainDataItem {
  ConsumedQuantity: string;
  Cost: string;
  Date: string;
  InstanceId: string;
  MeterCategory: string;
  ResourceGroup: string;
  ResourceLocation: string;
  Tags: {
    'app-name': string;
    environment: string;
    'business-unit': string;
  };
  UnitOfMeasure: string;
  Location: string;
  ServiceName: string;
}

export interface MeterTotal {
  totalCost: number;
  totalConsumedQuantity: number;
}

export interface Dataset {
  label: string;
  data: number[];
  backgroundColor: string;
}

export interface GroupedData {
  labels: string[];
  datasets: Dataset[];
}

export const columnHeaders = [
  {
    Header: "Consumed Quantity",
    accessor: "ConsumedQuantity"
  },
  {
    Header: "Cost",
    accessor: "Cost"
  },
  {
    Header: "Date",
    accessor: "Date"
  },
  {
    Header: "Instance Id",
    accessor: "InstanceId"
  },
  {
    Header: "Meter Category",
    accessor: "MeterCategory"
  },
  {
    Header: "Resource Group",
    accessor: "ResourceGroup"
  },
  {
    Header: "Resource Location",
    accessor: "ResourceLocation"
  },
  {
    Header: "Tag - App Name",
    accessor: "app-name"
  },
  {
    Header: "Tag - Environment",
    accessor: "environment"
  },
  {
    Header: "Tag - Business Unit",
    accessor: "business-unit"
  },
  {
    Header: "Unit Of Measure",
    accessor: "UnitOfMeasure"
  },
  {
    Header: "Location",
    accessor: "Location"
  },
  {
    Header: "Service Name",
    accessor: "ServiceName"
  }
]

export const formateDataForTable = (arr: MainDataItem[]) => {
  const newArr = arr.map((item: MainDataItem) => {
    const { Tags, ...restData } = item;
    return { ...restData, ...Tags };
  })

  return newArr;
}