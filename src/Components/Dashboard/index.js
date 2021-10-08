import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';

function Dashboard() {
	const [stocks, setStocks] = useState([]);
	const [quantity, setQuantity] = useState([]);
	const [investment, setInvestment] = useState([]);
	const [sell, setSell] = useState([]);
	const [currentAmount, setCurrentAmount] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await fetch('http://localhost:5000/stocks/');
		const body = await response.json();
		setStocks(body.data);
		let quantitySum = 0;
		let gotSum = 0;
		let totalInvestment = 0;
		let gotInvestment = 0;
		for (let i = 0; i < body.data.length; i++) {
			if (body.data[i].transcation_type === 'buy') {
				const buyData = body.data[i].quantity;
				const getInvestment = body.data[i].price;
				quantitySum += buyData;
				totalInvestment += getInvestment;
				// console.log(buyData);
				// console.log(totalInvestment);
			}
			if (body.data[i].transcation_type === 'sell') {
				const soldValue = body.data[i].quantity;
				const sellInvestment = body.data[i].price;
				gotSum += soldValue;
				gotInvestment += sellInvestment;
				// console.log(buyData);
			}
		}
		const soldData = gotInvestment * gotSum;
		const investment = totalInvestment * quantitySum;

		const currentAmount = investment - soldData;
		setInvestment(investment);
		setSell(soldData);
		setQuantity(quantitySum);
		setCurrentAmount(currentAmount);
	};

	return (
		<div>
			<Container>
				<Card className='text-center'>
					<Card.Header>Total Data</Card.Header>

					<Card.Text>Total Units:</Card.Text>
					{quantity}
					<Card.Text>Total Investment:</Card.Text>
					{investment}
					<Card.Text>Sold Amount:</Card.Text>
					{sell}
					<Card.Text>Current Amount</Card.Text>
					{currentAmount}
				</Card>
			</Container>
		</div>
	);
}

export default Dashboard;
