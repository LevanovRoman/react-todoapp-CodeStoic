import {useState} from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";

export default function Todo(){
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <Form todos={todos} setTodos={setTodos}/>
            <TodoList todos={todos} setTodos={setTodos}/>
        </div>
    );
}