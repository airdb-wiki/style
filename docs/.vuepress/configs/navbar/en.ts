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
          { text: 'git', link: '/workflow/github/git_branch_manage.md', },
        ],
      },
      {
        text: 'Github',
        children: [
          { text: '开发指南', link: '/workflow/github/new.md', },
          { text: 'github action', link: '/workflow/github/actions.html', },
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
