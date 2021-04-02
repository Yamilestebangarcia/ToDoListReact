import React from "react";
import Tarjeta from "./Tarjeta";
import "./Tarjetas.css";
export default function Tarjetas({ TarjetasData, setEditData, eliminar }) {
  return (
    <div className="tarjetas">
      {TarjetasData.map((el) => (
        <Tarjeta
          key={el.id}
          id={el.id}
          titulo={el.titulo}
          descripcion={el.descripcion}
          setEditData={setEditData}
          eliminar={eliminar}
        />
      ))}
    </div>
  );
}
