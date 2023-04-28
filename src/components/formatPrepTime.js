// Convert over 60 minute preparation time to hours and minutes
function FormatPrepTime({ readyInMinutes }) {
  if (readyInMinutes > 60) {
    const hours = Math.floor(readyInMinutes / 60);
    const minutes = readyInMinutes % 60;

    // if preparation time is only hours, show no minutes
    if (readyInMinutes % 60 === 0) {
      return `${hours}h`;
    }
    return `${hours}h ${minutes} min`;
  } else {
    return `${readyInMinutes} min`;
  }
}

export default FormatPrepTime;
