import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ data }) => {
  //state items
  const [volumeInfo] = useState(data.volumeInfo);
  //navigate hook
  const navigate = useNavigate();
  //navigate on click
  const handleClick = () => {
    navigate(`/book/?id=${data.id}`);
  };
  return (
    <Card className="Clickable" onClick={() => handleClick()}>
      <CardMedia
        component="img"
        height="330"
        width="230"
        image={volumeInfo.imageLinks.thumbnail}
        alt={volumeInfo.title}
      />
      <CardContent
        sx={{
          width: '230px',
          height: '190px',
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {volumeInfo.title.length < 30
            ? volumeInfo.title
            : volumeInfo.title.substring(0, 30) + '...'}{' '}
          {`(${volumeInfo.publishedDate})`}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {volumeInfo.averageRating
            ? `${volumeInfo.averageRating}/5 ⭐`
            : 'No ratings'}{' '}
          {``}
          {volumeInfo.ratingsCount &&
            `(${volumeInfo.ratingsCount} rating${
              volumeInfo.ratingsCount === 1 ? '' : 's'
            })`}
        </Typography>
        <Typography gutterBottom component="div">
          by{' '}
          {`${volumeInfo.authors && volumeInfo.authors[0]} ${
            volumeInfo.authors &&
            (volumeInfo.authors.length > 2 ? 'et al.' : '')
          }`}
        </Typography>
        <Typography component="div">
          {volumeInfo.publisher &&
            (volumeInfo.publisher.length < 30
              ? volumeInfo.publisher
              : volumeInfo.publisher.substring(0, 30) + '...')}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
