import React, { useState } from "react";
import { Button, Collapse, TextField } from "@mui/material";
import UploadButton from "./UploadButton";

const Filters = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(!open)}>More Filters</Button>
      <Collapse in={open}>
        <TextField label="Search Loan Number" variant="outlined" fullWidth />
        <UploadButton />
      </Collapse>
    </div>
  );
};

export default Filters;
