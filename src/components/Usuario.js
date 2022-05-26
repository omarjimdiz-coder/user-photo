import React from 'react'
import './usuario.css';

const Usuario = ({reverse}) => {

  return (
    <>
        {
            reverse.map((registro) => {
                return(
                    <div className='usuario' key={registro.id}>
                        <h3>Usuario {registro.id}</h3>
                        <p><strong>Nombre:</strong>{registro.nombre}</p>
                        <p><strong>Apellido Paterno:</strong>{registro.apellidoPaterno}</p>
                        <p><strong>Apellido Materno:</strong>{registro.apellidoMaterno}</p>
                        <p><strong>Edad:</strong>{registro.edad}</p>
                        <p><strong>Email:</strong>{registro.email}</p>
                        <p><strong>Fecha de nacimiento:</strong>{registro.nacimiento}</p>
                        <h3>Datos:</h3>
                        <p><strong>Calle:</strong>{registro?.calle}</p>
                        <p><strong>Delegación / Municipio:</strong>{registro.datos?.delegacion}</p>
                        <p><strong>Estado:</strong>{registro.datos?.estado}</p>
                        <p><strong>Codigo Postal:</strong>{registro.datos?.cp}</p>
                    </div>
                    
                )
            })
        }

    </>
  )
}

export default Usuario