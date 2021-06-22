import React, { useCallback } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useHistory, useLocation } from 'react-router-dom';

import {
  Home,
  GridDots,
  Mouse,
  Checkbox,
  Circle,
  ToggleRight,
  Notification,
  User,
  GripHorizontal,
  LoaderQuarter,
  Loader,
  PageBreak,
  DeviceLaptop,
  ChevronDown,
  ArrowRightCircle,
  Message,
  Message2,
  Typography,
  Tag,
  Line,
  QuestionMark,
  MessageReport,
  AlertTriangle,
  Bell,
  LayoutBottombar,
  LayoutSidebar
} from '@fork-ui/icons/lazy';

const MenuItemStyled = styled.div`
  height: 60px;
  padding: 0 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-left: 2px solid transparent;
  border-right: 2px solid transparent;
  background-color: var(--bg);

  .__avatar {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.2);

    .ficon {
      font-size: 16px;
    }
  }

  .__name {
    padding: 0 10px;
  }

  &.--is-active,
  &:hover {
    .__avatar,
    .__name {
      color: var(--primary);
    }
    border-right-color: var(--primary);
  }
`;

const Wrapper = styled.div`
  width: inherit;
`;

const MenuWrapper = styled.div``;

const Container = styled.div`
  width: 270px;
  position: relative;

  &.--is-minimal {
    width: 70px;

    ${MenuItemStyled},
    ${Header} {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ${MenuItemStyled} {
      .__name {
        display: none;
      }
    }
  }

  ${Wrapper} {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    overflow-y: scroll;
  }
`;
const Header = styled.div`
  height: 70px;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  padding: 0 8px;

  .__home {
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;

    .ficon {
      font-size: 16px;
    }
  }
`;

const MenuItem = ({ children, active, ...otherProps }) => {
  return (
    <MenuItemStyled
      {...otherProps}
      className={cn({
        '--is-active': active,
      })}
    >
      {children}
    </MenuItemStyled>
  );
};

const MenuItemEnhander = ({ path, ...otherProps }) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <MenuItem
      {...otherProps}
      onClick={() => history.push(path)}
      active={location.pathname === path}
    />
  );
};

const LeftNavigation = ({ minimal }) => {
  const history = useHistory();
  return (
    <Container className={cn({'--is-minimal': minimal })}>
      <Wrapper className="hide-scrollbar">
        <div style={{ paddingBottom: '2px' }}>
          <Header>
            <div className="__home">
              <Home onClick={() => history.push('/document')} />
            </div>
            <div></div>
          </Header>
        </div>
        <MenuWrapper>
          <MenuItemEnhander path="/document/icon">
            <div className="__avatar">
              <GridDots />
            </div>
            <div className="__name">Icon</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/button">
            <div className="__avatar">
              <Mouse />
            </div>
            <div className="__name">Button</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/checkbox">
            <div className="__avatar">
              <Checkbox />
            </div>
            <div className="__name">Checkbox</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/radio">
            <div className="__avatar">
              <Circle />
            </div>
            <div className="__name">Radio</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/switch">
            <div className="__avatar">
              <ToggleRight />
            </div>
            <div className="__name">Switch</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/badge">
            <div className="__avatar">
              <Notification />
            </div>
            <div className="__name">Badge</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/avatar">
            <div className="__avatar">
              <User />
            </div>
            <div className="__name">Avatar</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/typography">
            <div className="__avatar">
              <Typography />
            </div>
            <div className="__name">Typography</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/skeleton">
            <div className="__avatar">
              <GripHorizontal />
            </div>
            <div className="__name">Skeleton</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/loader">
            <div className="__avatar">
              <LoaderQuarter />
            </div>
            <div className="__name">Loader</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/progress">
            <div className="__avatar">
              <Loader />
            </div>
            <div className="__name">Progress</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/chip">
            <div className="__avatar">
              <Tag />
            </div>
            <div className="__name">Chip</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/pagination">
            <div className="__avatar">
              <PageBreak />
            </div>
            <div className="__name">Pagination</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/tabs">
            <div className="__avatar">
              <DeviceLaptop />
            </div>
            <div className="__name">Tabs</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/collapse">
            <div className="__avatar">
              <ChevronDown />
            </div>
            <div className="__name">Collapse</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/stepper">
            <div className="__avatar">
              <ArrowRightCircle />
            </div>
            <div className="__name">Stepper</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/timeline">
            <div className="__avatar">
              <Line />
            </div>
            <div className="__name">Timeline</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/popover">
            <div className="__avatar">
              <Message />
            </div>
            <div className="__name">Popover</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/tooltip">
            <div className="__avatar">
              <Message2 />
            </div>
            <div className="__name">Tooltip</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/confirm">
            <div className="__avatar">
              <QuestionMark />
            </div>
            <div className="__name">Confirm</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/popconfirm">
            <div className="__avatar">
              <MessageReport />
            </div>
            <div className="__name">Popconfirm</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/alert">
            <div className="__avatar">
              <AlertTriangle />
            </div>
            <div className="__name">Alert</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/notification">
            <div className="__avatar">
              <Bell />
            </div>
            <div className="__name">Notification</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/modal">
            <div className="__avatar">
              <LayoutBottombar />
            </div>
            <div className="__name">Modal</div>
          </MenuItemEnhander>
          <MenuItemEnhander path="/document/drawer">
            <div className="__avatar">
              <LayoutSidebar />
            </div>
            <div className="__name">Drawer</div>
          </MenuItemEnhander>
        </MenuWrapper>
      </Wrapper>
    </Container>
  );
};

export default LeftNavigation;
