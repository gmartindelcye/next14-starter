"use client";
import { useState } from 'react';
import NavLink from './navLink/navLink';
import styles from './links.module.css'

const links = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Blog',
        path: '/blog'
    }
];
const Links = () => {   

    const [open, setOpen] = useState(false);

    // TEMPORARY
    const session = true;
    const isAdmin = true;

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) => (
                    <NavLink item={link} key={link.title} />
                ))}
                {session ? (
                    <>
                    {
                        isAdmin && <NavLink item={{title: 'Admin', path: '/admin'}} />}
                        <button className={styles.logout}>Logout</button>
                    </>
                ) : (
                    <NavLink item={{title: 'Login', path: '/login'}} />
                )
                }
            </div>
            <button className={styles.menuButton} onClick={() => setOpen(!open)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link => (
                        <NavLink item={link} key={link.title} />
                    )))}
                </div>
            }
        </div>
    )
  };

  export default Links;