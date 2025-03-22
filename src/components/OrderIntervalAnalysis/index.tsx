import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Card, Row, Col, Popover } from 'antd';
import { motion } from 'framer-motion';
import { BulbOutlined } from '@ant-design/icons';

const OrderIntervalAnalysis: React.FC = () => {
  const scatterOptions = {
    title: {
      text: '不同间隔天数的顾客对应的购买平均金额',
      left: 'center',
      textStyle: {
        color: '#2C3E50',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'axis',
      formatter: function(params: any) {
        return `间隔天数：${params[0].name}<br/>
                购买平均金额：¥${params[0].value}`;
      }
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: ['当天', '1-5', '5-10', '10-15', '15-20', '20以上'],
      name: '间隔天数',
      nameLocation: 'middle',
      nameGap: 30
    },
    yAxis: {
      type: 'value',
      name: '购买平均金额/元',
      nameLocation: 'middle',
      nameGap: 50
    },
    series: [
      {
        type: 'scatter',
        symbolSize: 20,
        data: [2773.42, 2457.21, 2264.10, 2158.32, 2137.45, 2016.78],
        itemStyle: {
          color: '#36CBCB'
        },
        label: {
          show: true,
          position: 'top',
          formatter: '¥{c}'
        }
      }
    ]
  };

  const barOptions = {
    title: {
      text: '不同间隔天数的顾客数量分布',
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
      data: ['当天', '1-5', '5-10', '10-15', '15-20', '20以上'],
      name: '间隔天数',
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
        data: [4892, 5123, 4876, 4789, 4923, 4849],
        type: 'bar',
        itemStyle: {
          color: '#FF8C69'
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
      observation: '最近一次下单的间隔天数分布均衡',
      suggestions: [
        '针对不同购买频率的用户制定个性化营销策略',
        '建立用户购买周期预测模型，提前触达',
        '设计阶梯式的复购激励机制',
        '分析不同购买频率用户的品类偏好，优化推荐'
      ]
    },
    {
      observation: '间隔时间越短，购买平均金额越高',
      suggestions: [
        '对高频购买用户提供专属会员权益',
        '设计连续购买奖励机制，提高复购率',
        '针对高频高额用户开发专属产品',
        '优化高频购买用户的物流配送体验'
      ]
    },
    {
      observation: '应重点关注最近有下单的活跃用户',
      suggestions: [
        '建立活跃用户预警机制，防止流失',
        '为活跃用户提供专属客服服务',
        '开发活跃用户社群，增强用户粘性',
        '通过数据分析，找出提升活跃度的关键因素'
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
      <Card title="下单间隔分析" className="analysis-card">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <ReactECharts option={scatterOptions} style={{ height: '400px' }} />
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

export default OrderIntervalAnalysis; 