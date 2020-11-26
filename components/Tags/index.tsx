import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
  text-transform: lowercase;

  a {
    color: var(--color-text-secondary);
    text-decoration: none;
    font-size: 1rem;

    :hover {
      text-decoration: underline;
    }
  }
`;

const TagList: React.FC<{ tags: string }> = memo(({ tags }) => {
  const parseTags = (t: string): string[] => t.replace(/ /g, '').split(',');

  return (
    <Tags>
      {parseTags(tags).map((tag) => (
        <Tag key={tag}>
          <Link href={`/posts/?q=${tag}`}>
            <a>{tag}</a>
          </Link>
        </Tag>
      ))}
    </Tags>
  );
});

TagList.displayName = 'TagList';

export default TagList;
