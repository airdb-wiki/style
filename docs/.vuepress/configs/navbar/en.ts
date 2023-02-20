import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Home',
    link: 'https://airdb.wiki',
  },
  {
    text: 'Workflow',
    children: [
      {
        text: 'Base',
        children: [
          { text: 'git', link: '/workflow/github/README.md', },
        ],
      },
      {
        text: 'Github',
        children: [
          { text: 'github fork', link: '/workflow/github/fork.md', },
          { text: 'github action', link: '/workflow/github_action.html', },
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
          '/coding/README.md',
        ],
      },
      {
        text: 'Python',
        children: [
          '/coding/README.md',
        ],
      },
      {
        text: 'Flutter',
        children: [
          '/coding/README.md',
        ],
      },
      {
        text: 'Markdown',
        children: [
          '/coding/README.md',
        ],
      },
    ],
  },
  {
    text: 'Desgin',
    children: [
      {
        text: 'DDD',
        children: [
          '/desgin/README.md',
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
