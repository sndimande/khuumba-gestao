# Portal de Gestão KHUUMBA — Especificação funcional

O portal publicado implementa uma demonstração de gestão de obras com persistência local no navegador.

## Perfis e permissões

| Módulo | CEO | Administrador | Gestor de Obras | Logística | Fiscal |
|---|---:|---:|---:|---:|---:|
| Painel e obras | ✓ | ✓ | ✓ | ✓ | ✓ |
| Cadastrar obra | ✓ | ✓ | ✓ | — | — |
| Equipamentos, materiais e movimentos | ✓ | ✓ | ✓ | ✓ | ✓ |
| Cadastro de utilizadores e níveis | ✓ | ✓ | — | — | — |
| Orçamentos, despesas e valor gasto | ✓ | ✓ | — | — | — |
| Relatórios financeiros | ✓ | ✓ | — | — | — |

## Funcionalidades demonstradas

- Login por e-mail e senha.
- Sessão e dados simulados guardados no navegador.
- Cadastro de utilizadores com nível de acesso e senha protegida por hash demonstrativo.
- Cadastro de novas obras.
- Registo de despesas por obra.
- Cálculo automático do valor gasto, saldo e percentagem de execução financeira.
- Restrição visual dos valores ao CEO e Administrador.
- Reposição da base de demonstração.
- Obras, trabalhadores, materiais, equipamentos e movimentações.

## Segurança

Este repositório é público. Por isso, credenciais e valores financeiros por obra não devem ser tratados como fonte privada ou base oficial. A versão de produção deverá usar autenticação no servidor, base de dados privada, controlo de permissões no backend, auditoria e variáveis de ambiente.

O código publicado no repositório deve usar dados genéricos ou placeholders. Os valores apresentados no portal são estritamente fictícios e servem apenas para validação da interface.
