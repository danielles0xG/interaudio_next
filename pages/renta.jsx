import React from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import MenuDrawer from '../components/MenuDrawer/MenuDrawer';
const renta = () => {
  return (
    <div>
        <MenuDrawer/>
            <Link href="/">
                <Button variant="contained" color="primary">
                       Back
                </Button>
            </Link>

      <h1>Rentame!</h1>

      <br />
      <img src="../static/spk-l.png" alt="left_speaker" />
    </div>
  );
};
export default renta;
