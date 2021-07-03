import React from 'react';
import { Flex } from '@fork-ui/core';

import Demo from './Demo';

import AvatarMainGuide from '@fork-guide/guides/Avatar/Avatar';
import BadgeMainGuide from '@fork-guide/guides/Badge/Badge';
import ButtonMainGuide from '@fork-guide/guides/Button/Button';
import SkeletonMainGuide from '@fork-guide/guides/Skeleton/Skeleton';
import CheckboxMainGuide from '@fork-guide/guides/Checkbox/Checkbox';
import SwitchMainGuide from '@fork-guide/guides/Switch/Switch';
import RadioMainGuide from '@fork-guide/guides/Radio/Radio';
import ColorsMainGuide from '@fork-guide/guides/Colors/Colors';
import LoaderMainGuide from '@fork-guide/guides/Loader/Loader';
import IconMainGuide from '@fork-guide/guides/Icon/SomeNiceIcons';
import TabsMainGuide from '@fork-guide/guides/Tabs/Tabs';
import CollapseMainGuide from '@fork-guide/guides/Collapse/Collapse';
import StepperMainGuide from '@fork-guide/guides/Stepper/Stepper';
import PaginationMainGuide from '@fork-guide/guides/Pagination/Pagination';
import ProgressMainGuide from '@fork-guide/guides/Progress/Progress';
import FormFieldMainGuide from '@fork-guide/guides/FormField/FormField';
import DialogMainGuide from '@fork-guide/guides/Dialog/Dialog';
import TooltipMainGuide from '@fork-guide/guides/Tooltip/Tooltip';
import PopoverMainGuide from '@fork-guide/guides/Popover/Popover';
import AlertMainGuide from '@fork-guide/guides/Alert/Alert';
import ConfirmMainGuide from '@fork-guide/guides/Confirm/Confirm';

const AllGuide = () => {
  return (
    <Flex col w="full">
      <Flex row w="full" style={{ paddingBottom: '1px' }}>
        <Demo name="Colors">
          <ColorsMainGuide />
        </Demo>
      </Flex>
      <Flex row w="full" style={{ paddingBottom: '1px' }}>
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
      <Flex row w="full" style={{ paddingBottom: '1px' }}>
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
          <Demo name="Collapse" className="flex-1">
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
          <Flex w="full" className="flex-1">
            <Flex w="1/2" style={{ paddingRight: '1px' }}>
              <Demo name="Pagination" centered>
                <PaginationMainGuide />
              </Demo>
            </Flex>
            <Flex w="1/2">
              <Demo name="Progress" centered>
                <ProgressMainGuide />
              </Demo>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex row w="full" style={{ paddingBottom: '1px' }}>
        <Flex col w="1/2" style={{ paddingRight: '1px' }}>
          <Flex w="full" style={{ paddingBottom: '1px' }}>
            <Demo name="Dialog">
              <DialogMainGuide />
            </Demo>
          </Flex>
          <Flex w="full" className="flex-1">
            <Demo name="Tooltip">
              <TooltipMainGuide />
            </Demo>
          </Flex>
        </Flex>
        <Flex w="1/2">
          <Demo name="Form Field" className="flex-1">
            <FormFieldMainGuide />
          </Demo>
        </Flex>
      </Flex>
      <Flex row w="full" style={{ paddingBottom: '1px' }}>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <Demo name="Popover">
            <PopoverMainGuide />
          </Demo>
        </Flex>
        <Flex w="1/3" style={{ paddingRight: '1px' }}>
          <Demo name="Alert">
            <AlertMainGuide />
          </Demo>
        </Flex>
        <Flex w="1/3">
          <Demo name="Confirm">
            <ConfirmMainGuide />
          </Demo>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default AllGuide;
