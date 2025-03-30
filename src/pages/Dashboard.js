import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { AppBar, Toolbar, Typography, Box, Button, TextField } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle"; // Profile Icon
import FilterAltIcon from "@mui/icons-material/FilterAlt"; // Correct Filter Icon
import Sidebar from "../components/Sidebar"; 
import PortfolioTabs from "../components/PortfolioTabs";
import SelectColumnButton from "../components/SelectColumn";
import UploadButton from "../components/UploadButton"; 

const columns = [
  { field: "loanNo", headerName: "Loan No. ", width: 150, sortable: true, disableColumnMenu: true,  hideSortIcons: false  },
  { field: "loanType", headerName: "Loan Type ", width: 150, sortable: true, disableColumnMenu: true,  hideSortIcons: false },
  { field: "borrower", headerName: "Borrower ", width: 200, sortable: true, disableColumnMenu: true,  hideSortIcons: false  },
  { field: "borrowerAddress", headerName: "Borrower Address ", width: 250, sortable: true, disableColumnMenu: true,  hideSortIcons: false  },
  { field: "sanctionAmount", headerName: "Sanction Amount ", width: 180, sortable: true, disableColumnMenu: true,  hideSortIcons: false  },
  { field: "region", headerName: "Region ", width: 120, sortable: true, disableColumnMenu: true,  hideSortIcons: false },
  { field: "status", headerName: "Status ", width: 120, sortable: true, disableColumnMenu: true,  hideSortIcons: false  },
];

const rows = [
  { id: 1, loanNo: "L2812347", loanType: "Home Loan", borrower: "Vedika Sachar", borrowerAddress: "Mumbai, India", sanctionAmount: "₹1,934,068", region: "North", status: "Active" },
  { id: 2, loanNo: "L2812348", loanType: "Car Loan", borrower: "Hrishta Agrawal", borrowerAddress: "Pune, India", sanctionAmount: "₹1,842,143", region: "South", status: "Pending" },
  { id: 3, loanNo: "L2812349", loanType: "Personal Loan", borrower: "Amit Sharma", borrowerAddress: "Hyderabad, India", sanctionAmount: "₹2,150,500", region: "West", status: "Closed" },
  { id: 4, loanNo: "L2812350", loanType: "Education Loan", borrower: "Priya Verma", borrowerAddress: "Kolkata, India", sanctionAmount: "₹3,250,000", region: "East", status: "Active" },
  { id: 5, loanNo: "L2812351", loanType: "Business Loan", borrower: "Suresh Reddy", borrowerAddress: "Bangalore, India", sanctionAmount: "₹1,500,000", region: "South", status: "Pending" },
];

const LoanDashboard = () => {
  return (
    
    <Box>
      {/* Fixed Header */}
      <AppBar position="fixed" sx={{ zIndex: 1201, backgroundColor: "#FFFFFF", color: "#000000", boxShadow: "none", borderBottom: "1px solid #ccc" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src="/resollect logo.png" alt="Resollect Logo" style={{ height: "40px" }} />
        </Box>

        <div> 
      <UploadButton />  {/* Now the button should be inside Dashboard */}
        </div>

          {/* Profile Section with Icon */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AccountCircleIcon sx={{ fontSize: 50,color: "#2960EE" }} /> 
            <Box>
              <Typography variant="body1"><strong>Tushar</strong></Typography>
              <Typography variant="body2">tushar@resollect.com</Typography>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
     
      {/* Main Layout (Scrolls naturally) */}
      <Box sx={{ display: "flex", flexDirection: "row", marginTop: "72px", padding: 3 }}>
        {/* Sidebar (Scrollable) */}
        <Box sx={{ width: "250px", marginRight: "20px", marginTop: "100px" }}>
          <Sidebar />
        </Box>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}>
          <h2>Portfolio</h2>
          <PortfolioTabs />
          
          {/* Search Box and Buttons Row */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 2 }}>
            {/* Search Loan No. Box (Aligned to Left) */}
            <TextField
              variant="outlined"
              placeholder="Search Loan No."
              size="small"
              sx={{
                width: "200px",
                backgroundColor: "#fff",
                borderRadius: "6px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#ccc" },
                  "&:hover fieldset": { borderColor: "#3c8dfd" },
                  "&.Mui-focused fieldset": { borderColor: "#3c8dfd" },
                },
              }}
            />

            {/* Buttons (Aligned to Right) */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <SelectColumnButton />
              
              {/* More Filters Button (Styled Like Image) */}
              <Button 
                variant="contained"
                sx={{
                  textTransform: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  padding: "6px 12px",
                  backgroundColor: "#2960EE",
                  color: "white",
                  "&:hover": { backgroundColor: "#1A48CC" },
                }}
              >
                <FilterAltIcon sx={{ fontSize: 18, marginRight: "2px" }} />
                More Filters
              </Button>
            </Box>
          </Box>
    

      
        

<Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 1.5, padding: 1.5, backgroundColor: "#f5f5f5", borderRadius: "8px" }}>
  
  {/* Left Side - Buttons */}
  <Box sx={{ display: "flex", gap: 2 }}>
    <Button variant="contained" sx={{ backgroundColor:"#2960EE !important",color: "#FFFFFF !important" ,  cursor: "not-allowed", opacity: 0.5 , fontSize: "12px", padding: "4px 8px", borderRadius: "12px"}} disabled>
      Generate Pre Sarfaesi Notice (0)
    </Button>
    <Button variant="contained" sx={{ backgroundColor: "#2960EE !important", color: "#FFFFFF !important", cursor: "not-allowed", opacity: 0.5 , fontSize: "12px", padding: "4px 8px", borderRadius: "12px"}} disabled>
      Declare NPA (0)
    </Button>
  </Box>

  {/* Right Side - Additional Element */}
  <Typography variant="body2" color="textSecondary">
    0 loans selected
  </Typography>
</Box>


          {/* Data Table with Checkbox Selection & Horizontal Scroll */}
          <Box sx={{ overflowX: "auto", width: "100%", paddingBottom: "10px" }}> {/* Enables Horizontal Scrolling */}
            <Box sx={{ minWidth: "900px" }}> {/* Ensures horizontal scroll if necessary */}
              <DataGrid 
                rows={rows} 
                columns={columns} 
                pageSize={5} 
                rowsPerPageOptions={[5, 10, 20]} 
                checkboxSelection // Enables checkboxes in front of each row
                disableColumnMenu // Removes the three dots from column headers
                hideFooter
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoanDashboard;
