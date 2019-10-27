import React from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';
const ProductList = ({ products, onClick }) => {
    return (
        <Grid container spacing={2}>
            {
                products.map((data, index) => {
                    return (
                        <Grid
                            key={index}
                            item
                            md={4}
                            xs={12}>
                            <Product data={data} onClick={onClick} />
                        </Grid>
                    )
                })
            }
        </Grid>
    );
}

export default ProductList;