import React from 'react';
import { Image } from '@/fork-ui/core';

const Demo = () => (
  <Image
    lazyload
    blur
    src="https://www.100hdwallpapers.com/wallpapers/3840x2160/ferrari_sf90_stradale_2019_4k_1-hd_wallpapers.jpg"
    alt="lazyload image"
    w="100%"
    h="600px"
  />
);

export default Demo;
