import React from "react";

const fetchComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  ).then((response) => response.json());
};

export default async function Comments({ params }) {
  const { id } = params;
  const comments = await fetchComments(id);

  return (
    <section>
      <ul
        style={{
          backgroundColor: "#444",
          padding: "1rem",
          fontSize: "1.5rem",
          listStyle: "none",
        }}
      >
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2>{comment.name}</h2>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
