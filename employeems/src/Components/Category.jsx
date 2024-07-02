import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Category = () => {
	const [category, setCategory] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get('http://localhost:3000/auth/category')
			.then(result => {
				if (result.data.Status) {
					setCategory(result.data.Result);
				} else {
					alert(result.data.Error);
				}
			})
			.catch(err => console.log(err));
	}, []);
	
	
	const handleDelete = (id) => {
		axios.delete('http://localhost:3000/auth/delete_category/' + id).then(result => {
			if (result.data.Status) {
				window.location.reload()
			} else {
				alert(result.data.Error)
			}
		})
	}

	return (
		<div className='px-5 mt-3 px-5 mt-3 '>
			<div className='d-flex justify-content-center'>
				<h3>Category List</h3>
			</div>
			<Link to='/dashboard/add_category' className='btn btn-success'>
				Add Category
			</Link>
			<div className='mt-3'>
				<table className='table'>
					<thead>
						
					</thead>
					<tbody>
						{category.map(c => (
							<tr>
								<td>{c.name}</td>
								<td>
									<button className='btn btn-warning btn-sm' onClick={() => handleDelete(c.id)}>
										Delete
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Category;
