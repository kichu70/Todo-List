import React, { useState } from "react";
const Home = ({ msg = "todo lists " }) => {
  const [todo, setTodo] = useState([]);
  const [complet, setComplet] = useState([]);
  const [inputValue, setInputvalue] = useState("");

  const add = () => {
    if (inputValue.trim() !== "") {
      // setTodo([...todo, inputValue]);
      if (!todo.includes(inputValue.trim())) {
        setTodo([...todo, inputValue.trim()]);
        setInputvalue("");
      } else {
        alert("alreay haves the value");
      }
    }
  };
  const deletAll = () => {
    setTodo([]);
    setComplet([])
  };
  const delet = (iteam) => {
    // setTodo(todo.filter((elementsInTheTodo,i) => i !== index));
    setTodo(todo.filter((t) => t !== iteam));
    setComplet(complet.filter((t) => t !== iteam));
  };
  const completIteam = (iteam) => {
    if (!complet.includes(iteam)) {
      setComplet([...complet, iteam]);
    }
  };
  return (
    <div>
      {/* <h1>helloWorld</h1> */}
      <h1>{msg}</h1>
      <input
        id="text"
        type="text"
        value={inputValue}
        onChange={(e) => setInputvalue(e.target.value)}
      />
      &nbsp;
      <button onClick={add}>submit</button>&nbsp;
      <button onClick={deletAll}>delet all</button>
      <br />
      <br />
      {todo.map((iteam, index) => (
        <div
          key={index}
          style={{ color: complet.includes(iteam) ? "green" : "red",
            textDecoration: complet.includes(iteam)?"line-through":"none"
           }}
        >
          {iteam}&nbsp;
          <button onClick={() => delet(iteam)}>delet</button>&nbsp;
          <button onClick={() => completIteam(iteam)}>completed</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
