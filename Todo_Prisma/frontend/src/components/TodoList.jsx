import TodoItem from "./TodoItem";

const TodoList = ({ todos, deleteTodo, completeTodo, editTodo }) => {
  if (todos.length === 0) {
    return (
      <p className="text-center text-lg md:text-xl text-muted-foreground mt-8">
        No tasks added yet
      </p>
    );
  }

  return (
    <div className="space-y-5 md:space-y-6">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
          editTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
