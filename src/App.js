import './App.css';
import Blog from './Blogs/Blogs/Blog';
import Increments from './Increments/Increments/Increments';
import Nav from './navbar/Nav/Nav';
import Post from './Post/Post/Post';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Blog></Blog>
      <Increments></Increments>
      <Post></Post>
      <p>Hello from practice</p>
    </div>
  );
}

export default App;
