import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Card, Row, Col, Popover } from 'antd';
import { motion } from 'framer-motion';
import { BulbOutlined } from '@ant-design/icons';

const AgeAnalysis: React.FC = () => {
  const barAndLineOptions = {
    title: {
      text: '不同年龄段的顾客购买平均金额和数量对比',
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
      data: ['20岁以下', '20-24岁', '25-29岁', '30-34岁', '35-39岁', '40-49岁', '50-59岁', '60岁以上'],
      name: '年龄段',
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
        data: [2892.15, 2191.21, 2061.44, 1943.64, 1959.52, 1813.65, 1901.99, 1536.84],
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
        data: [892, 2123, 2876, 2789, 2923, 2849, 1523, 789],
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
      text: '不同年龄段的顾客购买金额分布',
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
      data: ['20岁以下', '20-24岁', '25-29岁', '30-34岁', '35-39岁', '40-49岁', '50-59岁', '60岁以上'],
      name: '年龄段'
    },
    yAxis: {
      type: 'value',
      name: '购买金额/元'
    },
    series: [
      {
        type: 'boxplot',
        data: [
          [0, 982.902, 2014.55, 3653.424, 11597.9],
          [0, 769.61, 1606.445, 2965.096, 11597.9],
          [0, 725.798, 1499.48, 2746.178, 11597.9],
          [0, 676.968, 1408.81, 2621.362, 11597.9],
          [0, 693.5, 1459.31, 2571.995, 11597.9],
          [0, 705.594, 1396.992, 2460.017, 11597.9],
          [0, 733.645, 1442.997, 2466.294, 11597.9],
          [0, 554.577, 1167.371, 2100.507, 11597.9]
        ]
      }
    ]
  };

  const analysisItems = [
    {
      observation: '各年龄段的样本量不均衡，30岁以下的年轻群体样本较少',
      suggestions: [
        '加强年轻用户群体的市场推广和品牌曝光',
        '在年轻人常用的社交平台增加广告投放',
        '开发更多符合年轻人喜好的产品品类',
        '优化产品展示风格，提升对年轻群体的吸引力'
      ]
    },
    {
      observation: '20岁以下的顾客购买金额最高，但样本量较小',
      suggestions: [
        '深入分析低龄高消费群体的购买特征',
        '开发适合年轻消费者的高端产品线',
        '制定针对性的营销策略吸引更多年轻消费者',
        '通过社交媒体建立年轻用户社群'
      ]
    },
    {
      observation: '25-59岁年龄段的顾客购买金额差异不大',
      suggestions: [
        '针对不同年龄段开发差异化的产品系列',
        '根据年龄特征优化推荐算法',
        '设计年龄段专属的会员权益',
        '开展针对性的促销活动提升客单价'
      ]
    },
    {
      observation: '需要注意数据可能存在偏差',
      suggestions: [
        '完善用户信息收集机制',
        '通过多维度数据交叉验证用户画像',
        '建立用户标签体系提高精准度',
        '定期进行用户调研补充数据'
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
      <Card title="年龄段分析" className="analysis-card">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <ReactECharts option={barAndLineOptions} style={{ height: '400px' }} />
          </Col>
          <Col span={24}>
            <ReactECharts option={boxplotOptions} style={{ height: '400px' }} />
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

export default AgeAnalysis; 