import {useState} from 'react';
import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';

function PostList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState(''); //state variable to store the author name

    function bodyChnageHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChnageHandler(event){
        setEnteredAuthor(event.target.value);
    }
    return (
        <>
        <NewPost onBodyChange = {bodyChnageHandler} onAuthorChange = {authorChnageHandler}/>
        <ul className={classes.Postlist}>
            
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author= "Jhon" body= "React is Fun!"/>
            
        </ul>
        </>
    );
}

export default PostList;

// Lifiting the State Up. If we have state that's maniputed in componat A but needed in componant B, we should lift up the state 1 componant that that has access to both componants. here that 1 Majic state Is PostList. -> NewPost and Post
