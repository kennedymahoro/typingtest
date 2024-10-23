"use client";
import { Navbar, DarkThemeToggle } from "flowbite-react";
export default function NavbarComp() {
    return (
    <Navbar fluid rounded className="w-screen">
        <Navbar.Brand href="https://flowbite.com/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Typing Test
            </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
            <Navbar.Link href="/navbars" active>
            Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
        <DarkThemeToggle />
    </Navbar>
    )
}