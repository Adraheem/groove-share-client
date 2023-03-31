import React from 'react';
import Container from "../../components/Container";
import Lottie from "lottie-react";
import images from "../../assets/images";
import {Button} from "antd";
import styles from "./styles.module.scss";
import {Link} from "react-router-dom";

interface IProps {
}

function UnAuthenticatedHomePage(props: IProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.circle1}/>
      <div className={styles.circle2}/>
      <Container>
        <div className="mb-20 mt-10 text-center">
          <img
            src={images.musicHero}
            alt="Music hero"
            className={`w-4/5 max-w-xs mx-auto`}
          />
          <Lottie animationData={images.waveform} className="h-16 mb-4 -mt-10"/>
          <h1 className="font-semibold">Create, Share, Play</h1>
          <h5 className="max-w-lg mx-auto">
            collections of songs curated by you and other creative minds
          </h5>

          <Link to="/signup">
            <Button type="primary" size="large" className="mt-5">Get Started</Button>
          </Link>

        </div>
      </Container>
    </div>
  );
}

export default UnAuthenticatedHomePage;
