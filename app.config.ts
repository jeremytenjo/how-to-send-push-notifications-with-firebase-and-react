import getIpAdress from './devtools/utils/node/getIpAdress.js'
import pkg from './package.json'
import themeTokens from './src/theme/tokens/tokens.js'

export default async function appConfig(): Promise<AppConfigTypes> {
  return {
    domain: {
      main: 'https://starter-webapp.vercel.app/',
    },
    manifestJson: {
      gcm_sender_id: '103953800507',
      name: 'how-to-send-push-notifications-with-firebase-and-react',
      short_name: 'how-to-send-push-notifications-with-firebase-and-react',
      description: pkg.description,
      start_url: '/',
      orientation: 'any',
      display: 'standalone',
      theme_color: themeTokens.colors.primary.main,
      background_color: themeTokens.colors.black.main,
      screenshots: [
        {
          src: 'images/manifest/screenshot-create.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-home.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-sync.png',
          sizes: '360x640',
          type: 'image/png',
        },
        {
          src: 'images/manifest/screenshot-edit.png',
          sizes: '360x640',
          type: 'image/png',
        },
      ],
    },
    server: {
      local: {
        port: 3001,
        IPAddress: getIpAdress(),
      },
    },
    theme: {
      tokens: themeTokens,
    },
  }
}

export type AppConfigTypes = {
  manifestJson: {
    name: string
    short_name: string
    description: string
    orientation: string
    display: string
    theme_color: string
    background_color: string
    start_url: string
    gcm_sender_id?: string
    screenshots?: {
      src: string
      sizes: string
      type: string
    }[]
    shortcuts?: {
      name?: string
      short_name?: string
      description?: string
      url?: string
      icons?: {
        src: string
        sizes: string
      }[]
    }[]
  }
  analytics?: {
    google?: {
      measurementId: string
    }
  }
  server: {
    local: {
      port: number
      IPAddress: string | undefined
    }
  }
  theme: {
    tokens: any
  }
  domain: {
    main: string
  }
}
