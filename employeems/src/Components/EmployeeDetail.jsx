import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const employeeDetail = () => {
	const [employee, setEmployee] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		axios
			.get('http://localhost:3000/employee/detail/' + id)
			.then(result => {
				setEmployee(result.data.Result[0]);
			})
			.catch(err => console.log(err));
	}, []);

	const navigate = useNavigate();
	const handleLogout = () => {
		axios
			.get('http://localhost:3000/employee/logout')
			.then(result => {
				if (result.data.Status) {
					localStorage.removeItem('valid');
					navigate('/');
				}
			})
			.catch(err => console.log(err));
	};
	return (
		<div className='container-fluid'>
			<div className='p-2 d-flex justify-content-center shadow'>
				<h4>Employee Management System</h4>
			</div>
			<div className='d-flex justify-content-center flex-column align-items-center mt-3'>
				<img src={`http://localhost:3000/Images/` + employee.image} className='emp_det_image' />
				<div className='d-flex align-items-center flex-column mt-5'>
					<h3>Name: {employee.name}</h3>
					<h3>Email: {employee.email}</h3>
					<h3>Salary: ${employee.salary}</h3>
				</div>
				<div>
					
					<button className='btn btn-danger mb-5' onClick={handleLogout}>
						Logout
					</button>
				</div>
			</div>
		</div>
	);
};

export default employeeDetail;
