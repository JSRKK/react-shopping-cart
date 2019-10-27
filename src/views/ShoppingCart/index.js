import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCart } from '../../stores/cart/actions';
import { Container, Grid, Typography, } from '@material-ui/core';
import CardProduct from './cardProduct';
import CardTotal from './cardTotal';
import { LoginDialog } from '../../components';
class ShoppingCart extends Component {
    state = {
        openDialog: false
    }
    handleRemoveProduct = (product) => {
        const { cartProducts, updateCart } = this.props;

        const index = cartProducts.findIndex(cp => cp.id === parseInt(product.id));
        if (index >= 0) {
            cartProducts.splice(index, 1);
            updateCart(cartProducts);
        }
    }

    handleCheckout = () => {
        this.setState({ openDialog: true });
    }

    handleCloseDialog = () => {
        this.setState({ openDialog: false });
    }

    render() {
        const { cartProducts, total } = this.props;
        const { openDialog } = this.state;
        return (
            <React.Fragment >
                <Container>
                    <Typography variant="h6">
                        ตะกร้า
                    </Typography>
                    {
                        cartProducts.length > 0 ?
                            <Grid container spacing={2}>
                                <Grid item md={8} xs={12}>
                                    {
                                        cartProducts.map(product => {
                                            return (
                                                <CardProduct
                                                    key={product.id}
                                                    data={product}
                                                    onRemove={this.handleRemoveProduct}
                                                />
                                            )
                                        })
                                    }
                                </Grid>
                                <Grid item md={4} xs={12}>
                                    <CardTotal
                                        data={total}
                                        onCheckOut={this.handleCheckout} />
                                </Grid>
                            </Grid>
                            :
                            <Grid container direction="row" ailgnitems="center" justify="center">
                                <Typography variant="h5" color="textSecondary">
                                    ไม่มีสินค้าในตะกร้า
                                    </Typography>
                            </Grid>
                    }
                    <LoginDialog
                        open={openDialog}
                        onClose={this.handleCloseDialog}
                    />
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    cartProducts: state.cart.products,
    total: state.cart.total
})

export default connect(mapStateToProps, { updateCart })(ShoppingCart);