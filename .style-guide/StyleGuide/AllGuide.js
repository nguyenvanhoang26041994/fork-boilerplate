import React from 'react';
import { Flex } from '@fork-ui/core';

import Demo from './Demo';

import AvatarMainGuide from '@style-guide/guides/Avatar/Avatar';
import BadgeMainGuide from '@style-guide/guides/Badge/Badge';
import ButtonMainGuide from '@style-guide/guides/Button/Button';
import SkeletonMainGuide from '@style-guide/guides/Skeleton/Skeleton';
import CheckboxMainGuide from '@style-guide/guides/Checkbox/Checkbox';
import SwitchMainGuide from '@style-guide/guides/Switch/Switch';
import RadioMainGuide from '@style-guide/guides/Radio/Radio';
import ColorsMainGuide from '@style-guide/guides/Colors/Colors';
import LoaderMainGuide from '@style-guide/guides/Loader/Loader';
import IconMainGuide from '@style-guide/guides/Icon/SomeNiceIcons';
import TabsMainGuide from '@style-guide/guides/Tabs/Tabs';
import CollapseMainGuide from '@style-guide/guides/Collapse/Collapse';
import StepperMainGuide from '@style-guide/guides/Stepper/Stepper';
import PaginationMainGuide from '@style-guide/guides/Pagination/Pagination';

const AllGuide = () => {
  return (
    <Flex col w="full">
      <Flex row w="full" id="colors" style={{ paddingBottom: '1px' }}>
        <Demo name="Colors">
          <ColorsMainGuide />
        </Demo>
      </Flex>
      <Flex row w="full" id="skeleton-and-button" style={{ paddingBottom: '1px' }}>
        <Flex w="1/2" style={{ paddingRight: '1px' }}>
          <Demo name="Skeleton">
            <SkeletonMainGuide />
          </Demo>
        </Flex>
        <Flex col w="1/2">
          <Flex w="full" style={{ paddingBottom: '1px' }}>
            <Demo name="Button">
              <div><ButtonMainGuide /></div>
            </Demo>
          </Flex>
          <Flex w="full" grow>
            <Demo name="Badge">
              <div><BadgeMainGuide /></div>
            </Demo>
          </Flex>
        </Flex>
      </Flex>
      <Flex row w="full" id="checkbox" style={{ paddingBottom: '1px' }}>
        <Flex col w="1/3" style={{ paddingRight: '1px' }}>
          <div style={{ paddingBottom: '1px' }}>
            <Demo name="Switch" centered>
              <SwitchMainGuide />
            </Demo>
          </div>
          <div style={{ paddingBottom: '1px' }}>
            <Demo name="Checkbox" centered>
              <CheckboxMainGuide />
            </Demo>
          </div>
          <div style={{ paddingBottom: '1px' }}>
            <Demo name="Radio" centered>
              <RadioMainGuide />
            </Demo>
          </div>
          <Demo name="Collapse">
            <CollapseMainGuide />
          </Demo>
        </Flex>
        <Flex col w="2/3">
          <Flex w="full" style={{ paddingBottom: '1px' }}>
            <Demo name="Loader" centered>
              <LoaderMainGuide />
            </Demo>
          </Flex>
          <Flex w="full" style={{ paddingBottom: '1px' }}>
            <Flex w="1/2" style={{ paddingRight: '1px' }}>
              <Demo name="Icon">
                <IconMainGuide />
              </Demo>
            </Flex>
            <Flex w="1/2">
              <Demo name="Avatar">
                <div><AvatarMainGuide /></div>
              </Demo>
            </Flex>
          </Flex>
          <Flex w="full" style={{ paddingBottom: '1px' }}>
            <Demo name="Tabs">
              <TabsMainGuide />
            </Demo>
          </Flex>
          <Flex w="full" style={{ paddingBottom: '1px' }}>
            <Demo name="Stepper">
              <StepperMainGuide />
            </Demo>
          </Flex>
          <Flex w="full">
            <Flex w="1/2" style={{ paddingright: '1px' }}>
              <Demo name="Pagination">
                <PaginationMainGuide />
              </Demo>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AllGuide;
