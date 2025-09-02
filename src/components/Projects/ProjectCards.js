import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import RotatingImage from "./RotatingImage";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.images ? (
        <RotatingImage images={props.images} />
      ) : (
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      )}
      <Card.Body style={{ padding: "1.5rem" }}>
        <Card.Title style={{ fontSize: "1.3rem", marginBottom: "1rem", fontWeight: "600" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "left", fontSize: "0.95rem", lineHeight: "1.5" }}>
          {props.description}
        </Card.Text>
        <div style={{ marginTop: "auto" }}>
          <Button variant="primary" href={props.ghLink} target="_blank" size="sm">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}

          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
              size="sm"
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
