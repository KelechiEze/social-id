'use client';

import Image from "next/image";
import "./ContactCenter.css";

const ContactCenter = () => {
  return (
    <section className="contactCenter">
      <div className="contactContent">
        <p className="contactLabel">About Call Center</p>
        <h2 className="contactTitle">World-Class<br />Contact Center</h2>
        <p className="contactDescription">
          Our agents are fully bilingual, bi-cultural, well educated and have
          expertise in a wide array of business functions such as Debt
          Collection, Customer Service.
        </p>

        <div className="progressBarGroup">
          <div className="progressBarItem">
            <span className="progressLabel">Customer Service</span>
            <span className="progressValue">55%</span>
            <div className="progressTrack">
              <div className="progressFill redFill" style={{ width: "55%" }} />
            </div>
          </div>

          <div className="progressBarItem">
            <span className="progressLabel">Sales / Lead Generation</span>
            <span className="progressValue">32%</span>
            <div className="progressTrack">
              <div className="progressFill blueFill" style={{ width: "32%" }} />
            </div>
          </div>
        </div>

        <button className="learnMoreBtn">
          Learn More <span className="arrow">→</span>
        </button>
      </div>

      <div className="contactImages">
        <div className="imageStack">
          <Image
            src="/caller1.jpg"
            alt="Background agent"
            className="topImageBehind"
            width={200}
            height={200}
          />
          <Image
            src="/caller2.jpg"
            alt="Foreground agent"
            className="mainImageFront"
            width={300}
            height={400}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactCenter;
