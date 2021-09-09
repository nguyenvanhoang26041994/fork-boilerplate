import React from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';

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
  LayoutGrid,
  AlertTriangle,
  Bell,
  LayoutBottombar,
  LayoutSidebar,
  Search,
  ChevronsDown,
  ChevronsUp,
} from '@fork-ui/icons/lazy';

const MenuItemStyled = styled.div`
  height: 45px;
  padding: 0 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: var(--bg);
  color: var(--color-low-emphasis);

  .__avatar {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    .ficon {
      font-size: 16px;
    }
  }

  .__name {
    padding: 0 10px;
  }

  &.--is-active,
  &:hover {
    background-color: var(--primary);
    color: var(--white);
  }
`;

const Wrapper = styled.div`
  width: inherit;
  background-color: var(--bg);
`;

const MenuWrapper = styled.div``;
const Header = styled.div`
  height: 70px;
  background-color: var(--bg);
  display: flex;
  align-items: center;
  padding: 0 8px;

  .__home {
    height: 40px;
    width: 40px;
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
const Container = styled.div`
  width: 270px;
  position: relative;

  &.--is-minimal {
    width: 70px;

    ${MenuItemStyled},
    ${Header} {
      justify-content: center;
    }

    ${MenuItemStyled} {
      .__name {
        display: none;
      }

      &.--is-active,
      &:hover {
        background-color: var(--bg);
        .__avatar {
          background-color: var(--primary);
        }
      }
    }
  }

  ${Wrapper} {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
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
  let { path } = useRouteMatch();
  return (
    <Container className={cn({'--is-minimal': minimal })}>
      <Wrapper className="common-scrollbar common-scrollbar--hover">
        <div style={{ paddingBottom: '2px' }}>
          <Header>
            <div className="__home">
              <Home onClick={() => history.push(path)} />
            </div>
            <div></div>
          </Header>
        </div>
        <MenuWrapper>
          <MenuItemEnhander path={`${path}/icon`}>
            <div className="__avatar">
              <GridDots />
            </div>
            <div className="__name">Icon</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/button`}>
            <div className="__avatar">
              <Mouse />
            </div>
            <div className="__name">Button</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/checkbox`}>
            <div className="__avatar">
              <Checkbox />
            </div>
            <div className="__name">Checkbox</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/radio`}>
            <div className="__avatar">
              <Circle />
            </div>
            <div className="__name">Radio</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/switch`}>
            <div className="__avatar">
              <ToggleRight />
            </div>
            <div className="__name">Switch</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/badge`}>
            <div className="__avatar">
              <Notification />
            </div>
            <div className="__name">Badge</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/avatar`}>
            <div className="__avatar">
              <User />
            </div>
            <div className="__name">Avatar</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/typography`}>
            <div className="__avatar">
              <Typography />
            </div>
            <div className="__name">Typography</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/skeleton`}>
            <div className="__avatar">
              <GripHorizontal />
            </div>
            <div className="__name">Skeleton</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/loader`}>
            <div className="__avatar">
              <LoaderQuarter />
            </div>
            <div className="__name">Loader</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/progress`}>
            <div className="__avatar">
              <Loader />
            </div>
            <div className="__name">Progress</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/chip`}>
            <div className="__avatar">
              <Tag />
            </div>
            <div className="__name">Chip</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/pagination`}>
            <div className="__avatar">
              <PageBreak />
            </div>
            <div className="__name">Pagination</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/tabs`}>
            <div className="__avatar">
              <DeviceLaptop />
            </div>
            <div className="__name">Tabs</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/grid`}>
            <div className="__avatar">
              <LayoutGrid />
            </div>
            <div className="__name">Grid</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/searchbox`}>
            <div className="__avatar">
              <Search />
            </div>
            <div className="__name">Searchbox</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/collapse`}>
            <div className="__avatar">
              <ChevronDown />
            </div>
            <div className="__name">Collapse</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/stepper`}>
            <div className="__avatar">
              <ArrowRightCircle />
            </div>
            <div className="__name">Stepper</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/timeline`}>
            <div className="__avatar">
              <Line />
            </div>
            <div className="__name">Timeline</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/popover`}>
            <div className="__avatar">
              <Message />
            </div>
            <div className="__name">Popover</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/tooltip`}>
            <div className="__avatar">
              <Message2 />
            </div>
            <div className="__name">Tooltip</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/confirm`}>
            <div className="__avatar">
              <QuestionMark />
            </div>
            <div className="__name">Confirm</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/alert`}>
            <div className="__avatar">
              <AlertTriangle />
            </div>
            <div className="__name">Alert</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/notification`}>
            <div className="__avatar">
              <Bell />
            </div>
            <div className="__name">Notification</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/modal`}>
            <div className="__avatar">
              <LayoutBottombar />
            </div>
            <div className="__name">Modal</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/drawer`}>
            <div className="__avatar">
              <LayoutSidebar />
            </div>
            <div className="__name">Drawer</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/select`}>
            <div className="__avatar">
              <ChevronDown />
            </div>
            <div className="__name">Select</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/multiselect`}>
            <div className="__avatar">
              <ChevronsDown />
            </div>
            <div className="__name">Multi Select</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/autocomplete`}>
            <div className="__avatar">
              <ChevronsUp />
            </div>
            <div className="__name">Auto Complete</div>
          </MenuItemEnhander>
          <MenuItemEnhander path={`${path}/formfield`}>
            <div className="__avatar">
              <DeviceLaptop />
            </div>
            <div className="__name">Form Field</div>
          </MenuItemEnhander>
        </MenuWrapper>
      </Wrapper>
    </Container>
  );
};

export default LeftNavigation;
