import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';

const Individual = () => {
	const [stocks, setStocks] = useState([]);
	const [quantity, setQuantity] = useState([]);
	const [investment, setInvestment] = useState([]);
	const [sell, setSell] = useState([]);
	const [currentAmount, setCurrentAmount] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await fetch('http://localhost:5000/stocks/agg');
		const body = await response.json();
		setStocks(body.data);
		console.log(body.data);
		// setInvestment(body.data);
		let quantitySum = '';
		// let gotSum = 0;
		// let totalInvestment = 0;
		// let gotInvestment = 0;
		for (let i = 0; i < body.data.length; i++) {
			var buyData = body.data[i]._id[i].stockName;
			buyData += quantitySum;
			// console.log(buyData);

			// console.log(totalInvestment);
		}
		setInvestment(buyData);
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
			'sold amount',
			'transcation_date',
		];

		return headerElement.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>;
		});
	};

	const renderBody = () => {
		return (
			stocks &&
			stocks.map(({ _id, stockName }) => {
				return (
					<tr key={_id}>
						<td>{stockName} </td>
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
