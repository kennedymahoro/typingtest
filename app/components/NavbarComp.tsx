"use client";
import { Navbar, DarkThemeToggle } from "flowbite-react";
export default function NavbarComp() {
  return (
    <Navbar fluid rounded className="w-screen">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Typing Test
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/Test">Typing Test</Navbar.Link>
        <Navbar.Link href="https://github.com/kennedymahoro">
          GitHub
        </Navbar.Link>
      </Navbar.Collapse>
      <DarkThemeToggle />
    </Navbar>
  );
}
