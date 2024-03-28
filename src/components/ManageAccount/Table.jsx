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
import { Icon } from "@iconify/react";
import Link from "next/link";

const ManageAccountTable = ({ items, actionRemove }) => {
  const handleRemove = (key) => {
    actionRemove(key);
  };

  console.log(items);

  return (
    <>
      <Table removeWrapper className="p-2 hidden lg:block">
        <TableHeader>
          <TableColumn className="text-start border-b pb-2">
            รายการที่
          </TableColumn>
          <TableColumn className="text-start border-b pb-2">
            บัญชีผู้ใช้งาน
          </TableColumn>
          <TableColumn className="text-start border-b pb-2">
            ชื่อจริง
          </TableColumn>
          <TableColumn className="text-start border-b pb-2">
            นามสกุล
          </TableColumn>
          <TableColumn className="text-start border-b pb-2">
            สถานที่
          </TableColumn>
          <TableColumn className="text-start border-b pb-2"></TableColumn>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow
              key={item.key}
              className="border-b last:border-none transition-all hover:bg-slate-100/50"
            >
              <TableCell>{item.key.padStart(8, "0")}</TableCell>
              <TableCell>{item.username}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.surname}</TableCell>
              <TableCell>{item.area_name}</TableCell>
              <TableCell>
                <div className="flex flex-row gap-4">
                  <a
                    href={`/user-management/${item.key}`}
                    className="cursor-pointer"
                  >
                    <Icon icon="ri:edit-2-fill" width="24" height="24" />
                  </a>
                  {/* <Link
                    href={{
                      pathname: "user-management",
                      query: { id: item.key },
                    }}
                  >
                  </Link> */}
                  <div
                    onClick={() => handleRemove(item.key)}
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

      <div className="w-full flex lg:hidden flex-col divide-y gap-4 px-4 pb-10 ">
        {items.map((item) => (
          <div
            key={item.key}
            className="flex flex-col sm:flex-row justify-between items-center first:pt-0 pt-4 gap-4 "
          >
            <div className="w-full flex flex-col text-sm">
              <div className="flex flex-col sm:flex-row">
                <div className="w-32 font-semibold">รายการที่</div>
                <div>{item.key}</div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-32 font-semibold">บัญชีผู้ใช้งาน</div>
                <div>{item.username}</div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-32 font-semibold">ชื่อผู้ใช้</div>
                <div>{`${item.name} ${item.surname}`}</div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <div className="w-32 font-semibold">สถานที่</div>
                <div>{item.area_name}</div>
              </div>
            </div>
            <div className="w-1/2 sm:w-max mx-auto sm:mx-0 flex flex-row justify-between sm:justify-end gap-4">
              <a
                href={`/user-management/${item.key}`}
                className="cursor-pointer"
              >
                <Icon icon="ri:edit-2-fill" width="24" height="24" />
              </a>
              <div
                onClick={() => handleRemove(item.key)}
                className="cursor-pointer"
              >
                <Icon icon="mdi:bin" width="24" height="24" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ManageAccountTable;
