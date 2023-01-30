import { Add } from "@mui/icons-material";
import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { Done } from "./components/Done";
import { Task } from "./components/Task";
import "./todo.css";


export function TodoList() {
    const [data, setData] = useState([]);
    const [done, setDone] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function add() {
        const todo = {
            id : Math.random(),
            title : inputValue
        }
        if(todo?.title === "" || todo?.title === null){
            alert(`Task description required !!`)
        } else {
            setData((data)=>{
                return [...data,todo]
            })
        }
        setInputValue("")
    }

    function doneTask(task) {
        const remainTodo = data.filter((elt)=>{
            return elt.id !== task.id;
        })
        setData(remainTodo)
        setDone((done)=>{
            return [...done, task]
        })
    }
    return (
        <div className="main-container">
            <div className="field">
                <Input type="text" placeholder="Write the task decription here... "
                value={inputValue} 
                sx={{ width: "50%" }} 
                onChange={(e)=>setInputValue(e.target.value)}
                />
                <Button color="primary" variant="contained" 
                sx={{ textAlign: "center", marginLeft: 3 }} 
                startIcon={<Add/>} onClick={()=>add()}
                >Create</Button>
            </div>


            <div className="flex-container">
                <Task data ={data} doneTask={doneTask} title="In Progress"/>
                <Done done={done} title="Done"/>
            </div>
        </div>
    )
}