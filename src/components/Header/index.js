import React, { Component } from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router'
import { AppBar, Toolbar, InputBase, Typography, Button, IconButton, Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LoginDialog from '../LoginDialog';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    textButton: {
        flexGrow: 1,
    },
    title: {
        fontSize: 14,
        [theme.breakpoints.up('sm')]: {
            fontSize: 18,
            display: 'block',
        },
    },
    search: {
        display: 'none',
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: 120,
            '&:focus': {
                width: 200,
            },
        },
    },
    searchButton: {
        display: 'block',
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    }
});

const StyledBadge1 = withStyles(theme => ({
    badge: {
        right: -3,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}))(Badge);

class Header extends Component {
    state = {
        open: false
    }

    handleOpenLoginDialog = () => {
        this.setState({ open: true });
    }

    handleCloseLoginDialog = () => {
        this.setState({ open: false });
    }

    navigateTo = (route) => {
        this.props.history.push(route)
    }

    render() {
        const { classes, cartProducts } = this.props;
        const { open } = this.state;
        return (
            <div className={classes.root}>
                <AppBar color="inherit">
                    <Toolbar>
                        <div className={classes.textButton} >
                            <Button onClick={() => this.navigateTo("/")}>
                                <Typography variant="h6" className={classes.title}>
                                    Shoes store
                                </Typography>
                            </Button>
                        </div>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="ค้นหา…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.searchButton}>
                            <IconButton aria-label="search-btn">
                                <SearchIcon />
                            </IconButton>
                        </div>
                        <div>
                            <Button color="inherit" onClick={this.handleOpenLoginDialog}>Login</Button>
                            <IconButton aria-label="cart" onClick={() => this.navigateTo('/shopping-cart')}>
                                <StyledBadge1 badgeContent={cartProducts.length} color="error">
                                    <ShoppingCartIcon />
                                </StyledBadge1>
                            </IconButton>

                        </div>
                    </Toolbar>
                    <LoginDialog
                        open={open}
                        onClose={this.handleCloseLoginDialog} />
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    cartProducts: state.cart.products
})

export default connect(mapStateToProps, {})(withStyles(styles)(withRouter(Header)));