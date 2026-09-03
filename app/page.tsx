"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PortfolioItem = { src: string; title: string; meta: string; wide?: boolean };
type Partner = { name: string; logo: string; category: string };

const services = [
  {
    n: "01",
    title: "Habitação e edifícios",
    text: "Projectos, construção e reabilitação de edifícios residenciais, comerciais e institucionais.",
  },
  {
    n: "02",
    title: "Estradas e obras públicas",
    text: "Estradas, pontes, portagens, acessos e infraestruturas de utilidade pública.",
  },
  {
    n: "03",
    title: "Água e saneamento",
    text: "Sistemas de abastecimento, redes de distribuição, ligações domiciliares, drenagem e saneamento.",
  },
  {
    n: "04",
    title: "Hidráulica e escavações",
    text: "Valas, fundações, tubagens, cabos, fibra óptica e infraestruturas hidráulicas.",
  },
  {
    n: "05",
    title: "Manutenção e resiliência",
    text: "Conservação e soluções resilientes a cheias, ciclones e mudanças climáticas.",
  },
];

const gallery = [
  {
    src: "/images/portfolio/abastecimento-agua.jpg",
    title: "Abastecimento de água",
    meta: "Reservatório elevado e infraestrutura hidráulica",
    wide: true,
  },
  {
    src: "/images/portfolio/trabalhos-campo.jpg",
    title: "Trabalhos de campo",
    meta: "Execução de infraestruturas em comunidades",
  },
  {
    src: "/images/portfolio/estrutura-metalica.jpg",
    title: "Estruturas metálicas",
    meta: "Coberturas e estruturas de grande vão",
  },
  {
    src: "/images/portfolio/fundacoes.jpg",
    title: "Fundações e armaduras",
    meta: "Preparação e execução estrutural",
    wide: true,
  },
  {
    src: "/images/portfolio/escavacao.jpg",
    title: "Escavações",
    meta: "Valas e implantação de redes",
  },
  {
    src: "/images/portfolio/ponte-metalica.jpg",
    title: "Obras públicas",
    meta: "Estrutura metálica e plataforma",
  },
  {
    src: "/images/portfolio/drenagem.jpg",
    title: "Infraestrutura de portagem",
    meta: "Trabalhos de construção e acabamento",
    wide: true,
  },
  {
    src: "/images/portfolio/portagem.jpg",
    title: "Drenagem e saneamento",
    meta: "Infraestruturas para protecção das comunidades",
  },
];

const partners: Partner[] = [
  { name: "REVIMO, S.A.", logo: "/images/partners/revimo.png", category: "Rede Viária de Moçambique" },
  { name: "FIPAAS, FP", logo: "/images/partners/fipaas.png", category: "Água e saneamento" },
  { name: "ANE, IP", logo: "/images/partners/ane.png", category: "Administração Nacional de Estradas" },
  { name: "Municípios de Moçambique", logo: "/images/partners/municipios.png", category: "Infraestruturas municipais" },
];

const meaning = [
  ["K", "Know-how técnico", "Experiência, competência e rigor."],
  ["H", "Habitação e hidráulica", "Edifícios e infraestruturas hidráulicas."],
  ["U", "Urbanização", "Bairros, acessos e infraestruturas urbanas."],
  ["U", "Utilidade pública", "Estradas, pontes, portagens e drenagem."],
  ["M", "Manutenção", "Conservação e reabilitação de infraestruturas."],
  ["B", "Bem-estar", "Obras que melhoram a qualidade de vida."],
  ["A", "Água, ambiente e saneamento", "Soluções responsáveis e sustentáveis."],
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`logo ${light ? "logo-light" : ""}`}
      href="#inicio"
      aria-label="KHUUMBA — página inicial"
    >
      <Image
        className="brand-logo"
        src="/images/brand/khuumba-logo-2026-transparent-web.png"
        alt="KHUUMBA Construções, Obras, Hidráulica e Saneamento"
        width={900}
        height={385}
        priority
      />
    </a>
  );
}

export default function Home() {
  const [paused, setPaused] = useState(false);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(gallery);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("khuumba-portfolio-v1") || "null");
      if (Array.isArray(saved) && saved.length) setPortfolioItems(saved);
    } catch {}
  }, []);
  return (
    <main id="inicio">
      <header className="site-header">
        <Logo />
        <nav aria-label="Navegação principal">
          <a href="#sobre">Empresa</a>
          <a href="#servicos">Serviços</a>
          <a href="#projectos">Projectos</a>
          <a href="#email">E-mail</a>
          <a href="#contactos">Contactos</a>
          <a href="/gestao">Gestão</a>
        </nav>
        <a className="nav-cta" href="#orcamento">
          Pedir orçamento <span>↗</span>
        </a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu">
            <i />
            <i />
            <i />
            <span>Menu</span>
          </summary>
          <nav aria-label="Navegação móvel">
            <a href="#sobre">Empresa</a>
            <a href="#servicos">Serviços</a>
            <a href="#projectos">Projectos</a>
            <a href="#email">E-mail</a>
            <a href="#contactos">Contactos</a>
            <a href="/gestao">Gestão</a>
            <a className="mobile-quote" href="#orcamento">
              Pedir orçamento ↗
            </a>
          </nav>
        </details>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">
            <span /> Engenharia com impacto em Moçambique
          </p>
          <h1>
            Construindo infraestruturas.
            <br />
            <em>Desenvolvendo</em> comunidades.
          </h1>
          <p className="hero-lead">
            Construção civil, obras públicas e saneamento com qualidade,
            segurança e compromisso em cada projecto.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#orcamento">
              Fale connosco <span>↗</span>
            </a>
            <a className="text-link" href="#servicos">
              Conheça os serviços <span>↓</span>
            </a>
          </div>
        </div>
        <div
          className="hero-art"
          aria-label="Representação gráfica de infraestrutura e água"
        >
          <div className="structure">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="sun" />
          <div className="water w1" />
          <div className="water w2" />
          <div className="hero-seal">
            <strong>K</strong>
            <span>
              Qualidade
              <br />
              que permanece
            </span>
          </div>
        </div>
        <div className="hero-stats">
          <div>
            <strong>5</strong>
            <span>
              áreas de
              <br />
              actuação
            </span>
          </div>
          <div>
            <strong>360°</strong>
            <span>
              soluções
              <br />
              integradas
            </span>
          </div>
          <div>
            <strong>MZ</strong>
            <span>
              empresa
              <br />
              moçambicana
            </span>
          </div>
        </div>
      </section>

      <section className="intro section" id="sobre">
        <div>
          <p className="section-kicker">Quem somos</p>
          <h2>
            Infraestruturas sólidas.
            <br />
            Relações duradouras.
          </h2>
        </div>
        <div className="intro-copy">
          <p>
            A{" "}
            <strong>
              KHUUMBA Construções, Obras Públicas &amp; Saneamento
            </strong>{" "}
            é uma empresa moçambicana orientada para a execução de soluções
            técnicas que melhoram espaços, serviços e comunidades.
          </p>
          <p>
            Trabalhamos com clientes públicos, privados e parceiros de
            desenvolvimento, valorizando o planeamento, a transparência, a
            segurança e a qualidade da execução.
          </p>
          <a className="text-link dark" href="#contactos">
            Conheça a KHUUMBA <span>→</span>
          </a>
        </div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading">
          <div>
            <p className="section-kicker light">O que fazemos</p>
            <h2>
              Soluções para construir
              <br />
              um futuro melhor.
            </h2>
          </div>
          <p>
            Do conceito à entrega, combinamos conhecimento técnico, gestão e
            proximidade com o cliente.
          </p>
        </div>
        <div className="service-list">
          {services.map((s) => (
            <article key={s.n}>
              <span>{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <b>↗</b>
            </article>
          ))}
        </div>
      </section>

      <section className="meaning section" id="significado">
        <div className="section-heading pale">
          <div>
            <p className="section-kicker">O significado da nossa marca</p>
            <h2>
              KHUUMBA representa
              <br />o que construímos.
            </h2>
          </div>
          <p>
            Conhecimento técnico aplicado à habitação, urbanização, obras
            públicas, manutenção, bem-estar, água e saneamento.
          </p>
        </div>
        <div className="meaning-grid">
          {meaning.map((item, index) => (
            <article key={`${item[0]}-${index}`}>
              <b>{item[0]}</b>
              <div>
                <h3>{item[1]}</h3>
                <p>{item[2]}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="principles section">
        <div className="principle-card orange">
          <span>01</span>
          <h3>Qualidade</h3>
          <p>Rigor técnico e atenção ao detalhe em todas as fases.</p>
        </div>
        <div className="principle-card teal">
          <span>02</span>
          <h3>Segurança</h3>
          <p>Protecção das pessoas, dos activos e do ambiente.</p>
        </div>
        <div className="principle-card navy">
          <span>03</span>
          <h3>Compromisso</h3>
          <p>Responsabilidade com prazos, recursos e resultados.</p>
        </div>
      </section>

      <section className="projects section" id="projectos">
        <div className="section-heading pale">
          <div>
            <p className="section-kicker">Portfólio de obras</p>
            <h2>
              Experiência real.
              <br />
              Resultados visíveis.
            </h2>
          </div>
          <p>
            Registos do portfólio institucional da KHUUMBA em construção, água,
            saneamento, estruturas e obras públicas.
          </p>
        </div>
        <div className="portfolio-controls">
          <span>{portfolioItems.length} projectos e áreas de intervenção</span>
          <button type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>
            {paused ? "Continuar apresentação ▶" : "Pausar apresentação Ⅱ"}
          </button>
        </div>
        <div className="gallery-carousel" aria-label="Galeria de projectos KHUUMBA">
          <div className={"gallery-track" + (paused ? " paused" : "")}>
          {[...portfolioItems, ...portfolioItems].map((item, index) => (
            <figure className={item.wide ? "wide" : ""} key={item.title + "-" + index}>
              <div>
                <Image
                  src={item.src}
                  alt={item.title}
                  width={1000}
                  height={625}
                />
                <span>Portfólio KHUUMBA</span>
              </div>
              <figcaption>
                <strong>{item.title}</strong>
                <small>{item.meta}</small>
              </figcaption>
            </figure>
          ))}
          </div>
        </div>
      </section>

      <section className="partners section" id="parceiros">
        <div className="section-heading pale">
          <div><p className="section-kicker">Entidades com quem trabalhamos</p><h2>Parcerias que constroem<br />resultados.</h2></div>
          <p>Cooperação com instituições públicas, empresas e municípios na execução de infraestruturas.</p>
        </div>
        <div className="partner-grid">
          {partners.map((partner) => (
            <article key={partner.name}>
              <div className="partner-logo"><img src={partner.logo} alt={"Logótipo " + partner.name} /></div>
              <h3>{partner.name}</h3><p>{partner.category}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="corporate-mail section" id="email">
        <div>
          <p className="section-kicker light">Comunicação corporativa</p>
          <h2>E-mail profissional<br />KHUUMBA.</h2>
          <p className="corporate-mail-lead">Comunicação oficial através de endereços com o domínio <strong>@khuumba.co.mz</strong>, com acesso reservado e protegido.</p>
          <a className="button mail-button" href="https://mail.zoho.com/zm/" target="_blank" rel="noopener noreferrer">Aceder ao e-mail corporativo <span>↗</span></a>
        </div>
        <div className="corporate-mail-cards">
          <article><b>01</b><h3>Identidade profissional</h3><p>Comunicação oficial com o domínio da empresa.</p></article>
          <article><b>02</b><h3>Acesso reservado</h3><p>Cada colaborador entra com as suas credenciais pessoais.</p></article>
          <article><b>03</b><h3>Acesso em qualquer lugar</h3><p>Correio corporativo disponível no computador ou telemóvel.</p></article>
        </div>
      </section>

      <section className="quote section" id="orcamento">
        <div>
          <p className="section-kicker light">Vamos construir juntos</p>
          <h2>
            Tem um projecto
            <br />
            em mente?
          </h2>
          <p>
            Conte-nos o que precisa. A nossa equipa entrará em contacto para
            compreender o desafio e preparar a melhor solução.
          </p>
        </div>
        <a
          className="quote-button"
          href="mailto:khuumbaconstrucoes@gmail.com?subject=Pedido%20de%20orçamento%20—%20Website%20KHUUMBA"
        >
          <span>Solicitar orçamento</span>
          <b>↗</b>
          <small>Resposta personalizada</small>
        </a>
      </section>

      <footer id="contactos">
        <div className="footer-top">
          <Logo light />
          <div>
            <small>CONTACTO</small>
            <a href="tel:+258866900003">+258 86 690 0003</a>
            <a href="tel:+258878080306">+258 87 808 0306</a>
            <a href="mailto:khuumbaconstrucoes@gmail.com">
              khuumbaconstrucoes@gmail.com
            </a>
          </div>
          <div>
            <small>LOCALIZAÇÃO</small>
            <p>
              Bairro de Laulane, Av. Julius Nyerere, n.º 185
              <br />
              Distrito de KaMavota, Maputo
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 KHUUMBA. Todos os direitos reservados.</span>
          <span>NUIT 401483667</span>
          <a href="#inicio">Voltar ao topo ↑</a>
        </div>
      </footer>
    </main>
  );
}
