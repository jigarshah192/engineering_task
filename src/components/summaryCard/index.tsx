import { Box, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

interface Map {
  totalConsumedQuantity: number,
  totalCost: number
}

type props = {
  value?: string,
  data?: Map
}

const SummaryCard = ({
  value,
  data
}: props) => {
  return (
    <Box
      key={value}
      sx={{
        minWidth: '300px',
        padding: '10px',
        backgroundColor: '#DEE9FF',
        borderRadius: '10px'
      }}
    >
      <Typography variant="h6">{value}</Typography>
      <Stack
        direction='row'
        justifyContent='space-around'
      >
        <Stack>
          <Typography>Total Consumed Quantity</Typography>
          <Typography>{data?.totalConsumedQuantity.toFixed(2)}</Typography>
        </Stack>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Stack>
          <Typography>Total Cost</Typography>
          <Typography>{data?.totalCost.toFixed(2)}</Typography>
        </Stack>
      </Stack>
    </Box>
  )
}

export default SummaryCard;