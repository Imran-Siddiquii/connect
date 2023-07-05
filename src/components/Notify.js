export const openNotificationWithIcon = (api, type, message) => {
  api[type]({
    message: message,
  });
};
