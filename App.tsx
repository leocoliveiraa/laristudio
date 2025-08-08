import React, { useState, useCallback, useMemo } from "react";
import {
  FaInstagram,
  FaTiktok,
  FaExternalLinkAlt,
  FaHeart,
  FaBriefcase,
  FaWhatsapp,
  FaGlobe,
  FaTimes,
  FaFileContract,
} from "react-icons/fa";
import { HiSparkles, HiStar } from "react-icons/hi";

import profilePic from "./assets/IMG_1442.png";

// Import dos componentes organizados
import {
  TRANSLATIONS,
  type Translation,
  type Language,
} from "./components/TextContent";
import {
  Container,
  ContentWrapper,
  FloatingElement,
  BackgroundPattern,
  BackgroundGlow,
  ProfileSection,
  ProfileImageContainer,
  ProfileImage,
  ProfileImageInner,
  SparkleIcon,
  ProfileTitle,
  ProfileDescription,
  LanguageButton,
  TermsSection,
  TermsButton,
  ContentSection,
  LinksContainer,
  SocialLink,
  LinkCard,
  LinkContent,
  IconContainer,
  LinkInfo,
  LinkTitle,
  LinkDescription,
  ExternalIcon,
  Footer,
  FooterText,
  FooterIcons,
  FooterSubtext,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalTitle,
  CloseButton,
  TermsModalSection,
  SectionTitle,
  SectionContent,
  ImportantNote,
} from "./styles/StyledComponents";

// Interfaces
interface SocialLinkData {
  icon: React.ReactNode;
  url: string;
  color: string;
}

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  translation: Translation;
}

// Constants
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

// Componente otimizado para renderização de parágrafos
const OptimizedParagraph: React.FC<{ text: string; index: number }> =
  React.memo(({ text, index }) => (
    <p key={index}>
      {text.includes("50% do valor total") ? (
        <>
          {text.split("50% do valor total")[0]}
          <strong>50% do valor total</strong>
          {text.split("50% do valor total")[1]}
        </>
      ) : text.includes("50% restantes") ? (
        <>
          Os <strong>50% restantes</strong>
          {text.split("50% restantes")[1]}
        </>
      ) : text.includes("**WhatsApp e e-mail**") ||
        text.includes("**WhatsApp and email**") ? (
        <>
          {text.split("**WhatsApp")[0]}
          <strong style={{}}>
            WhatsApp{text.split("WhatsApp")[1].split("**")[0]}
          </strong>
          {text.split("**")[2]}
        </>
      ) : text.includes("**Após a finalização completa do projeto:**") ? (
        <>
          <strong style={{}}>Após a finalização completa do projeto:</strong>
          {text.replace("**Após a finalização completa do projeto:**", "")}
        </>
      ) : text.includes("**After complete project finalization:**") ? (
        <>
          <strong style={{}}>After complete project finalization:</strong>
          {text.replace("**After complete project finalization:**", "")}
        </>
      ) : text.includes("**Cancelamento após início do projeto:**") ? (
        <>
          <strong style={{}}>Cancelamento após início do projeto:</strong>
          {text.replace("**Cancelamento após início do projeto:**", "")}
        </>
      ) : text.includes("**Cancellation after project start:**") ? (
        <>
          <strong style={{}}>Cancellation after project start:</strong>
          {text.replace("**Cancellation after project start:**", "")}
        </>
      ) : text.includes("**Antes do início do projeto:**") ? (
        <>
          <strong style={{}}>Antes do início do projeto:</strong>
          {text.replace("**Antes do início do projeto:**", "")}
        </>
      ) : text.includes("**Before project start:**") ? (
        <>
          <strong>Before project start:</strong>
          {text.replace("**Before project start:**", "")}
        </>
      ) : text.includes("25% é reembolsável") ? (
        <>
          {text.split("25% é reembolsável")[0]}
          <strong>25% é reembolsável</strong>
          {text.split("25% é reembolsável")[1]}
        </>
      ) : text.includes("Identidade Visual:") ? (
        <>
          <strong>Identidade Visual:</strong>
          {text.replace("Identidade Visual:", "")}
        </>
      ) : text.includes("Design de posts") ? (
        <>
          <strong>
            Design de posts, banners, flyers e outras artes digitais:
          </strong>
          {text.replace(
            "Design de posts, banners, flyers e outras artes digitais:",
            ""
          )}
        </>
      ) : text.includes("3 alterações") ? (
        <>
          {text.split("3 alterações")[0]}
          <strong>3 alterações</strong>
          {text.split("3 alterações")[1].split("R$5,00")[0]}
          <strong>R$5,00</strong>
          {text.split("R$5,00")[1]}
        </>
      ) : text.includes("WhatsApp, e-mail e/ou Google Drive") ? (
        <>
          {text.split("WhatsApp, e-mail e/ou Google Drive")[0]}
          <strong>WhatsApp, e-mail e/ou Google Drive</strong>
          {text.split("WhatsApp, e-mail e/ou Google Drive")[1]}
        </>
      ) : text.includes("Google Drive") ? (
        <>
          {text.split("Google Drive")[0]}
          <strong>Google Drive</strong>
          {text.split("Google Drive")[1]}
        </>
      ) : text.includes("finalização completa do projeto:") ? (
        <>
          <strong>Após a finalização completa do projeto:</strong>
          {text.replace("Após a finalização completa do projeto:", "")}
        </>
      ) : text.includes("50% do projeto:") ? (
        <>
          <strong>
            Após aprovação do rascunho e execução de cerca de 50% do projeto:
          </strong>
          {text.replace(
            "Após aprovação do rascunho e execução de cerca de 50% do projeto:",
            ""
          )}
        </>
      ) : text.includes("Antes do início") ? (
        <>
          <strong>Antes do início do projeto:</strong>
          {text.replace("Antes do início do projeto:", "")}
        </>
      ) : (
        text
      )}
    </p>
  ));

OptimizedParagraph.displayName = "OptimizedParagraph";
// Sub-components
const FloatingElements: React.FC = React.memo(() => (
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
));

FloatingElements.displayName = "FloatingElements";

const TermsModal: React.FC<TermsModalProps> = React.memo(
  ({ isOpen, onClose, translation }) => {
    const handleOverlayClick = useCallback(
      (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      },
      [onClose]
    );

    const handleContentClick = useCallback((e: React.MouseEvent) => {
      e.stopPropagation();
    }, []);

    // Memoizar seções para evitar re-renderização desnecessária
    const paymentSection = useMemo(
      () => (
        <TermsModalSection>
          <SectionTitle>
            {translation.terms.sections.payment.title}
          </SectionTitle>
          <SectionContent>
            {translation.terms.sections.payment.content.map(
              (text: string, index: number) => (
                <OptimizedParagraph
                  key={`payment-${index}`}
                  text={text}
                  index={index}
                />
              )
            )}
          </SectionContent>
        </TermsModalSection>
      ),
      [translation.terms.sections.payment]
    );

    const deliverySection = useMemo(
      () => (
        <TermsModalSection>
          <SectionTitle>
            {translation.terms.sections.delivery.title}
          </SectionTitle>
          <SectionContent>
            {translation.terms.sections.delivery.content.map(
              (text: string, index: number) => (
                <OptimizedParagraph
                  key={`delivery-${index}`}
                  text={text}
                  index={index}
                />
              )
            )}
          </SectionContent>
        </TermsModalSection>
      ),
      [translation.terms.sections.delivery]
    );

    const communicationSection = useMemo(
      () => (
        <TermsModalSection>
          <SectionTitle>
            {translation.terms.sections.communication.title}
          </SectionTitle>
          <SectionContent>
            {translation.terms.sections.communication.content.map(
              (text: string, index: number) => (
                <OptimizedParagraph
                  key={`communication-${index}`}
                  text={text}
                  index={index}
                />
              )
            )}
          </SectionContent>
        </TermsModalSection>
      ),
      [translation.terms.sections.communication]
    );

    const cancellationSection = useMemo(
      () => (
        <TermsModalSection>
          <SectionTitle>
            {translation.terms.sections.cancellation.title}
          </SectionTitle>
          <SectionContent>
            {translation.terms.sections.cancellation.content.map(
              (text: string, index: number) => (
                <OptimizedParagraph
                  key={`cancellation-${index}`}
                  text={text}
                  index={index}
                />
              )
            )}
          </SectionContent>
        </TermsModalSection>
      ),
      [translation.terms.sections.cancellation]
    );

    if (!isOpen) return null;

    return (
      <ModalOverlay onClick={handleOverlayClick}>
        <ModalContent onClick={handleContentClick}>
          <ModalHeader>
            <ModalTitle>{translation.terms.title}</ModalTitle>
            <CloseButton onClick={onClose} aria-label="Fechar modal">
              <FaTimes size={16} />
            </CloseButton>
          </ModalHeader>

          <ImportantNote>
            <p>
              <strong>Observação:</strong> {translation.terms.importantNote}
            </p>
          </ImportantNote>

          {paymentSection}
          {deliverySection}
          {communicationSection}
          {cancellationSection}
        </ModalContent>
      </ModalOverlay>
    );
  }
);

TermsModal.displayName = "TermsModal";

// Main Component
const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>("pt");
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  const currentTranslation = useMemo(() => TRANSLATIONS[language], [language]);

  const toggleLanguage = useCallback((): void => {
    setLanguage((prev: string) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const openTermsModal = useCallback((): void => {
    setIsTermsModalOpen(true);
  }, []);

  const closeTermsModal = useCallback((): void => {
    setIsTermsModalOpen(false);
  }, []);

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

        <TermsSection>
          <TermsButton onClick={openTermsModal}>
            <FaFileContract size={12} />
            {currentTranslation.terms.buttonText}
          </TermsButton>
        </TermsSection>

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

      <TermsModal
        isOpen={isTermsModalOpen}
        onClose={closeTermsModal}
        translation={currentTranslation}
      />
    </Container>
  );
};

export default App;
