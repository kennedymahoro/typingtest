import NavbarComp from "../components/NavbarComp";
import { Textarea } from "flowbite-react";
export default function Test() {
  return (
    <div className="flex h-screen w-screen flex-col dark:bg-gray-800 dark:text-gray-400">
      <NavbarComp />
      <div className="px-24">
        <div className="p-3.5 py-28">
            <h5 className="text-xl font-bold dark:text-white"> Quote</h5>
            <p className="p-4">
            Typing is an important skill for anyone using a computer. The more
            comfortable you are typing, the more you can focus on what you are
            working on. Slow typing and fixing typing errors moves your attention
            away from what you are trying to achieve (writing an email, filling in
            a form, etc.). Use this advanced typing test to discover how well you
            type. We have test material in more than 15 languages.
            </p>
        </div>
        <div className="p-3.5 justify-items-center">
            <Textarea placeholder="Type here..." className="max-h-10 w-56" />
        </div>
      </div>
    </div>
  );
}
