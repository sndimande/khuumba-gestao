import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
export default function Login(){
 return <main className="login-shell login-right"><aside className="login-brand"><strong>Gestão integrada.</strong><span>Obras, documentos, pessoas, materiais e equipamentos.</span></aside><section className="login-panel"><Image src="/images/brand/khuumba-logo-2026-transparent-web.png" alt="KHUUMBA" width={270} height={100} priority/><p className="eyebrow">Portal interno</p><h1>Bem-vindo</h1><p>Aceda à plataforma operacional e documental da KHUUMBA.</p><SignIn routing="path" path="/sign-in"/><Link className="back-link" href="/">← Voltar ao website</Link></section></main>
}
