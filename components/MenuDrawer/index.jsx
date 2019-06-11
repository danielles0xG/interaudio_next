import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Link from 'next/link';

const useStyles = makeStyles({
  list: {
    width: "100%"
  },
  drawerPaper: {
    width: "100%"
  },
  fullList: {
    width: "auto"
  }
});

function MenuDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
     <List>
        <ListItem button key='e4'>
          <ListItemIcon>
                 <Link href="/paquetes">
                    <Button variant="contained" color="primary">
                        Paquetes
                    </Button>
                 </Link>
          </ListItemIcon>
          <ListItemText primary='we' />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>Open Left</Button>
      <Drawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        {sideList("left")}
      </Drawer>
    </div>
  );
}

export default MenuDrawer;
