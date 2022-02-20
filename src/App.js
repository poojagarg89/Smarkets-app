import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorHandleComponent from './components/errorHandleComponent/ErrorHandleComponent';
import Home from './components/home/Home';
import { Provider } from 'react-redux';
import Store from './store/Store';
import HeaderComponent from './common-components/HeaderComponent';
import FooterComponent from './common-components/FooterComponent';
import EventDetailsComponent from './components/home/EventDetailsComponent';

function App() {
  const urlPath = window.location.pathname;
  let isFlag = 0;
  if (urlPath === '/register' || urlPath === '/home' || urlPath === '/' || urlPath === '/subscription') {
    isFlag = 1;
  }
  return (
    <div className="App">
      <HeaderComponent />
      <Provider store={Store}>
        <BrowserRouter>
          {isFlag ? (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/event-details/:id" element={<EventDetailsComponent />} />
            </Routes>
          ) : (
            <Routes>
              <Route path={urlPath} element={<ErrorHandleComponent />} />
            </Routes>
          )}
        </BrowserRouter>
      </Provider>
      <FooterComponent />
    </div>
  );
}

export default App;
