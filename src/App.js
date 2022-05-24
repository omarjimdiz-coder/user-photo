import { Container } from "reactstrap";
import Formulario from "./components/Formulario";
import Menu from "./components/Menu";


function App() {
  return (
    <Container className="App">
      <Formulario />
      <Menu />
    </Container>
  );
}

export default App;
