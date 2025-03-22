import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Card, Row, Col, Popover } from 'antd';
import { motion } from 'framer-motion';
import { BulbOutlined } from '@ant-design/icons';

const LifecycleAnalysis: React.FC = () => {
  const boxplotOptions = {
    title: {
      text: '不同生命周期的顾客的购买金额',
      left: 'center',
      textStyle: {
        color: '#2C3E50',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return `${params.name}<br/>
                最大值：¥${params.data[4]}<br/>
                上四分位：¥${params.data[3]}<br/>
                中位数：¥${params.data[2]}<br/>
                下四分位：¥${params.data[1]}<br/>
                最小值：¥${params.data[0]}`;
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C'],
      name: '生命周期',
      nameLocation: 'middle',
      nameGap: 30
    },
    yAxis: {
      type: 'value',
      name: '购买金额/元',
      nameLocation: 'middle',
      nameGap: 50
    },
    series: [
      {
        name: '购买金额分布',
        type: 'boxplot',
        data: [
          [0, 843.05, 1877.59, 3569.81, 11597.9],
          [0, 812.06, 1755.38, 3243.10, 11597.9],
          [0, 758.49, 1583.95, 2939.26, 11597.9]
        ],
        itemStyle: {
          color: '#FF8C69',
          borderColor: '#FF2442'
        }
      }
    ]
  };

  const barOptions = {
    title: {
      text: '不同生命周期的顾客数量分布',
      left: 'center',
      textStyle: {
        color: '#2C3E50',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      data: ['A', 'B', 'C'],
      name: '生命周期',
      nameLocation: 'middle',
      nameGap: 30
    },
    yAxis: {
      type: 'value',
      name: '用户数量',
      nameLocation: 'middle',
      nameGap: 50
    },
    series: [
      {
        data: [8234, 9876, 11342],
        type: 'bar',
        itemStyle: {
          color: '#36CBCB'
        },
        label: {
          show: true,
          position: 'top'
        }
      }
    ]
  };

  const analysisItems = [
    {
      observation: '注册两年内的顾客人数远高于注册一年内和半年内的用户',
      suggestions: [
        '分析用户增长的主要渠道，加大投入',
        '优化新用户注册流程，提高转化率',
        '开展老用户推荐计划，提高用户裂变',
        '针对不同时期注册的用户制定差异化运营策略'
      ]
    },
    {
      observation: '生命周期在6个月内的顾客购买力较强',
      suggestions: [
        '针对新用户提供专属优惠和权益',
        '设计新用户成长体系，鼓励持续消费',
        '加强新用户引导和服务体验',
        '分析高消费新用户的购买特征，优化产品推荐'
      ]
    },
    {
      observation: '存在大量注册后未活跃的休眠用户',
      suggestions: [
        '对休眠用户进行分层，制定针对性的唤醒策略',
        '通过个性化推送和优惠券激活休眠用户',
        '开展节日特惠活动，吸引休眠用户回归',
        '分析用户流失原因，优化产品和服务'
      ]
    }
  ];

  const SuggestionContent = ({ suggestions }: { suggestions: string[] }) => (
    <div className="suggestion-popover">
      <h4>改进建议</h4>
      <ul>
        {suggestions.map((suggestion, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {suggestion}
          </motion.li>
        ))}
      </ul>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card title="生命周期分析" className="analysis-card">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <ReactECharts option={boxplotOptions} style={{ height: '400px' }} />
          </Col>
          <Col span={24}>
            <ReactECharts option={barOptions} style={{ height: '400px' }} />
          </Col>
          <Col span={24}>
            <div className="analysis-content">
              <h3>分析结论</h3>
              <ul>
                {analysisItems.map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="analysis-item"
                    whileHover={{ x: 10 }}
                  >
                    <span>{item.observation}</span>
                    <Popover 
                      content={<SuggestionContent suggestions={item.suggestions} />}
                      title={null}
                      trigger="click"
                      placement="right"
                      overlayClassName="suggestion-popover-overlay"
                    >
                      <BulbOutlined className="suggestion-icon" />
                    </Popover>
                  </motion.li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
};

export default LifecycleAnalysis;