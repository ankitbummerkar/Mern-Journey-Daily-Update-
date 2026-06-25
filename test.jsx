import { useState } from "react";
import { Check, Pencil, Trash2, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TodoItem = ({ todo, deleteTodo, toggleComplete, editTodo }) => {
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
    <div className="flex items-center justify-between rounded-lg border bg-white p-4 shadow-sm">
      {isEditing ? (
        <div className="flex flex-1 items-center gap-2">
          <Input
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSave();
            }}
          />

          <Button size="icon" onClick={handleSave}>
            <Save className="h-4 w-4" />
          </Button>

          <Button variant="outline" size="icon" onClick={handleCancel}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <>
          <p
            className={`flex-1 text-base ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.text}
          </p>

          <div className="flex items-center gap-2 ml-4">
            <Button
              size="icon"
              variant={todo.completed ? "secondary" : "default"}
              onClick={() => toggleComplete(todo.id)}
            >
              <Check className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="outline"
              onClick={() => setIsEditing(true)}
            >
              <Pencil className="h-4 w-4" />
            </Button>

            <Button
              size="icon"
              variant="destructive"
              onClick={() => deleteTodo(todo.id)}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default TodoItem;
