import React from "react";
import Link from "next/link";

const fetchSinglesPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  }).then((response) => response.json());
};

export default async function Post({ params, children }) {
  const { id } = params;
  const post = await fetchSinglesPost(id);

  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href={`/posts/${id}/comments`}>Comments</Link>
      {children}
    </section>
  );
}
