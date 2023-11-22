import { Button, Tabs, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import { IconShoppingBag } from "@tabler/icons-react";
import { IconUserFilled } from "@tabler/icons-react";
import { IconAssembly } from "@tabler/icons-react";
import { IconShoppingCart } from "@tabler/icons-react";

export function DashboardTab() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <>
      <Tabs
        color="lime"
        variant="pills"
        defaultValue="Products"
        className=" !flex !justify-center !items-center px-5 py-3"
      >
        <Tabs.List>
          <Tabs.Tab
            value="Products"
            leftSection={<IconAssembly style={iconStyle} />}
            color="lime"
            className="!w-40"
          >
            Products
          </Tabs.Tab>
          <Tabs.Tab
            value="Orders"
            leftSection={<IconShoppingBag style={iconStyle} />}
            color="indigo"
            className="!w-40"
          >
            Orders
          </Tabs.Tab>
          <Tabs.Tab
            value="Users"
            leftSection={<IconUserFilled style={iconStyle} />}
            color="orange"
            className="!w-40"
          >
            Users
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>
      <h1 className="flex justify-center items-center text-2xl my-3 font-bold relative ">
        Product Details
        <hr className="w-44 h-1 border-2 border-gray-600 absolute top-7 mb-6 " />
      </h1>
      <div className="flex justify-end px-4">
        <Button
          variant="filled"
          color="orange"
          className="!w-40"
          rightSection={<IconShoppingCart className="!w-9" />}
        >
          Add Product
        </Button>
      </div>
    </>
  );
}
