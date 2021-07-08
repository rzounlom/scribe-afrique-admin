import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { setCurrentPost } from '../../../state/actions/post/postActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  media: {
    height: '100%',
  },
});

const MediaCard = ({ post, type, setRenderContentVal }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { image, title, description } = post;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          className={classes.media}
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size='small'
          color='primary'
          onClick={() => {
            setRenderContentVal(1);
            dispatch(setCurrentPost(post));
          }}
        >
          View
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => {
            setRenderContentVal(2);
            dispatch(setCurrentPost(post));
          }}
        >
          Edit
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => {
            dispatch(setCurrentPost(post));
          }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

MediaCard.propTypes = {
  post: PropTypes.object,
  type: PropTypes.string,
};

export default MediaCard;
