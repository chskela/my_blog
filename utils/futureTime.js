/* futureTime(1) -> Sat Nov 21 2020 22:35:03 GMT-0500 (Ecuador Time), one minute after this time */
export const futureTime = (minutes) =>
  new Date(new Date().getTime() + minutes * 60 * 1000);
