
import React from "react";
import { DataGrid } from "@mui/x-data-grid";

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
const PortfolioTable = () => {
  return <DataGrid rows={rows} columns={columns} autoHeight />;
};


export default PortfolioTable;
