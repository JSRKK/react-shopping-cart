import React, { Component } from 'react';
import { Grid, Typography, Divider, Button } from '@material-ui/core';
import { formatPrice } from '../../utils/formatPrice';
class CardProduct extends Component {
    state = {}
    render() {
        const { data, onRemove } = this.props;
        return (
            <React.Fragment>
                <Grid container style={styles.gridContainer} spacing={1}>
                    <Grid item md={2} xs={3}>
                        <img src={data.images[0]} alt={data.title} style={styles.CardMedia} />
                    </Grid>
                    <Grid item md={8} xs={9} container direction="row">
                        <Grid item md={8} xs={8}>
                            <Typography variant="h6" style={styles.title}>
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {data.subTitle}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Quantity: {data.quantity}
                            </Typography>
                            <Typography
                                gutterBottom
                                variant="button"
                                color="textSecondary"
                                component="p"
                                onClick={() => onRemove(data)}
                                style={styles.deleteButton}>
                                ลบสินค้า
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={4}>
                            <Typography variant="h6" style={styles.title}>
                                {formatPrice(data.price, 'THB')}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider light />
            </React.Fragment>
        );
    }
}

const styles = {
    gridContainer: {
        marginTop: 5,
        paddingBottom: 10
    },
    CardMedia: {
        width: '100%',
        height: 128,
        objectFit: 'cover'
    },
    title: {
        fontSize: 'calc(11px + 0.8vw)',
    },
    deleteButton: {
        textDecoration: 'underline',
        cursor: 'pointer'
    }
}

export default CardProduct;