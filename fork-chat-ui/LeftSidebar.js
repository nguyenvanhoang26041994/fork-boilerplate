import React from 'react';
import styled from 'styled-components';
import { Dialog, Button, Avatar, AvatarGroup, Badge } from '@fork-ui/core';
import { MessageDots, Phone, Settings, Bell } from '@fork-ui/icons/lazy';

const Header = styled(Dialog.Header)`
  height: 80px;
  border-bottom: 1px solid var(--skeleton-color);
  background-color: var(--bg);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDialog = styled(Dialog)`
  height: 100vh;
  border-radius: 0;
  background-color: transparent;
`;

const Wrapper = styled.div`
  padding-right: 2px;
`;

const ChatCard = styled.div`
  display: flex;
  padding: 8px 15px;
  cursor: pointer;

  .__recent-message {
    font-size: 11px;
    max-width: 138px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .__unread-count {
    width: 20px;
    height: 20px;
    text-align: center;
    vertical-align: middle;
    border-radius: 999px;
    color: var(--white);
    background-color: var(--primary);
  }

  &:hover {
    background: var(--primary);
    color: var(--white);

    .__unread-count {
      color: var(--primary);
      background-color: var(--white);
    }
  }
`;
const ChatList = styled.div`
`;
const StyledAvatarGroup = styled(AvatarGroup)`
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;

  > * {
    margin: 0;
    position: absolute;
  }

  > *:nth-child(1) {
    bottom: 0;
    left: 0;
  }

  > *:nth-child(2) {
    top: 0;
    right: 0;
  }
`;
const LeftSidebar = ({ className }) => {
  return (
    <Wrapper className={className}>
      <StyledDialog>
        <Header>
          <Button rounded color="transparent" icon={<MessageDots />} />
          <Button rounded color="transparent" icon={<Phone />} />
          <Button rounded color="transparent" icon={<Bell />} />
          {/* <Button rounded color="transparent" icon={<Bell />} /> */}
          <Button rounded color="transparent" icon={<Settings />} />
        </Header>
        <Dialog.Body style={{ padding: 0, backgroundColor: 'var(--bg)' }} className="common-scrollbar common-scrollbar--hover">
          <ChatList>
            <ChatCard>
              <div className="__avatar">
                <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                  <Avatar size={50} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
                </Badge.Dot>
              </div>
              <div className="flex-1 flex flex-col justify-center ml-3">
                <div style={{ fontWeight: '600' }}>Tùng Lê</div>
                <p className="__recent-message">H về đợi vé mòn mắt</p>
              </div>
              <div className="flex flex-col justify-center items-end ml-3">
                <div className="__time">07:23 AM</div>
                <div className="__unread-count">1</div>
              </div>
            </ChatCard>

            <ChatCard>
              <div className="__avatar">
                <Badge.Dot color="var(--orange-6)" overlap placement="bottom-end">
                  <Avatar size={50} src="https://scontent.xx.fbcdn.net/v/t1.6435-1/p100x100/148962648_1904322393054746_5039216451616807960_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=gnHyYyj-r3wAX8ISWuP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=6&oh=1e85474e8f2e6e15fe660984b366e707&oe=60D9E8D4" />
                </Badge.Dot>
              </div>
              <div className="flex-1 flex flex-col justify-center ml-3">
                <div style={{ fontWeight: '600' }}>Thái Sơn</div>
                <p className="__recent-message">Cho em hỏi cái này với anh?</p>
              </div>
              <div className="flex flex-col justify-center items-end ml-3">
                <div className="__time">05:43 AM</div>
                <div className="__unread-count">6</div>
              </div>
            </ChatCard>

            <ChatCard>
              <div className="__avatar">
                <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                  <Avatar size={50} src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-1/p100x100/143865111_3746460238794789_1710538082440547779_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=9WgBlVUihKAAX8tF4W9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-sin6-1.xx&tp=6&oh=01f24b8e880ec29878ca0d1258624b55&oe=60DAD231" />
                </Badge.Dot>
              </div>
              <div className="flex-1 flex flex-col justify-center ml-3">
                <div style={{ fontWeight: '600' }}>Nguyễn Ngọc Hân</div>
                <p className="__recent-message">OK thank dude</p>
              </div>
              <div className="flex flex-col justify-center items-end ml-3">
                <div className="__time">06:03 PM</div>
                <div>&nbsp;</div>
              </div>
            </ChatCard>

            <ChatCard>
              <div className="__avatar">
                <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                  <Avatar size={50} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/180904085_3892238354216551_318542444565664736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=MgrLjXsMiXMAX-WWTgL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=6&oh=157a71f6ef6f7cc305f7195d1c82ee10&oe=60DAA837" />
                </Badge.Dot>
              </div>
              <div className="flex-1 flex flex-col justify-center ml-3">
                <div style={{ fontWeight: '600' }}>Ngô Nhật Minh</div>
                <p className="__recent-message">Tối về nghiên cứu cách thức vận hành xem sao</p>
              </div>
              <div className="flex flex-col justify-center items-end ml-3">
                <div className="__time">06:03 PM</div>
                <div>&nbsp;</div>
              </div>
            </ChatCard>

            <ChatCard>
              <div className="__avatar">
                <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                  <Avatar size={50} src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A" />
                </Badge.Dot>
              </div>
              <div className="flex-1 flex flex-col justify-center ml-3">
                <div style={{ fontWeight: '600' }}>Lê Thuận</div>
                <p className="__recent-message">You: hả</p>
              </div>
              <div className="flex flex-col justify-center items-end ml-3">
                <div className="__time">3 weeks ago</div>
                <div>&nbsp;</div>
              </div>
            </ChatCard>
            <ChatCard>
              <div className="__avatar">
                <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
                  <StyledAvatarGroup>
                    <Avatar src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A">OP</Avatar>
                    <Avatar src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/180904085_3892238354216551_318542444565664736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=MgrLjXsMiXMAX-WWTgL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=6&oh=157a71f6ef6f7cc305f7195d1c82ee10&oe=60DAA837">H</Avatar>
                  </StyledAvatarGroup>
                </Badge.Dot>
              </div>
              <div className="flex-1 flex flex-col justify-center ml-3">
                <div style={{ fontWeight: '600' }}>Hội Bang Cuối Tuần</div>
                <p className="__recent-message">Ái Vân: OK</p>
              </div>
              <div className="flex flex-col justify-center items-end ml-3">
                <div className="__time">3 mins ago</div>
                <div className="__unread-count">6</div>
              </div>
            </ChatCard>
          </ChatList>
        </Dialog.Body>
      </StyledDialog>
    </Wrapper>
  );
};

export default LeftSidebar;
