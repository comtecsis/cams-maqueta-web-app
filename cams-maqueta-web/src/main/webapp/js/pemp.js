function Random(N) { return Math.floor(N*(Math.random()%1)) }

function clear2(obj)
{
if (obj) obj.value= '';
}

function invertir(cadena)     {res=''; for(var i=0; i<cadena.length; i++){ res = cadena.charAt(i)+ res; } return res;}
function concatena(cadena)    {cfinal = cadena.substring(0,5); cinicio= cadena.substring(5,10); res = cinicio + cfinal; return res; }
function dameimpares(cadena)  {resultado=''; for( var i=1; i<cadena.length; i=i+2){ resultado = cadena.charAt(i)+ resultado; } return resultado; }
function damepares(cadena)    {resultado=''; for( var i=0; i<cadena.length-1; i=i+2){ resultado = cadena.charAt(i)+ resultado; } return resultado; }

function numKeyPressed2(obj, id, ocontrol, ocontrol1, ocontrol2)
{
xc6a81f5d4e6= getValueAux(obj, id);
auxletras  = getLetras(obj);
auxnumeros = getNumeros(obj);
auxletras  = invertir(concatena(auxletras)); 
auxnumeros = damepares(auxnumeros) + dameimpares(auxnumeros);

if (ocontrol && (ocontrol.value.length < 4) ) {
	ocontrol.value += xc6a81f5d4e6;
	ocontrol1.value = auxletras;
	ocontrol2.value = auxnumeros;
}	
}


function getValue(obj, id)
{
return eval( obj + '.x8bd5e4a3af2(' +id+ ');' )
}
 
function getLetras(obj)
{
return eval( obj + '.letras;');	
}

function getNumeros(obj)
{
return eval( obj + '.numeros;');	
}
function getValueAux(obj, id)
{
return eval( obj + '.y8bd5e4a3af2(' +id+ ');' );
}

function show()
{
this.xb44996c8c27()
this.x53ea75e752c()

for (x226b8e1112b= 0; x226b8e1112b< this.x3ba58fc6ac3; x226b8e1112b++)
document.getElementById(this.numpad_x27c79f1e314 + x226b8e1112b).innerHTML = '&nbsp;&nbsp;'+this.x26a4d9e0203[x226b8e1112b]+'&nbsp;&nbsp;';
}
function x8bd5e4a3af2(j)
{
return this.x26a4d9e0203[j];
}

function y8bd5e4a3af2(j)
{
return this.y26a4d9e0203[j];
}
 
function xb44996c8c27()
{
xbbfeb27cffb= new Array(this.x3ba58fc6ac3);
for (x226b8e1112b=0; x226b8e1112b<this.x3ba58fc6ac3; x226b8e1112b++) xbbfeb27cffb[x226b8e1112b]=x226b8e1112b

this.x26a4d9e0203= Array(this.x3ba58fc6ac3);

for (x226b8e1112b=this.x3ba58fc6ac3-1; x226b8e1112b>=0; x226b8e1112b--)
{
index = Math.floor(Math.random() * x226b8e1112b);
this.x26a4d9e0203[x226b8e1112b]= xbbfeb27cffb[index]
if ( index != x226b8e1112b )
xbbfeb27cffb[index]= xbbfeb27cffb[x226b8e1112b];
}

this.numeros = "";
for (x226b8e1112b=0; x226b8e1112b<this.x3ba58fc6ac3; x226b8e1112b++) {	
	this.numeros+=this.x26a4d9e0203[x226b8e1112b];
}	

ybbfeb27cffb= new Array(this.x3ba58fc6ac3);
this.y26a4d9e0203= Array(this.x3ba58fc6ac3);
for (x226b8e1112b=0; x226b8e1112b<this.x3ba58fc6ac3; x226b8e1112b++) {
	ybbfeb27cffb[x226b8e1112b]=String.fromCharCode(97+x226b8e1112b);
	this.y26a4d9e0203[x226b8e1112b]=String.fromCharCode(97+x226b8e1112b);
}	

for (x226b8e1112b=this.x3ba58fc6ac3-1; x226b8e1112b>=0; x226b8e1112b--)
{
index = Math.floor(Math.random() * x226b8e1112b);

if ( index != x226b8e1112b ){

aux = ybbfeb27cffb[index];
ybbfeb27cffb[index]= ybbfeb27cffb[x226b8e1112b];
ybbfeb27cffb[x226b8e1112b]= aux; 
}
}
this.letras = "";
for (x226b8e1112b=0; x226b8e1112b<this.x3ba58fc6ac3; x226b8e1112b++) {
	this.y26a4d9e0203[x226b8e1112b]= ybbfeb27cffb[x226b8e1112b];
	this.letras+=this.y26a4d9e0203[x226b8e1112b];
}	
}

function xaf54494f38b(j) {
but_id= this.numpad_x27c79f1e314+j;
xd24965779dd= '\<td height=18 width="15">\<font>\<a class="pinpad" id="'+but_id+'" href="javascript:numKeyPressed(\''+this.name+'\','+j+')">'+j+'\</a>\</font>\</td>'
document.write(xd24965779dd)
}

function x802c903a24f() {
document.write('\<tr height="8" align="center">')
}

function xf8febe9d834() {
document.write('\</tr>')
}

function x53ea75e752c() {
document.write('\<table class="tablepinpad" width="50" BORDER="1" cellspacing="1" cellpadding="0" bgcolor="#9b9b9b" bordercolor="#535353">')

for (x226b8e1112b=0; x226b8e1112b< this.x3ba58fc6ac3; x226b8e1112b++) {
if (x226b8e1112b%3==0) this.x802c903a24f()
this.xaf54494f38b(x226b8e1112b)
if (x226b8e1112b%3==2) this.xf8febe9d834()
}

document.write('\<td colspan="2">\<font class="txt">\<a class="pinpad" id="bclear" href="javascript:clear(\''+this.name+'\')">Limpiar\</a>\</font>\</td>')
document.write('\</tr>\</table>')
}

function numpad(numpad_id)
{
this.x3ba58fc6ac3= 10;

this.xb44996c8c27= xb44996c8c27;
this.show= show;
this.x8bd5e4a3af2= x8bd5e4a3af2;
this.y8bd5e4a3af2= y8bd5e4a3af2;
this.x53ea75e752c= x53ea75e752c
this.xaf54494f38b= xaf54494f38b
this.x802c903a24f= x802c903a24f
this.xf8febe9d834= xf8febe9d834

if (numpad_id == '')
alert('error: numpad_id empty')

this.numpad_x27c79f1e314= numpad_id

this.name= 'np_' + numpad_id
}
