export const navData = [
  { route: '/review', label: '내가 작성한 리뷰' },
  { route: '/reviews', label: '작성한 리뷰' },
  { route: '/like/reviews', label: '좋아요한 리뷰' },
  { route: '/like/books', label: '좋아요한 책' },
  { route: '/like/wells', label: '좋아요한 우물' },
  { route: '/change-frog', label: '외형 변경' },
  { route: '/achievement', label: '내가 모은 업적' },
];

export const getLabelByRoute = (route: string) => {
  return navData.find((data) => data.route === route)?.label;
};

export const getRouteByLabel = (label: string) => {
  return navData.find((data) => data.label === label)?.route;
};
