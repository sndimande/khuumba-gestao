"use client";
import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
type User = { nome: string; email: string; senha: string; perfil: string };
type Obra = {
  id: string;
  nome: string;
  local: string;
  estado: string;
  progresso: number;
  responsavel: string;
  trabalhadores: number;
  equipamentos: string[];
};
type Documento = {
  codigo: string;
  titulo: string;
  categoria: string;
  obra: string;
  versao: string;
  data: string;
  responsavel: string;
  estado: string;
};
const users: User[] = [
  {
    nome: "António Mulenguene",
    email: "admin@khuumba.co.mz",
    senha: "CONFIGURE_ADMIN_PASSWORD",
    perfil: "Administrador",
  },
  {
    nome: "Celso Machava",
    email: "gestor@khuumba.co.mz",
    senha: "CONFIGURE_MANAGER_PASSWORD",
    perfil: "Gestor de Obras",
  },
  {
    nome: "Marta Cossa",
    email: "financeiro@khuumba.co.mz",
    senha: "CONFIGURE_FINANCE_PASSWORD",
    perfil: "Financeiro",
  },
  {
    nome: "Joaquim Mabote",
    email: "logistica@khuumba.co.mz",
    senha: "CONFIGURE_LOGISTICS_PASSWORD",
    perfil: "Logística",
  },
];
const obras: Obra[] = [
  {
    id: "OBR-001",
    nome: "Obras na Portagem de Mudissa",
    local: "Mudissa, Província de Maputo",
    estado: "Em execução",
    progresso: 10,
    responsavel: "Celso Machava",
    trabalhadores: 18,
    equipamentos: ["Camião Basculante 01", "Pá Escavadora 01"],
  },
  {
    id: "OBR-002",
    nome: "Construção da Vala do Chiango",
    local: "Chiango, Cidade de Maputo",
    estado: "Concluída",
    progresso: 100,
    responsavel: "Joaquim Langa",
    trabalhadores: 0,
    equipamentos: [],
  },
  {
    id: "OBR-003",
    nome: "Obras na Portagem de Kumbeza",
    local: "Kumbeza, Província de Maputo",
    estado: "Concluída",
    progresso: 100,
    responsavel: "Celso Machava",
    trabalhadores: 0,
    equipamentos: [],
  },
  {
    id: "OBR-004",
    nome: "Obras na Portagem de Matola Gare",
    local: "Matola Gare, Província de Maputo",
    estado: "Em execução",
    progresso: 90,
    responsavel: "Joaquim Langa",
    trabalhadores: 26,
    equipamentos: ["Camião Basculante 02", "Betoneira 01"],
  },
  {
    id: "OBR-005",
    nome: "FIPAS — Gaza",
    local: "Província de Gaza",
    estado: "Mobilização",
    progresso: 5,
    responsavel: "Alberto Bila",
    trabalhadores: 12,
    equipamentos: ["Viatura Operacional 01"],
  },
  {
    id: "OBR-006",
    nome: "FIPAS — Inhambane",
    local: "Província de Inhambane",
    estado: "Mobilização",
    progresso: 5,
    responsavel: "Marta Nhantumbo",
    trabalhadores: 10,
    equipamentos: ["Camião de Apoio 01"],
  },
  {
    id: "OBR-007",
    nome: "FIPAS — Maputo Província",
    local: "Província de Maputo",
    estado: "Mobilização",
    progresso: 5,
    responsavel: "Alberto Bila",
    trabalhadores: 14,
    equipamentos: ["Viatura Operacional 02"],
  },
];
const equipamentos = [
  ["EQ-001", "Camião Basculante 01", "Camião", "Mudissa", "Operacional"],
  ["EQ-002", "Camião Basculante 02", "Camião", "Matola Gare", "Operacional"],
  ["EQ-003", "Camião de Apoio 01", "Camião", "FIPAS Inhambane", "Em missão"],
  ["EQ-004", "Pá Escavadora 01", "Máquina pesada", "Mudissa", "Operacional"],
  [
    "EQ-005",
    "Pá Escavadora 02",
    "Máquina pesada",
    "Estaleiro Central",
    "Disponível",
  ],
  ["EQ-006", "Betoneira 01", "Equipamento", "Matola Gare", "Operacional"],
  ["EQ-007", "Viatura Operacional 01", "Pickup", "FIPAS Gaza", "Em missão"],
  ["EQ-008", "Viatura Operacional 02", "Pickup", "FIPAS Maputo", "Em missão"],
  ["EQ-009", "Gerador 01", "Energia", "Estaleiro Central", "Disponível"],
];
const materiais = [
  ["MAT-001", "Cimento 42.5", "Saco", 680, "Armazém Central"],
  ["MAT-002", "Ferro 12 mm", "Barra", 420, "Mudissa"],
  ["MAT-003", "Brita", "m³", 185, "Matola Gare"],
  ["MAT-004", "Areia lavada", "m³", 240, "Matola Gare"],
  ["MAT-005", "Tubagem PVC", "Unidade", 310, "FIPAS Gaza"],
  ["MAT-006", "Blocos", "Unidade", 4800, "Mudissa"],
  ["MAT-007", "Combustível", "Litro", 3450, "Armazém Central"],
];
const movimentos = [
  ["19/07/2026", "18 trabalhadores", "Sede → Mudissa", "Mobilização de equipa"],
  [
    "19/07/2026",
    "12 trabalhadores",
    "Maputo → FIPAS Gaza",
    "Mobilização inicial",
  ],
  [
    "18/07/2026",
    "10 trabalhadores",
    "Maputo → FIPAS Inhambane",
    "Mobilização inicial",
  ],
  [
    "18/07/2026",
    "14 trabalhadores",
    "Sede → FIPAS Maputo",
    "Mobilização inicial",
  ],
  ["17/07/2026", "8 trabalhadores", "Matola Gare → Sede", "Rotação de equipa"],
  [
    "16/07/2026",
    "Pá Escavadora 01",
    "Estaleiro → Mudissa",
    "Afectação de equipamento",
  ],
];
const documentos: Documento[] = [
  {
    codigo: "DOC-001",
    titulo: "Contrato de empreitada — Mudissa",
    categoria: "Contratos",
    obra: "Portagem de Mudissa",
    versao: "v2",
    data: "15/07/2026",
    responsavel: "Administração",
    estado: "Aprovado",
  },
  {
    codigo: "DOC-002",
    titulo: "Auto de medição n.º 04",
    categoria: "Autos e medições",
    obra: "Portagem de Matola Gare",
    versao: "v1",
    data: "18/07/2026",
    responsavel: "Fiscalização",
    estado: "Em validação",
  },
  {
    codigo: "DOC-003",
    titulo: "Plano de segurança e saúde",
    categoria: "Higiene e segurança",
    obra: "FIPAS — Gaza",
    versao: "v1",
    data: "12/07/2026",
    responsavel: "Técnico de Segurança",
    estado: "Aprovado",
  },
  {
    codigo: "DOC-004",
    titulo: "Relatório fotográfico de conclusão",
    categoria: "Relatórios",
    obra: "Vala do Chiango",
    versao: "v3",
    data: "30/06/2026",
    responsavel: "Gestor de Obras",
    estado: "Arquivado",
  },
  {
    codigo: "DOC-005",
    titulo: "Memória descritiva e desenhos",
    categoria: "Projectos técnicos",
    obra: "Portagem de Kumbeza",
    versao: "v4",
    data: "25/06/2026",
    responsavel: "Engenharia",
    estado: "Arquivado",
  },
  {
    codigo: "DOC-006",
    titulo: "Licença e expediente institucional",
    categoria: "Licenças",
    obra: "Institucional",
    versao: "v1",
    data: "10/06/2026",
    responsavel: "Administração",
    estado: "Válido",
  },
];
function dbGet<T>(k: string, d: T): T {
  if (typeof window === "undefined") return d;
  try {
    const value = JSON.parse(localStorage.getItem(k) || "");
    return value ?? d;
  } catch {
    return d;
  }
}
export default function Gestao() {
  const [user, setUser] = useState<User | null>(null),
    [email, setEmail] = useState("admin@khuumba.co.mz"),
    [senha, setSenha] = useState("CONFIGURE_ADMIN_PASSWORD"),
    [erro, setErro] = useState(""),
    [tab, setTab] = useState("Painel"),
    [lista, setLista] = useState<Obra[]>(obras),
    [q, setQ] = useState("");
  useEffect(() => {
    const seed = "khuumba-real-v1";
    if (localStorage.getItem("khuumba-seed") !== seed) {
      localStorage.setItem("khuumba-seed", seed);
      localStorage.setItem("khuumba-obras", JSON.stringify(obras));
      localStorage.removeItem("khuumba-user");
      setLista(obras);
      setUser(null);
      return;
    }
    const saved = dbGet<Obra[]>("khuumba-obras", obras);
    setLista(Array.isArray(saved) && saved.length ? saved : obras);
    const savedUser = dbGet<User | null>("khuumba-user", null);
    setUser(savedUser?.nome ? savedUser : null);
  }, []);
  useEffect(() => {
    if (user) localStorage.setItem("khuumba-user", JSON.stringify(user));
    localStorage.setItem("khuumba-obras", JSON.stringify(lista));
  }, [user, lista]);
  function login(e: React.FormEvent) {
    e.preventDefault();
    const u = users.find((x) => x.email === email && x.senha === senha);
    if (u) {
      setUser(u);
      setErro("");
    } else setErro("E-mail ou senha inválidos.");
  }
  function logout() {
    localStorage.removeItem("khuumba-user");
    setUser(null);
  }
  function reporDemo() {
    localStorage.setItem("khuumba-obras", JSON.stringify(obras));
    setLista(obras);
    setQ("");
    setTab("Painel");
  }
  function exportar() {
    const blob = new Blob(
      [
        JSON.stringify(
          { obras: lista, equipamentos, materiais, movimentos },
          null,
          2,
        ),
      ],
      { type: "application/json" },
    );
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "base-khuumba.json";
    a.click();
  }
  if (!user)
    return (
      <main className="glogin">
        <section>
          <a href="/" className="gloginlogo">
            <Image
              src="/images/brand/khuumba-logo-2026-transparent-web.png"
              alt="KHUUMBA Construções, Obras, Hidráulica e Saneamento"
              width={900}
              height={385}
              priority
            />
          </a>
          <h1>Bem-vindo</h1>
          <p>Aceda à plataforma operacional e documental da KHUUMBA.</p>
          <form onSubmit={login}>
            <label>
              E-mail
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
            </label>
            <label>
              Senha
              <input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                type="password"
              />
            </label>
            {erro && <em>{erro}</em>}
            <button>Entrar no sistema</button>
          </form>
          <button className="demoenter" onClick={() => setUser(users[0])}>
            Abrir ambiente de demonstração
          </button>
          <div className="demologin">
            <b>Projecto em desenvolvimento real</b>
            <span>
              A autenticação e os utilizadores serão migrados para uma base de
              dados segura na próxima fase.
            </span>
          </div>
        </section>
        <aside>
          <strong>Gestão integrada.</strong>
          <h2>Obras, documentos, pessoas, materiais e equipamentos.</h2>
          <p>Construindo infraestruturas, desenvolvendo comunidades.</p>
        </aside>
      </main>
    );
  const mods = [
    "Painel",
    "Obras",
    "Equipamentos",
    "Materiais",
    "Trabalhadores",
    "Movimentações",
    "Gestão Documental",
    "Relatórios",
  ];
  const filtradas = lista.filter((x) =>
    (x.nome + x.local + x.estado).toLowerCase().includes(q.toLowerCase()),
  );
  return (
    <main className="gshell">
      <aside>
        <a href="/" className="glogo">
          <Image
            src="/images/brand/khuumba-logo-2026-transparent-web.png"
            alt="KHUUMBA"
            width={900}
            height={385}
          />
        </a>
        <nav>
          {mods.map((x) => (
            <button
              className={tab === x ? "on" : ""}
              onClick={() => setTab(x)}
              key={x}
            >
              {x}
            </button>
          ))}
        </nav>
        <div className="guser">
          <b>
            {user.nome
              .split(" ")
              .map((x) => x[0])
              .slice(0, 2)}
          </b>
          <span>
            {user.nome}
            <small>{user.perfil}</small>
          </span>
          <button onClick={logout}>Sair</button>
        </div>
      </aside>
      <section className="gmain">
        <header>
          <div>
            <small>PLATAFORMA KHUUMBA · FASE DE DESENVOLVIMENTO</small>
            <h1>{tab}</h1>
          </div>
          <div className="gactions">
            <input
              placeholder="Pesquisar..."
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <button onClick={reporDemo}>Repor dados</button>
            <button onClick={exportar}>Exportar base ↓</button>
            <a href="/">Portal ↗</a>
          </div>
        </header>
        {tab === "Painel" && <Painel lista={lista} />}{" "}
        {tab === "Obras" && <Obras lista={filtradas} />}{" "}
        {tab === "Equipamentos" && (
          <Tabela
            title="Inventário de equipamentos"
            headers={["Código", "Equipamento", "Tipo", "Afectação", "Estado"]}
            rows={equipamentos}
          />
        )}{" "}
        {tab === "Materiais" && (
          <Tabela
            title="Stock e materiais"
            headers={["Código", "Material", "Unidade", "Quantidade", "Local"]}
            rows={materiais}
          />
        )}{" "}
        {tab === "Trabalhadores" && <Trabalhadores />}{" "}
        {tab === "Movimentações" && (
          <Tabela
            title="Movimentações operacionais"
            headers={["Data", "Recurso", "Origem / Destino", "Motivo"]}
            rows={movimentos}
          />
        )}{" "}
        {tab === "Gestão Documental" && <GestaoDocumental />}{" "}
        {tab === "Relatórios" && (
          <Relatorios lista={lista} exportar={exportar} />
        )}
      </section>
    </main>
  );
}
function Painel({ lista }: { lista: Obra[] }) {
  const activos = lista.filter((x) => x.progresso < 100),
    media = Math.round(
      activos.reduce((a, b) => a + b.progresso, 0) / activos.length,
    ),
    trab = lista.reduce((a, b) => a + b.trabalhadores, 0);
  return (
    <>
      <div className="gnote">
        <b>Base demonstrativa operacional</b> — cenários de obras, recursos e
        movimentações preparados para validação.
      </div>
      <div className="gkpis">
        <article>
          <small>OBRAS ACTIVAS</small>
          <strong>{activos.length}</strong>
          <span>2 concluídas</span>
        </article>
        <article>
          <small>PROGRESSO MÉDIO</small>
          <strong>{media}%</strong>
          <span>Obras em curso</span>
        </article>
        <article>
          <small>TRABALHADORES</small>
          <strong>{trab}</strong>
          <span>Afectos às obras activas</span>
        </article>
        <article>
          <small>EQUIPAMENTOS</small>
          <strong>{equipamentos.length}</strong>
          <span>7 em operação/missão</span>
        </article>
      </div>
      <Obras lista={lista} />
      <div className="gsummary">
        <article>
          <h3>Estado das obras</h3>
          {[
            ["Concluídas", 2],
            ["Em execução", 2],
            ["Mobilização", 3],
          ].map((x) => (
            <p key={String(x[0])}>
              <span>{x[0]}</span>
              <b>{x[1]}</b>
            </p>
          ))}
        </article>
        <article>
          <h3>Recursos em campo</h3>
          <p>
            <span>Camiões e viaturas</span>
            <b>5</b>
          </p>
          <p>
            <span>Máquinas e equipamentos</span>
            <b>4</b>
          </p>
          <p>
            <span>Materiais registados</span>
            <b>{materiais.length}</b>
          </p>
        </article>
        <article>
          <h3>Alertas operacionais</h3>
          <p>
            <span>Matola Gare próxima da conclusão</span>
            <b>90%</b>
          </p>
          <p>
            <span>FIPAS em mobilização</span>
            <b>3</b>
          </p>
          <p>
            <span>Equipamento disponível</span>
            <b>2</b>
          </p>
        </article>
      </div>
    </>
  );
}
function Obras({ lista }: { lista: Obra[] }) {
  return (
    <div className="gcards">
      {lista.map((x) => (
        <article key={x.id}>
          <header>
            <span>{x.id}</span>
            <em>{x.estado}</em>
          </header>
          <h3>{x.nome}</h3>
          <p>{x.local}</p>
          <div className="bigprogress">
            <i style={{ width: x.progresso + "%" }} />
          </div>
          <strong>{x.progresso}% executado</strong>
          <dl>
            <div>
              <dt>Responsável</dt>
              <dd>{x.responsavel}</dd>
            </div>
            <div>
              <dt>Trabalhadores</dt>
              <dd>{x.trabalhadores}</dd>
            </div>
            <div>
              <dt>Equipamentos</dt>
              <dd>{x.equipamentos.length}</dd>
            </div>
          </dl>
        </article>
      ))}
    </div>
  );
}
function Tabela({
  title,
  headers,
  rows,
}: {
  title: string;
  headers: string[];
  rows: (string | number)[][];
}) {
  return (
    <div className="gtable">
      <div>
        <h2>{title}</h2>
        <span>{rows.length} registos</span>
      </div>
      <table>
        <thead>
          <tr>
            {headers.map((x) => (
              <th key={x}>{x}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              {r.map((x, j) => (
                <td key={j}>{x}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
function Trabalhadores() {
  const rows = [
    ["TR-001", "Paulo Matavele", "Encarregado", "Mudissa", "Em campo"],
    [
      "TR-002",
      "Ernesto Mucavele",
      "Operador de máquina",
      "Mudissa",
      "Em campo",
    ],
    ["TR-003", "Ana Mondlane", "Engenheira Civil", "Matola Gare", "Em campo"],
    [
      "TR-004",
      "Carlos Muianga",
      "Técnico de Segurança",
      "Matola Gare",
      "Em campo",
    ],
    [
      "TR-005",
      "Marta Nhantumbo",
      "Coordenadora",
      "FIPAS Inhambane",
      "Em missão",
    ],
    ["TR-006", "Alberto Bila", "Coordenador", "FIPAS Gaza/Maputo", "Em missão"],
  ];
  return (
    <Tabela
      title="Trabalhadores e afectação"
      headers={["Código", "Nome", "Função", "Afectação", "Situação"]}
      rows={rows}
    />
  );
}
function GestaoDocumental() {
  const [docs, setDocs] = useState<Documento[]>(documentos),
    [show, setShow] = useState(false);
  function guardar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    setDocs((v) => [
      {
        codigo: `DOC-${String(v.length + 1).padStart(3, "0")}`,
        titulo: String(f.get("titulo")),
        categoria: String(f.get("categoria")),
        obra: String(f.get("obra")),
        versao: "v1",
        data: new Date().toLocaleDateString("pt-PT"),
        responsavel: String(f.get("responsavel")),
        estado: "Em validação",
      },
      ...v,
    ]);
    setShow(false);
  }
  return (
    <>
      <div className="gtitle">
        <div>
          <h2>Arquivo e histórico documental</h2>
          <p>
            Contratos, licenças, projectos, autos, relatórios e versões por
            obra.
          </p>
        </div>
        <button onClick={() => setShow(true)}>Novo documento</button>
      </div>
      <div className="docstats">
        <article>
          <b>{docs.length}</b>
          <span>Documentos registados</span>
        </article>
        <article>
          <b>{new Set(docs.map((x) => x.categoria)).size}</b>
          <span>Categorias</span>
        </article>
        <article>
          <b>{docs.filter((x) => x.estado === "Em validação").length}</b>
          <span>Em validação</span>
        </article>
        <article>
          <b>100%</b>
          <span>Histórico preservado</span>
        </article>
      </div>
      <Tabela
        title="Registo documental"
        headers={[
          "Código",
          "Documento",
          "Categoria",
          "Obra/Área",
          "Versão",
          "Data",
          "Responsável",
          "Estado",
        ]}
        rows={docs.map((x) => [
          x.codigo,
          x.titulo,
          x.categoria,
          x.obra,
          x.versao,
          x.data,
          x.responsavel,
          x.estado,
        ])}
      />
      {show && (
        <div className="gmodal">
          <form className="gform" onSubmit={guardar}>
            <button type="button" className="gx" onClick={() => setShow(false)}>
              ×
            </button>
            <small>GESTÃO DOCUMENTAL</small>
            <h2>Registar documento</h2>
            <label>
              Título do documento
              <input name="titulo" required />
            </label>
            <div className="gfields">
              <label>
                Categoria
                <select name="categoria">
                  <option>Contratos</option>
                  <option>Licenças</option>
                  <option>Projectos técnicos</option>
                  <option>Autos e medições</option>
                  <option>Relatórios</option>
                  <option>Higiene e segurança</option>
                  <option>Recursos humanos</option>
                </select>
              </label>
              <label>
                Obra ou área
                <input name="obra" required />
              </label>
            </div>
            <label>
              Responsável
              <input name="responsavel" required />
            </label>
            <label>
              Ficheiro
              <input
                name="ficheiro"
                type="file"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.png"
              />
            </label>
            <button className="gsave" type="submit">
              Guardar documento
            </button>
          </form>
        </div>
      )}
    </>
  );
}
function Relatorios({
  lista,
  exportar,
}: {
  lista: Obra[];
  exportar: () => void;
}) {
  return (
    <div className="greports">
      <h2>Centro de relatórios</h2>
      <p>Gere informação consolidada para acompanhamento e decisão.</p>
      <div>
        {[
          "Ponto de situação das obras",
          "Movimentação de trabalhadores",
          "Utilização de equipamentos",
          "Stock e consumo de materiais",
          "Obras concluídas",
          "Base completa de gestão",
        ].map((x, i) => (
          <article key={x}>
            <b>{String(i + 1).padStart(2, "0")}</b>
            <span>{x}</span>
            <button onClick={exportar}>Gerar ↓</button>
          </article>
        ))}
      </div>
    </div>
  );
}
