import { useEffect, useState } from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import { Card, CardContent } from "./ui/card";
import TodoList from "./TodoList";

const API_URL = import.meta.env.VITE_API_URL;

const AllTogether = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetch all todos when page loads
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const res = await axios.get(`${API_URL}/todos`);
      setTodos(res.data.todos);
    } catch (error) {
      console.log("Fetch todos error:", error);
    } finally {
      setLoading(false);
    }
  };

  const createTodo = async () => {
    if (input.trim() === "") return;

    try {
      const res = await axios.post(`${API_URL}/todos`, {
        text: input,
      });

      setTodos((prev) => [res.data.todo, ...prev]);
      setInput("");
    } catch (error) {
      console.log("Create todo error:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/todos/${id}`);

      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.log("Delete todo error:", error);
    }
  };

  const completeTodo = async (id) => {
    try {
      const res = await axios.patch(`${API_URL}/todos/${id}/toggle`);

      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? res.data.todo : todo)),
      );
    } catch (error) {
      console.log("Complete todo error:", error);
    }
  };

  const editTodo = async (id, newText) => {
    if (newText.trim() === "") return;

    try {
      const res = await axios.put(`${API_URL}/todos/${id}`, {
        text: newText,
      });

      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? res.data.todo : todo)),
      );
    } catch (error) {
      console.log("Edit todo error:", error);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <Card className="w-full max-w-5xl rounded-3xl shadow-2xl border bg-white">
        <CardContent className="p-8 md:p-12 lg:p-14">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10">
            Todo List
          </h1>

          <TodoForm input={input} setInput={setInput} createTodo={createTodo} />

          {loading ? (
            <p className="text-center text-lg md:text-xl text-muted-foreground mt-8">
              Loading todos...
            </p>
          ) : (
            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              editTodo={editTodo}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AllTogether;
