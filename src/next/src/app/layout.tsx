'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Nextjs",
//   description: "BFF Boilerplate NEXTJS",
// };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const menu = [{ text: 'Home', link: '/' }, { text: 'Counter', link: '/counter' }, { text: 'Posts', link: '/posts' }, { text: 'Continents', link: '/continents' }, { text: 'User', link: '/user' }]
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => { setIsOpen(x => !x) };

  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>

          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar variant="dense">
                <IconButton size="large" onClick={handleClick} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                  <MenuIcon />
                </IconButton>
                <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                  Microscope.Boilerplate.React
                </Typography>
                <Button color="inherit">AD</Button>
              </Toolbar>
            </AppBar>
          </Box>

          <Drawer PaperProps={{ style: { width: 240 } }} anchor="left" variant="persistent" open={isOpen}>
            <List>
              {menu.map((item, index) => (
                <Link href={item.link}>
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Drawer>

          <div>
            {children}
          </div>

        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
