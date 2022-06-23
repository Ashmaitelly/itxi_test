import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ data }) => {
  //state items
  const [volumeInfo] = useState(data.volumeInfo);
  const [title] = useState(volumeInfo.title);
  //navigate hook
  const navigate = useNavigate();
  //navigate on click
  const handleClick = () => {
    navigate(`/book/?id=${data.id}`);
  };
  return (
    <Card
      sx={{ width: '19vw' }}
      className="Clickable"
      onClick={() => handleClick()}
    >
      <CardMedia
        component="img"
        height="190"
        width="160"
        image={volumeInfo.imageLinks.thumbnail}
        alt={volumeInfo.title}
      />
      <CardContent className="Background">
        <Typography gutterBottom variant="h5" component="div">
          {title.length < 50 ? title : title.substring(0, 50) + '...'}{' '}
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
          by {volumeInfo.authors && volumeInfo.authors.join(', ')}
        </Typography>
        <Typography component="div">{volumeInfo.publisher}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
