import React from "react";
import Layout from "../../../components/layout/Layout";
import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { IconUserFilled } from "@tabler/icons-react";
import { DashboardTab } from "./DashboardTab";

const DashBoard = () => {
  return (
    <Layout>
      <div className="w-screen ">
        <div className="flex gap-5 m-5 max-w-5xl mx-auto w-full  cursor-pointer">
          <Card shadow="lg" radius="md" withBorder>
            <div className=" text-purple-500   flex justify-center items-center flex-col gap-1">
              <IconUserFilled className="w-96 h-16 " />
              <p className="font-bold text-2xl text-black">200</p>
              <h1 className="font-bold text-md ">Total Products</h1>
            </div>
          </Card>
          <Card shadow="lg" radius="md" withBorder padding="sm">
            <div className=" text-purple-500   flex justify-center items-center flex-col gap-1">
              <IconUserFilled className="w-96 h-16 " />
              <p className="font-bold text-2xl text-black">200</p>
              <h1 className="font-bold text-md">Total Orders</h1>
            </div>
          </Card>
          <Card shadow="lg" radius="md" withBorder>
            <div className=" text-purple-500   flex justify-center items-center flex-col gap-1">
              <IconUserFilled className="w-96 h-16 " />
              <p className="font-bold text-2xl text-black">200</p>
              <h1 className="font-bold text-md">Total Users</h1>
            </div>
          </Card>
          {/* <Card shadow="lg" radius="md" withBorder>
            <div className=" text-purple-500   flex justify-center items-center flex-col gap-1">
              <IconUserFilled className="w-96 h-16 " />
              <p className="font-bold text-lg">200</p>
              <h1 className="font-bold text-md">Total Products</h1>
            </div>
          </Card> */}
        </div>
        <DashboardTab />
      </div>
    </Layout>
  );
};

export default DashBoard;
