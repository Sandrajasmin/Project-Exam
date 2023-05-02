function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}-${month}`;
}

export default formatDate;
