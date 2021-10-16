import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';

const Individual = () => {
	const [stock, setStock] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await fetch('http://localhost:5000/stocks/agg');
		const body = await response.json();
		console.log(body);
		// let gotSum = 0;
		// let totalInvestment = 0;
		// let gotInvestment = 0;
		for (let i = 0; i < body.data.length; i++) {
			var stockData = body.data[i];
			// console.log('stock' + stock);
			console.log(body.data[i]._id);
			// setStock(body.data[i]._id);
			// console.log(totalInvestment);
		}
		setStock(body.data);

		console.log(stock);
		// const soldData = gotInvestment * gotSum;
		// const investment = totalInvestment * quantitySum;

		// const currentAmount = investment - soldData;
		// setInvestment(investment);
		// setSell(soldData);
		// setQuantity(quantitySum);
		// setCurrentAmount(currentAmount);
	};

	const renderHeader = () => {
		let headerElement = [
			'stockName',
			'quantity',
			'transcation_type',
			'totalAmount',
		];

		return headerElement.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>;
		});
	};

	const renderBody = () => {
		return (
			stock &&
			stock.map(({ _id, stockName, quantity, totalAmount, index }) => {
				return (
					<tr key={_id}>
						<td>{_id.stockName} </td>
						<td>{quantity} </td>
						<td>{_id.transcation_type} </td>
						<td>{totalAmount} </td>
					</tr>
				);
			})
		);
	};

	return (
		<>
			<h1 id='title'>Your Portfolio</h1>
			<Table id='employee'>
				<thead>
					<tr>{renderHeader()}</tr>
				</thead>
				<tbody>{renderBody()}</tbody>
			</Table>
		</>
	);
};
export default Individual;
