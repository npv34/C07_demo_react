import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux"
import {useEffect} from "react";
const categories = [
    {
        id: 'Build',
        children: [
            {
                id: 'Authentication',
                icon: <PeopleIcon />,
                active: true,
            },
            { id: 'Database', icon: <DnsRoundedIcon />, url: "" },
            { id: 'Storage', icon: <PermMediaOutlinedIcon />, url: "" },
            { id: 'Hosting', icon: <PublicIcon /> , url: ""},
            { id: 'Tasks', icon: <SettingsEthernetIcon />, url: "tasks" },
            {
                id: 'Users',
                icon: <SettingsInputComponentIcon />,
                url: "users"
            },
        ],
    },
    // {
    //     id: 'Quality',
    //     children: [
    //         { id: 'Analytics', icon: <SettingsIcon /> },
    //         { id: 'Performance', icon: <TimerIcon /> },
    //         { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    //     ],
    // },
];

const item = {
    py: '2px',
    px: 3,
    color: 'rgba(255, 255, 255, 0.7)',
    '&:hover, &:focus': {
        bgcolor: 'rgba(255, 255, 255, 0.08)',
    },
};

const itemCategory = {
    boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
    py: 1.5,
    px: 3,
};

export default function Navigator(props) {
    const { ...other } = props;

    const auth = useSelector(state => state.auth)

    useEffect(() => {
        console.log(auth)
    }, []);

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
                    Paperbase
                </ListItem>
                <ListItem sx={{ ...item, ...itemCategory }}>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>{auth.username}</ListItemText>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <Box key={id} sx={{ bgcolor: '#101F33' }}>

                        <ListItem sx={{ py: 2, px: 3 }}>
                            <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
                        </ListItem>

                        {children.map(({ id: childId, url,  icon, active }) => (
                            <ListItem disablePadding key={childId}>
                                <Link to={url}>
                                    <ListItemButton selected={active} sx={item}>
                                        <ListItemIcon>{icon}</ListItemIcon>
                                        <ListItemText>{childId}</ListItemText>
                                    </ListItemButton>
                                </Link>

                            </ListItem>
                        ))}
                        <Divider sx={{ mt: 2 }} />
                    </Box>
                ))}
            </List>
        </Drawer>
    );
}