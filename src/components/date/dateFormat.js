function formatDate(dateString, format = 'year-month') {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    switch (format) {
        case 'year':
            return `${year}`;
        case 'month':
            return `${year}-${month}`;
        case 'month-year':
            return `${month}-${year}`;
        case 'day-month-year':
            return `${day}-${month}-${year}`;
        default:
            return dateString;
    }
}

export default formatDate;
