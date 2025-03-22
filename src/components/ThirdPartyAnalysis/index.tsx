import React from 'react';
import ReactECharts from 'echarts-for-react';
import { Card, Row, Col, Popover } from 'antd';
import { motion } from 'framer-motion';
import { BulbOutlined } from '@ant-design/icons';

const ThirdPartyAnalysis: React.FC = () => {
  const scatterOptions = {
    title: {
      text: '在第三方购买数量不同的顾客的购买平均金额对比',
      left: 'center',
      textStyle: {
        color: '#2C3E50',
        fontSize: 16
      }
    },
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      name: '第三方购买数量',
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
        data: [2792.15, 2191.21, 2061.44, 1943.64, 1959.52, 1813.65, 1901.99, 1536.84, 1945.1, 1977.62, 1338.17],
        itemStyle: {
          color: '#FF2442'
        },
        label: {
          show: true,
          position: 'top',
          formatter: '¥{c}'
        }
      }
    ]
  };

  const boxplotOptions = {
    title: {
      text: '在第三方购买数量不同的顾客的购买金额',
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
    grid: {
      left: '10%',
      right: '10%',
      bottom: '15%'
    },
    xAxis: {
      type: 'category',
      data: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      name: '第三方购买数量'
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
          [0, 554.577, 1167.371, 2100.507, 11597.9],
          [0, 741.388, 1622.106, 2734.438, 9374.541],
          [0, 760.493, 1554.855, 2541.858, 7974.966],
          [0, 411.99, 951.98, 1820.109, 11597.9]
        ]
      }
    ]
  };

  const analysisItems = [
    {
      observation: '第三方购买用户占比较低',
      suggestions: [
        '加强与第三方平台的合作，扩大品牌曝光',
        '在第三方平台开展专属优惠活动',
        '优化第三方平台的商品展示和描述',
        '分析第三方平台用户的购买决策因素'
      ]
    },
    {
      observation: '第三方购买用户的平均消费金额较高',
      suggestions: [
        '针对高消费用户开发跨平台会员体系',
        '在第三方平台投放高端产品线',
        '为跨平台消费用户提供专属服务',
        '分析高消费用户的跨平台购买行为'
      ]
    },
    {
      observation: '自营平台仍是主要销售渠道',
      suggestions: [
        '持续优化自营平台的用户体验',
        '加强自营平台的品牌建设和营销',
        '开发自营平台独占商品',
        '建立完善的自营平台会员体系'
      ]
    },
    {
      observation: '需要加强全渠道运营策略',
      suggestions: [
        '建立统一的会员权益体系',
        '打通各渠道的用户数据',
        '制定差异化的渠道策略',
        '优化全渠道库存管理和物流配送'
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
      <Card title="第三方购买分析" className="analysis-card">
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <ReactECharts option={scatterOptions} style={{ height: '400px' }} />
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

export default ThirdPartyAnalysis; 