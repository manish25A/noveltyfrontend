import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import Moment from 'react-moment';

const HomePage = () => {
	const [stocks, setStocks] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await fetch('http://localhost:5000/stocks/');
		const body = await response.json();
		setStocks(body.data);
	};

	const renderHeader = () => {
		let headerElement = [
			'stockName',
			'transcation_type',
			'quantity',
			'transcation_date',
		];

		return headerElement.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>;
		});
	};

	const renderBody = () => {
		return (
			stocks &&
			stocks.map(
				({ _id, stockName, transcation_type, quantity, transcation_date }) => {
					return (
						<tr key={_id}>
							<td>{stockName} </td>
							<td>{transcation_type}</td>
							<td>{quantity}</td>
							<td>
								<Moment format='YYYY/MM/DD'>{transcation_date}</Moment>
							</td>
						</tr>
					);
				}
			)
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

export default HomePage;
