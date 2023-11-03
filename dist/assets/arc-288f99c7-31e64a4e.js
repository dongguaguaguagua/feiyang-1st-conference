import{w as cn,c as b}from"./path-39bad7e2-53f90ab3.js";import{ca as rn,cb as C,cc as j,cd as an,ce as g,bd as ln,cf as H,cg as _,ch as un,ci as o,cj as sn,ck as on,cl as tn}from"./index-91fd477a.js";function fn(c){return c.innerRadius}function gn(c){return c.outerRadius}function yn(c){return c.startAngle}function dn(c){return c.endAngle}function mn(c){return c&&c.padAngle}function pn(c,h,E,q,v,A,k,r){var I=E-c,i=q-h,n=k-v,d=r-A,a=d*I-n*i;if(!(a*a<g))return a=(n*(h-A)-d*(c-v))/a,[c+a*I,h+a*i]}function Q(c,h,E,q,v,A,k){var r=c-E,I=h-q,i=(k?A:-A)/H(r*r+I*I),n=i*I,d=-i*r,a=c+n,s=h+d,t=E+n,f=q+d,z=(a+t)/2,l=(s+f)/2,m=t-a,y=f-s,R=m*m+y*y,T=v-A,P=a*f-t*s,O=(y<0?-1:1)*H(tn(0,T*T*R-P*P)),S=(P*y-m*O)/R,$=(-P*m-y*O)/R,w=(P*y+m*O)/R,p=(-P*m+y*O)/R,x=S-z,e=$-l,u=w-z,B=p-l;return x*x+e*e>u*u+B*B&&(S=w,$=p),{cx:S,cy:$,x01:-n,y01:-d,x11:S*(v/T-1),y11:$*(v/T-1)}}function vn(){var c=fn,h=gn,E=b(0),q=null,v=yn,A=dn,k=mn,r=null,I=cn(i);function i(){var n,d,a=+c.apply(this,arguments),s=+h.apply(this,arguments),t=v.apply(this,arguments)-an,f=A.apply(this,arguments)-an,z=un(f-t),l=f>t;if(r||(r=n=I()),s<a&&(d=s,s=a,a=d),!(s>g))r.moveTo(0,0);else if(z>ln-g)r.moveTo(s*C(t),s*j(t)),r.arc(0,0,s,t,f,!l),a>g&&(r.moveTo(a*C(f),a*j(f)),r.arc(0,0,a,f,t,l));else{var m=t,y=f,R=t,T=f,P=z,O=z,S=k.apply(this,arguments)/2,$=S>g&&(q?+q.apply(this,arguments):H(a*a+s*s)),w=_(un(s-a)/2,+E.apply(this,arguments)),p=w,x=w,e,u;if($>g){var B=sn($/a*j(S)),J=sn($/s*j(S));(P-=B*2)>g?(B*=l?1:-1,R+=B,T-=B):(P=0,R=T=(t+f)/2),(O-=J*2)>g?(J*=l?1:-1,m+=J,y-=J):(O=0,m=y=(t+f)/2)}var F=s*C(m),G=s*j(m),K=a*C(T),L=a*j(T);if(w>g){var M=s*C(y),N=s*j(y),U=a*C(R),V=a*j(R),D;if(z<rn)if(D=pn(F,G,U,V,M,N,K,L)){var W=F-D[0],X=G-D[1],Y=M-D[0],Z=N-D[1],nn=1/j(on((W*Y+X*Z)/(H(W*W+X*X)*H(Y*Y+Z*Z)))/2),en=H(D[0]*D[0]+D[1]*D[1]);p=_(w,(a-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else p=x=0}O>g?x>g?(e=Q(U,V,F,G,s,x,l),u=Q(M,N,K,L,s,x,l),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?r.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(u.y01,u.x01),!l):(r.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!l),r.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),!l),r.arc(u.cx,u.cy,x,o(u.y11,u.x11),o(u.y01,u.x01),!l))):(r.moveTo(F,G),r.arc(0,0,s,m,y,!l)):r.moveTo(F,G),!(a>g)||!(P>g)?r.lineTo(K,L):p>g?(e=Q(K,L,M,N,a,-p,l),u=Q(F,G,U,V,a,-p,l),r.lineTo(e.cx+e.x01,e.cy+e.y01),p<w?r.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(u.y01,u.x01),!l):(r.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(e.y11,e.x11),!l),r.arc(0,0,a,o(e.cy+e.y11,e.cx+e.x11),o(u.cy+u.y11,u.cx+u.x11),l),r.arc(u.cx,u.cy,p,o(u.y11,u.x11),o(u.y01,u.x01),!l))):r.arc(0,0,a,T,R,l)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+c.apply(this,arguments)+ +h.apply(this,arguments))/2,d=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[C(d)*n,j(d)*n]},i.innerRadius=function(n){return arguments.length?(c=typeof n=="function"?n:b(+n),i):c},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:b(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:b(+n),i):E},i.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:b(+n),i):q},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:b(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:b(+n),i):A},i.padAngle=function(n){return arguments.length?(k=typeof n=="function"?n:b(+n),i):k},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as d};
