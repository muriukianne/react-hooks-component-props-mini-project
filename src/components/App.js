import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

console.log(blogData);
const name = 'Anne Muriuki'
const image = blogData.image
const list = blogData.posts


function App() {
  return (
    <div className="App">
      <Header name={name} />
      <About image={image} about={blogData.about} />
      <ArticleList posts={list}/>
    </div>
  );
}

export default App;
