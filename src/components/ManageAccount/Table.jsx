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
import { Icon } from '@iconify/react';

const AccountTable = ({items}) => {

  const doRemoveAccount = (id) => {
    // console.log(id)
  }

  return (
    <Table removeWrapper className="p-2">
      <TableHeader>
        <TableColumn className="text-start border-b pb-2">รายการที่</TableColumn>
        <TableColumn className="text-start border-b pb-2">บัญชีผู้ใช้งาน</TableColumn>
        <TableColumn className="text-start border-b pb-2">ชื่อจริง</TableColumn>
        <TableColumn className="text-start border-b pb-2">นามสกุล</TableColumn>
        <TableColumn className="text-start border-b pb-2">สถานที่</TableColumn>
        <TableColumn className="text-start border-b pb-2"></TableColumn>
      </TableHeader>
      <TableBody>
        {items.map((item) => (
          <TableRow key={item.key} className="border-b last:border-none trnastion-all hover:bg-slate-100/50">
            <TableCell>{ item.key.toString().padStart(8, '0') }</TableCell>
            <TableCell>{ item.username }</TableCell>
            <TableCell>{ item.firstname }</TableCell>
            <TableCell>{ item.lastname }</TableCell>
            <TableCell>{ item.location }</TableCell>
            <TableCell>
              <div className="flex flex-row gap-4">
                <a
                  href={`/user-management/${item.key}`}
                  className="cursor-pointer"
                >
                  <Icon icon="ri:edit-2-fill" width="24" height="24" />
                </a>
                <div
                  onClick={doRemoveAccount(item.key)}
                  className="cursor-pointer"
                >
                  <Icon icon="mdi:bin" width="24" height="24" />
                </div>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AccountTable;
