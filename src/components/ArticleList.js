import React from "react";
import Article from "./Article";

export default function ArticleList({ posts = [] }) {
  return (
    <main>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
          />
        ))
      ) : null}
    </main>
  );
}