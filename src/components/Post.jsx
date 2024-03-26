function Post(Probs){
    return (
    <div>
        <p>{Probs.author}</p>
        <p>{Probs.body}</p>
    </div>
    );
}

// functions should be exported so that it can beused in other 
// code files as well/ 

export default Post;

//exporting can alos be done automatically usig
    // export function Post(){}