import 'babel-polyfill'
import React from 'react'
import PropTypes from 'prop-types'

const ProductList = (props) => {
	return (
		<div>
			<h1>Product List</h1>
			<ul>
				{props.products && props.products.map(product => {
					return (
						<li key={product.id}>
							{product.name} - {product.brand}
						</li>
					)
				})}
			</ul>
		</div>
	)
}

ProductList.propTypes = {
	products: PropTypes.array.isRequired,
}

export default ProductList