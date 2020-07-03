import React from 'react';

// Modules
// --- React Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import LinksList from './LinksList';

const App = () => {
  return (
    <div className="container p-4">
      <div className="row">
        <LinksList />
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
