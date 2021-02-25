import Grants from "./components/Grants";
import { Container } from "react-bootstrap";
import "./styles.css";

export default function App() {
  return (
    <>
      <h1 className="text-center mt-5">Grants Data</h1>
      <Container>
        <Grants />
      </Container>
    </>
  );
}
