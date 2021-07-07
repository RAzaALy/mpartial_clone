import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Input } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // 🙂 modal style
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #30A26B",
      width: "40%",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      "@media(max-Width: 768px)": {
        width: "80%",
      },
    },
  }));

  const classes = useStyles();
  const menuItems = [
    {
      path: "home",
      label: "",
    },
    {
      path: "Ground-Truth-Data",
      label: "Ground-Truth Data",
    },
    {
      path: "How-It-Works",
      label: "How It Works",
    },
    {
      path: "Fee-Structure",
      label: " Fee Structure",
    },
    {
      path: "Example-Deliverables",
      label: "Example Deliverables",
    },
    {
      path: "order",
      label: "Submission Portal",
    },
    {
      path: "Contact-US",
      label: "Contact-US",
    },
  ];
  const signup = (e) => {
    e.preventDefault();
    // setUsername('');
    setOpen(false);
  };
  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle(true);
  };
  const closeMenu = () => {
    setToggle(false);
  };
  const handler = () => {
    setOpen(true);
    setToggle(false);
  };
  return (
    <div className="header">
      <Link
        activeClass="active"
        className="nav-link active"
        spy={true}
        offset={-70}
        duration={800}
        smooth={true}
        to="home"
      >
        <div className="header__logo">
          <img src="./images/logo.png" alt="logo" />
        </div>
      </Link>
      <div>
        {/* toggle the menu bar */}
        <ul className={`header__menu_navbar ${toggle ? "active" : "unactive"}`}>
          {menuItems.map((item, index) => (
            <li className="nav-item" key={index}>
              <Link
                activeClass="active"
                className="nav-link active"
                to={item.path}
                spy={true}
                offset={-70}
                duration={800}
                smooth={true}
                key={index}
                onClick={item.label === "Submission Portal" && handler}
              >
                {item.label}
              </Link>
            </li>
          ))}
          {/* signIn modal */}
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={() => setOpen(false)}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <div className={classes.paper}>
                <form className="app__signup">
                  <center>
                    <img
                      className="app__headerImg"
                      src="./images/logo.png"
                      style={{
                        width: "250px",
                        height: "30px",
                        marginBottom: "3rem",
                      }}
                      alt="logo"
                    />
                  </center>

                  <Input
                    placeholder="username"
                    autoComplete="off"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ fontSize: "1.3rem", marginBottom: "1rem" }}
                  />
                  <Input
                    placeholder="email"
                    style={{ fontSize: "1.3rem", marginBottom: "1rem" }}
                    autoComplete="off"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    placeholder="password"
                    type="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ fontSize: "1.3rem", marginBottom: "1rem" }}
                  />
                  <Button
                    variant="outlined"
                    color="primary"
                    type="submit"
                    className="submit"
                    onClick={signup}
                    style={{ fontSize: "1.3rem", marginBottom: "1rem" }}
                  >
                    Sign In
                  </Button>
                </form>
              </div>
            </Fade>
          </Modal>
          {/* sign in btn */}
          <li className="nav-item">
            <Link to="/login">
              <button className="login_btn" onClick={handler}>
                Sign In
              </button>
            </Link>
          </li>
        </ul>
      </div>
      <div className="toggle">
        {/* toggle handler */}
        {toggle ? (
          <img
            className="toggle__btn"
            src="./images/menu.png"
            alt="toggle"
            onClick={closeMenu}
          />
        ) : (
          <img
            className="toggle__btn"
            src="./images/menu.png"
            alt="toggle"
            onClick={toggleMenu}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
