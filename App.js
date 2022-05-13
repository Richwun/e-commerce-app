import React, {useState} from 'react';
import Nav from './Nav';
import './App.css';

import ItemPage from './ItemPage';
import {items} from '</static-data';

const App = () => {
  const [activeTab, setActiveTab] = useState('items');


  return (
    <div className="App">
      <Nav activeTab={activeTab} onTabChange={setActiveTab}/>
      <main className="App-content">
        <Content tab={activeTab}/>
      </main>
  </div>
  );
};

const Content = ({tab}) => {
  switch (tab) {
    case 'items':
      // return <span>the items</span>; used as a placeholder
      return <ItemPage items={items}/>;
    case 'cart':
      return <span>the cart</span>;
    default:
      break;
  }
};

export default App;
