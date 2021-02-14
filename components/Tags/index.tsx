import { styled } from '@linaria/react';
import Link from 'next/link';
import { memo } from 'react';

const Tags = styled.ul`
  display: inline;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Tag = styled.li`
  display: inline;
  padding-right: 0.7rem;
`;

const Anchor = styled.a`
  color: var(--color-text-secondary);
  text-decoration: none;

  /* text-transform: capitalize; */

  font-size: 1rem;
  transition: all 0.4s;
  color: var(--color-link-posts);

  &:hover {
    text-decoration: underline;
  }
`;

const TagList: React.FC<{ tags: string }> = memo(({ tags }) => {
  const parseTags = (t: string): string[] => t.replace(/ /g, '').split(',');

  const capitalize = (str: string): string => `${str[0].toUpperCase()}${str.slice(1)}`;
  return (
    <Tags>
      {parseTags(tags).map((tag) => (
        <Tag key={tag}>
          <Link href={`/posts/?q=${tag}`} passHref>
            <Anchor>{capitalize(tag)}</Anchor>
          </Link>
        </Tag>
      ))}
    </Tags>
  );
});

TagList.displayName = 'TagList';

export default TagList;
