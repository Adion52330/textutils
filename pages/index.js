import Head from "next/head";
import { useState } from "react";
import Alert from "../components/Alert";
import wordsReadTime, { wordsCount } from "../data/words-read-time";

export default function Home() {
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState("Enter text here");
  const [copied, setCopied] = useState(false);
  const timeTaken = wordsReadTime(text).wordTime * 60;
  return (
    <div className="min-h-screen flex flex-col bg-[#303041] text-[#f4fcfe]">
      <Head>
        <title>TextUtils</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="text-3xl font-bold p-5 bg-[#29262b] mb-10 flex justify-between items-center">
        <h1>TextUtils</h1>
        {copied ? (
          <Alert text="Text copied successfully" show={copied} />
        ) : null}
      </header>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-[80%] ">
          <textarea
            name="text"
            className="bg-[#3d3a50] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg py-2 px-4 block appearance-none leading-normal w-full"
            id="text"
            rows="10"
            placeholder={placeholder}
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <div className="flex space-x-3 my-5 flex-wrap justify-center space-y-2">
            <button
              className="bg-[#0ea2f6] hover:bg-[#0081cc] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
              onClick={() => {
                setText(text.toUpperCase());
                setPlaceholder(placeholder.toUpperCase());
              }}
            >
              To uppercase
            </button>
            <button
              className="bg-[#0ea2f6] hover:bg-[#0081cc] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
              onClick={() => {
                setText(text.toLowerCase());
                setPlaceholder(placeholder.toLowerCase());
              }}
            >
              To lowercase
            </button>
            <button
              className="bg-[#0ea2f6] hover:bg-[#0081cc] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
              onClick={() => {
                setText(text.split("").reverse().join(""));
                setPlaceholder(placeholder.split("").reverse().join(""));
              }}
            >
              Reverse Text
            </button>
            <button
              className="bg-[#0ea2f6] hover:bg-[#0081cc] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
              onClick={() => {
                navigator.clipboard.writeText(text);
                // set copied true for one second and then set it to false
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            >
              Copy Text
            </button>
            <button
              className="bg-[#0ea2f6] hover:bg-[#0081cc] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
              onClick={() => {
                setText("");
                setPlaceholder("Enter text here");
              }}
            >
              Clear Board
            </button>
            {/* Add random text */}
            <button
              className="bg-[#0ea2f6] hover:bg-[#0081cc] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
              onClick={() => {
                setText(
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                );
                setPlaceholder("Last added Random Text");
              }}
            >
              Random Text
            </button>
            <button
              className="bg-[#0ea2f6] hover:bg-[#0081cc] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg px-4 block appearance-none leading-normal"
              onClick={() => {
                setText(text.split(" ").join("\n"));
                setPlaceholder(placeholder.split(" ").join("\n"));
              }}
            >
              Split by space
            </button>
            <button
              className="bg-[#0ea2f6] hover:bg-[#0081cc] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
              onClick={() => {
                setText(text.split("\n").join(" "));
                setPlaceholder(placeholder.split("\n").join(" "));
              }}
            >
              Split by new line
            </button>
            <button
              className="bg-[#0ea2f6] hover:bg-[#0081cc] focus:outline-none focus:shadow-xl focus:border-[#0ea2f6] transition border-2 rounded-lg py-2 px-4 block appearance-none leading-normal"
              onClick={() => {
                setText(text.split("").join("\n"));
                setPlaceholder(placeholder.split("").join("\n"));
              }}
            >
              Split by character
            </button>
            {/* Add more features to it */}
          </div>
          <section id="results" className="my-5">
            <h2 className="text-2xl font-bold text-center">Results</h2>
            <div className="flex flex-col space-y-2 my-5">
              Word count: {wordsCount(text)}
            </div>
            <div className="flex flex-col space-y-2">
              Time taken to read(seconds): {timeTaken.toFixed(2)}
            </div>
          </section>
        </div>
      </div>
      <footer className="bg-[#1f1301] text[#f7f7f7] p-3 mt-auto w-full bottom-0">
        <div className="flex justify-center">
          &copy; Copyright 2021-22 |{" "}
          <a href="https://adion.vercel.app/" targe="_blank">
            Adion
          </a>
        </div>
      </footer>
    </div>
  );
}
