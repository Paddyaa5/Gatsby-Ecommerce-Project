import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import gsap from "gsap"
//images
import landing from "../images/WXY2.jpeg"
import boxImg1 from "../images/WXY3.jpg"
import boxImg2 from "../images/WXY4.jpg"
import boxImg3 from "../images/WXY5.jpg"

const StyledLandingPage = styled.section`
  margin: 0;
  position: relative;
  height: 100vh;
  width: 100vw;
  .left-column {
    opacity: 0;
    left: -50%;
    background: url(${landing}) 10% 50% no-repeat;
    background-size: cover;
    .inner-container {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      h3 {
        position: relative;
        top: 50px;
        opacity: 0;
        color: #fff8ee;
        letter-spacing: 1px;
        font-size: calc(12px + 1vw);
        margin: 2px 0;
      }
    }
  }
  .right-column {
    left: 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .column {
    position: absolute;
    height: 100%;
    top: 0;
    width: 50%;
    padding: 20px;
  }
  .images {
    display: flex;
    width: 100%;
    justify-content: space-between;
    .square {
      opacity: 0;
      width: calc(50vw / 3.25);
      height: calc(50vw / 3);
    }
    #img1 {
      background: url(${boxImg1}) no-repeat 50% 50%;
      background-size: cover;
    }
    #img2 {
      background: url(${boxImg2}) no-repeat 50% 50%;
      background-size: cover;
    }
    #img3 {
      background: url(${boxImg3}) no-repeat 50% 50%;
      background-size: cover;
    }
  }
  .text {
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    a {
      opacity: 0;
      border-radius: 30px;
      border: 3px solid black;
      cursor: pointer;
      padding: 15px 30px;
      color: black;
      margin: 50px 0;
      transition: all 0.5s;
      &:hover {
        background-color: ${props => props.theme.colors.dark};
        color: ${props => props.theme.colors.light};
      }
    }
    h5 {
      opacity: 0;
      margin-top: 50px;
      font-size: calc(12px + 1vw);
    }
    h1 {
      margin-top: -15px;
      opacity: 0;
      font-size: calc(60px + 2vw);
    }
  }
`

const Home = () => {
  let left = useRef(null)
  let inner1 = useRef(null)
  let inner2 = useRef(null)
  let inner3 = useRef(null)
  let box1 = useRef(null)
  let box2 = useRef(null)
  let box3 = useRef(null)
  let right = useRef(null)
  let title = useRef(null)
  let subtitle = useRef(null)
  let button = useRef(null)
  let tl = gsap.timeline()

  useEffect(() => {
    tl.to(title, {
      duration: 1,
      opacity: 1,
      ease: "power2.easeOut",
      delay: 0.5,
    })
      .set(left, { opacity: 1 })
      .to(left, { duration: 1.3, x: "99.5%", ease: "power4.inOut" }, "+=1")
      .to(right, { duration: 1.3, x: "100%", ease: "power4.inOut" }, "-=1.3")
      .to([inner1, inner2, inner3], {
        opacity: 1,
        y: -50,
        duration: 0.5,
        stagger: 0.15,
      })
      .to(
        [box1, box2, box3],
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.15,
        },
        "-=0.5"
      )
      .to(
        [subtitle, button],
        { duration: 0.5, opacity: 1, ease: "power2.easeOut" },
        "+=0.5"
      )
  })

  return (
    <StyledLandingPage>
      <div className="left-column column" ref={el => (left = el)}>
        <div className="inner-container">
          <h3 ref={el => (inner1 = el)}>UK made, hand poured.</h3>
          <h3 ref={el => (inner2 = el)}>Plant based, 100% soy wax.</h3>
          <h3 ref={el => (inner3 = el)}>Minimal plastic.</h3>
        </div>
      </div>
      <div className="right-column column" ref={el => (right = el)}>
        <div className="images">
          <Link
            to="/shop/diffusers"
            className="square"
            ref={el => (box1 = el)}
            id="img1"
          ></Link>
          <Link
            to="/shop/zephyr"
            className="square"
            ref={el => (box2 = el)}
            id="img2"
          ></Link>
          <Link
            to="/shop/candles"
            className="square"
            ref={el => (box3 = el)}
            id="img3"
          ></Link>
        </div>
        <div className="text">
          <h5 ref={el => (subtitle = el)}>Welcome to</h5>
          <h1 ref={el => (title = el)}>Wxy.</h1>
          <Link to="/shop" ref={el => (button = el)}>
            Visit Shop
          </Link>
        </div>
      </div>
    </StyledLandingPage>
  )
}

export default Home
