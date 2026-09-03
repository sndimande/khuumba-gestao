import { neon } from "@neondatabase/serverless";
export function sql(){if(!process.env.DATABASE_URL)throw new Error("DATABASE_URL não configurada");return neon(process.env.DATABASE_URL)}
let ready:Promise<void>|null=null;
export function ensureSchema(){if(!ready)ready=(async()=>{
 const db=sql();
 await db`CREATE TABLE IF NOT EXISTS app_users (email text PRIMARY KEY, role text NOT NULL DEFAULT 'trabalhador', status text NOT NULL DEFAULT 'activo', created_at timestamptz NOT NULL DEFAULT now())`;
 await db`CREATE TABLE IF NOT EXISTS management_records (id text PRIMARY KEY, module text NOT NULL, data jsonb NOT NULL DEFAULT '{}'::jsonb, created_by text NOT NULL, created_at timestamptz NOT NULL DEFAULT now(), updated_at timestamptz NOT NULL DEFAULT now())`;
 await db`CREATE INDEX IF NOT EXISTS management_records_module_idx ON management_records(module)`;
 await db`INSERT INTO management_records(id,module,data,created_by) VALUES
 ('demo-mudissa','obras','{"nome":"Portagem de Mudissa","local":"Mudissa","provincia":"Maputo","estado":"Em execução","progresso":"10","responsavel":"Gestor de Obras","trabalhadores":"18"}'::jsonb,'sistema'),
 ('demo-chiango','obras','{"nome":"Vala do Chiango","local":"Chiango","provincia":"Maputo Cidade","estado":"Concluída","progresso":"100","responsavel":"Gestor de Obras","trabalhadores":"0"}'::jsonb,'sistema'),
 ('demo-kumbeza','obras','{"nome":"Portagem de Kumbeza","local":"Kumbeza","provincia":"Maputo","estado":"Concluída","progresso":"100","responsavel":"Gestor de Obras","trabalhadores":"0"}'::jsonb,'sistema'),
 ('demo-matola','obras','{"nome":"Portagem de Matola Gare","local":"Matola Gare","provincia":"Maputo","estado":"Em execução","progresso":"90","responsavel":"Gestor de Obras","trabalhadores":"26"}'::jsonb,'sistema'),
 ('demo-fipaas-gaza','obras','{"nome":"FIPAAS Gaza","local":"Gaza","provincia":"Gaza","estado":"Mobilização","progresso":"5","responsavel":"Gestor de Obras","trabalhadores":"12"}'::jsonb,'sistema'),
 ('demo-fipaas-inhambane','obras','{"nome":"FIPAAS Inhambane","local":"Inhambane","provincia":"Inhambane","estado":"Mobilização","progresso":"5","responsavel":"Gestor de Obras","trabalhadores":"10"}'::jsonb,'sistema'),
 ('demo-fipaas-maputo','obras','{"nome":"FIPAAS Maputo Província","local":"Maputo Província","provincia":"Maputo","estado":"Mobilização","progresso":"5","responsavel":"Gestor de Obras","trabalhadores":"14"}'::jsonb,'sistema'),
 ('user-admin','utilizadores','{"nome":"Administrador","email":"Configurar na área privada","perfil":"Administrador","estado":"Activo"}'::jsonb,'sistema'),
 ('user-gestor','utilizadores','{"nome":"Gestor de Obras","email":"Configurar na área privada","perfil":"Gestor de Obras","estado":"Activo"}'::jsonb,'sistema'),
 ('user-financeiro','utilizadores','{"nome":"Financeiro","email":"Configurar na área privada","perfil":"Financeiro","estado":"Activo"}'::jsonb,'sistema'),
 ('user-logistica','utilizadores','{"nome":"Logística","email":"Configurar na área privada","perfil":"Logística","estado":"Activo"}'::jsonb,'sistema'),
 ('eq-001','equipamentos','{"codigo":"EQ-001","nome":"Camião Basculante 01","tipo":"Camião","afectacao":"Mudissa","estado":"Operacional"}'::jsonb,'sistema'),
 ('eq-002','equipamentos','{"codigo":"EQ-002","nome":"Pá Escavadora 01","tipo":"Máquina pesada","afectacao":"Mudissa","estado":"Operacional"}'::jsonb,'sistema'),
 ('mat-001','materiais','{"codigo":"MAT-001","nome":"Cimento 42.5","unidade":"Saco","quantidade":"680","local":"Armazém Central"}'::jsonb,'sistema'),
 ('rh-001','trabalhadores','{"nome":"Trabalhador demonstrativo 01","categoria":"Quadro","funcao":"Encarregado","afectacao":"Mudissa","provincia":"Maputo","contacto":"—","estado":"Em campo"}'::jsonb,'sistema'),
 ('rh-002','trabalhadores','{"nome":"Trabalhador demonstrativo 02","categoria":"Consultor","funcao":"Engenharia Civil","afectacao":"Matola Gare","provincia":"Maputo","contacto":"—","estado":"Em campo"}'::jsonb,'sistema'),
 ('mov-001','movimentacoes','{"data":"19/07/2026","recurso":"18 trabalhadores","origem":"Sede","destino":"Mudissa","motivo":"Mobilização de equipa"}'::jsonb,'sistema'),
 ('doc-001','documentos','{"codigo":"DOC-001","titulo":"Contrato de empreitada — Mudissa","categoria":"Contratos","obra":"Portagem de Mudissa","versao":"v2","responsavel":"Administração","estado":"Aprovado"}'::jsonb,'sistema')
 ON CONFLICT(id) DO NOTHING`;
 })();return ready}
