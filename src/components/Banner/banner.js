import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import MainSVG from "../../images/main"

const Banner = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     file(relativePath: { eq: "bg.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 1200, quality: 100) {
  //           ...GatsbyImageSharpFluid_withWebp
  //         }
  //       }
  //     }
  //   }
  // `)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (
    <BannerWrapper>
      <BackgroundImage
        Tag="section"
        className="hero-image"
        fluid={<MainSVG />}
      />
      {/* <MainSVG /> */}
      <div className="hero-content">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
        >
          We make payments
          <br />{" "}
          <span>
            simple, secure, and <br />
            AFFORDABLE
          </span>
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
        >
          Serving the Bay Area for over 15 years
        </motion.p>

        <br />
        <Link to="about" smooth={true} duration={500}>
          <span className="sr-only">Jump to about</span>
          <Button
            cta="Explore"
            label="Banner Learn More"
            anchor={true}
            href="about"
          />
        </Link>
      </div>
      {/* </BackgroundImage> */}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.section`
    ${
      "" /* background: linear-gradient(15deg, #1364b190, #411e7990, #1364b190, #411e7990); */
    }
    /* background-size: 400% 400%;
    animation: animate 45s linear infinite; */

  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    ${"" /* color: dodgerblue; */}
    }

    @keyframes animate {
      0% {
        background-position: 0%;
      }
      100% {
        background-position: 400%;
      }
    }

    

    .hero-content {
      text-align: center;
      height: 100vh;
      width: 100%;
      max-width: 400px;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      

      @media (min-width: 768px) {
        max-width: 650px;
      }

      h1 {
        font-size: 2.25rem;
        line-height: 1.2;

        span {
          background: -webkit-linear-gradient(45deg, dodgerblue, orchid);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }

      p {
        margin-top: 0;
        margin-bottom: 1rem;
        line-height: 1.2;
        font-size: 1.5rem;

        @media (min-width: 768px) {
          font-size: 1.9rem;
        }

        @media (min-width: 1200px) {
          font-size: 2rem;
        }
      }

      button,
      .anchor {
        margin: 0 auto;
      }

      @media (min-width: 768px) {
        max-width: 800px;

        h1 {
          font-size: 3.5rem;
        }
      }

      @media (min-width: 1200px) {
        h1 {
          font-size: 4.25rem;
        }
      }
    }
  }
`

export default Banner
