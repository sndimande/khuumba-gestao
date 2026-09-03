import { requireAccess } from "@/lib/access";
import { sql } from "@/lib/db";
export async function PUT(request:Request,ctx:{params:Promise<{id:string}>}){const u=await requireAccess(true);if(!u)return Response.json({error:"Sem permissão"},{status:403});const {id}=await ctx.params,b=await request.json();await sql()`UPDATE management_records SET module=${b.module},data=${JSON.stringify(b.data)}::jsonb,updated_at=now() WHERE id=${id}`;return Response.json({ok:true})}
export async function DELETE(_request:Request,ctx:{params:Promise<{id:string}>}){const u=await requireAccess(true);if(!u)return Response.json({error:"Sem permissão"},{status:403});const {id}=await ctx.params;await sql()`DELETE FROM management_records WHERE id=${id}`;return Response.json({ok:true})}
