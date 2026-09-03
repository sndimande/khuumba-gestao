import Image from "next/image";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";
export default function Login(){
 return <main className="login-shell"><section className="login-panel"><Image src="/images/brand/khuumba-logo-2026-transparent-web.png" alt="KHUUMBA" width={270} height={100} priority/><p className="eyebrow">Portal interno</p><h1>Gestão KHUUMBA</h1><p>Acesso reservado aos trabalhadores autorizados da empresa.</p><SignIn routing="path" path="/sign-in"/><Link className="back-link" href="/">← Voltar ao website</Link></section><aside className="login-brand"><strong>Construindo infraestruturas,</strong><span>desenvolvendo comunidades.</span></aside></main>
}
