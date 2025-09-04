"use client"; // needed for interactivity in Next.js App Router
import { useState } from "react";

export default function CommentForm({ }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");


  function handleSubmit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    if (!name || !email || !text) {
      alert("All fields required!");
      return;
    }
    if (!email.includes("@")) {
      alert("Enter a valid email!");
      return;
    }
     ([name,email,Comment]);
  setName("");
  setEmail("");
  setText("");
  }


  return (
    <form onSubmit={handleSubmit} className="space-y-2 bg-black p-4 rounded-xl shadow-md">
      <input
        className="w-full border p-2 rounded"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="w-full border p-2 rounded"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        className="w-full border p-2 rounded"
        placeholder="Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
