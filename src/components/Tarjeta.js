import React from "react";
import "./Tarjeta.css";
export default function Tarjeta({
  id,
  titulo,
  descripcion,
  setEditData,
  eliminar,
}) {
  const el = { id, titulo, descripcion };
  return (
    <div id={id} className="tarjeta">
      <h3 className="tarjeta-h3">{titulo}</h3>
      <p className="tarjeta-p">{descripcion}</p>
      <img
        className="tarjeta-cerrar"
        src="./img/cerrar.svg"
        alt="cerrar"
        onClick={(e) => eliminar(id)}
      />
      <img
        className="tarjeta-editar"
        src="./img/editar.svg"
        alt="editar"
        onClick={(e) => setEditData(el)}
      />
    </div>
  );
}
