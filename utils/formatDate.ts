import { format, localeFormat } from 'light-date';

const formatDate = (d: string): string => {
  const date = new Date(d);

  const month = localeFormat(date, '{MMM}', 'en-GB');
  const _date = format(date, '{dd}');

  return `${month} ${_date} `;
};

export default formatDate;
