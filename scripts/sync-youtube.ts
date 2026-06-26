import fs from "node:fs/promises"; import path from "node:path"; import { fetchFullChannelCatalog } from "../lib/youtube";
async function main(){const videos=await fetchFullChannelCatalog(); const output=path.join(process.cwd(),"data","videos.json"); await fs.mkdir(path.dirname(output),{recursive:true}); await fs.writeFile(output,JSON.stringify(videos,null,2),"utf-8"); console.log(`Synced ${videos.length} videos to ${output}`)}
main().catch(err=>{console.error(err); process.exit(1);});
