import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import animatedsquare from "../../Assets/Projects/animatedsquares.png";
import emotion from "../../Assets/Projects/emotion.png";
import investmentcalculator from "../../Assets/Projects/investmentCalculator.png";
import giveandthrive from "../../Assets/Projects/Give&Thrive.png";
import suicide from "../../Assets/Projects/suicide.png";
import coffeshop from "../../Assets/Projects/coffeeshop.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={giveandthrive}
              isBlog={false}
              title="Give&Thrive"
              description="GIVE&THRIVE website which is an orphanages that have multiple branches that an administrator can add or delete branch to it ,the user sign up an account on it and login to donate for an orphan after selecting the one he want for,and these donations are stored in the database."
              ghLink="https://github.com/ghazal001/project-software-eng"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coffeshop}
              isBlog={false}
              title="Coffe-shop"
              description="This is a Coffee-Shop website where user can sign up and login to by a coffee from the menu and other products Using Angular"
              ghLink="https://github.com/ghazal001/coffee-shop"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={investmentcalculator}
              isBlog={false}
              title="Investment Calculator"
              description="it's a Investment web app Calculator where it calculates the investment for the user money for specific time and amount of money using React"
              ghLink="https://github.com/ghazal001/Investment-Calculator"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animatedsquare}
              isBlog={false}
              title="Animated Sqaures"
              description="2 animated square with some icons star and cercles dancing on these squares using html,css,js"
              ghLink="https://github.com/ghazal001/Animated-Squares"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
