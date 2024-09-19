import React from 'react';
import {Route,Link,Routes} from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';
import './App.css';
import "antd/dist/reset.css"

import {Navbar,Cryptocurrencies,CryptoDetails,Homepage} from './components'

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage/>}/>
               
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                
              <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
              
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  );
}

export default App;
