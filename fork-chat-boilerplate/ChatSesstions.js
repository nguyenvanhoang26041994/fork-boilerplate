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
    flex-shrink: 0;
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
    color: var(--heading-color);
  }

  .chat-meta {
    display: none;
    margin: 4px 10px;
    font-size: 11px;
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
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift.
            </div>
            <div className="chat-meta">0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping'
            </div>
            <div className="chat-meta">0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
            </div>
            <div className="chat-meta">0:30 PM</div>
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
            <div className="chat-meta">0:40 PM</div>
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
            <div className="chat-meta">1:40 PM</div>
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
            <div className="chat-meta">1:46 PM</div>
          </div>
        </div>
      </ChatSession>



      <ChatSession className="--incomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift.
            </div>
            <div className="chat-meta">0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping'
            </div>
            <div className="chat-meta">0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
            </div>
            <div className="chat-meta">0:30 PM</div>
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
            <div className="chat-meta">0:40 PM</div>
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
            <div className="chat-meta">1:40 PM</div>
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
            <div className="chat-meta">1:46 PM</div>
          </div>
        </div>
      </ChatSession><ChatSession className="--incomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift.
            </div>
            <div className="chat-meta">0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping'
            </div>
            <div className="chat-meta">0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
            </div>
            <div className="chat-meta">0:30 PM</div>
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
            <div className="chat-meta">0:40 PM</div>
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
            <div className="chat-meta">1:40 PM</div>
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
            <div className="chat-meta">1:46 PM</div>
          </div>
        </div>
      </ChatSession><ChatSession className="--incomming --start mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift.
            </div>
            <div className="chat-meta">0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming mb-2">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping'
            </div>
            <div className="chat-meta">0:30 PM</div>
          </div>
        </div>
      </ChatSession>
      <ChatSession className="--incomming --end mb-8">
        <div className="chat-sesstion-body">
          <Avatar className="chat-sesstion-sender" size={40} loading="lazy" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShph3ZbEptLqW-p-wY12RE2QvFWTjcqGWT9w&usqp=CAU" />
          <div className="chat-content-wapper">
            <div className="chat-content">
              Dropping' baby off at home before my night shift. You known i can't hear none of that spend the night stuff. That kumbaya stuff wanna see nirana, but don't wanna die yet. Wanna feel that nana thought, could you come by?
            </div>
            <div className="chat-meta">0:30 PM</div>
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
            <div className="chat-meta">0:40 PM</div>
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
            <div className="chat-meta">1:40 PM</div>
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
            <div className="chat-meta">1:46 PM</div>
          </div>
        </div>
      </ChatSession>
    </div>
  );
};

export default ChatSesstions;
