"use client";
import { useEffect, useState } from "react";
export default function Home() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState();
  const [isUpdate, setIsUpdate] = useState(undefined);

  useEffect(() => {
    getTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isUpdate) {
      const res = await fetch("/api/todo", {
        method: "PUT",
        body: JSON.stringify({
          name: text,
        }),
      });

      if (res.ok) {
        setIsUpdate(undefined);
        getTodos();
      } else {
        console.log("error");
      }
    } else {
      const res = await fetch("/api/todo", {
        method: "POST",
        body: JSON.stringify({
          name: text,
        }),
      });

      if (res.ok) {
        getTodos();
      } else {
        console.log("error");
      }
    }
    setText("");
  };

  const getTodos = async () => {
    let res = await fetch("/api/todo");

    console.log("called2");

    if (res.ok) {
      res = await res.json();
      console.log("res=>", res);
      setTodos(res.todos);
    } else {
      console.log(res);
    }
  };

  const handleUpdate = ({ _id, name }) => {
    setIsUpdate(_id);
    setText(name);
  };

  const handleDelete = async ({ _id }) => {
    try {
      await fetch(`api/todo/${_id}`, {
        method: "DELETE",
      });
      getTodos();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={text}
          placeholder="enter your text"
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {todos?.map((todo) => {
        return (
          <div style={{ width: "fit-content" }}>
            <span style={{ marginInline: "1rem" }}>{todo.name}</span>
            <span onClick={() => handleDelete(todo)}>delete</span>
            <span onClick={() => handleUpdate(todo)}>update</span>
          </div>
        );
      })}
    </main>
  );
}
