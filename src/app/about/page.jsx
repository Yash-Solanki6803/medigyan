import { Alert } from "flowbite-react";
import { Button } from "flowbite-react";
export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Alert color="info">Alert!</Alert>
      <Button>Default</Button>
      <Button color="blue">Blue</Button>
      <Button color="gray">Gray</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="success">Success</Button>
    </div>
  );
}
