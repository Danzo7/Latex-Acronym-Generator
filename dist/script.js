function toAcr(string){
  if(string.length<=0) return;
 let words=string.split(" ");
  words=words.map(w=>w.charAt(0).toUpperCase()+w.slice(1))
  p1=string.split(" ").map(s=>s[0]?.toLowerCase()).join("")
  p2=p1.toUpperCase()
  return `\\newacronym{${p1}}{${p2}}{${words.join(" ")}}`
}
let input=document.querySelector("input")
let res=document.querySelector("#result")
input.oninput=(e=>{ res.innerText=toAcr(e.target.value)||"Nothing yet..."}
              );