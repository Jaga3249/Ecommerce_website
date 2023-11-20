import { useDisclosure } from "@mantine/hooks";
import { Modal, Button, TextInput } from "@mantine/core";

export function OrderDetails() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} centered>
        <div className="flex flex-col gap-5 ">
          <TextInput radius="md" placeholder="Enter Full  Name.." />
          <TextInput radius="md" placeholder="Enter Full  Address.." />
          <TextInput radius="md" placeholder="Enter pincode..." />
          <TextInput radius="md" placeholder="Enter Mobile Number..." />
          <Button variant="filled" color="lime" className="w-full">
            Order Now
          </Button>
        </div>
      </Modal>

      <Button onClick={open} variant="filled" color="lime" className="mt-4">
        Buy Now
      </Button>
    </>
  );
}
