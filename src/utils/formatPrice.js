export const formatPrice = (x, format) => {
    switch (format) {
        case 'THB':
            return `${x.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')} ${format}`;
        default:
            return x.toFixed(2);
    }
};