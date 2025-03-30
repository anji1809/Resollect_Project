// import React from "react";
// import { Drawer, List, ListItem, ListItemText } from "@mui/material";

// const Sidebar = () => {
//   const menuItems = ["Dashboard", "Portfolio", "Notifications", "Notices", "Auction", "Data Upload", "Control Panel", "User Management","Permissions"];

//   return (
//     <Drawer variant="permanent">
//       <List sx={{ width: "200px", marginRight: "20px",marginTop: "72px" }}>
//         {menuItems.map((text) => (
//           <ListItem sx={{ marginLeft: "10px",borderRadius:"10px",marginBottom:"10px",transition: "background-color 0.3s",
//             "&:hover": { backgroundColor: "#3c8dfd", color: "#ffffff" } }} button key={text}>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List>
//     </Drawer>
//   );
// };

// export default Sidebar;

import React from "react";
import { Drawer, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DescriptionIcon from "@mui/icons-material/Description";
import GavelIcon from "@mui/icons-material/Gavel";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SettingsIcon from "@mui/icons-material/Settings";
import PeopleIcon from "@mui/icons-material/People";
import LockIcon from "@mui/icons-material/Lock";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Portfolio", icon: <AccountBalanceIcon /> },
  { text: "Notifications", icon: <NotificationsIcon /> },
  { text: "Notices", icon: <DescriptionIcon /> },
  { text: "Auction", icon: <GavelIcon /> },
  { text: "Data Upload", icon: <CloudUploadIcon /> },
  { text: "Control Panel", icon: <SettingsIcon /> },
  { text: "User Management", icon: <PeopleIcon /> },
  { text: "Permissions", icon: <LockIcon /> },
];

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List sx={{ width: "200px", marginRight: "20px", marginTop: "72px" }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            sx={{
              marginLeft: "10px",
              borderRadius: "10px",
              marginBottom: "10px",
              transition: "background-color 0.3s",
              "&:hover": { backgroundColor: "#3c8dfd", color: "#ffffff" },
            }}
            button
          >
            <ListItemIcon sx={{ minWidth: "35px", color: "inherit" }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
