import { useToast } from "@chakra-ui/react";

export function showToast() {
  const toast = useToast();
  toast({
    title: "Todo added.",
    description: "Your todo was successfully added.",
    status: "success",
    duration: 3000,
    isClosable: true,
  });
}
