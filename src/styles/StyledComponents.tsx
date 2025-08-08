import styled, { keyframes } from "styled-components";

// Keyframes
export const fadeIn = keyframes`
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`;

export const float = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-25px) rotate(180deg); 
  }
`;

export const floatSlow = keyframes`
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-20px) rotate(-180deg); 
  }
`;

export const gradientShift = keyframes`
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

export const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.05);
    opacity: 1;
  }
`;

export const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

export const fadeInOverlay = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const scaleIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

// Main Layout Components
export const Container = styled.div`
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

export const ContentWrapper = styled.div`
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

// Background Components
export const FloatingElement = styled.div`
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

export const BackgroundPattern = styled.div`
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

export const BackgroundGlow = styled.div`
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

// Profile Components
export const ProfileSection = styled.section`
  text-align: center;
  margin-bottom: 2.5rem;

  @media (min-width: 769px) {
    margin-bottom: 3rem;
  }
`;

export const ProfileImageContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
`;

export const ProfileImage = styled.div`
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

export const ProfileImageInner = styled.div`
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

export const SparkleIcon = styled.div`
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

export const ProfileTitle = styled.h1`
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

export const ProfileDescription = styled.p`
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

// Button Components
export const LanguageButton = styled.button`
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

export const TermsButton = styled.button`
  background: rgba(168, 85, 247, 0.08);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(168, 85, 247, 0.15);
  border-radius: 10px;
  color: #a1a1aa;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  font-weight: 500;

  &:hover {
    background: rgba(168, 85, 247, 0.12);
    border-color: rgba(168, 85, 247, 0.25);
    color: #d8b4fe;
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.5rem 0.8rem;
  }
`;

// Content Sections
export const TermsSection = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 2rem 0;
  animation: ${fadeIn} 0.8s ease-out 0.1s both;
`;

export const ContentSection = styled.section`
  animation: ${fadeIn} 0.8s ease-out 0.2s both;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media (min-width: 769px) {
    gap: 1.5rem;
  }
`;

// Link Components
export const SocialLink = styled.a`
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

export const LinkCard = styled.article`
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

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const IconContainer = styled.div`
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

export const LinkInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const LinkTitle = styled.h3`
  color: #ffffff;
  font-weight: 600;
  font-size: 1.2rem;
  margin: 0 0 0.25rem 0;
  letter-spacing: -0.01em;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const LinkDescription = styled.p`
  color: #a1a1aa;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.4;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const ExternalIcon = styled.div`
  color: #71717a;
  transition: all 0.3s ease;
  opacity: 0.7;

  ${SocialLink}:hover & {
    color: #a855f7;
    opacity: 1;
    transform: translate(2px, -2px);
  }
`;

// Footer Components
export const Footer = styled.footer`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(168, 85, 247, 0.15);

  @media (min-width: 769px) {
    margin-top: 3.5rem;
    padding-top: 2.5rem;
  }
`;

export const FooterText = styled.p`
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

export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const FooterSubtext = styled.span`
  font-size: 0.8rem;
  color: #71717a;
  font-weight: 400;
  opacity: 0.8;
`;

// Modal Components
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: ${fadeInOverlay} 0.2s ease-out;
  will-change: opacity;
`;

export const ModalContent = styled.div`
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 1.5rem;
  padding: 2rem;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${scaleIn} 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
  will-change: transform, opacity;

  /* Otimizações para suavidade */
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;

  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(168, 85, 247, 0.1);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(168, 85, 247, 0.3);
    border-radius: 3px;
    transition: background 0.3s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(168, 85, 247, 0.5);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    max-height: 85vh;
    border-radius: 1.25rem;
    margin: 1rem;
    width: calc(100% - 2rem);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const ModalTitle = styled.h2`
  font-family: "Pacifico", "Dancing Script", cursive;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #d8b4fe 0%, #f9a8d4 50%, #d8b4fe 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

export const CloseButton = styled.button`
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a855f7;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.4);
    transform: scale(1.05);
  }
`;

export const TermsModalSection = styled.section`
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  font-family: "Quicksand", "Comfortaa", sans-serif;
  font-size: 1.3rem;
  font-weight: 600;
  color: #ec4899;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "✦";
    color: #a855f7;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const SectionContent = styled.div`
  color: #e5e7eb;
  line-height: 1.6;
  font-size: 0.95rem;

  p {
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  strong {
    color: #f9a8d4;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ImportantNote = styled.div`
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 1rem;
  padding: 1.25rem;
  margin-bottom: 2rem;

  p {
    color: #d8b4fe;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
    font-weight: 500;
  }
`;
