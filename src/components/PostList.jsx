import Modal from './Modal.jsx';
import {useState} from 'react';
import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';


function PostList({isPosting, onStopPosting}) {
    const [posts, setPost]= useState([]);
    // this list must be edited whenever the user adds a new post
    //here is the function for adding a new post
    function addPostHandler(postData) {
        setPost((existingPost) => [postData, ...existingPost]); //... = spread operator. used to spread any existing array of posts in our new post. So that any existing post isn't lost
        //postData is the new post we want to add
        //if new state depends on old state then you should be using the function from to update the state value
        // newPost is the 1st element of the array
    }
    return (
        <>
            {/* adding Overlay using Modal.jsx */}
            {/* the children props reffere to the conant that is wrapped by the opening and closing tag of custom componant(Modal) -->newPost */}
            {/* A ternary expression : same as modelIsVisible == ture*/}
            {isPosting && (
                <Modal onClose= {onStopPosting}>
                    <NewPost 
                        onCalcel = {onStopPosting}
                        onAddPost = {addPostHandler}
                    />
                </Modal> 
            ) } 
            
            <ul className={classes.posts}>
                {posts.map((post) => <Post key = {post.body} author = {post.author} body = {post.body}/>)}

                {/* react requires that each elemnt that we add to the list must have a unique key property.
                It makes it easier for react to update the dom.
                we can use the key={post.body} to give each post a unique key.(for now) */}

                {/*  every single posts is maped in to Post JSX element. 
                all element of the new posts was transfroms into a new value on Post*/}
            </ul>
        </>
    );
}

export default PostList;
// to submit a modal , i want to close the modal and i want to sve the information insurted on the modal into A NewPost(By adding them to my lsit of posts)
// Lifiting the State Up. If we have state that's maniputed in componat A but needed in componant B, we should lift up the state 1 componant that that has access to both componants. here that 1 Majic state Is PostList. -> NewPost and Post


// alternative ways to check Modal COnditionally
// let modalContent;
// if(modalIsVisible){
//     modalContent = (
//         <Modal onClose= {hideModalHandler}>
//                 <NewPost 
//                 onBodyChange = {bodyChnageHandler} 
//                 onAuthorChange = {authorChnageHandler}
//                 />
//         </Modal> 
//     )
// }
// return(
//     {modalContent}
// )