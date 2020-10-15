import { format, localeFormat } from 'light-date';

const formatDate = (d: string): string => {
  const date = new Date(d);

  const month = localeFormat(date, '{MMM}', 'en-GB');
  const dateYear = format(date, '{dd}, {yyyy}');

  return `${month} ${dateYear}`;
};

export default formatDate;
