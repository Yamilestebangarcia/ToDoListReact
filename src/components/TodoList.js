import React, { useState } from "react";
import Formulario from "./Formulario";
import Tarjetas from "./Tarjetas";
import "./TodoList.css";

let dataInicial = [];
export default function TodoList() {
  let myLocal = window.localStorage.getItem("todoList");
  myLocal = JSON.parse(myLocal);
  if (myLocal !== null) {
    dataInicial = myLocal;
  }

  const [TarjetasData, setTarjetasData] = useState(dataInicial);

  const [EditData, setEditData] = useState(null);

  const createData = (form) => {
    form.id = Date.now();
    setTarjetasData([...dataInicial, form]);
    window.localStorage.setItem(
      "todoList",
      JSON.stringify([...TarjetasData, form])
    );
  };
  const updateData = (data) => {
    let newData = TarjetasData.map((el) => (el.id === data.id ? data : el));
    setTarjetasData(newData);
    window.localStorage.setItem("todoList", JSON.stringify(newData));
  };
  const eliminar = (id) => {
    let newData = TarjetasData.filter((el) => el.id !== id);
    setTarjetasData(newData);
    window.localStorage.setItem("todoList", JSON.stringify(newData));
  };
  return (
    <>
      <h1 className="todolist-h1">To do List</h1>
      <Formulario
        createData={createData}
        EditData={EditData}
        setEditData={setEditData}
        updateData={updateData}
      />
      <Tarjetas
        TarjetasData={TarjetasData}
        setEditData={setEditData}
        eliminar={eliminar}
      />
    </>
  );
}
