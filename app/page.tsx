import Image from "next/image";

const services = [
  { n: "01", title: "Construção civil", text: "Edifícios residenciais, comerciais e institucionais, da fundação ao acabamento." },
  { n: "02", title: "Obras públicas", text: "Infraestruturas de interesse público executadas com rigor, segurança e responsabilidade." },
  { n: "03", title: "Saneamento", text: "Soluções de abastecimento de água, drenagem, saneamento e promoção da saúde ambiental." },
  { n: "04", title: "Manutenção", text: "Reabilitação e conservação preventiva e correctiva de edifícios e infraestruturas." },
  { n: "05", title: "Desenvolvimento comunitário", text: "Intervenções que combinam infraestrutura, participação local e impacto social sustentável." },
];

const gallery = [
  {src:"/images/gallery/mudissa-portagem.png",title:"Portagem de Mudissa",meta:"Obra em execução · 10%",wide:true},
  {src:"/images/gallery/chiango-vala.png",title:"Vala do Chiango",meta:"Obra concluída"},
  {src:"/images/gallery/matola-gare.png",title:"Portagem de Matola Gare",meta:"Execução avançada · 90%"},
  {src:"/images/gallery/kumbeza-portagem.png",title:"Portagem de Kumbeza",meta:"Obra concluída",wide:true},
  {src:"/images/gallery/fipas-gaza.png",title:"FIPAS — Gaza",meta:"Fase de mobilização"},
  {src:"/images/gallery/fipas-inhambane.png",title:"FIPAS — Inhambane",meta:"Fase de mobilização"},
  {src:"/images/gallery/fipas-maputo.png",title:"FIPAS — Maputo Província",meta:"Fase de mobilização",wide:true},
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a className={`logo ${light ? "logo-light" : ""}`} href="#inicio" aria-label="KHUUMBA — página inicial">
      <span className="logo-mark" aria-hidden="true"><i /><b /></span>
      <span className="logo-type"><strong>KHUUMBA</strong><small>CONSTRUÇÕES · OBRAS PÚBLICAS · SANEAMENTO</small></span>
    </a>
  );
}

export default function Home() {
  return (
    <main id="inicio">
      <header className="site-header">
        <Logo />
        <nav aria-label="Navegação principal">
          <a href="#sobre">Empresa</a><a href="#servicos">Serviços</a><a href="#projectos">Projectos</a><a href="#contactos">Contactos</a><a href="/gestao">Gestão</a>
        </nav>
        <a className="nav-cta" href="#orcamento">Pedir orçamento <span>↗</span></a>
        <details className="mobile-menu">
          <summary aria-label="Abrir menu"><i /><i /><i /><span>Menu</span></summary>
          <nav aria-label="Navegação móvel">
            <a href="#sobre">Empresa</a><a href="#servicos">Serviços</a><a href="#projectos">Projectos</a><a href="#contactos">Contactos</a><a href="/gestao">Gestão</a><a className="mobile-quote" href="#orcamento">Pedir orçamento ↗</a>
          </nav>
        </details>
      </header>

      <section className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Engenharia com impacto em Moçambique</p>
          <h1>Construímos soluções.<br /><em>Transformamos</em> comunidades.</h1>
          <p className="hero-lead">Construção civil, obras públicas e saneamento com qualidade, segurança e compromisso em cada projecto.</p>
          <div className="hero-actions"><a className="button button-primary" href="#orcamento">Fale connosco <span>↗</span></a><a className="text-link" href="#servicos">Conheça os serviços <span>↓</span></a></div>
        </div>
        <div className="hero-art" aria-label="Representação gráfica de infraestrutura e água">
          <div className="structure"><span /><span /><span /><span /></div>
          <div className="sun" /><div className="water w1" /><div className="water w2" />
          <div className="hero-seal"><strong>K</strong><span>Qualidade<br />que permanece</span></div>
        </div>
        <div className="hero-stats">
          <div><strong>5</strong><span>áreas de<br />actuação</span></div>
          <div><strong>360°</strong><span>soluções<br />integradas</span></div>
          <div><strong>MZ</strong><span>empresa<br />moçambicana</span></div>
        </div>
      </section>

      <section className="intro section" id="sobre">
        <div><p className="section-kicker">Quem somos</p><h2>Infraestruturas sólidas.<br />Relações duradouras.</h2></div>
        <div className="intro-copy"><p>A <strong>KHUUMBA Construções, Obras Públicas &amp; Saneamento</strong> é uma empresa moçambicana orientada para a execução de soluções técnicas que melhoram espaços, serviços e comunidades.</p><p>Trabalhamos com clientes públicos, privados e parceiros de desenvolvimento, valorizando o planeamento, a transparência, a segurança e a qualidade da execução.</p><a className="text-link dark" href="#contactos">Conheça a KHUUMBA <span>→</span></a></div>
      </section>

      <section className="services section" id="servicos">
        <div className="section-heading"><div><p className="section-kicker light">O que fazemos</p><h2>Soluções para construir<br />um futuro melhor.</h2></div><p>Do conceito à entrega, combinamos conhecimento técnico, gestão e proximidade com o cliente.</p></div>
        <div className="service-list">{services.map((s) => <article key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p><b>↗</b></article>)}</div>
      </section>

      <section className="principles section">
        <div className="principle-card orange"><span>01</span><h3>Qualidade</h3><p>Rigor técnico e atenção ao detalhe em todas as fases.</p></div>
        <div className="principle-card teal"><span>02</span><h3>Segurança</h3><p>Protecção das pessoas, dos activos e do ambiente.</p></div>
        <div className="principle-card navy"><span>03</span><h3>Compromisso</h3><p>Responsabilidade com prazos, recursos e resultados.</p></div>
      </section>

      <section className="projects section" id="projectos">
        <div className="section-heading pale"><div><p className="section-kicker">Galeria de obras</p><h2>Obras que transformam<br />infraestruturas e comunidades.</h2></div><p>Registo visual ilustrativo das intervenções em portagens, drenagem e projectos de saneamento em Moçambique.</p></div>
        <div className="gallery-grid">{gallery.map((item)=><figure className={item.wide?"wide":""} key={item.title}><div><Image src={item.src} alt={`Imagem ilustrativa — ${item.title}`} width={1000} height={625}/><span>Imagem ilustrativa</span></div><figcaption><strong>{item.title}</strong><small>{item.meta}</small></figcaption></figure>)}</div>
        <p className="gallery-note">Todas as imagens desta galeria são representações ilustrativas criadas para apresentação institucional. Podem ser substituídas posteriormente por fotografias oficiais das obras.</p>
      </section>

      <section className="quote section" id="orcamento">
        <div><p className="section-kicker light">Vamos construir juntos</p><h2>Tem um projecto<br />em mente?</h2><p>Conte-nos o que precisa. A nossa equipa entrará em contacto para compreender o desafio e preparar a melhor solução.</p></div>
        <a className="quote-button" href="mailto:khuumbaconstrucoes@gmail.com?subject=Pedido%20de%20orçamento%20—%20Website%20KHUUMBA"><span>Solicitar orçamento</span><b>↗</b><small>Resposta personalizada</small></a>
      </section>

      <footer id="contactos">
        <div className="footer-top"><Logo light /><div><small>CONTACTO</small><a href="tel:+258866900003">+258 86 690 0003</a><a href="mailto:khuumbaconstrucoes@gmail.com">khuumbaconstrucoes@gmail.com</a></div><div><small>LOCALIZAÇÃO</small><p>Bairro Intaka<br />Maputo, Moçambique</p></div></div>
        <div className="footer-bottom"><span>© 2026 KHUUMBA. Todos os direitos reservados.</span><span>NUIT 401483667</span><a href="#inicio">Voltar ao topo ↑</a></div>
      </footer>
    </main>
  );
}
