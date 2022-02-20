import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventIdsAction } from '../../action/action';
import CardComponent from '../../common-components/CardComponent';
import LoaderImg from '../../assets/loader.svg';

export default function Home() {
  const dispatch = useDispatch();
  const eventDetails = useSelector(state => state.getEventDetails);
  // const eventIdDetails = useSelector(state => state.getEventListIds);
  const isFetching = eventDetails && eventDetails.isFetching;
  console.log({ isFetching });
  const eventDetailsData = eventDetails?.eventDetails?.events;
  console.log({ eventDetailsData });
  useEffect(() => {
    dispatch(getEventIdsAction());
  }, [dispatch]);

  return (
    <div className="home-details">
      {isFetching ? (
        <img src={LoaderImg} alt="loader-img" className="loader-img" />
      ) : (
        <div>
          {eventDetailsData &&
            eventDetailsData.length > 0 &&
            eventDetailsData.map((item, index) => (
              <CardComponent name={item.name} startTime={item.start_datetime} marketAvailable={index} />
            ))}
        </div>
      )}
    </div>
  );
}
