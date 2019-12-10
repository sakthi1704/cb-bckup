import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardHeaderStylePref:{
    background:"blue",
    color:"white"
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <h1 style={{textAlign:"center", color:"blue", marginTop:"100px"}}>WELCOME ADMIN</h1>
      <Grid container spacing={3} justify="center">
        <Grid item xs={3}>
        <Card className={classes.card}>
        <CardHeader
            title="ORDERS TODAY"
            className={classes.cardHeaderStylePref}
            titleStyle={{textAlign: 'center'}}
      >
      </CardHeader>
      <CardContent>
      Word of the Day
        </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
        <CardHeader
            title="FINISHED JOBS"
            className={classes.cardHeaderStylePref}
            titleStyle={{textAlign: 'center'}}
      >
      </CardHeader>
      <CardContent>
      Word of the Day
        </CardContent>
    </Card>
        </Grid>
        <Grid item xs={3}>
        <Card className={classes.card}>
        <CardHeader
            title="TOTAL SALES"
            className={classes.cardHeaderStylePref}
            titleStyle={{textAlign: 'center'}}
      >
      </CardHeader>
      <CardContent>
      Word of the Day
        </CardContent>
    </Card>
        </Grid>
      </Grid>
    </div>
  );
}