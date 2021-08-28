import React from 'react';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import IconButton from '@material-ui/core/IconButton';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MenuIcon from '@material-ui/icons/Menu';
import Accordion from '@material-ui/core/Accordion';
import Drawer from '@material-ui/core/Drawer';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
    bgWhite: {
        background: 'white'
    },
    logowidth: {
        width: '258px'
    },
    text: {
        fontSize: '18px',
        lineHeight: '24px',
        color: '#31333B',
        letterSpacing: '-0.2px',
    },
    button: {
        padding: '12px 34px',
        color: '#FFFFFF',
        background: '#11C856',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08), 0px 8px 16px rgba(0, 0, 0, 0.04)',
        borderRadius: '28px',
        marginLeft: '38px',
        "&:hover": {
            color: '#31333B'
        }
    },
    menu: {
        textTransform: 'capitalize',
        fontFamily: 'D-DIN Regular',
        position: 'relative',
        marginRight: '50px',
        "& .MuiTouchRipple-root": {
            display: 'none',
        },
        "&:after": {
            position: 'absolute',
            top: '50%',
            right: '-14px',
            content: "''",
            border: 'solid black',
            borderWidth: '0 1px 1px 0',
            width: '5px',
            height: '5px',
            transform: 'rotate(45deg) translateY(-50%)'
        }
    },
    menu2: {
        textTransform: 'capitalize',
        "& .MuiTouchRipple-root": {
            display: 'none',
        },
    },
    mobilenavelist: {
        width: 350,
    },
    mobilelistitem: {
        padding: theme.spacing(1, 1.5)
    },
    accordion: {
        marginTop: 0,
    }
}));

export default function DesktopHeader(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [mobilelist, setMobileList] = React.useState(false)
    const [expanded, setExpanded] = React.useState(false)
    const anchorRef = React.useRef(null);
    const anchorRef2 = React.useRef(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const toggleDrawer = (mobilelist) => (e) => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }
        setMobileList(mobilelist)
    }

    const handleToggle = (e) => {
        if (e.target.parentElement.id === 'anchorRef') {
            setOpen2(false);
            setOpen((preopen) => !preopen);
        }
        if (e.target.parentElement.id === 'anchorRef2') {
            setOpen(false);
            setOpen2((open2) => !open2);
        }
    };
    
    const handleClose = (event) => {
        if ((anchorRef.current && anchorRef.current.contains(event.target)) || (anchorRef2.current && anchorRef2.current.contains(event.target))) {
        return;
        }
        setOpen(false);
        setOpen2(false)
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
            setOpen2(false)
        }
    }
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);
    return (
        <React.Fragment>
            <Toolbar className={`justify-between bg-blue-100 py-7 ${classes.bgWhite}`}>
                <Box className="">
                    <Box
                        component="img"
                        src="/img/logo.svg"
                        className={`cursor-pointer ${classes.logowidth}`}
                    />
                </Box>
                <Box className="hidden xl:flex">
                    <Button
                        id="anchorRef"
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className={`${classes.menu} ${classes.text}`}
                    >
                        For Merchants
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={handleClose}>For Merchants</MenuItem>
                                <MenuItem onClick={handleClose}>For Merchants</MenuItem>
                                <MenuItem onClick={handleClose}>For Merchants</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                    <Button
                        id="anchorRef2"
                        ref={anchorRef2}
                        aria-controls={open2 ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        className={`${classes.menu} ${classes.text}`}
                    >
                        For Drivers & Shoppers
                    </Button>
                    <Popper open={open2} anchorEl={anchorRef2.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={handleClose}>For Drivers & Shoppers</MenuItem>
                                <MenuItem onClick={handleClose}>For Drivers & Shoppers</MenuItem>
                                <MenuItem onClick={handleClose}>For Drivers & Shoppers</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                        </Grow>
                    )}
                    </Popper>
                    <Button
                        className={`${classes.text} ${classes.menu2}`}
                    >
                        How marketplace Works
                    </Button>
                </Box>
                <Box className="hidden xl:flex">
                    <Button
                        className={`${classes.text} ${classes.menu2} focus:outline-none`}
                        href="/login"
                    >
                        Login
                    </Button>
                    <Button
                        className={`${classes.text} ${classes.menu2} ${classes.button}`}
                        href="/signup"
                    >
                        Get Started
                    </Button>
                </Box>
                <Box className={`xl:hidden`} onClick={toggleDrawer(true)}>
                    <IconButton className={`focus:outline-none`}>
                        <MenuIcon className={classes.text} />
                    </IconButton>
                </Box>
                <Drawer anchor="left" open={mobilelist} onClose={toggleDrawer(false)}>
                    <Box
                        className={classes.mobilenavelist}
                        onKeyDown={toggleDrawer(false)}
                    >
                        <Accordion
                            className={classes.accordion}
                            expanded={expanded === 'panel1'}
                            onChange={handleChange('panel1')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.text}>
                                    For Merchants
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className={`flex-col`}>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none" className={classes.text}>
                                        For Merchants
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none" className={classes.text}>
                                        For Merchants
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none" className={classes.text}>
                                        For Merchants
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.accordion}
                            expanded={expanded === 'panel2'}
                            onChange={handleChange('panel2')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.text}>
                                    For Drivers & Shoppers
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className={`flex-col`}>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none" className={classes.text}>
                                        For Drivers & Shoppers
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none" className={classes.text}>
                                        For Drivers & Shoppers
                                    </Link>
                                </Typography>
                                <Typography className={classes.mobilelistitem}>
                                    <Link href="#" underline="none" className={classes.text}>
                                        For Drivers & Shoppers
                                    </Link>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className={classes.accordion}
                            expanded={expanded === 'panel3'}
                            onChange={handleChange('panel3')}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                            >
                                <Typography className={classes.text}>
                                    How marketplace Works
                                </Typography>
                            </AccordionSummary>
                        </Accordion>
                    </Box>
                </Drawer>
            </Toolbar>
        </React.Fragment>
    );
}
