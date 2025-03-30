// import React, { useState } from "react";
// import { Box, Button } from "@mui/material";

// const PortfolioTabs = () => {
//   const [selectedFilter, setSelectedFilter] = useState("All");

//   const filters = ["All", "Pre Sarfaesi", "NPA", "13(3) Responses", "Symbolic Possession", "DM Order","Physical Possessions", "Auctions"];

//   return (
//     <Box sx={{ marginBottom: 2 }}>
//       {/* Portfolio Header */}

//       {/* Filter Buttons */}
//       <Box sx={{ display: "flex",gap:1, marginBottom: 2 }}>
//         {filters.map((filter) => (
//           <Button
//             key={filter}
//             onClick={() => setSelectedFilter(filter)}
//             sx={{
//               textTransform: "none",
//               fontSize: "12px",
//               // fontWeight: "bold",
//               color: selectedFilter === filter ? "#fff" : "#000",
//               backgroundColor: selectedFilter === filter ? "#2960ee" : "transparent",
//               borderRadius: "8px",
//               padding: "8px 16px",
//               "&:hover": { backgroundColor: "#2960ee" },
//             }}
//           >
//             {filter}
//           </Button>
//         ))}
//       </Box>

//       {/* Dynamic Content */}
//     </Box>
//   );
// };

// export default PortfolioTabs;
import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const PortfolioTabs = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filters = [
    "All", "Pre Sarfaesi", "NPA", "13(3) Responses", 
    "Symbolic Possession", "DM Order", "Physical Possessions", "Auctions"
  ];

  return (
    <Box sx={{ marginBottom: 2, display: "flex", gap: 1 }}>
      {filters.map((filter) => (
        <Box
          key={filter}
          sx={{
            display: "inline-flex", // Keeps box as small as possible
            border: "2px solid #ccc",
            borderRadius: "8px",
            backgroundColor: selectedFilter === filter ? "#2960ee" : "#f9f9f9",
            transition: "0.3s",
            "&:hover": { backgroundColor: "#2960ee", color: "#fff" },
            padding: "2px", // Reduced padding for smaller size
          }}
        >
          <Button
            onClick={() => setSelectedFilter(filter)}
            sx={{
              textTransform: "none",
              fontSize: "12px",
              color: selectedFilter === filter ? "#fff" : "#000",
              padding: "4px 10px", // Reduced button padding
              minWidth: "auto", // Prevents unnecessary button expansion
            }}
          >
            {filter}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default PortfolioTabs;
