import React, { useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import { Card, Row, Col, Statistic, Collapse, Popover } from 'antd';
import { motion } from 'framer-motion';
import { CaretRightOutlined, BulbOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const GenderAnalysis: React.FC = () => {
  const barAndLineOptions = {
    title: {
      text: '不同性别的顾客购买平均金额和数量对比',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['购买平均金额', '用户数量'],
      top: 30
    },
    xAxis: {
      type: 'category',
      data: ['女性', '男性'],
      name: '性别'
    },
    yAxis: [
      {
        type: 'value',
        name: '购买平均金额(元)',
        position: 'left'
      },
      {
        type: 'value',
        name: '用户数量',
        position: 'right'
      }
    ],
    series: [
      {
        name: '购买平均金额',
        type: 'bar',
        data: [1798.3, 2377.88],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#FF2442' },
            { offset: 1, color: '#FF8C69' }
          ])
        },
        label: {
          show: true,
          position: 'top',
          formatter: '¥{c}'
        }
      },
      {
        name: '用户数量',
        type: 'line',
        yAxisIndex: 1,
        data: [5723, 11729],
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

  const pieOptions = {
    title: {
      text: '用户性别分布',
      left: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        type: 'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: true,
          formatter: '{b}\n{c}人\n{d}%'
        },
        data: [
          { value: 5723, name: '女性', itemStyle: { color: '#FF2442' } },
          { value: 11729, name: '男性', itemStyle: { color: '#36CBCB' } }
        ]
      }
    ]
  };

  const analysisItems = [
    {
      observation: `男女用户比例不均衡，男性占比 ${((11729/(11729+5723))*100).toFixed(1)}%`,
      suggestions: [
        '开展女性专属营销活动，如美妆、服饰等品类的专属优惠',
        '优化产品展示和描述，增加对女性用户的吸引力',
        '在社交媒体平台加大面向女性用户的推广力度',
        '开发更多适合女性用户的产品品类'
      ]
    },
    {
      observation: '男性用户平均消费金额高于女性用户约 ¥579.58',
      suggestions: [
        '分析男性用户的主要购买品类，扩充相关产品线',
        '针对高消费男性用户开展会员积分活动',
        '优化男性用户常购品类的推荐算法',
        '开发男性用户专属的限量版产品'
      ]
    },
    {
      observation: '女性市场具有较大发展潜力',
      suggestions: [
        '进行女性用户需求调研，了解购物痛点',
        '开发女性用户感兴趣的新品类',
        '优化用户界面，提升女性用户的购物体验',
        '建立女性用户社群，增强用户粘性'
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
      <Card title="性别分析" className="analysis-card">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <ReactECharts option={barAndLineOptions} style={{ height: '400px' }} />
          </Col>
          <Col span={24}>
            <ReactECharts option={pieOptions} style={{ height: '400px' }} />
          </Col>
          <Col span={24}>
            <div className="analysis-content">
              <Row gutter={24}>
                <Col span={8}>
                  <Statistic 
                    title="男性平均消费" 
                    value={2377.88} 
                    precision={2} 
                    prefix="¥"
                  />
                </Col>
                <Col span={8}>
                  <Statistic 
                    title="女性平均消费" 
                    value={1798.30} 
                    precision={2} 
                    prefix="¥"
                  />
                </Col>
                <Col span={8}>
                  <Statistic 
                    title="男女比例" 
                    value={((11729/5723)).toFixed(2)} 
                    suffix=":1"
                  />
                </Col>
              </Row>
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

export default GenderAnalysis; 