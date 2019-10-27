import React, { Component } from 'react';
import { Container, Grid, Divider } from '@material-ui/core';
class Footer extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div style={styles.root}>
                    <Container>
                        <Grid container>
                            <h2>Shoes store online</h2>
                        </Grid>
                        <Divider light />
                        <Grid>
                            <h6>© 2019 Online, Inc. สงวนลิขสิทธิ์</h6>
                        </Grid>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

const styles = {
    root: {
        backgroundColor: '#1b1a20',
        padding: 5,
        color: '#fff'
    }
}

export default Footer;