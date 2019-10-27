import React, { Component } from 'react';
import { Typography, Button, Popper, Grow, ClickAwayListener, MenuList, MenuItem, Paper } from '@material-ui/core';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const sortBy = [
    { value: 'lowestprice', label: 'ต่ำ-สูง' },
    { value: 'highestprice', label: 'สูง-ต่ำ' }
  ];
const HeaderNav = ({ onSort }) => {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const prevOpen = React.useRef(open);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    }

    const handleSelectItem = (op) => {
        onSort(op.value);
        setOpen(false);
    }

    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div style={styles.root}>
            <div style={styles.container}>
                <div style={{ flexGrow: 1 }}>
                    <Typography variant="h6">
                        สินค้าทั้งหมด
                    </Typography>
                </div>
                <div>
                    <Button endIcon={<FilterListIcon />}>
                        ตัวกรอง
                    </Button>
                    <Button
                        ref={anchorRef}
                        endIcon={<ExpandMoreIcon />}
                        onClick={handleToggle}
                    >
                        เรียงตาม
                    </Button>
                    <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper id="menu-list-grow">
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open}>
                                            {
                                                sortBy.map((op, index) => {
                                                    return (
                                                        <MenuItem key={index} onClick={() => handleSelectItem(op)}>{op.label}</MenuItem>
                                                    )
                                                })
                                            }
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        </div>
    );
}


const styles = {
    root: {
        position: '-webkit - sticky',
        position: 'sticky',
        top: 60,
        marginBottom: 10,
        height: 70,
        backgroundColor: '#fff',
        zIndex: 9
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingLeft: 30,
        paddingRight: 30,
    }
}
export default HeaderNav;