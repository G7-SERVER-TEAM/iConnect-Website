import React, { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
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

export default function TransactionTable() {
  const calculateDifferentTime = (start_time, end_time) => {
    const timeDifference = end_time.getTime() - start_time.getTime();
    return timeDifference / (1000 * 60 * 60);
  };

  const getTimDescription = (time) => {
    return {
      year: time.getFullYear(),
      month: time.getMonth() < 10 ? `0${time.getMonth() + 1}` : time.getMonth() + 1,
      day: time.getDate() < 10 ? `0${time.getDate()}` : time.getDate(),
      hour: time.getHours() < 10 ? `0${time.getHours()}` : time.getHours(),
      minute:
        time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes(),
      second:
        time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds(),
      millisecond: time.getMilliseconds(),
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const convertCurrentTimeFormat = (start_time, end_time) => {
    const currentTime = calculateDifferentTime(start_time, end_time);
    return `${Math.floor(currentTime)} ชั่วโมง ${Math.floor(
      (currentTime - Math.floor(currentTime)) * 60
    )} นาที`;
  };

  const access_token = localStorage.getItem("token");

  const [transactions, setTransaction] = useState([]);

  const loadTotalCompleteTransaction = async (access_token) => {
    const ICONNECT_API = `http://192.168.1.5:8082/transaction/allcomplete`;
    try {
      const information = {
        status: "FINISH",
      };
      const result = await fetch(ICONNECT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
        body: JSON.stringify(information),
      });
      if (result.ok) {
        const responseBody = await result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    const fetchAllTransactionComplete = async () => {
      const result = await loadTotalCompleteTransaction(access_token);
      const res = JSON.parse(result);
      let completeTransactions = res.result;
      if (
        typeof completeTransactions === "object" &&
        !Array.isArray(completeTransactions)
      ) {
        completeTransactions = Object.entries(completeTransactions).map(
          ([key, value]) => ({
            key,
            value,
          })
        );
      }
      let allCompleteTransactions = [];
      const keys = Object.keys(completeTransactions);
      const updateKeys = keys.map((key) => parseInt(key) + 1);
      const values = Object.values(completeTransactions);

      let count = 0;

      values.forEach((val) => {
        const originalStartTime = getTimDescription(new Date(val.start_time));
        const originalEndTime = getTimDescription(new Date(val.end_time));
        const newStartTime = `${originalStartTime.day}-${originalStartTime.month}-${originalStartTime.year} ${originalStartTime.hour}:${originalStartTime.minute}:${originalStartTime.second}`;
        const newEndTime = `${originalEndTime.day}-${originalEndTime.month}-${originalEndTime.year} ${originalEndTime.hour}:${originalEndTime.minute}:${originalEndTime.second}`;
        const totalUsageTime = convertCurrentTimeFormat(
          new Date(val.start_time),
          new Date(val.end_time)
        );
        const transactionID = val.transaction_id;
        const price = val.price;
        const licensePlate = val.license_plate;

        allCompleteTransactions.push({
          key: count,
          no: transactionID,
          license_plate_id: licensePlate,
          start: newStartTime,
          end: newEndTime,
          time: totalUsageTime,
          price: `${price} บาท`,
        });
        count++;
      });
      setTransaction(allCompleteTransactions);
    };

    fetchAllTransactionComplete();
  }, [access_token, convertCurrentTimeFormat, transactions]);

  return (
    <Table className="col-span-4">
      <TableHeader className="flex justify-start">
        {columns.map((column) => (
          <TableColumn
            className="font-medium text-[#404B69] lg:text-lg text-sm text-start"
            key={column.key}
          >
            {column.label}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {transactions.map((row) => (
          <TableRow
            key={row.key}
            className="font-normal text-[#323232] bg-white h-[2rem] rounded-full lg:text-base text-sm"
          >
            {(columnKey) => (
              <TableCell>{getKeyValue(row, columnKey)}</TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
