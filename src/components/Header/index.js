import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShareIcon from '@material-ui/icons/Share';
import SearchIcon from '@material-ui/icons/Search';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';

import './styles.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    list: {
      width: 250
    },
    fullList: {
      width: 'auto',
    },
  },
}));

export default function Header(){
  const history = useHistory();
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem onClick={() => history.push("/")} button key={'main'}>
          <ListItemIcon><DirectionsBusIcon /></ListItemIcon>
          <ListItemText primary='Embarca Aí' />
        </ListItem>

        <Divider />

        <ListItem  onClick={() => history.push("/")} button key={'main'}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Home' />
        </ListItem>

        <ListItem button onClick={() => history.push("/")} key={'train'}>
          <ListItemIcon><FlashOnIcon /></ListItemIcon>
          <ListItemText primary='Treinar' />
        </ListItem>

        <ListItem button key={'rank'}>
          <ListItemIcon><EmojiEventsIcon /></ListItemIcon>
          <ListItemText primary='Ranking' />
        </ListItem>

      </List>
      <Divider />
    </div>
  );

  return (
<AppBar position="static">
  <Toolbar>
    <IconButton 
      edge="start" 
      className={classes.menuButton} 
      color="inherit" 
      aria-label="menu"
      onClick={toggleDrawer('left', true)}
    >
      <MenuIcon />
    </IconButton>
    <SwipeableDrawer
      anchor={'left'}
      open={state['left']}
      onClose={toggleDrawer('left', false)}
      onOpen={toggleDrawer('left', true)}
    >
      {list('left')}
    </SwipeableDrawer>
    <Typography variant="h6" className={classes.title}>
      Embarca Aí
    </Typography>
    <IconButton aria-label="show 11 new notifications" color="inherit">
      <Badge badgeContent={7} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
    <IconButton aria-label="share" color="inherit">
      <ShareIcon />
    </IconButton>
    <IconButton aria-label="search" color="inherit">
      <SearchIcon />
    </IconButton>
  </Toolbar>
</AppBar>
  );
}