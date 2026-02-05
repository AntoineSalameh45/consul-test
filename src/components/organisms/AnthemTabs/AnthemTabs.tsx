import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface iTabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: iTabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: "background.paper",
          height: "auto",
          width: "100%",
        }}
      >
        <Tabs
          orientation="horizontal"
          value={value}
          onChange={handleChange}
          aria-label="Horizontal tabs example"
          centered
        >
          <Tab label="Francais" {...a11yProps(0)} />
          <Tab label="Arabe" {...a11yProps(1)} />
          <Tab label="Anglais" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="flex flex-col space-y-5 text-md text-black">
            <p>
              Tous Pour la Patrie, pour la gloire et le drapeau. <br />
              Par l'épée et la plume nous marquons les temps. <br />
              Notre plaine et nos montagnes font des hommes vigoureux. <br />À
              la perfection nous consacrons notre parole et notre travail.{" "}
              <br />
            </p>
            <p className="italic text-gray-800">
              Tous Pour la Patrie, pour la gloire et le drapeau. <br />
              Tous Pour la Patrie.
            </p>
            <p>
              Nos vieux et nos jeunes attendent l'appel de la patrie. <br />
              Le jour de la crise, ils sont comme les lions de la jungle. <br />
              Le cœur de notre orient demeure à jamais le Liban. <br />
              Que dieu le préserve jusqu'à la fin des temps. <br />
            </p>
            <p className="italic text-gray-800">
              Tous Pour la Patrie, pour la gloire et le drapeau. <br />
              Tous Pour la Patrie.
            </p>
            <p>
              Sa terre et sa mer sont les joyaux des deux orients. <br />
              Ses sources de bonté envahissent les pôles. <br />
              Son nom est sa gloire depuis le début des temps. <br />
              Son cèdre est sa fierté, son symbole éternel. <br />
            </p>
            <p className="italic text-gray-800">
              Tous Pour la Patrie, pour la gloire et le drapeau. <br />
              Tous Pour la Patrie.
            </p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="text-right flex flex-col text-2xl text-black">
            <p>
              كلنـا للوطـن للعـلى للعـلم
              <br /> ملئ عين الزّمن سـيفنا والقـلم
            </p>

            <p className="flex right-auto">
              <br /> قولنا والعمـل في سبيل الكمال
              <br /> سهلنا والجبـل منبت للرجـال
            </p>

            <p className="flex self-center">
              <br /> كلنا للوطن للعلى للعلم كلّنا للوطن
            </p>

            <p>
              <br /> شيخنـا والفتـى عنـد صـوت الوطن
              <br /> أسـد غـاب متى سـاورتنا الفــتن
            </p>

            <p className="flex right-auto">
              <br /> شــرقنـا قلبـه أبــداً لبـنان
              <br /> صانه ربه لمدى الأزمان
            </p>

            <p className="flex self-center">
              <br /> كلنا للوطن للعلى للعلم كلّنا للوطن
            </p>

            <p>
              <br /> بحـره بــرّه درّة الشرقين
              <br /> رِفـدُهّ بــرّهُ مالئ القطبين
            </p>

            <p className="flex right-auto">
              <br /> إسمـه عـزّه منذ كان الجدود
              <br /> مجــدُهُ أرزُهُ رمزُهُ للخلود
            </p>

            <p className="flex self-center">
              <br /> كلنا للوطن للعلى للعلم كلّنا للوطن
            </p>
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className="flex flex-col space-y-5 text-md text-black">
            <p>
              All of us! For the homeland, for the glory, for the flag! <br />
              Throughout the ages, was our sword and our word. <br />
              Our valley and our mountains are where Men are forged. <br />
              Our speech and deeds aspire for perfection. <br />
            </p>
            <p className="italic text-gray-800">
              All of us! For the homeland, for the glory, for the flag! <br />
              All of us! For the homeland! <br />
            </p>
            <p>
              Our elders and our youth, upon the nation’s call, <br />
              Jungle lions in times of turmoil. <br />
              The heart of our East, is forever Lebanon, <br />
              May God protect it throughout eternity. <br />
            </p>
            <p className="italic text-gray-800">
              All of us! For the homeland, for the glory, for the flag! <br />
              All of us! For the homeland! <br />
            </p>
            <p>
              Its sea and it land, are jewels of the two Easts. <br />
              Its kindness and generosity, roam from pole to pole. <br />
              Its name and its glory renowned from the time of ancestors. <br />
              Its glory, its cedars, its symbol of eternity. <br />
            </p>
            <p className="italic text-gray-800">
              All of us! For the homeland, for the glory, for the flag! <br />
              All of us! For the homeland! <br />
            </p>
          </div>
        </TabPanel>
      </Box>
    </>
  );
}
