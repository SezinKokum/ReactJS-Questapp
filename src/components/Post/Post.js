import React, {useState} from "react";
//import "./Post.scss";
//import React, {useState,useEffect} from "react";
//import ReactDOM from "react-dom";
import { makeStyles } from '@material-ui/core/styles';

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import clsx from 'clsx';
import CommentIcon from '@mui/icons-material/Comment';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      width: 800,
      textAlign: "left"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    avatar: {
      background: red[500],
    },
    link:{
      textDecoration : "none",
      boxShadow : "none",
      color : "white"
  }
  }));

function Post(props){
    const{title, text, userId,userName} = props;
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const[liked,setLiked] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    const handleLike = () => {
      setLiked(!liked);

    }

    return(
        <div className="postContainer">
<Card className={classes.root}>
      <CardHeader
        avatar={
          <Link className={classes.link} to={'/users/'  + userId}> 
          <Avatar aria-label="recipe" className={classes.avatar}>
            {userName.charAt(0).toUpperCase()}
          </Avatar>
           </Link>
        }
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" componenet="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton 
        onClick={handleLike}
        aria-label="add to favorites">
          <FavoriteIcon style={liked? { color: "red"} : null} />
        </IconButton>
        <IconButton
         className={clsx(classes.expand,{[classes.expandOpen]: expanded,
        })}
         // expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
       
        </CardContent>
      </Collapse>
    </Card>

        </div>
    )
}

export default Post;