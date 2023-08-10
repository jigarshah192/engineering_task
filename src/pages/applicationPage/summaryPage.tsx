import { Box, Stack } from "@mui/material";
import Charts from "../../components/charts";
import SummaryCard from "../../components/summaryCard";

interface Map {
  [key: string]: object
}

type props = {
  cardDetail: Map,
  chartData?: object
}

const SummaryPage = ({
  cardDetail,
  chartData
}: props) => {
  return (
    <Box>
      <Box>
        <Stack
          direction='row'
          spacing={2}
          marginBottom={2}
          sx={{
            width: '100%',
            overflow: 'auto'
          }}
        >
          {Object.keys(cardDetail ?? {}).map(value => {
            const data = cardDetail[value];
            return (
              <SummaryCard
                value={value}
                data={data}
                key={value}
              />
            )
          })}
        </Stack>
        <Charts
          data={chartData}
        />
      </Box>
    </Box>
  )
}

export default SummaryPage