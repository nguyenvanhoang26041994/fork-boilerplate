import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import {
  Radio,
  Switch,
  Checkbox,
  Flex,
  Button,
  Badge,
  Tabs,
  Slider,
  Loader,
  Icon,
  Collapse,
  ButtonGroup,
  Pagination,
  Stepper,
  Progress,
  Menu,
  Timeline,
  Rater,
  Skeleton,
  Avatar,
  Textbox,
  Password,
  Textarea,
  Select,
  InputNumber,
  Chip,
  Dialog,
  SpeedDial,
  PureNotification,
  PureAlert,
  Upload,
  Divider,
  Breadcrumb,
  Carousel,
  Typo,
} from './rc-neumorphism/core';

const listProduct = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ColorWrapper = styled(Flex)`
  min-width: 7rem;
  min-height: 7rem;
  display: flex;
  flex-direction: column;
  box-shadow: var(--overlay--shadow);
  border-radius: var(--border-radius);
  overflow: hidden;
`;
const ColorShower = styled.div`
  width: 100%;
  height: 100%;
`;

const Color = ({ value }) => (
  <ColorWrapper>
    <ColorShower style={{ backgroundColor: value }} />
  </ColorWrapper>
);

const SectionWrapper = styled(Flex)`
  width: 100%;
  padding: 0.5rem;

  &.--space-5 {
    > * {
      margin-right: 10px;
    }
  }

  &.--col.--space-5 {
    > * {
      margin-bottom: 0.5em;
    }
  }

  &.--space-10 {
    > * {
      margin-right: 1em;
    }
  }

  &.--col.--space-10 {
    > * {
      margin-bottom: 1em;
    }
  }
`;

const Section = ({ ...otherProps }) => {
  return (
    <SectionWrapper {...otherProps} />
  );
};

const Loren = () => (
  <Flex col style={{ padding: '0.5 1.5rem' }} className="w-full">
    <Flex items="center" className="mb-5">
      <Badge
        dot
        overlap
        color="#0df316"
        bottomRight
      >
        <Avatar name="Hoang Nguyen" size="1.5rem" />
      </Badge>
      <Flex col className="ml-2 flex-1">
        <Skeleton p  w="70%" />
        <Skeleton p  w="20%" />
      </Flex>
    </Flex>
    <Skeleton rect w="100%" h="200px" />
  </Flex>
);

const Boxer = styled.div`
  width: 3em;
  height: 3em;
  border-radius: var(--border-radius);
  background-color: var(--secondary-bg);
`;

const NotificationBox = () => {
  return (
    <Flex className="mb-5" style={{ width: 300 }}>
      <div>
        <Badge
          dot
          overlap
          color="#0df316"
          bottomRight
        >
          <Avatar name="Hoang Nguyen" size="0.75rem" />
        </Badge>
      </div>
      <Flex col className="ml-2 flex-1">
        <Skeleton p  w="70%" />
        <Skeleton p  w="20%" />
      </Flex>
    </Flex>
  );
};

const ReactTab = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);

    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <Flex col style={{ padding: '0.5 1.5rem' }} className="w-full">
        <Flex items="center">
          <Skeleton circle size="2rem" />
          <Flex col className="ml-2 flex-1">
            <Skeleton p  w="70%" />
            <Skeleton p  w="20%" />
          </Flex>
        </Flex>
        <Skeleton rect w="100%" h="200px" />
      </Flex>
    )
  }

  return <Loren />;
};

export default () => {
  const [activePage, setActivePage] = useState(1);
  const onChange = useCallback((page) => setActivePage(page), []);

  return (
    <Flex span="full" style={{ backgroundColor: 'var(--bg)' }}>
      <Flex col span="1/2">
        <Section className="--space-10">
          <Color value="var(--red--500)" />
          <Color value="var(--orange--500)" />
          <Color value="var(--green--500)" />
          <Color value="var(--blue--500)" />
          <Color value="var(--bg)" />
          <Color value="var(--secondary-bg)" />
        </Section>
        <Section col style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <Typo h6>Heading</Typo>
          <Typo h5>Heading</Typo>
          <Typo h4>Heading</Typo>
          <Typo h3>Heading</Typo>
          <Typo h2>Heading</Typo>
          <Typo h1>Heading</Typo>
          <Typo p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typo>
          <Typo p underline>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typo>
          <Typo p through>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typo>
          <Typo p italic>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typo>
          <Typo p strong>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </Typo>
        </Section>
        <Section col style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <Flex items="center">
            <Skeleton circle size="2rem" />
            <Flex col className="ml-2 flex-1">
              <Skeleton p  w="70%" />
              <Skeleton p  w="20%" />
            </Flex>
          </Flex>
          <Skeleton rect w="100%" h="200px" />
        </Section>
        <Section style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <Tabs>
            <Tabs.Item key="_1" title="React" icon="send"><ReactTab /></Tabs.Item>
            <Tabs.Item key="_4" title="Javascript" icon="thumb-up"><ReactTab /></Tabs.Item>
            <Tabs.Item key="_5" title="Badge" icon={<Badge leftTop count="2" className="mr-4"><Icon name="messages" /></Badge>} ><ReactTab /></Tabs.Item>
            <Tabs.Item key="_7" title="Fresh" icon="repeat" fresh ><ReactTab /></Tabs.Item>
          </Tabs>
        </Section>
        <Section style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <Collapse defaultActiveKeys={['_4']} accordion>
            <Collapse.Item key="_1" title="Contact" icon="send"><ReactTab /></Collapse.Item>
            <Collapse.Item key="_3" title="Skills" icon="layers-difference" ><ReactTab /></Collapse.Item>
            <Collapse.Item key="_4" title="Experiences" icon={<Badge leftTop count="2" className="mr-4"><Icon name="messages" /></Badge>} ><ReactTab /></Collapse.Item>
            <Collapse.Item key="_6" title="Hobbit" icon="repeat" fresh><ReactTab /></Collapse.Item>
          </Collapse>
        </Section>
        <Section className="--space-10" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <div>
            <Menu>
              <Menu.ItemGroup key="group-action" title="Action">
                <Menu.Item key="copy" icon="copy" title="Copy" />
                <Menu.Item key="tool" icon="tool" title="Config" />
                <Menu.Sub key="sub-other" icon="share" title="Other">
                  <Menu.Item key="rating" icon="star" title="Rating" />
                  <Menu.Item key="follow" icon="bell" title="Follow" />
                </Menu.Sub>
                <Menu.Item
                  key="message"
                  icon="message"
                  title="Message"
                />
                <Menu.Item key="heart" icon="heart" title="Love" />
              </Menu.ItemGroup>
            </Menu>
          </div>
          <div>
            <Menu iconOnly>
              <Menu.ItemGroup key="group-action" title="Action">
                <Menu.Item key="copy" icon="copy" title="Copy" />
                <Menu.Item key="tool" icon="tool" title="Config" />
                <Menu.Sub key="sub-other" defaultExpanded icon="share" title="Other">
                  <Menu.Item key="rating" icon="star" title="Rating" />
                  <Menu.Item key="follow" icon="bell" title="Follow" />
                </Menu.Sub>
                <Menu.Item
                  key="message"
                  icon="message"
                  title="Message"
                />
                <Menu.Item key="heart" icon="heart" title="Love" />
              </Menu.ItemGroup>
            </Menu>
          </div>
          <div style={{  paddingLeft: '30px' }}>
          <Timeline className="mb-5" reverse>
            <Timeline.Item>
              <NotificationBox />
            </Timeline.Item>
            <Timeline.Item>
              <NotificationBox />
            </Timeline.Item>
            <Timeline.Item>
              <NotificationBox />
            </Timeline.Item>
            <Timeline.Item>
              <NotificationBox />
            </Timeline.Item>
            <Timeline.Item>
              <NotificationBox />
            </Timeline.Item>
          </Timeline>
          </div>
        </Section>
        <Section className="--space-5 w-full">
          <Carousel>
            {listProduct.map(id => (
              <Carousel.Item key={id}>
                <Flex col items="center" justify="center"
                  style={{
                    minWidth: '16rem',
                  }}
                >
                  <ReactTab className="w-full" />
                </Flex>
              </Carousel.Item>
            ))}
          </Carousel>
        </Section>
        <Section col style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <Divider left dashed title={<Icon name="power" />} />
          <Divider left title="LEFT TITLE" />
          <Divider center dashed title={<Icon name="copy" />} />
          <Divider
            right
            dashed
            title={(
              <span>
                <Icon name="copy" className="mr-3" />
                RIGHT TITLE
              </span>
            )}
          />
        </Section>
      </Flex>

      <Flex col span="1/2">
        <Section className="--space-5">
          <Button>Button</Button>
          <ButtonGroup>
            <Button><Icon name="send" />Send</Button>
            <Button><Icon name="repeat" />Repeat</Button>
            <Button><Icon name="cloud-download" />Download</Button>
          </ButtonGroup>
          <Button loading><Icon name="send" />Send</Button>
          <Button loading circle icon="repeat" />
        </Section>
        <Section col style={{ paddingTop: '20px', paddingBottom: '20px' }}>
          <Flex className="w-full">
            <Section className="--space-10" style={{ width: 200 }}>
              <Radio name="_1" />
              <Radio name="_1" defaultChecked />
              <Checkbox defaultChecked />
              <Switch defaultChecked />
            </Section>
            <Stepper activeStep={2} className="flex-1">
              <Stepper.Step title="Step One">
                Description One
              </Stepper.Step>
              <Stepper.Step title="Step Two">
                Description Two
              </Stepper.Step>
              <Stepper.Step title="Step Three">
                Description Three
              </Stepper.Step>
              <Stepper.Step title="Step Four">
                Description Four
              </Stepper.Step>
            </Stepper>
          </Flex>
        </Section>
        <Section style={{ paddingTop: '30px', paddingBottom: '10px' }}>
          <Progress.Circle percent={0.75} />
          <Flex style={{ flexGrow: 1, padding: '0 2rem' }} items="center">
            <Flex col className="w-full">
              <Progress.Linear percent={0.75} />
              <Rater
                max={7}
                star={5}
                fontSize="1.5rem"
              />
            </Flex>
          </Flex>
        </Section>
        <Section className="--space-10" style={{ paddingTop: '10px', paddingBottom: '30px' }}>
          <Loader.Dots />
          <Loader.Dots wave />
          <Loader.Spinner />
          <div class="flex-1">
            <Slider defaultValue={80} className="w-full" />
          </div>
        </Section>
        <Section className="--space-10" style={{ paddingTop: '30px', paddingBottom: '10px' }}>
          <Pagination
            activePage={activePage}
            total={300}
            pageSize={10}
            max={10}
            onChange={onChange}
          />
        </Section>
        <Section className="--space-5" style={{ paddingTop: '10px', paddingBottom: '10px' }} items="center">
          <Avatar name="Hoang Nguyen" />
          <Badge
            dot
            overlap
            color="#0df316"
            bottomRight
          >
            <Avatar name="Hoang Nguyen" />
          </Badge>
          <Badge count={7} className="mr-5">
            <Boxer size="50px" />
          </Badge>
          <Badge
            color="#0089e4"
            icon={<Icon name="check" style={{ strokeWidth: 3 }} />}
          >
            <Boxer size="50px" />
          </Badge>
          <Badge dot color="#4caf50">
            <Boxer size="50px" />
          </Badge>
          <Chip label="Hoàng Nguyễn" />
          <Chip label="Sơn Lê" />
          <SpeedDial right defaultVisible overlay={
            <React.Fragment>
              <SpeedDial.Button glassed icon="cloud-download" />
              <SpeedDial.Button glassed icon="copy" />
              <SpeedDial.Button glassed icon="trash" />
              <SpeedDial.Button glassed icon="send" />
            </React.Fragment>
          }>
            <Button icon="dots" />
          </SpeedDial>
        </Section>
        <Section style={{ paddingTop: '10px', paddingBottom: '30px' }}>
          <Breadcrumb>
            <Breadcrumb.Item title={<div className="flex items-center"><Icon name="home" className="mr-2" /><span>Home</span></div>} />
            <Breadcrumb.Item title={<div className="flex items-center"><Icon name="apps" className="mr-2" /><span>Application</span></div>} />
            <Breadcrumb.Item title={<div className="flex items-center"><Icon name="send" className="mr-2" /><span>Button</span></div>} />
          </Breadcrumb>
        </Section>
        <Section col className="--col --space-5" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <Textbox placeholder="The placeholder" defaultValue="hoang.nguyen@notexsist.com" />
          <Password placeholder="The placeholder" defaultValue="123456789" />
          <Select placeholder="Please chose your option">
            <Select.Option
              key="message"
              icon="message"
              title="Message"
            />
            <Select.Group key="group-action" title="Action">
              <Select.Option key="copy" icon="copy" title="Copy" />
              <Select.Option key="tool" icon="tool" title="Config" />
              <Select.Option key="heart" icon="heart" title="Love" />
            </Select.Group>
            <Select.Group key="group-other" title="Other">
              <Select.Option key="rating" icon="star" title="Rating" />
              <Select.Option key="follow" icon="bell" title="Follow" />
            </Select.Group>
          </Select>
          <Select multiple placeholder="Please chose your options">
            <Select.Option
              key="message"
              icon="message"
              title="Message"
            />
            <Select.Group key="group-action" title="Action">
              <Select.Option key="copy" icon="copy" title="Copy" />
              <Select.Option key="tool" icon="tool" title="Config" />
              <Select.Option key="heart" icon="heart" title="Love" />
            </Select.Group>
            <Select.Group key="group-other" title="Other">
              <Select.Option key="rating" icon="star" title="Rating" />
              <Select.Option key="follow" icon="bell" title="Follow" />
            </Select.Group>
          </Select>
          <Textarea placeholder="The placeholder" defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
          <InputNumber defaultValue="999" />
        </Section>
        <Section className="--space-5" style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <div className="rc-overlay rc-tooltip --arrow --top" style={{ position: 'relative' }}>
            Top Tooltip
          </div>
          <div className="rc-overlay rc-tooltip --arrow --right" style={{ position: 'relative' }}>
            Right Tooltip
          </div>
          <div className="rc-overlay rc-tooltip --arrow --bottom" style={{ position: 'relative' }}>
            Bottom Tooltip
          </div>
          <div className="rc-overlay rc-tooltip --arrow --left" style={{ position: 'relative' }}>
            Left Tooltip
          </div>
        </Section>
        <Section style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <div className="rc-overlay rc-popover --arrow --top" style={{ position: 'relative', flexGrow: 1 }}>
            <Flex col style={{ padding: '0.5 1.5rem' }} className="w-full p-2">
              <Flex items="center">
                <Skeleton circle size="2rem" />
                <Flex col className="ml-2 flex-1">
                  <Skeleton p  w="70%" />
                  <Skeleton p  w="20%" />
                </Flex>
              </Flex>
              <Skeleton rect w="100%" h="200px" />
            </Flex>
            </div>
        </Section>
        <Section style={{ paddingTop: '30px', paddingBottom: '30px' }}>
          <Dialog className="w-full">
            <Dialog.Header>Dialog Title</Dialog.Header>
            <Dialog.Body>
              <Flex col style={{ padding: '0.5 1.5rem' }} className="w-full">
                <Flex items="center">
                  <Skeleton circle size="2rem" />
                  <Flex col className="ml-2 flex-1">
                    <Skeleton p  w="70%" />
                    <Skeleton p  w="20%" />
                  </Flex>
                </Flex>
                <Skeleton rect w="100%" h="200px" />
              </Flex>
            </Dialog.Body>
            <Dialog.Footer className="flex justify-end">
              <Button glassed><Icon name="apps" />Cancel</Button>
              <Button glassed style={{ marginLeft: '0.5em' }}><Icon name="send" />OK</Button>
            </Dialog.Footer>
          </Dialog>
        </Section>
        <Section>
          <PureNotification title="Notification title" className="w-full">
            <Flex col style={{ padding: '0.5 1.5rem' }}>
              <Flex items="center">
                <Skeleton circle size="2rem" />
                <Flex col className="ml-2 flex-1">
                  <Skeleton p  w="70%" />
                  <Skeleton p  w="20%" />
                </Flex>
              </Flex>
            </Flex>
          </PureNotification>
        </Section>
        <Section col className="--col --space-5">
          <PureAlert info title="Info title" className="w-full" />
          <PureAlert success title="Success title" className="w-full" />
          <PureAlert error title="Error title" className="w-full" />
          <PureAlert warning title="Warning title" className="w-full" />
        </Section>
      </Flex>
    </Flex>
  );
};
