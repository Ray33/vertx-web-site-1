import classNames from "classnames";
import Link from "next/link";
import "./NavBar.scss";
import {useRef, useState} from "react";

import Gitter from "@icons-pack/react-simple-icons/lib/Gitter";
import Stackoverflow from "@icons-pack/react-simple-icons/lib/Stackoverflow";
import Youtube from "@icons-pack/react-simple-icons/lib/Youtube";

export default () => {
  const refRight = useRef();
  const [collapse, setCollapse] = useState(false);
  const [rightMaxHeight, setRightMaxHeight] = useState(undefined);

  const onClick = () => {
    let height = 0;
    for (let c of refRight.current.children) {
      height += c.offsetHeight;
    }

    if (collapse) {
      setCollapse(false);
      setRightMaxHeight(undefined);
    } else {
      setCollapse(true);
      setRightMaxHeight(height);
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-content container">
        <div className="navbar-logo">
          <Link href="/">
            <a><img src={require("../assets/logo.svg")} /></a>
          </Link>
        </div>

        <div className="navbar-collapse-button" onClick={onClick}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={classNames("navbar-right", { collapse })}
            ref={refRight} style={{ maxHeight: rightMaxHeight }}>
          <div className="navbar-menu">
            <Link href="/">
              <a className="navbar-menu-item">Ecosystem</a>
            </Link>
            <Link href="/docs/">
              <a className="navbar-menu-item">Docs</a>
            </Link>
            <Link href="/">
              <a className="navbar-menu-item">FAQ</a>
            </Link>
            <Link href="/">
              <a className="navbar-menu-item">Blog</a>
            </Link>
            <Link href="/">
              <a className="navbar-menu-item">Community</a>
            </Link>
            <Link href="/starter/">
              <a className="navbar-menu-item">Starter</a>
            </Link>
          </div>

          <div className="navbar-social">
            <span className="navbar-social-version">v4.0.0</span>
            <a href="https://www.youtube.com/results?search_query=vert.x" className="navbar-social-link"><Youtube /></a>
            <a href="https://stackoverflow.com/questions/tagged/vert.x" className="navbar-social-link"><Stackoverflow /></a>
            <a href="https://gitter.im/eclipse-vertx/vertx-users" className="navbar-social-link"><Gitter /></a>
          </div>
        </div>
      </div>
    </div>
  );
};
