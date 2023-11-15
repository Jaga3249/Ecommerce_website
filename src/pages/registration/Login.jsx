import { Button, TextInput } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-gray-200">
      <div className="border-2 border-gray-400 w-1/4 p-7 rounded-md shadow-md ">
        <TextInput label="Email" placeholder="Enter email" />
        <TextInput label="Password" placeholder="Enter password" />
        <Button
          type="submit"
          mt="md"
          className="border-2 border-green-500 !w-full"
        >
          Login
        </Button>
        <p className="mt-2">
          Don't have an account
          <Link
            to={"/signup"}
            className="text-[#39A7FF] text-lg font-bold ml-1"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
