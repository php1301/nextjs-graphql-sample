import React from "react";
import Head from "next/head";
import styled from "styled-components";
import { Layout } from "antd";

const { Header, Content, Footer } = Layout;

const Container = styled(Content)`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  text-align: center;
`;

type Props = {
  title?: string;
  header?: React.ReactNode;
  children?: React.ReactNode;
  footer?: React.ReactNode;
};

const PageTemplate: React.FunctionComponent<Props> = ({
  title,
  header,
  children,
  footer
}) => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header>{header}</Header>

      <Container>{children}</Container>

      <Footer>{footer}</Footer>
    </Layout>
  );
};

export default PageTemplate;