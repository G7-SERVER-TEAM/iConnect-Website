"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

const PriceConfigTable = ({items}) => {

  return (
    <Table removeWrapper className="p-2">
      <TableHeader>
        <TableColumn className="text-center border-b pb-2">ช่วงเวลา</TableColumn>
        <TableColumn className="text-center border-b pb-2">ราคาเริ่มต้น</TableColumn>
        <TableColumn className="text-center border-b pb-2">อัตราราคาต่อชั่วโมง</TableColumn>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.key} className="border-b last:border-none trnastion-all hover:bg-slate-100/50">
            <TableCell className="text-center">{ item.time }</TableCell>
            <TableCell className="text-center">{ item.start_price }</TableCell>
            <TableCell className="text-center">{ item.price_rate }</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default PriceConfigTable;
