import PeopleIcon from '@mui/icons-material/People'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'

export const sidebarItems = [
  {
    name: 'Dashboard',
    path: '/',
    icon: <DashboardIcon />,
  },
  {
    name: 'Users',
    path: '/users',
    icon: <PeopleIcon />,
  },
  {
    name: 'Products',
    path: '/products',
    icon: <ProductionQuantityLimitsIcon />,
  },
  {
    name: 'ToDos',
    path: '/todos',
    icon: <FormatListBulletedIcon />,
  },
]
