import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Save, X, Check, Pencil, Trash2 } from "lucide-react";

const TodoItem = ({ todo, deleteTodo, editTodo, completeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleSave = () => {
    if (editedText.trim() === "") return;
    editTodo(todo.id, editedText);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedText(todo.text);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl border bg-white p-5 md:p-6 shadow-md">
      {isEditing ? (
        <div className="flex flex-col sm:flex-row flex-1 items-stretch sm:items-center gap-3">
          <Input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
            className="h-14 text-lg md:text-xl"
          />

          <div className="flex gap-3">
            <Button
              size="icon"
              onClick={handleSave}
              className="h-12 w-12 md:h-14 md:w-14"
            >
              <Save className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={handleCancel}
              className="h-12 w-12 md:h-14 md:w-14"
            >
              <X className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </div>
      ) : (
        <>
          <p
            className={`flex-1 text-lg md:text-2xl font-medium wrap-break-word ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.text}
          </p>

          <div className="flex items-center gap-3">
            <Button
              size="icon"
              variant={todo.completed ? "secondary" : "default"}
              onClick={() => completeTodo(todo.id)}
              className="h-12 w-12 md:h-14 md:w-14"
            >
              <Check className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              onClick={() => setIsEditing(true)}
              className="h-12 w-12 md:h-14 md:w-14"
            >
              <Pencil className="h-5 w-5 md:h-6 md:w-6" />
            </Button>

            <Button
              size="icon"
              variant="destructive"
              onClick={() => deleteTodo(todo.id)}
              className="h-12 w-12 md:h-14 md:w-14"
            >
              <Trash2 className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
