import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CircularLoader from '../../components/circularLoader';
import DataTable from '../../components/dataTable';
import useApplicationDetail from './useApplicationDetail';
import CustomTabs from '../../components/CustomTabs';
import SummaryPage from './summaryPage';
import { columnHeaders, formateDataForTable } from '../../utils';

const ApplicationPage = () => {
  const {
    appDetail,
    isLoading,
    appId,
    groupData,
    calculateMeterTotals
  } = useApplicationDetail();

  const chartData = groupData(appDetail || []);
  const cardDetail = calculateMeterTotals(appDetail || []);

  const tablist = [
    {
      id: 1,
      tabName: 'Summary',
      tabContent:
        <SummaryPage cardDetail={cardDetail} chartData={chartData} />
    },
    {
      id: 2,
      tabName: 'Detail',
      tabContent: <DataTable
        columns={columnHeaders}
        rowsData={formateDataForTable(appDetail)}
      />,
    },
  ];

  return (
    <Box>
      <Typography variant='h4' marginY={2}>
        Application Detail Page of {appId}
      </Typography>
      {isLoading ? (
        <CircularLoader />
      ) : (
        <CustomTabs
          tabList={tablist}
        />
      )}
    </Box>
  )
}

export default ApplicationPage;
