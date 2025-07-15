import { Row, Col } from "react-bootstrap";

export default function BootstrapGrids() {
  return (
    <div>
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>
        <Row>
          <Col className="bg-warning">
            <h3>One Big Column</h3>
          </Col>
          <Col className="bg-warning">
            <h3>One Big Column</h3>
          </Col>
          <Col className="bg-warning">
            <h3>One Big Column</h3>
          </Col>
          <Col className="bg-warning">
            <h3>One Big Column</h3>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="bg-danger text-white">
            <h3>Left half</h3>
          </Col>
          <Col className="bg-primary text-white">
            <h3>Right half</h3>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col lg={4} className="bg-warning">
            <h3>One third</h3>
          </Col>
          <Col lg={8} className="bg-success text-white">
            <h3>Two thirds</h3>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={2} className="bg-black text-white">
            <h3>Sidebar</h3>
          </Col>
          <Col xs={8} className="bg-secondary text-white">
            <h3>Main content</h3>
          </Col>
          <Col xs={2} className="bg-info">
            <h3>Sidebar</h3>
          </Col>
        </Row>
        <hr />
        <div id="wd-bs-responsive-grids">
          <h2>Responsive grid system</h2>
          <Row>
            <Col xs={12} md={6} xl={3} className="bg-warning">
              <h3>Column A</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae magni voluptatum repellendus enim sequi ratione. Ab
              quod culpa nemo quibusdam accusamus, esse laborum. Assumenda
              repudiandae deleniti aspernatur tempora suscipit asperiores.
            </Col>
            <Col xs={12} md={6} xl={3} className="bg-primary text-white">
              <h3>Column B</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae magni voluptatum repellendus enim sequi ratione. Ab
              quod culpa nemo quibusdam accusamus, esse laborum. Assumenda
              repudiandae deleniti aspernatur tempora suscipit asperiores.
            </Col>
            <Col xs={12} md={6} xl={3} className="bg-danger text-white">
              <h3>Column C</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae magni voluptatum repellendus enim sequi ratione. Ab
              quod culpa nemo quibusdam accusamus, esse laborum. Assumenda
              repudiandae deleniti aspernatur tempora suscipit asperiores.
            </Col>
            <Col xs={12} md={6} xl={3} className="bg-success text-white">
              <h3>Column D</h3>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Recusandae magni voluptatum repellendus enim sequi ratione. Ab
              quod culpa nemo quibusdam accusamus, esse laborum. Assumenda
              repudiandae deleniti aspernatur tempora suscipit asperiores.
            </Col>
          </Row>
        </div>
        <hr />
        <Row>
          <Col xs={12} className="bg-dark text-white d-block d-md-none">
            <h2>Header</h2>
          </Col>
          <Col xs={2} className="bg-warning d-none d-md-block">
            <h2>Kambaz Sidebar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              recusandae voluptas placeat ex eos reiciendis, temporibus quo
              maxime unde omnis praesentium nostrum eaque expedita rerum aperiam
              tempora repudiandae debitis sapiente.
            </p>
          </Col>
          <Col xs={2} className="bg-primary text-white d-none d-md-block">
            <h2>Course Sidebar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              recusandae voluptas placeat ex eos reiciendis, temporibus quo
              maxime unde omnis praesentium nostrum eaque expedita rerum aperiam
              tempora repudiandae debitis sapiente.
            </p>
          </Col>
          <Col lg={6} md={8} xs={12} className="bg-danger text-white">
            <h2>Main Content</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              recusandae voluptas placeat ex eos reiciendis, temporibus quo
              maxime unde omnis praesentium nostrum eaque expedita rerum aperiam
              tempora repudiandae debitis sapiente.
            </p>
          </Col>
          <Col xs={2} className="bg-success text-white d-none d-lg-block">
            <h2>Right Sidebar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae
              recusandae voluptas placeat ex eos reiciendis, temporibus quo
              maxime unde omnis praesentium nostrum eaque expedita rerum aperiam
              tempora repudiandae debitis sapiente.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
