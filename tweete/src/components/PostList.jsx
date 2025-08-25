import Modal from "./modal";
import NewPost from "./NewPost"
import Post from "./Post"
import classes from './postList.module.css'
import { useState } from "react";

const PostList = ({isPosting , onStopPosting}) => {

  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

 

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isPosting &&  (
        <Modal onClose={onStopPosting}>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onAuthorChange={authorChangeHandler}
        />
      </Modal>
    )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="Saif" body="my master is awsome" />
      </ul>

    </>

  )
}

export default PostList;