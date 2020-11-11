import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Components/Login/Login'
import CreateAccount from './Components/Login/CreateAccount'
import NotFound from './NotFound'
import CreateCupons from './Components/Compons/create-cupon'
import Cupons from './Components/Compons/cupons';
import AdminTasks from './Pages/Admins/admin-tasks';
import CreateTask from './Pages/Admins/create-task';
import AdminList from './Pages/Admins/admin-list';
import CreateAdmin from './Pages/Admins/create-admin';
import AccountSettings from './Pages/Settings/settings';
import DashboardOverview from './Pages/Dashboard/overview';
import "./App.css";
import TrashList from "./Pages/Trash/trash";
class App extends Component {
	render() {
		return (
			<Router>
				{/* <NotificationContainer /> */}
				<Switch>
					<Route exact="/" path="/" component={Login}/>
					<Route exact="/login" path="/login" component={Login}/>
					<Route exact="/create_account" path="/create_account" component={CreateAccount}/>
					<Route exact="/create_cupons" path="/create_cupons" component={CreateCupons}/>
					<Route exact="/cupons" path="/cupons" component={Cupons}/>
					<Route exact="/admin-tasks" path="/admin-tasks" component={AdminTasks} />
					<Route exact="/admin-task" path="/create-task" component={CreateTask} />
					<Route exact="/admin-list" path="/admin-list" component={AdminList} />
					<Route exact="/create-admin" path="/create-admin" component={CreateAdmin} />
					<Route exact="/account-settings" path="/account-settings" component={AccountSettings} />
					<Route exact="/trash-list" path="/trash-list" component={TrashList} />
					<Route exact="/dashbord-overview" path="/dashboard-overview" component={DashboardOverview} />
					<Route path="*" component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;