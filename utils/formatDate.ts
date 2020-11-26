import { format, localeFormat } from 'light-date';

const formatDate = (d: string): string => {
  const date = new Date(d);

  const month = localeFormat(date, '{MMMM}', 'en-GB');
  const _date = format(date, '{dd}');
  const year = format(date, '{yyyy}');

  return `${_date} ${month} ${year}`;
};

export default formatDate;
