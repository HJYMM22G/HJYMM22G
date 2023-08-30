import Marquee from 'react-fast-marquee';

function BrandBanner() {
  return (
    <Marquee
      autoFill={true}
      gradient={true}
      gradientColor={[251, 249, 243]}
      style={{ height: 'auto' }}
    >
      <img
        src="../src/assets/logos/candycakes.png"
        alt=""
        style={{ height: '3rem', marginRight: '3rem' }}
      />
      <img
        src="../src/assets/logos/chatclub.png"
        alt=""
        style={{ height: '3rem', marginRight: '3rem' }}
      />
      <img
        src="../src/assets/logos/chatropolis.png"
        alt=""
        style={{ height: '3rem', marginRight: '3rem' }}
      />
      <img
        src="../src/assets/logos/share.png"
        alt=""
        style={{ height: '3rem', marginRight: '3rem' }}
      />
      <img
        src="../src/assets/logos/takenbake.png"
        alt=""
        style={{ height: '3rem', marginRight: '3rem' }}
      />
      <img
        src="../src/assets/logos/sunpop.png"
        alt=""
        style={{ height: '3rem', marginRight: '3rem' }}
      />
    </Marquee>
  );
}

export default BrandBanner;
