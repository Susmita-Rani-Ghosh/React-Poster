import classes from './NewPost.module.css';
//in this newPost we want to listen to keyStores in the Text area
//To do this we will set up an event listener
function NewPost() {
    // in Vallina javascript- Event Listener looks like this
    // document.querySelector('textarea').addEventListener('change', function () {});

    // in React we can do this by adding a Property to the area where we want to listen.
        //e.g.: onKeyDown or onChnage
    // Function to be used for onChnage event lister
    function changeBodyHandler(event) { //this function will be executed evenever a key is pressed on the event listener.
        console.log(event.target.value);
    }

    return(
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea  id="body" required rows={3} onChnage={changeBodyHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id ="name" required />
            </p>
        </form>
    );
}

export default NewPost;