import React from "react";

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post-item">
      <PostContent author={author} date={date} content={content} />
      <PostComment comments={comments} />
    </div>
  );
}

function PostContent({ author, date, content }) {
  return (
    <div className="post">
      <div className="post-header">
        <img src={author.avatar} alt={author.name} />
        <div>
          <strong>{author.name}</strong>
          <span>{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
}

function PostComment({ comments }) {
  return (
    <div className="comments">
      {comments.map(comment => (
        <div className="comment" key={comment.id}>
          <img src={comment.author.avatar} alt={comment.author.name} />
          <div>
            <strong>{comment.author.name}</strong> {comment.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostItem;
