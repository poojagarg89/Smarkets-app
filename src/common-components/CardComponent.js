import React from 'react';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

export default function CardComponent(props) {
  let splitName = props.name.split('vs');
  let hours = moment(props.startTime).format('HH:mm');
  const navigate = useNavigate();

  const onCardClick = () => {
    navigate(`/event-details/${props.id}`, { state: { data: props } });
  };

  return (
    <div className="card-main" onClick={onCardClick}>
      <div className="match-name-section">
        <div className="first-row">{splitName && splitName[0]}</div>
        <div className="second-row">{splitName && splitName[1]}</div>
        <div className="third-row">
          <WatchLaterOutlinedIcon className="watch-icon" />
          <div className="match-duration">AT {hours}</div>
          <div className="match-trade">
            TRADED: <span className="match-trade-value">$198,75</span>
          </div>
          <div className="match-market">{66 + parseInt(props.marketAvailable)} Market Available</div>
        </div>
      </div>

      <div className="match-score-section">
        <div className="match-score-part">
          <div className="match-team">Wolves</div>
          <div className="match-team-score">
            <div>
              <div className="green-card">2.3</div>
              <div className="green-card-value">$166</div>
            </div>
            <div>
              <div className="blue-card">2.36</div>
              <div className="blue-card-value">$255</div>
            </div>
          </div>
        </div>

        <div className="match-score-part">
          <div className="match-team">Draw</div>
          <div className="match-team-score">
            <div>
              <div className="green-card">3.5</div>
              <div className="green-card-value">$170</div>
            </div>
            <div>
              <div className="blue-card">3.45</div>
              <div className="blue-card-value">$2012</div>
            </div>
          </div>
        </div>

        <div className="match-score-part">
          <div className="match-team">Leicester</div>
          <div className="match-team-score">
            <div>
              <div className="green-card">4.5</div>
              <div className="green-card-value">$535</div>
            </div>
            <div>
              <div className="blue-card">4</div>
              <div className="blue-card-value">$20</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
