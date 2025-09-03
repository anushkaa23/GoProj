import { Badge, Box, Flex, Text, Spinner } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import type { Todo } from "./TodoList";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { BASE_URL } from "../App";

const TodoItem = ({ todo }: { todo: Todo }) => {
	const queryClient = useQueryClient();

	//  Update todo (mark as done)
	const { mutate: updateTodo, isPending: isUpdating } = useMutation({
		mutationKey: ["updateTodo"],
		mutationFn: async () => {
			if (todo.completed) return;
			const res = await fetch(`${BASE_URL}/todos/${todo._id}`, {
				method: "PATCH",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ completed: true }), // ✅ send completed flag
			});
			if (!res.ok) throw new Error("Failed to update todo");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
	});

	//  Delete todo
	const { mutate: deleteTodo, isPending: isDeleting } = useMutation({
		mutationKey: ["deleteTodo"],
		mutationFn: async () => {
			const res = await fetch(`${BASE_URL}/todos/${todo._id}`, {
				method: "DELETE",
			});
			if (!res.ok) throw new Error("Failed to delete todo");
			return res.json();
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["todos"] });
		},
	});

	return (
		<Flex gap={2} alignItems={"center"}>
			<Flex
				flex={1}
				alignItems={"center"}
				border={"1px"}
				borderColor={"gray.600"}
				p={2}
				borderRadius={"lg"}
				justifyContent={"space-between"}
			>
				<Text
					color={todo.completed ? "green.200" : "yellow.100"}
					textDecoration={todo.completed ? "line-through" : "none"}
				>
					{todo.body}
				</Text>
				{todo.completed ? (
					<Badge ml="1" colorScheme="green">
						Done
					</Badge>
				) : (
					<Badge ml="1" colorScheme="yellow">
						In Progress
					</Badge>
				)}
			</Flex>

			<Flex gap={2} alignItems={"center"}>
				{/*  Mark as done */}
				<Box
					color={"green.500"}
					cursor={todo.completed ? "not-allowed" : "pointer"}
					onClick={() => !todo.completed && updateTodo()}
				>
					{isUpdating ? <Spinner size="sm" /> : <FaCheckCircle size={20} />}
				</Box>

				{/*  Delete todo */}
				<Box
					color={"red.500"}
					cursor={"pointer"}
					onClick={() => deleteTodo()}
				>
					{isDeleting ? <Spinner size="sm" /> : <MdDelete size={25} />}
				</Box>
			</Flex>
		</Flex>
	);
};

export default TodoItem;
