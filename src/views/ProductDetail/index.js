import React, { Component } from 'react';
import { Container, Grid, CardMedia } from '@material-ui/core';
import ProductService from '../../services/ProductService';
import AddProductDialog from './addProductDialog';
import { connect } from 'react-redux';
import { updateCart } from '../../stores/cart/actions';
import { formatPrice } from '../../utils/formatPrice';
import { BootstrapButton } from '../../components';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            data: null,
            dialogVisibled: false,
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if (id) {
            this.setState({ id }, this.getProduct);

        } else {
            this.props.history.goBack();
        }
    }

    getProduct = () => {
        const data = ProductService.getProductById(this.state.id);
        this.setState({ data });
    }

    addProduct = product => {
        const { cartProducts, updateCart } = this.props;
        let productAlreadyInCart = false;

        cartProducts.forEach(cp => {
            if (cp.id === product.id) {
                cp.quantity += product.quantity;
                productAlreadyInCart = true;
            }
        });

        if (!productAlreadyInCart) {
            cartProducts.push({ ...product });
        }
        updateCart(cartProducts);
        this.handleOpenDialog();
    }


    handleOpenDialog = () => {
        this.setState({ dialogVisibled: true });
    }

    handleDismissDialog = () => {
        this.setState({ dialogVisibled: false });
    }

    navigateToShoppingCart = () => {
        this.props.history.push("/shopping-cart")
    }

    render() {
        const { data, dialogVisibled } = this.state;
        const { classes } = this.props;
        if (!data) {
            return null
        }

        return (
            <Container >
                <Grid container direction="row" style={styles.root}>
                    <Grid item md={8} container direction="row" spacing={1} style={styles.container}>
                        {data.images.map((img, index) => {
                            return (
                                <Grid item key={index} md={6} xs={12}>
                                    <LazyLoad throttle={100} offset={100}>
                                        <CardMedia
                                            style={{ height: 450 }}
                                            image={img}
                                            title={data.title}
                                        />
                                    </LazyLoad>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <Grid item md={4}>
                        <Container>
                            <Grid container>
                                <Grid item xs={8} container justify="flex-start">
                                    <h4>{data.subTitle}</h4>
                                </Grid>
                                <Grid item xs={4} container justify="flex-end" >
                                    <h4>{formatPrice(data.price, 'THB')}</h4>
                                </Grid>
                            </Grid>
                            <Grid container>
                                <h2 style={{ textAlign: 'left' }}>{data.title}</h2>
                            </Grid>
                            <Grid container>
                                <p style={{ textAlign: 'left' }}>{data.impression}</p>
                            </Grid>
                            <Grid item>
                                <BootstrapButton
                                    style={{ width: '100%' }}
                                    onClick={() => this.addProduct(data)}
                                >
                                    เพิ่มในตะกร้า
                                </BootstrapButton>
                            </Grid>
                        </Container>
                    </Grid>
                </Grid>
                <AddProductDialog
                    open={dialogVisibled}
                    product={data}
                    handleDismiss={this.handleDismissDialog}
                    navigateTo={this.navigateToShoppingCart} />
            </Container>
        );
    }
}

const styles = theme => ({
    root: {
        isplay: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    container: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
    },
    carousel: {
        display: 'inline-block',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        },
    }
})

const mapStateToProps = state => ({
    cartProducts: state.cart.products
})

export default connect(mapStateToProps, { updateCart })(withStyles(styles)(ProductDetail));