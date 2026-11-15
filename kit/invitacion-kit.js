var cs=Object.create;var Nn=Object.defineProperty;var ls=Object.getOwnPropertyDescriptor;var fs=Object.getOwnPropertyNames;var hs=Object.getPrototypeOf,ds=Object.prototype.hasOwnProperty;var ps=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var gs=(e,t,r,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of fs(t))!ds.call(e,i)&&i!==r&&Nn(e,i,{get:()=>t[i],enumerable:!(n=ls(t,i))||n.enumerable});return e};var ms=(e,t,r)=>(r=e!=null?cs(hs(e)):{},gs(t||!e||!e.__esModule?Nn(r,"default",{value:e,enumerable:!0}):r,e));var rs=ps((ts,es)=>{var Zi=function(){var e=function(I,N){var T=236,m=17,y=I,u=r[N],o=null,s=0,f=null,c=[],d={},h=function(w,b){s=y*4+17,o=function(v){for(var E=new Array(v),A=0;A<v;A+=1){E[A]=new Array(v);for(var S=0;S<v;S+=1)E[A][S]=null}return E}(s),P(0,0),P(s-7,0),P(0,s-7),tt(),H(),vt(w,b),y>=7&&dt(w),f==null&&(f=as(y,u,c)),wt(f,b)},P=function(w,b){for(var v=-1;v<=7;v+=1)if(!(w+v<=-1||s<=w+v))for(var E=-1;E<=7;E+=1)b+E<=-1||s<=b+E||(0<=v&&v<=6&&(E==0||E==6)||0<=E&&E<=6&&(v==0||v==6)||2<=v&&v<=4&&2<=E&&E<=4?o[w+v][b+E]=!0:o[w+v][b+E]=!1)},L=function(){for(var w=0,b=0,v=0;v<8;v+=1){h(!0,v);var E=i.getLostPoint(d);(v==0||w>E)&&(w=E,b=v)}return b},H=function(){for(var w=8;w<s-8;w+=1)o[w][6]==null&&(o[w][6]=w%2==0);for(var b=8;b<s-8;b+=1)o[6][b]==null&&(o[6][b]=b%2==0)},tt=function(){for(var w=i.getPatternPosition(y),b=0;b<w.length;b+=1)for(var v=0;v<w.length;v+=1){var E=w[b],A=w[v];if(o[E][A]==null)for(var S=-2;S<=2;S+=1)for(var O=-2;O<=2;O+=1)S==-2||S==2||O==-2||O==2||S==0&&O==0?o[E+S][A+O]=!0:o[E+S][A+O]=!1}},dt=function(w){for(var b=i.getBCHTypeNumber(y),v=0;v<18;v+=1){var E=!w&&(b>>v&1)==1;o[Math.floor(v/3)][v%3+s-8-3]=E}for(var v=0;v<18;v+=1){var E=!w&&(b>>v&1)==1;o[v%3+s-8-3][Math.floor(v/3)]=E}},vt=function(w,b){for(var v=u<<3|b,E=i.getBCHTypeInfo(v),A=0;A<15;A+=1){var S=!w&&(E>>A&1)==1;A<6?o[A][8]=S:A<8?o[A+1][8]=S:o[s-15+A][8]=S}for(var A=0;A<15;A+=1){var S=!w&&(E>>A&1)==1;A<8?o[8][s-A-1]=S:A<9?o[8][15-A-1+1]=S:o[8][15-A-1]=S}o[s-8][8]=!w},wt=function(w,b){for(var v=-1,E=s-1,A=7,S=0,O=i.getMaskFunction(b),C=s-1;C>0;C-=2)for(C==6&&(C-=1);;){for(var G=0;G<2;G+=1)if(o[E][C-G]==null){var J=!1;S<w.length&&(J=(w[S]>>>A&1)==1);var M=O(E,C-G);M&&(J=!J),o[E][C-G]=J,A-=1,A==-1&&(S+=1,A=7)}if(E+=v,E<0||s<=E){E-=v,v=-v;break}}},Lt=function(w,b){for(var v=0,E=0,A=0,S=new Array(b.length),O=new Array(b.length),C=0;C<b.length;C+=1){var G=b[C].dataCount,J=b[C].totalCount-G;E=Math.max(E,G),A=Math.max(A,J),S[C]=new Array(G);for(var M=0;M<S[C].length;M+=1)S[C][M]=255&w.getBuffer()[M+v];v+=G;var at=i.getErrorCorrectPolynomial(J),ut=l(S[C],at.getLength()-1),An=ut.mod(at);O[C]=new Array(at.getLength()-1);for(var M=0;M<O[C].length;M+=1){var Tn=M+An.getLength()-O[C].length;O[C][M]=Tn>=0?An.getAt(Tn):0}}for(var In=0,M=0;M<b.length;M+=1)In+=b[M].totalCount;for(var ar=new Array(In),Ae=0,M=0;M<E;M+=1)for(var C=0;C<b.length;C+=1)M<S[C].length&&(ar[Ae]=S[C][M],Ae+=1);for(var M=0;M<A;M+=1)for(var C=0;C<b.length;C+=1)M<O[C].length&&(ar[Ae]=O[C][M],Ae+=1);return ar},as=function(w,b,v){for(var E=p.getRSBlocks(w,b),A=g(),S=0;S<v.length;S+=1){var O=v[S];A.put(O.getMode(),4),A.put(O.getLength(),i.getLengthInBits(O.getMode(),w)),O.write(A)}for(var C=0,S=0;S<E.length;S+=1)C+=E[S].dataCount;if(A.getLengthInBits()>C*8)throw"code length overflow. ("+A.getLengthInBits()+">"+C*8+")";for(A.getLengthInBits()+4<=C*8&&A.put(0,4);A.getLengthInBits()%8!=0;)A.putBit(!1);for(;!(A.getLengthInBits()>=C*8||(A.put(T,8),A.getLengthInBits()>=C*8));)A.put(m,8);return Lt(A,E)};d.addData=function(w,b){b=b||"Byte";var v=null;switch(b){case"Numeric":v=_(w);break;case"Alphanumeric":v=D(w);break;case"Byte":v=k(w);break;case"Kanji":v=R(w);break;default:throw"mode:"+b}c.push(v),f=null},d.isDark=function(w,b){if(w<0||s<=w||b<0||s<=b)throw w+","+b;return o[w][b]},d.getModuleCount=function(){return s},d.make=function(){if(y<1){for(var w=1;w<40;w++){for(var b=p.getRSBlocks(w,u),v=g(),E=0;E<c.length;E++){var A=c[E];v.put(A.getMode(),4),v.put(A.getLength(),i.getLengthInBits(A.getMode(),w)),A.write(v)}for(var S=0,E=0;E<b.length;E++)S+=b[E].dataCount;if(v.getLengthInBits()<=S*8)break}y=w}h(!1,L())},d.createTableTag=function(w,b){w=w||2,b=typeof b>"u"?w*4:b;var v="";v+='<table style="',v+=" border-width: 0px; border-style: none;",v+=" border-collapse: collapse;",v+=" padding: 0px; margin: "+b+"px;",v+='">',v+="<tbody>";for(var E=0;E<d.getModuleCount();E+=1){v+="<tr>";for(var A=0;A<d.getModuleCount();A+=1)v+='<td style="',v+=" border-width: 0px; border-style: none;",v+=" border-collapse: collapse;",v+=" padding: 0px; margin: 0px;",v+=" width: "+w+"px;",v+=" height: "+w+"px;",v+=" background-color: ",v+=d.isDark(E,A)?"#000000":"#ffffff",v+=";",v+='"/>';v+="</tr>"}return v+="</tbody>",v+="</table>",v},d.createSvgTag=function(w,b,v,E){var A={};typeof arguments[0]=="object"&&(A=arguments[0],w=A.cellSize,b=A.margin,v=A.alt,E=A.title),w=w||2,b=typeof b>"u"?w*4:b,v=typeof v=="string"?{text:v}:v||{},v.text=v.text||null,v.id=v.text?v.id||"qrcode-description":null,E=typeof E=="string"?{text:E}:E||{},E.text=E.text||null,E.id=E.text?E.id||"qrcode-title":null;var S=d.getModuleCount()*w+b*2,O,C,G,J,M="",at;for(at="l"+w+",0 0,"+w+" -"+w+",0 0,-"+w+"z ",M+='<svg version="1.1" xmlns="http://www.w3.org/2000/svg"',M+=A.scalable?"":' width="'+S+'px" height="'+S+'px"',M+=' viewBox="0 0 '+S+" "+S+'" ',M+=' preserveAspectRatio="xMinYMin meet"',M+=E.text||v.text?' role="img" aria-labelledby="'+Ft([E.id,v.id].join(" ").trim())+'"':"",M+=">",M+=E.text?'<title id="'+Ft(E.id)+'">'+Ft(E.text)+"</title>":"",M+=v.text?'<description id="'+Ft(v.id)+'">'+Ft(v.text)+"</description>":"",M+='<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>',M+='<path d="',G=0;G<d.getModuleCount();G+=1)for(J=G*w+b,O=0;O<d.getModuleCount();O+=1)d.isDark(G,O)&&(C=O*w+b,M+="M"+C+","+J+at);return M+='" stroke="transparent" fill="black"/>',M+="</svg>",M},d.createDataURL=function(w,b){w=w||2,b=typeof b>"u"?w*4:b;var v=d.getModuleCount()*w+b*2,E=b,A=v-b;return it(v,v,function(S,O){if(E<=S&&S<A&&E<=O&&O<A){var C=Math.floor((S-E)/w),G=Math.floor((O-E)/w);return d.isDark(G,C)?0:1}else return 1})},d.createImgTag=function(w,b,v){w=w||2,b=typeof b>"u"?w*4:b;var E=d.getModuleCount()*w+b*2,A="";return A+="<img",A+=' src="',A+=d.createDataURL(w,b),A+='"',A+=' width="',A+=E,A+='"',A+=' height="',A+=E,A+='"',v&&(A+=' alt="',A+=Ft(v),A+='"'),A+="/>",A};var Ft=function(w){for(var b="",v=0;v<w.length;v+=1){var E=w.charAt(v);switch(E){case"<":b+="&lt;";break;case">":b+="&gt;";break;case"&":b+="&amp;";break;case'"':b+="&quot;";break;default:b+=E;break}}return b},us=function(w){var b=1;w=typeof w>"u"?b*2:w;var v=d.getModuleCount()*b+w*2,E=w,A=v-w,S,O,C,G,J,M={"\u2588\u2588":"\u2588","\u2588 ":"\u2580"," \u2588":"\u2584","  ":" "},at={"\u2588\u2588":"\u2580","\u2588 ":"\u2580"," \u2588":" ","  ":" "},ut="";for(S=0;S<v;S+=2){for(C=Math.floor((S-E)/b),G=Math.floor((S+1-E)/b),O=0;O<v;O+=1)J="\u2588",E<=O&&O<A&&E<=S&&S<A&&d.isDark(C,Math.floor((O-E)/b))&&(J=" "),E<=O&&O<A&&E<=S+1&&S+1<A&&d.isDark(G,Math.floor((O-E)/b))?J+=" ":J+="\u2588",ut+=w<1&&S+1>=A?at[J]:M[J];ut+=`
`}return v%2&&w>0?ut.substring(0,ut.length-v-1)+Array(v+1).join("\u2580"):ut.substring(0,ut.length-1)};return d.createASCII=function(w,b){if(w=w||1,w<2)return us(b);w-=1,b=typeof b>"u"?w*2:b;var v=d.getModuleCount()*w+b*2,E=b,A=v-b,S,O,C,G,J=Array(w+1).join("\u2588\u2588"),M=Array(w+1).join("  "),at="",ut="";for(S=0;S<v;S+=1){for(C=Math.floor((S-E)/w),ut="",O=0;O<v;O+=1)G=1,E<=O&&O<A&&E<=S&&S<A&&d.isDark(C,Math.floor((O-E)/w))&&(G=0),ut+=G?J:M;for(C=0;C<w;C+=1)at+=ut+`
`}return at.substring(0,at.length-1)},d.renderTo2dContext=function(w,b){b=b||2;for(var v=d.getModuleCount(),E=0;E<v;E++)for(var A=0;A<v;A++)w.fillStyle=d.isDark(E,A)?"black":"white",w.fillRect(E*b,A*b,b,b)},d};e.stringToBytesFuncs={default:function(I){for(var N=[],T=0;T<I.length;T+=1){var m=I.charCodeAt(T);N.push(m&255)}return N}},e.stringToBytes=e.stringToBytesFuncs.default,e.createStringToBytes=function(I,N){var T=function(){for(var y=j(I),u=function(){var H=y.read();if(H==-1)throw"eof";return H},o=0,s={};;){var f=y.read();if(f==-1)break;var c=u(),d=u(),h=u(),P=String.fromCharCode(f<<8|c),L=d<<8|h;s[P]=L,o+=1}if(o!=N)throw o+" != "+N;return s}(),m=63;return function(y){for(var u=[],o=0;o<y.length;o+=1){var s=y.charCodeAt(o);if(s<128)u.push(s);else{var f=T[y.charAt(o)];typeof f=="number"?(f&255)==f?u.push(f):(u.push(f>>>8),u.push(f&255)):u.push(m)}}return u}};var t={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},r={L:1,M:0,Q:3,H:2},n={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},i=function(){var I=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],N=1335,T=7973,m=21522,y={},u=function(o){for(var s=0;o!=0;)s+=1,o>>>=1;return s};return y.getBCHTypeInfo=function(o){for(var s=o<<10;u(s)-u(N)>=0;)s^=N<<u(s)-u(N);return(o<<10|s)^m},y.getBCHTypeNumber=function(o){for(var s=o<<12;u(s)-u(T)>=0;)s^=T<<u(s)-u(T);return o<<12|s},y.getPatternPosition=function(o){return I[o-1]},y.getMaskFunction=function(o){switch(o){case n.PATTERN000:return function(s,f){return(s+f)%2==0};case n.PATTERN001:return function(s,f){return s%2==0};case n.PATTERN010:return function(s,f){return f%3==0};case n.PATTERN011:return function(s,f){return(s+f)%3==0};case n.PATTERN100:return function(s,f){return(Math.floor(s/2)+Math.floor(f/3))%2==0};case n.PATTERN101:return function(s,f){return s*f%2+s*f%3==0};case n.PATTERN110:return function(s,f){return(s*f%2+s*f%3)%2==0};case n.PATTERN111:return function(s,f){return(s*f%3+(s+f)%2)%2==0};default:throw"bad maskPattern:"+o}},y.getErrorCorrectPolynomial=function(o){for(var s=l([1],0),f=0;f<o;f+=1)s=s.multiply(l([1,a.gexp(f)],0));return s},y.getLengthInBits=function(o,s){if(1<=s&&s<10)switch(o){case t.MODE_NUMBER:return 10;case t.MODE_ALPHA_NUM:return 9;case t.MODE_8BIT_BYTE:return 8;case t.MODE_KANJI:return 8;default:throw"mode:"+o}else if(s<27)switch(o){case t.MODE_NUMBER:return 12;case t.MODE_ALPHA_NUM:return 11;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 10;default:throw"mode:"+o}else if(s<41)switch(o){case t.MODE_NUMBER:return 14;case t.MODE_ALPHA_NUM:return 13;case t.MODE_8BIT_BYTE:return 16;case t.MODE_KANJI:return 12;default:throw"mode:"+o}else throw"type:"+s},y.getLostPoint=function(o){for(var s=o.getModuleCount(),f=0,c=0;c<s;c+=1)for(var d=0;d<s;d+=1){for(var h=0,P=o.isDark(c,d),L=-1;L<=1;L+=1)if(!(c+L<0||s<=c+L))for(var H=-1;H<=1;H+=1)d+H<0||s<=d+H||L==0&&H==0||P==o.isDark(c+L,d+H)&&(h+=1);h>5&&(f+=3+h-5)}for(var c=0;c<s-1;c+=1)for(var d=0;d<s-1;d+=1){var tt=0;o.isDark(c,d)&&(tt+=1),o.isDark(c+1,d)&&(tt+=1),o.isDark(c,d+1)&&(tt+=1),o.isDark(c+1,d+1)&&(tt+=1),(tt==0||tt==4)&&(f+=3)}for(var c=0;c<s;c+=1)for(var d=0;d<s-6;d+=1)o.isDark(c,d)&&!o.isDark(c,d+1)&&o.isDark(c,d+2)&&o.isDark(c,d+3)&&o.isDark(c,d+4)&&!o.isDark(c,d+5)&&o.isDark(c,d+6)&&(f+=40);for(var d=0;d<s;d+=1)for(var c=0;c<s-6;c+=1)o.isDark(c,d)&&!o.isDark(c+1,d)&&o.isDark(c+2,d)&&o.isDark(c+3,d)&&o.isDark(c+4,d)&&!o.isDark(c+5,d)&&o.isDark(c+6,d)&&(f+=40);for(var dt=0,d=0;d<s;d+=1)for(var c=0;c<s;c+=1)o.isDark(c,d)&&(dt+=1);var vt=Math.abs(100*dt/s/s-50)/5;return f+=vt*10,f},y}(),a=function(){for(var I=new Array(256),N=new Array(256),T=0;T<8;T+=1)I[T]=1<<T;for(var T=8;T<256;T+=1)I[T]=I[T-4]^I[T-5]^I[T-6]^I[T-8];for(var T=0;T<255;T+=1)N[I[T]]=T;var m={};return m.glog=function(y){if(y<1)throw"glog("+y+")";return N[y]},m.gexp=function(y){for(;y<0;)y+=255;for(;y>=256;)y-=255;return I[y]},m}();function l(I,N){if(typeof I.length>"u")throw I.length+"/"+N;var T=function(){for(var y=0;y<I.length&&I[y]==0;)y+=1;for(var u=new Array(I.length-y+N),o=0;o<I.length-y;o+=1)u[o]=I[o+y];return u}(),m={};return m.getAt=function(y){return T[y]},m.getLength=function(){return T.length},m.multiply=function(y){for(var u=new Array(m.getLength()+y.getLength()-1),o=0;o<m.getLength();o+=1)for(var s=0;s<y.getLength();s+=1)u[o+s]^=a.gexp(a.glog(m.getAt(o))+a.glog(y.getAt(s)));return l(u,0)},m.mod=function(y){if(m.getLength()-y.getLength()<0)return m;for(var u=a.glog(m.getAt(0))-a.glog(y.getAt(0)),o=new Array(m.getLength()),s=0;s<m.getLength();s+=1)o[s]=m.getAt(s);for(var s=0;s<y.getLength();s+=1)o[s]^=a.gexp(a.glog(y.getAt(s))+u);return l(o,0).mod(y)},m}var p=function(){var I=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],N=function(y,u){var o={};return o.totalCount=y,o.dataCount=u,o},T={},m=function(y,u){switch(u){case r.L:return I[(y-1)*4+0];case r.M:return I[(y-1)*4+1];case r.Q:return I[(y-1)*4+2];case r.H:return I[(y-1)*4+3];default:return}};return T.getRSBlocks=function(y,u){var o=m(y,u);if(typeof o>"u")throw"bad rs block @ typeNumber:"+y+"/errorCorrectionLevel:"+u;for(var s=o.length/3,f=[],c=0;c<s;c+=1)for(var d=o[c*3+0],h=o[c*3+1],P=o[c*3+2],L=0;L<d;L+=1)f.push(N(h,P));return f},T}(),g=function(){var I=[],N=0,T={};return T.getBuffer=function(){return I},T.getAt=function(m){var y=Math.floor(m/8);return(I[y]>>>7-m%8&1)==1},T.put=function(m,y){for(var u=0;u<y;u+=1)T.putBit((m>>>y-u-1&1)==1)},T.getLengthInBits=function(){return N},T.putBit=function(m){var y=Math.floor(N/8);I.length<=y&&I.push(0),m&&(I[y]|=128>>>N%8),N+=1},T},_=function(I){var N=t.MODE_NUMBER,T=I,m={};m.getMode=function(){return N},m.getLength=function(o){return T.length},m.write=function(o){for(var s=T,f=0;f+2<s.length;)o.put(y(s.substring(f,f+3)),10),f+=3;f<s.length&&(s.length-f==1?o.put(y(s.substring(f,f+1)),4):s.length-f==2&&o.put(y(s.substring(f,f+2)),7))};var y=function(o){for(var s=0,f=0;f<o.length;f+=1)s=s*10+u(o.charAt(f));return s},u=function(o){if("0"<=o&&o<="9")return o.charCodeAt(0)-48;throw"illegal char :"+o};return m},D=function(I){var N=t.MODE_ALPHA_NUM,T=I,m={};m.getMode=function(){return N},m.getLength=function(u){return T.length},m.write=function(u){for(var o=T,s=0;s+1<o.length;)u.put(y(o.charAt(s))*45+y(o.charAt(s+1)),11),s+=2;s<o.length&&u.put(y(o.charAt(s)),6)};var y=function(u){if("0"<=u&&u<="9")return u.charCodeAt(0)-48;if("A"<=u&&u<="Z")return u.charCodeAt(0)-65+10;switch(u){case" ":return 36;case"$":return 37;case"%":return 38;case"*":return 39;case"+":return 40;case"-":return 41;case".":return 42;case"/":return 43;case":":return 44;default:throw"illegal char :"+u}};return m},k=function(I){var N=t.MODE_8BIT_BYTE,T=I,m=e.stringToBytes(I),y={};return y.getMode=function(){return N},y.getLength=function(u){return m.length},y.write=function(u){for(var o=0;o<m.length;o+=1)u.put(m[o],8)},y},R=function(I){var N=t.MODE_KANJI,T=I,m=e.stringToBytesFuncs.SJIS;if(!m)throw"sjis not supported.";(function(o,s){var f=m(o);if(f.length!=2||(f[0]<<8|f[1])!=s)throw"sjis not supported."})("\u53CB",38726);var y=m(I),u={};return u.getMode=function(){return N},u.getLength=function(o){return~~(y.length/2)},u.write=function(o){for(var s=y,f=0;f+1<s.length;){var c=(255&s[f])<<8|255&s[f+1];if(33088<=c&&c<=40956)c-=33088;else if(57408<=c&&c<=60351)c-=49472;else throw"illegal char at "+(f+1)+"/"+c;c=(c>>>8&255)*192+(c&255),o.put(c,13),f+=2}if(f<s.length)throw"illegal char at "+(f+1)},u},U=function(){var I=[],N={};return N.writeByte=function(T){I.push(T&255)},N.writeShort=function(T){N.writeByte(T),N.writeByte(T>>>8)},N.writeBytes=function(T,m,y){m=m||0,y=y||T.length;for(var u=0;u<y;u+=1)N.writeByte(T[u+m])},N.writeString=function(T){for(var m=0;m<T.length;m+=1)N.writeByte(T.charCodeAt(m))},N.toByteArray=function(){return I},N.toString=function(){var T="";T+="[";for(var m=0;m<I.length;m+=1)m>0&&(T+=","),T+=I[m];return T+="]",T},N},B=function(){var I=0,N=0,T=0,m="",y={},u=function(s){m+=String.fromCharCode(o(s&63))},o=function(s){if(!(s<0)){if(s<26)return 65+s;if(s<52)return 97+(s-26);if(s<62)return 48+(s-52);if(s==62)return 43;if(s==63)return 47}throw"n:"+s};return y.writeByte=function(s){for(I=I<<8|s&255,N+=8,T+=1;N>=6;)u(I>>>N-6),N-=6},y.flush=function(){if(N>0&&(u(I<<6-N),I=0,N=0),T%3!=0)for(var s=3-T%3,f=0;f<s;f+=1)m+="="},y.toString=function(){return m},y},j=function(I){var N=I,T=0,m=0,y=0,u={};u.read=function(){for(;y<8;){if(T>=N.length){if(y==0)return-1;throw"unexpected end of file./"+y}var s=N.charAt(T);if(T+=1,s=="=")return y=0,-1;if(s.match(/^\s$/))continue;m=m<<6|o(s.charCodeAt(0)),y+=6}var f=m>>>y-8&255;return y-=8,f};var o=function(s){if(65<=s&&s<=90)return s-65;if(97<=s&&s<=122)return s-97+26;if(48<=s&&s<=57)return s-48+52;if(s==43)return 62;if(s==47)return 63;throw"c:"+s};return u},$=function(I,N){var T=I,m=N,y=new Array(I*N),u={};u.setPixel=function(c,d,h){y[d*T+c]=h},u.write=function(c){c.writeString("GIF87a"),c.writeShort(T),c.writeShort(m),c.writeByte(128),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(0),c.writeByte(255),c.writeByte(255),c.writeByte(255),c.writeString(","),c.writeShort(0),c.writeShort(0),c.writeShort(T),c.writeShort(m),c.writeByte(0);var d=2,h=s(d);c.writeByte(d);for(var P=0;h.length-P>255;)c.writeByte(255),c.writeBytes(h,P,255),P+=255;c.writeByte(h.length-P),c.writeBytes(h,P,h.length-P),c.writeByte(0),c.writeString(";")};var o=function(c){var d=c,h=0,P=0,L={};return L.write=function(H,tt){if(H>>>tt)throw"length over";for(;h+tt>=8;)d.writeByte(255&(H<<h|P)),tt-=8-h,H>>>=8-h,P=0,h=0;P=H<<h|P,h=h+tt},L.flush=function(){h>0&&d.writeByte(P)},L},s=function(c){for(var d=1<<c,h=(1<<c)+1,P=c+1,L=f(),H=0;H<d;H+=1)L.add(String.fromCharCode(H));L.add(String.fromCharCode(d)),L.add(String.fromCharCode(h));var tt=U(),dt=o(tt);dt.write(d,P);var vt=0,wt=String.fromCharCode(y[vt]);for(vt+=1;vt<y.length;){var Lt=String.fromCharCode(y[vt]);vt+=1,L.contains(wt+Lt)?wt=wt+Lt:(dt.write(L.indexOf(wt),P),L.size()<4095&&(L.size()==1<<P&&(P+=1),L.add(wt+Lt)),wt=Lt)}return dt.write(L.indexOf(wt),P),dt.write(h,P),dt.flush(),tt.toByteArray()},f=function(){var c={},d=0,h={};return h.add=function(P){if(h.contains(P))throw"dup key:"+P;c[P]=d,d+=1},h.size=function(){return d},h.indexOf=function(P){return c[P]},h.contains=function(P){return typeof c[P]<"u"},h};return u},it=function(I,N,T){for(var m=$(I,N),y=0;y<N;y+=1)for(var u=0;u<I;u+=1)m.setPixel(u,y,T(u,y));var o=U();m.write(o);for(var s=B(),f=o.toByteArray(),c=0;c<f.length;c+=1)s.writeByte(f[c]);return s.flush(),"data:image/gif;base64,"+s};return e}();(function(){Zi.stringToBytesFuncs["UTF-8"]=function(e){function t(r){for(var n=[],i=0;i<r.length;i++){var a=r.charCodeAt(i);a<128?n.push(a):a<2048?n.push(192|a>>6,128|a&63):a<55296||a>=57344?n.push(224|a>>12,128|a>>6&63,128|a&63):(i++,a=65536+((a&1023)<<10|r.charCodeAt(i)&1023),n.push(240|a>>18,128|a>>12&63,128|a>>6&63,128|a&63))}return n}return t(e)}})();(function(e){typeof define=="function"&&define.amd?define([],e):typeof ts=="object"&&(es.exports=e())})(function(){return Zi})});var Dn=()=>{};var xn=function(e){let t=[],r=0;for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=i&63|128):(i&64512)===55296&&n+1<e.length&&(e.charCodeAt(n+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++n)&1023),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=i&63|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=i&63|128)}return t},ys=function(e){let t=[],r=0,n=0;for(;r<e.length;){let i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){let a=e[r++];t[n++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){let a=e[r++],l=e[r++],p=e[r++],g=((i&7)<<18|(a&63)<<12|(l&63)<<6|p&63)-65536;t[n++]=String.fromCharCode(55296+(g>>10)),t[n++]=String.fromCharCode(56320+(g&1023))}else{let a=e[r++],l=e[r++];t[n++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return t.join("")},kn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();let r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let i=0;i<e.length;i+=3){let a=e[i],l=i+1<e.length,p=l?e[i+1]:0,g=i+2<e.length,_=g?e[i+2]:0,D=a>>2,k=(a&3)<<4|p>>4,R=(p&15)<<2|_>>6,U=_&63;g||(U=64,l||(R=64)),n.push(r[D],r[k],r[R],r[U])}return n.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(xn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):ys(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();let r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let i=0;i<e.length;){let a=r[e.charAt(i++)],p=i<e.length?r[e.charAt(i)]:0;++i;let _=i<e.length?r[e.charAt(i)]:64;++i;let k=i<e.length?r[e.charAt(i)]:64;if(++i,a==null||p==null||_==null||k==null)throw new ur;let R=a<<2|p>>4;if(n.push(R),_!==64){let U=p<<4&240|_>>2;if(n.push(U),k!==64){let B=_<<6&192|k;n.push(B)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ur=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}},_s=function(e){let t=xn(e);return kn.encodeByteArray(t,!0)},Xt=function(e){return _s(e).replace(/\./g,"")},Rn=function(e){try{return kn.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function vs(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}var ws=()=>vs().__FIREBASE_DEFAULTS__,bs=()=>{if(typeof process>"u"||typeof process.env>"u")return;let e=process.env.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Es=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}let t=e&&Rn(e[1]);return t&&JSON.parse(t)},Pn=()=>{try{return Dn()||ws()||bs()||Es()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},As=e=>Pn()?.emulatorHosts?.[e],Vn=e=>{let t=As(e);if(!t)return;let r=t.lastIndexOf(":");if(r<=0||r+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);let n=parseInt(t.substring(r+1),10);return t[0]==="["?[t.substring(1,r-1),n]:[t.substring(0,r),n]},cr=()=>Pn()?.config;var Te=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,n)=>{r?this.reject(r):this.resolve(n),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,n))}}};function Cn(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let r={alg:"none",type:"JWT"},n=t||"demo-project",i=e.iat||0,a=e.sub||e.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");let l={iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Xt(JSON.stringify(r)),Xt(JSON.stringify(l)),""].join(".")}function On(){try{return typeof indexedDB=="object"}catch{return!1}}function Mn(){return new Promise((e,t)=>{try{let r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=()=>{i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=()=>{r=!1},i.onerror=()=>{t(i.error?.message||"")}}catch(r){t(r)}})}var Ts="FirebaseError",bt=class e extends Error{constructor(t,r,n){super(r),this.code=t,this.customData=n,this.name=Ts,Object.setPrototypeOf(this,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zt.prototype.create)}},Zt=class{constructor(t,r,n){this.service=t,this.serviceName=r,this.errors=n}create(t,...r){let n=r[0]||{},i=`${this.service}/${t}`,a=this.errors[t],l=a?Is(a,n):"Error",p=`${this.serviceName}: ${l} (${i}).`;return new bt(i,p,n)}};function Is(e,t){try{let r=0,n="";for(;r<e.length;){let i=e.indexOf("{$",r);if(i===-1){n+=e.substring(r);break}let a=e.indexOf("}",i+2);if(a===-1){n+=e.substring(r);break}let l=e.substring(i+2,a),p=t[l];n+=e.substring(r,i)+(p!=null?String(p):`<${l}?>`),r=a+1}return n}catch{return e}}function Rt(e,t){if(e===t)return!0;let r=Object.keys(e),n=Object.keys(t);for(let i of r){if(!n.includes(i))return!1;let a=e[i],l=t[i];if(Sn(a)&&Sn(l)){if(!Rt(a,l))return!1}else if(a!==l)return!1}for(let i of n)if(!r.includes(i))return!1;return!0}function Sn(e){return e!==null&&typeof e=="object"}var pa=4*60*60*1e3;function pt(e){return e&&e._delegate?e._delegate:e}function lr(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ln(e){return(await fetch(e,{credentials:"include"})).ok}var Et=class{constructor(t,r,n){this.name=t,this.instanceFactory=r,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}};var Pt="[DEFAULT]";var fr=class{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){let n=new Te;if(this.instancesDeferred.set(r,n),this.isInitialized(r)||this.shouldAutoInitialize())try{let i=this.getOrInitializeService({instanceIdentifier:r});i&&n.resolve(i)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){let r=this.normalizeInstanceIdentifier(t?.identifier),n=t?.optional??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(n)return null;throw i}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ds(t))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(let[r,n]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(r);try{let a=this.getOrInitializeService({instanceIdentifier:i});n.resolve(a)}catch{}}}}clearInstance(t=Pt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pt){return this.instances.has(t)}getOptions(t=Pt){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:r={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let i=this.getOrInitializeService({instanceIdentifier:n,options:r});for(let[a,l]of this.instancesDeferred.entries()){let p=this.normalizeInstanceIdentifier(a);n===p&&l.resolve(i)}return i}onInit(t,r){let n=this.normalizeInstanceIdentifier(r),i=this.onInitCallbacks.get(n)??new Set;i.add(t),this.onInitCallbacks.set(n,i);let a=this.instances.get(n);return a&&t(a,n),()=>{i.delete(t)}}invokeOnInitCallbacks(t,r){let n=this.onInitCallbacks.get(r);if(n)for(let i of n)try{i(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ns(t),options:r}),this.instances.set(t,n),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch{}return n||null}normalizeInstanceIdentifier(t=Pt){return this.component?this.component.multipleInstances?t:Pt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function Ns(e){return e===Pt?void 0:e}function Ds(e){return e.instantiationMode==="EAGER"}var Ie=class{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let r=new fr(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}};var Ss=[],q;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(q||(q={}));var xs={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},ks=q.INFO,Rs={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Ps=(e,t,...r)=>{if(t<e.logLevel)return;let n=new Date().toISOString(),i=Rs[t];if(i)console[i](`[${n}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)},Bt=class{constructor(t){this.name=t,this._logLevel=ks,this._logHandler=Ps,this._userLogHandler=null,Ss.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in q))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?xs[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...t),this._logHandler(this,q.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...t),this._logHandler(this,q.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,q.INFO,...t),this._logHandler(this,q.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,q.WARN,...t),this._logHandler(this,q.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...t),this._logHandler(this,q.ERROR,...t)}};var Vs=(e,t)=>t.some(r=>e instanceof r),Fn,Bn;function Cs(){return Fn||(Fn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Os(){return Bn||(Bn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}var $n=new WeakMap,dr=new WeakMap,Un=new WeakMap,hr=new WeakMap,gr=new WeakMap;function Ms(e){let t=new Promise((r,n)=>{let i=()=>{e.removeEventListener("success",a),e.removeEventListener("error",l)},a=()=>{r(gt(e.result)),i()},l=()=>{n(e.error),i()};e.addEventListener("success",a),e.addEventListener("error",l)});return t.then(r=>{r instanceof IDBCursor&&$n.set(r,e)}).catch(()=>{}),gr.set(t,e),t}function Ls(e){if(dr.has(e))return;let t=new Promise((r,n)=>{let i=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",l),e.removeEventListener("abort",l)},a=()=>{r(),i()},l=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",a),e.addEventListener("error",l),e.addEventListener("abort",l)});dr.set(e,t)}var pr={get(e,t,r){if(e instanceof IDBTransaction){if(t==="done")return dr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Un.get(e);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return gt(e[t])},set(e,t,r){return e[t]=r,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function qn(e){pr=e(pr)}function Fs(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){let n=e.call(Ne(this),t,...r);return Un.set(n,t.sort?t.sort():[t]),gt(n)}:Os().includes(e)?function(...t){return e.apply(Ne(this),t),gt($n.get(this))}:function(...t){return gt(e.apply(Ne(this),t))}}function Bs(e){return typeof e=="function"?Fs(e):(e instanceof IDBTransaction&&Ls(e),Vs(e,Cs())?new Proxy(e,pr):e)}function gt(e){if(e instanceof IDBRequest)return Ms(e);if(hr.has(e))return hr.get(e);let t=Bs(e);return t!==e&&(hr.set(e,t),gr.set(t,e)),t}var Ne=e=>gr.get(e);function Gn(e,t,{blocked:r,upgrade:n,blocking:i,terminated:a}={}){let l=indexedDB.open(e,t),p=gt(l);return n&&l.addEventListener("upgradeneeded",g=>{n(gt(l.result),g.oldVersion,g.newVersion,gt(l.transaction),g)}),r&&l.addEventListener("blocked",g=>r(g.oldVersion,g.newVersion,g)),p.then(g=>{a&&g.addEventListener("close",()=>a()),i&&g.addEventListener("versionchange",_=>i(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}var $s=["get","getKey","getAll","getAllKeys","count"],Us=["put","add","delete","clear"],mr=new Map;function jn(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(mr.get(t))return mr.get(t);let r=t.replace(/FromIndex$/,""),n=t!==r,i=Us.includes(r);if(!(r in(n?IDBIndex:IDBObjectStore).prototype)||!(i||$s.includes(r)))return;let a=async function(l,...p){let g=this.transaction(l,i?"readwrite":"readonly"),_=g.store;return n&&(_=_.index(p.shift())),(await Promise.all([_[r](...p),i&&g.done]))[0]};return mr.set(t,a),a}qn(e=>({...e,get:(t,r,n)=>jn(t,r)||e.get(t,r,n),has:(t,r)=>!!jn(t,r)||e.has(t,r)}));var _r=class{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(qs(r)){let n=r.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(r=>r).join(" ")}};function qs(e){return e.getComponent()?.type==="VERSION"}var vr="@firebase/app",Hn="0.16.2";var Tt=new Bt("@firebase/app"),js="@firebase/app-compat",Gs="@firebase/analytics-compat",Hs="@firebase/analytics",zs="@firebase/app-check-compat",Ws="@firebase/app-check",Ks="@firebase/auth",Qs="@firebase/auth-compat",Js="@firebase/database",Ys="@firebase/data-connect",Xs="@firebase/database-compat",Zs="@firebase/functions",to="@firebase/functions-compat",eo="@firebase/installations",ro="@firebase/installations-compat",no="@firebase/messaging",io="@firebase/messaging-compat",so="@firebase/performance",oo="@firebase/performance-compat",ao="@firebase/remote-config",uo="@firebase/remote-config-compat",co="@firebase/storage",lo="@firebase/storage-compat",fo="@firebase/firestore",ho="@firebase/ai",po="@firebase/firestore-compat",go="firebase",mo="12.19.0";var wr="[DEFAULT]",yo={[vr]:"fire-core",[js]:"fire-core-compat",[Hs]:"fire-analytics",[Gs]:"fire-analytics-compat",[Ws]:"fire-app-check",[zs]:"fire-app-check-compat",[Ks]:"fire-auth",[Qs]:"fire-auth-compat",[Js]:"fire-rtdb",[Ys]:"fire-data-connect",[Xs]:"fire-rtdb-compat",[Zs]:"fire-fn",[to]:"fire-fn-compat",[eo]:"fire-iid",[ro]:"fire-iid-compat",[no]:"fire-fcm",[io]:"fire-fcm-compat",[so]:"fire-perf",[oo]:"fire-perf-compat",[ao]:"fire-rc",[uo]:"fire-rc-compat",[co]:"fire-gcs",[lo]:"fire-gcs-compat",[fo]:"fire-fst",[po]:"fire-fst-compat",[ho]:"fire-vertex","fire-js":"fire-js",[go]:"fire-js-all"};var De=new Map,_o=new Map,br=new Map;function zn(e,t){try{e.container.addComponent(t)}catch(r){Tt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,r)}}function te(e){let t=e.name;if(br.has(t))return Tt.debug(`There were multiple attempts to register component ${t}.`),!1;br.set(t,e);for(let r of De.values())zn(r,e);for(let r of _o.values())zn(r,e);return!0}function Jn(e,t){let r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}function Yn(e){return e==null?!1:e.settings!==void 0}var vo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new Zt("app","Firebase",vo);var Er=class{constructor(t,r,n){this._isDeleted=!1,this._options={...t},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Et("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}};var Xn=mo;function Ir(e,t={}){let r=e;typeof t!="object"&&(t={name:t});let n={name:wr,automaticDataCollectionEnabled:!0,...t},i=n.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(r||(r=cr()),!r)throw At.create("no-options");let a=De.get(i);if(a)if(Rt(r,a.options)){if(Rt(n,a.config))return a;throw At.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(a.config),newValue:JSON.stringify(n)})}else throw At.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(a.options),newValue:JSON.stringify(r)});let l=new Ie(i);for(let g of br.values())l.addComponent(g);let p=new Er(r,n,l);return De.set(i,p),p}function Zn(e=wr){let t=De.get(e);if(!t&&e===wr&&cr())return Ir();if(!t)throw At.create("no-app",{appName:e});return t}function St(e,t,r){let n=yo[e]??e;r&&(n+=`-${r}`);let i=n.match(/\s|\//),a=t.match(/\s|\//);if(i||a){let l=[`Unable to register library "${n}" with version "${t}":`];i&&l.push(`library name "${n}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Tt.warn(l.join(" "));return}te(new Et(`${n}-version`,()=>({library:n,version:t}),"VERSION"))}var wo="firebase-heartbeat-database",bo=1,ee="firebase-heartbeat-store",yr=null;function ti(){return yr||(yr=Gn(wo,bo,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ee)}catch(r){console.warn(r)}}}}).catch(e=>{throw At.create("idb-open",{originalErrorMessage:e.message})})),yr}async function Eo(e){try{let r=(await ti()).transaction(ee),n=await r.objectStore(ee).get(ei(e));return await r.done,n}catch(t){if(t instanceof bt)Tt.warn(t.message);else{let r=At.create("idb-get",{originalErrorMessage:t?.message});Tt.warn(r.message)}}}async function Wn(e,t){try{let n=(await ti()).transaction(ee,"readwrite");await n.objectStore(ee).put(t,ei(e)),await n.done}catch(r){if(r instanceof bt)Tt.warn(r.message);else{let n=At.create("idb-set",{originalErrorMessage:r?.message});Tt.warn(n.message)}}}function ei(e){return`${e.name}!${e.options.appId}`}var Ao=1024,To=30,Ar=class{constructor(t){this.container=t,this._heartbeatsCache=null;let r=this.container.getProvider("app").getImmediate();this._storage=new Tr(r),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{let r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Kn();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(i=>i.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:r}),this._heartbeatsCache.heartbeats.length>To){let i=No(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(t){Tt.warn(t)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";let t=Kn(),{heartbeatsToSend:r,unsentEntries:n}=Io(this._heartbeatsCache.heartbeats),i=Xt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Tt.warn(t),""}}};function Kn(){return new Date().toISOString().substring(0,10)}function Io(e,t=Ao){let r=[],n=e.slice();for(let i of e){let a=r.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),Qn(r)>t){a.dates.pop();break}}else if(r.push({agent:i.agent,dates:[i.date]}),Qn(r)>t){r.pop();break}n=n.slice(1)}return{heartbeatsToSend:r,unsentEntries:n}}var Tr=class{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return On()?Mn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){let r=await Eo(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){let n=await this.read();return Wn(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){let n=await this.read();return Wn(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}else return}};function Qn(e){return Xt(JSON.stringify({version:2,heartbeats:e})).length}function No(e){if(e.length===0)return-1;let t=0,r=e[0].date;for(let n=1;n<e.length;n++)e[n].date<r&&(r=e[n].date,t=n);return t}function Do(e){te(new Et("platform-logger",t=>new _r(t),"PRIVATE")),te(new Et("heartbeat",t=>new Ar(t),"PRIVATE")),St(vr,Hn,e),St(vr,Hn,"esm2020"),St("fire-js","")}Do("");var So="firebase",xo="12.19.0";St(So,xo,"app");var ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ni={};var Nr,ko;(function(){var e;function t(u,o){function s(){}s.prototype=o.prototype,u.F=o.prototype,u.prototype=new s,u.prototype.constructor=u,u.D=function(f,c,d){for(var h=Array(arguments.length-2),P=2;P<arguments.length;P++)h[P-2]=arguments[P];return o.prototype[c].apply(f,h)}}function r(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(n,r),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(u,o,s){s||(s=0);let f=Array(16);if(typeof o=="string")for(var c=0;c<16;++c)f[c]=o.charCodeAt(s++)|o.charCodeAt(s++)<<8|o.charCodeAt(s++)<<16|o.charCodeAt(s++)<<24;else for(c=0;c<16;++c)f[c]=o[s++]|o[s++]<<8|o[s++]<<16|o[s++]<<24;o=u.g[0],s=u.g[1],c=u.g[2];let d=u.g[3],h;h=o+(d^s&(c^d))+f[0]+3614090360&4294967295,o=s+(h<<7&4294967295|h>>>25),h=d+(c^o&(s^c))+f[1]+3905402710&4294967295,d=o+(h<<12&4294967295|h>>>20),h=c+(s^d&(o^s))+f[2]+606105819&4294967295,c=d+(h<<17&4294967295|h>>>15),h=s+(o^c&(d^o))+f[3]+3250441966&4294967295,s=c+(h<<22&4294967295|h>>>10),h=o+(d^s&(c^d))+f[4]+4118548399&4294967295,o=s+(h<<7&4294967295|h>>>25),h=d+(c^o&(s^c))+f[5]+1200080426&4294967295,d=o+(h<<12&4294967295|h>>>20),h=c+(s^d&(o^s))+f[6]+2821735955&4294967295,c=d+(h<<17&4294967295|h>>>15),h=s+(o^c&(d^o))+f[7]+4249261313&4294967295,s=c+(h<<22&4294967295|h>>>10),h=o+(d^s&(c^d))+f[8]+1770035416&4294967295,o=s+(h<<7&4294967295|h>>>25),h=d+(c^o&(s^c))+f[9]+2336552879&4294967295,d=o+(h<<12&4294967295|h>>>20),h=c+(s^d&(o^s))+f[10]+4294925233&4294967295,c=d+(h<<17&4294967295|h>>>15),h=s+(o^c&(d^o))+f[11]+2304563134&4294967295,s=c+(h<<22&4294967295|h>>>10),h=o+(d^s&(c^d))+f[12]+1804603682&4294967295,o=s+(h<<7&4294967295|h>>>25),h=d+(c^o&(s^c))+f[13]+4254626195&4294967295,d=o+(h<<12&4294967295|h>>>20),h=c+(s^d&(o^s))+f[14]+2792965006&4294967295,c=d+(h<<17&4294967295|h>>>15),h=s+(o^c&(d^o))+f[15]+1236535329&4294967295,s=c+(h<<22&4294967295|h>>>10),h=o+(c^d&(s^c))+f[1]+4129170786&4294967295,o=s+(h<<5&4294967295|h>>>27),h=d+(s^c&(o^s))+f[6]+3225465664&4294967295,d=o+(h<<9&4294967295|h>>>23),h=c+(o^s&(d^o))+f[11]+643717713&4294967295,c=d+(h<<14&4294967295|h>>>18),h=s+(d^o&(c^d))+f[0]+3921069994&4294967295,s=c+(h<<20&4294967295|h>>>12),h=o+(c^d&(s^c))+f[5]+3593408605&4294967295,o=s+(h<<5&4294967295|h>>>27),h=d+(s^c&(o^s))+f[10]+38016083&4294967295,d=o+(h<<9&4294967295|h>>>23),h=c+(o^s&(d^o))+f[15]+3634488961&4294967295,c=d+(h<<14&4294967295|h>>>18),h=s+(d^o&(c^d))+f[4]+3889429448&4294967295,s=c+(h<<20&4294967295|h>>>12),h=o+(c^d&(s^c))+f[9]+568446438&4294967295,o=s+(h<<5&4294967295|h>>>27),h=d+(s^c&(o^s))+f[14]+3275163606&4294967295,d=o+(h<<9&4294967295|h>>>23),h=c+(o^s&(d^o))+f[3]+4107603335&4294967295,c=d+(h<<14&4294967295|h>>>18),h=s+(d^o&(c^d))+f[8]+1163531501&4294967295,s=c+(h<<20&4294967295|h>>>12),h=o+(c^d&(s^c))+f[13]+2850285829&4294967295,o=s+(h<<5&4294967295|h>>>27),h=d+(s^c&(o^s))+f[2]+4243563512&4294967295,d=o+(h<<9&4294967295|h>>>23),h=c+(o^s&(d^o))+f[7]+1735328473&4294967295,c=d+(h<<14&4294967295|h>>>18),h=s+(d^o&(c^d))+f[12]+2368359562&4294967295,s=c+(h<<20&4294967295|h>>>12),h=o+(s^c^d)+f[5]+4294588738&4294967295,o=s+(h<<4&4294967295|h>>>28),h=d+(o^s^c)+f[8]+2272392833&4294967295,d=o+(h<<11&4294967295|h>>>21),h=c+(d^o^s)+f[11]+1839030562&4294967295,c=d+(h<<16&4294967295|h>>>16),h=s+(c^d^o)+f[14]+4259657740&4294967295,s=c+(h<<23&4294967295|h>>>9),h=o+(s^c^d)+f[1]+2763975236&4294967295,o=s+(h<<4&4294967295|h>>>28),h=d+(o^s^c)+f[4]+1272893353&4294967295,d=o+(h<<11&4294967295|h>>>21),h=c+(d^o^s)+f[7]+4139469664&4294967295,c=d+(h<<16&4294967295|h>>>16),h=s+(c^d^o)+f[10]+3200236656&4294967295,s=c+(h<<23&4294967295|h>>>9),h=o+(s^c^d)+f[13]+681279174&4294967295,o=s+(h<<4&4294967295|h>>>28),h=d+(o^s^c)+f[0]+3936430074&4294967295,d=o+(h<<11&4294967295|h>>>21),h=c+(d^o^s)+f[3]+3572445317&4294967295,c=d+(h<<16&4294967295|h>>>16),h=s+(c^d^o)+f[6]+76029189&4294967295,s=c+(h<<23&4294967295|h>>>9),h=o+(s^c^d)+f[9]+3654602809&4294967295,o=s+(h<<4&4294967295|h>>>28),h=d+(o^s^c)+f[12]+3873151461&4294967295,d=o+(h<<11&4294967295|h>>>21),h=c+(d^o^s)+f[15]+530742520&4294967295,c=d+(h<<16&4294967295|h>>>16),h=s+(c^d^o)+f[2]+3299628645&4294967295,s=c+(h<<23&4294967295|h>>>9),h=o+(c^(s|~d))+f[0]+4096336452&4294967295,o=s+(h<<6&4294967295|h>>>26),h=d+(s^(o|~c))+f[7]+1126891415&4294967295,d=o+(h<<10&4294967295|h>>>22),h=c+(o^(d|~s))+f[14]+2878612391&4294967295,c=d+(h<<15&4294967295|h>>>17),h=s+(d^(c|~o))+f[5]+4237533241&4294967295,s=c+(h<<21&4294967295|h>>>11),h=o+(c^(s|~d))+f[12]+1700485571&4294967295,o=s+(h<<6&4294967295|h>>>26),h=d+(s^(o|~c))+f[3]+2399980690&4294967295,d=o+(h<<10&4294967295|h>>>22),h=c+(o^(d|~s))+f[10]+4293915773&4294967295,c=d+(h<<15&4294967295|h>>>17),h=s+(d^(c|~o))+f[1]+2240044497&4294967295,s=c+(h<<21&4294967295|h>>>11),h=o+(c^(s|~d))+f[8]+1873313359&4294967295,o=s+(h<<6&4294967295|h>>>26),h=d+(s^(o|~c))+f[15]+4264355552&4294967295,d=o+(h<<10&4294967295|h>>>22),h=c+(o^(d|~s))+f[6]+2734768916&4294967295,c=d+(h<<15&4294967295|h>>>17),h=s+(d^(c|~o))+f[13]+1309151649&4294967295,s=c+(h<<21&4294967295|h>>>11),h=o+(c^(s|~d))+f[4]+4149444226&4294967295,o=s+(h<<6&4294967295|h>>>26),h=d+(s^(o|~c))+f[11]+3174756917&4294967295,d=o+(h<<10&4294967295|h>>>22),h=c+(o^(d|~s))+f[2]+718787259&4294967295,c=d+(h<<15&4294967295|h>>>17),h=s+(d^(c|~o))+f[9]+3951481745&4294967295,u.g[0]=u.g[0]+o&4294967295,u.g[1]=u.g[1]+(c+(h<<21&4294967295|h>>>11))&4294967295,u.g[2]=u.g[2]+c&4294967295,u.g[3]=u.g[3]+d&4294967295}n.prototype.v=function(u,o){o===void 0&&(o=u.length);let s=o-this.blockSize,f=this.C,c=this.h,d=0;for(;d<o;){if(c==0)for(;d<=s;)i(this,u,d),d+=this.blockSize;if(typeof u=="string"){for(;d<o;)if(f[c++]=u.charCodeAt(d++),c==this.blockSize){i(this,f),c=0;break}}else for(;d<o;)if(f[c++]=u[d++],c==this.blockSize){i(this,f),c=0;break}}this.h=c,this.o+=o},n.prototype.A=function(){var u=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);u[0]=128;for(var o=1;o<u.length-8;++o)u[o]=0;o=this.o*8;for(var s=u.length-8;s<u.length;++s)u[s]=o&255,o/=256;for(this.v(u),u=Array(16),o=0,s=0;s<4;++s)for(let f=0;f<32;f+=8)u[o++]=this.g[s]>>>f&255;return u};function a(u,o){var s=p;return Object.prototype.hasOwnProperty.call(s,u)?s[u]:s[u]=o(u)}function l(u,o){this.h=o;let s=[],f=!0;for(let c=u.length-1;c>=0;c--){let d=u[c]|0;f&&d==o||(s[c]=d,f=!1)}this.g=s}var p={};function g(u){return-128<=u&&u<128?a(u,function(o){return new l([o|0],o<0?-1:0)}):new l([u|0],u<0?-1:0)}function _(u){if(isNaN(u)||!isFinite(u))return k;if(u<0)return $(_(-u));let o=[],s=1;for(let f=0;u>=s;f++)o[f]=u/s|0,s*=4294967296;return new l(o,0)}function D(u,o){if(u.length==0)throw Error("number format error: empty string");if(o=o||10,o<2||36<o)throw Error("radix out of range: "+o);if(u.charAt(0)=="-")return $(D(u.substring(1),o));if(u.indexOf("-")>=0)throw Error('number format error: interior "-" character');let s=_(Math.pow(o,8)),f=k;for(let d=0;d<u.length;d+=8){var c=Math.min(8,u.length-d);let h=parseInt(u.substring(d,d+c),o);c<8?(c=_(Math.pow(o,c)),f=f.j(c).add(_(h))):(f=f.j(s),f=f.add(_(h)))}return f}var k=g(0),R=g(1),U=g(16777216);e=l.prototype,e.m=function(){if(j(this))return-$(this).m();let u=0,o=1;for(let s=0;s<this.g.length;s++){let f=this.i(s);u+=(f>=0?f:4294967296+f)*o,o*=4294967296}return u},e.toString=function(u){if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(B(this))return"0";if(j(this))return"-"+$(this).toString(u);let o=_(Math.pow(u,6));var s=this;let f="";for(;;){let c=T(s,o).g;s=it(s,c.j(o));let d=((s.g.length>0?s.g[0]:s.h)>>>0).toString(u);if(s=c,B(s))return d+f;for(;d.length<6;)d="0"+d;f=d+f}},e.i=function(u){return u<0?0:u<this.g.length?this.g[u]:this.h};function B(u){if(u.h!=0)return!1;for(let o=0;o<u.g.length;o++)if(u.g[o]!=0)return!1;return!0}function j(u){return u.h==-1}e.l=function(u){return u=it(this,u),j(u)?-1:B(u)?0:1};function $(u){let o=u.g.length,s=[];for(let f=0;f<o;f++)s[f]=~u.g[f];return new l(s,~u.h).add(R)}e.abs=function(){return j(this)?$(this):this},e.add=function(u){let o=Math.max(this.g.length,u.g.length),s=[],f=0;for(let c=0;c<=o;c++){let d=f+(this.i(c)&65535)+(u.i(c)&65535),h=(d>>>16)+(this.i(c)>>>16)+(u.i(c)>>>16);f=h>>>16,d&=65535,h&=65535,s[c]=h<<16|d}return new l(s,s[s.length-1]&-2147483648?-1:0)};function it(u,o){return u.add($(o))}e.j=function(u){if(B(this)||B(u))return k;if(j(this))return j(u)?$(this).j($(u)):$($(this).j(u));if(j(u))return $(this.j($(u)));if(this.l(U)<0&&u.l(U)<0)return _(this.m()*u.m());let o=this.g.length+u.g.length,s=[];for(var f=0;f<2*o;f++)s[f]=0;for(f=0;f<this.g.length;f++)for(let c=0;c<u.g.length;c++){let d=this.i(f)>>>16,h=this.i(f)&65535,P=u.i(c)>>>16,L=u.i(c)&65535;s[2*f+2*c]+=h*L,I(s,2*f+2*c),s[2*f+2*c+1]+=d*L,I(s,2*f+2*c+1),s[2*f+2*c+1]+=h*P,I(s,2*f+2*c+1),s[2*f+2*c+2]+=d*P,I(s,2*f+2*c+2)}for(u=0;u<o;u++)s[u]=s[2*u+1]<<16|s[2*u];for(u=o;u<2*o;u++)s[u]=0;return new l(s,0)};function I(u,o){for(;(u[o]&65535)!=u[o];)u[o+1]+=u[o]>>>16,u[o]&=65535,o++}function N(u,o){this.g=u,this.h=o}function T(u,o){if(B(o))throw Error("division by zero");if(B(u))return new N(k,k);if(j(u))return o=T($(u),o),new N($(o.g),$(o.h));if(j(o))return o=T(u,$(o)),new N($(o.g),o.h);if(u.g.length>30){if(j(u)||j(o))throw Error("slowDivide_ only works with positive integers.");for(var s=R,f=o;f.l(u)<=0;)s=m(s),f=m(f);var c=y(s,1),d=y(f,1);for(f=y(f,2),s=y(s,2);!B(f);){var h=d.add(f);h.l(u)<=0&&(c=c.add(s),d=h),f=y(f,1),s=y(s,1)}return o=it(u,c.j(o)),new N(c,o)}for(c=k;u.l(o)>=0;){for(s=Math.max(1,Math.floor(u.m()/o.m())),f=Math.ceil(Math.log(s)/Math.LN2),f=f<=48?1:Math.pow(2,f-48),d=_(s),h=d.j(o);j(h)||h.l(u)>0;)s-=f,d=_(s),h=d.j(o);B(d)&&(d=R),c=c.add(d),u=it(u,h)}return new N(c,u)}e.B=function(u){return T(this,u).h},e.and=function(u){let o=Math.max(this.g.length,u.g.length),s=[];for(let f=0;f<o;f++)s[f]=this.i(f)&u.i(f);return new l(s,this.h&u.h)},e.or=function(u){let o=Math.max(this.g.length,u.g.length),s=[];for(let f=0;f<o;f++)s[f]=this.i(f)|u.i(f);return new l(s,this.h|u.h)},e.xor=function(u){let o=Math.max(this.g.length,u.g.length),s=[];for(let f=0;f<o;f++)s[f]=this.i(f)^u.i(f);return new l(s,this.h^u.h)};function m(u){let o=u.g.length+1,s=[];for(let f=0;f<o;f++)s[f]=u.i(f)<<1|u.i(f-1)>>>31;return new l(s,u.h)}function y(u,o){let s=o>>5;o%=32;let f=u.g.length-s,c=[];for(let d=0;d<f;d++)c[d]=o>0?u.i(d+s)>>>o|u.i(d+s+1)<<32-o:u.i(d+s);return new l(c,u.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,ko=ni.Md5=n,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=_,l.fromString=D,Nr=ni.Integer=l}).apply(typeof ri<"u"?ri:typeof self<"u"?self:typeof window<"u"?window:{});var rt=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");var Kt="12.19.0";function vi(e){Kt=e}var jt=new Bt("@firebase/firestore");function se(e,...t){if(jt.logLevel<=q.DEBUG){let r=t.map(pn);jt.debug(`Firestore (${Kt}): ${e}`,...r)}}function rr(e,...t){if(jt.logLevel<=q.ERROR){let r=t.map(pn);jt.error(`Firestore (${Kt}): ${e}`,...r)}}function wi(e,...t){if(jt.logLevel<=q.WARN){let r=t.map(pn);jt.warn(`Firestore (${Kt}): ${e}`,...r)}}function pn(e){if(typeof e=="string")return e;try{return function(r){return JSON.stringify(r)}(e)}catch{return e}}function z(e,t,r){let n="Unexpected state";typeof t=="string"?n=t:r=t,bi(e,n,r)}function bi(e,t,r){let n=`FIRESTORE (${Kt}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(r!==void 0)try{n+=" CONTEXT: "+JSON.stringify(r)}catch{n+=" CONTEXT: "+r}throw rr(n),new Error(n)}function ot(e,t,r,n){let i="Unexpected state";typeof r=="string"?i=r:n=r,e||bi(t,i,n)}function ve(e,t){return e}var x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},V=class extends bt{constructor(t,r){super(t,r),this.code=t,this.message=r,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};var Re=class{constructor(t,r){this.user=r,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}},kr=class{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,r){t.enqueueRetryable(()=>r(rt.UNAUTHENTICATED))}shutdown(){}},Rr=class{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,r){this.changeListener=r,t.enqueueRetryable(()=>r(this.token.user))}shutdown(){this.changeListener=null}},Pe=class{constructor(t){this.auth=null,t.onInit(r=>{this.auth=r})}getToken(){return this.auth?this.auth.getToken().then(t=>t?(ot(typeof t.accessToken=="string",42297,{Z:t}),new Re(t.accessToken,new rt(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(t,r){}shutdown(){}},Pr=class{constructor(t,r,n){this.ee=t,this.te=r,this.re=n,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.ne=new Map}ie(){return this.re?this.re():null}get headers(){this.ne.set("X-Goog-AuthUser",this.ee);let t=this.ie();return t&&this.ne.set("Authorization",t),this.te&&this.ne.set("X-Goog-Iam-Authorization-Token",this.te),this.ne}},Vr=class{constructor(t,r,n){this.ee=t,this.te=r,this.re=n}getToken(){return Promise.resolve(new Pr(this.ee,this.te,this.re))}start(t,r){t.enqueueRetryable(()=>r(rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}},Ve=class{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}},Ce=class{constructor(t,r){this.se=r,this.appCheck=null,this.oe=null,Yn(t)&&t.settings.appCheckToken&&(this.oe=t.settings.appCheckToken),r.onInit(n=>{this.appCheck=n})}getToken(){return this.oe?Promise.resolve(new Ve(this.oe)):this.appCheck?this.appCheck.getToken().then(t=>t?(ot(typeof t.token=="string",3470,{tokenResult:t}),new Ve(t.token)):null):Promise.resolve(null)}invalidateToken(){}start(t,r){}shutdown(){}};var Cr=class{constructor(t,r,n,i,a,l,p,g,_,D,k,R,U){this.databaseId=t,this.appId=r,this.persistenceKey=n,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=D,this.apiKey=k,this._customHeaders=R,this.grpcFlowControlWindow=U}},Or="(default)",Oe=class e{constructor(t,r){this.projectId=t,this.database=r||Or}static empty(){return new e("","")}get isDefaultDatabase(){return this.database===Or}isEqual(t){return t instanceof e&&t.projectId===this.projectId&&t.database===this.database}};function Ei(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new V(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(e.options.projectId,t)}function Ro(e){let t=typeof self<"u"&&(self.crypto||self.msCrypto),r=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(r);else for(let n=0;n<e;n++)r[n]=Math.floor(256*Math.random());return r}var Mr=class{static newId(){let t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=62*Math.floor(4.129032258064516),n="";for(;n.length<20;){let i=Ro(40);for(let a=0;a<i.length;++a)n.length<20&&i[a]<r&&(n+=t.charAt(i[a]%62))}return n}};function W(e,t){return e<t?-1:e>t?1:0}function Lr(e,t){let r=Math.min(e.length,t.length);for(let n=0;n<r;n++){let i=e.charAt(n),a=t.charAt(n);if(i!==a)return Dr(i)===Dr(a)?W(i,a):Dr(i)?1:-1}return W(e.length,t.length)}var Po=55296,Vo=57343;function Dr(e){let t=e.charCodeAt(0);return t>=Po&&t<=Vo}function Ai(e,t,r){return e.length===t.length&&e.every((n,i)=>r(n,t[i]))}var ii="__name__",Me=class e{constructor(t,r,n){r===void 0?r=0:r>t.length&&z(637,{offset:r,range:t.length}),n===void 0?n=t.length-r:n>t.length-r&&z(1746,{length:n,range:t.length-r}),this.segments=t,this.offset=r,this.len=n}get length(){return this.len}isEqual(t){return e.comparator(this,t)===0}child(t){let r=this.segments.slice(this.offset,this.limit());return t instanceof e?t.forEach(n=>{r.push(n)}):r.push(t),this.construct(r)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let r=0;r<this.length;r++)if(this.get(r)!==t.get(r))return!1;return!0}forEach(t){for(let r=this.offset,n=this.limit();r<n;r++)t(this.segments[r])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,r){let n=Math.min(t.length,r.length);for(let i=0;i<n;i++){let a=e.compareSegments(t.get(i),r.get(i));if(a!==0)return a}return W(t.length,r.length)}static compareSegments(t,r){let n=e.isNumericId(t),i=e.isNumericId(r);return n&&!i?-1:!n&&i?1:n&&i?e.extractNumericId(t).compare(e.extractNumericId(r)):Lr(t,r)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Nr.fromString(t.substring(4,t.length-2))}},Y=class e extends Me{construct(t,r,n){return new e(t,r,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){let r=[];for(let n of t){if(n.indexOf("//")>=0)throw new V(x.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);r.push(...n.split("/").filter(i=>i.length>0))}return new e(r)}static emptyPath(){return new e([])}},Co=/^[_a-zA-Z][_a-zA-Z0-9]*$/,xt=class $t extends Me{construct(t,r,n){return new $t(t,r,n)}static isValidIdentifier(t){return Co.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ii}static keyField(){return new $t([ii])}static fromServerFormat(t){let r=[],n="",i=0,a=()=>{if(n.length===0)throw new V(x.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);r.push(n),n=""},l=!1;for(;i<t.length;){let p=t[i];if(p==="\\"){if(i+1===t.length)throw new V(x.INVALID_ARGUMENT,"Path has trailing escape character: "+t);let g=t[i+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new V(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=g,i+=2}else p==="`"?(l=!l,i++):p!=="."||l?(n+=p,i++):(a(),i++)}if(a(),l)throw new V(x.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new $t(r)}static emptyPath(){return new $t([])}};var nt=class e{constructor(t){this.path=t}static fromPath(t){return new e(Y.fromString(t))}static fromName(t){return new e(Y.fromString(t).popFirst(5))}static empty(){return new e(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,r){return Y.comparator(t.path,r.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new e(new Y(t.slice()))}};function Ti(e,t,r){if(!r)throw new V(x.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function si(e){if(!nt.isDocumentKey(e))throw new V(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function oi(e){if(nt.isDocumentKey(e))throw new V(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ii(e){return typeof e=="object"&&e!==null&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null)}function gn(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{let t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":z(12329,{type:typeof e})}function Qt(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new V(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let r=gn(e);throw new V(x.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${r}`)}}return e}function Ni(e){let t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}var Se=null;function Oo(){return Se===null?Se=function(){return 268435456+Math.round(2147483648*Math.random())}():Se++,"0x"+Se.toString(16)}function Di(e){return e==null}function Le(e){return e===0&&1/e==-1/0}var Sr="RestConnection",Mo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"},Fr=class{get ae(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;let r=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.ue=r+"://"+t.host,this._e=`projects/${n}/databases/${i}`,this.ce=this.databaseId.database===Or?`project_id=${n}`:`project_id=${n}&database_id=${i}`}le(t,r,n,i,a){let l=Oo(),p=this.he(t,r.toUriEncodedString());se(Sr,`Sending RPC '${t}' ${l}:`,p,n);let g={"google-cloud-resource-prefix":this._e,"x-goog-request-params":this.ce};this.fe(g,i,a);let{host:_}=new URL(p),D=lr(_);return this.me(t,p,g,n,D).then(k=>(se(Sr,`Received RPC '${t}' ${l}: `,k),k),k=>{throw wi(Sr,`RPC '${t}' ${l} failed with error: `,k,"url: ",p,"request:",n),k})}de(t,r,n,i,a,l){return this.le(t,r,n,i,a)}fe(t,r,n){if(t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Kt}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,a)=>t[a]=i),n&&n.headers.forEach((i,a)=>t[a]=i),this.databaseInfo._customHeaders)for(let i of Object.keys(this.databaseInfo._customHeaders))t[i]=this.databaseInfo._customHeaders[i]}he(t,r){let n=Mo[t],i=`${this.ue}/v1/${r}:${n}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}};var ai,F;function ui(e){if(e===void 0)return rr("RPC_ERROR","HTTP error has no status"),x.UNKNOWN;switch(e){case 200:return x.OK;case 400:return x.FAILED_PRECONDITION;case 401:return x.UNAUTHENTICATED;case 403:return x.PERMISSION_DENIED;case 404:return x.NOT_FOUND;case 409:return x.ABORTED;case 416:return x.OUT_OF_RANGE;case 429:return x.RESOURCE_EXHAUSTED;case 499:return x.CANCELLED;case 500:return x.UNKNOWN;case 501:return x.UNIMPLEMENTED;case 503:return x.UNAVAILABLE;case 504:return x.DEADLINE_EXCEEDED;default:return e>=200&&e<300?x.OK:e>=400&&e<500?x.FAILED_PRECONDITION:e>=500&&e<600?x.INTERNAL:x.UNKNOWN}}(F=ai||(ai={}))[F.OK=0]="OK",F[F.CANCELLED=1]="CANCELLED",F[F.UNKNOWN=2]="UNKNOWN",F[F.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",F[F.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",F[F.NOT_FOUND=5]="NOT_FOUND",F[F.ALREADY_EXISTS=6]="ALREADY_EXISTS",F[F.PERMISSION_DENIED=7]="PERMISSION_DENIED",F[F.UNAUTHENTICATED=16]="UNAUTHENTICATED",F[F.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",F[F.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",F[F.ABORTED=10]="ABORTED",F[F.OUT_OF_RANGE=11]="OUT_OF_RANGE",F[F.UNIMPLEMENTED=12]="UNIMPLEMENTED",F[F.INTERNAL=13]="INTERNAL",F[F.UNAVAILABLE=14]="UNAVAILABLE",F[F.DATA_LOSS=15]="DATA_LOSS";var Br=class extends Fr{Ee(t,r){throw new Error("Not supported by FetchConnection")}async me(t,r,n,i,a){let l=JSON.stringify(i),p;try{let g={method:"POST",headers:n,body:l};a&&(g.credentials="include"),p=await fetch(r,g)}catch(g){let _=g,D=_?.message,k=_?.cause?String(_.cause):void 0,R=(D&&k?`${D} (${k})`:D??k)??_?.statusText??String(g);throw new V(ui(_?.status),`Request failed with error: ${R}`)}if(!p.ok){let g=await p.json();Array.isArray(g)&&(g=g[0]);let _=g?.error?.message;throw new V(ui(p.status),`Request failed with error: ${_??p.statusText}`)}return p.json()}};function ci(e){let t=0;for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t++;return t}function we(e,t){for(let r in e)Object.prototype.hasOwnProperty.call(e,r)&&t(r,e[r])}var $r=class extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};var kt=class e{constructor(t){this.binaryString=t}static fromBase64String(t){let r=function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new $r("Invalid base64 string: "+a):a}}(t);return new e(r)}static fromUint8Array(t){let r=function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a}(t);return new e(r)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(r){return btoa(r)}(this.binaryString)}toUint8Array(){return function(r){let n=new Uint8Array(r.length);for(let i=0;i<r.length;i++)n[i]=r.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return W(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}};kt.EMPTY_BYTE_STRING=new kt("");var Lo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vt(e){if(ot(!!e,39018),typeof e=="string"){let t=0,r=Lo.exec(e);if(ot(!!r,46558,{timestamp:e}),r[1]){let i=r[1];i=(i+"000000000").substr(0,9),t=Number(i)}let n=new Date(e);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:K(e.seconds),nanos:K(e.nanos)}}function K(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function oe(e){return typeof e=="string"?kt.fromBase64String(e):kt.fromUint8Array(e)}function ct(e,t){let r={typeString:e};return t&&(r.value=t),r}function be(e,t){if(!Ii(e))throw new V(x.INVALID_ARGUMENT,"JSON must be an object");let r;for(let n in t)if(t[n]){let i=t[n].typeString,a="value"in t[n]?{value:t[n].value}:void 0;if(!(n in e)){r=`JSON missing required field: '${n}'`;break}let l=e[n];if(i&&typeof l!==i){r=`JSON field '${n}' must be a ${i}.`;break}if(a!==void 0&&l!==a.value){r=`Expected '${n}' field to equal '${a.value}'`;break}}if(r)throw new V(x.INVALID_ARGUMENT,r);return!0}var li=-62135596800,fi=1e6,Z=class e{static now(){return e.fromMillis(Date.now())}static fromDate(t){return e.fromMillis(t.getTime())}static fromMillis(t){let r=Math.floor(t/1e3),n=Math.floor((t-1e3*r)*fi);return new e(r,n)}static fromInstant(t){if(!t||typeof t.Te!="bigint")throw new V(x.INVALID_ARGUMENT,"Invalid Temporal.Instant object provided.");return e._fromEpochNanoseconds(t.Te)}static _fromEpochNanoseconds(t){let r,n;if(t>=0n)r=Number(t/1000000000n),n=Number(t%1000000000n);else{let i=t%1000000000n;i===0n?(r=Number(t/1000000000n),n=0):(r=Number(t/1000000000n-1n),n=Number(i+1000000000n))}return new e(r,n)}constructor(t,r){if(this.seconds=t,this.nanoseconds=r,r<0)throw new V(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(r>=1e9)throw new V(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+r);if(t<li)throw new V(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new V(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/fi}toInstant(){if(typeof Temporal>"u"||!Temporal.Instant)throw new V(x.FAILED_PRECONDITION,"The Temporal object is not available in the current environment.");let t=1000000000n*BigInt(this.seconds)+BigInt(this.nanoseconds);return Temporal.Instant.__PRIVATE_fromEpochNanoseconds(t)}_compareTo(t){return this.seconds===t.seconds?W(this.nanoseconds,t.nanoseconds):W(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(be(t,e._jsonSchema))return new e(t.seconds,t.nanoseconds)}valueOf(){let t=this.seconds-li;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};Z._jsonSchemaVersion="firestore/timestamp/1.0",Z._jsonSchema={type:ct("string",Z._jsonSchemaVersion),seconds:ct("number"),nanoseconds:ct("number")};function Si(e){return(e?.mapValue?.fields||{}).__type__?.stringValue==="server_timestamp"}function xi(e){let t=e.mapValue.fields.__previous_value__;return Si(t)?xi(t):t}function ae(e){let t=Vt(e.mapValue.fields.__local_write_time__.timestampValue);return new Z(t.seconds,t.nanos)}var ki="__type__",Fo="__max__",xe={},Ri="__vector__",Fe="value";function Ct(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Si(e)?4:function(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Fo}(e)?9007199254740991:function(r){return(r?.mapValue?.fields||{})[ki]?.stringValue===Ri}(e)?10:11:z(28295,{value:e})}function Be(e,t,r){if(e===t)return!0;let n=Ct(e);if(n!==Ct(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ae(e).isEqual(ae(t));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;let p=Vt(a.timestampValue),g=Vt(l.timestampValue);return p.seconds===g.seconds&&p.nanos===g.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(a,l){return oe(a.bytesValue).isEqual(oe(l.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(a,l){return K(a.geoPointValue.latitude)===K(l.geoPointValue.latitude)&&K(a.geoPointValue.longitude)===K(l.geoPointValue.longitude)}(e,t);case 2:return function(a,l,p){if("integerValue"in a&&"integerValue"in l)return K(a.integerValue)===K(l.integerValue);let g,_;return!("doubleValue"in a)||!("doubleValue"in l)?!1:(g=K(a.doubleValue),_=K(l.doubleValue),g===_?Le(g)===Le(_):!!(p===void 0||p.Pe)&&isNaN(g)&&isNaN(_))}(e,t,r);case 9:return Ai(e.arrayValue.values||[],t.arrayValue.values||[],(i,a)=>Be(i,a,r));case 10:case 11:return function(a,l,p){let g=a.mapValue.fields||{},_=l.mapValue.fields||{};if(ci(g)!==ci(_))return!1;for(let D in g)if(g.hasOwnProperty(D)&&(_[D]===void 0||!Be(g[D],_[D],p)))return!1;return!0}(e,t,r);default:return z(52216,{left:e})}}function ue(e,t){return(e.values||[]).find(r=>Be(r,t))!==void 0}function $e(e,t){if(e===t)return 0;let r=Ct(e),n=Ct(t);if(r!==n)return W(r,n);switch(r){case 0:case 9007199254740991:return 0;case 1:return W(e.booleanValue,t.booleanValue);case 2:return function(a,l){let p=K(a.integerValue||a.doubleValue),g=K(l.integerValue||l.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1}(e,t);case 3:return hi(e.timestampValue,t.timestampValue);case 4:return hi(ae(e),ae(t));case 5:return Lr(e.stringValue,t.stringValue);case 6:return function(a,l){let p=oe(a),g=oe(l);return p.compareTo(g)}(e.bytesValue,t.bytesValue);case 7:return function(a,l){let p=a.split("/"),g=l.split("/");for(let _=0;_<p.length&&_<g.length;_++){let D=W(p[_],g[_]);if(D!==0)return D}return W(p.length,g.length)}(e.referenceValue,t.referenceValue);case 8:return function(a,l){let p=W(K(a.latitude),K(l.latitude));return p!==0?p:W(K(a.longitude),K(l.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return di(e.arrayValue,t.arrayValue);case 10:return function(a,l){let p=a.fields||{},g=l.fields||{},_=p[Fe]?.arrayValue,D=g[Fe]?.arrayValue,k=W(_?.values?.length||0,D?.values?.length||0);return k!==0?k:di(_,D)}(e.mapValue,t.mapValue);case 11:return function(a,l){if(a===xe&&l===xe)return 0;if(a===xe)return 1;if(l===xe)return-1;let p=a.fields||{},g=Object.keys(p),_=l.fields||{},D=Object.keys(_);g.sort(),D.sort();for(let k=0;k<g.length&&k<D.length;++k){let R=Lr(g[k],D[k]);if(R!==0)return R;let U=$e(p[g[k]],_[D[k]]);if(U!==0)return U}return W(g.length,D.length)}(e.mapValue,t.mapValue);default:throw z(23264,{Re:r})}}function hi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return W(e,t);let r=Vt(e),n=Vt(t),i=W(r.seconds,n.seconds);return i!==0?i:W(r.nanos,n.nanos)}function di(e,t){let r=e.values||[],n=t.values||[];for(let i=0;i<r.length&&i<n.length;++i){let a=$e(r[i],n[i]);if(a!==void 0&&a!==0)return a}return W(r.length,n.length)}function Pi(e){return!!e&&"arrayValue"in e}function pi(e){return!!e&&"nullValue"in e}function gi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function xr(e){return!!e&&"mapValue"in e}function re(e){if(e.geoPointValue)return{geoPointValue:{...e.geoPointValue}};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:{...e.timestampValue}};if(e.mapValue){let t={mapValue:{fields:{}}};return we(e.mapValue.fields,(r,n)=>t.mapValue.fields[r]=re(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let r=0;r<(e.arrayValue.values||[]).length;++r)t.arrayValue.values[r]=re(e.arrayValue.values[r]);return t}return{...e}}var Ue=class{constructor(t,r){this.position=t,this.inclusive=r}};var qe=class{},_t=class e extends qe{constructor(t,r,n){super(),this.field=t,this.op=r,this.value=n}static create(t,r,n){return t.isKeyField()?r==="in"||r==="not-in"?this.createKeyFieldInFilter(t,r,n):new Ur(t,r,n):r==="array-contains"?new Gr(t,n):r==="in"?new Hr(t,n):r==="not-in"?new zr(t,n):r==="array-contains-any"?new Wr(t,n):new e(t,r,n)}static createKeyFieldInFilter(t,r,n){return r==="in"?new qr(t,n):new jr(t,n)}matches(t){let r=t.data.field(this.field);return this.op==="!="?r!==null&&r.nullValue===void 0&&this.matchesComparison($e(r,this.value)):r!==null&&Ct(this.value)===Ct(r)&&this.matchesComparison($e(r,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return z(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}},je=class e extends qe{constructor(t,r){super(),this.filters=t,this.op=r,this.Ae=null}static create(t,r){return new e(t,r)}matches(t){return function(n){return n.op==="and"}(this)?this.filters.find(r=>!r.matches(t))===void 0:this.filters.find(r=>r.matches(t))!==void 0}getFlattenedFilters(){return this.Ae!==null||(this.Ae=this.filters.reduce((t,r)=>t.concat(r.getFlattenedFilters()),[])),this.Ae}getFilters(){return Object.assign([],this.filters)}};var Ur=class extends _t{constructor(t,r,n){super(t,r,n),this.key=nt.fromName(n.referenceValue)}matches(t){let r=nt.comparator(t.key,this.key);return this.matchesComparison(r)}},qr=class extends _t{constructor(t,r){super(t,"in",r),this.keys=Vi("in",r)}matches(t){return this.keys.some(r=>r.isEqual(t.key))}},jr=class extends _t{constructor(t,r){super(t,"not-in",r),this.keys=Vi("not-in",r)}matches(t){return!this.keys.some(r=>r.isEqual(t.key))}};function Vi(e,t){return(t.arrayValue?.values||[]).map(r=>nt.fromName(r.referenceValue))}var Gr=class extends _t{constructor(t,r){super(t,"array-contains",r)}matches(t){let r=t.data.field(this.field);return Pi(r)&&ue(r.arrayValue,this.value)}},Hr=class extends _t{constructor(t,r){super(t,"in",r)}matches(t){let r=t.data.field(this.field);return r!==null&&ue(this.value.arrayValue,r)}},zr=class extends _t{constructor(t,r){super(t,"not-in",r)}matches(t){if(ue(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let r=t.data.field(this.field);return r!==null&&r.nullValue===void 0&&!ue(this.value.arrayValue,r)}},Wr=class extends _t{constructor(t,r){super(t,"array-contains-any",r)}matches(t){let r=t.data.field(this.field);return!(!Pi(r)||!r.arrayValue.values)&&r.arrayValue.values.some(n=>ue(this.value.arrayValue,n))}};var ce=class{constructor(t,r="asc"){this.field=t,this.dir=r}};var et=class e{static fromTimestamp(t){return new e(t)}static min(){return new e(new Z(0,0))}static max(){return new e(new Z(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};var Kr=class e{constructor(t,r){this.comparator=t,this.root=r||mt.EMPTY}insert(t,r){return new e(this.comparator,this.root.insert(t,r,this.comparator).copy(null,null,mt.BLACK,null,null))}remove(t){return new e(this.comparator,this.root.remove(t,this.comparator).copy(null,null,mt.BLACK,null,null))}get(t){let r=this.root;for(;!r.isEmpty();){let n=this.comparator(t,r.key);if(n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}indexOf(t){let r=0,n=this.root;for(;!n.isEmpty();){let i=this.comparator(t,n.key);if(i===0)return r+n.left.size;i<0?n=n.left:(r+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((r,n)=>(t(r,n),!1))}toString(){let t=[];return this.inorderTraversal((r,n)=>(t.push(`${r}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new qt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new qt(this.root,t,this.comparator,!1)}getReverseIterator(){return new qt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new qt(this.root,t,this.comparator,!0)}},qt=class{constructor(t,r,n,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!t.isEmpty();)if(a=r?n(t.key,r):1,r&&i&&(a*=-1),a<0)t=this.isReverse?t.left:t.right;else{if(a===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop(),r={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return r}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;let t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}},mt=class e{constructor(t,r,n,i,a){this.key=t,this.value=r,this.color=n??e.RED,this.left=i??e.EMPTY,this.right=a??e.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,r,n,i,a){return new e(t??this.key,r??this.value,n??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,r,n){let i=this,a=n(t,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(t,r,n),null):a===0?i.copy(null,r,null,null,null):i.copy(null,null,null,null,i.right.insert(t,r,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return e.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,r){let n,i=this;if(r(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,r),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),r(t,i.key)===0){if(i.right.isEmpty())return e.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,r))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){let t=this.copy(null,null,e.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){let t=this.copy(null,null,e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){let t=this.left.copy(null,null,!this.left.color,null,null),r=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,r)}checkMaxDepth(){let t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw z(43730,{key:this.key,value:this.value});if(this.right.isRed())throw z(14113,{key:this.key,value:this.value});let t=this.left.check();if(t!==this.right.check())throw z(27949);return t+(this.isRed()?0:1)}};mt.EMPTY=null,mt.RED=!0,mt.BLACK=!1;mt.EMPTY=new class{constructor(){this.size=0}get key(){throw z(57766)}get value(){throw z(16141)}get color(){throw z(16727)}get left(){throw z(29726)}get right(){throw z(36894)}copy(t,r,n,i,a){return this}insert(t,r,n){return new mt(t,r)}remove(t,r){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};var Ge=class e{constructor(t){this.comparator=t,this.data=new Kr(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((r,n)=>(t(r),!1))}forEachInRange(t,r){let n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){let i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;r(i.key)}}forEachWhile(t,r){let n;for(n=r!==void 0?this.data.getIteratorFrom(r):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){let r=this.data.getIteratorFrom(t);return r.hasNext()?r.getNext().key:null}getIterator(){return new He(this.data.getIterator())}getIteratorFrom(t){return new He(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let r=this;return r.size<t.size&&(r=t,t=this),t.forEach(n=>{r=r.add(n)}),r}isEqual(t){if(!(t instanceof e)||this.size!==t.size)return!1;let r=this.data.getIterator(),n=t.data.getIterator();for(;r.hasNext();){let i=r.getNext().key,a=n.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){let t=[];return this.forEach(r=>{t.push(r)}),t}toString(){let t=[];return this.forEach(r=>t.push(r)),"SortedSet("+t.toString()+")"}copy(t){let r=new e(this.comparator);return r.data=t,r}},He=class{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};var Gt=class e{constructor(t){this.fields=t,t.sort(xt.comparator)}static empty(){return new e([])}unionWith(t){let r=new Ge(xt.comparator);for(let n of this.fields)r=r.add(n);for(let n of t)r=r.add(n);return new e(r.toArray())}covers(t){for(let r of this.fields)if(r.isPrefixOf(t))return!0;return!1}isEqual(t){return Ai(this.fields,t.fields,(r,n)=>r.isEqual(n))}};var st=class e{constructor(t){this.value=t}static empty(){return new e({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let r=this.value;for(let n=0;n<t.length-1;++n)if(r=(r.mapValue.fields||{})[t.get(n)],!xr(r))return null;return r=(r.mapValue.fields||{})[t.lastSegment()],r||null}}set(t,r){this.getFieldsMap(t.popLast())[t.lastSegment()]=re(r)}setAll(t){let r=xt.emptyPath(),n={},i=[];t.forEach((l,p)=>{if(!r.isImmediateParentOf(p)){let g=this.getFieldsMap(r);this.applyChanges(g,n,i),n={},i=[],r=p.popLast()}l?n[p.lastSegment()]=re(l):i.push(p.lastSegment())});let a=this.getFieldsMap(r);this.applyChanges(a,n,i)}delete(t){let r=this.field(t.popLast());xr(r)&&r.mapValue.fields&&delete r.mapValue.fields[t.lastSegment()]}isEqual(t){return Be(this.value,t.value)}getFieldsMap(t){let r=this.value;r.mapValue.fields||(r.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=r.mapValue.fields[t.get(n)];xr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},r.mapValue.fields[t.get(n)]=i),r=i}return r.mapValue.fields}applyChanges(t,r,n){we(r,(i,a)=>t[i]=a);for(let i of n)delete t[i]}clone(){return new e(re(this.value))}};var le=class e{constructor(t,r,n,i,a,l,p){this.key=t,this.documentType=r,this.version=n,this.readTime=i,this.createTime=a,this.data=l,this.documentState=p}static newInvalidDocument(t){return new e(t,0,et.min(),et.min(),et.min(),st.empty(),0)}static newFoundDocument(t,r,n,i){return new e(t,1,r,et.min(),n,i,0)}static newNoDocument(t,r){return new e(t,2,r,et.min(),et.min(),st.empty(),0)}static newUnknownDocument(t,r){return new e(t,3,r,et.min(),et.min(),st.empty(),2)}convertToFoundDocument(t,r){return!this.createTime.isEqual(et.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=r,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=et.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};var Qr=class{constructor(t,r=null,n=[],i=[],a=null,l=null,p=null){this.path=t,this.collectionGroup=r,this.orderBy=n,this.filters=i,this.limit=a,this.startAt=l,this.endAt=p,this.Ie=null}};function mi(e,t=null,r=[],n=[],i=null,a=null,l=null){return new Qr(e,t,r,n,i,a,l)}var Jr=class{constructor(t,r=null,n=[],i=[],a=null,l="F",p=null,g=null){this.path=t,this.collectionGroup=r,this.explicitOrderBy=n,this.filters=i,this.limit=a,this.limitType=l,this.startAt=p,this.endAt=g,this.pe=null,this.ye=null,this.we=null,this.startAt,this.endAt}};function Bo(e){let t=ve(e);if(t.pe===null){t.pe=[];let r=new Set;for(let a of t.explicitOrderBy)t.pe.push(a),r.add(a.field.canonicalString());let n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(l){let p=new Ge(xt.comparator);return l.filters.forEach(g=>{g.getFlattenedFilters().forEach(_=>{_.isInequality()&&(p=p.add(_.field))})}),p})(t).forEach(a=>{r.has(a.canonicalString())||a.isKeyField()||t.pe.push(new ce(a,n))}),r.has(xt.keyField().canonicalString())||t.pe.push(new ce(xt.keyField(),n))}return t.pe}function $o(e){let t=ve(e);return t.ye||(t.ye=Uo(t,Bo(e))),t.ye}function Uo(e,t){if(e.limitType==="F")return mi(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(i=>{let a=i.dir==="desc"?"asc":"desc";return new ce(i.field,a)});let r=e.endAt?new Ue(e.endAt.position,e.endAt.inclusive):null,n=e.startAt?new Ue(e.startAt.position,e.startAt.inclusive):null;return mi(e.path,e.collectionGroup,t,e.filters,e.limit,r,n)}}function Ci(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Le(t)?"-0":t}}function qo(e,t,r){return function(i){return typeof i=="number"&&Number.isInteger(i)&&!Le(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}(t)?function(i){return{integerValue:""+i}}(t):Ci(e,t)}var Ht=class{constructor(){this._=void 0}},ze=class extends Ht{},Yr=class extends Ht{constructor(t){super(),this.elements=t}},Xr=class extends Ht{constructor(t){super(),this.elements=t}},fe=class extends Ht{constructor(t,r){super(),this.serializer=t,this.ge=r}},Zr=class extends fe{},tn=class extends fe{},en=class extends fe{};var rn=class{constructor(t,r){this.field=t,this.transform=r}},he=class e{constructor(t,r){this.updateTime=t,this.exists=r}static none(){return new e}static exists(t){return new e(void 0,t)}static updateTime(t){return new e(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}},zt=class{},We=class extends zt{constructor(t,r,n,i=[]){super(),this.key=t,this.value=r,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}},de=class extends zt{constructor(t,r,n,i,a=[]){super(),this.key=t,this.data=r,this.fieldMask=n,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}},Ke=class extends zt{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}},Qe=class extends zt{constructor(t,r){super(),this.key=t,this.precondition=r,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};var jo={asc:"ASCENDING",desc:"DESCENDING"},Go={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ho={and:"AND",or:"OR"},nn=class{constructor(t,r){this.databaseId=t,this.useProto3Json=r}};function ke(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function zo(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function Wo(e,t){return ke(e,t.toTimestamp())}function ne(e){return ot(!!e,49232),et.fromTimestamp(function(r){let n=Vt(r);return new Z(n.seconds,n.nanos)}(e))}function mn(e,t){return sn(e,t).canonicalString()}function sn(e,t){let r=function(i){return new Y(["projects",i.projectId,"databases",i.database])}(e).child("documents");return t===void 0?r:r.child(t)}function Je(e,t){return mn(e.databaseId,t.path)}function on(e,t){let r=function(i){let a=Y.fromString(i);return ot(Mi(a),10190,{key:a.toString()}),a}(t);if(r.get(1)!==e.databaseId.projectId)throw new V(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+r.get(1)+" vs "+e.databaseId.projectId);if(r.get(3)!==e.databaseId.database)throw new V(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+r.get(3)+" vs "+e.databaseId.database);return new nt(function(i){return ot(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}(r))}function yi(e,t,r){return{name:Je(e,t),fields:r.value.mapValue.fields}}function Ko(e,t){return"found"in t?function(n,i){ot(!!i.found,43571),i.found.name,i.found.updateTime;let a=on(n,i.found.name),l=ne(i.found.updateTime),p=i.found.createTime?ne(i.found.createTime):et.min(),g=new st({mapValue:{fields:i.found.fields}});return le.newFoundDocument(a,l,p,g)}(e,t):"missing"in t?function(n,i){ot(!!i.missing,3894),ot(!!i.readTime,22933);let a=on(n,i.missing),l=ne(i.readTime);return le.newNoDocument(a,l)}(e,t):z(7234,{result:t})}function Qo(e,t){let r;if(t instanceof We)r={update:yi(e,t.key,t.value)};else if(t instanceof Ke)r={delete:Je(e,t.key)};else if(t instanceof de)r={update:yi(e,t.key,t.data),updateMask:ta(t.fieldMask)};else{if(!(t instanceof Qe))return z(16599,{Fe:t.type});r={verify:Je(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(n=>function(a,l){let p=l.transform;if(p instanceof ze)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Yr)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Xr)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Zr)return{fieldPath:l.field.canonicalString(),increment:p.ge};if(p instanceof tn)return{fieldPath:l.field.canonicalString(),minimum:p.ge};if(p instanceof en)return{fieldPath:l.field.canonicalString(),maximum:p.ge};throw z(20930,{transform:l.transform})}(0,n))),t.precondition.isNone||(r.currentDocument=function(i,a){return a.updateTime!==void 0?{updateTime:Wo(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:z(27497)}(e,t.precondition)),r}function Jo(e,t){let r={structuredQuery:{}},n=t.path,i;t.collectionGroup!==null?(i=n,r.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),r.structuredQuery.from=[{collectionId:n.lastSegment()}]),r.parent=function(_,D){return mn(_.databaseId,D)}(e,i);let a=function(_){if(_.length!==0)return Oi(je.create(_,"and"))}(t.filters);a&&(r.structuredQuery.where=a);let l=function(_){if(_.length!==0)return _.map(D=>function(R){return{field:Ut(R.field),direction:Yo(R.dir)}}(D))}(t.orderBy);l&&(r.structuredQuery.orderBy=l);let p=function(_,D){return _.useProto3Json||Di(D)?D:{value:D}}(e,t.limit);return p!==null&&(r.structuredQuery.limit=p),t.startAt&&(r.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(t.startAt)),t.endAt&&(r.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(t.endAt)),{ve:r,parent:i}}function Yo(e){return jo[e]}function Xo(e){return Go[e]}function Zo(e){return Ho[e]}function Ut(e){return{fieldPath:e.canonicalString()}}function Oi(e){return e instanceof _t?function(r){if(r.op==="=="){if(gi(r.value))return{unaryFilter:{field:Ut(r.field),op:"IS_NAN"}};if(pi(r.value))return{unaryFilter:{field:Ut(r.field),op:"IS_NULL"}}}else if(r.op==="!="){if(gi(r.value))return{unaryFilter:{field:Ut(r.field),op:"IS_NOT_NAN"}};if(pi(r.value))return{unaryFilter:{field:Ut(r.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ut(r.field),op:Xo(r.op),value:r.value}}}(e):e instanceof je?function(r){let n=r.getFilters().map(i=>Oi(i));return n.length===1?n[0]:{compositeFilter:{op:Zo(r.op),filters:n}}}(e):z(54877,{filter:e})}function ta(e){let t=[];return e.fields.forEach(r=>t.push(r.canonicalString())),{fieldPaths:t}}function Mi(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}function Li(e){return!!e&&typeof e._toProto=="function"&&e._protoValueType==="ProtoValue"}function yn(e){return new nn(e,!0)}var an=class{},un=class extends an{constructor(t,r,n,i){super(),this.authCredentials=t,this.appCheckCredentials=r,this.connection=n,this.serializer=i,this.be=!1}De(){if(this.be)throw new V(x.FAILED_PRECONDITION,"The client has already been terminated.")}le(t,r,n,i){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.le(t,sn(r,n),i,a,l)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(x.UNKNOWN,a.toString())})}de(t,r,n,i,a){return this.De(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,p])=>this.connection.de(t,sn(r,n),i,l,p,a)).catch(l=>{throw l.name==="FirebaseError"?(l.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new V(x.UNKNOWN,l.toString())})}terminate(){this.be=!0,this.connection.terminate()}};async function _n(e,t){let r=ve(e),n={writes:t.map(i=>Qo(r.serializer,i))};await r.le("Commit",r.serializer.databaseId,Y.emptyPath(),n)}async function Fi(e,t){let r=ve(e),n={documents:t.map(p=>Je(r.serializer,p))},i=await r.de("BatchGetDocuments",r.serializer.databaseId,Y.emptyPath(),n,t.length),a=new Map;i.forEach(p=>{let g=Ko(r.serializer,p);a.set(g.key.toString(),g)});let l=[];return t.forEach(p=>{let g=a.get(p.toString());ot(!!g,55234,{key:p}),l.push(g)}),l}async function ea(e,t){let r=ve(e),{ve:n,parent:i}=Jo(r.serializer,$o(t));return(await r.de("RunQuery",r.serializer.databaseId,i,{structuredQuery:n.structuredQuery})).filter(a=>!!a.document).map(a=>function(p,g,_){let D=on(p,g.name),k=ne(g.updateTime),R=g.createTime?ne(g.createTime):et.min(),U=new st({mapValue:{fields:g.fields}}),B=le.newFoundDocument(D,k,R,U);return _?B.setHasCommittedMutations():B}(r.serializer,a.document,void 0))}var Bi="ComponentProvider",ie=new Map;function Ee(e){if(e._terminated)throw new V(x.FAILED_PRECONDITION,"The client has already been terminated.");if(!ie.has(e)){se(Bi,"Initializing Datastore");let t=function(a){return new Br(a)}(function(a,l,p,g,_){return new Cr(a,l,p,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,Ni(_.experimentalLongPollingOptions),_.useFetchStreams,_.isUsingEmulator,g,_._customHeaders,_.grpcFlowControlWindow)}(e._databaseId,e.app.options.appId||"",e._persistenceKey,e.app.options.apiKey,e._freezeSettings())),r=yn(e._databaseId),n=function(a,l,p,g){return new un(a,l,p,g)}(e._authCredentials,e._appCheckCredentials,t,r);ie.set(e,n)}return ie.get(e)}var ra=1048576,$i="firestore.googleapis.com",_i=!0,Ye=class{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new V(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$i,this.ssl=_i}else this.host=t.host,this.ssl=t.ssl??_i;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t._customHeaders&&(this._customHeaders={...t._customHeaders}),t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<ra)throw new V(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}if(function(n,i,a,l){if(i===!0&&l===!0)throw new V(x.INVALID_ARGUMENT,`${n} and ${a} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ni(t.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new V(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new V(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new V(x.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams,t.grpcFlowControlWindow!==void 0){if(typeof t.grpcFlowControlWindow!="number"||t.grpcFlowControlWindow<=0||t.grpcFlowControlWindow>2147483647||!Number.isInteger(t.grpcFlowControlWindow))throw new V(x.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=t.grpcFlowControlWindow}}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,i){return n.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams&&this.grpcFlowControlWindow===t.grpcFlowControlWindow&&function(n,i){if(n===i)return!0;if(!n||!i)return!1;let a=Object.keys(n),l=Object.keys(i);if(a.length!==l.length)return!1;for(let p of a)if(n[p]!==i[p])return!1;return!0}(this._customHeaders,t._customHeaders)}},Ot=class{constructor(t,r,n,i){this._authCredentials=t,this._appCheckCredentials=r,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ye({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new V(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ye(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new kr;switch(n.type){case"firstParty":return new Vr(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new V(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(r){let n=ie.get(r);n&&(se(Bi,"Removing Datastore"),ie.delete(r),n.terminate())}(this),Promise.resolve()}};function vn(e,t){let r=typeof e=="object"?e:Zn(),n=typeof e=="string"?e:t||"(default)",i=Jn(r,"firestore/lite").getImmediate({identifier:n});if(!i._initialized){let a=Vn("firestore");a&&Ui(i,...a)}return i}function Ui(e,t,r,n={}){e=Qt(e,Ot);let i=lr(t),a=e._getSettings(),l={...a,emulatorOptions:e._getEmulatorOptions()},p=`${t}:${r}`;i&&Ln(`https://${p}`),a.host!==$i&&a.host!==p&&wi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");let g={...a,host:p,ssl:i,emulatorOptions:n};if(!Rt(g,l)&&(e._setSettings(g),n.mockUserToken)){let _,D;if(typeof n.mockUserToken=="string")_=n.mockUserToken,D=rt.MOCK_USER;else{_=Cn(n.mockUserToken,e._app?.options.projectId);let k=n.mockUserToken.sub||n.mockUserToken.user_id;if(!k)throw new V(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");D=new rt(k)}e._authCredentials=new Rr(new Re(_,D))}}var pe=class e{constructor(t,r,n){this.converter=r,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new e(this.firestore,t,this._query)}},X=class e{constructor(t,r,n){this.converter=r,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new It(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new e(this.firestore,t,this._key)}toJSON(){return{type:e._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,r,n){if(be(r,e._jsonSchema))return new e(t,n||null,new nt(Y.fromString(r.referencePath)))}};X._jsonSchemaVersion="firestore/documentReference/1.0",X._jsonSchema={type:ct("string",X._jsonSchemaVersion),referencePath:ct("string")};var It=class e extends pe{constructor(t,r,n){super(t,r,function(a){return new Jr(a)}(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let t=this._path.popLast();return t.isEmpty()?null:new X(this.firestore,null,new nt(t))}withConverter(t){return new e(this.firestore,t,this._path)}};function nr(e,t,...r){if(e=pt(e),Ti("collection","path",t),e instanceof Ot){let n=Y.fromString(t,...r);return oi(n),new It(e,null,n)}{if(!(e instanceof X||e instanceof It))throw new V(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(Y.fromString(t,...r));return oi(n),new It(e.firestore,null,n)}}function lt(e,t,...r){if(e=pt(e),arguments.length===1&&(t=Mr.newId()),Ti("doc","path",t),e instanceof Ot){let n=Y.fromString(t,...r);return si(n),new X(e,null,new nt(n))}{if(!(e instanceof X||e instanceof It))throw new V(x.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(Y.fromString(t,...r));return si(n),new X(e.firestore,e instanceof It?e.converter:null,new nt(n))}}var Nt=class e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new e(kt.fromBase64String(t))}catch(r){throw new V(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+r)}}static fromUint8Array(t){return new e(kt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:e._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(be(t,e._jsonSchema))return e.fromBase64String(t.bytes)}};Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:ct("string",Nt._jsonSchemaVersion),bytes:ct("string")};var Wt=class{constructor(...t){for(let r=0;r<t.length;++r)if(t[r].length===0)throw new V(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}};var Mt=class{constructor(t){this._methodName=t}};var Dt=class e{constructor(t,r){if(!isFinite(t)||t<-90||t>90)throw new V(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(r)||r<-180||r>180)throw new V(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+r);this._lat=t,this._long=r}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return W(this._lat,t._lat)||W(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:e._jsonSchemaVersion}}static fromJSON(t){if(be(t,e._jsonSchema))return new e(t.latitude,t.longitude)}};Dt._jsonSchemaVersion="firestore/geoPoint/1.0",Dt._jsonSchema={type:ct("string",Dt._jsonSchemaVersion),latitude:ct("number"),longitude:ct("number")};var yt=class e{constructor(t){this._values=(t||[]).map(r=>r)}toArray(){return this._values.map(t=>t)}isEqual(t){return function(n,i){if(n.length!==i.length)return!1;for(let a=0;a<n.length;++a)if(n[a]!==i[a])return!1;return!0}(this._values,t._values)}toJSON(){return{type:e._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(be(t,e._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every(r=>typeof r=="number"))return new e(t.vectorValues);throw new V(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}};yt._jsonSchemaVersion="firestore/vectorValue/1.0",yt._jsonSchema={type:ct("string",yt._jsonSchemaVersion),vectorValues:ct("object")};var na=/^__.*__$/,cn=class{constructor(t,r,n){this.data=t,this.fieldMask=r,this.fieldTransforms=n}toMutation(t,r){return this.fieldMask!==null?new de(t,this.data,this.fieldMask,r,this.fieldTransforms):new We(t,this.data,r,this.fieldTransforms)}},Xe=class{constructor(t,r,n){this.data=t,this.fieldMask=r,this.fieldTransforms=n}toMutation(t,r){return new de(t,this.data,this.fieldMask,r,this.fieldTransforms)}};function qi(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z(40011,{dataSource:e})}}var ln=class e{constructor(t,r,n,i,a,l){this.settings=t,this.databaseId=r,this.serializer=n,this.ignoreUndefinedProperties=i,a===void 0&&this.validatePath(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new e({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){let r=this.path?.child(t),n=this.contextWith({path:r,arrayElement:!1});return n.validatePathSegment(t),n}childContextForFieldPath(t){let r=this.path?.child(t),n=this.contextWith({path:r,arrayElement:!1});return n.validatePath(),n}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return tr(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find(r=>t.isPrefixOf(r))!==void 0||this.fieldTransforms.find(r=>t.isPrefixOf(r.field))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(qi(this.dataSource)&&na.test(t))throw this.createError('Document fields cannot begin and end with "__"')}},fn=class{constructor(t,r,n){this.databaseId=t,this.ignoreUndefinedProperties=r,this.serializer=n||yn(t)}createContext(t,r,n,i=!1){return new ln({dataSource:t,methodName:r,targetDoc:n,path:xt.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function wn(e){let t=e._freezeSettings(),r=yn(e._databaseId);return new fn(e._databaseId,!!t.ignoreUndefinedProperties,r)}function ji(e,t,r,n,i,a={}){let l=e.createContext(a.merge||a.mergeFields?2:0,t,r,i);bn("Data must be an object, but it was:",l,n);let p=zi(n,l),g,_;if(a.merge)g=new Gt(l.fieldMask),_=l.fieldTransforms;else if(a.mergeFields){let D=[];for(let k of a.mergeFields){let R=ge(t,k,r);if(!l.contains(R))throw new V(x.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);Ji(D,R)||D.push(R)}g=new Gt(D),_=l.fieldTransforms.filter(k=>g.covers(k.field))}else g=null,_=l.fieldTransforms;return new cn(new st(p),g,_)}var Ze=class e extends Mt{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof e}};var hn=class e extends Mt{_toFieldTransform(t){return new rn(t.path,new ze)}isEqual(t){return t instanceof e}};function Gi(e,t,r,n){let i=e.createContext(1,t,r);bn("Data must be an object, but it was:",i,n);let a=[],l=st.empty();we(n,(g,_)=>{let D=Qi(t,g,r);_=pt(_);let k=i.childContextForFieldPath(D);if(_ instanceof Ze)a.push(D);else{let R=ir(_,k);R!=null&&(a.push(D),l.set(D,R))}});let p=new Gt(a);return new Xe(l,p,i.fieldTransforms)}function Hi(e,t,r,n,i,a){let l=e.createContext(1,t,r),p=[ge(t,n,r)],g=[i];if(a.length%2!=0)throw new V(x.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<a.length;R+=2)p.push(ge(t,a[R])),g.push(a[R+1]);let _=[],D=st.empty();for(let R=p.length-1;R>=0;--R)if(!Ji(_,p[R])){let U=p[R],B=g[R];B=pt(B);let j=l.childContextForFieldPath(U);if(B instanceof Ze)_.push(U);else{let $=ir(B,j);$!=null&&(_.push(U),D.set(U,$))}}let k=new Gt(_);return new Xe(D,k,l.fieldTransforms)}function ir(e,t,r){if(Ki(e=pt(e)))return bn("Unsupported field value:",t,e),zi(e,t);if(e instanceof Mt)return function(i,a){if(!qi(a.dataSource))throw a.createError(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.createError(`${i._methodName}() is not currently supported inside arrays`);let l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return function(i,a){let l=[],p=0;for(let g of i){let _=ir(g,a.childContextForArray(p));_==null&&(_={nullValue:"NULL_VALUE"}),l.push(_),p++}return{arrayValue:{values:l}}}(e,t)}return function(i,a,l){if((i=pt(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return qo(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){let p=Z.fromDate(i);return{timestampValue:ke(a.serializer,p)}}if(i instanceof Z){let p=new Z(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:ke(a.serializer,p)}}if(Wi(i)){let p=Z.fromInstant(i),g=new Z(p.seconds,1e3*Math.floor(p.nanoseconds/1e3));return{timestampValue:ke(a.serializer,g)}}if(i instanceof Dt)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Nt)return{bytesValue:zo(a.serializer,i._byteString)};if(i instanceof X){let p=a.databaseId,g=i.firestore._databaseId;if(!g.isEqual(p))throw a.createError(`Document reference is for database ${g.projectId}/${g.database} but should be for database ${p.projectId}/${p.database}`);return{referenceValue:mn(i.firestore._databaseId||a.databaseId,i._key.path)}}if(i instanceof yt)return function(g,_){let D=g instanceof yt?g.toArray():g;return{mapValue:{fields:{[ki]:{stringValue:Ri},[Fe]:{arrayValue:{values:D.map(R=>{if(typeof R!="number")throw _.createError("VectorValues must only contain numeric values.");return Ci(_.serializer,R)})}}}}}}(i,a);if(Li(i))return i._toProto(a.serializer);throw a.createError(`Unsupported field value: ${gn(i)}`)}(e,t)}function zi(e,t){let r={};return function(i){for(let a in i)if(Object.prototype.hasOwnProperty.call(i,a))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):we(e,(n,i)=>{let a=ir(i,t.childContextForField(n));a!=null&&(r[n]=a)}),{mapValue:{fields:r}}}function Wi(e){if(typeof e!="object"||e===null)return!1;if(typeof Temporal<"u"&&typeof Temporal.Instant=="function"&&e instanceof Temporal.Instant)return!0;let t=e;return t[Symbol.toStringTag]==="Temporal.Instant"&&typeof t.Te=="bigint"}function Ki(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Z||e instanceof Dt||e instanceof Nt||e instanceof X||e instanceof Mt||e instanceof yt||Wi(e)||Li(e))}function bn(e,t,r){if(!Ki(r)||!Ii(r)){let n=gn(r);throw n==="an object"?t.createError(e+" a custom object"):t.createError(e+" "+n)}}function ge(e,t,r){if((t=pt(t))instanceof Wt)return t._internalPath;if(typeof t=="string")return Qi(e,t);throw tr("Field path arguments must be of type string or ",e,!1,void 0,r)}var ia=new RegExp("[~\\*/\\[\\]]");function Qi(e,t,r){if(t.search(ia)>=0)throw tr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,r);try{return new Wt(...t.split("."))._internalPath}catch{throw tr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,r)}}function tr(e,t,r,n,i){let a=n&&!n.isEmpty(),l=i!==void 0,p=`Function ${t}() called with invalid data`;r&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(a||l)&&(g+=" (found",a&&(g+=` in field ${n}`),l&&(g+=` in document ${i}`),g+=")"),new V(x.INVALID_ARGUMENT,p+e+g)}function Ji(e,t){return e.some(r=>r.isEqual(t))}var me=class{constructor(t,r,n,i,a){this._firestore=t,this._userDataWriter=r,this._key=n,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){let t=new ye(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(t){if(this._document){let r=this._document.data.field(ge("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r)}}},ye=class extends me{data(){return super.data()}},er=class{constructor(t,r){this._docs=r,this.query=t}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return this.docs.length===0}forEach(t,r){this._docs.forEach(t,r)}};var dn=class{convertValue(t,r="none"){switch(Ct(t)){case 0:return null;case 1:return t.booleanValue;case 2:return K(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,r);case 5:return t.stringValue;case 6:return this.convertBytes(oe(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,r);case 11:return this.convertObject(t.mapValue,r);case 10:return this.convertVectorValue(t.mapValue);default:throw z(62114,{value:t})}}convertObject(t,r){return this.convertObjectMap(t.fields,r)}convertObjectMap(t,r="none"){let n={};return we(t,(i,a)=>{n[i]=this.convertValue(a,r)}),n}convertVectorValue(t){let r=t.fields?.[Fe].arrayValue?.values?.map(n=>K(n.doubleValue));return new yt(r)}convertGeoPoint(t){return new Dt(K(t.latitude),K(t.longitude))}convertArray(t,r){return(t.values||[]).map(n=>this.convertValue(n,r))}convertServerTimestamp(t,r){switch(r){case"previous":let n=xi(t);return n==null?null:this.convertValue(n,r);case"estimate":return this.convertTimestamp(ae(t));default:return null}}convertTimestamp(t){let r=Vt(t);return new Z(r.seconds,r.nanos)}convertDocumentKey(t,r){let n=Y.fromString(t);ot(Mi(n),9688,{name:t});let i=new Oe(n.get(1),n.get(3)),a=new nt(n.popFirst(5));return i.isEqual(r)||rr(`A document reference to ${a} refers to a different database (${i.projectId}/${i.database}), which is not supported. It will be treated as a reference in the current database (${r.projectId}/${r.database}) instead.`),a}};function Yi(e,t,r){let n;return n=e?r&&(r.merge||r.mergeFields)?e.toFirestore(t,r):e.toFirestore(t):t,n}var _e=class extends dn{constructor(t){super(),this.firestore=t}convertBytes(t){return new Nt(t)}convertReference(t){let r=this.convertDocumentKey(t,this.firestore._databaseId);return new X(this.firestore,null,r)}};function Jt(e){let t=Ee((e=Qt(e,X)).firestore),r=new _e(e.firestore);return Fi(t,[e._key]).then(n=>{ot(n.length===1,15618);let i=n[0];return new me(e.firestore,r,e._key,i.isFoundDocument()?i:null,e.converter)})}function sr(e){(function(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new V(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")})((e=Qt(e,pe))._query);let t=Ee(e.firestore),r=new _e(e.firestore);return ea(t,e._query).then(n=>{let i=n.map(a=>new ye(e.firestore,r,a.key,a,e.converter));return e._query.limitType==="L"&&i.reverse(),new er(e,i)})}function En(e,t,r){let n=Yi((e=Qt(e,X)).converter,t,r),i=ji(wn(e.firestore),"setDoc",e._key,n,e.converter!==null,r);return _n(Ee(e.firestore),[i.toMutation(e._key,he.none())])}function Yt(e,t,r,...n){let i=wn((e=Qt(e,X)).firestore),a;return a=typeof(t=pt(t))=="string"||t instanceof Wt?Hi(i,"updateDoc",e._key,t,r,n):Gi(i,"updateDoc",e._key,t),_n(Ee(e.firestore),[a.toMutation(e._key,he.exists(!0))])}function ft(){return new hn("serverTimestamp")}var Xi="4.17.2";(function(){vi(`${Xn}_lite`),te(new Et("firestore/lite",(t,{instanceIdentifier:r,options:n})=>{let i=t.getProvider("app").getImmediate(),a=new Ot(new Pe(t.getProvider("auth-internal")),new Ce(i,t.getProvider("app-check-internal")),Ei(i,r),i);return n&&a._setSettings(n),a},"PUBLIC").setMultipleInstances(!0)),St("firestore-lite",Xi,""),St("firestore-lite",Xi,"esm2020")})();var is=ms(rs()),sa={apiKey:"AIzaSyBqU09QQwVxfxZFDgcuMnvOCo0oMZ5f5a0",authDomain:"invitaciones-foto-graciela.firebaseapp.com",projectId:"invitaciones-foto-graciela",storageBucket:"invitaciones-foto-graciela.firebasestorage.app",appId:"1:557591079202:web:f3612d46e649392cae5d7b"},ht=vn(Ir(sa,"fg-kit")),Q=e=>String(e??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),ns=e=>String(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/\bfamilia\b/g,"").trim(),oa=(e,t)=>`https://wa.me/${String(e||"").replace(/\D/g,"").replace(/^(\d{10})$/,"52$1")}?text=${encodeURIComponent(t)}`,aa=30*60*1e3,ua=()=>{let e=new Uint8Array(24);return crypto.getRandomValues(e),Array.from(e,t=>"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[t&63]).join("")},ss=(e,t)=>`fgk-sol-${e}-${t}`;async function or(e,t){let r=ua();await En(lt(ht,"eventos",e,"solicitudes",r),{fid:t,creado:ft()});try{localStorage.setItem(ss(e,t),r)}catch{}return r}async function os(e,t){let r=null;try{r=localStorage.getItem(ss(e,t))}catch{}if(!r)return null;try{let n=await Jt(lt(ht,"eventos",e,"pases",r));if(!n.exists())return null;let i=n.data(),a=i.hasta&&i.hasta.toMillis?i.hasta.toMillis():0;return{codigo:i.codigo,hasta:a}}catch{return null}}var ca=`
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
`;async function $u(e){let t=typeof e.contenedor=="string"?document.querySelector(e.contenedor):e.contenedor;if(!t)return;if(!document.getElementById("fgk-css")){let m=document.createElement("style");m.id="fgk-css",m.textContent=ca,document.head.appendChild(m)}t.classList.add("fgk");let r=Object.assign({titulo:"\xBFNos acompa\xF1as?",buscar:"Busca tu invitaci\xF3n escribiendo el apellido de tu familia o tu nombre.",si:"Asistir\xE9",no:"No podr\xE9 asistir",gracias:"\xA1Gracias por confirmar! Te esperamos con mucho cari\xF1o.",graciasNo:"Gracias por avisarnos. \xA1Te vamos a extra\xF1ar!",esperando:"Estamos preparando tu pase. En unos momentos aparecer\xE1 aqu\xED; no cierres esta p\xE1gina."},e.textos||{}),n=e.evento,i="fgk-"+n,a=()=>{try{return JSON.parse(localStorage.getItem(i)||"{}")}catch{return{}}},l=m=>{try{localStorage.setItem(i,JSON.stringify({...a(),...m}))}catch{}},p;try{p=(await Jt(lt(ht,"eventos",n))).data()}catch{}if(!p){t.innerHTML="";return}let g=p.modulos||{},_=m=>{t.innerHTML=m};if(g.confirmacion==="whatsapp"){_(`<h3>${Q(r.titulo)}</h3><p>Confirma tu asistencia con los novios.</p>
      <input id="fgkNom" placeholder="Tu nombre" autocomplete="name">
      <button class="fgk-bt pri" data-r="si">${Q(r.si)}</button><button class="fgk-bt" data-r="no">${Q(r.no)}</button>`),t.onclick=m=>{let y=m.target.closest("[data-r]");if(!y)return;let u=t.querySelector("#fgkNom"),o=u.value.trim();if(!o){u.focus();return}let s=y.dataset.r==="si"?`\xA1Hola! Soy ${o} y con mucho gusto confirmo mi asistencia. \xA1Nos vemos pronto, ${p.nombres}! \u{1F490}`:`\xA1Hola! Soy ${o}. Con mucho cari\xF1o les aviso que no podr\xE9 acompa\xF1arlos. \xA1Les deseo un d\xEDa maravilloso, ${p.nombres}! \u{1F490}`;open(oa(p.whatsapp,s),"_blank")};return}if(g.confirmacion!=="lista"){_("");return}let D=null,k=async()=>D||(D=(await sr(nr(ht,"eventos",n,"familias"))).docs.map(y=>({id:y.id,...y.data()})),D),R=m=>(+m.pa||0)+(+m.pk||0),U=m=>String(m||"").replace(/^familia\s+/i,"").trim()[0]||"\u2661";function B(){_(`<h3>${Q(r.titulo)}</h3><p>${Q(r.buscar)}</p>
      <input id="fgkQ" type="search" placeholder="Escribe al menos 3 letras" autocomplete="off">
      <div class="fgk-res" id="fgkRes"></div>`);let m=t.querySelector("#fgkQ"),y=t.querySelector("#fgkRes");k().catch(()=>{}),m.oninput=async()=>{let u=ns(m.value);if(u.length<3){y.innerHTML="";return}let o;try{o=await k()}catch{y.innerHTML="<p>Sin conexi\xF3n. Intenta de nuevo.</p>";return}let s=o.filter(f=>ns(f.n).includes(u)).slice(0,8);y.innerHTML=s.length?s.map(f=>`<button class="fgk-item" data-id="${Q(f.id)}"><span class="fgk-ini">${Q(U(f.n))}</span><span><b>${Q(f.n)}</b><small>${R(f)} pase${R(f)!==1?"s":""}</small></span></button>`).join(""):'<p class="fgk-nota">No encontramos ese nombre. Revisa c\xF3mo viene en tu invitaci\xF3n o escr\xEDbele a los novios.</p>'},t.onclick=u=>{let o=u.target.closest(".fgk-item");o&&j(D.find(s=>s.id===o.dataset.id))}}function j(m){if(!m)return B();l({fid:m.id});let y=R(m),u=`<div class="fgk-pases"><div><b>${y}</b><small>pase${y!==1?"s":""}</small></div>${+m.pk?`<div><b>${+m.pa||0}</b><small>adultos</small></div><div><b>${+m.pk}</b><small>ni\xF1os</small></div>`:""}</div>`;m.resp==="si"?_(`<div class="fgk-card"><p>Con cari\xF1o para</p><div class="fgk-nombre">${Q(m.n)}</div>${u}
        <div class="fgk-chip">Ya confirmaste \u2713</div><p>${Q(r.gracias)}</p>
        ${g.pases?'<button class="fgk-bt pri" id="fgkPase">Ver mi pase</button>':""}
        <button class="fgk-link" id="fgkCambiar">\xBFCambi\xF3 algo? Ya no podr\xE9 asistir</button>
        <button class="fgk-link" id="fgkOtra">No soy yo</button></div>`):m.resp==="no"?_(`<div class="fgk-card"><div class="fgk-nombre">${Q(m.n)}</div><p>${Q(r.graciasNo)}</p>
        <button class="fgk-bt" id="fgkCambiar">\xA1Siempre s\xED podr\xE9 ir!</button><button class="fgk-link" id="fgkOtra">No soy yo</button></div>`):_(`<div class="fgk-card"><p>Con cari\xF1o para</p><div class="fgk-nombre">${Q(m.n)}</div>${u}
        <p>Hemos reservado ${y===1?"un lugar":y+" lugares"} en tu honor.</p>
        <button class="fgk-bt pri" data-r="si">${Q(r.si)}</button><button class="fgk-bt" data-r="no">${Q(r.no)}</button>
        <button class="fgk-link" id="fgkOtra">No soy yo</button></div>`),t.onclick=async o=>{let s=o.target;if(s.closest("#fgkOtra"))return l({fid:null,pase:null}),B();if(s.closest("#fgkPase"))return I(m,!1);if(s.closest("#fgkCambiar"))return $(m,m.resp==="si"?"no":"si",s.closest("button"));let f=s.closest("[data-r]");f&&$(m,f.dataset.r,f)}}async function $(m,y,u){u&&(u.disabled=!0);let o={resp:y,respEn:ft(),respPor:"invitado",...y==="si"&&g.pases?{pidePase:ft()}:{}};try{if(await Yt(lt(ht,"eventos",n,"familias",m.id),o),y==="si"&&g.pases&&await or(n,m.id),m.resp=y,y!=="si"&&l({pase:null}),y==="si"&&g.pases)return I(m,!0);j(m)}catch(s){console.warn(s),u&&(u.disabled=!1),alert("No se pudo guardar tu respuesta. Revisa tu conexi\xF3n e intenta de nuevo.")}}let it=0;async function I(m,y){clearTimeout(it);let u=a();if(u.pase&&u.pase.fid===m.id&&u.pase.codigo)return N(m,u.pase.codigo,0);if(!y)try{await Yt(lt(ht,"eventos",n,"familias",m.id),{resp:"si",respEn:ft(),respPor:"invitado",pidePase:ft()}),await or(n,m.id)}catch{}let o=Date.now();_(`<div class="fgk-card"><div class="fgk-nombre">${Q(m.n)}</div><div class="fgk-reloj"></div><p>${Q(r.esperando)}</p></div>`);let s=async()=>{try{let f=await os(n,m.id);if(f&&f.codigo)return l({pase:{fid:m.id,codigo:f.codigo}}),N(m,f.codigo,Math.max(f.hasta,Date.now()+6e4))}catch{}if(Date.now()-o>aa){_(`<div class="fgk-card"><div class="fgk-nombre">${Q(m.n)}</div><p>Tu pase todav\xEDa no est\xE1 listo. Vuelve a abrir la invitaci\xF3n m\xE1s tarde y p\xEDdelo de nuevo.</p><button class="fgk-bt pri" id="fgkPase">Pedirlo de nuevo</button></div>`),t.onclick=f=>{f.target.closest("#fgkPase")&&I(m,!1)};return}it=setTimeout(s,5e3)};s()}async function N(m,y,u){let o=`FG|${n}|${m.id}|${y}`,f=(e.dibujarPase?await e.dibujarPase(m,o):await la(m,o,{...e.pase||{},titulo:e.pase&&e.pase.titulo||p.nombres})).toDataURL("image/png"),c=`Pase-${(p.nombres||n).replace(/[^\w]+/g,"-")}-${m.id}.png`;if(_(`<div class="fgk-card fgk-pase"><p>Tu pase de entrada</p><div class="fgk-nombre">${Q(m.n)}</div>
      <img src="${f}" alt="Pase de entrada">
      <a class="fgk-bt pri" href="${f}" download="${Q(c)}" id="fgkBajar">Guardar mi pase</a>
      <p class="fgk-nota">Gu\xE1rdalo en tu tel\xE9fono y mu\xE9stralo en la entrada.</p>
      ${u?'<div class="fgk-barra"><i id="fgkBar"></i></div><p class="fgk-nota" id="fgkTiempo"></p>':""}
      <button class="fgk-link" id="fgkOtra">No soy yo</button></div>`),t.onclick=d=>{d.target.closest("#fgkOtra")&&(l({fid:null,pase:null}),B())},navigator.canShare&&(t.querySelector("#fgkBajar").onclick=async d=>{try{let h=await(await fetch(f)).blob(),P=new File([h],c,{type:"image/png"});navigator.canShare({files:[P]})&&/Android|iPhone|iPad/i.test(navigator.userAgent)&&(d.preventDefault(),await navigator.share({files:[P],title:"Mi pase"}))}catch{}}),u){let d=u-Date.now(),h=()=>{let P=u-Date.now(),L=t.querySelector("#fgkBar"),H=t.querySelector("#fgkTiempo");if(L){if(P<=0){H.textContent="Tu pase qued\xF3 guardado en este tel\xE9fono: vuelve a abrir la invitaci\xF3n cuando lo necesites.",L.style.width="0%";return}L.style.width=P/d*100+"%",H.textContent=`Gu\xE1rdalo ya \xB7 visible ${Math.floor(P/6e4)}:${String(Math.floor(P/1e3)%60).padStart(2,"0")} min`,setTimeout(h,1e3)}};h()}}let T=new URLSearchParams(location.search).get("f")||a().fid;if(T)try{let m=await Jt(lt(ht,"eventos",n,"familias",T));if(m.exists())return j({id:T,...m.data()})}catch{}B()}async function la(e,t,r={}){let a=document.createElement("canvas");a.width=1080,a.height=1920;let l=a.getContext("2d"),p=r.fondo||"#FBF6F1",g=r.tinta||"#4A2E22",_=r.acento||"#A9675A",D=r.fuenteTitulo||'"Great Vibes", cursive',k=r.fuenteTexto||'"Cormorant Garamond", Georgia, serif';try{await document.fonts.load(`120px ${D}`),await document.fonts.load(`60px ${k}`)}catch{}l.fillStyle=p,l.fillRect(0,0,1080,1920),l.strokeStyle=_,l.lineWidth=4,l.strokeRect(50,50,980,1820),l.lineWidth=1.5,l.strokeRect(70,70,940,1780),l.textAlign="center",l.fillStyle=_,l.font=`500 38px ${k}`,l.fillText("PASE DE ENTRADA",1080/2,220);let R=130;do l.font=`${R}px ${D}`,R-=4;while(l.measureText(r.titulo||"").width>880&&R>50);l.fillText(r.titulo||"",1080/2,400),l.fillStyle=g,l.font=`500 44px ${k}`,r.fecha&&l.fillText(r.fecha,1080/2,480),r.lugar&&(l.font=`400 36px ${k}`,l.fillText(r.lugar,1080/2,535));let U=(0,is.default)(0,"M");U.addData(t),U.make();let B=U.getModuleCount(),j=620,$=j/B,it=(1080-j)/2,I=620;l.fillStyle="#fff",l.beginPath(),l.roundRect?l.roundRect(it-40,I-40,j+80,j+80,36):l.rect(it-40,I-40,j+80,j+80),l.fill(),l.fillStyle=g;for(let T=0;T<B;T++)for(let m=0;m<B;m++)U.isDark(T,m)&&l.fillRect(it+m*$,I+T*$,Math.ceil($),Math.ceil($));l.fillStyle=_,R=92;do l.font=`${R}px ${D}`,R-=4;while(l.measureText(e.n).width>880&&R>44);l.fillText(e.n,1080/2,1420);let N=(+e.pa||0)+(+e.pk||0);return l.fillStyle=g,l.font=`500 50px ${k}`,l.fillText(`${N} pase${N!==1?"s":""}${+e.pk?` \xB7 ${e.pa} adulto${+e.pa!=1?"s":""} y ${e.pk} ni\xF1o${+e.pk!=1?"s":""}`:""}`,1080/2,1510),l.font=`400 34px ${k}`,l.globalAlpha=.75,l.fillText("Presenta este pase en la entrada",1080/2,1640),l.font=`400 26px ${k}`,l.fillText("Foto Estudio Graciela",1080/2,1810),l.globalAlpha=1,a}function Uu({titulo:e,inicioISO:t,finISO:r,lugar:n,detalles:i}){let a=p=>new Date(p).toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,""),l=new URL("https://calendar.google.com/calendar/render");return l.searchParams.set("action","TEMPLATE"),l.searchParams.set("text",e),l.searchParams.set("dates",`${a(t)}/${a(r||new Date(new Date(t).getTime()+6*36e5))}`),n&&l.searchParams.set("location",n),i&&l.searchParams.set("details",i),l.toString()}function qu(e){let t=null,r=null,n=()=>t||(t=Jt(lt(ht,"eventos",e)).then(i=>i.data()||{}));return{evento:n,async familias(){return r||(r=(await sr(nr(ht,"eventos",e,"familias"))).docs.map(a=>({id:a.id,...a.data()})).sort((a,l)=>(a.orden||0)-(l.orden||0)),r)},async responder(i,a){let l=(await n()).modulos||{};await Yt(lt(ht,"eventos",e,"familias",i),{resp:a,respEn:ft(),respPor:"invitado",...a==="si"&&l.pases?{pidePase:ft()}:{}}),a==="si"&&l.pases&&await or(e,i)},async pedirPase(i){await Yt(lt(ht,"eventos",e,"familias",i),{resp:"si",respEn:ft(),respPor:"invitado",pidePase:ft()}),await or(e,i)},async pase(i){let a=await os(e,i);if(!a||!a.codigo)return null;let l=await n();return{codigo:a.codigo,hasta:Math.max(a.hasta,Date.now()+6e4),qr:l.prefijoQR?`${l.prefijoQR}|${i}|${a.codigo}`:`FG|${e}|${i}|${a.codigo}`}}}}export{qu as conectarEvento,la as dibujarPase,$u as iniciarInvitacion,Uu as ligaCalendario};
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
