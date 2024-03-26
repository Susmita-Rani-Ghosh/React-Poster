const names= ['Learning React.Js is awesome', 'React.Js is Fun', 'Learning React.Js is very easy'];

function Post(){
    const chooseName = Math.random() > 0.7 ? names[0] : (Math.random() > 0.4 ? names[1]: names[2]);
    return (
    <div>
        <p>{chooseName}</p>
        
    </div>
    );
}

// functions should be exported so that it can beused in other 
// code files as well/ 

export default Post;

//exporting can alos be done automatically usig
    // export function Post(){}