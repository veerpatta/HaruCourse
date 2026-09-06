// Polling that cannot succeed is wasted battery and mobile data. An installed
// app left open offline, or pushed to the background, should go quiet and pick
// itself back up without the user doing anything.
export function canPoll() {
  return navigator.onLine && document.visibilityState !== "hidden";
}

// Runs the callback when the app becomes able to work again. Reconnecting always
// resumes, even in the background, so a draft saved offline still reaches the
// cloud; coming back on screen resumes only if there is a connection.
export function onActivityResume(resume: () => void) {
  const wake = () => {
    if (canPoll()) resume();
  };
  window.addEventListener("online", resume);
  document.addEventListener("visibilitychange", wake);
  return () => {
    window.removeEventListener("online", resume);
    document.removeEventListener("visibilitychange", wake);
  };
}
