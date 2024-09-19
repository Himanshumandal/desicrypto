import React from 'react'
import millify from 'millify';
import { Typography,Row,Col,Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';

const {Title}=Typography;

const Homepage = () => {

    const {data, isFetching}=useGetCryptosQuery(10);
    const globalStats= data?.data?.stats;

    if(isFetching) return 'Loading...';

    // console.log(data);
    



  return (
   <div style={{textAlign:"center"}}>
   <Title level={2} className="heading" style={{textAlign:"center"}}>Global Crypto Stats</Title>
      <Row gutter={[32, 32]}>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap:" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>

      <div className='home-heading-container'style={{borderTop:"2px solid ", marginTop:"2rem"}}>
        <Title level={2} className='home-title' style={{textAlign:"center"}}>Top 10  Cryptocurrencies in the world</Title>

        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show more</Link>  </Title>
      </div>
      <Cryptocurrencies simplified/>

   </div>
  )
}

export default Homepage;
