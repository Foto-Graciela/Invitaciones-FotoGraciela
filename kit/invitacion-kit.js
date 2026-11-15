var ts=Object.create;var wn=Object.defineProperty;var es=Object.getOwnPropertyDescriptor;var rs=Object.getOwnPropertyNames;var ns=Object.getPrototypeOf,is=Object.prototype.hasOwnProperty;var ss=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var os=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of rs(t))!is.call(e,i)&&i!==r&&wn(e,i,{get:()=>t[i],enumerable:!(n=es(t,i))||n.enumerable});return e};var as=(e,t,r)=>(r=e!=null?ts(ns(e)):{},os(t||!e||!e.__esModule?wn(r,"default",{value:e,enumerable:!0}):r,e));var Qi=ss((Wi,Ki)=>{var zi=function(){var e=function(I,N){var T=236,m=17,y=I,u=r[N],o=null,s=0,l=null,c=[],d={},h=function(w,b){s=y*4+17,o=function(v){for(var E=new Array(v),A=0;A<v;A+=1){E[A]=new Array(v);for(var D=0;D<v;D+=1)E[A][D]=null}return E}(s),R(0,0),R(s-7,0),R(0,s-7),tt(),H(),mt(w,b),y>=7&&lt(w),l==null&&(l=Xi(y,u,c)),yt(l,b)},R=function(w,b){for(var v=-1;v<=7;v+=1)if(!(w+v<=-1||s<=w+v))for(var E=-1;E<=7;E+=1)b+E<=-1||s<=b+E||(0<=v&&v<=6&&(E==0||E==6)||0<=E&&E<=6&&(v==0||v==6)||2<=v&&v<=4&&2<=E&&E<=4?o[w+v][b+E]=!0:o[w+v][b+E]=!1)},L=function(){for(var w=0,b=0,v=0;v<8;v+=1){h(!0,v);var E=i.getLostPoint(d);(v==0||w>E)&&(w=E,b=v)}return b},H=function(){for(var w=8;w<s-8;w+=1)o[w][6]==null&&(o[w][6]=w%2==0);for(var b=8;b<s-8;b+=1)o[6][b]==null&&(o[6][b]=b%2==0)},tt=function(){for(var w=i.getPatternPosition(y),b=0;b<w.length;b+=1)for(var v=0;v<w.length;v+=1){var E=w[b],A=w[v];if(o[E][A]==null)for(var D=-2;D<=2;D+=1)for(var O=-2;O<=2;O+=1)D==-2||D==2||O==-2||O==2||D==0&&O==0?o[E+D][A+O]=!0:o[E+D][A+O]=!1}},lt=function(w){for(var b=i.getBCHTypeNumber(y),v=0;v<18;v+=1){var E=!w&&(b>>v&1)==1;o[Math.floor(v/3)][v%3+s-8-3]=E}for(var v=0;v<18;v+=1){var E=!w&&(b>>v&1)==1;o[v%3+s-8-3][Math.floor(v/3)]=E}},mt=function(w,b){for(var v=u<<3|b,E=i.getBCHTypeInfo(v),A=0;A<15;A+=1){var D=!w&&(E>>A&1)==1;A<6?o[A][8]=D:A<8?o[A+1][8]=D:o[s-15+A][8]=D}for(var A=0;A<15;A+=1){var D=!w&&(E>>A&1)==1;A<8?o[8][s-A-1]=D:A<9?o[8][15-A-1+1]=D:o[8][15-A-1]=D}o[s-8][8]=!w},yt=function(w,b){for(var v=-1,E=s-1,A=7,D=0,O=i.getMaskFunction(b),V=s-1;V>0;V-=2)for(V==6&&(V-=1);;){for(var G=0;G<2;G+=1)if(o[E][V-G]==null){var Q=!1;D<w.length&&(Q=(w[D]>>>A&1)==1);var M=O(E,V-G);M&&(Q=!Q),o[E][V-G]=Q,A-=1,A==-1&&(D+=1,A=7)}if(E+=v,E<0||s<=E){E-=v,v=-v;break}}},Ot=function(w,b){for(var v=0,E=0,A=0,D=new Array(b.length),O=new Array(b.length),V=0;V<b.length;V+=1){var G=b[V].dataCount,Q=b[V].totalCount-G;E=Math.max(E,G),A=Math.max(A,Q),D[V]=new Array(G);for(var M=0;M<D[V].length;M+=1)D[V][M]=255&w.getBuffer()[M+v];v+=G;var ot=i.getErrorCorrectPolynomial(Q),at=f(D[V],ot.getLength()-1),yn=at.mod(ot);O[V]=new Array(ot.getLength()-1);for(var M=0;M<O[V].length;M+=1){var _n=M+yn.getLength()-O[V].length;O[V][M]=_n>=0?yn.getAt(_n):0}}for(var vn=0,M=0;M<b.length;M+=1)vn+=b[M].totalCount;for(var nr=new Array(vn),ye=0,M=0;M<E;M+=1)for(var V=0;V<b.length;V+=1)M<D[V].length&&(nr[ye]=D[V][M],ye+=1);for(var M=0;M<A;M+=1)for(var V=0;V<b.length;V+=1)M<O[V].length&&(nr[ye]=O[V][M],ye+=1);return nr},Xi=function(w,b,v){for(var E=p.getRSBlocks(w,b),A=g(),D=0;D<v.length;D+=1){var O=v[D];A.put(O.getMode(),4),A.put(O.getLength(),i.getLengthInBits(O.getMode(),w)),O.write(A)}for(var V=0,D=0;D<E.length;D+=1)V+=E[D].dataCount;if(A.getLengthInBits()>V*8)throw"code length overflow. ("+A.getLengthInBits()+">"+V*8+")";for(A.getLengthInBits()+4<=V*8&&A.put(0,4);A.getLengthInBits()%8!=0;)A.putBit(!1);for(;!(A.getLengthInBits()>=V*8||(A.put(T,8),A.getLengthInBits()>=V*8));)A.put(m,8);return Ot(A,E)};d.addData=function(w,b){b=b||"Byte";var v=null;switch(b){case"Numeric":v=_(w);break;case"Alphanumeric":v=x(w);break;case"Byte":v=k(w);break;case"Kanji":v=P(w);break;default:throw"mode:"+b}c.push(v),l=null},d.isDark=function(w,b){if(w<0||s<=w||b<0||s<=b)throw w+","+b;return o[w][b]},d.getModuleCount=function(){return s},d.make=function(){if(y<1){for(var w=1;w<40;w++){for(var b=p.getRSBlocks(w,u),v=g(),E=0;E<c.length;E++){var A=c[E];v.put(A.getMode(),4),v.put(A.getLength(),i.getLengthInBits(A.getMode(),w)),A.write(v)}for(var D=0,E=0;E<b.length;E++)D+=b[E].dataCount;if(v.getLengthInBits()<=D*8)break}y=w}h(!1,L())},d.createTableTag=function(w,b){w=w||2,b=typeof b>"u"?w*4:b;var v="";v+='<table style="',v+=" border-width: 0px; border-style: none;",v+=" border-collapse: collapse;",v+=" padding: 0px; margin: "+b+"px;",v+='">',v+="<tbody>";for(var E=0;E<d.getModuleCount();E+=1){v+="<tr>";for(var A=0;A<d.getModuleCount();A+=1)v+='<td style="',v+=" border-width: 0px; border-style: none;",v+=" border-collapse: collapse;",v+=" padding: 0px; margin: 0px;",v+=" width: "+w+"px;",v+=" height: "+w+"px;",v+=" background-color: ",v+=d.isDark(E,A)?"#000000":"#ffffff",v+=";",v+='"/>';v+="</tr>"}return v+="</tbody>",v+="</table>",v},d.createSvgTag=function(w,b,v,E){var A={};typeof arguments[0]=="object"&&(A=arguments[0],w=A.cellSize,b=A.margin,v=A.alt,E=A.title),w=w||2,b=typeof b>"u"?w*4:b,v=typeof v=="string"?{text:v}:v||{},v.text=v.text||null,v.id=v.text?v.id||"qrcode-description":null,E=typeof E=="string"?{text:E}:E||{},E.text=E.text||null,E.id=E.text?E.id||"qrcode-title":null;var D=d.getModuleCount()*w+b*2,O,V,G,Q,M="",ot;for(ot="l"+w+",0 0,"+w+" -"+w+",0 0,-"+w+"z ",M+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',M+=A.scalable?"":' width="'+D+'px" height="'+D+'px"',M+=' viewBox="0 0 '+D+" "+D+'" ',M+=' preserveAspectRatio="xMinYMin meet"',M+=E.text||v.text?' role="img" aria-labelledby="'+Mt([E.id,v.id].join(" ").trim())+'"':"",M+=">",M+=E.text?'<title id="'+Mt(E.id)+'">'+Mt(E.text)+"</title>":"",M+=v.text?'<description id="'+Mt(v.id)+'">'+Mt(v.text)+"</description>":"",M+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',M+='<path d="',G=0;G<d.getModuleCount();G+=1)for(Q=G*w+b,O=0;O<d.getModuleCount();O+=1)d.isDark(G,O)&&(V=O*w+b,M+="M"+V+","+Q+ot);return M+='" stroke="transparent" fill="black"/>',M+="</svg>",M},d.createDataURL=function(w,b){w=w||2,b=typeof b>"u"?w*4:b;var v=d.getModuleCount()*w+b*2,E=b,A=v-b;return it(v,v,function(D,O){if(E<=D&&D<A&&E<=O&&O<A){var V=Math.floor((D-E)/w),G=Math.floor((O-E)/w);return d.isDark(G,V)?0:1}else return 1})},d.createImgTag=function(w,b,v){w=w||2,b=typeof b>"u"?w*4:b;var E=d.getModuleCount()*w+b*2,A="";return A+="<img",A+=' src="',A+=d.createDataURL(w,b),A+='"',A+=' width="',A+=E,A+='"',A+=' height="',A+=E,A+='"',v&&(A+=' alt="',A+=Mt(v),A+='"'),A+="/>",A};var Mt=function(w){for(var b="",v=0;v<w.length;v+=1){var E=w.charAt(v);switch(E){case"<":b+="&lt;";break;case">":b+="&gt;";break;case"&":b+="&amp;";break;case'"':b+="&quot;";break;default:b+=E;break}}return b},Zi=function(w){var b=1;w=typeof w>"u"?b*2:w;var v=d.getModuleCount()*b+w*2,E=w,A=v-w,D,O,V,G,Q,M={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},ot={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},at="";for(D=0;D<v;D+=2){for(V=Math.floor((D-E)/b),G=Math.floor((D+1-E)/b),O=0;O<v;O+=1)Q="\u2588",E<=O&&O<A&&E<=D&&D<A&&d.isDark(V,Math.floor((O-E)/b))&&(Q=" "),E<=O&&O<A&&E<=D+1&&D+1<A&&d.isDark(G,Math.floor((O-E)/b))?Q+=" ":Q+="\u2588",at+=w<1&&D+1>=A?ot[Q]:M[Q];at+=`
`}return v%2&&w>0?at.substring(0,at.length-v-1)+Array(v+1).join("\u2580"):at.substring(0,at.length-1)};return d.createASCII=function(w,b){if(w=w||1,w<2)return Zi(b);w-=1,b=typeof b>"u"?w*2:b;var v=d.getModuleCount()*w+b*2,E=b,A=v-b,D,O,V,G,Q=Array(w+1).join("\u2588\u2588"),M=Array(w+1).join("  "),ot="",at="";for(D=0;D<v;D+=1){for(V=Math.floor((D-E)/w),at="",O=0;O<v;O+=1)G=1,E<=O&&O<A&&E<=D&&D<A&&d.isDark(V,Math.floor((O-E)/w))&&(G=0),at+=G?Q:M;for(V=0;V<w;V+=1)ot+=at+`
`}return ot.substring(0,ot.length-1)},d.renderTo2dContext=function(w,b){b=b||2;for(var v=d.getModuleCount(),E=0;E<v;E++)for(var A=0;A<v;A++)w.fillStyle=d.isDark(E,A)?"black":"white",w.fillRect(E*b,A*b,b,b)},d};e.stringToBytesFuncs={default:function(I){for(var N=[],T=0;T<I.length;T+=1){var m=I.charCodeAt(T);N.push(m&255)}return N}},e.stringToBytes=e.stringToBytesFuncs.default,e.createStringToBytes=function(I,N){var T=function(){for(var y=j(I),u=function(){var H=y.read();if(H==-1)throw"eof";return H},o=0,s={};;){var l=y.read();if(l==-1)break;var c=u(),d=u(),h=u(),R=String.fromCharCode(l<<8|c),L=d<<8|h;s[R]=L,o+=1}if(o!=N)throw o+" != "+N;return s}(),m=63;return function(y){for(var u=[],o=0;o<y.length;o+=1){var s=y.charCodeAt(o);if(s<128)u.push(s);else{var l=T[y.charAt(o)];typeof l=="number"?(l&255)==l?u.push(l):(u.push(l>>>8),u.push(l&255)):u.push(m)}}return u}};var t={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var I=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],N=1335,T=7973,m=21522,y={},u=function(o){for(var s=0;o!=0;)s+=1,o>>>=1;return s};return y.getBCHTypeInfo=function(o){for(var s=o<<10;u(s)-u(N)>=0;)s^=N<<u(s)-u(N);return(o<<10|s)^m},y.getBCHTypeNumber=function(o){for(var s=o<<12;u(s)-u(T)>=0;)s^=T<<u(s)-u(T);return o<<12|s},y.getPatternPosition=function(o){return I[o-1]},y.getMaskFunction=function(o){switch(o){case n.PATTERN000:return function(s,l){return(s+l)%2==0};case n.PATTERN001:return function(s,l){return s%2==0};case n.PATTERN010:return function(s,l){return l%3==0};case n.PATTERN011:return function(s,l){return(s+l)%3==0};case n.PATTERN100:return function(s,l){return(Math.floor(s/2)+Math.floor(l/3))%2==0};case n.PATTERN101:return function(s,l){return s*l%2+s*l%3==0};case n.PATTERN110:return function(s,l){return(s*l%2+s*l%3)%2==0};case n.PATTERN111:return function(s,l){return(s*l%3+(s+l)%2)%2==0};default:throw"bad maskPattern:"+o}},y.getErrorCorrectPolynomial=function(o){for(var s=f([1],0),l=0;l<o;l+=1)s=s.multiply(f([1,a.gexp(l)],0));return s},y.getLengthInBits=function(o,s){if(1<=s&&s<10)switch(o){case t.MODE_NUMBER:return 10;case t.MODE_ALPHA_NUM:return 9;case t.MODE_8BIT_BYTE:return 8;case t.MODE_KANJI:return 8;default:throw"mode:"+o}else if(s<27)switch(o){case t.MODE_NUMBER:return 12;case t.MODE_ALPHA_NUM:return 11;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 10;default:throw"mode:"+o}else if(s<41)switch(o){case t.MODE_NUMBER:return 14;case t.MODE_ALPHA_NUM:return 13;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+s},y.getLostPoint=function(o){for(var s=o.getModuleCount(),l=0,c=0;c<s;c+=1)for(var d=0;d<s;d+=1){for(var h=0,R=o.isDark(c,d),L=-1;L<=1;L+=1)if(!(c+L<0||s<=c+L))for(var H=-1;H<=1;H+=1)d+H<0||s<=d+H||L==0&&H==0||R==o.isDark(c+L,d+H)&&(h+=1);h>5&&(l+=3+h-5)}for(var c=0;c<s-1;c+=1)for(var d=0;d<s-1;d+=1){var tt=0;o.isDark(c,d)&&(tt+=1),o.isDark(c+1,d)&&(tt+=1),o.isDark(c,d+1)&&(tt+=1),o.isDark(c+1,d+1)&&(tt+=1),(tt==0||tt==4)&&(l+=3)}for(var c=0;c<s;c+=1)for(var d=0;d<s-6;d+=1)o.isDark(c,d)&&!o.isDark(c,d+1)&&o.isDark(c,d+2)&&o.isDark(c,d+3)&&o.isDark(c,d+4)&&!o.isDark(c,d+5)&&o.isDark(c,d+6)&&(l+=40);for(var d=0;d<s;d+=1)for(var c=0;c<s-6;c+=1)o.isDark(c,d)&&!o.isDark(c+1,d)&&o.isDark(c+2,d)&&o.isDark(c+3,d)&&o.isDark(c+4,d)&&!o.isDark(c+5,d)&&o.isDark(c+6,d)&&(l+=40);for(var lt=0,d=0;d<s;d+=1)for(var c=0;c<s;c+=1)o.isDark(c,d)&&(lt+=1);var mt=Math.abs(100*lt/s/s-50)/5;return l+=mt*10,l},y}(),a=function(){for(var I=new Array(256),N=new Array(256),T=0;T<8;T+=1)I[T]=1<<T;for(var T=8;T<256;T+=1)I[T]=I[T-4]^I[T-5]^I[T-6]^I[T-8];for(var T=0;T<255;T+=1)N[I[T]]=T;var m={};return m.glog=function(y){if(y<1)throw"glog("+y+")";return N[y]},m.gexp=function(y){for(;y<0;)y+=255;for(;y>=256;)y-=255;return I[y]},m}();function f(I,N){if(typeof I.length>"u")throw I.length+"/"+N;var T=function(){for(var y=0;y<I.length&&I[y]==0;)y+=1;for(var u=new Array(I.length-y+N),o=0;o<I.length-y;o+=1)u[o]=I[o+y];return u}(),m={};return m.getAt=function(y){return T[y]},m.getLength=function(){return T.length},m.multiply=function(y){for(var u=new Array(m.getLength()+y.getLength()-1),o=0;o<m.getLength();o+=1)for(var s=0;s<y.getLength();s+=1)u[o+s]^=a.gexp(a.glog(m.getAt(o))+a.glog(y.getAt(s)));return f(u,0)},m.mod=function(y){if(m.getLength()-y.getLength()<0)return m;for(var u=a.glog(m.getAt(0))-a.glog(y.getAt(0)),o=new Array(m.getLength()),s=0;s<m.getLength();s+=1)o[s]=m.getAt(s);for(var s=0;s<y.getLength();s+=1)o[s]^=a.gexp(a.glog(y.getAt(s))+u);return f(o,0).mod(y)},m}var p=function(){var I=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],N=function(y,u){var o={};return o.totalCount=y,o.dataCount=u,o},T={},m=function(y,u){switch(u){case r.L:return I[(y-1)*4+0];case r.M:return I[(y-1)*4+1];case r.Q:return I[(y-1)*4+2];case r.H:return I[(y-1)*4+3];default:return}};return T.getRSBlocks=function(y,u){var o=m(y,u);if(typeof o>"u")throw"bad rs block @ typeNumber:"+y+"/errorCorrectionLevel:"+u;for(var s=o.length/3,l=[],c=0;c<s;c+=1)for(var d=o[c*3+0],h=o[c*3+1],R=o[c*3+2],L=0;L<d;L+=1)l.push(N(h,R));return l},T}(),g=function(){var I=[],N=0,T={};return T.getBuffer=function(){return I},T.getAt=function(m){var y=Math.floor(m/8);return(I[y]>>>7-m%8&1)==1},T.put=function(m,y){for(var u=0;u<y;u+=1)T.putBit((m>>>y-u-1&1)==1)},T.getLengthInBits=function(){return N},T.putBit=function(m){var y=Math.floor(N/8);I.length<=y&&I.push(0),m&&(I[y]|=128>>>N%8),N+=1},T},_=function(I){var N=t.MODE_NUMBER,T=I,m={};m.getMode=function(){return N},m.getLength=function(o){return T.length},m.write=function(o){for(var s=T,l=0;l+2<s.length;)o.put(y(s.substring(l,l+3)),10),l+=3;l<s.length&&(s.length-l==1?o.put(y(s.substring(l,l+1)),4):s.length-l==2&&o.put(y(s.substring(l,l+2)),7))};var y=function(o){for(var s=0,l=0;l<o.length;l+=1)s=s*10+u(o.charAt(l));return s},u=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return m},x=function(I){var N=t.MODE_ALPHA_NUM,T=I,m={};m.getMode=function(){return N},m.getLength=function(u){return T.length},m.write=function(u){for(var o=T,s=0;s+1<o.length;)u.put(y(o.charAt(s))*45+y(o.charAt(s+1)),11),s+=2;s<o.length&&u.put(y(o.charAt(s)),6)};var y=function(u){if("0"<=u&&u<="9")return u.charCodeAt(0)-48;if("A"<=u&&u<="Z")return u.charCodeAt(0)-65+10;switch(u){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+u}};return m},k=function(I){var N=t.MODE_8BIT_BYTE,T=I,m=e.stringToBytes(I),y={};return y.getMode=function(){return N},y.getLength=function(u){return m.length},y.write=function(u){for(var o=0;o<m.length;o+=1)u.put(m[o],8)},y},P=function(I){var N=t.MODE_KANJI,T=I,m=e.stringToBytesFuncs.SJIS;if(!m)throw"sjis not supported.";(function(o,s){var l=m(o);if(l.length!=2||(l[0]<<8|l[1])!=s)throw"sjis not supported."})("\u53CB",38726);var y=m(I),u={};return u.getMode=function(){return N},u.getLength=function(o){return~~(y.length/2)},u.write=function(o){for(var s=y,l=0;l+1<s.length;){var c=(255&s[l])<<8|255&s[l+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(l+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),l+=2}if(l<s.length)throw"illegal char at "+(l+1)},u},U=function(){var I=[],N={};return N.writeByte=function(T){I.push(T&255)},N.writeShort=function(T){N.writeByte(T),N.writeByte(T>>>8)},N.writeBytes=function(T,m,y){m=m||0,y=y||T.length;for(var u=0;u<y;u+=1)N.writeByte(T[u+m])},N.writeString=function(T){for(var m=0;m<T.length;m+=1)N.writeByte(T.charCodeAt(m))},N.toByteArray=function(){return I},N.toString=function(){var T="";T+="[";for(var m=0;m<I.length;m+=1)m>0&&(T+=","),T+=I[m];return T+="]",T},N},B=function(){var I=0,N=0,T=0,m="",y={},u=function(s){m+=String.fromCharCode(o(s&63))},o=function(s){if(!(s<0)){if(s<26)return 65+s;if(s<52)return 97+(s-26);if(s<62)return 48+(s-52);if(s==62)return 43;if(s==63)return 47}throw"n:"+s};return y.writeByte=function(s){for(I=I<<8|s&255,N+=8,T+=1;N>=6;)u(I>>>N-6),N-=6},y.flush=function(){if(N>0&&(u(I<<6-N),I=0,N=0),T%3!=0)for(var s=3-T%3,l=0;l<s;l+=1)m+="="},y.toString=function(){return m},y},j=function(I){var N=I,T=0,m=0,y=0,u={};u.read=function(){for(;y<8;){if(T>=N.length){if(y==0)return-1;throw"unexpected end of file./"+y}var s=N.charAt(T);if(T+=1,s=="=")return y=0,-1;if(s.match(/^\s$/))continue;m=m<<6|o(s.charCodeAt(0)),y+=6}var l=m>>>y-8&255;return y-=8,l};var o=function(s){if(65<=s&&s<=90)return s-65;if(97<=s&&s<=122)return s-97+26;if(48<=s&&s<=57)return s-48+52;if(s==43)return 62;if(s==47)return 63;throw"c:"+s};return u},$=function(I,N){var T=I,m=N,y=new Array(I*N),u={};u.setPixel=function(c,d,h){y[d*T+c]=h},u.write=function(c){c.writeString("GIF87a"),c.writeShort(T),c.writeShort(m),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(T),c.writeShort(m),c.writeByte(0);var d=2,h=s(d);c.writeByte(d);for(var R=0;h.length-R>255;)c.writeByte(255),c.writeBytes(h,R,255),R+=255;c.writeByte(h.length-R),c.writeBytes(h,R,h.length-R),c.writeByte(0),c.writeString(";")};var o=function(c){var d=c,h=0,R=0,L={};return L.write=function(H,tt){if(H>>>tt)throw"length over";for(;h+tt>=8;)d.writeByte(255&(H<<h|R)),tt-=8-h,H>>>=8-h,R=0,h=0;R=H<<h|R,h=h+tt},L.flush=function(){h>0&&d.writeByte(R)},L},s=function(c){for(var d=1<<c,h=(1<<c)+1,R=c+1,L=l(),H=0;H<d;H+=1)L.add(String.fromCharCode(H));L.add(String.fromCharCode(d)),L.add(String.fromCharCode(h));var tt=U(),lt=o(tt);lt.write(d,R);var mt=0,yt=String.fromCharCode(y[mt]);for(mt+=1;mt<y.length;){var Ot=String.fromCharCode(y[mt]);mt+=1,L.contains(yt+Ot)?yt=yt+Ot:(lt.write(L.indexOf(yt),R),L.size()<4095&&(L.size()==1<<R&&(R+=1),L.add(yt+Ot)),yt=Ot)}return lt.write(L.indexOf(yt),R),lt.write(h,R),lt.flush(),tt.toByteArray()},l=function(){var c={},d=0,h={};return h.add=function(R){if(h.contains(R))throw"dup key:"+R;c[R]=d,d+=1},h.size=function(){return d},h.indexOf=function(R){return c[R]},h.contains=function(R){return typeof c[R]<"u"},h};return u},it=function(I,N,T){for(var m=$(I,N),y=0;y<N;y+=1)for(var u=0;u<I;u+=1)m.setPixel(u,y,T(u,y));var o=U();m.write(o);for(var s=B(),l=o.toByteArray(),c=0;c<l.length;c+=1)s.writeByte(l[c]);return s.flush(),"data:image/gif;base64,"+s};return e}();(function(){zi.stringToBytesFuncs["UTF-8"]=function(e){function t(r){for(var n=[],i=0;i<r.length;i++){var a=r.charCodeAt(i);a<128?n.push(a):a<2048?n.push(192|a>>6,128|a&63):a<55296||a>=57344?n.push(224|a>>12,128|a>>6&63,128|a&63):(i++,a=65536+((a&1023)<<10|r.charCodeAt(i)&1023),n.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63))}return n}return t(e)}})();(function(e){typeof define=="function"&&define.amd?define([],e):typeof Wi=="object"&&(Ki.exports=e())})(function(){return zi})});var bn=()=>{};var An=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t},us=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[r++],f=e[r++],p=e[r++],g=((i&7)<<18|(a&63)<<12|(f&63)<<6|p&63)-65536;t[n++]=String.fromCharCode(55296+(g>>10)),t[n++]=String.fromCharCode(56320+(g&1023))}else{let a=e[r++],f=e[r++];t[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|f&63)}}return t.join("")},Tn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){let a=e[i],f=i+1<e.length,p=f?e[i+1]:0,g=i+2<e.length,_=g?e[i+2]:0,x=a>>2,k=(a&3)<<4|p>>4,P=(p&15)<<2|_>>6,U=_&63;g||(U=64,f||(P=64)),n.push(r[x],r[k],r[P],r[U])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(An(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):us(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){let a=r[e.charAt(i++)],p=i<e.length?r[e.charAt(i)]:0;++i;let _=i<e.length?r[e.charAt(i)]:64;++i;let k=i<e.length?r[e.charAt(i)]:64;if(++i,a==null||p==null||_==null||k==null)throw new ir;let P=a<<2|p>>4;if(n.push(P),_!==64){let U=p<<4&240|_>>2;if(n.push(U),k!==64){let B=_<<6&192|k;n.push(B)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ir=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},cs=function(e){let t=An(e);return Tn.encodeByteArray(t,!0)},Kt=function(e){return cs(e).replace(/\./g,"")},In=function(e){try{return Tn.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function ls(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var fs=()=>ls().__FIREBASE_DEFAULTS__,hs=()=>{if(typeof process>"u"||typeof process.env>"u")return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ds=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&In(e[1]);return t&&JSON.parse(t)},Nn=()=>{try{return bn()||fs()||hs()||ds()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ps=e=>Nn()?.emulatorHosts?.[e],Dn=e=>{let t=ps(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return t[0]==="["?[t.substring(1,r-1),n]:[t.substring(0,r),n]},sr=()=>Nn()?.config;var _e=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}};function Sn(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r={alg:"none",type:"JWT"},n=t||"demo-project",i=e.iat||0,a=e.sub||e.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let f={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Kt(JSON.stringify(r)),Kt(JSON.stringify(f)),""].join(".")}function xn(){try{return typeof indexedDB=="object"}catch{return!1}}function kn(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(r){t(r)}})}var gs="FirebaseError",_t=class e extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=gs,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qt.prototype.create)}},Qt=class{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){let n=r[0]||{},i=`${this.service}/${t}`,a=this.errors[t],f=a?ms(a,n):"Error",p=`${this.serviceName}: ${f} (${i}).`;return new _t(i,p,n)}};function ms(e,t){try{let r=0,n="";for(;r<e.length;){let i=e.indexOf("{$",r);if(i===-1){n+=e.substring(r);break}let a=e.indexOf("}",i+2);if(a===-1){n+=e.substring(r);break}let f=e.substring(i+2,a),p=t[f];n+=e.substring(r,i)+(p!=null?String(p):`<${f}?>`),r=a+1}return n}catch{return e}}function St(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let a=e[i],f=t[i];if(En(a)&&En(f)){if(!St(a,f))return!1}else if(a!==f)return!1}for(let i of n)if(!r.includes(i))return!1;return!0}function En(e){return e!==null&&typeof e=="object"}var oa=4*60*60*1e3;function ft(e){return e&&e._delegate?e._delegate:e}function or(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Rn(e){return(await fetch(e,{credentials:"include"})).ok}var vt=class{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var xt="[DEFAULT]";var ar=class{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){let n=new _e;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){let r=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_s(t))try{this.getOrInitializeService({instanceIdentifier:xt})}catch{}for(let[r,n]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(r);try{let a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(t=xt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=xt){return this.instances.has(t)}getOptions(t=xt){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(let[a,f]of this.instancesDeferred.entries()){let p=this.normalizeInstanceIdentifier(a);n===p&&f.resolve(i)}return i}onInit(t,r){let n=this.normalizeInstanceIdentifier(r),i=this.onInitCallbacks.get(n)??new Set;i.add(t),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&t(a,n),()=>{i.delete(t)}}invokeOnInitCallbacks(t,r){let n=this.onInitCallbacks.get(r);if(n)for(let i of n)try{i(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:ys(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=xt){return this.component?this.component.multipleInstances?t:xt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function ys(e){return e===xt?void 0:e}function _s(e){return e.instantiationMode==="EAGER"}var ve=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let r=new ar(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}};var vs=[],q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(q||(q={}));var ws={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},bs=q.INFO,Es={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},As=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=Es[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},Lt=class{constructor(t){this.name=t,this._logLevel=bs,this._logHandler=As,this._userLogHandler=null,vs.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ws[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}};var Ts=(e,t)=>t.some(r=>e instanceof r),Pn,Vn;function Is(){return Pn||(Pn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ns(){return Vn||(Vn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var Cn=new WeakMap,cr=new WeakMap,On=new WeakMap,ur=new WeakMap,fr=new WeakMap;function Ds(e){let t=new Promise((r,n)=>{let i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",f)},a=()=>{r(ht(e.result)),i()},f=()=>{n(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",f)});return t.then(r=>{r instanceof IDBCursor&&Cn.set(r,e)}).catch(()=>{}),fr.set(t,e),t}function Ss(e){if(cr.has(e))return;let t=new Promise((r,n)=>{let i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",f),e.removeEventListener("abort",f)},a=()=>{r(),i()},f=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",f),e.addEventListener("abort",f)});cr.set(e,t)}var lr={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return cr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||On.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ht(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Mn(e){lr=e(lr)}function xs(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){let n=e.call(we(this),t,...r);return On.set(n,t.sort?t.sort():[t]),ht(n)}:Ns().includes(e)?function(...t){return e.apply(we(this),t),ht(Cn.get(this))}:function(...t){return ht(e.apply(we(this),t))}}function ks(e){return typeof e=="function"?xs(e):(e instanceof IDBTransaction&&Ss(e),Ts(e,Is())?new Proxy(e,lr):e)}function ht(e){if(e instanceof IDBRequest)return Ds(e);if(ur.has(e))return ur.get(e);let t=ks(e);return t!==e&&(ur.set(e,t),fr.set(t,e)),t}var we=e=>fr.get(e);function Fn(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let f=indexedDB.open(e,t),p=ht(f);return n&&f.addEventListener("upgradeneeded",g=>{n(ht(f.result),g.oldVersion,g.newVersion,ht(f.transaction),g)}),r&&f.addEventListener("blocked",g=>r(g.oldVersion,g.newVersion,g)),p.then(g=>{a&&g.addEventListener("close",()=>a()),i&&g.addEventListener("versionchange",_=>i(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}var Rs=["get","getKey","getAll","getAllKeys","count"],Ps=["put","add","delete","clear"],hr=new Map;function Ln(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(hr.get(t))return hr.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=Ps.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||Rs.includes(r)))return;let a=async function(f,...p){let g=this.transaction(f,i?"readwrite":"readonly"),_=g.store;return n&&(_=_.index(p.shift())),(await Promise.all([_[r](...p),i&&g.done]))[0]};return hr.set(t,a),a}Mn(e=>({...e,get:(t,r,n)=>Ln(t,r)||e.get(t,r,n),has:(t,r)=>!!Ln(t,r)||e.has(t,r)}));var pr=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(Vs(r)){let n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}};function Vs(e){return e.getComponent()?.type==="VERSION"}var gr="@firebase/app",Bn="0.16.2";var bt=new Lt("@firebase/app"),Cs="@firebase/app-compat",Os="@firebase/analytics-compat",Ms="@firebase/analytics",Ls="@firebase/app-check-compat",Fs="@firebase/app-check",Bs="@firebase/auth",$s="@firebase/auth-compat",Us="@firebase/database",qs="@firebase/data-connect",js="@firebase/database-compat",Gs="@firebase/functions",Hs="@firebase/functions-compat",zs="@firebase/installations",Ws="@firebase/installations-compat",Ks="@firebase/messaging",Qs="@firebase/messaging-compat",Js="@firebase/performance",Ys="@firebase/performance-compat",Xs="@firebase/remote-config",Zs="@firebase/remote-config-compat",to="@firebase/storage",eo="@firebase/storage-compat",ro="@firebase/firestore",no="@firebase/ai",io="@firebase/firestore-compat",so="firebase",oo="12.19.0";var mr="[DEFAULT]",ao={[gr]:"fire-core",[Cs]:"fire-core-compat",[Ms]:"fire-analytics",[Os]:"fire-analytics-compat",[Fs]:"fire-app-check",[Ls]:"fire-app-check-compat",[Bs]:"fire-auth",[$s]:"fire-auth-compat",[Us]:"fire-rtdb",[qs]:"fire-data-connect",[js]:"fire-rtdb-compat",[Gs]:"fire-fn",[Hs]:"fire-fn-compat",[zs]:"fire-iid",[Ws]:"fire-iid-compat",[Ks]:"fire-fcm",[Qs]:"fire-fcm-compat",[Js]:"fire-perf",[Ys]:"fire-perf-compat",[Xs]:"fire-rc",[Zs]:"fire-rc-compat",[to]:"fire-gcs",[eo]:"fire-gcs-compat",[ro]:"fire-fst",[io]:"fire-fst-compat",[no]:"fire-vertex","fire-js":"fire-js",[so]:"fire-js-all"};var be=new Map,uo=new Map,yr=new Map;function $n(e,t){try{e.container.addComponent(t)}catch(r){bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function Jt(e){let t=e.name;if(yr.has(t))return bt.debug(`There were multiple attempts to register component ${t}.`),!1;yr.set(t,e);for(let r of be.values())$n(r,e);for(let r of uo.values())$n(r,e);return!0}function Gn(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Hn(e){return e==null?!1:e.settings!==void 0}var co={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wt=new Qt("app","Firebase",co);var _r=class{constructor(t,r,n){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw wt.create("app-deleted",{appName:this._name})}};var zn=oo;function br(e,t={}){let r=e;typeof t!="object"&&(t={name:t});let n={name:mr,automaticDataCollectionEnabled:!0,...t},i=n.name;if(typeof i!="string"||!i)throw wt.create("bad-app-name",{appName:String(i)});if(r||(r=sr()),!r)throw wt.create("no-options");let a=be.get(i);if(a)if(St(r,a.options)){if(St(n,a.config))return a;throw wt.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(a.config),newValue:JSON.stringify(n)})}else throw wt.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(a.options),newValue:JSON.stringify(r)});let f=new ve(i);for(let g of yr.values())f.addComponent(g);let p=new _r(r,n,f);return be.set(i,p),p}function Wn(e=mr){let t=be.get(e);if(!t&&e===mr&&sr())return br();if(!t)throw wt.create("no-app",{appName:e});return t}function It(e,t,r){let n=ao[e]??e;r&&(n+=`-${r}`);let i=n.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let f=[`Unable to register library "${n}" with version "${t}":`];i&&f.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&a&&f.push("and"),a&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),bt.warn(f.join(" "));return}Jt(new vt(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}var lo="firebase-heartbeat-database",fo=1,Yt="firebase-heartbeat-store",dr=null;function Kn(){return dr||(dr=Fn(lo,fo,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Yt)}catch(r){console.warn(r)}}}}).catch(e=>{throw wt.create("idb-open",{originalErrorMessage:e.message})})),dr}async function ho(e){try{let r=(await Kn()).transaction(Yt),n=await r.objectStore(Yt).get(Qn(e));return await r.done,n}catch(t){if(t instanceof _t)bt.warn(t.message);else{let r=wt.create("idb-get",{originalErrorMessage:t?.message});bt.warn(r.message)}}}async function Un(e,t){try{let n=(await Kn()).transaction(Yt,"readwrite");await n.objectStore(Yt).put(t,Qn(e)),await n.done}catch(r){if(r instanceof _t)bt.warn(r.message);else{let n=wt.create("idb-set",{originalErrorMessage:r?.message});bt.warn(n.message)}}}function Qn(e){return`${e.name}!${e.options.appId}`}var po=1024,go=30,vr=class{constructor(t){this.container=t,this._heartbeatsCache=null;let r=this.container.getProvider("app").getImmediate();this._storage=new wr(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=qn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>go){let i=yo(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){bt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=qn(),{heartbeatsToSend:r,unsentEntries:n}=mo(this._heartbeatsCache.heartbeats),i=Kt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return bt.warn(t),""}}};function qn(){return new Date().toISOString().substring(0,10)}function mo(e,t=po){let r=[],n=e.slice();for(let i of e){let a=r.find(f=>f.agent===i.agent);if(a){if(a.dates.push(i.date),jn(r)>t){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),jn(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}var wr=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xn()?kn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let r=await ho(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){let n=await this.read();return Un(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){let n=await this.read();return Un(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}};function jn(e){return Kt(JSON.stringify({version:2,heartbeats:e})).length}function yo(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}function _o(e){Jt(new vt("platform-logger",t=>new pr(t),"PRIVATE")),Jt(new vt("heartbeat",t=>new vr(t),"PRIVATE")),It(gr,Bn,e),It(gr,Bn,"esm2020"),It("fire-js","")}_o("");var vo="firebase",wo="12.19.0";It(vo,wo,"app");var Jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yn={};var Er,bo;(function(){var e;function t(u,o){function s(){}s.prototype=o.prototype,u.F=o.prototype,u.prototype=new s,u.prototype.constructor=u,u.D=function(l,c,d){for(var h=Array(arguments.length-2),R=2;R<arguments.length;R++)h[R-2]=arguments[R];return o.prototype[c].apply(l,h)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,r),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(u,o,s){s||(s=0);let l=Array(16);if(typeof o=="string")for(var c=0;c<16;++c)l[c]=o.charCodeAt(s++)|o.charCodeAt(s++)<<8|o.charCodeAt(s++)<<16|o.charCodeAt(s++)<<24;else for(c=0;c<16;++c)l[c]=o[s++]|o[s++]<<8|o[s++]<<16|o[s++]<<24;o=u.g[0],s=u.g[1],c=u.g[2];let d=u.g[3],h;h=o+(d^s&(c^d))+l[0]+3614090360&4294967295,o=s+(h<<7&4294967295|h>>>25),h=d+(c^o&(s^c))+l[1]+3905402710&4294967295,d=o+(h<<12&4294967295|h>>>20),h=c+(s^d&(o^s))+l[2]+606105819&4294967295,c=d+(h<<17&4294967295|h>>>15),h=s+(o^c&(d^o))+l[3]+3250441966&4294967295,s=c+(h<<22&4294967295|h>>>10),h=o+(d^s&(c^d))+l[4]+4118548399&4294967295,o=s+(h<<7&4294967295|h>>>25),h=d+(c^o&(s^c))+l[5]+1200080426&4294967295,d=o+(h<<12&4294967295|h>>>20),h=c+(s^d&(o^s))+l[6]+2821735955&4294967295,c=d+(h<<17&4294967295|h>>>15),h=s+(o^c&(d^o))+l[7]+4249261313&4294967295,s=c+(h<<22&4294967295|h>>>10),h=o+(d^s&(c^d))+l[8]+1770035416&4294967295,o=s+(h<<7&4294967295|h>>>25),h=d+(c^o&(s^c))+l[9]+2336552879&4294967295,d=o+(h<<12&4294967295|h>>>20),h=c+(s^d&(o^s))+l[10]+4294925233&4294967295,c=d+(h<<17&4294967295|h>>>15),h=s+(o^c&(d^o))+l[11]+2304563134&4294967295,s=c+(h<<22&4294967295|h>>>10),h=o+(d^s&(c^d))+l[12]+1804603682&4294967295,o=s+(h<<7&4294967295|h>>>25),h=d+(c^o&(s^c))+l[13]+4254626195&4294967295,d=o+(h<<12&4294967295|h>>>20),h=c+(s^d&(o^s))+l[14]+2792965006&4294967295,c=d+(h<<17&4294967295|h>>>15),h=s+(o^c&(d^o))+l[15]+1236535329&4294967295,s=c+(h<<22&4294967295|h>>>10),h=o+(c^d&(s^c))+l[1]+4129170786&4294967295,o=s+(h<<5&4294967295|h>>>27),h=d+(s^c&(o^s))+l[6]+3225465664&4294967295,d=o+(h<<9&4294967295|h>>>23),h=c+(o^s&(d^o))+l[11]+643717713&4294967295,c=d+(h<<14&4294967295|h>>>18),h=s+(d^o&(c^d))+l[0]+3921069994&4294967295,s=c+(h<<20&4294967295|h>>>12),h=o+(c^d&(s^c))+l[5]+3593408605&4294967295,o=s+(h<<5&4294967295|h>>>27),h=d+(s^c&(o^s))+l[10]+38016083&4294967295,d=o+(h<<9&4294967295|h>>>23),h=c+(o^s&(d^o))+l[15]+3634488961&4294967295,c=d+(h<<14&4294967295|h>>>18),h=s+(d^o&(c^d))+l[4]+3889429448&4294967295,s=c+(h<<20&4294967295|h>>>12),h=o+(c^d&(s^c))+l[9]+568446438&4294967295,o=s+(h<<5&4294967295|h>>>27),h=d+(s^c&(o^s))+l[14]+3275163606&4294967295,d=o+(h<<9&4294967295|h>>>23),h=c+(o^s&(d^o))+l[3]+4107603335&4294967295,c=d+(h<<14&4294967295|h>>>18),h=s+(d^o&(c^d))+l[8]+1163531501&4294967295,s=c+(h<<20&4294967295|h>>>12),h=o+(c^d&(s^c))+l[13]+2850285829&4294967295,o=s+(h<<5&4294967295|h>>>27),h=d+(s^c&(o^s))+l[2]+4243563512&4294967295,d=o+(h<<9&4294967295|h>>>23),h=c+(o^s&(d^o))+l[7]+1735328473&4294967295,c=d+(h<<14&4294967295|h>>>18),h=s+(d^o&(c^d))+l[12]+2368359562&4294967295,s=c+(h<<20&4294967295|h>>>12),h=o+(s^c^d)+l[5]+4294588738&4294967295,o=s+(h<<4&4294967295|h>>>28),h=d+(o^s^c)+l[8]+2272392833&4294967295,d=o+(h<<11&4294967295|h>>>21),h=c+(d^o^s)+l[11]+1839030562&4294967295,c=d+(h<<16&4294967295|h>>>16),h=s+(c^d^o)+l[14]+4259657740&4294967295,s=c+(h<<23&4294967295|h>>>9),h=o+(s^c^d)+l[1]+2763975236&4294967295,o=s+(h<<4&4294967295|h>>>28),h=d+(o^s^c)+l[4]+1272893353&4294967295,d=o+(h<<11&4294967295|h>>>21),h=c+(d^o^s)+l[7]+4139469664&4294967295,c=d+(h<<16&4294967295|h>>>16),h=s+(c^d^o)+l[10]+3200236656&4294967295,s=c+(h<<23&4294967295|h>>>9),h=o+(s^c^d)+l[13]+681279174&4294967295,o=s+(h<<4&4294967295|h>>>28),h=d+(o^s^c)+l[0]+3936430074&4294967295,d=o+(h<<11&4294967295|h>>>21),h=c+(d^o^s)+l[3]+3572445317&4294967295,c=d+(h<<16&4294967295|h>>>16),h=s+(c^d^o)+l[6]+76029189&4294967295,s=c+(h<<23&4294967295|h>>>9),h=o+(s^c^d)+l[9]+3654602809&4294967295,o=s+(h<<4&4294967295|h>>>28),h=d+(o^s^c)+l[12]+3873151461&4294967295,d=o+(h<<11&4294967295|h>>>21),h=c+(d^o^s)+l[15]+530742520&4294967295,c=d+(h<<16&4294967295|h>>>16),h=s+(c^d^o)+l[2]+3299628645&4294967295,s=c+(h<<23&4294967295|h>>>9),h=o+(c^(s|~d))+l[0]+4096336452&4294967295,o=s+(h<<6&4294967295|h>>>26),h=d+(s^(o|~c))+l[7]+1126891415&4294967295,d=o+(h<<10&4294967295|h>>>22),h=c+(o^(d|~s))+l[14]+2878612391&4294967295,c=d+(h<<15&4294967295|h>>>17),h=s+(d^(c|~o))+l[5]+4237533241&4294967295,s=c+(h<<21&4294967295|h>>>11),h=o+(c^(s|~d))+l[12]+1700485571&4294967295,o=s+(h<<6&4294967295|h>>>26),h=d+(s^(o|~c))+l[3]+2399980690&4294967295,d=o+(h<<10&4294967295|h>>>22),h=c+(o^(d|~s))+l[10]+4293915773&4294967295,c=d+(h<<15&4294967295|h>>>17),h=s+(d^(c|~o))+l[1]+2240044497&4294967295,s=c+(h<<21&4294967295|h>>>11),h=o+(c^(s|~d))+l[8]+1873313359&4294967295,o=s+(h<<6&4294967295|h>>>26),h=d+(s^(o|~c))+l[15]+4264355552&4294967295,d=o+(h<<10&4294967295|h>>>22),h=c+(o^(d|~s))+l[6]+2734768916&4294967295,c=d+(h<<15&4294967295|h>>>17),h=s+(d^(c|~o))+l[13]+1309151649&4294967295,s=c+(h<<21&4294967295|h>>>11),h=o+(c^(s|~d))+l[4]+4149444226&4294967295,o=s+(h<<6&4294967295|h>>>26),h=d+(s^(o|~c))+l[11]+3174756917&4294967295,d=o+(h<<10&4294967295|h>>>22),h=c+(o^(d|~s))+l[2]+718787259&4294967295,c=d+(h<<15&4294967295|h>>>17),h=s+(d^(c|~o))+l[9]+3951481745&4294967295,u.g[0]=u.g[0]+o&4294967295,u.g[1]=u.g[1]+(c+(h<<21&4294967295|h>>>11))&4294967295,u.g[2]=u.g[2]+c&4294967295,u.g[3]=u.g[3]+d&4294967295}n.prototype.v=function(u,o){o===void 0&&(o=u.length);let s=o-this.blockSize,l=this.C,c=this.h,d=0;for(;d<o;){if(c==0)for(;d<=s;)i(this,u,d),d+=this.blockSize;if(typeof u=="string"){for(;d<o;)if(l[c++]=u.charCodeAt(d++),c==this.blockSize){i(this,l),c=0;break}}else for(;d<o;)if(l[c++]=u[d++],c==this.blockSize){i(this,l),c=0;break}}this.h=c,this.o+=o},n.prototype.A=function(){var u=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);u[0]=128;for(var o=1;o<u.length-8;++o)u[o]=0;o=this.o*8;for(var s=u.length-8;s<u.length;++s)u[s]=o&255,o/=256;for(this.v(u),u=Array(16),o=0,s=0;s<4;++s)for(let l=0;l<32;l+=8)u[o++]=this.g[s]>>>l&255;return u};function a(u,o){var s=p;return Object.prototype.hasOwnProperty.call(s,u)?s[u]:s[u]=o(u)}function f(u,o){this.h=o;let s=[],l=!0;for(let c=u.length-1;c>=0;c--){let d=u[c]|0;l&&d==o||(s[c]=d,l=!1)}this.g=s}var p={};function g(u){return-128<=u&&u<128?a(u,function(o){return new f([o|0],o<0?-1:0)}):new f([u|0],u<0?-1:0)}function _(u){if(isNaN(u)||!isFinite(u))return k;if(u<0)return $(_(-u));let o=[],s=1;for(let l=0;u>=s;l++)o[l]=u/s|0,s*=4294967296;return new f(o,0)}function x(u,o){if(u.length==0)throw Error("number format error: empty string");if(o=o||10,o<2||36<o)throw Error("radix out of range: "+o);if(u.charAt(0)=="-")return $(x(u.substring(1),o));if(u.indexOf("-")>=0)throw Error('number format error: interior "-" character');let s=_(Math.pow(o,8)),l=k;for(let d=0;d<u.length;d+=8){var c=Math.min(8,u.length-d);let h=parseInt(u.substring(d,d+c),o);c<8?(c=_(Math.pow(o,c)),l=l.j(c).add(_(h))):(l=l.j(s),l=l.add(_(h)))}return l}var k=g(0),P=g(1),U=g(16777216);e=f.prototype,e.m=function(){if(j(this))return-$(this).m();let u=0,o=1;for(let s=0;s<this.g.length;s++){let l=this.i(s);u+=(l>=0?l:4294967296+l)*o,o*=4294967296}return u},e.toString=function(u){if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(B(this))return"0";if(j(this))return"-"+$(this).toString(u);let o=_(Math.pow(u,6));var s=this;let l="";for(;;){let c=T(s,o).g;s=it(s,c.j(o));let d=((s.g.length>0?s.g[0]:s.h)>>>0).toString(u);if(s=c,B(s))return d+l;for(;d.length<6;)d="0"+d;l=d+l}},e.i=function(u){return u<0?0:u<this.g.length?this.g[u]:this.h};function B(u){if(u.h!=0)return!1;for(let o=0;o<u.g.length;o++)if(u.g[o]!=0)return!1;return!0}function j(u){return u.h==-1}e.l=function(u){return u=it(this,u),j(u)?-1:B(u)?0:1};function $(u){let o=u.g.length,s=[];for(let l=0;l<o;l++)s[l]=~u.g[l];return new f(s,~u.h).add(P)}e.abs=function(){return j(this)?$(this):this},e.add=function(u){let o=Math.max(this.g.length,u.g.length),s=[],l=0;for(let c=0;c<=o;c++){let d=l+(this.i(c)&65535)+(u.i(c)&65535),h=(d>>>16)+(this.i(c)>>>16)+(u.i(c)>>>16);l=h>>>16,d&=65535,h&=65535,s[c]=h<<16|d}return new f(s,s[s.length-1]&-2147483648?-1:0)};function it(u,o){return u.add($(o))}e.j=function(u){if(B(this)||B(u))return k;if(j(this))return j(u)?$(this).j($(u)):$($(this).j(u));if(j(u))return $(this.j($(u)));if(this.l(U)<0&&u.l(U)<0)return _(this.m()*u.m());let o=this.g.length+u.g.length,s=[];for(var l=0;l<2*o;l++)s[l]=0;for(l=0;l<this.g.length;l++)for(let c=0;c<u.g.length;c++){let d=this.i(l)>>>16,h=this.i(l)&65535,R=u.i(c)>>>16,L=u.i(c)&65535;s[2*l+2*c]+=h*L,I(s,2*l+2*c),s[2*l+2*c+1]+=d*L,I(s,2*l+2*c+1),s[2*l+2*c+1]+=h*R,I(s,2*l+2*c+1),s[2*l+2*c+2]+=d*R,I(s,2*l+2*c+2)}for(u=0;u<o;u++)s[u]=s[2*u+1]<<16|s[2*u];for(u=o;u<2*o;u++)s[u]=0;return new f(s,0)};function I(u,o){for(;(u[o]&65535)!=u[o];)u[o+1]+=u[o]>>>16,u[o]&=65535,o++}function N(u,o){this.g=u,this.h=o}function T(u,o){if(B(o))throw Error("division by zero");if(B(u))return new N(k,k);if(j(u))return o=T($(u),o),new N($(o.g),$(o.h));if(j(o))return o=T(u,$(o)),new N($(o.g),o.h);if(u.g.length>30){if(j(u)||j(o))throw Error("slowDivide_ only works with positive integers.");for(var s=P,l=o;l.l(u)<=0;)s=m(s),l=m(l);var c=y(s,1),d=y(l,1);for(l=y(l,2),s=y(s,2);!B(l);){var h=d.add(l);h.l(u)<=0&&(c=c.add(s),d=h),l=y(l,1),s=y(s,1)}return o=it(u,c.j(o)),new N(c,o)}for(c=k;u.l(o)>=0;){for(s=Math.max(1,Math.floor(u.m()/o.m())),l=Math.ceil(Math.log(s)/Math.LN2),l=l<=48?1:Math.pow(2,l-48),d=_(s),h=d.j(o);j(h)||h.l(u)>0;)s-=l,d=_(s),h=d.j(o);B(d)&&(d=P),c=c.add(d),u=it(u,h)}return new N(c,u)}e.B=function(u){return T(this,u).h},e.and=function(u){let o=Math.max(this.g.length,u.g.length),s=[];for(let l=0;l<o;l++)s[l]=this.i(l)&u.i(l);return new f(s,this.h&u.h)},e.or=function(u){let o=Math.max(this.g.length,u.g.length),s=[];for(let l=0;l<o;l++)s[l]=this.i(l)|u.i(l);return new f(s,this.h|u.h)},e.xor=function(u){let o=Math.max(this.g.length,u.g.length),s=[];for(let l=0;l<o;l++)s[l]=this.i(l)^u.i(l);return new f(s,this.h^u.h)};function m(u){let o=u.g.length+1,s=[];for(let l=0;l<o;l++)s[l]=u.i(l)<<1|u.i(l-1)>>>31;return new f(s,u.h)}function y(u,o){let s=o>>5;o%=32;let l=u.g.length-s,c=[];for(let d=0;d<l;d++)c[d]=o>0?u.i(d+s)>>>o|u.i(d+s+1)<<32-o:u.i(d+s);return new f(c,u.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,bo=Yn.Md5=n,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=x,Er=Yn.Integer=f}).apply(typeof Jn<"u"?Jn:typeof self<"u"?self:typeof window<"u"?window:{});var rt=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");var Ht="12.19.0";function di(e){Ht=e}var Ut=new Lt("@firebase/firestore");function ee(e,...t){if(Ut.logLevel<=q.DEBUG){let r=t.map(ln);Ut.debug(`Firestore (${Ht}): ${e}`,...r)}}function Ze(e,...t){if(Ut.logLevel<=q.ERROR){let r=t.map(ln);Ut.error(`Firestore (${Ht}): ${e}`,...r)}}function pi(e,...t){if(Ut.logLevel<=q.WARN){let r=t.map(ln);Ut.warn(`Firestore (${Ht}): ${e}`,...r)}}function ln(e){if(typeof e=="string")return e;try{return function(r){return JSON.stringify(r)}(e)}catch{return e}}function z(e,t,r){let n="Unexpected state";typeof t=="string"?n=t:r=t,gi(e,n,r)}function gi(e,t,r){let n=`FIRESTORE (${Ht}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(r!==void 0)try{n+=" CONTEXT: "+JSON.stringify(r)}catch{n+=" CONTEXT: "+r}throw Ze(n),new Error(n)}function st(e,t,r,n){let i="Unexpected state";typeof r=="string"?i=r:n=r,e||gi(t,i,n)}function he(e,t){return e}var S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},C=class extends _t{constructor(t,r){super(t,r),this.code=t,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Ie=class{constructor(t,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},Nr=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,r){t.enqueueRetryable(()=>r(rt.UNAUTHENTICATED))}shutdown(){}},Dr=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,r){this.changeListener=r,t.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}},Ne=class{constructor(t){this.auth=null,t.onInit(r=>{this.auth=r})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(st(typeof t.accessToken=="string",42297,{Z:t}),new Ie(t.accessToken,new rt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,r){}shutdown(){}},Sr=class{constructor(t,r,n){this.ee=t,this.te=r,this.re=n,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);let t=this.ie();return t&&this.ne.set("Authorization",t),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}},xr=class{constructor(t,r,n){this.ee=t,this.te=r,this.re=n}getToken(){return Promise.resolve(new Sr(this.ee,this.te,this.re))}start(t,r){t.enqueueRetryable(()=>r(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},De=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Se=class{constructor(t,r){this.se=r,this.appCheck=null,this.oe=null,Hn(t)&&t.settings.appCheckToken&&(this.oe=t.settings.appCheckToken),r.onInit(n=>{this.appCheck=n})}getToken(){return this.oe?Promise.resolve(new De(this.oe)):this.appCheck?this.appCheck.getToken().then(t=>t?(st(typeof t.token=="string",3470,{tokenResult:t}),new De(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,r){}shutdown(){}};var kr=class{constructor(t,r,n,i,a,f,p,g,_,x,k,P,U){this.databaseId=t,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=a,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=x,this.apiKey=k,this._customHeaders=P,this.grpcFlowControlWindow=U}},Rr="(default)",xe=class e{constructor(t,r){this.projectId=t,this.database=r||Rr}static empty(){return new e("","")}get isDefaultDatabase(){return this.database===Rr}isEqual(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}};function mi(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new C(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xe(e.options.projectId,t)}function Eo(e){let t=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(r);else for(let n=0;n<e;n++)r[n]=Math.floor(256*Math.random());return r}var Pr=class{static newId(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516),n="";for(;n.length<20;){let i=Eo(40);for(let a=0;a<i.length;++a)n.length<20&&i[a]<r&&(n+=t.charAt(i[a]%62))}return n}};function W(e,t){return e<t?-1:e>t?1:0}function Vr(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let i=e.charAt(n),a=t.charAt(n);if(i!==a)return Ar(i)===Ar(a)?W(i,a):Ar(i)?1:-1}return W(e.length,t.length)}var Ao=55296,To=57343;function Ar(e){let t=e.charCodeAt(0);return t>=Ao&&t<=To}function yi(e,t,r){return e.length===t.length&&e.every((n,i)=>r(n,t[i]))}var Xn="__name__",ke=class e{constructor(t,r,n){r===void 0?r=0:r>t.length&&z(637,{offset:r,range:t.length}),n===void 0?n=t.length-r:n>t.length-r&&z(1746,{length:n,range:t.length-r}),this.segments=t,this.offset=r,this.len=n}get length(){return this.len}isEqual(t){return e.comparator(this,t)===0}child(t){let r=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach(n=>{r.push(n)}):r.push(t),this.construct(r)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}forEach(t){for(let r=this.offset,n=this.limit();r<n;r++)t(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,r){let n=Math.min(t.length,r.length);for(let i=0;i<n;i++){let a=e.compareSegments(t.get(i),r.get(i));if(a!==0)return a}return W(t.length,r.length)}static compareSegments(t,r){let n=e.isNumericId(t),i=e.isNumericId(r);return n&&!i?-1:!n&&i?1:n&&i?e.extractNumericId(t).compare(e.extractNumericId(r)):Vr(t,r)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Er.fromString(t.substring(4,t.length-2))}},Y=class e extends ke{construct(t,r,n){return new e(t,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){let r=[];for(let n of t){if(n.indexOf("//")>=0)throw new C(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new e(r)}static emptyPath(){return new e([])}},Io=/^[_a-zA-Z][_a-zA-Z0-9]*$/,Nt=class Ft extends ke{construct(t,r,n){return new Ft(t,r,n)}static isValidIdentifier(t){return Io.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xn}static keyField(){return new Ft([Xn])}static fromServerFormat(t){let r=[],n="",i=0,a=()=>{if(n.length===0)throw new C(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""},f=!1;for(;i<t.length;){let p=t[i];if(p==="\\"){if(i+1===t.length)throw new C(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let g=t[i+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new C(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=g,i+=2}else p==="`"?(f=!f,i++):p!=="."||f?(n+=p,i++):(a(),i++)}if(a(),f)throw new C(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ft(r)}static emptyPath(){return new Ft([])}};var nt=class e{constructor(t){this.path=t}static fromPath(t){return new e(Y.fromString(t))}static fromName(t){return new e(Y.fromString(t).popFirst(5))}static empty(){return new e(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,r){return Y.comparator(t.path,r.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new e(new Y(t.slice()))}};function _i(e,t,r){if(!r)throw new C(S.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Zn(e){if(!nt.isDocumentKey(e))throw new C(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function ti(e){if(nt.isDocumentKey(e))throw new C(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function vi(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function fn(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{let t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":z(12329,{type:typeof e})}function de(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new C(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=fn(e);throw new C(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}function wi(e){let t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}var Ee=null;function No(){return Ee===null?Ee=function(){return 268435456+Math.round(2147483648*Math.random())}():Ee++,"0x"+Ee.toString(16)}function bi(e){return e==null}function Re(e){return e===0&&1/e==-1/0}var Tr="RestConnection",Do={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"},Cr=class{get ae(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.ue=r+"://"+t.host,this._e=`projects/${n}/databases/${i}`,this.ce=this.databaseId.database===Rr?`project_id=${n}`:`project_id=${n}&database_id=${i}`}le(t,r,n,i,a){let f=No(),p=this.he(t,r.toUriEncodedString());ee(Tr,`Sending RPC '${t}' ${f}:`,p,n);let g={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.fe(g,i,a);let{host:_}=new URL(p),x=or(_);return this.me(t,p,g,n,x).then(k=>(ee(Tr,`Received RPC '${t}' ${f}: `,k),k),k=>{throw pi(Tr,`RPC '${t}' ${f} failed with error: `,k,"url: ",p,"request:",n),k})}de(t,r,n,i,a,f){return this.le(t,r,n,i,a)}fe(t,r,n){if(t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ht}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),n&&n.headers.forEach((i,a)=>t[a]=i),this.databaseInfo._customHeaders)for(let i of Object.keys(this.databaseInfo._customHeaders))t[i]=this.databaseInfo._customHeaders[i]}he(t,r){let n=Do[t],i=`${this.ue}/v1/${r}:${n}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}};var ei,F;function ri(e){if(e===void 0)return Ze("RPC_ERROR","HTTP error has no status"),S.UNKNOWN;switch(e){case 200:return S.OK;case 400:return S.FAILED_PRECONDITION;case 401:return S.UNAUTHENTICATED;case 403:return S.PERMISSION_DENIED;case 404:return S.NOT_FOUND;case 409:return S.ABORTED;case 416:return S.OUT_OF_RANGE;case 429:return S.RESOURCE_EXHAUSTED;case 499:return S.CANCELLED;case 500:return S.UNKNOWN;case 501:return S.UNIMPLEMENTED;case 503:return S.UNAVAILABLE;case 504:return S.DEADLINE_EXCEEDED;default:return e>=200&&e<300?S.OK:e>=400&&e<500?S.FAILED_PRECONDITION:e>=500&&e<600?S.INTERNAL:S.UNKNOWN}}(F=ei||(ei={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";var Or=class extends Cr{Ee(t,r){throw new Error("Not supported by FetchConnection")}async me(t,r,n,i,a){let f=JSON.stringify(i),p;try{let g={method:"POST",headers:n,body:f};a&&(g.credentials="include"),p=await fetch(r,g)}catch(g){let _=g,x=_?.message,k=_?.cause?String(_.cause):void 0,P=(x&&k?`${x} (${k})`:x??k)??_?.statusText??String(g);throw new C(ri(_?.status),`Request failed with error: ${P}`)}if(!p.ok){let g=await p.json();Array.isArray(g)&&(g=g[0]);let _=g?.error?.message;throw new C(ri(p.status),`Request failed with error: ${_??p.statusText}`)}return p.json()}};function ni(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function pe(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}var Mr=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var Dt=class e{constructor(t){this.binaryString=t}static fromBase64String(t){let r=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Mr("Invalid base64 string: "+a):a}}(t);return new e(r)}static fromUint8Array(t){let r=function(i){let a="";for(let f=0;f<i.length;++f)a+=String.fromCharCode(i[f]);return a}(t);return new e(r)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){let n=new Uint8Array(r.length);for(let i=0;i<r.length;i++)n[i]=r.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}};Dt.EMPTY_BYTE_STRING=new Dt("");var So=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kt(e){if(st(!!e,39018),typeof e=="string"){let t=0,r=So.exec(e);if(st(!!r,46558,{timestamp:e}),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),t=Number(i)}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:K(e.seconds),nanos:K(e.nanos)}}function K(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function re(e){return typeof e=="string"?Dt.fromBase64String(e):Dt.fromUint8Array(e)}function ct(e,t){let r={typeString:e};return t&&(r.value=t),r}function ge(e,t){if(!vi(e))throw new C(S.INVALID_ARGUMENT,"JSON must be an object");let r;for(let n in t)if(t[n]){let i=t[n].typeString,a="value"in t[n]?{value:t[n].value}:void 0;if(!(n in e)){r=`JSON missing required field: '${n}'`;break}let f=e[n];if(i&&typeof f!==i){r=`JSON field '${n}' must be a ${i}.`;break}if(a!==void 0&&f!==a.value){r=`Expected '${n}' field to equal '${a.value}'`;break}}if(r)throw new C(S.INVALID_ARGUMENT,r);return!0}var ii=-62135596800,si=1e6,X=class e{static now(){return e.fromMillis(Date.now())}static fromDate(t){return e.fromMillis(t.getTime())}static fromMillis(t){let r=Math.floor(t/1e3),n=Math.floor((t-1e3*r)*si);return new e(r,n)}static fromInstant(t){if(!t||typeof t.Te!="bigint")throw new C(S.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return e._fromEpochNanoseconds(t.Te)}static _fromEpochNanoseconds(t){let r,n;if(t>=0n)r=Number(t/1000000000n),n=Number(t%1000000000n);else{let i=t%1000000000n;i===0n?(r=Number(t/1000000000n),n=0):(r=Number(t/1000000000n-1n),n=Number(i+1000000000n))}return new e(r,n)}constructor(t,r){if(this.seconds=t,this.nanoseconds=r,r<0)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new C(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(t<ii)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new C(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/si}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new C(S.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");let t=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(t)}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ge(t,e._jsonSchema))return new e(t.seconds,t.nanoseconds)}valueOf(){let t=this.seconds-ii;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:ct("string",X._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};function Ei(e){return(e?.mapValue?.fields||{}).__type__?.stringValue==="server_timestamp"}function Ai(e){let t=e.mapValue.fields.__previous_value__;return Ei(t)?Ai(t):t}function ne(e){let t=kt(e.mapValue.fields.__local_write_time__.timestampValue);return new X(t.seconds,t.nanos)}var Ti="__type__",xo="__max__",Ae={},Ii="__vector__",Pe="value";function Rt(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ei(e)?4:function(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===xo}(e)?9007199254740991:function(r){return(r?.mapValue?.fields||{})[Ti]?.stringValue===Ii}(e)?10:11:z(28295,{value:e})}function Ve(e,t,r){if(e===t)return!0;let n=Rt(e);if(n!==Rt(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ne(e).isEqual(ne(t));case 3:return function(a,f){if(typeof a.timestampValue=="string"&&typeof f.timestampValue=="string"&&a.timestampValue.length===f.timestampValue.length)return a.timestampValue===f.timestampValue;let p=kt(a.timestampValue),g=kt(f.timestampValue);return p.seconds===g.seconds&&p.nanos===g.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(a,f){return re(a.bytesValue).isEqual(re(f.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(a,f){return K(a.geoPointValue.latitude)===K(f.geoPointValue.latitude)&&K(a.geoPointValue.longitude)===K(f.geoPointValue.longitude)}(e,t);case 2:return function(a,f,p){if("integerValue"in a&&"integerValue"in f)return K(a.integerValue)===K(f.integerValue);let g,_;return!("doubleValue"in a)||!("doubleValue"in f)?!1:(g=K(a.doubleValue),_=K(f.doubleValue),g===_?Re(g)===Re(_):!!(p===void 0||p.Pe)&&isNaN(g)&&isNaN(_))}(e,t,r);case 9:return yi(e.arrayValue.values||[],t.arrayValue.values||[],(i,a)=>Ve(i,a,r));case 10:case 11:return function(a,f,p){let g=a.mapValue.fields||{},_=f.mapValue.fields||{};if(ni(g)!==ni(_))return!1;for(let x in g)if(g.hasOwnProperty(x)&&(_[x]===void 0||!Ve(g[x],_[x],p)))return!1;return!0}(e,t,r);default:return z(52216,{left:e})}}function ie(e,t){return(e.values||[]).find(r=>Ve(r,t))!==void 0}function Ce(e,t){if(e===t)return 0;let r=Rt(e),n=Rt(t);if(r!==n)return W(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return W(e.booleanValue,t.booleanValue);case 2:return function(a,f){let p=K(a.integerValue||a.doubleValue),g=K(f.integerValue||f.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(e,t);case 3:return oi(e.timestampValue,t.timestampValue);case 4:return oi(ne(e),ne(t));case 5:return Vr(e.stringValue,t.stringValue);case 6:return function(a,f){let p=re(a),g=re(f);return p.compareTo(g)}(e.bytesValue,t.bytesValue);case 7:return function(a,f){let p=a.split("/"),g=f.split("/");for(let _=0;_<p.length&&_<g.length;_++){let x=W(p[_],g[_]);if(x!==0)return x}return W(p.length,g.length)}(e.referenceValue,t.referenceValue);case 8:return function(a,f){let p=W(K(a.latitude),K(f.latitude));return p!==0?p:W(K(a.longitude),K(f.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return ai(e.arrayValue,t.arrayValue);case 10:return function(a,f){let p=a.fields||{},g=f.fields||{},_=p[Pe]?.arrayValue,x=g[Pe]?.arrayValue,k=W(_?.values?.length||0,x?.values?.length||0);return k!==0?k:ai(_,x)}(e.mapValue,t.mapValue);case 11:return function(a,f){if(a===Ae&&f===Ae)return 0;if(a===Ae)return 1;if(f===Ae)return-1;let p=a.fields||{},g=Object.keys(p),_=f.fields||{},x=Object.keys(_);g.sort(),x.sort();for(let k=0;k<g.length&&k<x.length;++k){let P=Vr(g[k],x[k]);if(P!==0)return P;let U=Ce(p[g[k]],_[x[k]]);if(U!==0)return U}return W(g.length,x.length)}(e.mapValue,t.mapValue);default:throw z(23264,{Re:r})}}function oi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return W(e,t);let r=kt(e),n=kt(t),i=W(r.seconds,n.seconds);return i!==0?i:W(r.nanos,n.nanos)}function ai(e,t){let r=e.values||[],n=t.values||[];for(let i=0;i<r.length&&i<n.length;++i){let a=Ce(r[i],n[i]);if(a!==void 0&&a!==0)return a}return W(r.length,n.length)}function Ni(e){return!!e&&"arrayValue"in e}function ui(e){return!!e&&"nullValue"in e}function ci(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Ir(e){return!!e&&"mapValue"in e}function Xt(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return pe(e.mapValue.fields,(r,n)=>t.mapValue.fields[r]=Xt(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=Xt(e.arrayValue.values[r]);return t}return{...e}}var Oe=class{constructor(t,r){this.position=t,this.inclusive=r}};var Me=class{},gt=class e extends Me{constructor(t,r,n){super(),this.field=t,this.op=r,this.value=n}static create(t,r,n){return t.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(t,r,n):new Lr(t,r,n):r==="array-contains"?new $r(t,n):r==="in"?new Ur(t,n):r==="not-in"?new qr(t,n):r==="array-contains-any"?new jr(t,n):new e(t,r,n)}static createKeyFieldInFilter(t,r,n){return r==="in"?new Fr(t,n):new Br(t,n)}matches(t){let r=t.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison(Ce(r,this.value)):r!==null&&Rt(this.value)===Rt(r)&&this.matchesComparison(Ce(r,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},Le=class e extends Me{constructor(t,r){super(),this.filters=t,this.op=r,this.Ae=null}static create(t,r){return new e(t,r)}matches(t){return function(n){return n.op==="and"}(this)?this.filters.find(r=>!r.matches(t))===void 0:this.filters.find(r=>r.matches(t))!==void 0}getFlattenedFilters(){return this.Ae!==null||(this.Ae=this.filters.reduce((t,r)=>t.concat(r.getFlattenedFilters()),[])),this.Ae}getFilters(){return Object.assign([],this.filters)}};var Lr=class extends gt{constructor(t,r,n){super(t,r,n),this.key=nt.fromName(n.referenceValue)}matches(t){let r=nt.comparator(t.key,this.key);return this.matchesComparison(r)}},Fr=class extends gt{constructor(t,r){super(t,"in",r),this.keys=Di("in",r)}matches(t){return this.keys.some(r=>r.isEqual(t.key))}},Br=class extends gt{constructor(t,r){super(t,"not-in",r),this.keys=Di("not-in",r)}matches(t){return!this.keys.some(r=>r.isEqual(t.key))}};function Di(e,t){return(t.arrayValue?.values||[]).map(r=>nt.fromName(r.referenceValue))}var $r=class extends gt{constructor(t,r){super(t,"array-contains",r)}matches(t){let r=t.data.field(this.field);return Ni(r)&&ie(r.arrayValue,this.value)}},Ur=class extends gt{constructor(t,r){super(t,"in",r)}matches(t){let r=t.data.field(this.field);return r!==null&&ie(this.value.arrayValue,r)}},qr=class extends gt{constructor(t,r){super(t,"not-in",r)}matches(t){if(ie(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let r=t.data.field(this.field);return r!==null&&r.nullValue===void 0&&!ie(this.value.arrayValue,r)}},jr=class extends gt{constructor(t,r){super(t,"array-contains-any",r)}matches(t){let r=t.data.field(this.field);return!(!Ni(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>ie(this.value.arrayValue,n))}};var se=class{constructor(t,r="asc"){this.field=t,this.dir=r}};var et=class e{static fromTimestamp(t){return new e(t)}static min(){return new e(new X(0,0))}static max(){return new e(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Gr=class e{constructor(t,r){this.comparator=t,this.root=r||dt.EMPTY}insert(t,r){return new e(this.comparator,this.root.insert(t,r,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,dt.BLACK,null,null))}get(t){let r=this.root;for(;!r.isEmpty();){let n=this.comparator(t,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(t){let r=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(t,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((r,n)=>(t(r,n),!1))}toString(){let t=[];return this.inorderTraversal((r,n)=>(t.push(`${r}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new $t(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new $t(this.root,t,this.comparator,!1)}getReverseIterator(){return new $t(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new $t(this.root,t,this.comparator,!0)}},$t=class{constructor(t,r,n,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=r?n(t.key,r):1,r&&i&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),r={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},dt=class e{constructor(t,r,n,i,a){this.key=t,this.value=r,this.color=n??e.RED,this.left=i??e.EMPTY,this.right=a??e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,r,n,i,a){return new e(t??this.key,r??this.value,n??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,r,n){let i=this,a=n(t,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(t,r,n),null):a===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(t,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,r){let n,i=this;if(r(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(t,i.key)===0){if(i.right.isEmpty())return e.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,r)}checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});let t=this.left.check();if(t!==this.right.check())throw z(27949);return t+(this.isRed()?0:1)}};dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(t,r,n,i,a){return this}insert(t,r,n){return new dt(t,r)}remove(t,r){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Fe=class e{constructor(t){this.comparator=t,this.data=new Gr(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((r,n)=>(t(r),!1))}forEachInRange(t,r){let n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;r(i.key)}}forEachWhile(t,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){let r=this.data.getIteratorFrom(t);return r.hasNext()?r.getNext().key:null}getIterator(){return new Be(this.data.getIterator())}getIteratorFrom(t){return new Be(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let r=this;return r.size<t.size&&(r=t,t=this),t.forEach(n=>{r=r.add(n)}),r}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let r=this.data.getIterator(),n=t.data.getIterator();for(;r.hasNext();){let i=r.getNext().key,a=n.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){let t=[];return this.forEach(r=>{t.push(r)}),t}toString(){let t=[];return this.forEach(r=>t.push(r)),"SortedSet("+t.toString()+")"}copy(t){let r=new e(this.comparator);return r.data=t,r}},Be=class{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var $e=class e{constructor(t){this.fields=t,t.sort(Nt.comparator)}static empty(){return new e([])}unionWith(t){let r=new Fe(Nt.comparator);for(let n of this.fields)r=r.add(n);for(let n of t)r=r.add(n);return new e(r.toArray())}covers(t){for(let r of this.fields)if(r.isPrefixOf(t))return!0;return!1}isEqual(t){return yi(this.fields,t.fields,(r,n)=>r.isEqual(n))}};var ut=class e{constructor(t){this.value=t}static empty(){return new e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let r=this.value;for(let n=0;n<t.length-1;++n)if(r=(r.mapValue.fields||{})[t.get(n)],!Ir(r))return null;return r=(r.mapValue.fields||{})[t.lastSegment()],r||null}}set(t,r){this.getFieldsMap(t.popLast())[t.lastSegment()]=Xt(r)}setAll(t){let r=Nt.emptyPath(),n={},i=[];t.forEach((f,p)=>{if(!r.isImmediateParentOf(p)){let g=this.getFieldsMap(r);this.applyChanges(g,n,i),n={},i=[],r=p.popLast()}f?n[p.lastSegment()]=Xt(f):i.push(p.lastSegment())});let a=this.getFieldsMap(r);this.applyChanges(a,n,i)}delete(t){let r=this.field(t.popLast());Ir(r)&&r.mapValue.fields&&delete r.mapValue.fields[t.lastSegment()]}isEqual(t){return Ve(this.value,t.value)}getFieldsMap(t){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=r.mapValue.fields[t.get(n)];Ir(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[t.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(t,r,n){pe(r,(i,a)=>t[i]=a);for(let i of n)delete t[i]}clone(){return new e(Xt(this.value))}};var oe=class e{constructor(t,r,n,i,a,f,p){this.key=t,this.documentType=r,this.version=n,this.readTime=i,this.createTime=a,this.data=f,this.documentState=p}static newInvalidDocument(t){return new e(t,0,et.min(),et.min(),et.min(),ut.empty(),0)}static newFoundDocument(t,r,n,i){return new e(t,1,r,et.min(),n,i,0)}static newNoDocument(t,r){return new e(t,2,r,et.min(),et.min(),ut.empty(),0)}static newUnknownDocument(t,r){return new e(t,3,r,et.min(),et.min(),ut.empty(),2)}convertToFoundDocument(t,r){return!this.createTime.isEqual(et.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=et.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Hr=class{constructor(t,r=null,n=[],i=[],a=null,f=null,p=null){this.path=t,this.collectionGroup=r,this.orderBy=n,this.filters=i,this.limit=a,this.startAt=f,this.endAt=p,this.Ie=null}};function li(e,t=null,r=[],n=[],i=null,a=null,f=null){return new Hr(e,t,r,n,i,a,f)}var zr=class{constructor(t,r=null,n=[],i=[],a=null,f="F",p=null,g=null){this.path=t,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=a,this.limitType=f,this.startAt=p,this.endAt=g,this.pe=null,this.ye=null,this.we=null,this.startAt,this.endAt}};function ko(e){let t=he(e);if(t.pe===null){t.pe=[];let r=new Set;for(let a of t.explicitOrderBy)t.pe.push(a),r.add(a.field.canonicalString());let n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Fe(Nt.comparator);return f.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(p=p.add(_.field))})}),p})(t).forEach(a=>{r.has(a.canonicalString())||a.isKeyField()||t.pe.push(new se(a,n))}),r.has(Nt.keyField().canonicalString())||t.pe.push(new se(Nt.keyField(),n))}return t.pe}function Ro(e){let t=he(e);return t.ye||(t.ye=Po(t,ko(e))),t.ye}function Po(e,t){if(e.limitType==="F")return li(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{let a=i.dir==="desc"?"asc":"desc";return new se(i.field,a)});let r=e.endAt?new Oe(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Oe(e.startAt.position,e.startAt.inclusive):null;return li(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}function Si(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Re(t)?"-0":t}}function Vo(e,t,r){return function(i){return typeof i=="number"&&Number.isInteger(i)&&!Re(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}(t)?function(i){return{integerValue:""+i}}(t):Si(e,t)}var qt=class{constructor(){this._=void 0}},Ue=class extends qt{},Wr=class extends qt{constructor(t){super(),this.elements=t}},Kr=class extends qt{constructor(t){super(),this.elements=t}},ae=class extends qt{constructor(t,r){super(),this.serializer=t,this.ge=r}},Qr=class extends ae{},Jr=class extends ae{},Yr=class extends ae{};var Xr=class{constructor(t,r){this.field=t,this.transform=r}},qe=class e{constructor(t,r){this.updateTime=t,this.exists=r}static none(){return new e}static exists(t){return new e(void 0,t)}static updateTime(t){return new e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}},jt=class{},Zr=class extends jt{constructor(t,r,n,i=[]){super(),this.key=t,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},je=class extends jt{constructor(t,r,n,i,a=[]){super(),this.key=t,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}},Ge=class extends jt{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},He=class extends jt{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var Co={asc:"ASCENDING",desc:"DESCENDING"},Oo={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mo={and:"AND",or:"OR"},tn=class{constructor(t,r){this.databaseId=t,this.useProto3Json=r}};function Te(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lo(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Fo(e,t){return Te(e,t.toTimestamp())}function Zt(e){return st(!!e,49232),et.fromTimestamp(function(r){let n=kt(r);return new X(n.seconds,n.nanos)}(e))}function hn(e,t){return en(e,t).canonicalString()}function en(e,t){let r=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?r:r.child(t)}function ze(e,t){return hn(e.databaseId,t.path)}function rn(e,t){let r=function(i){let a=Y.fromString(i);return st(ki(a),10190,{key:a.toString()}),a}(t);if(r.get(1)!==e.databaseId.projectId)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new C(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new nt(function(i){return st(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}(r))}function fi(e,t,r){return{name:ze(e,t),fields:r.value.mapValue.fields}}function Bo(e,t){return"found"in t?function(n,i){st(!!i.found,43571),i.found.name,i.found.updateTime;let a=rn(n,i.found.name),f=Zt(i.found.updateTime),p=i.found.createTime?Zt(i.found.createTime):et.min(),g=new ut({mapValue:{fields:i.found.fields}});return oe.newFoundDocument(a,f,p,g)}(e,t):"missing"in t?function(n,i){st(!!i.missing,3894),st(!!i.readTime,22933);let a=rn(n,i.missing),f=Zt(i.readTime);return oe.newNoDocument(a,f)}(e,t):z(7234,{result:t})}function $o(e,t){let r;if(t instanceof Zr)r={update:fi(e,t.key,t.value)};else if(t instanceof Ge)r={delete:ze(e,t.key)};else if(t instanceof je)r={update:fi(e,t.key,t.data),updateMask:Ho(t.fieldMask)};else{if(!(t instanceof He))return z(16599,{Fe:t.type});r={verify:ze(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(n=>function(a,f){let p=f.transform;if(p instanceof Ue)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Wr)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Kr)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Qr)return{fieldPath:f.field.canonicalString(),increment:p.ge};if(p instanceof Jr)return{fieldPath:f.field.canonicalString(),minimum:p.ge};if(p instanceof Yr)return{fieldPath:f.field.canonicalString(),maximum:p.ge};throw z(20930,{transform:f.transform})}(0,n))),t.precondition.isNone||(r.currentDocument=function(i,a){return a.updateTime!==void 0?{updateTime:Fo(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:z(27497)}(e,t.precondition)),r}function Uo(e,t){let r={structuredQuery:{}},n=t.path,i;t.collectionGroup!==null?(i=n,r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=function(_,x){return hn(_.databaseId,x)}(e,i);let a=function(_){if(_.length!==0)return xi(Le.create(_,"and"))}(t.filters);a&&(r.structuredQuery.where=a);let f=function(_){if(_.length!==0)return _.map(x=>function(P){return{field:Bt(P.field),direction:qo(P.dir)}}(x))}(t.orderBy);f&&(r.structuredQuery.orderBy=f);let p=function(_,x){return _.useProto3Json||bi(x)?x:{value:x}}(e,t.limit);return p!==null&&(r.structuredQuery.limit=p),t.startAt&&(r.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(r.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{ve:r,parent:i}}function qo(e){return Co[e]}function jo(e){return Oo[e]}function Go(e){return Mo[e]}function Bt(e){return{fieldPath:e.canonicalString()}}function xi(e){return e instanceof gt?function(r){if(r.op==="=="){if(ci(r.value))return{unaryFilter:{field:Bt(r.field),op:"IS_NAN"}};if(ui(r.value))return{unaryFilter:{field:Bt(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(ci(r.value))return{unaryFilter:{field:Bt(r.field),op:"IS_NOT_NAN"}};if(ui(r.value))return{unaryFilter:{field:Bt(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Bt(r.field),op:jo(r.op),value:r.value}}}(e):e instanceof Le?function(r){let n=r.getFilters().map(i=>xi(i));return n.length===1?n[0]:{compositeFilter:{op:Go(r.op),filters:n}}}(e):z(54877,{filter:e})}function Ho(e){let t=[];return e.fields.forEach(r=>t.push(r.canonicalString())),{fieldPaths:t}}function ki(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function Ri(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}function dn(e){return new tn(e,!0)}var nn=class{},sn=class extends nn{constructor(t,r,n,i){super(),this.authCredentials=t,this.appCheckCredentials=r,this.connection=n,this.serializer=i,this.be=!1}De(){if(this.be)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.")}le(t,r,n,i){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,f])=>this.connection.le(t,en(r,n),i,a,f)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new C(S.UNKNOWN,a.toString())})}de(t,r,n,i,a){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([f,p])=>this.connection.de(t,en(r,n),i,f,p,a)).catch(f=>{throw f.name==="FirebaseError"?(f.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new C(S.UNKNOWN,f.toString())})}terminate(){this.be=!0,this.connection.terminate()}};async function Pi(e,t){let r=he(e),n={writes:t.map(i=>$o(r.serializer,i))};await r.le("Commit",r.serializer.databaseId,Y.emptyPath(),n)}async function Vi(e,t){let r=he(e),n={documents:t.map(p=>ze(r.serializer,p))},i=await r.de("BatchGetDocuments",r.serializer.databaseId,Y.emptyPath(),n,t.length),a=new Map;i.forEach(p=>{let g=Bo(r.serializer,p);a.set(g.key.toString(),g)});let f=[];return t.forEach(p=>{let g=a.get(p.toString());st(!!g,55234,{key:p}),f.push(g)}),f}async function zo(e,t){let r=he(e),{ve:n,parent:i}=Uo(r.serializer,Ro(t));return(await r.de("RunQuery",r.serializer.databaseId,i,{structuredQuery:n.structuredQuery})).filter(a=>!!a.document).map(a=>function(p,g,_){let x=rn(p,g.name),k=Zt(g.updateTime),P=g.createTime?Zt(g.createTime):et.min(),U=new ut({mapValue:{fields:g.fields}}),B=oe.newFoundDocument(x,k,P,U);return _?B.setHasCommittedMutations():B}(r.serializer,a.document,void 0))}var Ci="ComponentProvider",te=new Map;function tr(e){if(e._terminated)throw new C(S.FAILED_PRECONDITION,"The client has already been terminated.");if(!te.has(e)){ee(Ci,"Initializing Datastore");let t=function(a){return new Or(a)}(function(a,f,p,g,_){return new kr(a,f,p,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,wi(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator,g,_._customHeaders,_.grpcFlowControlWindow)}(e._databaseId,e.app.options.appId||"",e._persistenceKey,e.app.options.apiKey,e._freezeSettings())),r=dn(e._databaseId),n=function(a,f,p,g){return new sn(a,f,p,g)}(e._authCredentials,e._appCheckCredentials,t,r);te.set(e,n)}return te.get(e)}var Wo=1048576,Oi="firestore.googleapis.com",hi=!0,We=class{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new C(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Oi,this.ssl=hi}else this.host=t.host,this.ssl=t.ssl??hi;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t._customHeaders&&(this._customHeaders={...t._customHeaders}),t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Wo)throw new C(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}if(function(n,i,a,f){if(i===!0&&f===!0)throw new C(S.INVALID_ARGUMENT,`${n} and ${a} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wi(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new C(S.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams,t.grpcFlowControlWindow!==void 0){if(typeof t.grpcFlowControlWindow!="number"||t.grpcFlowControlWindow<=0||t.grpcFlowControlWindow>2147483647||!Number.isInteger(t.grpcFlowControlWindow))throw new C(S.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=t.grpcFlowControlWindow}}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams&&this.grpcFlowControlWindow===t.grpcFlowControlWindow&&function(n,i){if(n===i)return!0;if(!n||!i)return!1;let a=Object.keys(n),f=Object.keys(i);if(a.length!==f.length)return!1;for(let p of a)if(n[p]!==i[p])return!1;return!0}(this._customHeaders,t._customHeaders)}},Pt=class{constructor(t,r,n,i){this._authCredentials=t,this._appCheckCredentials=r,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new We({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new C(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new C(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new We(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Nr;switch(n.type){case"firstParty":return new xr(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new C(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){let n=te.get(r);n&&(ee(Ci,"Removing Datastore"),te.delete(r),n.terminate())}(this),Promise.resolve()}};function pn(e,t){let r=typeof e=="object"?e:Wn(),n=typeof e=="string"?e:t||"(default)",i=Gn(r,"firestore/lite").getImmediate({identifier:n});if(!i._initialized){let a=Dn("firestore");a&&Mi(i,...a)}return i}function Mi(e,t,r,n={}){e=de(e,Pt);let i=or(t),a=e._getSettings(),f={...a,emulatorOptions:e._getEmulatorOptions()},p=`${t}:${r}`;i&&Rn(`https://${p}`),a.host!==Oi&&a.host!==p&&pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let g={...a,host:p,ssl:i,emulatorOptions:n};if(!St(g,f)&&(e._setSettings(g),n.mockUserToken)){let _,x;if(typeof n.mockUserToken=="string")_=n.mockUserToken,x=rt.MOCK_USER;else{_=Sn(n.mockUserToken,e._app?.options.projectId);let k=n.mockUserToken.sub||n.mockUserToken.user_id;if(!k)throw new C(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new rt(k)}e._authCredentials=new Dr(new Ie(_,x))}}var ue=class e{constructor(t,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new e(this.firestore,t,this._query)}},Z=class e{constructor(t,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Et(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new e(this.firestore,t,this._key)}toJSON(){return{type:e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,r,n){if(ge(r,e._jsonSchema))return new e(t,n||null,new nt(Y.fromString(r.referencePath)))}};Z._jsonSchemaVersion="firestore/documentReference/1.0",Z._jsonSchema={type:ct("string",Z._jsonSchemaVersion),referencePath:ct("string")};var Et=class e extends ue{constructor(t,r,n){super(t,r,function(a){return new zr(a)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new Z(this.firestore,null,new nt(t))}withConverter(t){return new e(this.firestore,t,this._path)}};function gn(e,t,...r){if(e=ft(e),_i("collection","path",t),e instanceof Pt){let n=Y.fromString(t,...r);return ti(n),new Et(e,null,n)}{if(!(e instanceof Z||e instanceof Et))throw new C(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(Y.fromString(t,...r));return ti(n),new Et(e.firestore,null,n)}}function Ct(e,t,...r){if(e=ft(e),arguments.length===1&&(t=Pr.newId()),_i("doc","path",t),e instanceof Pt){let n=Y.fromString(t,...r);return Zn(n),new Z(e,null,new nt(n))}{if(!(e instanceof Z||e instanceof Et))throw new C(S.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(Y.fromString(t,...r));return Zn(n),new Z(e.firestore,e instanceof Et?e.converter:null,new nt(n))}}var At=class e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new e(Dt.fromBase64String(t))}catch(r){throw new C(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t){return new e(Dt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ge(t,e._jsonSchema))return e.fromBase64String(t.bytes)}};At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:ct("string",At._jsonSchemaVersion),bytes:ct("string")};var Gt=class{constructor(...t){for(let r=0;r<t.length;++r)if(t[r].length===0)throw new C(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Nt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}};var Vt=class{constructor(t){this._methodName=t}};var Tt=class e{constructor(t,r){if(!isFinite(t)||t<-90||t>90)throw new C(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(r)||r<-180||r>180)throw new C(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=t,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:e._jsonSchemaVersion}}static fromJSON(t){if(ge(t,e._jsonSchema))return new e(t.latitude,t.longitude)}};Tt._jsonSchemaVersion="firestore/geoPoint/1.0",Tt._jsonSchema={type:ct("string",Tt._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};var pt=class e{constructor(t){this._values=(t||[]).map(r=>r)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let a=0;a<n.length;++a)if(n[a]!==i[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ge(t,e._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(r=>typeof r=="number"))return new e(t.vectorValues);throw new C(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};pt._jsonSchemaVersion="firestore/vectorValue/1.0",pt._jsonSchema={type:ct("string",pt._jsonSchemaVersion),vectorValues:ct("object")};var Ko=/^__.*__$/;var Ke=class{constructor(t,r,n){this.data=t,this.fieldMask=r,this.fieldTransforms=n}toMutation(t,r){return new je(t,this.data,this.fieldMask,r,this.fieldTransforms)}};function Li(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:e})}}var on=class e{constructor(t,r,n,i,a,f){this.settings=t,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=i,a===void 0&&this.validatePath(),this.fieldTransforms=a||[],this.fieldMask=f||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new e({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){let r=this.path?.child(t),n=this.contextWith({path:r,arrayElement:!1});return n.validatePathSegment(t),n}childContextForFieldPath(t){let r=this.path?.child(t),n=this.contextWith({path:r,arrayElement:!1});return n.validatePath(),n}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Ye(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(r=>t.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>t.isPrefixOf(r.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(Li(this.dataSource)&&Ko.test(t))throw this.createError('Document fields cannot begin and end with "__"')}},an=class{constructor(t,r,n){this.databaseId=t,this.ignoreUndefinedProperties=r,this.serializer=n||dn(t)}createContext(t,r,n,i=!1){return new on({dataSource:t,methodName:r,targetDoc:n,path:Nt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function Fi(e){let t=e._freezeSettings(),r=dn(e._databaseId);return new an(e._databaseId,!!t.ignoreUndefinedProperties,r)}var Qe=class e extends Vt{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof e}};var un=class e extends Vt{_toFieldTransform(t){return new Xr(t.path,new Ue)}isEqual(t){return t instanceof e}};function Bi(e,t,r,n){let i=e.createContext(1,t,r);ji("Data must be an object, but it was:",i,n);let a=[],f=ut.empty();pe(n,(g,_)=>{let x=Gi(t,g,r);_=ft(_);let k=i.childContextForFieldPath(x);if(_ instanceof Qe)a.push(x);else{let P=er(_,k);P!=null&&(a.push(x),f.set(x,P))}});let p=new $e(a);return new Ke(f,p,i.fieldTransforms)}function $i(e,t,r,n,i,a){let f=e.createContext(1,t,r),p=[Je(t,n,r)],g=[i];if(a.length%2!=0)throw new C(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let P=0;P<a.length;P+=2)p.push(Je(t,a[P])),g.push(a[P+1]);let _=[],x=ut.empty();for(let P=p.length-1;P>=0;--P)if(!Yo(_,p[P])){let U=p[P],B=g[P];B=ft(B);let j=f.childContextForFieldPath(U);if(B instanceof Qe)_.push(U);else{let $=er(B,j);$!=null&&(_.push(U),x.set(U,$))}}let k=new $e(_);return new Ke(x,k,f.fieldTransforms)}function er(e,t,r){if(qi(e=ft(e)))return ji("Unsupported field value:",t,e),Qo(e,t);if(e instanceof Vt)return function(i,a){if(!Li(a.dataSource))throw a.createError(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.createError(`${i._methodName}() is not currently supported inside arrays`);let f=i._toFieldTransform(a);f&&a.fieldTransforms.push(f)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(i,a){let f=[],p=0;for(let g of i){let _=er(g,a.childContextForArray(p));_==null&&(_={nullValue:"NULL_VALUE"}),f.push(_),p++}return{arrayValue:{values:f}}}(e,t)}return function(i,a,f){if((i=ft(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return Vo(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){let p=X.fromDate(i);return{timestampValue:Te(a.serializer,p)}}if(i instanceof X){let p=new X(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Te(a.serializer,p)}}if(Ui(i)){let p=X.fromInstant(i),g=new X(p.seconds,1e3*Math.floor(p.nanoseconds/1e3));return{timestampValue:Te(a.serializer,g)}}if(i instanceof Tt)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof At)return{bytesValue:Lo(a.serializer,i._byteString)};if(i instanceof Z){let p=a.databaseId,g=i.firestore._databaseId;if(!g.isEqual(p))throw a.createError(`Document reference is for database ${g.projectId}/${g.database} but should be for database ${p.projectId}/${p.database}`);return{referenceValue:hn(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof pt)return function(g,_){let x=g instanceof pt?g.toArray():g;return{mapValue:{fields:{[Ti]:{stringValue:Ii},[Pe]:{arrayValue:{values:x.map(P=>{if(typeof P!="number")throw _.createError("VectorValues must only contain numeric values.");return Si(_.serializer,P)})}}}}}}(i,a);if(Ri(i))return i._toProto(a.serializer);throw a.createError(`Unsupported field value: ${fn(i)}`)}(e,t)}function Qo(e,t){let r={};return function(i){for(let a in i)if(Object.prototype.hasOwnProperty.call(i,a))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):pe(e,(n,i)=>{let a=er(i,t.childContextForField(n));a!=null&&(r[n]=a)}),{mapValue:{fields:r}}}function Ui(e){if(typeof e!="object"||e===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&e instanceof Temporal.Instant)return!0;let t=e;return t[Symbol.toStringTag]==="Temporal.Instant"&&typeof t.Te=="bigint"}function qi(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof X||e instanceof Tt||e instanceof At||e instanceof Z||e instanceof Vt||e instanceof pt||Ui(e)||Ri(e))}function ji(e,t,r){if(!qi(r)||!vi(r)){let n=fn(r);throw n==="an object"?t.createError(e+" a custom object"):t.createError(e+" "+n)}}function Je(e,t,r){if((t=ft(t))instanceof Gt)return t._internalPath;if(typeof t=="string")return Gi(e,t);throw Ye("Field path arguments must be of type string or ",e,!1,void 0,r)}var Jo=new RegExp("[~\\*/\\[\\]]");function Gi(e,t,r){if(t.search(Jo)>=0)throw Ye(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new Gt(...t.split("."))._internalPath}catch{throw Ye(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function Ye(e,t,r,n,i){let a=n&&!n.isEmpty(),f=i!==void 0,p=`Function ${t}() called with invalid data`;r&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(a||f)&&(g+=" (found",a&&(g+=` in field ${n}`),f&&(g+=` in document ${i}`),g+=")"),new C(S.INVALID_ARGUMENT,p+e+g)}function Yo(e,t){return e.some(r=>r.isEqual(t))}var ce=class{constructor(t,r,n,i,a){this._firestore=t,this._userDataWriter=r,this._key=n,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Z(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let t=new le(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){let r=this._document.data.field(Je("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r)}}},le=class extends ce{data(){return super.data()}},Xe=class{constructor(t,r){this._docs=r,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,r){this._docs.forEach(t,r)}};var cn=class{convertValue(t,r="none"){switch(Rt(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(re(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw z(62114,{value:t})}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){let n={};return pe(t,(i,a)=>{n[i]=this.convertValue(a,r)}),n}convertVectorValue(t){let r=t.fields?.[Pe].arrayValue?.values?.map(n=>K(n.doubleValue));return new pt(r)}convertGeoPoint(t){return new Tt(K(t.latitude),K(t.longitude))}convertArray(t,r){return(t.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(t,r){switch(r){case"previous":let n=Ai(t);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(ne(t));default:return null}}convertTimestamp(t){let r=kt(t);return new X(r.seconds,r.nanos)}convertDocumentKey(t,r){let n=Y.fromString(t);st(ki(n),9688,{name:t});let i=new xe(n.get(1),n.get(3)),a=new nt(n.popFirst(5));return i.isEqual(r)||Ze(`A document reference to ${a} refers to a different database (${i.projectId}/${i.database}), which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),a}};var fe=class extends cn{constructor(t){super(),this.firestore=t}convertBytes(t){return new At(t)}convertReference(t){let r=this.convertDocumentKey(t,this.firestore._databaseId);return new Z(this.firestore,null,r)}};function me(e){let t=tr((e=de(e,Z)).firestore),r=new fe(e.firestore);return Vi(t,[e._key]).then(n=>{st(n.length===1,15618);let i=n[0];return new ce(e.firestore,r,e._key,i.isFoundDocument()?i:null,e.converter)})}function mn(e){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new C(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((e=de(e,ue))._query);let t=tr(e.firestore),r=new fe(e.firestore);return zo(t,e._query).then(n=>{let i=n.map(a=>new le(e.firestore,r,a.key,a,e.converter));return e._query.limitType==="L"&&i.reverse(),new Xe(e,i)})}function rr(e,t,r,...n){let i=Fi((e=de(e,Z)).firestore),a;return a=typeof(t=ft(t))=="string"||t instanceof Gt?$i(i,"updateDoc",e._key,t,r,n):Bi(i,"updateDoc",e._key,t),Pi(tr(e.firestore),[a.toMutation(e._key,qe.exists(!0))])}function zt(){return new un("serverTimestamp")}var Hi="4.17.2";(function(){di(`${zn}_lite`),Jt(new vt("firestore/lite",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),a=new Pt(new Ne(t.getProvider("auth-internal")),new Se(i,t.getProvider("app-check-internal")),mi(i,r),i);return n&&a._setSettings(n),a},"PUBLIC").setMultipleInstances(!0)),It("firestore-lite",Hi,""),It("firestore-lite",Hi,"esm2020")})();var Yi=as(Qi()),Xo={apiKey:"AIzaSyBqU09QQwVxfxZFDgcuMnvOCo0oMZ5f5a0",authDomain:"invitaciones-foto-graciela.firebaseapp.com",projectId:"invitaciones-foto-graciela",storageBucket:"invitaciones-foto-graciela.firebasestorage.app",appId:"1:557591079202:web:f3612d46e649392cae5d7b"},Wt=pn(br(Xo,"fg-kit")),J=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Ji=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\bfamilia\b/g,"").trim(),Zo=(e,t)=>`https://wa.me/${String(e||"").replace(/\D/g,"").replace(/^(\d{10})$/,"52$1")}?text=${encodeURIComponent(t)}`,ta=30*60*1e3,ea=`
.fgk{--a:var(--fgk-acento,#A9675A);--t:var(--fgk-tinta,#4A2E22);--s:var(--fgk-suave,#7b675c);--f:var(--fgk-fondo,#FBF6F1);--c:var(--fgk-tarjeta,#fff);
  font-family:var(--fgk-sans,inherit);color:var(--t);max-width:460px;margin:0 auto;text-align:center}
.fgk *{box-sizing:border-box}
.fgk h3{font-family:var(--fgk-serif,Georgia,serif);font-weight:600;font-size:1.7rem;line-height:1.2;margin:0 0 6px}
.fgk p{margin:6px 0;color:var(--s)}
.fgk input{width:100%;padding:14px 16px;border-radius:14px;border:1.5px solid rgba(0,0,0,.14);background:var(--c);font:inherit;font-size:1.05rem;color:var(--t);outline:none;text-align:center}
.fgk input:focus{border-color:var(--a)}
.fgk-bt{display:inline-flex;align-items:center;justify-content:center;gap:8px;min-height:50px;padding:0 24px;border-radius:999px;border:1.5px solid var(--a);background:transparent;color:var(--a);font:inherit;font-weight:500;letter-spacing:.04em;cursor:pointer;width:100%;margin-top:10px;text-decoration:none;transition:transform .12s}
.fgk-bt:active{transform:scale(.97)}
.fgk-bt.pri{background:var(--fgk-grad,var(--a));color:#fff;border-color:transparent;box-shadow:0 10px 22px -12px var(--a)}
.fgk-bt[disabled]{opacity:.6;pointer-events:none}
.fgk-res{display:flex;flex-direction:column;gap:6px;margin-top:10px;text-align:left}
.fgk-item{display:flex;align-items:center;gap:12px;width:100%;padding:12px 14px;border-radius:14px;border:0;background:var(--c);font:inherit;color:var(--t);cursor:pointer;text-align:left;box-shadow:0 1px 0 rgba(0,0,0,.04),0 6px 16px -10px rgba(0,0,0,.25)}
.fgk-item b{display:block;font-weight:500}.fgk-item small{color:var(--s)}
.fgk-ini{flex:0 0 42px;height:42px;border-radius:50%;display:grid;place-items:center;background:var(--fgk-grad,var(--a));color:#fff;font-family:var(--fgk-script,var(--fgk-serif,serif));font-size:1.3rem}
.fgk-card{background:var(--c);border-radius:22px;padding:22px 18px;box-shadow:0 1px 0 rgba(0,0,0,.04),0 16px 36px -18px rgba(0,0,0,.3);animation:fgkEntra .4s ease}
@keyframes fgkEntra{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
.fgk-nombre{font-family:var(--fgk-script,var(--fgk-serif,serif));font-size:2.3rem;line-height:1.1;color:var(--a);margin:4px 0}
.fgk-pases{display:flex;justify-content:center;gap:10px;margin:14px 0 4px}
.fgk-pases div{min-width:76px;padding:10px 8px;border-radius:14px;background:var(--f)}.fgk-pases b{display:block;font-family:var(--fgk-serif,serif);font-size:1.8rem;line-height:1}.fgk-pases small{font-size:.75rem;color:var(--s)}
.fgk-chip{display:inline-block;padding:6px 14px;border-radius:999px;background:var(--f);color:var(--a);font-weight:500;margin:8px 0}
.fgk-link{background:none;border:0;color:var(--s);text-decoration:underline;font:inherit;font-size:.9rem;cursor:pointer;margin-top:12px;display:block;width:100%}
.fgk-reloj{width:64px;height:64px;margin:16px auto 6px;border-radius:50%;border:3px solid rgba(0,0,0,.08);border-top-color:var(--a);animation:fgkGira 1.1s linear infinite}
@keyframes fgkGira{to{transform:rotate(360deg)}}
.fgk-pase img{width:100%;border-radius:16px;box-shadow:0 14px 30px -14px rgba(0,0,0,.4);margin-top:12px}
.fgk-barra{height:6px;border-radius:6px;background:var(--f);overflow:hidden;margin-top:12px}.fgk-barra i{display:block;height:100%;background:var(--a);transition:width 1s linear}
.fgk-nota{font-size:.85rem}
`;async function Ou(e){let t=typeof e.contenedor=="string"?document.querySelector(e.contenedor):e.contenedor;if(!t)return;if(!document.getElementById("fgk-css")){let m=document.createElement("style");m.id="fgk-css",m.textContent=ea,document.head.appendChild(m)}t.classList.add("fgk");let r=Object.assign({titulo:"\xBFNos acompa\xF1as?",buscar:"Busca tu invitaci\xF3n escribiendo el apellido de tu familia o tu nombre.",si:"Asistir\xE9",no:"No podr\xE9 asistir",gracias:"\xA1Gracias por confirmar! Te esperamos con mucho cari\xF1o.",graciasNo:"Gracias por avisarnos. \xA1Te vamos a extra\xF1ar!",esperando:"Estamos preparando tu pase. En unos momentos aparecer\xE1 aqu\xED; no cierres esta p\xE1gina."},e.textos||{}),n=e.evento,i="fgk-"+n,a=()=>{try{return JSON.parse(localStorage.getItem(i)||"{}")}catch{return{}}},f=m=>{try{localStorage.setItem(i,JSON.stringify({...a(),...m}))}catch{}},p;try{p=(await me(Ct(Wt,"eventos",n))).data()}catch{}if(!p){t.innerHTML="";return}let g=p.modulos||{},_=m=>{t.innerHTML=m};if(g.confirmacion==="whatsapp"){_(`<h3>${J(r.titulo)}</h3><p>Confirma tu asistencia con los novios.</p>
      <input id="fgkNom" placeholder="Tu nombre" autocomplete="name">
      <button class="fgk-bt pri" data-r="si">${J(r.si)}</button><button class="fgk-bt" data-r="no">${J(r.no)}</button>`),t.onclick=m=>{let y=m.target.closest("[data-r]");if(!y)return;let u=t.querySelector("#fgkNom"),o=u.value.trim();if(!o){u.focus();return}let s=y.dataset.r==="si"?`\xA1Hola! Soy ${o} y con mucho gusto confirmo mi asistencia. \xA1Nos vemos pronto, ${p.nombres}! \u{1F490}`:`\xA1Hola! Soy ${o}. Con mucho cari\xF1o les aviso que no podr\xE9 acompa\xF1arlos. \xA1Les deseo un d\xEDa maravilloso, ${p.nombres}! \u{1F490}`;open(Zo(p.whatsapp,s),"_blank")};return}if(g.confirmacion!=="lista"){_("");return}let x=null,k=async()=>x||(x=(await mn(gn(Wt,"eventos",n,"familias"))).docs.map(y=>({id:y.id,...y.data()})),x),P=m=>(+m.pa||0)+(+m.pk||0),U=m=>String(m||"").replace(/^familia\s+/i,"").trim()[0]||"\u2661";function B(){_(`<h3>${J(r.titulo)}</h3><p>${J(r.buscar)}</p>
      <input id="fgkQ" type="search" placeholder="Escribe al menos 3 letras" autocomplete="off">
      <div class="fgk-res" id="fgkRes"></div>`);let m=t.querySelector("#fgkQ"),y=t.querySelector("#fgkRes");k().catch(()=>{}),m.oninput=async()=>{let u=Ji(m.value);if(u.length<3){y.innerHTML="";return}let o;try{o=await k()}catch{y.innerHTML="<p>Sin conexi\xF3n. Intenta de nuevo.</p>";return}let s=o.filter(l=>Ji(l.n).includes(u)).slice(0,8);y.innerHTML=s.length?s.map(l=>`<button class="fgk-item" data-id="${l.id}"><span class="fgk-ini">${J(U(l.n))}</span><span><b>${J(l.n)}</b><small>${P(l)} pase${P(l)!==1?"s":""}</small></span></button>`).join(""):'<p class="fgk-nota">No encontramos ese nombre. Revisa c\xF3mo viene en tu invitaci\xF3n o escr\xEDbele a los novios.</p>'},t.onclick=u=>{let o=u.target.closest(".fgk-item");o&&j(x.find(s=>s.id===o.dataset.id))}}function j(m){if(!m)return B();f({fid:m.id});let y=P(m),u=`<div class="fgk-pases"><div><b>${y}</b><small>pase${y!==1?"s":""}</small></div>${+m.pk?`<div><b>${+m.pa||0}</b><small>adultos</small></div><div><b>${+m.pk}</b><small>ni\xF1os</small></div>`:""}</div>`;m.resp==="si"?_(`<div class="fgk-card"><p>Con cari\xF1o para</p><div class="fgk-nombre">${J(m.n)}</div>${u}
        <div class="fgk-chip">Ya confirmaste \u2713</div><p>${J(r.gracias)}</p>
        ${g.pases?'<button class="fgk-bt pri" id="fgkPase">Ver mi pase</button>':""}
        <button class="fgk-link" id="fgkCambiar">\xBFCambi\xF3 algo? Ya no podr\xE9 asistir</button>
        <button class="fgk-link" id="fgkOtra">No soy yo</button></div>`):m.resp==="no"?_(`<div class="fgk-card"><div class="fgk-nombre">${J(m.n)}</div><p>${J(r.graciasNo)}</p>
        <button class="fgk-bt" id="fgkCambiar">\xA1Siempre s\xED podr\xE9 ir!</button><button class="fgk-link" id="fgkOtra">No soy yo</button></div>`):_(`<div class="fgk-card"><p>Con cari\xF1o para</p><div class="fgk-nombre">${J(m.n)}</div>${u}
        <p>Hemos reservado ${y===1?"un lugar":y+" lugares"} en tu honor.</p>
        <button class="fgk-bt pri" data-r="si">${J(r.si)}</button><button class="fgk-bt" data-r="no">${J(r.no)}</button>
        <button class="fgk-link" id="fgkOtra">No soy yo</button></div>`),t.onclick=async o=>{let s=o.target;if(s.closest("#fgkOtra"))return f({fid:null,pase:null}),B();if(s.closest("#fgkPase"))return I(m,!1);if(s.closest("#fgkCambiar"))return $(m,m.resp==="si"?"no":"si",s.closest("button"));let l=s.closest("[data-r]");l&&$(m,l.dataset.r,l)}}async function $(m,y,u){u&&(u.disabled=!0);let o={resp:y,respEn:zt(),respPor:"invitado",...y==="si"&&g.pases?{pidePase:zt()}:{}};try{if(await rr(Ct(Wt,"eventos",n,"familias",m.id),o),m.resp=y,y!=="si"&&f({pase:null}),y==="si"&&g.pases)return I(m,!0);j(m)}catch(s){console.warn(s),u&&(u.disabled=!1),alert("No se pudo guardar tu respuesta. Revisa tu conexi\xF3n e intenta de nuevo.")}}let it=0;async function I(m,y){clearTimeout(it);let u=a();if(u.pase&&u.pase.fid===m.id&&u.pase.codigo)return N(m,u.pase.codigo,0);if(!y)try{await rr(Ct(Wt,"eventos",n,"familias",m.id),{resp:"si",respEn:zt(),respPor:"invitado",pidePase:zt()})}catch{}let o=Date.now();_(`<div class="fgk-card"><div class="fgk-nombre">${J(m.n)}</div><div class="fgk-reloj"></div><p>${J(r.esperando)}</p></div>`);let s=async()=>{try{let l=await me(Ct(Wt,"eventos",n,"pases",m.id));if(l.exists()&&l.data().hasta&&l.data().hasta.toMillis()>Date.now())return f({pase:{fid:m.id,codigo:l.data().codigo}}),N(m,l.data().codigo,l.data().hasta.toMillis())}catch{}if(Date.now()-o>ta){_(`<div class="fgk-card"><div class="fgk-nombre">${J(m.n)}</div><p>Tu pase todav\xEDa no est\xE1 listo. Vuelve a abrir la invitaci\xF3n m\xE1s tarde y p\xEDdelo de nuevo.</p><button class="fgk-bt pri" id="fgkPase">Pedirlo de nuevo</button></div>`),t.onclick=l=>{l.target.closest("#fgkPase")&&I(m,!1)};return}it=setTimeout(s,5e3)};s()}async function N(m,y,u){let o=`FG|${n}|${m.id}|${y}`,l=(e.dibujarPase?await e.dibujarPase(m,o):await ra(m,o,{...e.pase||{},titulo:e.pase&&e.pase.titulo||p.nombres})).toDataURL("image/png"),c=`Pase-${(p.nombres||n).replace(/[^\w]+/g,"-")}-${m.id}.png`;if(_(`<div class="fgk-card fgk-pase"><p>Tu pase de entrada</p><div class="fgk-nombre">${J(m.n)}</div>
      <img src="${l}" alt="Pase de entrada">
      <a class="fgk-bt pri" href="${l}" download="${J(c)}" id="fgkBajar">Guardar mi pase</a>
      <p class="fgk-nota">Gu\xE1rdalo en tu tel\xE9fono y mu\xE9stralo en la entrada.</p>
      ${u?'<div class="fgk-barra"><i id="fgkBar"></i></div><p class="fgk-nota" id="fgkTiempo"></p>':""}
      <button class="fgk-link" id="fgkOtra">No soy yo</button></div>`),t.onclick=d=>{d.target.closest("#fgkOtra")&&(f({fid:null,pase:null}),B())},navigator.canShare&&(t.querySelector("#fgkBajar").onclick=async d=>{try{let h=await(await fetch(l)).blob(),R=new File([h],c,{type:"image/png"});navigator.canShare({files:[R]})&&/Android|iPhone|iPad/i.test(navigator.userAgent)&&(d.preventDefault(),await navigator.share({files:[R],title:"Mi pase"}))}catch{}}),u){let d=u-Date.now(),h=()=>{let R=u-Date.now(),L=t.querySelector("#fgkBar"),H=t.querySelector("#fgkTiempo");if(L){if(R<=0){H.textContent="Tu pase qued\xF3 guardado en este tel\xE9fono: vuelve a abrir la invitaci\xF3n cuando lo necesites.",L.style.width="0%";return}L.style.width=R/d*100+"%",H.textContent=`Gu\xE1rdalo ya \xB7 visible ${Math.floor(R/6e4)}:${String(Math.floor(R/1e3)%60).padStart(2,"0")} min`,setTimeout(h,1e3)}};h()}}let T=new URLSearchParams(location.search).get("f")||a().fid;if(T)try{let m=await me(Ct(Wt,"eventos",n,"familias",T));if(m.exists())return j({id:T,...m.data()})}catch{}B()}async function ra(e,t,r={}){let a=document.createElement("canvas");a.width=1080,a.height=1920;let f=a.getContext("2d"),p=r.fondo||"#FBF6F1",g=r.tinta||"#4A2E22",_=r.acento||"#A9675A",x=r.fuenteTitulo||'"Great Vibes", cursive',k=r.fuenteTexto||'"Cormorant Garamond", Georgia, serif';try{await document.fonts.load(`120px ${x}`),await document.fonts.load(`60px ${k}`)}catch{}f.fillStyle=p,f.fillRect(0,0,1080,1920),f.strokeStyle=_,f.lineWidth=4,f.strokeRect(50,50,980,1820),f.lineWidth=1.5,f.strokeRect(70,70,940,1780),f.textAlign="center",f.fillStyle=_,f.font=`500 38px ${k}`,f.fillText("PASE DE ENTRADA",1080/2,220);let P=130;do f.font=`${P}px ${x}`,P-=4;while(f.measureText(r.titulo||"").width>880&&P>50);f.fillText(r.titulo||"",1080/2,400),f.fillStyle=g,f.font=`500 44px ${k}`,r.fecha&&f.fillText(r.fecha,1080/2,480),r.lugar&&(f.font=`400 36px ${k}`,f.fillText(r.lugar,1080/2,535));let U=(0,Yi.default)(0,"M");U.addData(t),U.make();let B=U.getModuleCount(),j=620,$=j/B,it=(1080-j)/2,I=620;f.fillStyle="#fff",f.beginPath(),f.roundRect?f.roundRect(it-40,I-40,j+80,j+80,36):f.rect(it-40,I-40,j+80,j+80),f.fill(),f.fillStyle=g;for(let T=0;T<B;T++)for(let m=0;m<B;m++)U.isDark(T,m)&&f.fillRect(it+m*$,I+T*$,Math.ceil($),Math.ceil($));f.fillStyle=_,P=92;do f.font=`${P}px ${x}`,P-=4;while(f.measureText(e.n).width>880&&P>44);f.fillText(e.n,1080/2,1420);let N=(+e.pa||0)+(+e.pk||0);return f.fillStyle=g,f.font=`500 50px ${k}`,f.fillText(`${N} pase${N!==1?"s":""}${+e.pk?` \xB7 ${e.pa} adulto${+e.pa!=1?"s":""} y ${e.pk} ni\xF1o${+e.pk!=1?"s":""}`:""}`,1080/2,1510),f.font=`400 34px ${k}`,f.globalAlpha=.75,f.fillText("Presenta este pase en la entrada",1080/2,1640),f.font=`400 26px ${k}`,f.fillText("Foto Estudio Graciela",1080/2,1810),f.globalAlpha=1,a}function Mu({titulo:e,inicioISO:t,finISO:r,lugar:n,detalles:i}){let a=p=>new Date(p).toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),f=new URL("https://calendar.google.com/calendar/render");return f.searchParams.set("action","TEMPLATE"),f.searchParams.set("text",e),f.searchParams.set("dates",`${a(t)}/${a(r||new Date(new Date(t).getTime()+6*36e5))}`),n&&f.searchParams.set("location",n),i&&f.searchParams.set("details",i),f.toString()}export{ra as dibujarPase,Ou as iniciarInvitacion,Mu as ligaCalendario};
/*! Bundled license information:

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2025 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
  * @license
  * Copyright 2017 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/common-B8fiiKst.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/lite/index.browser.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
