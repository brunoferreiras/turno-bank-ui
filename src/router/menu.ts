export interface NavItem {
  title: string
  icon?: string
  to?: string
}

export const customerMenu: NavItem[] = [
  {
    title: 'Balance',
    icon: 'mdi-scale-balance',
    to: '/balance',
  },
  {
    title: 'Incomes',
    icon: 'mdi-arrow-up',
    to: '/incomes',
  },
  {
    title: 'Expenses',
    icon: 'mdi-arrow-down',
    to: '/expenses',
  },
  {
    title: 'Checks',
    icon: 'mdi-card-bulleted',
    to: '/checks',
  },
  {
    title: 'Notifications',
    icon: 'mdi-bell',
    to: '/notifications',
  },
  {
    title: 'Profile',
    icon: 'mdi-account',
    to: '/profile',
  },
  {
    title: 'Settings',
    icon: 'mdi-cog',
    to: '/settings',
  },
  {
    title: 'Help',
    icon: 'mdi-help-circle',
    to: '/help',
  },
]

export const adminMenu: NavItem[] = [
  {
    title: 'Checks Control',
    icon: 'mdi-card-bulleted',
    to: '/checks-control',
  },
  {
    title: 'Profile',
    icon: 'mdi-account',
    to: '/profile',
  },
  {
    title: 'Settings',
    icon: 'mdi-cog',
    to: '/settings',
  },
  {
    title: 'Help',
    icon: 'mdi-help-circle',
    to: '/help',
  },
]
