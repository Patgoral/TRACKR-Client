export const dateFormatter = (date) => {
	const utcDate = new Date(date)
	const month = utcDate.getMonth() + 1 // Add 1 because getMonth() returns 0-based month
	const day = utcDate.getDate()
	const year = utcDate.getFullYear()
	const hours = utcDate.getHours()
	const minutes = utcDate.getMinutes()
	const meridian = hours < 12 ? 'AM' : 'PM' // Determine if it's AM or PM
	const formattedDate = `${month}/${day}/${year} ${hours % 12}:${minutes
		.toString()
		.padStart(2, '0')}${meridian}`

	return formattedDate
}

export const elapsedTime = (formattedDate) => {
    const targetDate = new Date("3/09/2023 8:00 AM");
    const elapsedMilliseconds = Math.abs(targetDate - new Date(formattedDate));
    const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
    const elapsedMinutes = Math.floor(elapsedSeconds / 60);
    const elapsedHours = Math.floor(elapsedMinutes / 60);
    const remainingMinutes = elapsedMinutes % 60;
    return `${elapsedHours} hours, ${remainingMinutes} minutes`;
  };