import classes from './PostList.module.css';
import Post from './Post';

function PostList() {
    return (
        <ul className={classes.Postlist}>
            
                <Post author= "Michael" body="React is great"/>
                <Post author= "Jhon" body= "React is awesome"/>
            
        </ul>
    );
}

export default PostList;