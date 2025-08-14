import classes from './post.module.css'

const Post = (props) => {

  return (
    <center>
    <li className={classes.post}>
        <p className={classes.author}>{props.author}</p>
        <p className={classes.text}>{props.body}</p>
    </li>
    </center> 
  )
}

export default Post
