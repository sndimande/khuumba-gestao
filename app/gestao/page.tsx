import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import GestaoClient from "./gestao-client";

export default function GestaoPage() {
  return (
    <main className="management-root">
        <header className="management-topbar">
          <Image src="/images/brand/khuumba-logo-2026-transparent-web.png" alt="KHUUMBA" width={205} height={74} priority />
          <div><Link href="/">Website</Link><UserButton /></div>
        </header>
        <GestaoClient />
    </main>
  );
}
