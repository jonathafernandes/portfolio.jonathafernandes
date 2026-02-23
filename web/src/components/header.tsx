import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';

import logo104 from '/logo/logo-jonatha-fernandes-1-04.png';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const linkClasses = "mr-2 p-2 font-sans text-sm font-semibold uppercase md:hover:bg-[var(--bg-color)] text-[var(--text-color)]";

    return (
        <AppBar position="static" className="!bg-white !shadow-none !py-4">
            <Toolbar className="!pt-4 !pb-8 !px-0 border-b-2 border-[var(--details-color)] flex justify-between items-center">
                <Link to="/" className="flex items-center text-[var(--text-color)]">
                    <img src={logo104} alt="Jonatha Fernandes - Desenvolvedor Web" className="h-[30px] mr-2" />
                    <span className="hidden md:inline font-rubik text-lg">
                        Jonatha Fernandes
                    </span>
                </Link>
                <IconButton onClick={handleMenuOpen} className="md:!hidden">
                    <HiOutlineMenuAlt3 color='#212121' />
                </IconButton>
                <Box className="hidden md:flex grow justify-end shadow-none">
                    <Link to="/" className={linkClasses}>Home</Link>
                    <Link to="/about" className={linkClasses}>Sobre</Link>
                    <Link to="/stack" className={linkClasses}>Conhecimento</Link>
                    <Link to="/projects" className={linkClasses}>Projetos</Link>
                </Box>
                <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to="/" className={linkClasses}>Home</Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to="/about" className={linkClasses}>Sobre</Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to="/stack" className={linkClasses}>Conhecimento</Link>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <Link to="/projects" className={linkClasses}>Projetos</Link>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;