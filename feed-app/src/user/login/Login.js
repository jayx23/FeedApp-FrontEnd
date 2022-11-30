import React, { useEffect } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Row, Col } from "antd";

import LoginForm from "../../components/login/loginForm/LoginForm";

const Login = ({ currentUser, isAuthenticated }) => {
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);

  return (
    <React.Fragment>
      <div className="login-container">
        <Row type="flex" justify="center">
          <Col pan={24}>
            <div className="logo-container">
              <span className="welcome">WElCOME</span>
            </div>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col pan={24}>
            <LoginForm />
          </Col>
        </Row>
      </div>

    </React.Fragment>
  );
};

export default Login;