import React from 'react';

type CardBackProps = {
  color?: string;
};

const CardBack = React.memo(({ color = 'red' }: CardBackProps) => {
  return (
    <text x="50%" y="67%" dominantBaseline="middle" textAnchor="middle" fontSize="40em" fill={color}>
      🂠
    </text>
  );
});

CardBack.displayName = 'CardBack';
export default CardBack;
