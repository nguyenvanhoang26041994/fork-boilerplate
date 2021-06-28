const channels = [
  {
    id: 'channel-user-001',
    type: 'user',
    metaData: {
      user: {
        id: '001',
      }
    },
    recent: {
      message: 'H về đợi vé mòn mắt',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '001',
      },
    },
    unread: {
      count: 2,
    },
  },
  {
    id: 'channel-user-002',
    type: 'user',
    metaData: {
      user: {
        id: '002',
      }
    },
    recent: {
      message: 'Cho em hỏi cái này với anh?',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '002',
      },
    },
    unread: {
      count: 6,
    },
  },
  {
    id: 'channel-user-005',
    type: 'user',
    metaData: {
      user: {
        id: '005',
      }
    },
    recent: {
      message: 'Tối về nghiên cứu cách thức vận hành xem sao',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '005',
      },
    },
    unread: {
      count: 0,
    },
  },
  {
    id: 'channel-group-grp001',
    type: 'group',
    metaData: {
      group: {
        id: 'grp001',
      }
    },
    recent: {
      message: 'Chị thấy cũng ổn rồi đó',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '001',
      },
    },
    unread: {
      count: 9,
    },
  },
  {
    id: 'channel-user-003',
    type: 'user',
    metaData: {
      user: {
        id: '003',
      }
    },
    recent: {
      message: 'OK thank dude',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '003',
      },
    },
    unread: {
      count: 0,
    },
  },
  {
    id: 'channel-user-004',
    type: 'user',
    metaData: {
      user: {
        id: '004',
      }
    },
    recent: {
      message: 'hả',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '004',
      },
    },
    unread: {
      count: 0,
    },
  },
  {
    id: 'channel-group-grp002',
    type: 'group',
    metaData: {
      group: {
        id: 'grp002',
      }
    },
    recent: {
      message: 'Chuẩn bị chưa moi người',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '111',
      },
    },
    unread: {
      count: 1,
    },
  },
  {
    id: 'channel-user-006',
    type: 'user',
    metaData: {
      user: {
        id: '006',
      }
    },
    recent: {
      message: 'Anh đi làm về chưa?',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '006',
      },
    },
    unread: {
      count: 0,
    },
  },
  {
    id: 'channel-user-007',
    type: 'user',
    metaData: {
      user: {
        id: '007',
      }
    },
    recent: {
      message: 'Cho em mượn con xe Suzuki của anh với',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '007',
      },
    },
    unread: {
      count: 0,
    },
  },
  {
    id: 'channel-user-111',
    type: 'user',
    metaData: {
      user: {
        id: '111',
      }
    },
    recent: {
      message: '#ffffff',
      time: Date.now(),
      status: 'success',
      sender: {
        id: '111',
      },
    },
    unread: {
      count: 0,
    },
  },
];
const users = [
  {
    id: '111',
    avatar: 'https://avatars.githubusercontent.com/u/20764362?v=4',
    name: 'Hoàng Nguyễn',
    status: 'online',
  },
  {
    id: '001',
    avatar: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c0.3.100.100a/p100x100/118778813_1296512784041875_3829794088342017355_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=N4v7qSIU508AX-_GAhb&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=a282cd27c0b613d66f39698a22763231&oe=60DBA385',
    name: 'Tùng Lê',
    status: 'online',
  },
  {
    id: '002',
    avatar: 'https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-1/p100x100/148962648_1904322393054746_5039216451616807960_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=7206a8&_nc_ohc=p3tKS38xAaoAX-IIYjH&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-xsp1-3.xx&tp=6&oh=fcffa5fd47c09ac198d80ecfa9b61c72&oe=60DFD794',
    name: 'Thái Sơn',
    status: 'away',
  },
  {
    id: '003',
    avatar: 'https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-1/p100x100/143865111_3746460238794789_1710538082440547779_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=9WgBlVUihKAAX8tF4W9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-sin6-1.xx&tp=6&oh=01f24b8e880ec29878ca0d1258624b55&oe=60DAD231',
    name: 'Nguyễn Ngọc Hân',
    status: 'online',
  },
  {
    id: '004',
    avatar: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/c11.0.100.100a/p100x100/30742449_1491970024265673_1550576325926846464_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=2oMnvtTy_7wAX-DJr5m&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=27&oh=b8099de9faa431c553b0ef32be399495&oe=60DB688A',
    name: 'Lê Thuận',
    status: 'online',
  },
  {
    id: '005',
    avatar: 'https://scontent-hkt1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/180904085_3892238354216551_318542444565664736_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=MgrLjXsMiXMAX-WWTgL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-hkt1-2.xx&tp=6&oh=157a71f6ef6f7cc305f7195d1c82ee10&oe=60DAA837',
    name: 'Ngô Nhật Minh',
    status: 'offline',
  },
  {
    id: '006',
    avatar: 'https://scontent.xx.fbcdn.net/v/t1.6435-1/c0.25.100.100a/p100x100/116893690_2749605255259966_8456830686171984045_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=YzsGSr1irmAAX9Higjq&_nc_oc=AQkvctsVFCGkoO5EXdR5iPrTObhNpdzmRkiKrC9towFs5aW27NnioApzS_blAqPttVSO2BD0OczWN8vE_wpJFW0S&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=27&oh=76fcb200f594df4efc1dd40bad461714&oe=60DDA03D',
    name: 'Nguyễn Văn Minh',
    status: 'offline',
  },
  {
    id: '007',
    avatar: 'https://scontent-xsp1-2.xx.fbcdn.net/v/t1.6435-1/p100x100/142048188_405754210532146_4037340852391529950_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=7206a8&_nc_ohc=8tV9CwqcHPYAX8rtJ9Q&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent-xsp1-2.xx&tp=6&oh=da67ac86579e03d62107248477b1ff73&oe=60DD15B2',
    name: 'Tào Ngọc Muội',
    status: 'offline',
  }
];
const groups = [
  {
    id: 'grp001',
    avatar: null,
    name: 'Hội Bang Cuối Tuần',
    users: ['001', '002', '003', '004', '005'],
    status: 'online'
  },
  {
    id: 'grp002',
    avatar: null,
    name: 'Phượt Đà Nẵng',
    users: ['111', '001', '004', '005'],
    status: 'online'
  },
];

const messages = {
  'channel-group-grp001': {
    displayMessages: [
      {
        id: 'm001',
        content: `Dropping' baby off at home before my night shift.`,
        owner: {
          id: '001',
        },
      }
    ],
    page: 1,
    pageSize: 50,
    hasNext: true,
  },
};

export { channels, users, groups, messages };
