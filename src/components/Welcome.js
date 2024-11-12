import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Welcome = () => {
  console.log("Welcome component is rendering");
  return (
    <Container className="text-center mt-5">
      <div className="p-5 bg-light rounded-3">
        
        <h1>Welcome to the Online Examination System</h1>
        <p>Your solution for secure and efficient online assessments.</p>
        <p>
          <Button variant="primary" as={Link} to="/login">
            Get Started
          </Button>
        </p>
      </div>
    </Container>
  );
};

export default Welcome;
