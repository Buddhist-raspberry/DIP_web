import { Button, Card, Input, Form, Row, Col, Modal } from 'antd';
import React, { useState, useMemo, useCallback, useRef, Component } from 'react';
import {
  InfoCircleOutlined,
  ExclamationCircleOutlined,
  PartitionOutlined,
  FrownOutlined,
  SmileOutlined,
} from '@ant-design/icons';
import ProForm, { ProFormUploadDragger } from '@ant-design/pro-form';
import { PageContainer, GridContent } from '@ant-design/pro-layout';
import ProTable from '@ant-design/pro-table';
import ProCard from '@ant-design/pro-card';
import { Link, connect, history, FormattedMessage, formatMessage } from 'umi';
import styles from './style.less';
import App from './App';

const mapStateToProps = ({ covid, loading }) => ({
  result: covid.result
});


const FormItem = Form.Item;
const { TextArea } = Input;
const { confirm } = Modal;
const isUpload = 0;
const data = [
  {
    name: 'P001',
    time: '2020-01-26 17:35',
    result: 'COVID-19',
  },
];

const UploadFile = ({ result, dispatch }) => {
  const [form] = Form.useForm();
  // const actionRef = useRef();
  // const columns = [
  //   {
  //     title: '文件夹名称',
  //     dataIndex: 'name',
  //     valueType: 'textarea',
  //     search: false,
  //     align: 'center',
  //   },
  //   {
  //     title: '上传时间',
  //     dataIndex: 'time',
  //     valueType: 'date',
  //     search: false,
  //     align: 'center',
  //   },
  //   {
  //     title: '分析结果',
  //     dataIndex: 'result',
  //     valueType: 'textarea',
  //     ellipsis: true,
  //     search: false,
  //     align: 'center',
  //   },
  // ];

  const onFinish = values => {
    dispatch({
      type: 'covid/predict',
      payload: { ...values },
    }).then(response => {
      console.log(result);
    });
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  return (
    <GridContent>
      <Row gutter={24}>
        <Col xl={8} lg={8} md={6} sm={4} xs={4} />
        <Col xl={8} lg={8} md={12} sm={16} xs={16}>
            <App />
            <Form
            hideRequiredMark
            form={form}
            name="basic"
            initialValues={{
              public: '1',
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={onValuesChange}
          >
            <FormItem>
              <Button
                type="primary"
                style={{
                  height: 50,
                }}
                ghost
                block
                htmlType="submit"
                icon={<PartitionOutlined />}
              >
                诊断
              </Button>
            </FormItem>
          </Form>
        </Col>
        <Col xl={8} lg={8} md={6} sm={4} xs={4} />
        <Col xl={6} lg={6} md={6} sm={4} xs={4} />
        {/* <Col xl={12} lg={12} md={12} sm={16} xs={16}>
          <div className={styles.root}>
            <ProTable
              style={{
                height: 300,
                marginTop: 30,
                marginBottom: 50,
              }}
              theme="Dark"
              actionRef={actionRef}
              rowKey="name"
              pagination={false}
              toolBarRender={false}
              search={false}
              dataSource={data}
              columns={columns}
            />
          </div>
        </Col> */}
      </Row>
    </GridContent>
  );
};

export default connect(mapStateToProps)(UploadFile);

