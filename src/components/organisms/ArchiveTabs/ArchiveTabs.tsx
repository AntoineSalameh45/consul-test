import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface iTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: iTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <h3>Historique des Consuls Généraux</h3>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          height: 300,
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          <Tab label="2018-2025" {...a11yProps(0)} />
          <Tab label="2012-2018" {...a11yProps(1)} />
          <Tab label="2002-2012" {...a11yProps(2)} />
          <Tab label="1999-2002" {...a11yProps(3)} />
          <Tab label="1990-1999" {...a11yProps(4)} />
          <Tab label="1985-1990" {...a11yProps(5)} />
          <Tab label="1983-1985" {...a11yProps(6)} />
          <Tab label="1983-1983" {...a11yProps(7)} />
          <Tab label="1979-1983" {...a11yProps(8)} />
          <Tab label="1975-1979" {...a11yProps(9)} />
          <Tab label="1963-1975" {...a11yProps(10)} />
          <Tab label="1960-1963" {...a11yProps(11)} />
          <Tab label="1958-1960" {...a11yProps(12)} />
          <Tab label="1957-1958" {...a11yProps(13)} />
          <Tab label="1950-1957" {...a11yProps(14)} />
          <Tab label="1947-1950" {...a11yProps(15)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Mme Sonia ABOU AZAR
          <img src="src\assets\images\archives\Sonia-ABOU-AZAR.jpg" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Mme Hala KEYROUZ
        </TabPanel>
        <TabPanel value={value} index={2}>
          M. Abdel Sattar ISSA
        </TabPanel>
        <TabPanel value={value} index={3}>
          M. Joudat EL HAJJAR
        </TabPanel>
        <TabPanel value={value} index={4}>
          M. Tony BRAIDY
        </TabPanel>
        <TabPanel value={value} index={5}>
          M. Elias GHOSN
        </TabPanel>
        <TabPanel value={value} index={6}>
          M. Gilbert AOUN
        </TabPanel>
        <TabPanel value={value} index={7}>
          M. Khaled KILAN
        </TabPanel>
        <TabPanel value={value} index={8}>
          M. William HABIB
        </TabPanel>
        <TabPanel value={value} index={9}>
          M. Farid SAMAHA
        </TabPanel>
        <TabPanel value={value} index={10}>
          M. Edmond DONATO
        </TabPanel>
        <TabPanel value={value} index={11}>
          M. Edmond RAFFOUL
        </TabPanel>
        <TabPanel value={value} index={12}>
          M. Mahmoud HAFEZ
        </TabPanel>
        <TabPanel value={value} index={13}>
          M. Samih EL BABA
        </TabPanel>
        <TabPanel value={value} index={14}>
          M. Farès RAJI
        </TabPanel>
        <TabPanel value={value} index={15}>
          M. Henri BASSOUL
        </TabPanel>
      </Box>
    </>
  );
}
