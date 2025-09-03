"use client";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CommentForm from "../components/CommentForm";


export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=3")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  function addComment(comment) {
    setComments([...comments, comment]);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-6 space-y-6">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="bg-black p-4 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold">{post.title}</h3>
              <p className="text-teal-700">{post.body}</p>
            </article>
          ))}
        </div>

        <section>
          <h2 className="text-xl font-bold mb-2">Comments</h2>
          <CommentForm onAdd={addComment} />
          <ul className="mt-4 space-y-2">
            {comments.map((c, i) => (
              <li key={i} className="border p-2 rounded">
                <p className="font-semibold">
                  {c.name} ({c.email})
                </p>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
