import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Guide',
    link: '/guide/',
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
        text: 'Golang',
        children: [
          '/reference/plugin/pwa.md',
          '/reference/plugin/pwa-popup.md',
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
