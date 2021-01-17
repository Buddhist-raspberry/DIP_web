import { Button, Card, DatePicker, Input, Form, InputNumber, Radio, Select, Tooltip, Modal,Row,Col } from 'antd'
import ProForm, { ProFormUploadDragger } from '@ant-design/pro-form'
import React, { Component, Suspense } from 'react'
import { PageContainer,GridContent } from '@ant-design/pro-layout'
import { connect,Link, history } from 'umi'
import { InfoCircleOutlined,ExclamationCircleOutlined } from '@ant-design/icons'
import { EllipsisOutlined } from '@ant-design/icons';

const desc = "新型冠状病毒病--2019(COVID-19)自2019年底首次出现以来，极大地改变了世界，影响了现代生活的多个方面。据世界卫生组织（WHO）统计，截至2020年12月，已有200多个国家确诊COVID-19阳性病例，导致超过6500万例病例和150万例报告死亡病例。考虑到统计数字和影响，以及如果不及时隔离/治疗感染病例，COVID-19很容易传播，敏感和可获得的诊断系统非常重要。"

class Homepage extends Component {
  render(){
    return (
      <GridContent>
        <React.Fragment>
          <Row
            gutter={24}
            style={{
              marginTop: 24,
            }}
          >
            <Col xl={2} lg={4} md={4} sm={4} xs={4}/>
            <Col xl={10} lg={20} md={20} sm={20} xs={20}>
              <Suspense fallback={null}>
                <h2 style={{color:"#fff"}}>{desc}</h2>
              </Suspense>
            </Col>
            <Col xl={1} lg={2} md={2} sm={2} xs={2}/>
            <Col xl={10} lg={20} md={20} sm={20} xs={20}>
              <Suspense fallback={null}>
                <img src="./covid.jpg"/>
                <Link to="/upload">去上传图像</Link>
              </Suspense>
            </Col>
          </Row>
        </React.Fragment>
      </GridContent>
    )
  }
}
export default Homepage;