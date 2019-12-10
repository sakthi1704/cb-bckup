import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  }
}));
const SearchMenu = ({ list }) => {
  const classes = useStyles();
  let cards = <h3>Loading...</h3>;

 const handleClick = (e) => {
    console.log('hey', 'hey')
  };
  if (list) {
    cards = list.map((m, i) => <li key={i} item={m} />);
    console.log('cards', cards)
  }

  return (
          <React.Fragment>
              <List className={classes.root}>
              {list.map((m,i) => {
        return ( 
          <ListItem button onClick={handleClick.bind(this, m.name)}  key={i}>
          <ListItemText  primary={m.title}  />
          </ListItem>
            )}
          )}
              </List>
          </React.Fragment>
  );
};

export default SearchMenu;
