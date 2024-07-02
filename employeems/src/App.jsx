import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login.jsx';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './Components/Dashboard.jsx';
import Home from './Components/Home.jsx';
import Employee from './Components/Employee.jsx';
import Category from './Components/Category.jsx';
import AddCategory from './Components/AddCategory.jsx';
import AddEmployee from './Components/AddEmployee.jsx';
import EditEmployee from './Components/EditEmployee.jsx';
import Start from './Components/Start.jsx';
import EmployeeLogin from './Components/EmployeeLogin.jsx';
import EmployeeDetail from './Components/EmployeeDetail.jsx';
import PrivateRoute from './Components/PrivateRoute.jsx';


function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='' element={<Start />}></Route>
				<Route path='/adminlogin' element={<Login />}></Route>
				<Route path='/employee_login' element={<EmployeeLogin />}></Route>
				<Route path='/employee_detail/:id' element={<EmployeeDetail />}></Route>
				<Route
					path='/dashboard'
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				>
					<Route path='' element={<Home />}></Route>
					<Route path='/dashboard/employee' element={<Employee />}></Route>
					<Route path='/dashboard/category' element={<Category />}></Route>
					
					<Route path='/dashboard/add_category' element={<AddCategory />}></Route>
					<Route path='/dashboard/add_employee' element={<AddEmployee />}></Route>
					<Route path='/dashboard/edit_employee/:id' element={<EditEmployee />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
