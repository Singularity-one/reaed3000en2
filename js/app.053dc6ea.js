(function(){"use strict";var i={8760:function(i,e,d){var n=d(5130),o=d(6768);const t={id:"app"};function p(i,e,d,n,p,r){const a=(0,o.g2)("RouterLink"),s=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",t,[e[6]||(e[6]=(0,o.Lk)("h1",null,"My Vue App",-1)),(0,o.bF)(a,{to:"/DayEn15",onClick:e[0]||(e[0]=i=>r.transPage("/DayEn15"))},{default:(0,o.k6)((()=>e[3]||(e[3]=[(0,o.eW)("DayEn15")]))),_:1}),(0,o.bF)(a,{to:"/excelUpdata",onClick:e[1]||(e[1]=i=>r.transPage("/excelUpdata"))},{default:(0,o.k6)((()=>e[4]||(e[4]=[(0,o.eW)("ExcelUpdata")]))),_:1}),(0,o.bF)(a,{to:"/excelView",onClick:e[2]||(e[2]=i=>r.transPage("/excelView"))},{default:(0,o.k6)((()=>e[5]||(e[5]=[(0,o.eW)("ExcelView")]))),_:1}),(0,o.bF)(s)])}d(4114);var r={name:"App",components:{},methods:{transPage(i){console.log("item",i),this.$router.push(`${i}`)}}},a=d(1241);const s=(0,a.A)(r,[["render",p]]);var l=s,f=d(1387);function w(i,e,d,n,t,p){const r=(0,o.g2)("RouterLink");return(0,o.uX)(),(0,o.CE)("div",null,[(0,o.Lk)("button",{onClick:e[0]||(e[0]=i=>p.transPage("/"))},"回首頁"),(0,o.bF)(r,{to:"/dayOne",onClick:e[1]||(e[1]=i=>p.transPage("/dayOne"))},{default:(0,o.k6)((()=>e[2]||(e[2]=[(0,o.eW)("1")]))),_:1})])}var F={name:"DayEn15",methods:{transPage(i){this.$router.push(`${i}`)}}};const c=(0,a.A)(F,[["render",w]]);var u=c,h=d(4232);const v={id:"app",class:"app-container"},m={class:"flashcard-container"},y=["onClick"],g={key:0,class:"front"},b={key:1,class:"back"};function k(i,e,d,n,t,p){return(0,o.uX)(),(0,o.CE)("div",v,[e[2]||(e[2]=(0,o.Lk)("h1",null,"One",-1)),(0,o.Lk)("button",{onClick:e[0]||(e[0]=i=>p.transPage("/"))},"回上一頁"),(0,o.Lk)("button",{onClick:e[1]||(e[1]=(...i)=>p.removeFlippedCards&&p.removeFlippedCards(...i))},"Remove Flipped Cards"),(0,o.Lk)("div",m,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(t.flashcards,((i,e)=>((0,o.uX)(),(0,o.CE)("div",{key:e,class:(0,h.C4)(["flashcard",{flipped:i.isFlipped}]),onClick:i=>p.flipCard(e)},[i.isFlipped?((0,o.uX)(),(0,o.CE)("div",b,(0,h.v_)(i.definition),1)):((0,o.uX)(),(0,o.CE)("div",g,(0,h.v_)(i.word),1))],10,y)))),128))])])}d(8992),d(4520);var E={name:"CardTest",data(){return{flashcards:[{word:"abandon",definition:"放棄",isFlipped:!1},{word:"ability",definition:"能力",isFlipped:!1},{word:"able",definition:"有能力的",isFlipped:!1},{word:"about",definition:"關於",isFlipped:!1},{word:"above",definition:"多於",isFlipped:!1},{word:"abroad",definition:"國外",isFlipped:!1},{word:"absence",definition:"缺席",isFlipped:!1},{word:"absolute",definition:"絕對",isFlipped:!1},{word:"absolutely",definition:"絕對地",isFlipped:!1},{word:"absorb",definition:"吸收",isFlipped:!1},{word:"abuse",definition:"虐待",isFlipped:!1},{word:"academic",definition:"學術的",isFlipped:!1},{word:"accept",definition:"接受",isFlipped:!1},{word:"acceptable",definition:"可以接受",isFlipped:!1},{word:"access",definition:"使用權",isFlipped:!1},{word:"accident",definition:"事故",isFlipped:!1},{word:"accommodation",definition:"住宿",isFlipped:!1},{word:"accompany",definition:"陪伴",isFlipped:!1},{word:"according to",definition:"根據",isFlipped:!1},{word:"account",definition:"帳戶",isFlipped:!1},{word:"accurate",definition:"準確的",isFlipped:!1},{word:"accuse",definition:"控",isFlipped:!1},{word:"achieve",definition:"達到",isFlipped:!1},{word:"achievement",definition:"成就",isFlipped:!1},{word:"acid",definition:"酸",isFlipped:!1},{word:"acknowledge",definition:"承認",isFlipped:!1},{word:"acquire",definition:"獲得",isFlipped:!1},{word:"across",definition:"穿過",isFlipped:!1},{word:"act",definition:"行為",isFlipped:!1},{word:"action",definition:"行動",isFlipped:!1},{word:"active",definition:"積極的",isFlipped:!1},{word:"activist",definition:"活動家",isFlipped:!1},{word:"activity",definition:"活動",isFlipped:!1},{word:"actor",definition:"演員",isFlipped:!1},{word:"actual",definition:"實際的",isFlipped:!1},{word:"actually",definition:"實際上",isFlipped:!1},{word:"adapt",definition:"適應",isFlipped:!1},{word:"add",definition:"添加",isFlipped:!1},{word:"addition",definition:"添加",isFlipped:!1},{word:"additional",definition:"額外的",isFlipped:!1},{word:"address",definition:"地址",isFlipped:!1},{word:"adequate",definition:"足夠的",isFlipped:!1},{word:"adjust",definition:"調整",isFlipped:!1},{word:"administration",definition:"行政",isFlipped:!1},{word:"administrative",definition:"行政",isFlipped:!1},{word:"admire",definition:"欽佩",isFlipped:!1},{word:"admission",definition:"入場",isFlipped:!1},{word:"admit",definition:"承認",isFlipped:!1},{word:"adopt",definition:"採納",isFlipped:!1},{word:"adult",definition:"成人",isFlipped:!1},{word:"advance",definition:"進步",isFlipped:!1},{word:"advanced",definition:"先進的",isFlipped:!1},{word:"advantage",definition:"優勢",isFlipped:!1},{word:"advert",definition:"廣告",isFlipped:!1},{word:"advertise",definition:"廣告",isFlipped:!1},{word:"advertisement",definition:"廣告",isFlipped:!1},{word:"advertising",definition:"廣告",isFlipped:!1},{word:"advice",definition:"建議",isFlipped:!1},{word:"adviser",definition:"顧問",isFlipped:!1},{word:"affair",definition:"事務",isFlipped:!1},{word:"affect",definition:"影響",isFlipped:!1},{word:"afford",definition:"買得起",isFlipped:!1},{word:"afraid",definition:"害怕的",isFlipped:!1},{word:"after",definition:"後",isFlipped:!1},{word:"afternoon",definition:"下午",isFlipped:!1},{word:"afterwards",definition:"然後",isFlipped:!1},{word:"again",definition:"再次",isFlipped:!1},{word:"against",definition:"反對",isFlipped:!1},{word:"age",definition:"年齡",isFlipped:!1},{word:"aged",definition:"年齡",isFlipped:!1},{word:"agency",definition:"機構",isFlipped:!1},{word:"agent",definition:"代理人",isFlipped:!1},{word:"aggressive",definition:"挑釁的",isFlipped:!1},{word:"ago",definition:"前",isFlipped:!1},{word:"agree",definition:"同意",isFlipped:!1},{word:"agreement",definition:"協定",isFlipped:!1},{word:"agriculture",definition:"農業",isFlipped:!1},{word:"ahead",definition:"前方",isFlipped:!1},{word:"aid",definition:"援助",isFlipped:!1},{word:"aim",definition:"目的",isFlipped:!1},{word:"air",definition:"空氣",isFlipped:!1},{word:"aircraft",definition:"飛機",isFlipped:!1},{word:"airline",definition:"航空公司",isFlipped:!1},{word:"airport",definition:"飛機場",isFlipped:!1},{word:"alarm",definition:"警報",isFlipped:!1},{word:"album",definition:"專輯",isFlipped:!1},{word:"alcohol",definition:"酒精",isFlipped:!1},{word:"alive",definition:"活",isFlipped:!1},{word:"all",definition:"全部",isFlipped:!1},{word:"allow",definition:"允許",isFlipped:!1},{word:"allowance",definition:"津貼",isFlipped:!1},{word:"all right",definition:"好的",isFlipped:!1},{word:"almost",definition:"幾乎",isFlipped:!1},{word:"alone",definition:"獨自的",isFlipped:!1},{word:"along",definition:"沿著",isFlipped:!1},{word:"alongside",definition:"同時",isFlipped:!1},{word:"already",definition:"已經",isFlipped:!1},{word:"also",definition:"也",isFlipped:!1},{word:"alter",definition:"改變",isFlipped:!1},{word:"alternative",definition:"選擇",isFlipped:!1},{word:"although",definition:"雖然",isFlipped:!1},{word:"altogether",definition:"共",isFlipped:!1},{word:"always",definition:"總是",isFlipped:!1},{word:"amazing",definition:"驚人的",isFlipped:!1},{word:"ambition",definition:"志向",isFlipped:!1},{word:"ambulance",definition:"救護車",isFlipped:!1},{word:"among",definition:"之中",isFlipped:!1},{word:"amount",definition:"數量",isFlipped:!1},{word:"analyse",definition:"分析",isFlipped:!1},{word:"analysis",definition:"分析",isFlipped:!1},{word:"analyst",definition:"分析師",isFlipped:!1},{word:"ancient",definition:"古老的",isFlipped:!1},{word:"and",definition:"和",isFlipped:!1},{word:"anger",definition:"憤怒",isFlipped:!1},{word:"angle",definition:"角度",isFlipped:!1},{word:"angry",definition:"生氣的",isFlipped:!1},{word:"animal",definition:"動物",isFlipped:!1},{word:"announce",definition:"宣布",isFlipped:!1},{word:"announcement",definition:"公告",isFlipped:!1},{word:"annoy",definition:"惹惱",isFlipped:!1},{word:"annual",definition:"年度的",isFlipped:!1},{word:"answer",definition:"回答",isFlipped:!1},{word:"anticipate",definition:"預料",isFlipped:!1},{word:"anxiety",definition:"焦慮",isFlipped:!1},{word:"anxious",definition:"焦慮的",isFlipped:!1},{word:"any",definition:"任何",isFlipped:!1},{word:"anybody",definition:"任何人",isFlipped:!1},{word:"anyhow",definition:"無論如何",isFlipped:!1},{word:"anyone",definition:"任何人",isFlipped:!1},{word:"anything",definition:"任何事物",isFlipped:!1},{word:"anyway",definition:"反正",isFlipped:!1},{word:"anywhere",definition:"任何地方",isFlipped:!1},{word:"apart",definition:"分開",isFlipped:!1},{word:"apartment",definition:"公寓",isFlipped:!1},{word:"apologize",definition:"道歉",isFlipped:!1},{word:"apology",definition:"道歉",isFlipped:!1},{word:"apparent",definition:"顯然",isFlipped:!1},{word:"apparently",definition:"顯然",isFlipped:!1},{word:"appeal",definition:"上訴",isFlipped:!1},{word:"appear",definition:"出現",isFlipped:!1},{word:"appearance",definition:"外貌",isFlipped:!1},{word:"apple",definition:"蘋果",isFlipped:!1},{word:"application",definition:"應用",isFlipped:!1},{word:"apply",definition:"申請",isFlipped:!1},{word:"appoint",definition:"委",isFlipped:!1},{word:"appointment",definition:"預約",isFlipped:!1},{word:"appreciate",definition:"欣賞",isFlipped:!1},{word:"approach",definition:"方法",isFlipped:!1},{word:"appropriate",definition:"合適的",isFlipped:!1},{word:"approval",definition:"贊同",isFlipped:!1},{word:"approve",definition:"批准",isFlipped:!1},{word:"approximate",definition:"近似",isFlipped:!1},{word:"architect",definition:"建築師",isFlipped:!1},{word:"architecture",definition:"建築學",isFlipped:!1},{word:"area",definition:"區域",isFlipped:!1},{word:"argue",definition:"爭論",isFlipped:!1},{word:"argument",definition:"爭論",isFlipped:!1},{word:"arise",definition:"出現",isFlipped:!1},{word:"arm",definition:"手臂",isFlipped:!1},{word:"armed",definition:"武裝",isFlipped:!1},{word:"army",definition:"軍隊",isFlipped:!1},{word:"around",definition:"大約",isFlipped:!1},{word:"arrange",definition:"安排",isFlipped:!1},{word:"arrangement",definition:"安排",isFlipped:!1},{word:"arrest",definition:"逮捕",isFlipped:!1},{word:"arrival",definition:"到達",isFlipped:!1},{word:"arrive",definition:"到達",isFlipped:!1},{word:"art",definition:"藝術",isFlipped:!1},{word:"article",definition:"文章",isFlipped:!1},{word:"artificial",definition:"人造的",isFlipped:!1},{word:"artist",definition:"藝術家",isFlipped:!1},{word:"as",definition:"作為",isFlipped:!1},{word:"ashamed",definition:"羞愧",isFlipped:!1},{word:"aside",definition:"除此之外",isFlipped:!1},{word:"ask",definition:"問",isFlipped:!1},{word:"asleep",definition:"睡著了",isFlipped:!1},{word:"aspect",definition:"方面",isFlipped:!1},{word:"assess",definition:"評估",isFlipped:!1},{word:"assessment",definition:"評估",isFlipped:!1},{word:"assignment",definition:"任務",isFlipped:!1},{word:"assist",definition:"協助",isFlipped:!1},{word:"assistance",definition:"協助",isFlipped:!1},{word:"assistant",definition:"助手",isFlipped:!1},{word:"associate",definition:"聯繫",isFlipped:!1},{word:"association",definition:"協會",isFlipped:!1},{word:"assume",definition:"認為",isFlipped:!1},{word:"assumption",definition:"假設",isFlipped:!1},{word:"assure",definition:"保證",isFlipped:!1},{word:"at",definition:"在",isFlipped:!1},{word:"atmosphere",definition:"氣氛",isFlipped:!1},{word:"attach",definition:"附",isFlipped:!1},{word:"attack",definition:"攻擊",isFlipped:!1},{word:"attempt",definition:"試圖",isFlipped:!1},{word:"attend",definition:"出席",isFlipped:!1},{word:"attention",definition:"注意力",isFlipped:!1},{word:"attitude",definition:"態度",isFlipped:!1},{word:"attorney",definition:"律師",isFlipped:!1},{word:"attract",definition:"吸引",isFlipped:!1}]}},methods:{flipCard(i){this.flashcards[i].isFlipped=!this.flashcards[i].isFlipped},removeFlippedCards(){this.flashcards=this.flashcards.filter((i=>!i.isFlipped))},transPage(i){this.$router.push(`${i}`)}}};const C=(0,a.A)(E,[["render",k]]);var x=C;function X(i,e,d,n,t,p){return(0,o.uX)(),(0,o.CE)("div",null,[e[1]||(e[1]=(0,o.Lk)("h2",null,"上傳 Excel 文件",-1)),(0,o.Lk)("input",{type:"file",onChange:e[0]||(e[0]=(...i)=>n.handleFile&&n.handleFile(...i))},null,32)])}d(6573),d(8100),d(7936),d(7467),d(4732),d(9577);var L=d(3230),O=d(657);const D=(0,O.nY)("excel",{state:()=>({headers:[],tableData:[]}),actions:{setExcelData(i,e){this.headers=i,this.tableData=e}}});var _={name:"UploadExcel",setup(){const i=D(),e=e=>{const d=e.target.files[0];if(!d)return;const n=new FileReader;n.onload=e=>{const d=new Uint8Array(e.target.result),n=L.LF(d,{type:"array"}),o=n.SheetNames[0],t=n.Sheets[o],p=L.Wp.sheet_to_json(t,{header:1});i.setExcelData(p[0],p.slice(1))},n.readAsArrayBuffer(d)};return{handleFile:e}}};const A=(0,a.A)(_,[["render",X]]);var P=A;const U={key:0},j={key:1};function V(i,e,d,n,t,p){return(0,o.uX)(),(0,o.CE)("div",null,[e[0]||(e[0]=(0,o.Lk)("h2",null,"Excel 數據展示",-1)),n.tableData.length?((0,o.uX)(),(0,o.CE)("table",U,[(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.headers,((i,e)=>((0,o.uX)(),(0,o.CE)("th",{key:e},(0,h.v_)(i),1)))),128))])]),(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(n.tableData,((i,e)=>((0,o.uX)(),(0,o.CE)("tr",{key:e},[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i,((i,e)=>((0,o.uX)(),(0,o.CE)("td",{key:e},(0,h.v_)(i),1)))),128))])))),128))])])):((0,o.uX)(),(0,o.CE)("p",j,"目前沒有數據"))])}var $={name:"ExcelView",setup(){const i=D();return{headers:i.headers,tableData:i.tableData}}};const W=(0,a.A)($,[["render",V]]);var I=W;const K=[{path:"/DayEn15",name:"DayEn15",component:u},{path:"/dayOne",name:"dayOne",component:x},{path:"/excelUpdata",name:"ExcelUpdata",component:P},{path:"/excelUpdata",name:"ExcelUpdata",component:P},{path:"/excelView",name:"ExcelView",component:I}],R=(0,f.aE)({history:(0,f.LA)(),routes:K});var T=R;const q=(0,n.Ef)(l),z=(0,O.Ey)();q.use(z),q.use(T),q.mount("#app")}},e={};function d(n){var o=e[n];if(void 0!==o)return o.exports;var t=e[n]={exports:{}};return i[n].call(t.exports,t,t.exports,d),t.exports}d.m=i,function(){var i=[];d.O=function(e,n,o,t){if(!n){var p=1/0;for(l=0;l<i.length;l++){n=i[l][0],o=i[l][1],t=i[l][2];for(var r=!0,a=0;a<n.length;a++)(!1&t||p>=t)&&Object.keys(d.O).every((function(i){return d.O[i](n[a])}))?n.splice(a--,1):(r=!1,t<p&&(p=t));if(r){i.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}t=t||0;for(var l=i.length;l>0&&i[l-1][2]>t;l--)i[l]=i[l-1];i[l]=[n,o,t]}}(),function(){d.n=function(i){var e=i&&i.__esModule?function(){return i["default"]}:function(){return i};return d.d(e,{a:e}),e}}(),function(){d.d=function(i,e){for(var n in e)d.o(e,n)&&!d.o(i,n)&&Object.defineProperty(i,n,{enumerable:!0,get:e[n]})}}(),function(){d.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"===typeof window)return window}}()}(),function(){d.o=function(i,e){return Object.prototype.hasOwnProperty.call(i,e)}}(),function(){var i={524:0};d.O.j=function(e){return 0===i[e]};var e=function(e,n){var o,t,p=n[0],r=n[1],a=n[2],s=0;if(p.some((function(e){return 0!==i[e]}))){for(o in r)d.o(r,o)&&(d.m[o]=r[o]);if(a)var l=a(d)}for(e&&e(n);s<p.length;s++)t=p[s],d.o(i,t)&&i[t]&&i[t][0](),i[t]=0;return d.O(l)},n=self["webpackChunkreaed3000en"]=self["webpackChunkreaed3000en"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=d.O(void 0,[504],(function(){return d(8760)}));n=d.O(n)})();
//# sourceMappingURL=app.053dc6ea.js.map