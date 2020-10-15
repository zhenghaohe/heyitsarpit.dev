import styled from '@emotion/styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

const Tags = styled.ul`
  display: inline;
  list-style: none;
  margin: 0;
  padding: 0;
  text-transform: lowercase;
`;

const Tag = styled.li`
  display: inline;
  padding-right: 0.7rem;
`;

const TagList: React.FC<{ tags: string }> = memo(({ tags }) => {
  const parseTags = (t: string): string[] => t.replace(/ /g, '').split(',');
  const { pathname } = useRouter();

  return (
    <Tags>
      {parseTags(tags).map((tag) => (
        <Tag key={tag}>
          <Link href={{ pathname, query: { tag } }}>
            <a>{tag}</a>
          </Link>
        </Tag>
      ))}
    </Tags>
  );
});

TagList.displayName = 'TagList';

export default TagList;
