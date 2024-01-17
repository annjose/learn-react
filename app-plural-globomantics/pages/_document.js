// Content taken from https://nextjs.org/docs/pages/building-your-application/routing/custom-document

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head >
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"></link>
                <link rel="stylesheet" href="styles/globals.css" />
            </Head>
            <body>
                <div className='container'>
                    <Main />
                </div>
                <NextScript />
            </body>
        </Html>
    )
}