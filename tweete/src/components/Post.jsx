import classes from './post.module.css'

const Post = ({author, body}) => {

  return (
    <center>
    <li className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
    </li>
    </center> 
  )
}

export default Post
