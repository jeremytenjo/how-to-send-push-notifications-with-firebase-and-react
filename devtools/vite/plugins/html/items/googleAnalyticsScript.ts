import { PayloadTypes } from '../../../vite'

export default function googleAnalyticsScript({ appConfig, isDevMode }: PayloadTypes) {
  return appConfig?.analytics?.google?.measurementId
    ? `
     <!-- Global site tag (gtag.js) - Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=${
       appConfig.analytics.google.measurementId
     }"></script>
     <script>
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());  
       gtag('config', '${appConfig.analytics.google.measurementId}', { 'debug_mode': ${
        isDevMode ? 'true' : 'false'
      } });
     </script>`
    : ''
}
