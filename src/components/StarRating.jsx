import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'
import styled from 'styled-components'


const StarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const RatingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export function StarComponent() {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
  };

  const handleReset = () => {
    setRating(0);
  };

  return (
    <StarWrapper>
      <RatingWrapper>
        <Rating
          onClick={handleRating}
          style={{display:'inline'}}
        />
      </RatingWrapper>
      <button onClick={handleReset}>Reset</button>
    </StarWrapper>
  );
}

export default StarComponent;
