import React from 'react';
import { Card, Timeline, Row, Col } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const SolutionSummary: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card title="销售额增长解决方案" className="analysis-card solution-card">
        <Row gutter={24}>
          <Col span={12}>
            <Timeline mode="alternate">
              <Timeline.Item>
                <h3>方案一：女性市场开发</h3>
                <p>针对女性用户开展专属营销活动</p>
              </Timeline.Item>
              <Timeline.Item>
                <h3>方案二：休眠用户激活</h3>
                <p>针对注册两年内且半年内没有下单的顾客加大推送力度</p>
              </Timeline.Item>
              <Timeline.Item>
                <h3>方案三：高频用户维护</h3>
                <p>向最近一次下单间隔时间短的顾客加大推送力度</p>
              </Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                <h3>方案四：自营商品优化</h3>
                <p>向没有在第三方购买的顾客提高推送力度</p>
              </Timeline.Item>
            </Timeline>
          </Col>
          <Col span={12}>
            <div className="analysis-content">
              <h3>实施步骤</h3>
              <ul>
                <motion.li whileHover={{ x: 10 }}>
                  确定目标和量化指标
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  计算各个方案的投资回报(ROI)
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  选出投资回报最高的方案
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  开展A/B测试验证
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  分析结果并持续优化
                </motion.li>
              </ul>
              <h3>注意事项</h3>
              <ul>
                <motion.li whileHover={{ x: 10 }}>
                  用户的年龄和性别是注册时自定义的，与真实情况可能存在偏差
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  数据样本中未提供地区、收入水平、职业、购物偏好等顾客属性
                </motion.li>
                <motion.li whileHover={{ x: 10 }}>
                  解决方案的实施需要结合企业实际情况进行调整
                </motion.li>
              </ul>
            </div>
          </Col>
        </Row>
      </Card>
    </motion.div>
  );
};

export default SolutionSummary; 