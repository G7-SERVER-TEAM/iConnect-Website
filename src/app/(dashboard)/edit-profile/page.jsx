"use client";

import { useState } from "react";
import Container from "@/components/Container";
import PageTitle from "@/components/PageTitle";
import ProfileImage from "@/components/ManageAccount/ProfileImage";
import Form from "@/components/Profile/Form";
import isAuth from "@/components/isAuth";

const EditProfile = () => {
  const access_token = localStorage.getItem("token");
  const uid = 4;

  const [userId, setUserId] = useState();
  const [username, setUsername] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();

  const userProfile = async (access_token, uid) => {
    const ICONNECT_API = `http://10.4.13.57:8081/account/myAccount/${uid}`;
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

  userProfile(access_token, uid).then((result) => {
    const profile = JSON.parse(result);
    setFirstname(profile.result.name);
    setLastname(profile.result.surname);
    setUsername(profile.result.username);
  });

  return (
    <Container>
      <div className="w-full flex flex-col items-start gap-4 py-16">
        <div className="w-full flex flex-col">
          <PageTitle>แก้ไขโปรไฟล์</PageTitle>
        </div>

        <div className="w-full flex flex-row gap-8">
          <div className="w-1/4">
            <ProfileImage />
          </div>
          <div className="w-3/4">
            <Form
              user_id={userId}
              username={username}
              firstname={firstname}
              lastname={lastname}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};
export default isAuth(EditProfile);
