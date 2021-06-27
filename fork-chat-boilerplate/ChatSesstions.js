import React from 'react';
import styled from 'styled-components';
import { Avatar } from '@fork-ui/core';

const ChatSession = styled.div`
  display: flex;
  .chat-sesstion-body {
    display: flex;
    align-items: flex-start;
  }
  .chat-sesstion-sender {
    visibility: hidden;
  }
  .chat-content-wapper {
    display: flex;
    flex-direction: column;
    margin: 0 8px;
  }
  .chat-content {
    padding: 18px;
    display: inline-block;
    max-width: 550px;
  }

  .chat-meta {
    display: none;
    padding: 4px 0;
  }

  &.--incomming.--start {
    .chat-sesstion-sender {
      visibility: visible;
    }
  }

  &.--outcomming {
    .chat-sesstion-sender {
      display: none;
    }
  }

  &.--outcomming {
    justify-content: flex-end;
    .chat-sesstion-body {
      flex-direction: row-reverse;
    }
    .chat-content-wapper {
      align-items: flex-end;
    }
    .chat-content {
      background-color: var(--primary);
      color: var(--white);
      border-radius: 16px 0 0 16px;
    }
  }

  &.--outcomming.--start {
    .chat-content {
      border-radius: 16px 16px 0 16px;
    }
  }
  &.--outcomming.--end {
    .chat-content {
      border-radius: 16px 0 16px 16px;
    }
    .chat-meta {
      display: block;
    }
  }

  &.--incomming {
    justify-content: flex-start;
    .chat-content-wapper {
      align-items: flex-start;
    }
    .chat-content {
      border-radius: 0 16px 16px 0;
      background-color: var(--btn-bg);
    }
  }
  &.--incomming.--start {
    .chat-content {
      border-radius: 16px 16px 16px 0;
    }
  }
  &.--incomming.--end {
    .chat-content {
      border-radius: 0 16px 16px 16px;
    }
    .chat-meta {
      display: block;
    }
  }
`;

const ChatSesstions = ({ className }) => {
  return (
    <div className={className}>
      <ChatSession className="--incomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift.
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping'
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Purchasing crappy things with haft the hand of cash in hand
            </div>
            <div className="chat-meta">Message send 0:40 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Now i have some thing to tell you.
            </div>
            <div className="chat-meta">Message send 1:40 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              All my night, been ready for you all my night. Been waitin' on you all my night. I'll buzz you in, just let me known when you outside. All my night you.
            </div>
            <div className="chat-meta">Message send 1:46 PM</div>
          </div>
        </div>
      </ChatSession>



      <ChatSession className="--incomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift.
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping'
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Purchasing crappy things with haft the hand of cash in hand
            </div>
            <div className="chat-meta">Message send 0:40 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Now i have some thing to tell you.
            </div>
            <div className="chat-meta">Message send 1:40 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              All my night, been ready for you all my night. Been waitin' on you all my night. I'll buzz you in, just let me known when you outside. All my night you.
            </div>
            <div className="chat-meta">Message send 1:46 PM</div>
          </div>
        </div>
      </ChatSession><ChatSession className="--incomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift.
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping'
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Purchasing crappy things with haft the hand of cash in hand
            </div>
            <div className="chat-meta">Message send 0:40 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Now i have some thing to tell you.
            </div>
            <div className="chat-meta">Message send 1:40 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              All my night, been ready for you all my night. Been waitin' on you all my night. I'll buzz you in, just let me known when you outside. All my night you.
            </div>
            <div className="chat-meta">Message send 1:46 PM</div>
          </div>
        </div>
      </ChatSession><ChatSession className="--incomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift.
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping'
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
            </div>
            <div className="chat-meta">Message send 0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Purchasing crappy things with haft the hand of cash in hand
            </div>
            <div className="chat-meta">Message send 0:40 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Now i have some thing to tell you.
            </div>
            <div className="chat-meta">Message send 1:40 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--outcomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://avatars.githubusercontent.com/u/20764362?v=4" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              All my night, been ready for you all my night. Been waitin' on you all my night. I'll buzz you in, just let me known when you outside. All my night you.
            </div>
            <div className="chat-meta">Message send 1:46 PM</div>
          </div>
        </div>
      </ChatSession>
    </div>
  );
};

export default ChatSesstions;
