"use client";

import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import Table from "@/components/ManageAccount/Table";
import { useEffect, useState } from "react";
import isAuth from '@/components/isAuth'


const UserManagement = () => {
  const doRemoveAccount = (id) => {
    const target = operationTeam[id - 1];
    const targetIndex = operationTeam.findIndex(item => item.key === id)
    console.log(target);
    deleteOperationTeamAccount(access_token, target.account_id);
    deleteOperationTeamProfile(access_token, target.uid);
    setOperationTeam(prevTeam => {
      const newTeam = [...prevTeam];
      newTeam.splice(targetIndex, 1);
      return newTeam;
    });
  };

  const [operationTeam, setOperationTeam] = useState({});

  const access_token = localStorage.getItem('token');

  const deleteOperationTeamAccount = async (access_token, uid) => {
    const ICONNECT_API = `http://10.4.13.158:8080/user/profile/delete/${uid}`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
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

  const deleteOperationTeamProfile = async (access_token, uid) => {
    const ICONNECT_API = `http://10.4.13.158:8080/user/profile/delete/${uid}`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
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

  const loadOperationTeam = async (access_token) => {
    const ICONNECT_API = `http://10.4.13.158:8081/account/operation`;
    try {
      const result = await fetch(ICONNECT_API, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`,
        },
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
    const fetchOperationTeam = async () => {
      try {
        const result = loadOperationTeam(access_token);
        result.then((result) => {
          const res = JSON.parse(result);
          let operationResource = res.result;
          let newOperationResource = [];
          if (
            typeof operationResource === "object" &&
            !Array.isArray(operationResource)
          ) {
            operationResource = Object.entries(operationResource).map(
              ([key, value]) => ({
                key,
                value,
              })
            );
          }

          const keys = Object.keys(operationResource);
          const updateKeys = keys.map((key) => parseInt(key) + 1);
          const values = Object.values(operationResource);
          for (let i = 0; i < values.length; i++) {
            const resource = values[i];
            newOperationResource.push({
              ...resource,
              key: Object.values(updateKeys)[i].toString()
            })
          }
          setOperationTeam(newOperationResource);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchOperationTeam();
  }, [access_token]);

  return (
    <Container>
      <div className="w-full flex flex-col items-start gap-4 pt-16">
        <PageTitle>จัดการสมาชิก</PageTitle>

        <div className="w-full flex flex-col sm:flex-row justify-end items-center gap-3">
          <div className="">
            <a
              href="/user-management/add"
              className="text-center cursor-pointer bg-[#00818A] text-white px-6 py-2 rounded-full whitespace-nowrap"
            >
              สร้างสมาชิก
            </a>
          </div>
        </div>

        <div className="w-full flex flex-col bg-white rounded-xl">
          <div className="flex flex-col p-4">
            <div className="text-xl font-bold">รายการสมาชิกทั้งหมด</div>
            <div>{Object.values(operationTeam).length} รายการ</div>
          </div>

          <Table items={Object.values(operationTeam)} actionRemove={doRemoveAccount} />
        </div>
      </div>
    </Container>
  );
};

export default isAuth(UserManagement);
