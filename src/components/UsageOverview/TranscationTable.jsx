import React from 'react'
import {
    Table, 
    TableHeader, 
    TableColumn, 
    TableBody, 
    TableRow, 
    TableCell, 
    getKeyValue
} from "@nextui-org/react";

const rows = [
    {
        key: "1",
        no: "00000001",
        license_plate_id: "1กก1111",
        start: "21-10-2023 11:00:00",
        end: "21-10-2023  13:30:00",
        time: "2 ชั่วโมง 30 นาที",
        price: "70 บาท",
    },
    {
        key: "2",
        no: "00000002",
        license_plate_id: "2กก1112",
        start: "21-10-2023 12:00:00",
        end: "21-10-2023  14:30:00",
        time: "2 ชั่วโมง 30 นาที",
        price: "70 บาท",
    },
    {
        key: "3",
        no: "00000003",
        license_plate_id: "3กก1113",
        start: "21-10-2023 10:30:00",
        end: "21-10-2023  13:40:00",
        time: "3 ชั่วโมง 10 นาที",
        price: "105 บาท",
    },
];

const columns = [
    {
        key: "no",
        label: "รายการที่",
      },
      {
        key: "license_plate_id",
        label: "หมายเลขทะเบียน",
      },
      {
        key: "start",
        label: "เวลาเข้า",
      },
      {
        key: "end",
        label: "เวลาออก",
      },
      {
        key: "time",
        label: "เวลาที่จอด",
      },
      {
        key: "price",
        label: "ค่าบริการ",
      },
      
];

export default function TranscationTable() {
  return (
    <Table className='col-span-4'>
      <TableHeader className="flex justify-start">
        {columns.map((column) =>
          <TableColumn className="font-medium text-[#404B69] lg:text-lg text-sm text-start" key={column.key}>{column.label}</TableColumn>
        )}
      </TableHeader>
      <TableBody>
        {rows.map((row) =>
          <TableRow key={row.key} className="font-normal text-[#323232] bg-white h-[2rem] rounded-full lg:text-base text-sm">
            {(columnKey) => <TableCell>{getKeyValue(row, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

