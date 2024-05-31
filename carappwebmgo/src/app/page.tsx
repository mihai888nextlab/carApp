"use client";

import { Button, Form } from "react-bootstrap";
import { useFormState, useFormStatus } from "react-dom";
import { enterGame } from "./lib/actions";
import { ReactNode } from "react";

export default function Home() {
  const [error, dispatch] = useFormState(enterGame, undefined);

  return (
    <div className="home">
      <h1>Car App</h1>

      <Form className="form" action={dispatch}>
        <Form.Group className="group mb3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
          />
        </Form.Group>
        <Form.Group className="group mb3">
          <Form.Label>Color</Form.Label>
          <Form.Control type="color" placeholder="Enter color" name="color" />
        </Form.Group>

        <div>{error && <p className="error">{error}</p>}</div>

        <Btn></Btn>
      </Form>

      <div></div>
    </div>
  );
}

const Btn = () => {
  const { pending } = useFormStatus();

  const handleClick = (event: any) => {
    if (pending) {
      event.preventDefault();
    }
  };

  return (
    <Button type="submit" aria-disabled={pending} onClick={handleClick}>
      SUBMIT
    </Button>
  );
};
