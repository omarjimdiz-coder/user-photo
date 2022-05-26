import { Container, Row, Col } from "reactstrap";
import Formulario from "./components/formulario";
import Menu from "./components/Menu";
import Navegador from "./components/Navegador";
import './App.css';
import { useState } from "react";


function App() {

  const [picture, setPicture] = useState('');

  console.log(picture);

  async function showDatas(imagen, nombre, apellidoMaterno, apellidoPaterno, edad, email, fechaNac, datos){

    const datas = { imagen, nombre, apellidoMaterno, apellidoPaterno, edad, email, fechaNac, datos};
    
    console.log(imagen)
    setPicture(imagen);

      const url = "https://api.devdicio.net:8444/v1/sec_dev_interview";
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Host': 'api.devdicio.net',
          'xc-token': "J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP"
          },
          body: JSON.stringify(datas)
        });

      return response.json();


  }

  return (
    <Container className="App">
      <Navegador />
      <Row>
        <Col>
          <Formulario showDatas={showDatas} />
        </Col>
        <Col>
          <Menu picture={picture} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
