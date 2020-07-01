import styled from '@emotion/styled';
import Link from 'next/link';

type IconProps = {
    src: string;
    href: string;
    alt: string;
};

const SocialLinks = [
    {
        src: '/images/icon_linkedin.svg',
        href: 'https://www.linkedin.com/in/arpitbharti/',
        alt: 'linkedin'
    },
    {
        src: '/images/icon_github.svg',
        href: 'https://github.com/arpit73',
        alt: 'github'
    },
    // {
    //     src: '/public/images/icon_twitter.png',
    //     href: 'https://twitter.com/arpitbharti73',
    //     alt: 'twitter'
    // },
    {
        src: '/images/icon_instagram.svg',
        href: 'https://www.instagram.com/arpitb_/',
        alt: 'instagram'
    },
    {
        src: '/images/icon_dev.svg',
        href: 'https://dev.to/arpit73',
        alt: 'dev.to'
    },
    {
        src: '/images/icon_mail.svg',
        href: 'mailto:arpitbharti73@gmail.com',
        alt: 'mail'
    }
];

const StyledImg = styled.img`
    width: 20px;
    transition: width 0.5s;
    &:hover {
        width: 25px;
    }
`;

const Icon: React.FC<IconProps> = ({ src, href, alt }) => {
    return (
        <Link href={href} prefetch={false}>
            <a target="_blank" rel="noopener noreferrer">
                <StyledImg src={src} alt={alt} />
            </a>
        </Link>
    );
};

const StyledSocial = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

const Social: React.FC = () => {
    return (
        <StyledSocial>
            {SocialLinks.map((social) => (
                <li key={social.src}>
                    <Icon {...social} />
                </li>
            ))}
        </StyledSocial>
    );
};

export default Social;
