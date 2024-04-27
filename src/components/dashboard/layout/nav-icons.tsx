import type { Icon } from '@phosphor-icons/react/dist/lib/types';
import { ChartPie as ChartPieIcon } from '@phosphor-icons/react/dist/ssr/ChartPie';
import { GearSix as GearSixIcon } from '@phosphor-icons/react/dist/ssr/GearSix';
import { PlugsConnected as PlugsConnectedIcon } from '@phosphor-icons/react/dist/ssr/PlugsConnected';
import { User as UserIcon } from '@phosphor-icons/react/dist/ssr/User';
import { Users as UsersIcon } from '@phosphor-icons/react/dist/ssr/Users';
import { XSquare } from '@phosphor-icons/react/dist/ssr/XSquare';
import { PaperPlaneTilt } from '@phosphor-icons/react/dist/ssr/PaperPlaneTilt';
import { TreeStructure } from '@phosphor-icons/react/dist/ssr/TreeStructure';
import { Database } from '@phosphor-icons/react/dist/ssr/Database';
import { ChartScatter } from '@phosphor-icons/react/dist/ssr/ChartScatter';
 

export const navIcons = {
  'chart-pie': ChartPieIcon,
  'gear-six': GearSixIcon,
  'plugs-connected': PlugsConnectedIcon,
  'x-square': XSquare,
  'schedule-send': PaperPlaneTilt,
  'tree-structure': TreeStructure,
  'database': Database,
  'chartscatter': ChartScatter,
  user: UserIcon,
  users: UsersIcon,
} as Record<string, Icon>;
