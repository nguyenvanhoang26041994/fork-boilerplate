import React from 'react';
import { LazyImage, Flex } from '@/rc-neumorphism/core';

const LazyImageWrapper = ({ src, alt }) => (
  <Flex span="1/2" margin={2} >
    <LazyImage
      placeHolder="https://dummyimage.com/674x384/fff/ffffff.png"
      src={src}
      alt={alt}
    />
  </Flex>
);

const Demo = () => {
  return (
    <div
      className="flex w-full flex-col"
      style={{
        height: 'auto',
      }}
    >
      <h2 style={{ height: '100vh' }}>Lazy Load Image</h2>
      <Flex margin={2}>
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/SecondBanner/68/Untitled-3.jpg" alt="img 1" />
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/4909/4909/1561545060451jowissa-dong-ho-thuy-sy-nu-vien-pha-le-j5-643-m.jpg" alt="img 2" />
      </Flex>

      <Flex margin={2}>
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/7710/1569319257327SKW2789-Desktop-1.jpg" alt="img 3" />
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/11663/1571300031657EQ9063-04D-Desktop-1.jpg" alt="img 4" />
      </Flex>

      <Flex margin={2}>
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/1008/1568974189489T063.610.11.067.00-Desktop-1.jpg" alt="img 5" />
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/3668/1575615330344BH3004-59D-Desktop-1.jpg" alt="img 6" />
      </Flex>

      <Flex margin={2}>
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/3672/1572335290327BE9174-55E-Desktop-1.jpg" alt="img 7" />
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/3675/1575615324485AG8353-81P-Desktop-1.jpg" alt="img 8" />
      </Flex>

      <Flex margin={2}>
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/FourthBanner/32/740x844.jpg" alt="img 9" />
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/FourthBanner/84/BestSeller-1540x844.jpg" alt="img 10" />
      </Flex>

      <Flex margin={2}>
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/FourthBanner/86/Fourth-Banner-PC-1340x796.jpg" alt="img 11" />
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/FourthBanner/35/940x796.jpg" alt="img 12" />
      </Flex>

      <Flex margin={2}>
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/FifthBanner/87/Fifth-banner-PC-2340x880.jpg" alt="img 13"/>
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/BottomBanner/57/22-buoc-sua-chua-2340.880-min-1.jpg" alt="img 14" />
      </Flex>

      <Flex margin={2}>
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/BottomBanner/59/banner-bao-hanh-10nam-2340.880-1.jpg" alt="img 15" />
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/BottomBanner/58/thay-pi-danh-bong-1.jpg" alt="img 16" />
      </Flex>

      <Flex margin={2} className="w-full">
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/Banner/TopBanner/85/Top-banner-PC-2340x880-NEW.jpg" alt="img 2" />
        <LazyImageWrapper src="https://cdn.pnjwatch.com.vn/LandingPage/14/y-h.jpg" alt="img 17" />
      </Flex>
     </div>
  );
};

export default Demo;
