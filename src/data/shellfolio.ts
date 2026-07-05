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
      about: `Infrastructure and DevOps Engineer, passionate about open-source and decentralized systems.\nInterests: Security, Privacy, Linux, Self-Hosting, AI, and Economics.\n“I use Nix, btw.”`
    },
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "Dez/2025-Pres",
        company: "Homelab",
        folder: "Infrastructure and DevOps Engineer",
        content: `My self-hosted infrastructure focused on privacy, resilience, and full user control. Designed for network isolation, encrypted storage, reproducibility, and as a contributor to decentralization.\n- Private Cloud Architecture: I designed and operate a resilient environment in Proxmox VE, with full disk encryption (LUKS2), network segmentation (802.1Q VLANs), and routing/firewalling via OPNsense (router-on-a-stick architecture).\n- Automation, GitOps, and Documentation: I implemented Infrastructure as Code (IaC) using Ansible and Git as the single source of truth, orchestrating more than 30 Docker containers, eliminating manual configuration (ClickOps), and ensuring server consistency and configuration control. I maintain extensive technical documentation (runbooks, threat models, and architecture policies) structured within the repository.\n- Zero Trust Security: I architected a security ecosystem with HashiCorp Vault (AppRole) for secrets management, identity via Authentik (SSO/OIDC), and container hardening via Socket Proxy. Transitioned secrets management to Mozilla SOPS + age, achieving fully encrypted GitOps and Zero-Touch Provisioning with Ansible. I also implemented active defense using CrowdSec (LAPI/Bouncer architecture) and Fail2Ban. Kernel-level restrictions (cgroups) were applied to control blast radius.\n- Observability and Auditing: I set up a PLG stack (Prometheus, Loki, Grafana) based on the U.S.E. and R.E.D. methodologies, with dashboards-as-code for metrics and centralized security logging (lightweight SIEM), including alerting via Ntfy.\n- Network Engineering: I implemented secure remote access via a VPN mesh (Tailscale) with strict ACLs, as well as Traefik v3 (reverse proxy) with internal certificate management (private CA) and redundant DNS.\nDisaster Recovery Validated: Implemented a 3-2-1-1-0 backup strategy consisting of encrypted offsite backups (Restic + Backblaze B2), air-gapped local checkpoints stored on a dedicated LUKS-encrypted drive containing VZDumps, Proxmox configuration, and critical data, with regular backup and restore validation to ensure recoverability. Also implemented remote disk unlocking via Dropbear SSH for headless recovery and UPS/NUT integration for safe shutdown and automated service recovery.\n- Node Runner: I operate Bitcoin Core, Electrs, and Monero infrastructure with traffic routed over Tor and dedicated SSD storage. I perform tuning of LMDB, LevelDB, and RocksDB for blockchain indexing, with system limits enforced via systemd cgroups and KVM throttling.\n\n>> Repository Link: github.com/fajremvp/homelab`
      },
      {
        perms: "drwxr-xr-x",
        date: "Apr/2026-Jun/2026",
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
        file: "nixos-config",
        link: "https://github.com/fajremvp/nixos-config",
        content: `My ultimate "OS as Code" architecture. This repository brings the Infrastructure as Code (IaC) mindset to the desktop through a fully declarative configuration powered by Nix Flakes and Home Manager. It eliminates "ClickOps" and system drift entirely, providing instant reproducibility on any machine, immutability, reliable rollbacks, and a Single Source of Truth (SSOT) for my networking, packages, drivers, and dotfiles.`
      },
      {
        perms: "drwxr-xr-x",
        file: "shellfolio",
        link: "https://github.com/fajremvp/shellfolio",
        content: `Minimalist portfolio template built with Astro.js, focused on high performance and TUI (Terminal User Interface) aesthetics. It simulates a realistic Unix terminal environment in the browser, featuring a dynamic systemd-inspired boot sequence, log syntax highlighting, and faithful typographic rendering for developers, sysadmins, and Linux enthusiasts seeking a nostalgic and authentic visual identity.`
      },
      {
        perms: "-rwxr-xr-x",
        file: "HyprRun",
        link: "https://github.com/fajremvp/HyprRun",
        content: "I built a minimalist application launcher in Bash designed specifically for dynamic tiling window managers such as Hyprland, Niri, and Sway. It leverages fzf for fast fuzzy searching directly from the terminal, avoiding floating windows and the overhead of graphical interfaces. The result is a keyboard-driven workflow with zero GUI overhead that keeps workspaces clean and stays true to the tiling philosophy."
      },
      {
        perms: "lrwxrwxrwx",
        file: "dotfiles",
        link: "https://github.com/fajremvp/dotfiles",
        content: "I maintained and automated my previous Linux development environment using custom configurations managed with Chezmoi and Git, ensuring version control, portability, and fast provisioning through an Infrastructure as Code approach for the desktop. Although I have since moved to the declarative ecosystem of NixOS, this repository reflects my deep dive into imperative system automation and Wayland customization. The repository includes Shell scripts for resource monitoring, system tuning, and interactive terminal-based utilities, helping standardize workflows across an Arch Linux setup running Hyprland."
      },
      {
        perms: "drwxr-xr-x",
        file: "S4F3-C0D3S",
        link: "https://github.com/fajremvp/S4F3-C0D3S",
        content: "Developed a 2FA code manager in Java. Implemented AES-256-GCM encryption with PBKDF2+HMAC-SHA256 key derivation and random salts. Architecture includes brute-force defense (delays), memory clearing of sensitive data, and secure destruction by overwriting in case of tampering or multiple authentication failures."
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x", date: "2025-2028", institution: "UDESC", folder: "Bachelor of Software Engineering",
        content: "Santa Catarina State University (UDESC) - Term 3/8."
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
        repoLink: "Repository Link",
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
      about: `Engenheiro de Infraestrutura e DevOps, entusiasta de open-source e sistemas descentralizados.\nInteresses: Segurança, Privacidade, Linux, Auto-Hospedagem, IA e Economia.\n"I use Nix, btw"`
    },
    experiences: [
      {
        perms: "drwxr-xr-x",
        date: "Dez/2025-Pres",
        company: "Homelab",
        folder: "Engenheiro de Infraestrutura e DevOps",
        content: `Minha infraestrutura auto-hospedada focada em privacidade, resiliência e controle total do usuário. Projetada para isolamento de rede, armazenamento criptografado, reprodutibilidade e como uma contribuição para a descentralização.\n- Arquitetura de Nuvem Privada: Projetei e opero um ambiente resiliente em Proxmox VE, com criptografia de disco total (LUKS2), segmentação de rede (VLANs 802.1Q) e roteamento/firewall via OPNsense (Router-on-a-Stick).\n- Automação, GitOps e Documentação: Implementei Infrastructure as Code (IaC) com Ansible e Git como "Fonte da Verdade", orquestrando mais de 30 containers Docker, eliminando configurações manuais (ClickOps) e garantindo a consistência e controle de configuração dos servidores. Mantenho extensa documentação técnica (Runbooks, Threat Models e Políticas de Arquitetura) estruturada no repositório.\n- Segurança Zero Trust: Arquitetei um ecossistema de segurança com HashiCorp Vault (AppRole) para segredos, identidade via Authentik (SSO/OIDC) e hardening de containers via Socket Proxy, além de defesa ativa com CrowdSec (arquitetura LAPI/Bouncer) e Fail2Ban. Migrei a gestão de segredos para Mozilla SOPS + age, alcançando GitOps 100% criptografado e Zero-Touch Provisioning com Ansible. Implementei restrições via Kernel (Cgroups) para controle de Blast Radius.\n- Observabilidade e Auditoria: Configurei stack PLG (Prometheus, Loki, Grafana) baseada nas metodologias U.S.E. e R.E.D. com Dashboards as Code para métricas e centralização de logs de segurança (SIEM leve), com alertas via Ntfy.\n- Engenharia de Redes: Implementei acesso remoto seguro via VPN Mesh (Tailscale) com ACLs estritas, além de Traefik v3 (proxy reverso) com gestão de certificados internos (CA própria) e DNS redundante.\n- Disaster Recovery Validado: Estabeleci uma estratégia de backup 3-2-1-1-0, composta por backups criptografados offsite (Restic + Backblaze B2), checkpoints locais air-gapped em HD dedicado com LUKS contendo VZDumps, configurações do Proxmox e dados críticos, além de validações periódicas de backup e restore para garantir recuperabilidade. Também implementei desbloqueio remoto de disco via Dropbear SSH para recuperação headless e integração de UPS/NUT para desligamento e retorno seguro dos serviços.\n- Node Runner: Opero infraestrutura Bitcoin Core, Electrs e Monero com tráfego via Tor e SSD dedicado. Tuning de LMDB, LevelDB e RocksDB para indexação blockchain, com limites via Systemd Cgroups e KVM Throttling.\n\n>> Link do Repositório: github.com/fajremvp/homelab`
      },
      {
        perms: "drwxr-xr-x",
        date: "Abr/2026-Jun/2026",
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
        file: "nixos-config",
        link: "https://github.com/fajremvp/nixos-config",
        content: `Minha arquitetura definitiva de "OS as Code". Este repositório aplica a filosofia de Infraestrutura como Código (IaC) direto no desktop de forma declarativa usando Nix Flakes e Home Manager. O projeto elimina completamente "ClickOps" e a degradação do sistema, garantindo reprodutibilidade instantânea em qualquer hardware, imutabilidade, rollbacks à prova de falhas e um Single Source of Truth (SSOT) para toda a minha rede, pacotes, drivers e dotfiles.`
      },
      {
        perms: "drwxr-xr-x",
        file: "shellfolio",
        link: "https://github.com/fajremvp/shellfolio",
        content: `Template do meu portfólio minimalista construído com Astro.js, focado em alta performance e estética TUI (Terminal User Interface). Ele simula um ambiente de terminal Unix realista no navegador, incluindo uma sequência de boot dinâmica inspirada no systemd, sintaxe highlight de logs e renderização tipográfica fiel para desenvolvedores, sysadmins e entusiastas Linux que buscam uma identidade visual nostálgica e autêntica.`
      },
      {
        perms: "-rwxr-xr-x",
        file: "HyprRun",
        link: "https://github.com/fajremvp/HyprRun",
        content: "Criei um launcher de aplicações minimalista em Bash projetado especificamente para tiling window managers dinâmicos como Hyprland, Niri e Sway. Integrei o fzf para busca fuzzy de alta performance via terminal, evitando janelas flutuantes e a sobrecarga de interfaces gráficas. O resultado é um workflow focado no teclado, com zero overhead de interface gráfica, que mantém os workspaces limpos e respeita a filosofia tiling."
      },
      {
        perms: "lrwxrwxrwx",
        file: "dotfiles",
        link: "https://github.com/fajremvp/dotfiles",
        content: "Mantive a automação e gestão do meu antigo ambiente de desenvolvimento Linux com configurações próprias, usando Chezmoi e Git para garantir versionamento, portabilidade e provisionamento rápido (IaC para desktop). Embora eu tenha migrado para o mundo declarativo do NixOS, este repositório representa meu mergulho profundo na automação imperativa de sistemas e customização do Wayland. O repositório inclui scripts em Shell para monitoramento de recursos, ajuste de parâmetros do sistema e interfaces interativas via terminal, padronizando workflows em Arch Linux com Hyprland."
      },
      {
        perms: "drwxr-xr-x",
        file: "S4F3-C0D3S",
        link: "https://github.com/fajremvp/S4F3-C0D3S",
        content: "Desenvolvi um gerenciador de códigos 2FA em Java. Implementei criptografia AES-256-GCM com derivação de chave PBKDF2+HMAC-SHA256 e salts aleatórios. A arquitetura inclui defesa contra força bruta (delays), limpeza de memória de dados sensíveis e destruição segura por sobrescrita em caso de adulteração ou múltiplas falhas de autenticação."
      }
    ],
    education: [
      {
        perms: "drwxr-xr-x",
        date: "2025-2028",
        institution: "UDESC",
        folder: "Bacharelado em Engenharia de Software",
        content: "Universidade do Estado de Santa Catarina (UDESC) - Fase 3/8."
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
        repoLink: "Link do Repositório",
        langEn: "[ Inglês ]",
        langPt: "[ Português ]"
    }
  }
};
