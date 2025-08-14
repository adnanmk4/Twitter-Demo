import Post from "./Post"
import classes from './postList.module.css'

const PostList = () => {
  return (
    <ul className={classes.posts}>
    <Post author="Master" body="Adnan is awsome" />
    <Post author="Saif" body="my master is awsome" />
    </ul>
  )
}

export default PostList