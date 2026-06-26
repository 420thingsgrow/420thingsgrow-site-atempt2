import { format } from "date-fns";
import { Video } from "./types";
export function slugify(input:string){return input.toLowerCase().trim().replace(/['"]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
export function formatDate(date:string){return format(new Date(date),"MMM d, yyyy")}
export function extractTags(title:string, description:string):string[]{
 const hay=(title+" "+description).toLowerCase();
 const rules:Record<string,RegExp[]>={ "ac-infinity":[/ac infinity/,/controller/,/inline fan/], "humidifier":[/humidifier/,/humidity/], "controller":[/controller/,/69 pro/], "grow-tent":[/grow tent/,/tent/], "fan":[/fan/,/inline fan/], "light":[/light/,/led/], "review":[/review/,/unboxing/,/test/], "how-to":[/how to/,/guide/,/setup/]};
 return Array.from(new Set(Object.entries(rules).filter(([,arr])=>arr.some(r=>r.test(hay))).map(([k])=>k)));
}
export function getYears(videos:Video[]){return Array.from(new Set(videos.map(v=>String(v.year)))).sort((a,b)=>Number(b)-Number(a))}
export function getAllTags(videos:Video[]){return Array.from(new Set(videos.flatMap(v=>v.tags))).sort()}
export function filterVideos(videos:Video[], {query,year,tag}:{query?:string;year?:string;tag?:string}) {
 return videos.filter(video=>{
  const q=(query||"").trim().toLowerCase();
  const mq=!q||video.title.toLowerCase().includes(q)||video.description.toLowerCase().includes(q)||video.aiSummary.toLowerCase().includes(q)||video.tags.some(t=>t.toLowerCase().includes(q));
  return mq && (!year||String(video.year)===year) && (!tag||video.tags.includes(tag));
 })
}
