import Post from './components/Post';
function App() {
  return <Post />; 
//Componats names here must start with uppercase character(custom coponent)
// elements that start with a lowercase are considered as a efault element and react will try to loook for a
//HTML element withthat name..
}
//makes sence to group related functionality together into different building blocks. 
// building componant forum for post.
export default App;

// function Post can't be used unless we import it from external files