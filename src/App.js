import NotePage from './pages/NotePage';
import Header from './components/Header';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NoteList from './pages/NoteList';


const App=()=>{
  return (
    <Router>
    <div className='w-3/5 bg-gray-700 shadow-md items-center justify-center mx-auto mt-12 rounded-md'>
      <Header/>
      <Routes>
        <Route path='/' element={<NotePage/>}/>
        <Route path='/new' element={<NoteList/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
