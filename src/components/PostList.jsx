import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';

function PostList() {
    return (
        <>
        <NewPost />
        <ul className={classes.Postlist}>
            
                <Post author= "Michael" body="React is great"/>
                <Post author= "Jhon" body= "React is awesome"/>
            
        </ul>
        </>
    );
}

export default PostList;