export const calculatePriceTax = (dateFrom, dateTo, pricePerNight) => {
    if (!dateFrom || !dateTo) {
        return 0;
    }

    const start = new Date(dateFrom);
    const end = new Date(dateTo);

    if (isNaN(start) || isNaN(end)) {
        return 0;
    }

    const timeDiff = Math.abs(end - start);
    const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const totalPriceTax = numberOfNights * pricePerNight + 500 + 100;
    return totalPriceTax;
};

export const calculatePrice = (dateFrom, dateTo, pricePerNight) => {
    if (!dateFrom || !dateTo) {
        return 0;
    }

    const start = new Date(dateFrom);
    const end = new Date(dateTo);

    if (isNaN(start) || isNaN(end)) {
        return 0;
    }

    const timeDiff = Math.abs(end - start);
    const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    const totalPrice = numberOfNights * pricePerNight;
    return totalPrice;
};

export const calculateNumberOfNights = (formik) => {
    if (!formik.values.dateFrom || !formik.values.dateTo) {
        return 0;
    }

    const start = new Date(formik.values.dateFrom);
    const end = new Date(formik.values.dateTo);

    if (isNaN(start) || isNaN(end)) {
        return 0;
    }

    const timeDiff = Math.abs(end - start);
    const numberOfNights = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return numberOfNights;
};
