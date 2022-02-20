import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getEventDetails } from '../../action/action';

export default function EventDetailsComponent(props) {
  const dispatch = useDispatch();
  const { state } = useLocation();
  let data = state?.data;
  return (
    <div className="event-details-main">
      <div className="match-header">Match Details</div>
      <div className="match-name">
        <span className="event-header">Match Id :</span> {data.id}
      </div>
      <div className="match-name">
        <span className="event-header">Match Type :</span> {data.type}
      </div>
      <div className="match-name">
        <span className="event-header">Match Name :</span> {data.name}
      </div>
      <div className="match-name">
        <span className="event-header">Match Status :</span> {data.state}
      </div>
      <div className="match-name">
        <span className="event-header">Match Date :</span> {data.start_date}
      </div>
      <div className="match-name">
        <span className="event-header">Match Bettable :</span> {data.bettable ? 'YES' : 'NO'}
      </div>
    </div>
  );
}
