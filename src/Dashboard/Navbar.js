import { useState } from 'react';
import { Group } from '@mantine/core';
import {
    IconSettings,
    Icon2fa,
    IconDatabaseImport,
    IconReceipt2,
} from '@tabler/icons-react';
import VectorJp from '../images/Vector.png';
import Logo from '../images/logo.png'; // Replace './logo.png' with the path to your logo image
import classes from './Navbar.module.css';

const data = [
    { link: '', label: 'Dashboard', icon: IconReceipt2 },
    { link: '', label: 'Subscribers', icon: IconDatabaseImport },
    { link: '', label: 'Users', icon: Icon2fa},
    { link: '', label: 'Alerts', icon: IconSettings },
];

export default function Navbar() {
    const [active, setActive] = useState(data[0].label); // Initialize active state with the label of the first item
  
    const links = data.map((item) => (
        <a
            className={classes.link}
            data-active={item.label === active || undefined}
            href={item.link}
            key={item.label}
            onClick={(event) => {
                event.preventDefault();
                setActive(item.label);
            }}
        >
            <item.icon className={classes.linkIcon} stroke={1.5} />
            <span>{item.label}</span>
        </a>
    ));

    return (
        <nav className={classes.navbar}>
            <div className={classes.navbarMain}>
                <Group className={classes.header} justify="space-between">
                    <img src={VectorJp} className={classes.iconWd} alt="vector" />
                    <h5 className="sub-head">Super Admin</h5>
                </Group>
                {links}
            </div>
            <div className={classes.footer}>
                <a href="#" className={classes.link} onClick={(event) => event.preventDefault()}>
                    <img src={Logo} className={classes.logoWd} alt="logo" />
                </a>
            </div>
        </nav>
    );
}
