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
    avatar: 'https://i.pinimg.com/originals/ce/53/c5/ce53c5bcd350ba856e5c53c343376fb2.jpg',
    name: 'Tùng Lê',
    status: 'online',
  },
  {
    id: '002',
    avatar: 'https://c.pxhere.com/photos/f8/4f/dog_pug_animal_pet_funny_cute_adorable_canine-1368002.jpg!d',
    name: 'Thái Sơn',
    status: 'away',
  },
  {
    id: '003',
    avatar: 'https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-superJumbo.jpg',
    name: 'Nguyễn Ngọc Hân',
    status: 'online',
  },
  {
    id: '004',
    avatar: 'https://www.forbes.com/uk/advisor/wp-content/uploads/2021/05/short-coated-tan-puppy-stockpack-unsplash-scaled.jpg',
    name: 'Lê Thuận',
    status: 'online',
  },
  {
    id: '005',
    avatar: 'https://r4x8d8k3.rocketcdn.me/wp-content/uploads/2020/05/hannah-grace-fk4tiMlDFF0-unsplash-1200x800.jpg',
    name: 'Ngô Nhật Minh',
    status: 'offline',
  },
  {
    id: '006',
    avatar: 'https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-superJumbo.jpg',
    name: 'Nguyễn Văn Minh',
    status: 'offline',
  },
  {
    id: '007',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ADZSchb6mTjtrv5OYkCzkQWUVdbfl5N5Ww&usqp=CAU',
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
