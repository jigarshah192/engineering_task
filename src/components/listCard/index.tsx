import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

type Props = {
  value: string,
  page: string
}

const ListCard = ({
  value,
  page
}: Props) => {
  const navigate = useNavigate();

  return (
    <Grid xs={4}
      sx={{
        padding: 2
      }}>
      <Paper elevation={3}
        sx={{
          cursor: 'pointer',
          padding: 1
        }}
        onClick={() => {
          navigate(`/${page}/${value}`)
        }}
      >
        <Typography>
          {value}
        </Typography>
      </Paper>
    </Grid>
  )
}

export default ListCard;