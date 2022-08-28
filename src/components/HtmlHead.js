import React from "react"

export default function HtmlHead({children}) {
  const content = "Visit Pedram Hajesmaeeli's resume, contact information and recent works."
  const avatar = "https://pedram.es/avatar.jpg"
  return <>
    <title>Pedram Hajesmaeeli</title>
    <link rel="shortcut icon" href="https://pedram.es/favicon.ico"/>

    <meta name="description" content={content}/>
    <meta name="image" content=""/>
    <meta name="twitter:title" content="Pedram Hajesmaeeli"/>
    <meta name="twitter:description" content={content}/>
    <meta name="twitter:image" content={avatar}/>
    <meta name="twitter:card" content="summary_large_image"/>

    <meta property="og:title" content="Pedram Hajesmaeeli"/>
    <meta property="og:description" content={content}/>
    <meta property="og:image" content={avatar}/>
    <meta property="og:url" content="https:/pedram.es"/>
    {children}
  </>
}