import React, { Component } from 'react';
import HeaderNav from './HeaderNav';
import ProductList from '../ProductList';
import { Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { fetchProducts } from '../../stores/shelf/actions';
import { updateSort } from '../../stores/sort/actions';
class Home extends Component {

    componentDidMount() {
        this.fetchProducts(this.props.sort);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.sort !== this.props.sort) {
            this.fetchProducts(nextProps.sort);
        }
    }

    fetchProducts = (sort) => {
        this.props.fetchProducts(sort, () =>
            console.log("fetch products success!")
        )
    }

    handleClick = (id) => {
        this.props.history.push(`/product-detail/${id}`);
    }

    handleSort = (sortBy) => {
        this.props.updateSort(sortBy);
    }

    render() {
        const { products, loading } = this.props;

        if (loading) {
            return null;
        }
        return (
            <React.Fragment>
                <HeaderNav onSort={this.handleSort} />
                <Container>
                    <ProductList
                        products={products}
                        onClick={this.handleClick} />
                </Container>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    products: state.shelf.products,
    sort: state.sort.sortType,
    loading: state.shelf.loading,
})

export default connect(mapStateToProps, { fetchProducts, updateSort })(Home);