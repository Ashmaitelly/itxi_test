import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const BookCard = ({ data }) => {
  const [volumeInfo] = React.useState(data.volumeInfo);
  const [title] = React.useState(volumeInfo.title);
  return (
    <Card sx={{ width: '270px' }} className="Clickable">
      <CardMedia
        component="img"
        height="190"
        width="160"
        image={volumeInfo.imageLinks.thumbnail}
        alt="green iguana"
      />
      <CardContent className="Background">
        <Typography gutterBottom variant="h5" component="div">
          {title.length < 50 ? title : title.substring(0, 50) + '...'}{' '}
          {`(${volumeInfo.publishedDate})`}
        </Typography>
        <Typography gutterBottom component="div">
          by {volumeInfo.authors}
        </Typography>
        <Typography component="div">{volumeInfo.publisher}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
