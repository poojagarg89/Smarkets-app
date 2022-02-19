import React from 'react';
import SmarketsLogo from '../assets/smarketsLogo.svg';
import { SettingsOutlined, HelpOutlined } from '@mui/icons-material';

export default function HeaderComponent() {
  return (
    <div className="header-main">
      <div className="header-left-section">
        <img src={SmarketsLogo} className="smarkets-icon" alt="SmarketsLogo" />
      </div>
      <div className="header-right-section">
        <SettingsOutlined className="setting-icon" />
        <HelpOutlined className="help-icon" />
        <div className="log-btn">LOG IN</div>
        <button className="create-btn">CREATE ACCOUNT</button>
      </div>
    </div>
  );
}
