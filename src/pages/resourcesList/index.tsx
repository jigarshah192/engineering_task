import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularLoader from '../../components/circularLoader';
import useResourcesList from './useResourceList';
import ListCard from '../../components/listCard';

const ResourcesList = () => {
  const {
    resList,
    isLoading
  } = useResourcesList();

  return (
    <Box>
      <Typography variant='h3' marginY={2}>
        Resources List
      </Typography>
      {isLoading ? (
        <CircularLoader />
      ) : (
        <Grid
          container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          {resList.map((app: string, key: number) => (
            <ListCard value={app} page='resources' key={key} />
          ))}
        </Grid>
      )}
    </Box>
  )
}

export default ResourcesList;