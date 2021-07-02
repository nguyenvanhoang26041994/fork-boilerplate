import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Dialog, Avatar, AvatarGroup, Button, Collapse,
  Image, GridImage, Modal, Badge, Popover
} from '@fork-ui/core';
import GalleryPlayer from '@fork-ui/gallery/GalleryPlayer'
import {
  BellOff, UserPlus, Logout, Search, Pencil, ThumbUp,
  Circle, Ban, MessagesOff, Dots, Plus,
} from '@fork-ui/icons/lazy';

const StyledCircle = styled(Circle)`
  color: var(--primary);
  fill: currentColor;
`;
const StyledThumbUp = styled(ThumbUp)`
  color: var(--primary);
  fill: currentColor;
`;

const StyledGridImage = styled(GridImage)`
  .fimage {
    cursor: pointer;
  }
`;

const UserCardStyled = styled.div`
  width: 100%;
  height: 50px;
  padding-left: 14px;
  padding-right: 14px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: var(--btn-bg);
  }

  .__user-info {
    margin-left: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .__user-name {
    color: var(--heading-color);
  }

  .__floated-actions {
    position: absolute;
    right: 7px;
    left: auto;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const ChannelDetailWrapper = styled(Dialog)`
  height: 100%;
  .fpanel-title,
  .--padding-wide,
  ${UserCardStyled} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
const ChannelDetailBody = styled(Dialog.Body)`
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EnhancerAvatar = ({ src, userName, ...otherProps }) => {
  return (
    <Badge.Dot color="var(--green-6)" overlap placement="bottom-end">
      <Avatar src={src} {...otherProps} />
    </Badge.Dot>
  );
};

const ButtonActionWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: var(--heading-color);
`;
const ButtonAction = ({ children, className, icon, ...otherProps }) => {
  return (
    <ButtonActionWrapper className={className}>
      <Button rounded icon={icon} {...otherProps} />
      <span className="mt-2">{children}</span>
    </ButtonActionWrapper>
  );
};

const MenuSyled = styled.div``;
function Menu ({ children }) {
  return (
    <MenuSyled>
      {children}
    </MenuSyled>
  );
}

const ItemStyled = styled.div`
  height: 40px;
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--heading-color);

  &:hover {
    background-color: var(--btn-bg);
  }
`
Menu.Item = (props) => {
  return (
    <ItemStyled {...props} />
  )
};

function UserCard({ children }) {
  return (
    <UserCardStyled>
      {children}
    </UserCardStyled>
  );
}

const GroupChannelDetail = ({ className }) => {
  const [isPreviewGalleryOpen, setIsPreviewGalleryOpen] = useState(false);
  const { isActive, onChange } = Collapse.useCollapse({
    activePanels: ['shared_media', 'customize_chat', 'privacy_n_upport', 'chat_members']
  });
  return (
    <ChannelDetailWrapper className={className}>
      <ChannelDetailBody>
        <div className="mt-10 mb-5 --padding-wide">
          <AvatarGroup>
            <Avatar loading="lazy" size={60} src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Faa095128-b828-11eb-98e3-d1306649ebf7.jpg?crop=1143%2C643%2C30%2C585">OP</Avatar>
            <Avatar loading="lazy" size={60} src="https://c.pxhere.com/photos/f8/4f/dog_pug_animal_pet_funny_cute_adorable_canine-1368002.jpg!d">H</Avatar>
            <Avatar loading="lazy" size={60} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU">T</Avatar>
          </AvatarGroup>
        </div>
        <div className="--padding-wide" style={{ fontSize: '16px', color: 'var(--heading-color)' }}>Hội Bang Cuối Tuần</div>
        <div className="--padding-wide">Active Today</div>
        <div className="p-3 --padding-wide mb-5">
          <ButtonAction icon={<UserPlus />}>Add</ButtonAction>
          <ButtonAction icon={<BellOff />} color="primary" className="ml-5">Mute</ButtonAction>
        </div>
        <Collapse className="w-full">
          <Collapse.Panel
            title={(
              <span>
                Customize Chat
              </span>
            )}
            active={isActive('customize_chat')}
            onClick={() => onChange('customize_chat')}
          >
            <Menu>
              <Menu.Item className="--padding-wide">
                <StyledCircle />
                <span className="ml-3">Change Theme</span>
              </Menu.Item>
              <Menu.Item className="--padding-wide">
                <StyledThumbUp />
                <span className="ml-3">Change Emoji</span>
              </Menu.Item>
              <Menu.Item className="--padding-wide">
                <Pencil />
                <span className="ml-3">Edit Nickname</span>
              </Menu.Item>
              <Menu.Item className="--padding-wide">
                <Search />
                <span className="ml-3">Search in conversation</span>
              </Menu.Item>
            </Menu>
          </Collapse.Panel>
          <Collapse.Panel
            title={(
              <span>Chat Members</span>
            )}
            active={isActive('chat_members')}
            onClick={() => onChange('chat_members')}
          >
            <UserCard className="--padding-wide">
              <EnhancerAvatar userName="Tùng Lê" size={30} src="https://i.pinimg.com/originals/ce/53/c5/ce53c5bcd350ba856e5c53c343376fb2.jpg" />
              <div className="__user-info">
                <span className="__user-name">Tùng Lê</span>
              </div>
              <Button color="transparent" rounded icon={<Dots />} className="__floated-actions" />
            </UserCard>
            <UserCard className="--padding-wide">
              <EnhancerAvatar userName="Thái Sơn" size={30} src="https://c.pxhere.com/photos/f8/4f/dog_pug_animal_pet_funny_cute_adorable_canine-1368002.jpg!d" />
              <div className="__user-info">
                <span className="__user-name">Thái Sơn</span>
                <span className="__user-role">Admin</span>
              </div>
              <Button color="transparent" rounded icon={<Dots />} className="__floated-actions" />
            </UserCard>
            <UserCard className="--padding-wide">
              <EnhancerAvatar userName="Ngô Nhật Minh" size={30} src="https://r4x8d8k3.rocketcdn.me/wp-content/uploads/2020/05/hannah-grace-fk4tiMlDFF0-unsplash-1200x800.jpg" />
              <div className="__user-info">
                <span className="__user-name">Ngô Nhật Minh</span>
              </div>
              <Button color="transparent" rounded icon={<Dots />} className="__floated-actions" />
            </UserCard>
            <div className="flex items-center pt-3 pb-3 --padding-wide">
              <Button rounded icon={ <Plus />} />
              <span className="ml-4 cursor-pointer" style={{ color: 'var(--heading-color)' }}>Add Members</span>
            </div>
          </Collapse.Panel>
          <Collapse.Panel
            title={(
              <span>Privacy & Support</span>
            )}
            active={isActive('privacy_n_upport')}
            onClick={() => onChange('privacy_n_upport')}
          >
            <Menu>
              <Menu.Item className="--padding-wide">
                <MessagesOff />
                <span className="ml-3">Ignore Messages</span>
              </Menu.Item>
              <Menu.Item className="--padding-wide">
                <Logout />
                <span className="ml-3">Leave Group</span>
              </Menu.Item>
            </Menu>
          </Collapse.Panel>
          <Collapse.Panel
            title={(
              <span>Shared Media</span>
            )}
            active={isActive('shared_media')}
            onClick={() => onChange('shared_media')}
          >
            <GalleryPlayer
              isOpen={isPreviewGalleryOpen}
              onClose={() => setIsPreviewGalleryOpen(false)}
              onOutsideClick={() => setIsPreviewGalleryOpen(false)}
            >
              
            </GalleryPlayer>
            <StyledGridImage cols={3} gap={4}>
              <Image src="https://i.pinimg.com/originals/ce/53/c5/ce53c5bcd350ba856e5c53c343376fb2.jpg" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://c.pxhere.com/photos/f8/4f/dog_pug_animal_pet_funny_cute_adorable_canine-1368002.jpg!d" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-superJumbo.jpg" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://www.forbes.com/uk/advisor/wp-content/uploads/2021/05/short-coated-tan-puppy-stockpack-unsplash-scaled.jpg" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://r4x8d8k3.rocketcdn.me/wp-content/uploads/2020/05/hannah-grace-fk4tiMlDFF0-unsplash-1200x800.jpg" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS63g2102imNCwDeEwD9Thd4M2afET9wGBCxQ&usqp=CAU" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ADZSchb6mTjtrv5OYkCzkQWUVdbfl5N5Ww&usqp=CAU" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Faa095128-b828-11eb-98e3-d1306649ebf7.jpg?crop=1143%2C643%2C30%2C585" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://www.thekennelclub.org.uk/media/2470/essential-equipment-credit-vanessa-palmer-vines-the-kennel-club.jpg?mode=pad&width=1000&rnd=132139691680000000" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://parade.com/wp-content/uploads/2021/03/Top-10-Puppy-Names-of-2021.jpg" onClick={() => setIsPreviewGalleryOpen(true)} />
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" onClick={() => setIsPreviewGalleryOpen(true)} />
            </StyledGridImage>
          </Collapse.Panel>
        </Collapse>
      </ChannelDetailBody>
    </ChannelDetailWrapper>
  );
};

export default GroupChannelDetail;
