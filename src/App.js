import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../src/Components/style1.css"
import Create from "../src/Components/Create"
import Home from './Components/Home';
import ReadData from '../src/Components/ReadData'
import Update from './Components/Update';
import FullReview from './Components/FullReview';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/read' element={<ReadData />}></Route>
        <Route path='/update' element={<Update />}></Route>
        <Route path='/readfullreview' element={<FullReview />}></Route>
        
      </Routes>
    </BrowserRouter>

  );
}

export default App;
