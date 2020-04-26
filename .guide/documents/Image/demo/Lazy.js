import React from 'react';
import { Image, Flex } from '@/rc-neumorphism/core';

const ImageWrapper = ({ src, alt }) => (
  <Flex span="1/2" margin={2} >
    <Image
      lazyLoad
      src={src}
      alt={alt}
    />
  </Flex>
);

const Demo = () => (
  <div
    className="flex w-full flex-col"
    style={{
      height: 'auto',
    }}
  >
    <h2 style={{ height: '100vh' }}></h2>
    <Flex margin={2}>
      <ImageWrapper src="https://wallpaperaccess.com/full/1540982.jpg" alt="img 1" />
      <ImageWrapper src="https://www.ecopetit.cat/wpic/mpic/47-476968_mclaren-p1-2018-price.jpg" alt="img 2" />
    </Flex>

    <Flex margin={2}>
      <ImageWrapper src="https://img5.goodfon.com/wallpaper/nbig/0/40/alexander-filippov-kanivore-forza-horizon-4-game-art-transpo.jpg" alt="img 3" />
      <ImageWrapper src="https://www.lefthudson.com/wp-content/uploads/2019/11/mclaren-wallpaper-unique-mclaren-p1-wallpapers-wallpaper-cave-of-the-day-of-mclaren-wallpaper.jpg" alt="img 4" />
    </Flex>

    <Flex margin={2}>
      <ImageWrapper src="https://c4.wallpaperflare.com/wallpaper/629/410/568/5c1f9ff278d88-wallpaper-preview.jpg" alt="img 5" />
      <ImageWrapper src="https://www.hdwallpapers.in/download/mclaren_p1_gtr-HD.jpg" alt="img 6" />
    </Flex>

    <Flex margin={2}>
      <ImageWrapper src="https://data.1freewallpapers.com/download/mclaren-p1-gtr-mclaren-p1-mclaren-sports-car-rear-view.jpg" alt="img 7" />
      <ImageWrapper src="https://wallpaperplay.com/walls/full/2/f/9/378341.jpg" alt="img 8" />
    </Flex>

    <Flex margin={2}>
      <ImageWrapper src="https://www.hdcarwallpapers.com/walls/2018_bugatti_chiron_sport_4k_6-HD.jpg" alt="img 9" />
      <ImageWrapper src="https://wallup.net/wp-content/uploads/2018/09/25/599791-McLaren-car.jpg" alt="img 10" />
    </Flex>

    <Flex margin={2}>
      <ImageWrapper src="https://freshwallpapers.net/download/22057/3840x2160/download/2018-ferrari-488-gtb-pogea-racing-fplus-corsa-4k.jpg" alt="img 11" />
      <ImageWrapper src="https://cutewallpaper.org/21/wallpaper-of-ferrari/La-Ferrari-4k-Rear-Lights,-HD-Cars,-4k-Wallpapers,-Images-.jpg" alt="img 12" />
    </Flex>

    <Flex margin={2}>
      <ImageWrapper src="https://www.100hdwallpapers.com/wallpapers/3840x2160/ferrari_sf90_stradale_2019_4k_1-hd_wallpapers.jpg" alt="img 13"/>
      <ImageWrapper src="https://wallpapercave.com/wp/wp3616393.jpg" alt="img 14" />
    </Flex>

    <Flex>
      <ImageWrapper src="https://i.imgur.com/ptdjN93.jpg" alt="img 15" />
      <ImageWrapper src="https://i.imgur.com/ysY7OIg.jpg" alt="img 16" />
    </Flex>

    <Flex>
      <ImageWrapper src="https://i.imgur.com/vC6nJ0S.jpg" alt="img 2" />
      <ImageWrapper src="https://i.imgur.com/uI9kigA.jpg" alt="img 17" />
    </Flex>
  </div>
);

export default Demo;
