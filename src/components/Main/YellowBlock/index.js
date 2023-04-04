import { useSpring, animated } from 'react-spring';
import React, { useRef, useEffect, useState } from 'react';
import styles from './YellowBlock.module.css';
import AnimatedNumber from './AnimatedNumber';


const YellowBlock = () => {
  const [count, setCount] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [frameCount, setFrameCount] = useState(0);
  const yellowBlockRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (yellowBlockRef.current) {
        const top = yellowBlockRef.current.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setShouldAnimate(prevShouldAnimate => prevShouldAnimate ? prevShouldAnimate : true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (shouldAnimate) {
      let requestId;
      const updateCount = () => {
        setCount(prevCount => prevCount + 1);
        setFrameCount(prevFrameCount => prevFrameCount + 1);
      };

      const animate = () => {
        if (frameCount < 100) { // change this to adjust the number of frames
          updateCount();
          requestId = requestAnimationFrame(animate);
        }
      };

      requestId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestId);
    }
  }, [shouldAnimate, frameCount]);

  // const AnimatedNumber = ({ number }) => {
  //   const props = useSpring({
  //     number: Math.floor(number),
  //     from: { number: 0 },
  //     config: { duration: 500, tension: 2000, friction: 10 },
  //   });

  //   return <animated.span>{props.number.interpolate(n => n.toFixed(0))}</animated.span>;
  // };

  return (
    <div className={styles.yellowBlock2} ref={yellowBlockRef}>
      <div className={styles.yellowBlock2Content}>
        <img height={50} width={50} src="/images/t1.png" alt="" />
        <h1>{shouldAnimate ? <AnimatedNumber number={count+30} /> : Math.floor(count)}</h1>
        <h4>ПРОЕКТИ ЩОРІЧНО</h4>
      </div>
      {/* <div className={styles.yellowBlock2Content}>
        <img height={50} width={50} src="/images/t2.png" alt="" />
        <h1>
          {shouldAnimate ? <AnimatedNumber number={ count+30} /> : Math.floor(count)}
        </h1>
        <h4>НАГОРОДИ</h4>
      </div> */}
      <div className={styles.yellowBlock2Content}>
        <img height={50} width={50} src="/images/t3.png" alt="" />
        <h1>
          {shouldAnimate ? <AnimatedNumber number={Math.max(0, count-1)} /> : Math.floor(count)}
          %
        </h1>
        <h4>ПОЗИТИВНІ ВІДГУКИ</h4>
      </div>
      <div className={styles.yellowBlock2Content}>
        <img height={50} width={50} src="/images/t4.png" alt="" />
        <h1>
          {shouldAnimate ? <AnimatedNumber number={count} /> : Math.floor(count)}
          k
        </h1>
        <h4>ЩАСЛИВІ КЛІЄНТИ</h4>
      </div>
    
            </div>
       
    )
}

export default YellowBlock;