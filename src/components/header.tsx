import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { styled } from '@mui/material/styles';

import logo104 from '../../public/logo/logo-jonatha-fernandes-1-04.png';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

const LogoLink = styled(Link)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    span: {
        display: 'none'
    },
    [theme.breakpoints.up('md')]: {
        span: {
            display: 'initial',
        }
    }
}));

const LogoImg = styled('img')(({ theme }) => ({
    height: 30,
    marginRight: theme.spacing(1),
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'none'
    },
}));

const NavLinks = styled(Box)(({ theme }) => ({
    boxShadow: 'none',
    display: 'none',
    [theme.breakpoints.up('md')]: {
        display: 'flex',
        flexGrow: 1,
        justifyContent: 'flex-end',
    },
}));

const LinkItem = styled(Link)(({ theme }) => ({
    marginRight: theme.spacing(1),
    padding: '0.5rem',
    fontFamily: 'Manrope, sans-serif',
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    '&:hover': {
        backgroundColor: 'var(--bg-color)',
    },
}));

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#fff', padding: '1rem 0' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0' }}>
                <LogoLink to="/">
                    <LogoImg src={logo104} alt="Jonatha Fernandes - Desenvolvedor Web" />
                    <span>
                        Jonatha Fernandes
                    </span>
                </LogoLink>
                <MenuButton onClick={handleMenuOpen}>
                    <HiOutlineMenuAlt3 color='#212121' />
                </MenuButton>
                <NavLinks>
                    <LinkItem to="/">Home</LinkItem>
                    <LinkItem to="/about">Sobre</LinkItem>
                    <LinkItem to="/stack">Conhecimento</LinkItem>
                    <LinkItem to="/projects">Projetos</LinkItem>
                </NavLinks>
                <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleMenuClose}>
                    <MenuItem onClick={handleMenuClose}>
                        <LinkItem to="/">Home</LinkItem>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <LinkItem to="/about">Sobre</LinkItem>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <LinkItem to="/stack">Conhecimento</LinkItem>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                        <LinkItem to="/projects">Projetos</LinkItem>
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default Header;