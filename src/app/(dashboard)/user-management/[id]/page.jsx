"use client";
import { useState, useEffect } from "react";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import ProfileImage from "@/components/ManageAccount/ProfileImage";
import Form from "@/components/ManageAccount/Form";
import { redirect, useRouter } from "next/navigation";
import isAuth from '@/components/isAuth'

const UserManagementEdit = ({ params }) => {
  const router = useRouter();
  const access_token = localStorage.getItem('token');

  const loadOperationTeam = async (access_token) => {
    const ICONNECT_API = `http://192.168.1.37:8081/account/operation`;
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
          const values = Object.values(operationResource);
          if (values.length < params.id) {
            router.replace("/user-management");
          } else {
            const profile = values[params.id - 1];
            setFirstname(profile.name);
            setLastname(profile.surname);
            setUsername(profile.username);
            setLocation(profile.area_name);
            setRole(profile.role_id);
            setUserId(profile.uid);
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchOperationTeam();
  }, [access_token, params.id, router]);

  const [userId, setUserId] = useState();
  const [username, setUsername] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [location, setLocation] = useState();
  const [role, setRole] = useState();

  return (
    <Container>
      <div className="w-full flex flex-col items-start gap-4 pt-16">
        <div className="w-full flex flex-col">
          <PageTitle>จัดการสมาชิก</PageTitle>
          <div className="text-xl text-gray-600">แก้ไขข้อมูลสมาชิก</div>
        </div>

        <div className="w-full flex flex-col xl:flex-row gap-8">
          <div className="w-full xl:w-1/4">
            <ProfileImage />
          </div>
          <div className="w-full xl:w-3/4">
            <Form
              user_id={userId}
              username={username}
              firstname={firstname}
              lastname={lastname}
              location={location}
              id={params.id}
              role_id={role}
              mode="Edit"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default isAuth(UserManagementEdit);
