import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/home/Home';
import About from './components/shared/about/About';
import Workers from './components/workers/Workers';
import Nomatch from './components/shared/Nomatch';
import MainNavbar from './components/shared/MainNavbar';
// import Todos from './components/todos/Todos';
// import Notes from './components/notes/Notes';

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/workers' element={<Workers />} />
      {/* <Route path='/:listId/todos' element={<Todos />} />
      <Route path='/:todoId/notes' element={<Notes />} /> */}
      <Route path='/*' element={<Nomatch />} />
    </Routes>
  </>
)

export default App;
