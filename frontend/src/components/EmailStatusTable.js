import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/Table';

export function EmailStatusTable() {
  return (
    <div className="mt-6">
      <h2 className="mb-4 text-xl font-semibold">Email Status</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Delivery Status</TableHead>
            <TableHead>Opened</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>ABC Corp</TableCell>
            <TableCell>contact@abccorp.com</TableCell>
            <TableCell>Sent</TableCell>
            <TableCell>Delivered</TableCell>
            <TableCell>Yes</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>XYZ Ltd</TableCell>
            <TableCell>info@xyzltd.co.uk</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>N/A</TableCell>
            <TableCell>N/A</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>DEF Inc</TableCell>
            <TableCell>hello@definc.com</TableCell>
            <TableCell>Failed</TableCell>
            <TableCell>Bounced</TableCell>
            <TableCell>No</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

