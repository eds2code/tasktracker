export default (timestamp) => {
  const hh = new Date(timestamp).getUTCHours() || 0;
  const mm = new Date(timestamp).getMinutes() || 0;
  const ss = new Date(timestamp).getSeconds() || 0;

  return `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`;
};
