import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularLoader from '../../components/circularLoader';
import DataTable from '../../components/dataTable';
import useResourcesDetail from './useResourcesDetail';
import CustomTabs from '../../components/CustomTabs';
import SummaryPage from './summaryPage';
import { columnHeaders, formateDataForTable } from '../../utils';

const ResourcesPage = () => {
  const {
    ResDetail,
    isLoading,
    resId,
    groupData,
    calculateMeterTotals
  } = useResourcesDetail();

  const chartData = groupData(ResDetail || []);
  const cardDetail = calculateMeterTotals(ResDetail || []);

  const tablist = [
    {
      id: 1,
      tabName: 'Summary',
      tabContent:
        <SummaryPage chartData={chartData} cardDetail={cardDetail} />
      ,
    },
    {
      id: 2,
      tabName: 'Detail',
      tabContent: <DataTable
        columns={columnHeaders}
        rowsData={formateDataForTable(ResDetail)}
      />,
    },
  ];

  return (
    <Box>
      <Typography variant='h4' marginY={2}>
        Resource Detail Page of {resId}
      </Typography>
      {isLoading ? (
        <CircularLoader />
      ) : (
        <CustomTabs
          tabList={tablist}
        />
      )}
    </Box >
  )
}

export default ResourcesPage;