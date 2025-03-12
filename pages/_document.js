import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name='topic' content='Events in the Town of Gilbert' />
        <meta name='author' content='Bret Feddern' />
        <meta name='robots' content='index, follow' />
        <meta name='googlebot' content='index, follow' /> 
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' /> 
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <link rel='profile' href='https://schema.org/' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel="stylesheet" href="/styles/townofgilbert.css" />
        <link rel="stylesheet" href="/styles/gilbertevents.css" />
      </Head>
      <body id='page-top' className='front_end_body'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
