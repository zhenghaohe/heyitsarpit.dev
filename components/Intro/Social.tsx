import styled from '@emotion/styled';

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
        src: '/images/icon_google.svg',
        href: 'mailto:arpitbharti73@gmail.com',
        alt: 'mail'
    },
    {
        src: '/images/icon_dev.svg',
        href: 'https://dev.to/arpit73',
        alt: 'dev.to'
    }
];

const StyledImg = styled.img`
    width: 1.3rem;
    transition: all 0.5s;
    &:hover {
        transform: translateY(-5px);
        opacity: 0.8;
    }
`;

const Icon: React.FC<IconProps> = ({ src, href, alt }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <StyledImg src={src} alt={alt} />
        </a>
    );
};

const StyledSocial = styled.ul`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style-type: none;
    padding: 0.2rem;
    padding-left: 1rem;
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
