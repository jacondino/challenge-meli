import Head from 'next/head';
import { FC, ReactElement } from 'react';

interface TemplateProps {
  children: ReactElement;
}

export const Template: FC<TemplateProps> = ({ children }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/public/images/favicon.ico" />
        <title>ml-wms</title>
      </Head>
      <div className="app">{children}</div>
    </>
  );
};
