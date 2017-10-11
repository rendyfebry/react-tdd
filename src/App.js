import 'babel-polyfill'
import React, { Component } from 'react'
import ProductList from './components/ProductList'

class App extends Component {
	constructor(props) {
		super(props)
		this.handleProductSelect = this.handleProductSelect.bind(this)
		this.state = {
			selectedProducts: [],
			products: [
				{ id: 1, name: 'Airmax 90', brand: 'Nike' },
				{ id: 2, name: 'Yeezy', brand: 'Adidas' },
				{ id: 3, name: 'Classic', brand: 'Reebok' },
			]
		}
	}

	handleProductSelect(product) {
		this.setState({
			selectedProducts: [...this.state.selectedProducts, product]
		})
	}

	render() {
		return (
			<div>
				<ProductList
					products={this.state.products}
					onProductSelect={this.handleProductSelect}
				/>
			</div>
		);
	}
}

export default App
