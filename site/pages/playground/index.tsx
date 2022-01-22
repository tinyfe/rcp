import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import clsx from '@tinyfe/classnames';
import styles from 'styles/pages.module.scss';

const SiteLayout: NextPage = () => {
  return <div className={clsx(styles['layout-container'])}>321</div>;
};

export default SiteLayout;
