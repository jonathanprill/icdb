import { LogosSendgridIcon, LogosServeless, LogosRefactor, LogosPuppetIcon, LogosGlitchIcon, LogosTurret } from './components/Icons';

export const SidebarData = [
    {
        title: 'Leaderboard',
        path: '/',
        icon: <LogosRefactor />,
        cName: 'nav-text'
    },
    {
        title: 'School',
        path: '/school',
        icon: <LogosGlitchIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <LogosTurret />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <LogosSendgridIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Connect',
        path: '/connect',
        icon: <LogosPuppetIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <LogosPuppetIcon />,
        cName: 'nav-text'
    }
];