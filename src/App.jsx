import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import {useState} from 'react';
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false); //default is modalIsVisitble = true

  function showModalHandler() {
    setModalIsVisible(true)
  }
  function hideModalHandler() {
    setModalIsVisible(false);
}
  return (
    <>
      <MainHeader onCreatePost= {showModalHandler}/>
      <main>
          <PostList isPosting={modalIsVisible}
          onStopPosting = {hideModalHandler}/>
      </main>
    </>
  ); 

//Componats names here must start with uppercase character(custom coponent)
// elements that start with a lowercase are considered as a efault element and react will try to loook for a
//HTML element withthat name..
}
//makes sence to group related functionality together into different building blocks. 
// building componant forum for post.
export default App;

// function Post can't be used unless we import it from external files