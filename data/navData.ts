export const navData = [
  { route: '/my-review', label: '내가 쓴 리뷰' },
  { route: '/like-review', label: '좋아요한 리뷰' },
  { route: '/like-book', label: '좋아요한 책' },
  { route: '/like-well', label: '좋아요한 우물' },
  { route: '/change-frog', label: '외형 변경' },
  { route: '/achievement', label: '내가 모은 업적' },
];

export const getLabelByRoute = (route: string) => {
  return navData.find((data) => data.route === route)?.label;
};

export const getRouteByLabel = (label: string) => {
  return navData.find((data) => data.label === label)?.route;
};
