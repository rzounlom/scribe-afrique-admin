import { makeStyles, withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { purple } from '@material-ui/core/colors';
import { setCurrentPost } from '../../../state/actions/post/postActions';
import { setMessage } from '../../../state/actions/dashboard/dashboardActions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  media: {
    height: '100%',
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: 'rgb(145,70,172)',
    '&:hover': {
      backgroundColor: 'rgb(108,54,128)',
    },
  },
}))(Button);

const ColorButton2 = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: '#f60047',
    '&:hover': {
      backgroundColor: '#bb0036',
    },
  },
}))(Button);

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
      {type === 'postList' && (
        <CardActions>
          <ColorButton
            size='small'
            onClick={() => {
              setRenderContentVal(1);
              dispatch(setCurrentPost(post));
            }}
          >
            View
          </ColorButton>
          <ColorButton
            size='small'
            onClick={() => {
              setRenderContentVal(2);
              dispatch(setCurrentPost(post));
            }}
          >
            Edit
          </ColorButton>
          <ColorButton2
            size='small'
            color='secondary'
            onClick={() => {
              dispatch(setCurrentPost(post));
            }}
          >
            Delete
          </ColorButton2>
        </CardActions>
      )}
    </Card>
  );
};

MediaCard.propTypes = {
  post: PropTypes.object,
  type: PropTypes.string,
};

export default MediaCard;
