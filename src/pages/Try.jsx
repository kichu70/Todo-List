import React, { useState } from "react";
import "./Try.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Try = ({ msg = "todo List " }) => {
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [complete, SetComplete] = useState([]);
  const add = () => {
    try {
      if ((inputValue || "").trim() !== "") {
        if (!todo.includes(inputValue)) {
          setTodo([...todo, inputValue]);
          setInputValue("");
        } else {
          alert("Data is Already Entered");
        }
      }
    } catch (error) {
      alert(error);
    }
  };
  const dltall = () => {
    setTodo([]);
  };
  const dlt = (iteam) => {
    setTodo(todo.filter((t) => t !== iteam));
    SetComplete(complete.filter((t)=> t !== iteam))
  };
  const completed=(iteam)=>{
    if(!complete.includes(iteam)){
      SetComplete([...complete,iteam])
    }
  }
  return (
    <div>
      <form onSubmit={(e)=>{e.preventDefault();add();}}>
      <div className="main">
        <h1>{msg}</h1>
        <TextField
          className="TextField"
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />{" "}
        <div>
          <Button type="submit" className="submit" variant="contained" onClick={add}>
            submit
          </Button>
          <Button variant="contained" className="dltall" onClick={dltall}>
            detel All
          </Button>
        </div>
      </div>
      <div className="main2">
        {todo.map((iteam, index) => (
          <div className="view" key={index} >
            <p style={{color:complete.includes(iteam)?"green":"red", textDecoration:complete.includes(iteam)? "line-through":"none"}}>{iteam}</p>
            <Button className="cmplt" variant="contained" color="success" onClick={()=>completed(iteam)}>completed</Button>
            <Button
              className="dlt"
              onClick={() => dlt(iteam)}
              variant="contained"
            >
              delet
            </Button>
          </div>
        ))}
      </div>
      </form>
    </div>
  );
};

export default Try;
