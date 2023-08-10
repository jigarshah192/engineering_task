import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularLoader from '../../components/circularLoader';
import useApplicationList from './useApplicationList';
import ListCard from '../../components/listCard';

const ApplicationsList = () => {
  const {
    appList,
    isLoading
  } = useApplicationList()


  return (
    <Box>
      <Typography variant='h3' marginY={2}>
        Applications List
      </Typography>
      {isLoading ? (
        <CircularLoader />
      ) : (
        <Grid
          container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {appList.map((app, key) => (
            <ListCard value={app} page='application' key={key} />
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default ApplicationsList;