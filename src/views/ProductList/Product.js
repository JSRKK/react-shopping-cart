import React from 'react';
import { Card, Typography, CardMedia, CardContent, CardActionArea } from '@material-ui/core';
import { formatPrice } from '../../utils/formatPrice';
import LazyLoad from 'react-lazyload';
const Product = ({ data, onClick }) => {
    return (
        <Card onClick={() => onClick(data.id)}>
            <CardActionArea>
                <LazyLoad throttle={100} offset={100}>
                    <CardMedia
                        style={{ height: 250 }}
                        image={data.images[0]}
                        title={data.title}
                    />
                </LazyLoad>
                <CardContent>
                    <div style={{ display: 'flex', flex: 1 }}>
                        <div style={{ flex: 0.7 }}>
                            <h3
                                style={{
                                    textAlign: 'left',
                                    whiteSpace: 'nowrap',
                                    width: 250,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {data.title}
                            </h3>
                        </div>
                        <div style={{ flex: 0.3 }}>
                            <h3 style={{ textAlign: 'right' }}>{formatPrice(data.price, 'THB')} </h3>
                        </div>
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.subTitle}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card >
    );
}

export default Product;