import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Dialog, Avatar, AvatarGroup, Button, Collapse,
  Image, GridImage, Modal,
} from '@fork-ui/core';
import {
  BellOff, UserPlus, Logout,
} from '@fork-ui/icons/lazy';

const StyledGridImage = styled(GridImage)`
  .fimage {
    cursor: pointer;
    border-radius: 2px;
  }
`;

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

const GroupChannelDetail = ({ className }) => {
  const [isPreviewGalleryOpen, setIsPreviewGalleryOpen] = useState(false);
  const { isActive, onChange } = Collapse.useCollapse({
    activePanels: ['shared_media']
  });
  return (
    <ChannelDetailWrapper className={className}>
      <ChannelDetailBody>
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
          <Button rounded icon={<Logout />} className="m-2" />
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
          </Collapse.Panel>
          <Collapse.Panel
            title={(
              <span>Chat Members</span>
            )}
            active={isActive('chat_members')}
            onClick={() => onChange('chat_members')}
          ></Collapse.Panel>
          <Collapse.Panel
            title={(
              <span>Privacy & Support</span>
            )}
            active={isActive('privacy_n_upport')}
            onClick={() => onChange('privacy_n_upport')}
          ></Collapse.Panel>
          <Collapse.Panel
            title={(
              <span>Shared Media</span>
            )}
            active={isActive('shared_media')}
            onClick={() => onChange('shared_media')}
          >
            <Modal
              isOpen={isPreviewGalleryOpen}
              margin={0}
              style={{ height: '100vh', top: 0, borderRadius: 0 }}
              onOutsideClick={() => setIsPreviewGalleryOpen(false)}
            >
              <Modal.Header>
                <Modal.Closer rounded onClick={() => setIsPreviewGalleryOpen(false)} />
              </Modal.Header>
              <Modal.Body>
                <Image style={{ width: '100%', height: '100%' }}src="https://i.pinimg.com/originals/ce/53/c5/ce53c5bcd350ba856e5c53c343376fb2.jpg" />
              </Modal.Body>
            </Modal>
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
