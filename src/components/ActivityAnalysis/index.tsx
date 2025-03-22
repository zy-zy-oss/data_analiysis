import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Card, Row, Col, Statistic, Popover } from 'antd';
import { motion } from 'framer-motion';
import { BulbOutlined } from '@ant-design/icons';

const ActivityAnalysis: React.FC = () => {
  const barAndLineOptions = {
    title: {
      text: '是否参与重点活动的顾客的购买平均金额和数量对比',
      left: 'center',
      textStyle: {
        color: '#2C3E50',
        fontSize: 16
      }
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
      data: ['未参与', '已参与'],
      name: '活动参与情况',
      nameLocation: 'middle',
      nameGap: 30
    },
    yAxis: [
      {
        type: 'value',
        name: '购买平均金额/元',
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
        data: [2377.88, 1798.30],
        itemStyle: {
          color: '#FF8C69'
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
        data: [11729, 5723],
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

  const boxplotOptions = {
    title: {
      text: '是否参与重点活动的顾客的购买金额分布',
      left: 'center',
      textStyle: {
        color: '#2C3E50',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function(params: any) {
        return `${params.name}<br/>
                最大值：¥${params.data[4]}<br/>
                上四分位：¥${params.data[3]}<br/>
                中位数：¥${params.data[2]}<br/>
                下四分位：¥${params.data[1]}<br/>
                最小值：¥${params.data[0]}`;
      }
    },
    xAxis: {
      type: 'category',
      data: ['未参与', '已参与'],
      name: '活动参与情况'
    },
    yAxis: {
      type: 'value',
      name: '购买金额/元'
    },
    series: [
      {
        type: 'boxplot',
        data: [
          [0, 843.05, 1877.59, 3569.81, 11597.9],
          [0, 758.49, 1583.95, 2939.26, 11597.9]
        ],
        itemStyle: {
          color: '#FF8C69',
          borderColor: '#FF2442'
        }
      }
    ]
  };

  const analysisItems = [
    {
      observation: '有无参加活动的样本量不均衡，参加活动的人数偏少',
      suggestions: [
        '优化活动设计，提高参与度和吸引力',
        '加强活动宣传和推广力度',
        '简化活动参与流程，降低参与门槛',
        '分析用户不参与活动的原因并改进'
      ]
    },
    {
      observation: '未参与活动的顾客消费金额略高',
      suggestions: [
        '针对高消费用户设计专属活动',
        '分析高消费用户的消费特征和需求',
        '优化活动奖励机制，提高高消费用户参与度',
        '开发高端用户专属权益体系'
      ]
    },
    {
      observation: '活动参与度较低，需要提高活动吸引力',
      suggestions: [
        '创新活动形式，增加互动性和趣味性',
        '提供更有价值的活动奖励',
        '利用社交传播扩大活动影响力',
        '建立活动效果评估体系持续优化'
      ]
    },
    {
      observation: '参与活动用户的消费分布更加集中',
      suggestions: [
        '针对不同消费层级设计差异化活动',
        '建立会员分层运营体系',
        '优化活动规则，提升用户体验',
        '加强活动数据分析，精准营销'
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
      <Card title="活动参与分析" className="analysis-card">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <ReactECharts option={barAndLineOptions} style={{ height: '400px' }} />
          </Col>
          <Col span={24}>
            <ReactECharts option={boxplotOptions} style={{ height: '400px' }} />
          </Col>
          <Col span={24}>
            <div className="analysis-content">
              <Row gutter={24}>
                <Col span={8}>
                  <Statistic 
                    title="未参与活动用户" 
                    value={11729}
                    suffix="人"
                  />
                </Col>
                <Col span={8}>
                  <Statistic 
                    title="参与活动用户" 
                    value={5723}
                    suffix="人"
                  />
                </Col>
                <Col span={8}>
                  <Statistic 
                    title="参与率" 
                    value={((5723/(11729+5723))*100).toFixed(1)}
                    suffix="%"
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

export default ActivityAnalysis; 