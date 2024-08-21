import { redirect } from 'next/dist/server/api-utils';
import React from 'react';


const Image = {
  maxWidth: '10%',
  height: 'auto',
  borderRadius: '20px',
  boxshadow: '0 4px 8px rgba(0, 0, 0, 0.1',
  backgroundColor: 'red',
}

const centered = {
  display: 'flex',
  justifyContent: "center",
  backgroundColor : "red",
}

const FeaturedImage = ({ image }) => {
  if (!image) return null;

  return (
    <div className="featured-image" style={centered}>
      <img style={Image} src={image.node.sourceUrl} alt={image.node.description} />
    </div>
  );
};

export default FeaturedImage;
