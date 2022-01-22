import 'styles/globals.scss';
import Head from 'next/head';
import Link from 'next/link';
import type { AppProps } from 'next/app';
import styles from 'styles/pages.module.scss';
import type { NextPage } from 'next';
import { Layout, Menu } from 'antd';
import { ApiTwoTone } from '@ant-design/icons';
import { useRouter } from 'next/router';
import clsx from '@tinyfe/classnames';
import React from 'react';

const suffix = [
  // TODO: github info
  {
    key: 'star',
    href: 'https://github.com/Rain120/lerna-quick-start',
    children: (
      <img
        src="https://img.shields.io/github/stars/Rain120/lerna-quick-start?style=social"
        alt=""
      />
    ),
  },
  {
    key: 'repo',
    href: 'https://github.com/Rain120/lerna-quick-start',
    children: 'Github',
  },
];

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const subMenus = [
  // TODO: Menu
  {
    label: 'Demo',
    value: 'demo',
    href: '/playground/demo',
  },
];

const SiteLayout: NextPage = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles['layout-container']}>
      <Head>
        <title>Playground</title>
        <meta name="description" content="Playground" />
        <link rel="icon" href="/logo.svg" />
      </Head>

      <Layout className={styles.wrapper}>
        <Layout>
          <Sider width={200}>
            {/* TODO: Menu set */}
            <Menu
              className={clsx(styles['sider-menu'])}
              mode={'inline'}
              defaultSelectedKeys={['demo']}
              defaultOpenKeys={['menu']}
            >
              <SubMenu
                key={'menu'}
                icon={<ApiTwoTone style={{ fontSize: '16px' }} />}
                title={'Menu'}
              >
                {subMenus.map(({ value, label, href }) => {
                  return (
                    <Menu.Item
                      key={value}
                      onChange={e => {
                        e.stopPropagation();
                        router.push(href);
                      }}
                    >
                      <Link href={href}>{label}</Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout className={clsx(styles['layout'])}>
            <Content className={clsx(styles['layout-content'])}>{children}</Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

function App({ Component, pageProps, router }: AppProps) {
  const { route } = router;
  const root = route === '/';

  return (
    <React.Fragment key={'_app'}>
      <Head>
        <title>Lerna Quick Start</title>
        <meta name="description" content="Lerna Quick Start" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header className={styles['header']}>
        <div className={styles['header-prefix']}>
          <Link href={'/'}>Lerna Quick Start</Link>
        </div>
        <div className={styles['header-suffix']}>
          {suffix.map(item => {
            return (
              <a
                key={item.key}
                href={item.href}
                target={'_blank'}
                className={styles['item-suffix']}
              >
                {item.children}
              </a>
            );
          })}
        </div>
      </Header>

      {root ? (
        <Component {...pageProps} />
      ) : (
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      )}
    </React.Fragment>
  );
}
export default App;
