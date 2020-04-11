import React from 'react';
import CardGroup from '../components/CardGroup';

export default function MyWorkouts(props) {

  return (
    <CardGroup
      exercise={props.exercise}
      savedWorkouts={props.savedWorkouts}
    />
  )
}