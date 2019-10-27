import React, { Component } from 'react';
import { DialogTitle, DialogContent, DialogActions, Slide, Dialog, Button, Grid, Typography } from "@material-ui/core";
import { formatPrice } from '../../utils/formatPrice';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class AddProductDialog extends Component {
    componentWillUnmount() {
        if (this.dismissTimeoutId) clearTimeout(this.dismissTimeoutId)
    }
    render() {
        const { product, open } = this.props;
        if (!open) {
            return null;
        }

        this.dismissTimeoutId = setTimeout(this.props.handleDismiss, 5000)
        return (
            <div>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    fullWidth
                    maxWidth="xs"
                >
                    <DialogTitle id="alert-dialog-slide-title">เพิ่มในตะกร้าแล้ว</DialogTitle>
                    <DialogContent>
                        <Grid container spacing={1}>
                            <Grid item md={4} xs={4}>
                                <img src={product.images[0]} alt={product.title} style={styles.CardMedia} />
                            </Grid>
                            <Grid item md={8} xs={8}>
                                <Typography noWrap>
                                    {product.title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {product.subTitle}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {formatPrice(product.price, 'THB')}
                                </Typography>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.navigateTo}>
                            เปิดตะกร้า
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const styles = {
    CardMedia: {
        width: '100%',
        height: 128,
        objectFit: 'cover'
    }
}
export default AddProductDialog;