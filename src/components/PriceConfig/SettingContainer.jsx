"use client";

import React, { useEffect, useState } from "react";
import ConfigCard from "@/components/PriceConfig/ConfigCard";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const SettingContainer = ({ title }) => {
  const router = useRouter();
  const access_token = localStorage.getItem("token");
  const price_id = localStorage.getItem("price_id");
  const [settings, setSettings] = useState([]);

  const addSettingCard = () => {
    const prevData = settings[settings.length - 1];

    const newSetting = {
      start_hour: prevData.end_hour,
      end_hour: parseInt(prevData.end_hour) + 1,
      rate: prevData.rate,
    };

    // Update settings array with the new setting
    setSettings([...settings, newSetting]);
  };
  const removeSettingCard = (itemIndex) => {
    setSettings((prevSettings) =>
      prevSettings.filter((_, index) => index !== itemIndex)
    );
  };

  const updateSettingCardValue = (itemIndex, newValue) => {
    let prevSettings = settings;
    if (itemIndex == 0) {
      const newFirstIndex = {
        ...prevSettings[itemIndex],
        end_hour: newValue,
      }
      prevSettings[itemIndex] = newFirstIndex;
      prevSettings = [prevSettings[itemIndex]];
    }
    else {
      for (let i = 0; i < prevSettings.length; i++) {
        if (i == itemIndex) {
          prevSettings[i] = {
            ...prevSettings[i],
            end_hour: newValue,
          };
        }
      }
    }
    setSettings(prevSettings);
  };

  const updateEndPriceCardValue = (itemIndex, newValue) => {
    let prevSettings = settings;
    for (let i = 0; i < prevSettings.length; i++) {
      if (i == itemIndex) {
        prevSettings[i] = {
          ...prevSettings[i],
          rate: newValue,
        };
      }
    }
    setSettings(prevSettings);
  };

  const doSubmit = () => {
    const updatePriceConfiguration = async (access_token, price_id) => {
      const ICONNECT_API = `http://10.4.13.158:8082/area/price/update/${price_id}`;
      const information = {
        start_time: new Date(),
        configuration: settings,
      };
      try {
        const result = await fetch(ICONNECT_API, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
          body: JSON.stringify(information),
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
    updatePriceConfiguration(access_token, price_id).then((result) => {
      const res = JSON.parse(result);
      console.log(res);
      router.replace("/price-config");
    });
  };

  const loadPriceConfiguration = async (access_token, price_id) => {
    const ICONNECT_API = `http://10.4.13.158:8082/area/price/${price_id}`;
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

  useEffect(() => {
    const fetchPriceConfiguration = () => {
      try {
        const result = loadPriceConfiguration(access_token, price_id);
        result.then((result) => {
          const res = JSON.parse(result);
          setSettings(res.result.after.configuration);
        });
      } catch (err) {
        console.error(err);
      }
    };
    fetchPriceConfiguration();
  }, [access_token, price_id]);

  return (
    <div className="w-full flex flex-col bg-white rounded-xl shadow p-4 gap-6">
      <div className="flex flex-col justify-center items-start">
        <div className="text-xl text-gray-600 font-bold">{title}</div>
        <div>{settings.length} การตั้งค่า</div>
      </div>

      <div className="w-full flex-col">
        {settings.map((item, index) => {
          return (
            <ConfigCard
              key={index}
              index={index}
              start_hour={item.start_hour}
              end_hour={item.end_hour}
              price={item.rate}
              onRemove={removeSettingCard}
              onChangeValue={updateSettingCardValue}
              onEndPriceValueUpdate={updateEndPriceCardValue}
            />
          );
        })}
        {settings.length < 3 ? (
          <div
            onClick={addSettingCard}
            className="w-full flex flex-col justify-center items-center gap-4 py-4 px-[9rem] border rounded-3xl bg-white cursor-pointer hover:bg-slate-100/50"
          >
            <div className="bg-gray-300 p-4 rounded-full">
              <Icon
                icon="tabler:plus"
                width="2rem"
                height="2rem"
                style={{ color: "#FFF" }}
              />
            </div>
            <div className="whitespace-nowrap">เพิ่มการตั้งค่า</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <div className="w-full flex flex-row justify-end gap-3">
        <div
          onClick={doSubmit}
          className="text-center cursor-pointer bg-[#00818A] text-white px-10 py-1 rounded-full whitespace-nowrap"
        >
          บันทึก
        </div>
        <a
          href="/price-config"
          className="text-center cursor-pointer bg-gray-300 text-black px-10 py-1 rounded-full whitespace-nowrap"
        >
          กลับ
        </a>
      </div>
    </div>
  );
};

export default SettingContainer;
