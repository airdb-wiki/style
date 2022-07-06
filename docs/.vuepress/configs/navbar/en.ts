import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Home',
    link: 'https://airdb.wiki',
  },
  {
    text: 'Docs',
    children: [
      {
        text: 'git',
        children: [
          { text: 'CLI', link: '/reference/cli.html', },
        ],
      },
    ],
  },
  {
    text: 'Program',
    children: [
      {
        text: 'Overall',
        children: [
          '/coding/README.md',
        ],
      },
      {
        text: 'Golang',
        children: [
          '/coding/golang.md',
        ],
      },
      {
        text: 'Vue',
        children: [
          '/reference/plugin/pwa.md',
          '/reference/plugin/pwa-popup.md',
        ],
      },
    ],
  },
  {
    text: 'APM',
    children: [
      {
        text: 'Prometheus',
        children: [
          '/contributing.md',
        ],
      },
    ],
  },
]
