import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>HRMNest Documentation</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="" />
      <meta property="og:description" content="Nurture Your Most Valuable ASSET" />
    </>
      ),
      useNextSeoProps() {
        return {
          titleTemplate: '%s – HRMNest Documentation'
        }
      },
      footer: {
        text: (
          <span>
             {new Date().getFullYear()} © {' '}
            <a href="https://docs.hrmnest.com/" target="_blank">
               HRMNest Documentation
            </a>
            .
          </span>
        )
      }

 
}

export default config
