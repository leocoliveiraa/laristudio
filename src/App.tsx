import React, { useState } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaExternalLinkAlt,
  FaHeart,
  FaBriefcase,
  FaWhatsapp,
  FaGlobe,
} from "react-icons/fa";
import { HiSparkles, HiStar } from "react-icons/hi";
import styled, { keyframes } from "styled-components";

import profilePic from "./assets/IMG_1442.png";

// Types
type Language = "pt" | "en";

interface Translation {
  title: string;
  subtitle: string;
  description: string;
  tagline: string;
  links: Array<{
    name: string;
    description: string;
  }>;
  footer: {
    madeWith: string;
    tagline: string;
  };
}

interface SocialLinkData {
  icon: React.ReactNode;
  url: string;
  color: string;
}

// Keyframes
const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-25px) rotate(180deg); 
  }
`;

const floatSlow = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(-180deg); 
  }
`;

const gradientShift = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    #0f0f0f 0%,
    #4c1d95 35%,
    #581c87 65%,
    #0f0f0f 100%
  );
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 1.5rem 0;
  }
`;

const FloatingElement = styled.div`
  position: absolute;
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  z-index: 1;

  &.star-1 {
    top: 15%;
    left: 8%;
    animation-name: ${float};
    animation-delay: 0s;
  }

  &.star-2 {
    top: 35%;
    right: 12%;
    animation-name: ${floatSlow};
    animation-delay: 2s;
  }

  &.star-3 {
    bottom: 25%;
    left: 15%;
    animation-name: ${float};
    animation-delay: 4s;
  }

  &.star-4 {
    top: 65%;
    right: 20%;
    animation-name: ${floatSlow};
    animation-delay: 1s;
  }

  &.star-5 {
    top: 80%;
    left: 50%;
    animation-name: ${float};
    animation-delay: 3s;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.08;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 40%,
      #a855f7 50%,
      transparent 60%
    );
    transform: skewY(-12deg);
  }

  &::after {
    content: "";
    position: absolute;
    top: 20%;
    right: 0;
    width: 30rem;
    height: 30rem;
    background: radial-gradient(circle, #ec4899 0%, transparent 70%);
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.15;
  }
`;

const BackgroundGlow = styled.div`
  position: absolute;
  bottom: 20%;
  left: -5%;
  width: 25rem;
  height: 25rem;
  background: radial-gradient(circle, #a855f7 0%, transparent 70%);
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.12;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 10;
  max-width: 32rem;
  margin: 0 auto;
  padding: 2rem;
  width: 100%;
  animation: ${fadeIn} 0.8s ease-out;

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-width: 28rem;
  }

  @media (min-width: 1024px) {
    max-width: 36rem;
    padding: 2.5rem;
  }
`;

const ProfileSection = styled.section`
  text-align: center;
  margin-bottom: 2.5rem;

  @media (min-width: 769px) {
    margin-bottom: 3rem;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  background: linear-gradient(45deg, #a855f7, #ec4899, #f97316, #a855f7);
  background-size: 400% 400%;
  animation: ${gradientShift} 6s ease infinite;
  padding: 4px;
  box-shadow: 0 0 40px rgba(168, 85, 247, 0.5),
    0 25px 50px -15px rgba(168, 85, 247, 0.3),
    inset 0 0 0 2px rgba(255, 255, 255, 0.1);
  position: relative;

  @media (min-width: 769px) {
    width: 10rem;
    height: 10rem;
    padding: 5px;
  }

  @media (max-width: 480px) {
    width: 8rem;
    height: 8rem;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: linear-gradient(45deg, #a855f7, #ec4899);
    opacity: 0.3;
    filter: blur(20px);
    z-index: -1;
  }
`;

const ProfileImageInner = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  background: #1a1a1a;
  box-shadow: inset 0 4px 20px rgba(0, 0, 0, 0.4),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 110%;
    height: 110%;
    object-fit: cover;
    object-position: center 20%;
    display: block;
    filter: brightness(1.15) contrast(1.08) saturate(1.15);
    transition: all 0.4s ease;
    transform: scale(1.1);
  }

  &:hover img {
    filter: brightness(1.25) contrast(1.15) saturate(1.25);
    transform: scale(1.15);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: linear-gradient(
      135deg,
      rgba(168, 85, 247, 0.15) 0%,
      transparent 50%,
      rgba(236, 72, 153, 0.15) 100%
    );
    pointer-events: none;
    transition: opacity 0.3s ease;
  }

  &:hover::after {
    opacity: 0.7;
  }
`;

const SparkleIcon = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
  width: 2.5rem;
  height: 2.5rem;
  background: linear-gradient(135deg, #ec4899, #a855f7);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 6px 20px rgba(236, 72, 153, 0.4),
    0 0 0 3px rgba(255, 255, 255, 0.1);
  animation: ${pulse} 3s ease-in-out infinite;
  z-index: 2;

  @media (max-width: 480px) {
    width: 2rem;
    height: 2rem;
    top: -8px;
    right: -8px;
  }
`;

const ProfileTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  background: linear-gradient(135deg, #d8b4fe 0%, #f9a8d4 50%, #d8b4fe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.75rem;
  letter-spacing: -0.02em;
  text-shadow: 0 0 30px rgba(168, 85, 247, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const ProfileDescription = styled.p`
  color: #e5e7eb;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0.5rem 0;
  font-weight: 400;
  opacity: 0.9;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const LanguageButton = styled.button`
  background: rgba(168, 85, 247, 0.12);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(168, 85, 247, 0.25);
  border-radius: 12px;
  color: #e5e7eb;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 1.5rem auto;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.4);
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.2);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
  }
`;

const ContentSection = styled.section`
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 769px) {
    gap: 1.5rem;
  }
`;

const SocialLink = styled.a`
  display: block;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-3px) scale(1.01);
  }

  &:active {
    transform: translateY(-1px) scale(0.99);
  }
`;

const LinkCard = styled.article`
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(168, 85, 247, 0.15);
  border-radius: 1.25rem;
  padding: 1.25rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05);

  &:hover {
    border-color: rgba(168, 85, 247, 0.3);
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 15px 35px rgba(168, 85, 247, 0.15),
      0 5px 15px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(168, 85, 247, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    border-radius: 1rem;
  }
`;

const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const IconContainer = styled.div`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: -2px;
    border-radius: 1rem;
    background: inherit;
    filter: blur(10px);
    opacity: 0.4;
    z-index: -1;
  }

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

const LinkInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const LinkTitle = styled.h3`
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const LinkDescription = styled.p`
  color: #a1a1aa;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const ExternalIcon = styled.div`
  color: #71717a;
  transition: all 0.3s ease;
  opacity: 0.7;

  ${SocialLink}:hover & {
    color: #a855f7;
    opacity: 1;
    transform: translate(2px, -2px);
  }
`;

const Footer = styled.footer`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(168, 85, 247, 0.15);

  @media (min-width: 769px) {
    margin-top: 3.5rem;
    padding-top: 2.5rem;
  }
`;

const FooterText = styled.p`
  color: #a1a1aa;
  font-size: 0.9rem;
  margin: 0 0 0.75rem 0;
  font-weight: 400;

  a {
    color: #a855f7;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #ec4899;
    }
  }
`;

const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

const FooterSubtext = styled.span`
  font-size: 0.8rem;
  color: #71717a;
  font-weight: 400;
  opacity: 0.8;
`;

// Constants
const TRANSLATIONS: Record<Language, Translation> = {
  pt: {
    title: "Studios Lari",
    subtitle: "Visual Designer",
    description: "Identidade Visual, Design de Posts e mais",
    tagline: "para marcas alternativas, fofas & autênticas!",
    links: [
      {
        name: "Portfolio",
        description: "Veja meus trabalhos completos",
      },
      {
        name: "Instagram",
        description: "Posts diários e stories",
      },
      {
        name: "TikTok",
        description: "Process videos & tips",
      },
      {
        name: "WhatsApp",
        description: "Contato direto",
      },
    ],
    footer: {
      madeWith: "Made with 💜 by",
      tagline: "para marcas alternativas, fofas & autênticas!",
    },
  },
  en: {
    title: "Studios Lari",
    subtitle: "Visual Designer",
    description: "Visual Identity, Post Design and more",
    tagline: "for alternative, cute & authentic brands!",
    links: [
      {
        name: "Portfolio",
        description: "See my complete works",
      },
      {
        name: "Instagram",
        description: "Daily posts and stories",
      },
      {
        name: "TikTok",
        description: "Process videos & tips",
      },
      {
        name: "WhatsApp",
        description: "Direct contact",
      },
    ],
    footer: {
      madeWith: "Made with 💜 by",
      tagline: "for alternative, cute & authentic brands!",
    },
  },
};

const SOCIAL_LINKS_DATA: SocialLinkData[] = [
  {
    icon: <FaBriefcase size={24} />,
    url: "http://larissagm.myportfolio.com/work",
    color: "#a855f7",
  },
  {
    icon: <FaInstagram size={24} />,
    url: "https://instagram.com/lari.design",
    color: "#E4405F",
  },
  {
    icon: <FaTiktok size={24} />,
    url: "https://tiktok.com/@lari.design",
    color: "#FF0050",
  },
  {
    icon: <FaWhatsapp size={24} />,
    url: "https://wa.me/5511999999999",
    color: "#25D366",
  },
];

// Components
const FloatingElements: React.FC = () => (
  <>
    <FloatingElement className="star-1">
      <HiSparkles size={18} style={{ color: "#d8b4fe", opacity: 0.7 }} />
    </FloatingElement>
    <FloatingElement className="star-2">
      <HiStar size={14} style={{ color: "#f9a8d4", opacity: 0.5 }} />
    </FloatingElement>
    <FloatingElement className="star-3">
      <FaHeart size={16} style={{ color: "#a855f7", opacity: 0.6 }} />
    </FloatingElement>
    <FloatingElement className="star-4">
      <HiSparkles size={20} style={{ color: "#ec4899", opacity: 0.4 }} />
    </FloatingElement>
    <FloatingElement className="star-5">
      <HiStar size={12} style={{ color: "#d8b4fe", opacity: 0.5 }} />
    </FloatingElement>
  </>
);

// Main Component
const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>("pt");

  const currentTranslation = TRANSLATIONS[language];

  const toggleLanguage = (): void => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <Container>
      <FloatingElements />
      <BackgroundPattern />
      <BackgroundGlow />

      <ContentWrapper>
        <ProfileSection>
          <ProfileImageContainer>
            <ProfileImage>
              <ProfileImageInner>
                <img src={profilePic} alt="Studio Lari Profile" />
              </ProfileImageInner>
            </ProfileImage>

            <SparkleIcon>
              <HiSparkles size={18} />
            </SparkleIcon>
          </ProfileImageContainer>

          <ProfileTitle>{currentTranslation.title}</ProfileTitle>
          <ProfileDescription>────୨ৎ────</ProfileDescription>
          <ProfileDescription>
            ★ {currentTranslation.subtitle} ★
          </ProfileDescription>
          <ProfileDescription>
            ✮⋆˙ {currentTranslation.description} ⋆˙✮
          </ProfileDescription>
          <ProfileDescription>
            ╰┈➤ {currentTranslation.tagline}
          </ProfileDescription>
        </ProfileSection>

        <LanguageButton onClick={toggleLanguage} aria-label="Change language">
          <FaGlobe size={16} />
          {language === "pt" ? "EN" : "PT"}
        </LanguageButton>

        <ContentSection>
          <LinksContainer>
            {SOCIAL_LINKS_DATA.map((linkData, index) => (
              <SocialLink
                key={`${linkData.url}-${index}`}
                href={linkData.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${currentTranslation.links[index].name}`}
              >
                <LinkCard>
                  <LinkContent>
                    <IconContainer
                      style={{
                        backgroundColor: `${linkData.color}20`,
                        border: `1px solid ${linkData.color}40`,
                      }}
                    >
                      {linkData.icon}
                    </IconContainer>
                    <LinkInfo>
                      <LinkTitle>
                        {currentTranslation.links[index].name}
                      </LinkTitle>
                      <LinkDescription>
                        {currentTranslation.links[index].description}
                      </LinkDescription>
                    </LinkInfo>
                    <ExternalIcon>
                      <FaExternalLinkAlt size={20} />
                    </ExternalIcon>
                  </LinkContent>
                </LinkCard>
              </SocialLink>
            ))}
          </LinksContainer>
        </ContentSection>

        <Footer>
          <FooterText>
            {currentTranslation.footer.madeWith}{" "}
            <a
              href="https://leocoliveira.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Leo
            </a>{" "}
            • 2025
          </FooterText>
          <FooterIcons>
            <HiSparkles size={16} style={{ color: "#a855f7", opacity: 0.6 }} />
            <FooterSubtext>{currentTranslation.footer.tagline}</FooterSubtext>
            <HiSparkles size={16} style={{ color: "#ec4899", opacity: 0.6 }} />
          </FooterIcons>
        </Footer>
      </ContentWrapper>
    </Container>
  );
};

export default App;
