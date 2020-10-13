import React, { useState } from "react"
import links from "../../constants/links"
import styled from "styled-components"
// import Logo from "../../images/startup-logo.svg"
import { Link } from "react-scroll"
import Button from "../Button/button"
import StartupLogo from "../../images/startup-logo"

const Navbar = () => {
  const [isOpen, setNav] = useState(false)

  const toggleNav = () => {
    setNav((isOpen) => !isOpen)
  }
  return (
    <NavWrapper>
      <div
        className={
          isOpen
            ? `${"masthead-fixed flex-container"}`
            : `${"masthead flex-container"}`
        }
      >
        <StartupLogo />
        <button
          className={
            isOpen
              ? `${"toggle-btn"} ${"toggle-btn-active"}`
              : `${"toggle-btn"}`
          }
          type="button"
          onClick={toggleNav}
          aria-label="Menu Button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <ul
        className={isOpen ? `${"nav-links"} ${"show-nav"}` : `${"nav-links"}`}
      >
        {links.map((item, index) => (
          <li key={index}>
            <Link
              activeClass="active"
              to={item.text}
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              {item.text}
            </Link>
          </li>
        ))}
        <br />
        <Link to="about" smooth={true} duration={500} offset={-50}>
          <span className="sr-only">Jump to about</span>
          <Button cta="Sign up" label="Sign up" anchor={true} href="contact" />
        </Link>
      </ul>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  position: relative;
  z-index: 5;
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0;
  box-sizing: border-box;
  background: linear-gradient(45deg, #030303, #030303ee);
  background: transparent;
  
  .masthead {
    padding: 0.5rem 0.75rem;
    z-index: 5;
    width: 100%;
    justify-content: space-between;
    position: relative;

    img {
      width: 160px;

      @media (min-width: 768px) {
        width: 200px;
      }

      @media (min-width: 1200px) {
        width: 240px;
      }
    }
  }

  .masthead-fixed {
      padding: 0.5rem 0.75rem;
      z-index: 5;
      width: 100%;
      justify-content: space-between;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;

      img {
      width: 160px;

      @media (min-width: 768px) {
        width: 200px;
      }

      @media (min-width: 1200px) {
        width: 240px;
      }
    }
  }

  

  .nav-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    text-align: center;
    background: linear-gradient(45deg, #060c21, #0d0139);
    margin: 0;
    height: 100%;
    width: 100%;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: 0.3s ease-in;
    list-style: none;
    padding: 1rem;

    @media (min-width: 992px) {
      width: 40%;
    }

    li {
      list-style: none;
      font-size: 1.6rem;
      font-weight: 300;
      margin-left: 0;
      padding: 0.75rem 0;
      a {
        text-decoration: none;
        text-transform: capitalize;
        color: #fefefe50;
        transition: all 0.3s linear;

        &.active {
          color: dodgerblue;
          transition: all 0.3s linear;
        }
      }
      &:hover {
        cursor: pointer;
        color: #fefefe;
        transition: all 0.3s linear;
        a {
          color: #fefefe;
          transition: all 0.3s linear;
        }
      }
    }

    &.show-nav {
      transform: translateX(0%);
    }
  }

  .toggle-btn {
    width: 40px;
    height: 40px;
    padding: 0.rem;
    background-color: transparent;
    border: none;

    span {
      display: block;
      width: 2.25rem;
      height: 0.1rem;
      background-color: #fff;
      transition: 0.2s ease-in;
      border-radius: 10rem;

      &:nth-child(1) {
        transform: translateY(-8px);
      }

      &:nth-child(3) {
        transform: translateY(8px);
      }
    }

    &.toggle-btn-active {
      span {
        &:nth-child(1) {
          transform: translateY(2px) rotate(45deg);
        }

        &:nth-child(2) {
          opacity: 0;
          transform: translateX(-100%);
        }

        &:nth-child(3) {
          transform: translateY(-2px) rotate(-45deg);
        }
      }
    }
  }

  /* @media (min-width: 992px) {
    width: 100%;
  }
     /* .toggle-btn {
      display: none;
    }

    .nav-links {
      background: transparent;
      flex-direction: row;
      margin-left: auto;
      position: relative;
      transform: translateX(0);
      transition: none;

      li {
        margin-left: 1rem;
      }
    } */
  }
`

export default Navbar
