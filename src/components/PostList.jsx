import Modal from './Modal.jsx';
import {useState, useEffect} from 'react';
import classes from './PostList.module.css';
import Post from './Post';
import NewPost from './NewPost';


function PostList({isPosting, onStopPosting}) {
    // fetch('http://localhost:8080/posts').then(response => response.json()).then(data => {
    //     setPosts(data.posts);
    // } );
     //sent a get request to get all the previous posts
    // Now we have to update our posts here whenever we geta  response from the server

//the code above is a common problem in react . it causes an infinite loop. bcz when we update the satte the componant
//function(PostList) get's executed again to update the UI. however if the PostList function get's executed again the 
// the fetch request get's send again. Hence this causes an infinite loop. 
//             **** It has another Hook that we can Use . useEffect hook *******
//     useEffect wraps side effects in react.
    const [posts, setPost]= useState([]);
    // this list must be edited whenever the user adds a new post
    //here is the function for adding a new post

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/posts')
            const resData = await response.json();
            setPost(resData.posts); //posts get's updated here
        } 
        //this extra function is created because useEffect takes a function that should not return a promise 
        //itself but should instread return nothing or a cleanup function.

        fetchPosts();

    }, []); 
    // useEffect does not return anything, it h=takes a function {}, and an array[]

    //        *** Why is useEffect used? and why isn't it causing an infinite loop?***
    // useEffect function doesn't get executed all the time, it only get's executed when the dependencies defined in the array changes.
    // if no dependencies are defined then react will only execute it once when the componant PostsList is frist rendered. it's never called again 
    function addPostHandler(postData) {

        fetch('http://localhost:8080/posts', {
            method: 'POST', //by default it is GET. so we have to chnage it to POST
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json'
            }
        }); 
        //we use a /posts extension because in our backend code we have a '/posts' where we expect a .post request if we wan tot store the data.Modal
        //we send a request to this url or domail to sent data

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
            {posts.length >0 && (<ul className={classes.posts}>
                {posts.map((post) => <Post key = {post.body} author = {post.author} body = {post.body}/>)}

                {/* react requires that each elemnt that we add to the list must have a unique key property.
                It makes it easier for react to update the dom.
                we can use the key={post.body} to give each post a unique key.(for now) */}

                {/*  every single posts is maped in to Post JSX element. 
                all element of the new posts was transfroms into a new value on Post*/}
            </ul>)}
            {posts.length == 0 && (
                <div style = {{textAlign: 'center', color: 'while'}}>
                    <h2>There is not posts yet.</h2>
                    <p>Start adding some!</p>
                </div>)}
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