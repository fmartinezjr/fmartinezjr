import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1400,
  },
}));


function WorkExperience(props) {
  const classes = useStyles();

  return (
    <div>
       <Typography variant="h5" component="h5">{props.title}</Typography>
      <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Weedmaps
                </Typography>
                <Typography variant="body2" gutterBottom>
                 Quality Engineer
                </Typography>
                <Typography variant="body2" color="textSecondary">
                <li>Quality Assurance testing of two Point of Sale applications: Weedmaps Retail and MMJMenu</li>
                <li>Manual black box testing of CRM, Inventory, Store, Dashboard, Reports, Compliance (METRC), and Weedmaps Integration</li>
                <li>Test plan and test case reviews</li>
                <li>Maintain two test suites using Testrails</li>
                <li>Identify quality issues and escalate based on severity</li>
                <li>Test automation using Cucumber for MMJMenu</li>
                <li>API testing using Postman</li>
                <li>Physical hardware testing (iPad, Elo PayPoint, Receipt Printer, Label Printer, Barcode Scanner)</li>
                <li>Worked with offshore QA resources to ensure WM Retail test cases were properly automated</li>
                <li>Review product and design specifications to understand requirements</li>
                <li>Work with team consisting of Developers, Product Owner, and Customer Service</li>
                <li>Agile environment with weekly releases</li>
                <li>Analyzed user flows and behavior to make recommendations on how the product could be improved</li>
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">May 2017 - December 2019</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    </div>
  );
}

export default WorkExperience;
