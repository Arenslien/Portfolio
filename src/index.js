import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageRouter from './components/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 화면에 보여줘야하는 렌더링할 컴포넌트
  <React.StrictMode>
    <PageRouter>
      <App />
    </PageRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
