"use client";
import { useEffect, useMemo, useState } from "react";
type Item = { id: string; module: string; data: Record<string, string | number>; updatedAt: string };
type Key = "obras"|"trabalhadores"|"equipamentos"|"materiais"|"movimentacoes"|"documentos"|"impedimentos"|"utilizadores";
const modules: Record<Key,{title:string;singular:string;fields:string[]}> = {
  obras:{title:"Obras",singular:"obra",fields:["nome","local","provincia","estado","progresso","responsavel"]},
  trabalhadores:{title:"Recursos Humanos",singular:"trabalhador",fields:["nome","categoria","funcao","provincia","contacto","estado"]},
  equipamentos:{title:"Equipamentos",singular:"equipamento",fields:["nome","tipo","matricula","local","estado"]},
  materiais:{title:"Materiais",singular:"material",fields:["nome","unidade","quantidade","local","estado"]},
  movimentacoes:{title:"Movimentações",singular:"movimentação",fields:["data","recurso","origem","destino","motivo"]},
  documentos:{title:"Gestão Documental",singular:"documento",fields:["titulo","categoria","obra","versao","estado"]},
  impedimentos:{title:"Ocorrências Disciplinares",singular:"ocorrência",fields:["trabalhador","tipo","data","descricao","estado"]},
  utilizadores:{title:"Utilizadores",singular:"utilizador",fields:["nome","email","perfil","estado"]},
};
export default function GestaoClient(){
 const [active,setActive]=useState<Key>("obras"),[items,setItems]=useState<Item[]>([]),[loading,setLoading]=useState(true),[message,setMessage]=useState("");
 const current=modules[active],visible=useMemo(()=>items.filter(i=>i.module===active),[items,active]);
 async function load(){setLoading(true);const r=await fetch("/api/gestao",{cache:"no-store"});if(r.ok)setItems(await r.json());else setMessage(r.status===403?"A sua conta ainda não foi autorizada pelo Administrador.":"Não foi possível carregar os dados.");setLoading(false)}
 useEffect(()=>{load()},[]);
 async function add(){const data:Record<string,string>={};for(const f of current.fields){const v=window.prompt(`${f[0].toUpperCase()}${f.slice(1)}:`);if(v===null)return;data[f]=v}const r=await fetch("/api/gestao",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({module:active,data})});if(r.ok){setMessage("Registo guardado com sucesso.");await load()}else setMessage("Não foi possível guardar. Verifique a sua permissão.")}
 async function edit(item:Item){const data={...item.data};for(const f of current.fields){const v=window.prompt(`${f[0].toUpperCase()}${f.slice(1)}:`,String(data[f]??""));if(v===null)return;data[f]=v}const r=await fetch(`/api/gestao/${item.id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({module:active,data})});if(r.ok){setMessage("Registo actualizado.");await load()}else setMessage("Não foi possível actualizar.")}
 async function remove(item:Item){if(!window.confirm("Confirma que pretende apagar este registo?"))return;const r=await fetch(`/api/gestao/${item.id}`,{method:"DELETE"});if(r.ok){setMessage("Registo apagado.");await load()}else setMessage("Não foi possível apagar.")}
 return <div className="management-layout"><aside className="management-sidebar"><p className="eyebrow">Áreas de gestão</p>{Object.entries(modules).map(([k,v])=><button className={active===k?"active":""} key={k} onClick={()=>setActive(k as Key)}>{v.title}</button>)}</aside><section className="management-content"><div className="management-heading"><div><p className="eyebrow">Base central KHUUMBA</p><h1>{current.title}</h1></div><button className="primary-action" onClick={add}>+ Novo(a) {current.singular}</button></div>{active==="trabalhadores"&&<p className="section-note">Categorias: Quadro, Consultor e Eventual/Temporário.</p>}{active==="impedimentos"&&<p className="section-note warning">Área restrita. Registe apenas factos documentados, com decisão autorizada e direito de resposta.</p>}{message&&<p className="management-message">{message}</p>}<div className="data-card">{loading?<p>A carregar…</p>:visible.length===0?<div className="empty-state"><strong>Ainda não existem registos.</strong><span>Use o botão acima para adicionar o primeiro.</span></div>:<div className="responsive-table"><table><thead><tr>{current.fields.map(f=><th key={f}>{f}</th>)}<th>Acções</th></tr></thead><tbody>{visible.map(item=><tr key={item.id}>{current.fields.map(f=><td key={f}>{String(item.data[f]??"—")}</td>)}<td className="row-actions"><button onClick={()=>edit(item)}>Editar</button><button className="danger" onClick={()=>remove(item)}>Apagar</button></td></tr>)}</tbody></table></div>}</div></section></div>
}
