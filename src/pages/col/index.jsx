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

const Old = (props) => {
  const { submitting } = props;
  const [form] = Form.useForm();
  const actionRef = useRef();
  const columns = [
    {
      title: '文件夹名称',
      dataIndex: 'name',
      valueType: 'textarea',
      search: false,
      align: 'center',
    },
    {
      title: '上传时间',
      dataIndex: 'time',
      valueType: 'date',
      search: false,
      align: 'center',
    },
    {
      title: '分析结果',
      dataIndex: 'result',
      valueType: 'textarea',
      ellipsis: true,
      search: false,
      align: 'center',
    },
  ];

  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    // eslint-disable-next-line no-console
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = (changedValues) => {
    const { publicType } = changedValues;
    if (publicType) setShowPublicUsers(publicType === '2');
  };

  const getRowClassName = (record, index) => {
    let className = '';
    className = index % 2 === 0 ? styles.oddRow : styles.evenRow;
    return className;
  };

  return (
    <GridContent>
      <Row gutter={24}>
        <Col xl={2} lg={2} md={2} sm={4} xs={4} />
        <Col xl={8} lg={8} md={8} sm={8} xs={16}>
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
            <FormItem
              style={{
                marginTop: 30,
              }}
            >
              <div
                style={{
                  backgroundColor: '#c7ecee',
                }}
              >
                <ProFormUploadDragger
                  max={3}
                  name="CT_File"
                  directory
                  description="请以文件夹形式上传CT切片集"
                  style={{
                    height: 300,
                  }}
                />
              </div>
            </FormItem>
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
                确认
              </Button>
            </FormItem>
          </Form>
        </Col>
        <Col xl={1} lg={1} md={1} sm={2} xs={2} />
        <Col xl={10} lg={10} md={10} sm={10} xs={20}>
          <div className={styles.root}>
            <ProTable
              style={{
                marginLeft: 80,
                height: 300,
                marginTop: 30,
              }}
              rowClassName={getRowClassName}
              actionRef={actionRef}
              rowKey="name"
              pagination={false}
              toolBarRender={false}
              search={false}
              dataSource={data}
              columns={columns}
            />
          </div>
        </Col>
      </Row>
    </GridContent>
  );
};

export default Old;
