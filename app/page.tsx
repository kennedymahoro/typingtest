import { DarkThemeToggle } from "flowbite-react";
import Navbar from ".//components/NavbarComp";

export default function Home() {
  return (
    <main className="flex min-h-screen  justify-center gap-2 dark:bg-gray-800">
      <Navbar />
    </main>
  );
}
