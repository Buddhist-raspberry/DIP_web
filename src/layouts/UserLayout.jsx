import { DefaultFooter, getMenuData, getPageTitle } from '@ant-design/pro-layout';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, SelectLang, useIntl, connect, FormattedMessage } from 'umi';
import React from 'react';
import logo from '../assets/logoLight.svg';
import styles from './UserLayout.less';
import './Layout.css';

const UserLayout = (props) => {
  const {
    route = {
      routes: [],
    },
  } = props;
  const { routes = [] } = route;
  const {
    children,
    location = {
      pathname: '',
    },
  } = props;
  const {} = useIntl();
  const { breadcrumb } = getMenuData(routes);
  const title = getPageTitle({
    pathname: location.pathname,
    breadcrumb,
    ...props,
  });
  return (
    <HelmetProvider>
      <Helmet>
        <title>{'CT扫描分类'}</title>
        <meta name="description" content={'CT扫描分类'} />
      </Helmet>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.top}>
            <div id="container">
              <p>
                <a>CT Classification</a>
              </p>
            </div>
            {/*
            <div className={styles.header}>
             <Link to="/">
               <img alt="logo" className={styles.logo} src={logo} />
               <span className={styles.title}>Ant Design</span>
             </Link>
            </div>
            */}
            {/* <div className={styles.desc}>
              设计先进且稳健的学习模型，将给定的CT扫描分为COVID-19、CAP和正常病例三类。
            </div> */}
          </div>
          {children}
        </div>
        {/*
        <DefaultFooter />
        */}
      </div>
    </HelmetProvider>
  );
};

export default connect(({ settings }) => ({ ...settings }))(UserLayout);
