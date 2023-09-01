import React, { useEffect, useState } from 'react';

interface BoopProps {
  rotation?: number;
  timing?: number;
  children: React.ReactNode;
}

const Boop: React.FC<BoopProps> = ({
  rotation = 20,
  timing = 200,
  children,
}) => {
  const [isBooped, setIsBooped] = useState(false);

  const style: React.CSSProperties = {
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    transition: `transform ${timing}ms`,
  };

  useEffect(() => {
    if (!isBooped) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);

  const trigger = () => {
    setIsBooped(true);
  };

  return (
    <span onMouseEnter={trigger} style={style}>
      {children}
    </span>
  );
};

export default Boop;
