import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppColor from './Appbackgroundcolor';

ReactDOM.render(
  <React.StrictMode>
    <AppColor heading="First Element" color="green" />
    <AppColor heading="Second Element" color="blue" />
    <AppColor heading="Third Element" color="yellow" />
  </React.StrictMode>,
  document.getElementById('root')
);