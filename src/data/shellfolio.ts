// --- Types ---
export interface Profile {
  Name: string;
  Online: string;
  Uptime: string;
  Location: string;
  Role: string;
  Status: string;
  OS: string;
  Host: string;
  Kernel: string;
  Shell: string;
  WM: string;
  about: string;
}

export interface Experience {
  perms: string;
  date: string;
  company: string;
  folder: string;
  content: string;
}

export interface Project {
  perms: string;
  file: string;
  link: string;
  content: string;
}

export interface Education {
  perms: string;
  date: string;
  institution: string;
  folder: string;
  content: string;
}

export interface Skill {
  category: string;
  items: string;
}

export interface Remote {
  name: string;
  url: string;
  webLink: string;
}

export interface UIStrings {
  repoLink: string;
  langEn: string;
  langPt: string;
}

export interface LanguageData {
  profile: Profile;
  experiences: Experience[];
  projects: Project[];
  education: Education[];
  skills: Skill[];
  remotes: Remote[];
  ui: UIStrings;
}

export interface PortfolioData {
  en: LanguageData;
  pt: LanguageData;
}

// --- Data ---
export const contactLinks = [
  { protocol: "mailto", handle: "fajre.eastcoast399@aleeas.com", url: "mailto:fajre.eastcoast399@aleeas.com" },
  { protocol: "linkedin", handle: "in/joaovfdo", url: "https://linkedin.com/in/joaovfdo" },
  { protocol: "youtube", handle: "@fajremvp", url: "https://www.youtube.com/@fajremvp" },
  { protocol: "reddit", handle: "u/FajreMVP", url: "https://www.reddit.com/user/FajreMVP" },
  { protocol: "nostr", handle: "npub1dykmduj9qepw44zcwqah0wvxftzvd0escfrqqrxjhawd8c8mzagqgxfysu" },
  { protocol: "simplex", handle: "SimpleX Chat", url: "https://smp14.simplex.im/a#J67Nzetqn5zkzqu7UzZB1YJPl8Usxa-VJNqCg6oIi6o" }
];

export const paymentMethods = [
  { name: "BTC", address: "bc1qnrn2hzkelpcczfp9uw89v34lycr88wm3ytz7sr", qr: "/assets/qr-btc.webp" },
  { name: "Lightning", address: "fajre@blink.sv", qr: "/assets/qr-ln.webp" },
  { name: "XMR", address: "83a6wfkXtdiQaB8Qy89b8TiBBbxux8FJV74K9stuwpx5HcdB9u4aCiB3YMLhJdM9P13wjDQQNjjA3KroTjWWwX3qJaR3Fgz", qr: "/assets/qr-xmr.webp" },
  { name: "Pix", address: "17ef428e-49d7-405e-9e90-fce5b8ee3ddf", qr: "/assets/qr-pix.webp" }
];

export const data: PortfolioData = {
  en: {
    profile: {
      Name: "Joao Vitor Fogaca de Oliveira",
      Online: "Fajre",
      Uptime: "19 years",
      Location: "Ibirama, SC, Brazil",
      Role: "Software Engineering Student",
      Status: "Open to work",
      OS: "NixOS 26.05 (Yarara) x86_64",
      Host: "Aspire A315-41 (V1.18)",
      Kernel: "Linux 6.18.26",
      Shell: "bash 5.3.9",
      WM: "niri 26.04 (Wayland)",
      about: `Software Engineering student focused on Infrastructure, DevOps, and Security.\nInterests: Linux, Privacy, Self-Hosting, Open Source, Decentralized Systems, AI, and Economics.\n“I use Nix, btw.”`
    },
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "Apr/2026-Jul/2026",
        company: "Honorato & Bini Advogados Associados",
        folder: "Data and Document Management Assistant",
        content: `Temporary work involving processing and standardization of shooting club records for integration with the SINARM system (Federal Police of Brazil).\n- Built Python automation to validate records in bulk via authenticated HTTP requests to a web-based system, processing unstructured responses and marking inconsistencies in Excel spreadsheets.\n- Partial automation of document digitization and data extraction workflows using AI (OCR + LLM), improving productivity in record migration and processing.\n- Structuring data in spreadsheets (Excel/CSV) for system integration.\n- Validation and correction of inconsistencies between physical and digital records in large volumes of sensitive data.\n- Audited and reconciled financial histories (payments/billing) and membership status of club associates, mitigating compliance failures prior to data export.\n- Digitization of physical documents and data normalization for automated system import.\n- Communication with clients via WhatsApp to verify and correct data inconsistencies and request missing or updated information.\n- Ensuring integrity and accuracy of sensitive data under regulatory requirements.`
      },
      {
        perms: "drwxr-xr-x",
        date: "Apr/2025-Dez/2025",
        company: "UDESC",
        folder: "Scholarship Holder",
        content: "Worked at the Robotics Laboratory (LABOT) on extension projects focused on digital inclusion, teaching workshops to empower the elderly in using smartphones and technology, as well as educational robotics classes for children with playful and interactive activities to stimulate logical reasoning."
      }
    ],
    projects: [
      {
        perms: "drwxr-xr-x",
        file: "homelab",
        link: "https://github.com/fajremvp/homelab",
        content: `My self-hosted infrastructure developed to centralize personal services and apply Linux, networking, DevOps, observability, security, and self-hosting technologies in a production environment. The project prioritizes automation, reproducibility, privacy, and high availability, continuously evolving as a learning laboratory and platform for validating new architectures.\nI designed and operate a resilient environment based on Proxmox VE, using virtualization, network segmentation (VLANs), and OPNsense firewalling for service isolation.\nI automated the provisioning and management of more than 30 Docker containers through Infrastructure as Code (IaC) with Ansible and GitOps, eliminating manual configurations (ClickOps).\nI architected a security infrastructure based on Zero Trust principles, using HashiCorp Vault, Authentik (SSO/OIDC), CrowdSec, Fail2Ban, and encrypted secret management with SOPS + age.\nI implemented a secure connectivity layer using Traefik as a reverse proxy, Tailscale for private remote access, and services accessible through the Tor network, ensuring secure access and service isolation.\nI configured an observability platform with Prometheus, Loki, and Grafana, applying U.S.E. and R.E.D. methodologies for monitoring, log aggregation, and alerting through Ntfy.\nI developed a disaster recovery strategy following the 3-2-1-1-0 model, with encrypted backups using Restic and Backblaze B2, local checkpoints, and restoration validation procedures to ensure reliable recovery.\nI operate full nodes for Bitcoin Core, Electrs, and Monero, using dedicated storage, Tor integration, and optimizations for blockchain indexing and management.\nI maintain technical documentation for the infrastructure, including diagrams, runbooks, threat models, security policies, and configuration standards, facilitating maintenance, auditing, and continuous evolution of the environment.`
      },
      {
        perms: "drwxr-xr-x",
        file: "nixos-config",
        link: "https://github.com/fajremvp/nixos-config",
        content: `I maintain a declarative NixOS configuration using Nix Flakes and Home Manager, applying Infrastructure as Code (IaC) concepts directly to the desktop environment.\nThe project automates operating system management, packages, drivers, and personal configurations, eliminating manual processes while ensuring reproducibility, versioning, and recovery through rollbacks.\nThe architecture follows the "OS as Code" concept, maintaining a Single Source of Truth (SSOT) for the entire Linux environment.`
      },
      {
        perms: "drwxr-xr-x",
        file: "shellfolio",
        link: "https://github.com/fajremvp/shellfolio",
        content: `Developed a minimalist portfolio template using Astro.js, inspired by TUI (Terminal User Interface) interfaces and Linux environments.\nThe project simulates a Unix terminal experience in the browser, featuring a systemd-inspired boot animation, optimized typography for developers, and a modular TypeScript-based structure.\nThe goal is to combine high performance, simplicity, and a nostalgic visual identity for developers, sysadmins, and Linux enthusiasts.`
      },
      {
        perms: "-rwxr-xr-x",
        file: "HyprRun",
        link: "https://github.com/fajremvp/HyprRun",
        content: `Developed a minimalist application launcher in Bash specifically designed for tiling window managers such as Hyprland, Niri, and Sway.\nIntegrated fzf for fast fuzzy search through the terminal, creating a keyboard-driven workflow without floating windows or unnecessary graphical overhead. The project follows the tiling philosophy by keeping workspaces clean and efficient.`
      },
      {
        perms: "lrwxrwxrwx",
        file: "dotfiles",
        link: "https://github.com/fajremvp/dotfiles",
        content: `Maintained the automation and management of my personal Linux environment using Chezmoi and Git, ensuring versioning, portability, and fast provisioning of system configurations.\nThe project automates the customization of an Arch Linux desktop with Hyprland, including Shell scripts, system parameter adjustments, and interactive terminal interfaces.\nAlthough I later migrated to the declarative NixOS model, this repository represents my experience with imperative automation, configuration management, and advanced Linux environment customization.`
      },
      {
        perms: "drwxr-xr-x",
        file: "S4F3-C0D3S",
        link: "https://github.com/fajremvp/S4F3-C0D3S",
        content: `Developed a 2FA code manager in Java with a graphical interface built using Swing.\nImplemented security mechanisms such as AES-256-GCM encryption, PBKDF2+HMAC-SHA256 key derivation, random salts, and brute-force protection. The application also includes sensitive data protection in memory and secure information destruction in cases of tampering or multiple authentication failures.`
      },
      {
        perms: "drwxr-xr-x",
        file: "cantina-udesc-doo2",
        link: "https://github.com/fajremvp/cantina-udesc-doo2",
        content: `System developed as an extension project for the Object-Oriented Programming II course at UDESC.\nDeveloped as a team, we built a Java desktop university cafeteria management system using Swing and the MVC architecture, aiming to digitize the order workflow and replace paper-based processes and WhatsApp communication, proposing a solution to improve service organization during peak hours and demand and inventory management.\nThe project followed collaborative development practices, using Kanban for task management and Git Flow for version control. Implemented data persistence with JPA/Hibernate and SQLite, along with continuous integration (CI) pipelines using GitHub Actions.`
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2025-2028", institution: "UDESC", folder: "Bachelor of Software Engineering",
        content: "Santa Catarina State University (UDESC) - Term 4/8."
      }
    ],
    skills: [
      {
        category: "Infrastructure & Virtualization",
        items: "Linux (Debian, Alpine, Arch, NixOS), Proxmox VE, LXC, ZFS, Docker, Systemd, LUKS2, Dropbear (Initramfs SSH), NUT."
      },
      {
        category: "DevOps & Automation (IaC)",
        items: "Ansible, Jinja2, Docker Compose, Shell Scripting, Cloud-Init, Chezmoi, Restic, Backblaze B2, GitOps, CI/CD Pipelines, Shift-Left Security, Pre-Commit Hooks, Code Quality Gates."
      },
      {
        category: "Security & Identity (Zero Trust)",
        items: "HashiCorp Vault, Mozilla SOPS, age encryption, Authentik, CrowdSec, Fail2Ban, Socket Proxy, PKI (internal CA), SSH hardening."
      },
      {
        category: "Networking & Connectivity",
        items: "OPNsense, VLANs, Traefik, Tailscale, DNS (AdGuard Home/Split-Horizon), Tor (Hidden Services), Network Debugging (tcpdump/nmap), P2P Sync (Syncthing), Edge Computing."
      },
      {
        category: "Observability",
        items: "Prometheus, Loki, Grafana, Alloy, Alertmanager, Ntfy, Node Exporter, SRE Methodologies (U.S.E. / R.E.D.), Passive Monitoring (Healthchecks.io)."
      },
      {
        category: "Development & Data",
        items: "Java, Python, Bash, Nix, PostgreSQL, SQLite, Regex, Git."
      }
    ],
    remotes: [
      {
        name: "github",
        url: "git@github.com:fajremvp/repo.git",
        webLink: "https://github.com/fajremvp"
      },
      {
        name: "codeberg",
        url: "git@codeberg.org:fajre/repo.git",
        webLink: "https://codeberg.org/fajre"
      }
    ],
    ui: {
        repoLink: "Repository link",
        langEn: "[ English ]",
        langPt: "[ Portuguese ]"
    }
  },
  pt: {
    profile: {
      Name: "Joao Vitor Fogaca de Oliveira",
      Online: "Fajre",
      Uptime: "19 anos",
      Location: "Ibirama, SC, Brasil",
      Role: "Estudante de Engenharia de Software",
      Status: "Disponivel para trabalho",
      OS: "NixOS 26.05 (Yarara) x86_64",
      Host: "Aspire A315-41 (V1.18)",
      Kernel: "Linux 6.18.26",
      Shell: "bash 5.3.9",
      WM: "niri 26.04 (Wayland)",
      about: `Estudante de Engenharia de Software com foco em Infraestrutura, DevOps e Segurança.\nInteresses: Linux, Privacidade, Self-Hosting, Open Source, Sistemas Descentralizados, IA e Economia.\n“I use Nix, btw.”`
    },
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "Abr/2026-Jul/2026",
        company: "Honorato & Bini Advogados Associados",
        folder: "Assistente de Gestao de Dados e Documentos",
        content: `Trabalho temporário de processamento e regularização de registros de habitualidade de clube de tiro para integração com o sistema SINARM (Polícia Federal).\n- Desenvolvimento de automação em Python para validação em lote de registros via integração com sistema web, realizando consultas HTTP autenticadas, processamento de respostas não estruturadas e marcação de inconsistências diretamente em planilhas Excel.\n- Automação parcial do fluxo de digitalização e extração de dados com uso de IA (OCR + LLM), aumentando a produtividade na migração e processamento de registros.\n- Estruturação de dados em planilhas (Excel/CSV) para integração com sistemas.\n- Validação e correção de inconsistências entre registros físicos e digitais em alto volume de dados críticos.\n- Auditoria e conciliação de históricos financeiros (pagamentos e cobranças) e status de filiação dos associados, mitigando falhas de conformidade antes da exportação dos dados.\n- Digitalização de documentos físicos e normalização de dados para importação automatizada em sistemas.\n- Comunicação com clientes via WhatsApp para verificar e corrigir inconsistências de dados e solicitar informações faltantes ou atualizadas.\n- Garantia de integridade e precisão em dados sensíveis sob exigência regulatória.`
      },
      {
        perms: "drwxr-xr-x",
        date: "Abr/2025-Dez/2025",
        company: "UDESC",
        folder: "Bolsista",
        content: "Atuei no Laboratório de Robótica (LABOT) em projetos de extensão com foco em inclusão digital, ministrando oficinas para capacitar o público idoso no uso de smartphones e tecnologias, além de aulas de robótica educacional para crianças com atividades lúdicas e interativas para o estímulo do raciocínio lógico."
      }
    ],
    projects: [
      {
        perms: "drwxr-xr-x",
        file: "homelab",
        link: "https://github.com/fajremvp/homelab",
        content: `Minha infraestrutura auto-hospedada desenvolvida para centralizar serviços pessoais e aplicar, em um ambiente de produção, tecnologias de Linux, redes, DevOps, observabilidade, segurança e self-hosting. O projeto prioriza automação, reprodutibilidade, privacidade e alta disponibilidade, evoluindo continuamente como laboratório de aprendizado e validação de novas arquiteturas.\nProjetei e opero um ambiente resiliente em Proxmox VE, utilizando virtualização, segmentação de rede (VLANs) e firewall com OPNsense para isolamento dos serviços.\nAutomatizei o provisionamento e gerenciamento de mais de 30 containers Docker por meio de Infrastructure as Code (IaC) com Ansible e GitOps, eliminando configurações manuais (ClickOps).\nArquitetei uma infraestrutura de segurança baseada nos princípios de Zero Trust, utilizando HashiCorp Vault, Authentik (SSO/OIDC), CrowdSec, Fail2Ban e gerenciamento de segredos criptografados com SOPS + age.\nImplementei uma camada de conectividade segura utilizando Traefik como proxy reverso, Tailscale para acesso remoto privado e serviços acessíveis através da rede Tor, garantindo acesso seguro e isolamento dos serviços.\nConfigurei uma plataforma de observabilidade com Prometheus, Loki e Grafana, aplicando as metodologias U.S.E. e R.E.D. para monitoramento, centralização de logs e geração de alertas via Ntfy.\nDesenvolvi uma estratégia de disaster recovery seguindo o modelo 3-2-1-1-0, com backups criptografados usando Restic e Backblaze B2, checkpoints locais e validações de restauração para garantir recuperação confiável.\nOpero nós completos de Bitcoin Core, Electrs e Monero, utilizando armazenamento dedicado, integração com Tor e otimizações para indexação e gerenciamento de blockchain.\nMantenho a documentação técnica da infraestrutura com diagramas, runbooks, modelos de ameaça, políticas de segurança e padrões de configuração, facilitando manutenção, auditoria e evolução do ambiente.`
      },
      {
        perms: "drwxr-xr-x",
        file: "nixos-config",
        link: "https://github.com/fajremvp/nixos-config",
        content: `Mantenho uma configuração declarativa do NixOS utilizando Nix Flakes e Home Manager, aplicando conceitos de Infrastructure as Code (IaC) diretamente no ambiente desktop.\nO projeto automatiza o gerenciamento do sistema operacional, pacotes, drivers e configurações pessoais, eliminando processos manuais e garantindo reprodutibilidade, versionamento e recuperação através de rollbacks.\nA arquitetura segue o conceito de "OS as Code", mantendo um Single Source of Truth (SSOT) para toda a configuração do ambiente Linux.`
      },
      {
        perms: "drwxr-xr-x",
        file: "shellfolio",
        link: "https://github.com/fajremvp/shellfolio",
        content: `Desenvolvi um template de portfólio minimalista utilizando Astro.js, inspirado em interfaces TUI (Terminal User Interface) e ambientes Linux.\nO projeto simula uma experiência de terminal Unix no navegador, com animação de boot inspirada no systemd, renderização tipográfica otimizada para desenvolvedores e uma estrutura modular baseada em TypeScript.\nO objetivo é unir alta performance, simplicidade e uma identidade visual nostálgica para desenvolvedores, sysadmins e entusiastas Linux.`
      },
      {
        perms: "-rwxr-xr-x",
        file: "HyprRun",
        link: "https://github.com/fajremvp/HyprRun",
        content: `Desenvolvi um launcher de aplicações minimalista em Bash projetado especificamente para tiling window managers como Hyprland, Niri e Sway.\nIntegrei o fzf para busca fuzzy rápida pelo terminal, criando um fluxo de trabalho focado no teclado sem janelas flutuantes ou sobrecarga gráfica desnecessária. O projeto segue a filosofia tiling mantendo os workspaces limpos e eficientes.`
      },
      {
        perms: "lrwxrwxrwx",
        file: "dotfiles",
        link: "https://github.com/fajremvp/dotfiles",
        content: `Mantive a automação e gestão do meu ambiente pessoal Linux utilizando Chezmoi e Git, garantindo versionamento, portabilidade e provisionamento rápido das configurações do sistema.\nO projeto automatiza a personalização de um desktop Arch Linux com Hyprland, incluindo scripts em Shell, ajustes de parâmetros do sistema e interfaces interativas via terminal.\nEmbora posteriormente tenha migrado para o modelo declarativo do NixOS, este repositório representa minha experiência com automação imperativa, gerenciamento de configurações e customização avançada de ambientes Linux.`
      },
      {
        perms: "drwxr-xr-x",
        file: "S4F3-C0D3S",
        link: "https://github.com/fajremvp/S4F3-C0D3S",
        content: `Desenvolvi um gerenciador de códigos 2FA em Java com interface gráfica construída utilizando Swing.\nImplementei mecanismos de segurança como criptografia AES-256-GCM, derivação de chave com PBKDF2+HMAC-SHA256, uso de salts aleatórios e proteção contra tentativas de força bruta. A aplicação também conta com práticas de proteção de dados sensíveis em memória e destruição segura de informações em casos de adulteração ou múltiplas falhas de autenticação.`
      },
      {
        perms: "drwxr-xr-x",
        file: "cantina-udesc-doo2",
        link: "https://github.com/fajremvp/cantina-udesc-doo2",
        content: `Sistema desenvolvido como projeto de extensão da disciplina de Programação Orientada a Objetos II da UDESC.\nDesenvolvemos em equipe um sistema desktop de gerenciamento da cantina universitária em Java utilizando Swing e arquitetura MVC, com o objetivo de digitalizar o fluxo de pedidos e substituir processos baseados em papel e WhatsApp, propondo uma solução para melhorar a organização do atendimento em horários de pico e o controle de demanda e estoque.\nO projeto seguiu práticas colaborativas de desenvolvimento, utilizando Kanban para gerenciamento de tarefas e Git Flow para controle de versão. Implementamos a persistência de dados com JPA/Hibernate e SQLite, além de pipelines de integração contínua (CI) com GitHub Actions.`
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x",
        date: "2025-2028",
        institution: "UDESC",
        folder: "Bacharelado em Engenharia de Software",
        content: "Universidade do Estado de Santa Catarina (UDESC) - Fase 4/8."
      }
    ],
    skills: [
      {
        category: "Infraestrutura & Virtualização",
        items: "Linux (Debian, Alpine, Arch, NixOS), Proxmox VE, LXC, ZFS, Docker, Systemd, LUKS2, Dropbear (Initramfs SSH), NUT."
      },
      {
        category: "DevOps & Automação (IaC)",
        items: "Ansible, Jinja2, Docker Compose, Shell Scripting, Cloud-Init, Chezmoi, Restic, Backblaze B2, GitOps, CI/CD Pipelines, Shift-Left Security, Pre-Commit Hooks, Code Quality Gates."
      },
      {
        category: "Segurança & Identidade (Zero Trust)",
        items: "HashiCorp Vault, Mozilla SOPS, age encryption, Authentik, CrowdSec, Fail2Ban, Socket Proxy, PKI (internal CA), SSH hardening."
      },
      {
        category: "Redes & Conectividade",
        items: "OPNsense, VLANs, Traefik, Tailscale, DNS (AdGuard Home/Split-Horizon), Tor (Hidden Services), Network Debugging (tcpdump/nmap), P2P Sync (Syncthing), Edge Computing."
      },
      {
        category: "Observabilidade",
        items: "Prometheus, Loki, Grafana, Alloy, Alertmanager, Ntfy, Node Exporter, SRE Methodologies (U.S.E. / R.E.D.), Passive Monitoring (Healthchecks.io)."
      },
      {
        category: "Desenvolvimento & Dados",
        items: "Java, Python, Bash, Nix, PostgreSQL, SQLite, Regex, Git."
      }
    ],
    remotes: [
      {
        name: "github",
        url: "git@github.com:fajremvp/repo.git",
        webLink: "https://github.com/fajremvp"
      },
      {
        name: "codeberg",
        url: "git@codeberg.org:fajre/repo.git",
        webLink: "https://codeberg.org/fajre"
      }
    ],
    ui: {
        repoLink: "Link do repositório",
        langEn: "[ Inglês ]",
        langPt: "[ Português ]"
    }
  }
};
