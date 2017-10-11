import 'babel-polyfill'
import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() });

import ProductList from './ProductList'

let wrapper, mockProducts, mockProductSelect

beforeEach(() => {
	mockProducts = [
		{ id: 1, name: 'Mock Product 1', brand: 'Brand 1' },
		{ id: 2, name: 'Mock Product 2', brand: 'Brand 2' },
		{ id: 3, name: 'Mock Product 3', brand: 'Brand 3' },
	]
	mockProductSelect = jest.fn()
	wrapper = shallow(<ProductList products={mockProducts} onProductSelect={mockProductSelect} />)
})


test('render <ProductList />', () => {
	expect(wrapper).toBeDefined()
})


test('product list should have list of product as <li>', () => {
	expect(wrapper.find('li').length).toEqual(mockProducts.length)
})


test('ProductList shoud have product name', () => {
	const firstElement = wrapper.find('li').first()
	expect(firstElement.contains(mockProducts[0].name)).toEqual(true)
})


test('ProductList shoud have product brand', () => {
	const lastElement = wrapper.find('li').last()
	expect(lastElement.contains(mockProducts[2].brand)).toEqual(true)
})

test('should call props.onProductSelect when user click product li', () => {
	const firstElement = wrapper.find('li').first()
	expect(mockProductSelect.mock.calls.length).toEqual(0)

	firstElement.simulate('click')
	expect(mockProductSelect.mock.calls.length).toEqual(1)
	expect(mockProductSelect.mock.calls[0][0]).toEqual(mockProducts[0])
})