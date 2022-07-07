import { LogosSendgridIcon, LogosRefactor, LogosPuppetIcon, LogosGlitchIcon, LogosTurret } from './components/Icons';

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
        title: 'Compete',
        path: '/compete',
        icon: <LogosTurret />,
        cName: 'nav-text'
    },
    {
        title: 'Connect',
        path: '/connect',
        icon: <LogosPuppetIcon />,
        cName: 'nav-text'
    },
    {
        title: 'Play',
        path: '/play',
        icon: <LogosSendgridIcon />,
        cName: 'nav-text'
    }
];