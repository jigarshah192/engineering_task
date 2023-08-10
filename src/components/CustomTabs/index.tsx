import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from '@mui/material/Box';
import TabContext from "@mui/lab/TabContext";
import Tab from "@mui/material/Tab";
import { useState, ChangeEvent, ReactNode, FC } from 'react';

interface TabType {
  id: string,
  tabName: string,
  tabContent: ReactNode
}

type Props = {
  tabList: TabType[],
}

const CustomTabs: FC<Props> = ({ tabList }) => {
  const [value, setValue] = useState(tabList[0]?.id);
  const handleChange = (event: ChangeEvent<any>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <Box>
        <TabList onChange={handleChange}>
          {tabList?.map((tab: TabType, key: number) => (
            <Tab
              key={key}
              label={tab.tabName}
              value={tab.id}
            />
          ))}

        </TabList>
      </Box>
      <Box>
        {tabList?.map((tab: TabType, key: number) => (
          <TabPanel
            key={key}
            value={tab.id}
            sx={{
              paddingX: 0
            }}
          >
            {tab?.tabContent}
          </TabPanel>
        ))}
      </Box>
    </TabContext>
  )
}

export default CustomTabs;