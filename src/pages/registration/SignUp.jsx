import { Button, TextInput } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="w-screen h-screen  flex justify-center items-center bg-gray-200">
      <div className="border-2 border-gray-400 w-1/4 p-7 rounded-md shadow-md ">
        <TextInput label="Name" placeholder="Enter Name" />
        <TextInput label="Email" placeholder="Enter email" />
        <TextInput label="Password" placeholder="Enter password" />
        <Button
          type="submit"
          mt="md"
          color="orange"
          className="border-2 border-green-500 !w-full"
        >
          SignUp
        </Button>
        <p className="mt-2">
          Already have an account
          <Link
            to={"/login"}
            className="text-orange-500 text-lg font-bold ml-1"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
