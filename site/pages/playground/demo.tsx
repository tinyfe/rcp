import React, { FC } from 'react';
import Head from 'next/head';
import clsx from '@tinyfe/classnames';
import styles from 'styles/pages.module.scss';

export interface JsonToTypescriptProps {}

const JsonToTypescript: FC<JsonToTypescriptProps> = props => {
  return (
    <div className={styles['layout-container']}>
      <h1 className={styles['demo-title']}>Demo</h1>
    </div>
  );
};

export default JsonToTypescript;
