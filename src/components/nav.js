import React from "react"
import { Link } from "gatsby"

const Nav = () => (
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <strong>临高启明</strong>
      </Link>
      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbar-main"
        href="/#"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>
    <div id="navbar-main" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item" to="/archive/">
          目录
        </Link>
        <Link className="navbar-item" to="/0000/">
          指南
        </Link>
        <a
          className="navbar-item"
          href="https://t.me/lingaoqiming"
          target="_blank"
        >
          讨论群
        </a>
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link" href="/#">更多</a>
          <div className="navbar-dropdown">
            <a
              className="navbar-item"
              href="https://book.qidian.com/info/1262627"
              target="_blank"
            >
              起点
            </a>
            <a
              className="navbar-item"
              href="https://chuiniu.duanshu.com/"
              target="_blank"
            >
              短书
            </a>
            <hr className="navbar-divider" />
            <a
              className="navbar-item"
              href="https://www.lgqm.gq/"
              target="_blank"
            >
              论坛
            </a>
            <a
              className="navbar-item"
              href="https://lgqm.huijiwiki.com/"
              target="_blank"
            >
              Wiki
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button id="button-size-inc" className="button is-info">
              放大字体
            </button>
            <button id="button-size-dec" className="button is-info">
              缩小字体
            </button>
            <a
              className="button is-primary"
              href="https://gitee.com/halulu/lgqm"
              target="_blank"
            >
              Git
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Nav