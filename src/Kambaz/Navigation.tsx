import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
export default function KambazNavigation() {
  return (
    <ListGroup
      style={{ width: 120 }}
      id="wd-kambaz-navigation"
      className="rounded-0 position-fixed
       bottom-0 top-0 d-none d-md-block bg-black z-2"
    >
      <ListGroup.Item
        target="_blank"
        action
        href="https://www.northeastern.edu/"
        className="bg-black border-0 text-center"
      >
        <img src="/images/NEU.png" width="75px" />
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/Kambaz/Account"
        className="text-center border-0 bg-white text-danger"
      >
        <FaRegCircleUser className="fs-1 text text-danger" />
        <br />
        Account{" "}
      </ListGroup.Item>

      <ListGroup.Item
        as={Link}
        to="/Kambaz/Dashboard"
        className="text-center border-0
                  bg-black text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard{" "}
      </ListGroup.Item>

      <ListGroup.Item
        to="/Kambaz/Dashboard"
        as={Link}
        className="text-white border-0
                  bg-black text-center"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses{" "}
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Dashboard"
        as={Link}
        className="text-white border-0
                  bg-black text-center"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Help
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Dashboard"
        as={Link}
        className="text-white border-0
                  bg-black text-center"
      >
        <IoCalendarOutline className="fs-1 text-danger" />
        <br />
        Calendar{" "}
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Dashboard"
        as={Link}
        className="text-white border-0
                  bg-black text-center"
      >
        <FaInbox className="fs-1 text-danger" />
        <br />
        Inbox{" "}
      </ListGroup.Item>
      <ListGroup.Item
        to="/Kambaz/Dashboard"
        as={Link}
        className="text-white border-0
                  bg-black text-center"
      >
        <LiaCogSolid className="fs-1 text-danger" />
        <br />
        Settings{" "}
      </ListGroup.Item>
      <ListGroup.Item
        to="/Labs/Lab1"
        as={Link}
        className="text-white border-0
                  bg-black text-center"
      >
        <FaRegCircleUser className="fs-1 text-danger" />
        <br />
        Labs
      </ListGroup.Item>
      {/* complete styling the rest of the links */}
    </ListGroup>
  );
}
