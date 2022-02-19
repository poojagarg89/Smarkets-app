import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEventIdsAction } from '../../action/action';

export default function Home() {
  const dispatch = useDispatch();
  const eventDetails = useSelector(state => state.getEventDetails);
  console.log({ eventDetails });
  useEffect(() => {
    dispatch(getEventIdsAction());
  }, [dispatch]);

  return <div className="home-details"></div>;
}
