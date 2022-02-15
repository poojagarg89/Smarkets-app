import React from "react";
import LogoImg from "../assets/logo.png";
import { useNavigate, useLocation } from "react-router-dom";

export default function HeaderComponent({ showUser, showBackBtn }) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const onLoginLogoutClick = () => {
    if (showUser) {
      navigate("/", { state: { name: null } });
    } else if (showBackBtn) {
      navigate("/home", { state: { name: "Pooja Aggarwal" } });
    } else {
      navigate("/");
    }
  };

  const isLoginUrl = window.location.pathname === "/home";

  return (
    <div className="header-main">
      <div className="git-repo-heading">
        <div className="git-repo-header-section">
          <img src={LogoImg} className="git-repo-icon" alt="" />
          <div className="git-repo-text">Github Domain</div>
        </div>
        <div className="user-section">
          <div className="user-name">{state && state.name}</div>
          {isLoginUrl && (
            <button className="login-logout-btn" onClick={onLoginLogoutClick}>
              {showUser ? "Logout" : showBackBtn ? "Back" : "Log In"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
