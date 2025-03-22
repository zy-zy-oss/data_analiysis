import React from 'react';
import { Layout, Row, Col } from 'antd';
import GenderAnalysis from './components/GenderAnalysis';
import LifecycleAnalysis from './components/LifecycleAnalysis';
import OrderIntervalAnalysis from './components/OrderIntervalAnalysis';
import ThirdPartyAnalysis from './components/ThirdPartyAnalysis';
import SolutionSummary from './components/SolutionSummary';
import AgeAnalysis from './components/AgeAnalysis';
import ActivityAnalysis from './components/ActivityAnalysis';

import './App.css';

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="layout">
      <Header>
        <h1 style={{ color: '#fff', margin: 0 }}>小红书销售额增长方案分析</h1>
      </Header>
      <Content>
        <div className="dashboard-grid">
          <div className="grid-item">
            <GenderAnalysis />
          </div>
          <div className="grid-item">
            <AgeAnalysis />
          </div>
          <div className="grid-item">
            <LifecycleAnalysis />
          </div>
          <div className="grid-item">
            <ActivityAnalysis />
          </div>
          <div className="grid-item">
            <OrderIntervalAnalysis />
          </div>
          <div className="grid-item">
            <ThirdPartyAnalysis />
          </div>
          <div className="grid-item grid-item-full">
            <SolutionSummary />
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default App;