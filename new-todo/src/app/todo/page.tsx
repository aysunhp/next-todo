"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";
type Props = {};
interface Todo {
  id: string;
  todo: string;
}
const Todo = (props: Props) => {
  const [todo, setTodo] = useState<Todo>({
    id: "",
    todo: "",
  });
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log("todos", todos);
  return (
    <>
      <div className="div" style={{ width: "50%", margin: "auto" }}>
        <Box>
          <ul>
            {todos &&
              todos.map((item) => {
                return (
                  <li key={item.id}>
                    {item.todo}{" "}
                    <button
                      style={{
                        border: "1px solid red",
                        borderRadius: "5px",
                        marginRight: "10px",
                      }}
                      onClick={() => {
                        let arr;
                        arr = [...todos].filter((elem) => elem.id != item.id);
                        setTodos(arr);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      style={{
                        border: "1px solid green",
                        borderRadius: "5px",
                        marginLeft: "10px",
                      }}
                      onClick={() => {
                        let newTodo = prompt();
                        console.log(newTodo);
                        let arr;
                        // arr = [...todos].filter((elem) => elem.id != item.id);
                        // let newObj = {
                        //   id: item.id,
                        //   todo: newTodo,
                        // };
                        // arr.push(newObj);
                        arr = [...todos].map((elem) => {
                          if (elem.id == item.id) {
                            return {
                              id: item.id,
                              todo: newTodo,
                            };
                          } else {
                            return elem;
                          }
                        });
                        console.log(arr);
                        setTodos(arr);
                      }}
                    >
                      Edit
                    </button>
                  </li>
                );
              })}
          </ul>
        </Box>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          style={{ margin: "auto" }}
        >
          <TextField
            value={todo.todo}
            id="outlined-basic"
            label="Enter Todo"
            variant="outlined"
            onChange={(e) => {
              let obj: Todo = {
                id: uuidv4(),
                todo: e.target.value,
              };
              setTodo(obj);
            }}
          />
          <br />
          <Button
            variant="outlined"
            onClick={() => {
              console.log(todo);
              setTodos([...todos, todo]);
              setTodo({
                id: "",
                todo: "",
              });
            }}
          >
            Add
          </Button>
        </Box>
      </div>
    </>
  );
};

export default Todo;
