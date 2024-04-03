"use client";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import ReactDatePicker from "@/components/ReactDatePicker";
import ResultContainer from "@/components/PriceConfig/ResultContainer";
import Table from "@/components/PriceConfig/Table";
import isAuth from "@/components/isAuth";
import { useEffect, useState } from "react";

const PriceConfig = () => {
  const access_token = localStorage.getItem("token");
  const area_id = localStorage.getItem("area_id");
  const [priceBefore, setPriceBefore] = useState([]);
  const [priceAfter, setPriceAfter] = useState([]);
  const [areaName, setAreaName] = useState();
  let price_id =
    localStorage.getItem("price_id") == null
      ? ""
      : localStorage.getItem("price_id");
  const getAreaName = async (access_token, area_id) => {
    const ICONNECT_API = `http://localhost:8082/area/id/${area_id}`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (result.ok) {
        const responseBody = result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };
  const loadPriceConfiguration = async (access_token, id) => {
    const ICONNECT_API = `http://localhost:8082/area/price/${id}`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
      });
      if (result.ok) {
        const responseBody = result.text();
        return responseBody;
      } else {
        throw new Error(`Error: ${result.status} - ${result.body}`);
      }
    } catch (err) {
      throw err;
    }
  };

  const handleDatePickerChangeValue = (date) => {
    const datePickUp = getTimDescription(date);
  };

  useEffect(() => {
    const fetchPriceConfiguration = () => {
      try {
        const result = loadPriceConfiguration(access_token, price_id);
        result.then((result) => {
          const res = JSON.parse(result);
          let before = [];
          let after = [];
          const arrBefore = res.result.before.configuration;
          const arrAfter = res.result.after.configuration;
          for (let i = 0; i < arrBefore.length; i++) {
            before.push({
              key: i,
              time: `${arrBefore[i].start_hour}-${arrBefore[i].end_hour} ชั่วโมง`,
              price_rate: `${arrBefore[i].rate} บาท`,
            });
          }
          for (let i = 0; i < arrAfter.length; i++) {
            after.push({
              key: i,
              time: `${arrAfter[i].start_hour}-${arrAfter[i].end_hour} ชั่วโมง`,
              price_rate: `${arrAfter[i].rate} บาท`,
            });
          }
          setPriceBefore(before);
          setPriceAfter(after);
        });
      } catch (err) {
        console.error(err);
      }
    };
    const fetchAreaName = () => {
      try {
        const result = getAreaName(access_token, area_id);
        result.then((result) => {
          setAreaName(JSON.parse(result).result.area_name);
          const price_id = JSON.parse(result).result.price_id;
          localStorage.setItem("price_id", price_id);
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchAreaName();
    fetchPriceConfiguration();
  }, [access_token, area_id, areaName, price_id]);

  return (
    <Container>
      <div className="w-full flex flex-col items-start gap-4 pt-16">
        <PageTitle>กำหนดราคาค่าจอดรถ</PageTitle>

        <div className="w-full flex flex-col bg-white rounded-xl shadow p-4 gap-4">
          <div className="flex flex-row justify-end items-center gap-2">
            <div className="flex flex-row items-center gap-2">
              <select
                disabled
                defaultValue={areaName}
                className="px-3 border border-gray-400 rounded-full disabled:bg-gray-200 text-gray-950"
              >
                <option value="">{areaName}</option>
              </select>
            </div>

            <a
              href="/price-config/edit"
              aria-labelledby="editPriceLabel"
              aria-label="editPriceConfiguration"
              className="text-center cursor-pointer bg-[#00818A] text-white px-6 py-1 rounded-full whitespace-nowrap"
            >
              แก้ไขราคา
            </a>
          </div>

          <ResultContainer />
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4">
          <div className="w-full lg:w-1/2 flex flex-col bg-white rounded-xl shadow p-4 gap-4">
            <div className="text-xl">ราคาก่อนหน้า</div>
            <Table items={priceBefore} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col bg-white rounded-xl shadow p-4 gap-4">
            <div className="text-xl">ราคาหลังการปรับปรุง</div>
            <Table items={priceAfter} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default isAuth(PriceConfig);
