import React from "react";

export default function Article({title, date, preview}) {
    const display = date ? date : 'January 1, 1970'
  return <article>
    <h3>{title}</h3>
    <small>{display}</small>
    <p>{preview}</p>

  </article>;
}