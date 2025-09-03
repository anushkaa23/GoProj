import {
  Box,
  Flex,
  Button,
  Text,
  Container,
  Image,
} from "@chakra-ui/react";
import { useColorModeValue, useColorMode } from "@chakra-ui/react";

import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Container maxW={"900px"}>
			<Box bg={useColorModeValue("gray.400", "gray.700")} px={4} my={4} borderRadius={"5"}>
				<Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
					{/* LEFT SIDE */}
					<Flex
						justifyContent={"center"}
						alignItems={"center"}
						gap={3}
						display={{ base: "none", sm: "flex" }}
					>
						<Image src='/react.png' alt='React logo' boxSize={10} />
						<Text fontSize={"40"}>+</Text>
						<Image src='/go.png' alt='Go logo' boxSize={10} />
						<Text fontSize={"40"}>=</Text>
						<Image src='/explode.png' alt='Explode logo' boxSize={12} />
					</Flex>

					{/* RIGHT SIDE */}
					<Flex alignItems={"center"} gap={3}>
						<Text fontSize={"lg"} fontWeight={500}>
							Daily Tasks
						</Text>
						{/* Toggle Color Mode */}
						<Button 
							onClick={toggleColorMode} 
							aria-label={colorMode === "light" ? "Switch to dark mode" : "Switch to light mode"}
						>
							{colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
						</Button>
					</Flex>
				</Flex>
			</Box>
		</Container>
	);
}
