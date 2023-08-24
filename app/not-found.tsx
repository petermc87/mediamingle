"use client";

import { Alert, Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container>
      <Alert>
        <h1>Not Found!😕</h1>
        <p>Oh no! Looks like this page does not exist</p>
      </Alert>
    </Container>
  );
}
