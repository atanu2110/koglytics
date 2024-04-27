export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    profiling: '/dashboard/profiling',
    reports: '/dashboard/reports',
    rules: '/dashboard/rules',
    glossary: '/dashboard/glossary',
    prepareml: '/dashboard/prepareml',
    lineage: '/dashboard/lineage'
  },
  errors: { notFound: '/errors/not-found' },
} as const;
