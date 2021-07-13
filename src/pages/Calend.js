import React, { Component } from "react";
import events from "./Events";
import "./style/Calend.css";
import Calendar from "react-big-calendar";
import moment from 'moment';
import 'moment/locale/fr';
import "react-big-calendar/lib/css/react-big-calendar.css";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Grid from "@material-ui/core/Grid";
import ArrowDownwardTwoToneIcon from '@material-ui/icons/ArrowDownwardTwoTone';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import {ReactComponent as Add} from './assets/add.svg';
import {ReactComponent as Day} from './assets/day.svg';
import {ReactComponent as Week} from './assets/week.svg';
import {ReactComponent as Month} from './assets/month.svg';
import {ReactComponent as Year} from './assets/year.svg';
import {ReactComponent as Search} from './assets/search.svg';
import {ReactComponent as Settings} from './assets/settings.svg';
import {ReactComponent as Sort} from './assets/sort.svg';


moment.locale("fr");
Calendar.momentLocalizer(moment);

const allViews = Object.keys(Calendar.Views).map(k => Calendar.Views[k]);

const items = [
    {
      icon : <Add style={{with: "41px", height: "41px", marginLeft: "20px", marginTop:"40px"}}/>
    },
    {
      icon : <Day style={{with: "41px", height: "41px", marginLeft: "20px", marginTop:"40px"}} />,
      view: "day"
    },
    {
      icon: <Week style={{with: "41px", height: "41px", marginLeft: "20px", marginTop:"-5px"}}/>,
      view: "week"
    },
      {
      icon: <Month style={{with: "41px", height: "41px", marginLeft: "20px", marginTop:"-5px"}}/>,
      view: "month"
    },
    {
      icon: <Year style={{with: "41px", height: "41px", marginLeft: "20px", marginTop:"-5px"}}/>,
      view: "month"
    },
    {
      icon: <Search style={{with: "41px", height: "41px", marginLeft: "20px"}}/>,
    }
]

class Calend extends Component{

    state = {
        view: "day",
        date: new Date(2020,8,24),
        width: 500,
        color: "white"
    };

    

    render(){
        
        return(
          
          <Grid container spacing={8} style={{marginTop : "0px", marginBottom : "20px"}} >
            <Grid item sm={1} style={{ padding: "8px", backgroundColor: "#8000ff" }}>
                <List >
                {items.map((item, index) => {
                    return (
                    <ListItem style={{ padding: "8px 0px" }} button >
                        <ListItemIcon style={{ display: "flex", justifyContent: "center", width: "100%" }} 
                        // onClick of the icons, the state variable is set using setState. This re-renders entire component 
                        onClick={item.view ? () => {
                        this.setState({ view: item.view })
                        } : () => {
                        this.setState({ view: "month" })
                        }}>
                        {index == items.length -1 ? (
                        /* Icons are displayed using input array */
                        <div style={{height : "400px" ,  paddingTop: "380px"}}>
                            {item.icon}
                        </div>
                        ) :item.icon}
                        </ListItemIcon>
                    </ListItem>
                    )
                })}
                </List>
            </Grid>

            <Grid item sm={11} style={{ padding: "0px 8px 8px 0px" }}>
                <div style={{display:"flex", marginBottom:"6px"}}> 
                    <ArrowDownwardTwoToneIcon style={{color:"white", marginLeft:"10px"}} />
                    <ArrowUpwardIcon style={{color:"white", marginRight:"10px"}}/>
                <div style={{ marginRight:"15px",marginLeft:"4px", fontSize:"18px", fontFamily:"Heebo", color:"white"}}>AOÛT 2020</div>
                <div style={{ marginTop: "5px" }}><Sort height="15px" width="15px"/></div>
                </div >

                <div style={{ height: 700 }}>
                <Calendar
                    style={{ height: 900, width: 1700}}
                    toolbar={false}
                    events={events}
                    step={60}
                    views={allViews}
                    view={this.state.view}
                    onView={() => { }}
                    date={this.state.date}
                    onNavigate={date => this.setState({ date })}
                />
                </div>
            </Grid>
            </Grid>
        );
        }
}

export default Calend;
