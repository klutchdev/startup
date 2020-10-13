import React from "react"
import styled from "styled-components"

const Button = props => {
  return (
    <>
      {props.anchor ? (
        <ButtonWrapper
          aria-label={props.label}
          className="anchor"
          href={props.href}
        >
          {props.cta}
        </ButtonWrapper>
      ) : (
        <ButtonWrapper ariaLabel={props.label} type={props.type}>
          {props.cta}
        </ButtonWrapper>
      )}
    </>
  )
}

const ButtonWrapper = styled.button`
  position: relative;
  vertical-align: middle;
  padding: 0.5rem 0.25rem 0.25rem 0.5rem;
  height: 2.5rem;
  width: 75%;
  text-align: center;
  ${'' /* line-height: 50px; */}
  color: #eee;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #03a9f4);
  ${'' /* background: linear-gradient(90deg, #03a9f4, #f441a5); */}
  background-size: 400%;
  border-radius: 4px;
  border: none;
  z-index: 1;

  &:hover {
    cursor: pointer;
    animation: animate 8s linear infinite;

    &::before {
      filter: blur(8px);
      opacity: 1;
      animation: animate 16s linear;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    z-index: -1;
    background: linear-gradient(60deg, #03a9f4, #f441a5, #03a9f4);
    background-size: 400%;
    border-radius: 4px;
    opacity: 0;
    transition: 0.5s;
  }

  @keyframes animate {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 400%;
    }
  }
`

export default Button;
