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
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { Link } from "react-router-dom";
import { InputAdornment } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { SecurityUpdate } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
    root: {
      width: 800,
      textAlign: "left",
      margin:20
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
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    },
    link:{
      textDecoration : "none",
      boxShadow : "none",
      color : "white"
  }
  }));

function PostForm(props){
    const{userId,userName,refreshPosts} = props;
    const classes = useStyles();
    const[text, setText] = useState("");
    const[title, setTitle] = useState("");

    const savePost = () => {
        fetch("/posts",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                userId: userId,
                text: text,
            }),
        })
        .then((res) => res.json())
        .catch((err) => console.log("error"))
    };

    const handleSubmit = () => {
        savePost();
        refreshPosts();
        //console.log(title,text);
    };

    const handleTitle = (value) => {
        setTitle(value);
    };

    const handleText = (value) => {
        setText(value);
    };

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
        title={<OutlinedInput
            id="outlined-adornment-amount"
            multiline
            placeholder = "Title"
            inputProps = {{maxLength : 25}}
            fullWidth
            onChange = {(i) => handleTitle(i.target.value)}
            >
        </OutlinedInput>}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" componenet="p">
        <OutlinedInput
            id="outlined-adornment-amount"
            multiline
            placeholder = "Text"
            inputProps = {{maxLength : 250}}
            fullWidth
            onChange = {(i) => handleText(i.target.value)}
            endAdornment = {
                <InputAdornment position = "end">
                <Button
                variant = "contained"
                style = {{background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                color: 'white'}}
                onClick = {handleSubmit}
                >Post</Button>
                </InputAdornment>
            }
            >
        </OutlinedInput>
        </Typography>
      </CardContent>
    </Card>

        </div>
    )
}

export default PostForm;