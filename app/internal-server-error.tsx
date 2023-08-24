"use client";

import { Alert, Container } from "react-bootstrap";

export default function ServerError() {
  return (
    <Container>
      <Alert>
        <h1>Server Error!😵‍💫</h1>
        <p>
          Looks like something went wrong. Please try refresh the page or
          contact support.
        </p>
      </Alert>
    </Container>
  );
}
