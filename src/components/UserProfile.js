// import React from "react";

// const UserProfile = () => {
//   return (
//     <div style={{ textAlign: "right" }}>
//       <p><strong>Tushar </strong></p>
//       <p>tushar@resollect.com</p>
//     </div>
//   );
// };

// export default UserProfile;

import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

const UserProfile = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 1 }}>
      {/* Profile Icon */}
      <Avatar sx={{ bgcolor: "#3c8dfd", width: 100, height: 100}}>
        T {/* Initial letter of the name */}
      </Avatar>

      {/* User Information */}
      <Box sx={{ textAlign: "right" }}>
        <Typography variant="body1" sx={{ fontWeight: "bold" }}>
          Tushar
        </Typography>
        <Typography variant="body2" sx={{ color: "gray" }}>
          tushar@resollect.com
        </Typography>
      </Box>
    </Box>
  );
};

export default UserProfile;
