// import { Stack, Container } from '@chakra-ui/react'
// import Navbar from './components/Navbar'
// import TodoForm from './components/TodoForm'
// import TodoList from './components/TodoList'

// export const BASE_URL = import.meta.env.MODE ==="development" ? "http://localhost:5000/api" : "/api"
// // "http://localhost:5000/api"
// function App() {
//   return (
//     <Stack h="100vh" alignItems="center" justifyContent="center">
//       <Navbar />
//       <Container>
//         <TodoForm/>
//         <TodoList/>
//       </Container>
//     </Stack>
//   )
// }

// export default App

import { VStack, Container, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const BASE_URL =
  import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api";

function App() {
  return (
    <Flex direction="column" minH="100vh">
      {/* Navbar always at top */}
      <Navbar />

      {/* Main Content */}
      <Container flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <VStack spacing={6} w="full">
          <TodoForm />
          <TodoList />
        </VStack>
      </Container>
    </Flex>
  );
}

export default App;
