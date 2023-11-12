import { Select, TextInput } from "@mantine/core";
import React from "react";
import { IconSearch } from "@tabler/icons-react";

const Filter = () => {
  return (
    <div className="w-screen ">
      <div className="max-w-5xl bg-gray-200 mx-auto  p-3 rounded-xl flex gap-4 flex-col my-9">
        <TextInput
          mt="md"
          // leftSectionPointerEvents="none"
          leftSection={<IconSearch />}
          placeholder="Search here..."
        />
        <div className="flex justify-between items-center">
          <p>Filters</p>
          <p>Reset Filters</p>
        </div>
        <div className="flex gap-2">
          <Select
            placeholder="All"
            data={["React", "Angular", "Vue", "Svelte"]}
            defaultValue="React"
            clearable
          />
          <Select
            placeholder="Any Price"
            data={["React", "Angular", "Vue", "Svelte"]}
            defaultValue="React"
            clearable
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
