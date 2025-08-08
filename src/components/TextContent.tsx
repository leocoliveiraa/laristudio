// Types
export type Language = "pt" | "en";

export interface Translation {
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
  terms: {
    title: string;
    buttonText: string;
    importantNote: string;
    sections: {
      payment: {
        title: string;
        content: string[];
      };
      delivery: {
        title: string;
        content: string[];
      };
      communication: {
        title: string;
        content: string[];
      };
      cancellation: {
        title: string;
        content: string[];
      };
    };
  };
}

// Translations
export const TRANSLATIONS: Record<Language, Translation> = {
  pt: {
    title: "Studios Lari",
    subtitle: "Visual Designer",
    description: "Identidade Visual, Design de Posts e mais",
    tagline: "para marcas alternativas, fofas & autênticas!",
    links: [
      {
        name: "Portfólio",
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
    terms: {
      title: "Termos de Serviço",
      buttonText: "Termos de Serviço",
      importantNote:
        "Observação: Todos os serviços são prestados mediante contrato formal assinado entre as partes, garantindo clareza, segurança e cumprimento de prazos e condições.",
      sections: {
        payment: {
          title: "Agendamento e Pagamento",
          content: [
            "O projeto só inicia após a confirmação do pagamento de 50% do valor total como sinal.",
            "Os 50% restantes devem ser pagos na entrega final dos arquivos.",
            "O sinal garante sua vaga na agenda e apenas 25% é reembolsável em caso de desistência antes do início.",
          ],
        },
        delivery: {
          title: "Prazos de Entrega",
          content: [
            "Identidade Visual: prazo médio de 25 a 30 dias úteis após o envio completo das informações e referências solicitadas.",
            "Design de posts, banners, flyers e outras artes digitais: prazo definido conforme a quantidade de peças e combinado na contratação.",
            "Alterações solicitadas pelo cliente podem estender o prazo de entrega.",
            "Nos projetos, dou direito a 3 alterações, passando de três é cobrado um valor de R$5,00 para cada alteração.",
          ],
        },
        communication: {
          title: "Comunicação e Envio de Arquivos",
          content: [
            "A comunicação será feita via WhatsApp, e-mail e/ou Google Drive.",
            "Todos os arquivos finais serão entregues em uma pasta exclusiva no Google Drive.",
            "É responsabilidade do cliente aprovar as etapas e baixar os arquivos dentro do prazo acordado.",
          ],
        },
        cancellation: {
          title: "Cancelamentos e Reembolsos",
          content: [
            "Após a finalização completa do projeto: não há reembolso.",
            "Após aprovação do rascunho e execução de cerca de 50% do projeto: reembolso de 50% do valor total.",
            "Antes do início do projeto: aplica-se a política de não devolução do sinal.",
          ],
        },
      },
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
    terms: {
      title: "Terms of Service",
      buttonText: "Terms of Service",
      importantNote:
        "Note: All services are provided through a formal contract signed between the parties, ensuring clarity, security, and compliance with deadlines and conditions.",
      sections: {
        payment: {
          title: "Scheduling and Payment",
          content: [
            "The project only starts after confirmation of payment of 50% of the total amount as a deposit.",
            "The remaining 50% must be paid upon final delivery of files.",
            "The deposit guarantees your spot in the schedule and only 25% is refundable in case of withdrawal before starting.",
          ],
        },
        delivery: {
          title: "Delivery Times",
          content: [
            "Visual Identity: average deadline of 25 to 30 business days after complete submission of requested information and references.",
            "Design of posts, banners, flyers and other digital arts: deadline defined according to the number of pieces and agreed upon hiring.",
            "Changes requested by the client may extend the delivery deadline.",
            "In projects, I give the right to 3 changes, exceeding three is charged a value of $5.00 for each change.",
          ],
        },
        communication: {
          title: "Communication and File Delivery",
          content: [
            "Communication will be done via WhatsApp, email and/or Google Drive.",
            "All final files will be delivered in an exclusive Google Drive folder.",
            "It is the client's responsibility to approve the stages and download the files within the agreed deadline.",
          ],
        },
        cancellation: {
          title: "Cancellations and Refunds",
          content: [
            "After complete project finalization: no refund.",
            "After draft approval and execution of about 50% of the project: refund of 50% of the total value.",
            "Before project start: non-refund deposit policy applies.",
          ],
        },
      },
    },
  },
};
