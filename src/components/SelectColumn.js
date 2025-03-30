// import React from "react";
// import { Box, TextField, Button } from "@mui/material";

// const SearchAndSelect = () => {
//   return (
//     <Box
//     >
//       {/* Search Box - Stays on the Left */}
//       <TextField
//         variant="outlined"
//         placeholder="Search..."
//         size="small"
//               sx={{
//                   marginRight:"645px",
//           minWidth: "250px",
//           backgroundColor: "#fff",
//           borderRadius: "8px",
//           "& .MuiOutlinedInput-root": {
//             "& fieldset": {
//               borderColor: "#ccc",
//             },
//             "&:hover fieldset": {
//               borderColor: "#3c8dfd",
//             },
//             "&.Mui-focused fieldset": {
//               borderColor: "#3c8dfd",
//             },
//           },
//         }}
//       />

//       {/* Select Column Button - Independent */}
//       <Button
//         variant="outlined"
//         sx={{
//           textTransform: "none",
//           borderRadius: "8px",
//             padding: "8px 16px",
//             marginRight: "5px",
//         }}
//       >
//         Select Column
//       </Button>
//     </Box>
//   );
// };

// export default SearchAndSelect;
import React, { useState } from "react";
import { Box, TextField, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Dropdown arrow icon

const SearchAndSelect = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      {/* Smaller Search Box
      <TextField
        variant="outlined"
        placeholder="Search Loan No."
        size="small"
        sx={{
          width: "180px", // Reduced width
          backgroundColor: "#fff",
          borderRadius: "6px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#ccc" },
            "&:hover fieldset": { borderColor: "#3c8dfd" },
            "&.Mui-focused fieldset": { borderColor: "#3c8dfd" },
          },
        }}
      /> */}

      {/* Smaller Select Column Button with Dropdown */}
      <Button
        variant="outlined"
        onClick={handleClick}
        sx={{
          textTransform: "none",
          borderRadius: "6px",
          color: "black",
          fontSize: "12px", // Smaller text
          display: "flex",
          alignItems: "center",
          padding: "5px 8px", // Reduced padding
          minWidth: "100px", // Reduced button width
          borderColor: "#ccc",
        }}
      >
        Select Column
        <ArrowDropDownIcon sx={{ fontSize: "16px", marginLeft: "3px" }} />
      </Button>

      {/* Dropdown Menu */}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Option 1</MenuItem>
        <MenuItem onClick={handleClose}>Option 2</MenuItem>
        <MenuItem onClick={handleClose}>Option 3</MenuItem>
      </Menu>
    </Box>
  );
};

export default SearchAndSelect;
