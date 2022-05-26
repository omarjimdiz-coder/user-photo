import React, {useEffect, useState} from 'react'
import { Container } from 'reactstrap'
import Usuario from './Usuario';

const Menu = ({picture}) => {

  const [usuarios, setuUsuarios] = useState([]);
  
  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async() => {
    
    const url = "https://api.devdicio.net:8444/v1/sec_dev_interview";
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Host': 'api.devdicio.net',
        'xc-token': "J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP"
        },
      });
    const data = await response.json();
    
    setuUsuarios(data);

  }

  const user = usuarios?.map(usuario => {

    return{
      id: usuario.id,
      nombre: usuario.nombre,
      apellidoPaterno: usuario.apellidoPaterno,
      apellidoMaterno: usuario.apellidoMaterno,
      edad: usuario.edad,
      email: usuario.email,
      nacimiento: usuario.fechaNac,
      calle: usuario.datos?.calle,
      numero: usuario.datos?.numero,
      delegacion: usuario.datos?.delegacion,
      estado: usuario.datos?.estado,
      cp: usuario.datos?.cp
    }
  });

  const reverse = user.reverse();

  return (
    <Container>
      <Usuario reverse={reverse} />
    </Container>
  )
}

export default Menu