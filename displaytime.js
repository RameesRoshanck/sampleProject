function displayTime(seconds) {
  if (seconds < 60) {
    return seconds + " secs";
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    if (remainingSeconds > 0) {
      return minutes + " mins " + remainingSeconds + " secs";
    } else {
      return minutes + " mins";
    }
  } else {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    if (remainingSeconds > 0) {
      const minutes = Math.floor(remainingSeconds / 60);
      return hours + " hour" + (hours > 1 ? "s " : " ") + minutes + " min" + (minutes > 1 ? "s" : "");
    } else {
      return hours + " hour" + (hours > 1 ? "s" : "");
    }
  }
}


console.log(displayTime(120)); 