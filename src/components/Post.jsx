import classes from './Post.module.css';
//adding .module garenties a unique fine name and avoid style clashes.
// adding classes From './post' is doing the work of assigning unique names to the css elements in the file

function Post(Probs){
    return (
    <li className= {classes.post}> 
        <p className= {classes.author}>{Probs.author}</p>
        <p className= {classes.text}>{Probs.body}</p>
    </li>
    );
}

// functions should be exported so that it can beused in other 
// code files as well/ 

export default Post;

//exporting can alos be done automatically usig
    // export function Post(){}