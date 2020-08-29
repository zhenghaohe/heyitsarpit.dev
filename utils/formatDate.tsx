const formatDate = (date: string) => {
    return Intl.DateTimeFormat('en-GB').format(new Date(date));
};

export default formatDate;
