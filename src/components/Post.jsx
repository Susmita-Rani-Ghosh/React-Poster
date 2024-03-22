const names= ['Maxmillion', 'Manial'];

function Post(){
    return (
    <div>
        <p> Maximilian</p>
        <p>Leanring React.js is awesome!</p>
    </div>
    );
}

// functions should be exported so that it can beused in other 
// code files as well/ 

export default Post;

//exporting can alos be done automatically usig
    // export function Post(){}