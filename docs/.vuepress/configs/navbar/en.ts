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
        text: 'Lang',
        children: [
          '/coding/lang/principle.md',
          '/coding/lang/golang.md',
          '/coding/lang/vue.md',
          '/coding/lang/python.md',
          '/coding/lang/flutter.md',
          '/coding/lang/markdown.md',
        ],
      },
      {
        text: 'Defensive Programing',
        children: [
          '/coding/defensive-programming.md',
        ],
      },
      {
        text: 'Security',
        children: [
          '/coding/sec.md',
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
