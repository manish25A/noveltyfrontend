import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
function TranscationPage() {
	const [items, setItems] = useState([]);
	const [stockData, setStockData] = useState({
		stockName: '',
		quantity: '',
		price: '',
		transcation_type: '',
	});
	useEffect(() => {
		async function getCharacters() {
			const response = await fetch('http://localhost:5000/stocks/getstocks');
			const body = await response.json();
			console.log(body.data);

			setItems(
				body.data.map(({ stockName, _id }) => ({
					label: stockName,
					value: stockName,
				}))
			);
		}
		getCharacters();
	}, []);
	const handleSubmit = () => {
		axios
			.post('http://localhost:5000/stocks/new', stockData)
			.then((res) => alert(res));
	};

	return (
		<div>
			<Container>
				<h1> Perform transcation</h1>
				<br></br>
				<Form>
					<Row className='mb-3'>
						<Form.Group as={Col} controlId='formGridState'>
							<Form.Label>Choose stock</Form.Label>
							<select
								className='dropdown-header'
								name='stockName'
								onChange={(e) =>
									setStockData({ ...stockData, stockName: e.target.value })
								}
								value={stockData.stockName}
							>
								<option> select stocks</option>

								{items.map((item) => (
									<option key={item.value} value={item.value}>
										{item.label}
									</option>
								))}
							</select>
						</Form.Group>
						<Form.Group as={Col} controlId='formGridEmail'>
							<Form.Label>Number of Stocks</Form.Label>
							<Form.Control
								type='Number'
								name='quantity'
								placeholder='Enter number of stocks'
								onChange={(e) =>
									setStockData({ ...stockData, quantity: e.target.value })
								}
								value={stockData.quantity}
							/>
						</Form.Group>
						<Form.Group as={Col} controlId='formGridState'>
							<Form.Label>Choose stock</Form.Label>
							<select
								className='dropdown-header'
								name='stockName'
								onChange={(e) =>
									setStockData({
										...stockData,
										transcation_type: e.target.value,
									})
								}
								value={stockData.transcation_type}
							>
								<option> select transcation type</option>
								<option> buy</option>
								<option> sell</option>
							</select>
						</Form.Group>
						<Form.Group as={Col} controlId='formGridPassword'>
							<Form.Label>Price per Unit</Form.Label>
							<Form.Control
								type='Number'
								name='price'
								placeholder='price'
								onChange={(e) =>
									setStockData({ ...stockData, price: e.target.value })
								}
								value={stockData.price}
							/>
						</Form.Group>
					</Row>

					<Button variant='primary' type='button' onClick={handleSubmit}>
						Submit
					</Button>
				</Form>
			</Container>
		</div>
	);
}

export default TranscationPage;
