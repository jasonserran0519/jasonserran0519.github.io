import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, My name is <span className="purple">Jason Serrano </span>
            I'm from <span className="purple"> Hailey, Idaho.</span>
            <br />
            I am currently a Senior at <span className ="text-danger" > Santa Clara University </span>,
            <br />
            Where I will have completed my Computer Science and Engineering Degree!
            <br />
            <br />
            Apart from coding, I also partake in...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the Gym 🏋🏾‍♂️
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking and Exploring Nature ⛰️
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to All Music 🎧
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Echale Ganas!! (Spanish for "Give it Your all!)"{" "}
          </p>
          <footer className="blockquote-footer">My Parents</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
