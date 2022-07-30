import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SideNav from '../components/SideNav';
import TopNav from "../components/TopNav";
import Auth from "../utils/auth"
import PlayerInfo from "../components/PlayerInfo"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InboxIcon from '@mui/icons-material/Inbox';
import Link from '@mui/joy/Link';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Dashboard() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <TopNav />
            <SideNav />
            <div style={{ paddingLeft: '400px' }}>
                {
                    Auth.loggedIn() ? (
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab icon={<AccountCircleIcon />} label="Player Info" {...a11yProps(0)} />
                                    <Tab icon={<InboxIcon />} label="Inbox" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                <PlayerInfo />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Item Two
                            </TabPanel>
                        </Box>
                            ) : (
                                <div>
                                    <h3 style={{paddingTop: '100px'}}>User Not Logged In</h3>
                                    <Link sx={{ px: '5px' }} href="/login">Login Here</Link>
                                </div>
                            )
                        }
            </div>
        </>
    );
}

