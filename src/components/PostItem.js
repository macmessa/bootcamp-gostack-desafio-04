import React from "react";

function PostItem({ id, author, date, content, comments }) {
  return (
    <>
      <div className="post">
        <img src={author.avatar} alt={author.name} />
        <div>
          <strong>{author.name}</strong>
          <span>{date}</span>
        </div>
      </div>
    </>
  );
}
