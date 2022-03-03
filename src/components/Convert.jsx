const converted = function secondsToTime(duration) {
    const hours = Math.floor(duration / (60 * 60));
    const dfm = duration % (60 * 60);
    const minutes = Math.floor(dfm / 60);

    return hours + "h " + minutes + "m";
};
export default converted;