import { LogosSendgridIcon, LogosRefactor, LogosPuppetIcon, LogosGlitchIcon, LogosTurret } from './Icons';

export const SidebarData = [
    {
        title: 'Connect',
        path: '/connect',
        icon: <LogosPuppetIcon />,
        cName: 'nav-text'
    },
    {
        title: 'School',
        path: '/school',
        icon: <LogosGlitchIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Compete',
        path: '/compete',
        icon: <LogosTurret />,
        cName: 'nav-text'
    },
    {
        title: 'Play',
        path: '/play',
        icon: <LogosSendgridIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Leaderboard',
        path: '/leaderboard',
        icon: <LogosRefactor />,
        cName: 'nav-text'
    }
];