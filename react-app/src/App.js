import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavigationBar from "./components/NavBarComponent/NavBar";
import UserDashboard from "./components/UserDashboard";
import TeamDashboard from "./components/TeamDashboard";
import ProjectDashboard from "./components/ProjectDashboard";
import AddProjectPage from './components/AddProjectPage';
import ProtectedRoute from "./components/auth/ProtectedRoute";
import MessageBoard from "./components/MessageBoard";
// import User from "./components/User";
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";
import AddTaskComponent from "../src/components/AddTaskComponent/index"
import SingleTaskPage from '../src/components/SingleTaskPage'


function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);
  if (!loaded) {
    return null;
  }
  return (
    <BrowserRouter>
      <NavigationBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users/:userId/teams" exact={true} >
            <UserDashboard />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/teams/:teamId" exact={true} >
            <TeamDashboard />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId/teams/:teamId/add-project" exact={true} >
            <AddProjectPage />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId/teams/:teamId/projects/:projectId"
          exact={true}
          >
          <ProjectDashboard />
        </ProtectedRoute>
        <ProtectedRoute
        path="/users/:userId/teams/:teamId/projects/:projectId/tasks/create"
        exact={true}
        >
          <AddTaskComponent />
        </ProtectedRoute>
        <ProtectedRoute
        path="/users/:userId/teams/:teamId/projects/:projectId/tasks/:taskId"
        exact={true}>
          <SingleTaskPage />
      </ProtectedRoute>
      <ProtectedRoute path="/" exact={true}>
        <h1>HomeBase HomePage</h1>
      </ProtectedRoute>
      <ProtectedRoute>
        <h1>Looks like this page doesn't exist...</h1>
      </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
