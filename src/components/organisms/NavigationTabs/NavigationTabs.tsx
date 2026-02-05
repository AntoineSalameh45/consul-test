import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export type TabItem = {
  id: string;
  label: string;
  content: React.ReactNode;
};

type NavTabsProps = {
  tabs: TabItem[];
  defaultIndex?: number;
};

const NavTabs = ({ tabs, defaultIndex = 0 }: NavTabsProps) => {
  const [value, setValue] = React.useState(defaultIndex);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      {/* Tabs header */}
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="navigation tabs"
      >
        {tabs.map((tab, index) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>

      {/* Tab content */}
      <Box sx={{ mt: 3 }}>
        {tabs[value]?.content}
      </Box>
    </Box>
  );
};

export default NavTabs;
