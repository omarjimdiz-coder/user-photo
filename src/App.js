import { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Formulario from "./components/Formulario";
import Menu from "./components/Menu";


function App() {

  const [photo, setPhoto] = useState('');
  const [nameValue, setNameValue] = useState('');
  const [paternoValue, setPaternoValue] = useState('');
  const [maternoValue, setMaternoValue] = useState('');
  const [edadValue, setEdadValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [nacimientoValue, setNacimientoValue] = useState('');
  const [calleValue, setCalleValue] = useState('');
  const [numeroValue, setNumeroValue] = useState('');
  const [coloniaValue, setColoniaValue] = useState('');
  const [municipioValue, setMunicipioValue] = useState('');
  const [estadoValue, setEstadoValue] = useState('');
  const [cpValue, setCpValue] = useState('');


  async function showDatas(photoValue, name, paterno, materno, edad, email, nacimiento, calle, numero, colonia, municipio, estado, cp){

    const datas = {photoValue, name, paterno, materno, edad, email, nacimiento, calle, numero, colonia, municipio, estado, cp};

    setNameValue(name);
    setPhoto(photoValue);
    setPaternoValue(paterno);
    setMaternoValue(materno);
    setEdadValue(edad);
    setEmailValue(email);
    setNacimientoValue(nacimiento);
    setCalleValue(nacimiento);
    setNumeroValue(numero);
    setColoniaValue(colonia);
    setMunicipioValue(municipio);
    setEstadoValue(estado);
    setCpValue(cp);


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
      <Row>

        <Col>
          <Formulario showDatas={showDatas}/>
        </Col>
        <Col>
          <Menu 
            nameValue={nameValue} 
            photo={photo}
            paternoValue={paternoValue}
            maternoValue={maternoValue}
            edadValue={edadValue}
            emailValue={emailValue}
            nacimientoValue={nacimientoValue}
            calleValue={calleValue}
            numeroValue={numeroValue}
            coloniaValue={coloniaValue}
            municipioValue={municipioValue}
            estadoValue={estadoValue}
            cpValue={cpValue}
            />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
