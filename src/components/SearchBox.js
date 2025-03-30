import React from "react";
import { Box, TextField } from "@mui/material";

const SearchBox = () => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <TextField
        variant="outlined"
        placeholder="Search..."
        size="small"
        fullWidth
        sx={{
          maxWidth: "250px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#ccc",
            },
            "&:hover fieldset": {
              borderColor: "#3c8dfd",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3c8dfd",
            },
          },
        }}
      />
    </Box>
  );
};

export default SearchBox;