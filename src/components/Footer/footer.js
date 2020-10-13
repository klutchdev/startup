import React from "react"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"
import { motion } from "framer-motion"

const Footer = () => {
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <FooterWrapper>
      <div>
        {socialIcons.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            {item.icon}
          </a>
        ))}
      </div>
      <hr color="#555555" />
      <motion.p
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ ease: "easeOut", duration: 0.5, delay: 0.75 }}
      >
        <small>
          CardConnect San Francisco is a certified independent sales division of
          CardConnect Corp. CardConnect is a registered ISO of Wells Fargo Bank,
          N.A., Concord, CA.and Synovus Bank, USA, Columbus, GA
        </small>
      </motion.p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 2.25rem;
  text-align: center;
  margin: 0;
  height: 100%;
  width: 100%;

  .credit {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;

    a {
      padding: 0;
      font-size: 0.85rem;
      text-decoration: none;
      background: -webkit-linear-gradient(45deg, #f441a5, #03a9f4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  a {
    color: #fff;
    font-size: 1.75rem;
    padding: 0 0.5rem;

    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
