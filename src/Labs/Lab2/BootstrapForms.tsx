import {
  FormGroup,
  FormLabel,
  FormControl,
  FormSelect,
  Form,
  Row,
  Col,
} from "react-bootstrap";

export default function BootstrapForms() {
  return (
    <div>
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <div id="wd-css-responsive-forms-1">
          <h3>Responsive forms</h3>
          <Form.Group as={Row} className="mb-3" controlId="email1">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" value="email@example.com" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="password1">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="textarea2">
            <Form.Label column sm={2}>
              Bio
            </Form.Label>
            <Col sm={10}>
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </Col>
          </Form.Group>
        </div>

        <div id="wd-css-styling-switches">
          <h3>Switches</h3>
          <Form.Check
            type="switch"
            id="wd-switch-1"
            label="Unchecked switch checkbox input"
          />
          <Form.Check
            type="switch"
            checked={true}
            id="wd-switch-2"
            label="Checked switch checkbox input"
          />
          <Form.Check
            type="switch"
            checked={false}
            disabled
            id="custom-switch"
            label="Unchecked disabled switch checkbox input"
          />
          <Form.Check
            type="switch"
            checked={true}
            disabled
            id="custom-switch"
            label="Checked disabled switch checkbox input"
          />
        </div>

        <div id="wd-css-styling-dropdowns">
          <h3>Dropdowns</h3>
          <FormSelect>
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </FormSelect>
        </div>

        <FormGroup className="mb-3" controlId="wd-email">
          <FormLabel>Email address</FormLabel>
          <FormControl type="email" placeholder="name@example.com" />
        </FormGroup>
        <FormGroup className="mb-3" controlId="wd-textarea">
          <FormLabel>Example textarea</FormLabel>
          <FormControl as="textarea" rows={3} />
        </FormGroup>
      </div>
    </div>
  );
}
