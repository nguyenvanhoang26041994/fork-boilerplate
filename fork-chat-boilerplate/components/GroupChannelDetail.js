import React from 'react';
import styled from 'styled-components';
import { Dialog, Avatar, AvatarGroup, Button } from '@fork-ui/core';
import {
  BellOff, UserPlus, ArrowBarRight, EditCircle,
  Circle
} from '@fork-ui/icons/lazy';

const ChannelDetailWrapper = styled(Dialog)`
  height: 100%;
`;
const ChannelDetailBody = styled(Dialog.Body)`
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 15px;
  width: 100%;
  cursor: pointer;
  min-height: 40px;
  background-color: var(--btn-bg);
  border-bottom: 1px solid var(--skeleton-color);

  .__icon {
    width: 30px;
    flex-shrink: 0;
  }

  .__name {
  }
`;
const GroupChannelDetail = ({ className }) => {
  return (
    <ChannelDetailWrapper className={className}>
      <ChannelDetailBody className="common-scrollbar common-scrollbar--hover">
        <AvatarGroup className="mt-10 mb-5">
          <Avatar loading="lazy" size={60} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A">OP</Avatar>
          <Avatar loading="lazy" size={60} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/180904085_3892238354216551_318542444565664736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=MgrLjXsMiXMAX-WWTgL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=6&oh=157a71f6ef6f7cc305f7195d1c82ee10&oe=60DAA837">H</Avatar>
          <Avatar loading="lazy" size={60} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385">T</Avatar>
        </AvatarGroup>
        <div style={{ fontSize: '16px', color: 'var(--heading-color)' }}>Hội Bang Cuối Tuần</div>
        <div>Active Today</div>
        <div className="p-3">
          <Button rounded icon={<UserPlus />} className="m-2" />
          <Button rounded icon={<BellOff />} className="m-2" />
          <Button border="solid" color="danger" rounded icon={<ArrowBarRight />} className="m-2" />
        </div>
        {/* <div className="w-full">
          <Option>
            <div className="__icon">
              <Circle />
            </div>
            <h3 className="__name">Theme</h3>
          </Option>
        </div> */}
      </ChannelDetailBody>
    </ChannelDetailWrapper>
  );
};

export default GroupChannelDetail;
