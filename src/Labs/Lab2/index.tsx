import { Container } from "react-bootstrap";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Dimensions from "./Dimensions";
import ForegroundColors from "./ForegroundColors";
import "./index.css";
import Positions from "./Positions";
import Zindex from "./Zindex";
import BootstrapGrids from "./BootstrapGrids";
import BootstrapTables from "./BootstrapTables";
import BootstrapLists from "./BootstrapLists";
import BootstrapForms from "./BootstrapForms";
export default function Lab2() {
  return (
    <Container>
      <div id="wd-lab2">
        <h2>Lab 2 - Cascading Style Sheets</h2>
        <BootstrapForms />
        <BootstrapLists />
        <BootstrapTables />
        <BootstrapGrids />
        <Positions />
        <hr />
        <Zindex />
        <hr />
        <Dimensions />
        <hr />
        <Borders />
        <hr />
        <BackgroundColors />
        <hr />
        <ForegroundColors />
        <hr />
        <h3>Styling with the STYLE attribute</h3>
        <p id="wd-lab2-style-attribute">
          Style attribute allows configuring look and feel right on the element.
          Although it's very convenient it is considered bad practice and you
          should avoid using the style attribute
        </p>
      </div>
    </Container>
  );
}
