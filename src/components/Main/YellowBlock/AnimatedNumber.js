import { useSpring, animated } from 'react-spring';

const AnimatedNumber = ({ number }) => {
  const props = useSpring({
    number: Math.floor(number),
    from: { number: 0 },
    config: { duration: 500, tension: 200, friction: 30 },
  });

  return <animated.span>{props.number.interpolate(n => n.toFixed(0))}</animated.span>;
};

export default AnimatedNumber;