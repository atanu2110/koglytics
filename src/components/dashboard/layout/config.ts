import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Overview', href: paths.dashboard.overview, icon: 'chart-pie' },
  // { key: 'customers', title: 'Customers', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: 'Integrations', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  { key: 'profiling', title: 'Profiling', href: paths.dashboard.profiling, icon: 'users' },
  { key: 'rules', title: 'Data Quality Rules', href: paths.dashboard.rules, icon: 'database' },
  { key: 'glossary', title: 'Business Glossary', href: paths.dashboard.glossary, icon: 'database' },
  { key: 'prepareml', title: 'Prepare ML', href: paths.dashboard.prepareml, icon: 'chartscatter' },
  { key: 'lineage', title: 'Lineage', href: paths.dashboard.lineage, icon: 'tree-structure' },
  { key: 'reporting', title: 'Reports', href: paths.dashboard.reports, icon: 'schedule-send' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
