import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    margin: "0 auto",
    marginTop: 50,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  title: {
    color: "#3f51b5",
    textTransform: "uppercase",
  },
  header: {
      borderBottom: '1px solid #ddd',
      textAlign: 'center',
      width: 100,
      height: 50
  }, 
  MainTable: {
      margin: '0 auto',
      width: 1000
  }
}));

export default function GlobalStats() {
  const [globalData, setglobalData] = useState([{}]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://api.thevirustracker.com/free-api?countryTotals=ALL"
      );
      let data = await response.json();
      setglobalData(Object.values(Object.values(data.countryitems[0])));
      console.log(Object.values(Object.values(data.countryitems[0])));
    }
    getData();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <table className={classes.MainTable}>
          <tr>
              <th className={classes.header}><h2>Country Name</h2></th>
              <th className={classes.header}><h2>Total Cases</h2></th>
              <th className={classes.header}><h2>Total Active Cases</h2></th>
              <th className={classes.header}><h2>Total Deat</h2></th>
          </tr>
        {globalData.map((key, ind) => {
          return (
            <tr>
                <td className={classes.header}>{globalData[ind].title}</td>
              <td className={classes.header}>
                <h3 className={classes.title}>{globalData[ind].total_cases}</h3>
              </td>
              <td className={classes.header}>
                <h3>{globalData[ind].total_active_cases}</h3>
              </td>
              <td className={classes.header}>
                  <h3>{globalData[ind].total_deaths}</h3>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
