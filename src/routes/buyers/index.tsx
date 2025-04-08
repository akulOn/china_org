import {
  Box,
  Collapse,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export const Route = createFileRoute("/buyers/")({
  component: RouteComponent,
});

interface Invoice {
  invoiceId: number;
  date: string; // ISO format, npr. "2024-12-20"
  amount: number;
}

interface Customer {
  customerId: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  registrationDate: string; // ISO format, npr. "2023-06-15"
  phoneNumber: string;
  invoices: Invoice[];
}

const rows: Customer[] = [
  {
    customerId: 1,
    firstName: "Marko",
    lastName: "Petrović",
    email: "marko.petrovic@gmail.com",
    city: "Belgrade",
    registrationDate: "2023-06-15",
    phoneNumber: "+381641234567",
    invoices: [
      { invoiceId: 101, date: "2023-07-01", amount: 7520.0 },
      { invoiceId: 122, date: "2023-09-15", amount: 8340.75 },
      { invoiceId: 145, date: "2023-12-02", amount: 9100.0 },
      { invoiceId: 166, date: "2024-03-20", amount: 9700.0 },
      { invoiceId: 188, date: "2024-12-20", amount: 8570.0 },
    ],
  },
  {
    customerId: 2,
    firstName: "Ana",
    lastName: "Jovanović",
    email: "ana.jovanovic@yahoo.com",
    city: "Novi Sad",
    registrationDate: "2024-02-10",
    phoneNumber: "+381638765432",
    invoices: [
      { invoiceId: 201, date: "2024-04-05", amount: 6540.0 },
      { invoiceId: 223, date: "2024-08-18", amount: 7230.0 },
      { invoiceId: 244, date: "2025-03-15", amount: 6080.0 },
    ],
  },
  {
    customerId: 3,
    firstName: "Luka",
    lastName: "Ilić",
    email: "luka.ilic@hotmail.com",
    city: "Niš",
    registrationDate: "2022-11-03",
    phoneNumber: "+381601112223",
    invoices: [
      { invoiceId: 301, date: "2022-12-10", amount: 5220.0 },
      { invoiceId: 325, date: "2023-03-28", amount: 7700.0 },
      { invoiceId: 348, date: "2023-06-30", amount: 8450.99 },
      { invoiceId: 370, date: "2023-09-12", amount: 9100.0 },
      { invoiceId: 392, date: "2023-12-05", amount: 6840.0 },
      { invoiceId: 414, date: "2024-05-21", amount: 9580.0 },
      { invoiceId: 435, date: "2025-01-28", amount: 9850.0 },
    ],
  },
];

function Row(props: { row: Customer }) {
  const { row } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.firstName}</TableCell>
        <TableCell>{row.lastName}</TableCell>
        <TableCell>{row.email}</TableCell>
        <TableCell>{row.city}</TableCell>
        <TableCell>{row.registrationDate}</TableCell>
        <TableCell>{row.phoneNumber}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Invoices
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Invoice Id</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell align="right">Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.invoices.map((invoice) => (
                    <TableRow key={invoice.invoiceId}>
                      <TableCell>{invoice.invoiceId}</TableCell>
                      <TableCell>{invoice.date}</TableCell>
                      <TableCell align="right">{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function RouteComponent() {
  return (
    <TableContainer className="px-10" component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Registration Date</TableCell>
            <TableCell>Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.customerId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
