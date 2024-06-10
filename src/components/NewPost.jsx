//import {useState} from 'react'; // a react hook.  all useXYZ are react hooks
import classes from './NewPost.module.css';
import {useState} from 'react';

//in this newPost we want to listen to keyStores in the Text area
//To do this we will set up an event listener
function NewPost({ onCalcel}){
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState(''); //state variable to store the author name


    function bodyChnageHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChnageHandler(event){
        setEnteredAuthor(event.target.value);
    }
    // function for when the form is submitted
    function submitHandler(event){
        event.preventDefault(); //this prevents the browser default of generating and sending and http 
        //request to the server
        const postData  = {
            body: enteredBody,
            author: enteredAuthor
        };
        console.log(postData)
        onCalcel();// to close the modal on submit. 
        //oncancle is a prop that receives a function as a value hence we can call it.
    }// we could also show client side velidation here and 
    //update some state to show error message if invalid data was entered.

    //Lifting state up
    return(
        <form className={classes.form} onSubmit= {submitHandler}> 
            <p>
                <label htmlFor="body">Text</label>
                <textarea  id="body" required rows={3} onChange={bodyChnageHandler} /> 
            </p>
            
            <p>
                <label htmlFor="name">Your name</label>
                <input type="text" id ="name" required onChange = {authorChnageHandler}/>
            </p>
            <p className = {classes.actions}>
                <button type = "button" onClick={onCalcel}>Cancle</button>
                <button>Submit</button>
            </p>
        </form>
    );
}

export default NewPost;

//onSubmit event listner on form element:
///*to listen to the default submit event*/
//React Event Listener notes:
/*By default the FUnction NewPost is only executed once. Which means react only keeps a snapshot of our enterBody 
value in the reurn statement at the time of first render.

even if we call the event listener multiple times. this will only keep the last value.

so we have to create this enterBody variable in a special way using this special Feature of react, called useState. 
*/

/*React Hooks notes:
useState is a react hook.
useState('') create an instant state with a value of ''.
useState() returns an array with two elements. The first element is the current state value and the second element 
is a function that allows us to update the state value. 
stateData[0] // stores the current valye of the variable
stateData[1] // updates the state value. we pass in the new value of the variable.
As a result we have a new value of the state variable in the return statement.

As a result our NewPost() function will be executed once again and 
    **Only the the things that are different will be re-rendered in the UI.**/


    //const [enteredBody, setnteredBody] = useState('');  //regested a state
    // in Vallina javascript- Event Listener looks like this
    // document.querySelector('textarea').addEventListener('change', function () {});

    // in React we can do this by adding a Property to the area where we want to listen.
        //e.g.: onKeyDown or onChnage
    // Function to be used for onChnage event lister