import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = ()=> {
  const pageSize = 6;
  const apiKey=process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0)
 
    return (
      <div>

        <BrowserRouter>

          <NavBar></NavBar>

      <LoadingBar
        color='#f11946'
        progress={progress}
      />
          {/* <News apiKey={apiKey} setProgress={setProgress} key="" pageSize={pageSize} country='in' category='health' ></News> */}
          <Routes>
            <Route path='/' element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country='in' category='general' ></News>} ></Route>
            <Route path='/business' element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={pageSize} country='in' category='business' ></News>} ></Route>
            <Route path='/entertainment' element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={pageSize} country='in' category='entertainment' ></News>} ></Route>
            <Route path='/general' element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={pageSize} country='in' category='general' ></News>} ></Route>
            <Route path='/health' element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={pageSize} country='in' category='health' ></News>} ></Route>
            <Route path='/science' element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={pageSize} country='in' category='science' ></News>} ></Route>
            <Route path='/sports' element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={pageSize} country='in' category='sports' ></News>} ></Route>
            <Route path='/technology' element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={pageSize} country='in' category='technology' ></News>} ></Route>
          </Routes>
        </BrowserRouter>

      </div>
    )
}

export default App

