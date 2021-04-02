import React, { useState, useEffect } from "react";
import "./Formulario.css";
const inicialForm = {
  titulo: "",
  descripcion: "",
  id: null,
};

export default function Formulario({
  createData,
  EditData,
  setEditData,
  updateData,
}) {
  useEffect(() => {
    if (EditData) {
      setForm(EditData);
    } else {
      setForm(inicialForm);
    }
  }, [EditData]);

  const [form, setForm] = useState(inicialForm);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const ManejarEnviar = (e) => {
    e.preventDefault();
    if (!form.titulo || !form.descripcion) {
      alert("datos incompletos");
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setForm(inicialForm);
    setEditData(null);
  };

  return (
    <>
      <h2 className="todolist-h2">
        {form.id === null ? "Inserta una tarea" : "edita una tarea"}
      </h2>
      <form onSubmit={(e) => ManejarEnviar(e)} className="form">
        <input
          type="text"
          name="titulo"
          placeholder="título"
          onChange={handleChange}
          value={form.titulo}
          className="form-titulo"
        />
        <input
          type="text"
          name="descripcion"
          placeholder="descripción"
          onChange={handleChange}
          value={form.descripcion}
          className="form-descripcion"
        />
        <button type="submit" className="form-btn">
          Guardar
        </button>
      </form>
    </>
  );
}
