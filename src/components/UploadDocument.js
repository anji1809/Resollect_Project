// import { Modal, Box, Button, TextField, Select, MenuItem, Typography } from "@mui/material";

// export default function UploadDocument({ open, handleClose }) {
//   return (
//     <Modal open={open} onClose={handleClose} aria-labelledby="upload-document-modal">
//       <Box sx={{
//         position: "absolute",
//         top: "50%", left: "50%",
//         transform: "translate(-50%, -50%)",
//         width: 400, bgcolor: "white",
//         boxShadow: 24, p: 4, borderRadius: "8px"
//       }}>
//         <Typography variant="h6">Upload Document</Typography>

//         <TextField fullWidth select label="Document Name" sx={{ my: 1 }}>
//           <MenuItem value="doc1">Document 1</MenuItem>
//           <MenuItem value="doc2">Document 2</MenuItem>
//         </TextField>

//         <TextField fullWidth select label="Document Type" sx={{ my: 1 }}>
//           <MenuItem value="pdf">PDF</MenuItem>
//           <MenuItem value="image">Image</MenuItem>
//         </TextField>

//         <TextField fullWidth label="Document Remarks" sx={{ my: 1 }} />

//         <Button variant="contained" component="label" sx={{ my: 1, width: "100%" }}>
//           Choose File
//           <input type="file" hidden />
//         </Button>

//         <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
//           Submit
//         </Button>
//       </Box>
//     </Modal>
//   );
// }

// import { Modal, Box, Button, Typography, TextField, Select, MenuItem } from "@mui/material";

// export default function UploadDocument({ open, handleClose }) {
//   return (
//     <Modal open={open} onClose={handleClose} aria-labelledby="upload-document-modal">
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: 400,
//           bgcolor: "white",
//           boxShadow: 24,
//           p: 4,
//           borderRadius: "8px",
//         }}
//       >
//         <Typography variant="h6" align="center">Upload Document</Typography>

//         <TextField fullWidth select label="Document Name" sx={{ my: 1 }}>
//           <MenuItem value="doc1">Document 1</MenuItem>
//           <MenuItem value="doc2">Document 2</MenuItem>
//         </TextField>

//         <TextField fullWidth select label="Document Type" sx={{ my: 1 }}>
//           <MenuItem value="pdf">PDF</MenuItem>
//           <MenuItem value="image">Image</MenuItem>
//         </TextField>

//         <TextField fullWidth label="Document Remarks" sx={{ my: 1 }} />

//         <Button variant="contained" component="label" fullWidth sx={{ my: 1 }}>
//           Choose File
//           <input type="file" hidden />
//         </Button>

//         {/* Submit Button Centered & Smaller */}
//         <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
//           <Button variant="contained" color="primary" size="small">
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     </Modal>
//   );
// }
import { Modal, Box, Button, Typography, TextField, Select, MenuItem } from "@mui/material";

export default function UploadDocument({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="upload-document-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: 0, // Align to right
          left: "auto",
          transform: "translateY(-50%)", // Keep centered vertically
          width: "25vw", // Adjust width
          minWidth: "350px", // Prevent too small modal
          height: "100%",
          bgcolor: "white",
          boxShadow: 24,
          p: "2rem 1rem", // Compact padding
          borderRadius: "8px",
        }}
      >
        {/* Title */}
        <Typography variant="h6" align="left" sx={{ fontWeight: "bold", mb: 1 }}>
          Upload Document
        </Typography>

        {/* Document Name */}
        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>Document Name</Typography>
        <Select fullWidth defaultValue="" sx={{ height: "40px", mb: 0.5 }}>
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="doc1">Document 1</MenuItem>
          <MenuItem value="doc2">Document 2</MenuItem>
        </Select>

        {/* Document Type */}
        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>Document Type</Typography>
        <Select fullWidth defaultValue="" sx={{ height: "40px", mb: 0.5 }}>
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="pdf">PDF</MenuItem>
          <MenuItem value="image">Image</MenuItem>
        </Select>

        {/* Document Remarks */}
        <Typography sx={{ fontSize: "14px", mb: 0.5 }}>Document Remarks</Typography>
        <TextField fullWidth placeholder="Type" sx={{ height: "40px", mb: 3 }} />

        {/* File Upload */}
        <Typography sx={{ fontSize: "14px", mb: 0.5 }}></Typography>
        <Button variant="contained" component="label" fullWidth sx={{ mb: 3 }}>
          Choose File
          <input type="file" hidden />
        </Button>

        {/* Submit Button - Aligned Right */}
        <Box sx={{ display: "center", justifyContent: "center" }}>
          <Button variant="contained" color="primary">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
