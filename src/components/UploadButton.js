// import React, { useState } from "react";
// import { Button, Input } from "@mui/material";

// const UploadButton = () => {
//   const [file, setFile] = useState(null);

//   const handleUpload = (event) => {
//     setFile(event.target.files[0]);
//   };

//   return (
//     <div>
//       <Input type="file" onChange={handleUpload} />
//       {file && <p>Uploaded: {file.name}</p>}
//     </div>
//   );
// };

// export default UploadButton;

// import { useState } from "react";
// import { Button } from "@mui/material";
// import UploadDocument from "./UploadDocument";

// export default function UploadButton() {
//   const [open, setOpen] = useState(false);
//   console.log("UploadButton is rendering");

//   return (
//     <>
//       <Button variant="contained" onClick={() => setOpen(true)}>Upload Document</Button>
//       <UploadDocument open={open} handleClose={() => setOpen(false)} />
//     </>
//   );
// }
import { useState } from "react";
import { Button } from "@mui/material";
import UploadDocument from "./UploadDocument";

export default function UploadButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Upload Button */}
      <Button
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed", 
          bottom: 20,   // Adjust distance from bottom
          right: 20,    // Adjust distance from right
          backgroundColor: "#2960ee", // Custom color
          color: "white",
          padding: "10px 20px",
          borderRadius: "50px",
          fontSize: "14px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Soft shadow
          "&:hover": {
            backgroundColor: "#003cb3", // Darker shade on hover
          }
        }}
      >
        Upload Document
      </Button>

      <UploadDocument open={open} handleClose={() => setOpen(false)} />
    </>
  );
}
