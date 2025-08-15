import NewPost from "./NewPost"
import Post from "./Post"
import classes from './postList.module.css'

const PostList = () => {

  const [enteredBody, setEnteredBody] = useState('');

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  return (
    <>

    <NewPost onBodyChange={bodyChangeHandler} />    
    <ul className={classes.posts}>
    <Post author="Master" body={enteredBody} />
    <Post author="Saif" body="my master is awsome" />
    </ul>

    </>
  )
}

export default PostList;