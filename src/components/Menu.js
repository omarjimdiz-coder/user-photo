import React, {useEffect} from 'react'
import { Container } from 'reactstrap'

const Menu = ({nameValue, photo,paternoValue,maternoValue,edadValue,emailValue,nacimientoValue,calleValue,numeroValue,coloniaValue,municipioValue,estadoValue,cpValue}) => {
  
  useEffect(() => {
    let canvas = document.getElementById("c");
    let ctx = canvas.getContext("2d");

    let image = new Image();
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    }
        
    image.src = photo;
  }, [photo])


  return (
    <Container>
      <strong>fotografia:</strong>
      <canvas id='c' width="200" height="80"></canvas>    
      <p><strong>Nombre:</strong> {nameValue}</p>
      <p><strong>Apellido Paterno:</strong> {paternoValue}</p>
      <p><strong>Apellido Materno</strong> {maternoValue}</p>
      <p><strong>Edad:</strong> {edadValue}</p>
      <p><strong>Email:</strong> {emailValue}</p>
      <p><strong>Fecha de nacimiento:</strong> {nacimientoValue}</p>
      <h5>Datos Personales</h5>
      <p><strong>Calle:</strong> {calleValue}</p>
      <p><strong>Número:</strong> {numeroValue}</p>
      <p><strong>Colonia:</strong> {coloniaValue}</p>
      <p><strong>Municipio</strong> {municipioValue}</p>
      <p><strong>Estado:</strong> {estadoValue}</p>
      <p><strong>Código Postal:</strong> {cpValue}</p>

    </Container>
  )
}

export default Menu