import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

import tokens from '../theme/tokens/tokens'
import setMuiDocumentData from '../theme/mui/setMuiDocumentData'
// import GoogleAnalytics from '../lib/components/analytics/GoogleAnalytics/GoogleAnalytics'

type DocumentProps = {
  emotionStyleTags: any
}

export default class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html lang='en'>
        <Head>
        {/* <GoogleAnalytics
            measurementId=''
          /> */}

          {/* PWA primary color */}
          <meta name='theme-color' content={tokens.colors.themeColor} />
          <link rel='icon' type='image/svg+xml' href='/images/logo/logo.svg' />

          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => setMuiDocumentData(ctx, Document)
