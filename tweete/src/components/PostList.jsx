import NewPost from "./NewPost"
import Post from "./Post"
import classes from './postList.module.css'

const PostList = () => {
  return (
    <>
    <NewPost />
    
    <ul className={classes.posts}>
    <Post author="Master" body="Adnan is awsome" />
    <Post author="Saif" body="my master is awsome" />
    </ul>
    </>
  )
}

export default PostList