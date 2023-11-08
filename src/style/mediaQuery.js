const LAYOUT_BREAK_POINT = {
  MININUM: 750,
  ABOUTME: 1180,
  SKLILLS: 900,
  PROJECTS: 1220,
  LAYOUT: 900,
  README01: 1350,
  README02: 1080,
  DESCRIPTION: 1650,
};

const createMediaQuery = (mediaPx) => {
  return `@media(max-width: ${mediaPx}px)`;
};

export const mediaQuery = {
  min: createMediaQuery(LAYOUT_BREAK_POINT.MININUM),
  aboutme: createMediaQuery(LAYOUT_BREAK_POINT.ABOUTME),
  skills: createMediaQuery(LAYOUT_BREAK_POINT.SKLILLS),
  projects: createMediaQuery(LAYOUT_BREAK_POINT.PROJECTS),
  layout: createMediaQuery(LAYOUT_BREAK_POINT.LAYOUT),
  readme01: createMediaQuery(LAYOUT_BREAK_POINT.README01),
  readme02: createMediaQuery(LAYOUT_BREAK_POINT.README02),
  description: createMediaQuery(LAYOUT_BREAK_POINT.DESCRIPTION),
};
