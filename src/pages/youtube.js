import React from 'react'
import Layout from "../layout/Layout";
import HtmlHead from "../components/HtmlHead";

export default function medium() {
  return <Layout>
    <div className="text-center">
      <div className="alert alert-success" role="alert" style={{margin: '20px'}}>
        My Youtube videos will appear here.
      </div>
    </div>
  </Layout>
}

export const Head = () => <HtmlHead/>
