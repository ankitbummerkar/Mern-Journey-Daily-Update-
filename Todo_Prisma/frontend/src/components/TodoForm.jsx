import { Button } from "./ui/button";
import { Input } from "./ui/input";

const TodoForm = ({ input, setInput, createTodo }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-10">
      <Input
        type="text"
        placeholder="Enter your task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            createTodo();
          }
        }}
        className="h-14 md:h-16 text-lg md:text-xl px-5"
      />

      <Button
        onClick={createTodo}
        className="h-14 md:h-16 px-8 md:px-10 text-lg md:text-xl font-semibold"
      >
        Add
      </Button>
    </div>
  );
};

export default TodoForm;
