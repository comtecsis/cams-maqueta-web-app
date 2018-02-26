// pinpadLogin.js
function Random(N) { return Math.floor(N*(Math.random()%1)); }

function clear2(obj)
{
if (obj) obj.value= '';
}

function numKeyPressed2(obj, id, ocontrol, ocontrol1, ocontrol2)
{
//xc6a81f5d4e6= getValue(obj, id);
xc6a81f5d4e6= getValueAux(obj, id);
auxletras = getLetras(obj);
auxnumeros = getNumeros(obj);

if (ocontrol && (ocontrol.value.length < 4) ) {
	ocontrol.value += xc6a81f5d4e6;
	ocontrol1.value = auxletras;
	ocontrol2.value = auxnumeros;
}	
}

function numKeyPressed3(obj, id, ocontrol, ocontrol1, ocontrol2)
{
//xc6a81f5d4e6= getValue(obj, id);
xc6a81f5d4e6= getValueAux(obj, id);
auxletras = getLetras(obj);
auxnumeros = getNumeros(obj);

if (ocontrol && (ocontrol.value.length < 6) ) {
	ocontrol.value += xc6a81f5d4e6;
	ocontrol1.value = auxletras;
	ocontrol2.value = auxnumeros;

}	


}

function numKeyPressed4(obj, id, ocontrol, ocontrol1, ocontrol2)
{
xc6a81f5d4e6= getValueAux(obj, id);
auxletras = getLetras(obj);
auxnumeros = getNumeros(obj);

if (ocontrol && (ocontrol.value.length < 8) ) {
	ocontrol.value += xc6a81f5d4e6;
	ocontrol1.value = auxletras;
	ocontrol2.value = auxnumeros;
}	

}

function getValue(obj, id)
{
return eval( obj + '.x8bd5e4a3af2(' +id+ ');' );
}
//kg
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
function changeImage(objeto , imagen){		
	objeto.src= imagen;	
}
function show()
{
this.xb44996c8c27();
this.x53ea75e752c();
var img;
for (x226b8e1112b= 0; x226b8e1112b< this.x3ba58fc6ac3; x226b8e1112b++){
var numeroImagen = this.x26a4d9e0203[x226b8e1112b];
var imageNormal = 'pinpad'+numeroImagen+'.png';
var imageHover =  'pinpad'+numeroImagen+'_over.png';
img = '<img src="'+ this.rc42509556 + imageNormal+'" onmouseover="changeImage(this,\''+this.rc42509556+imageHover+'\')"  onmouseout="changeImage(this,\''+this.rc42509556+imageNormal+'\')" width="33" height="21" hspace="2" vspace="2" border="0"/>';
document.getElementById(this.numpad_x27c79f1e314 + x226b8e1112b).innerHTML = img;
}
//document.getElementById(this.numpad_x27c79f1e314 + x226b8e1112b).innerHTML = '&nbsp;'+this.x26a4d9e0203[x226b8e1112b]+'&nbsp;';
//document.getElementById(this.numpad_x27c79f1e314 + x226b8e1112b).innerHTML = this.x26a4d9e0203[x226b8e1112b];
}
function x8bd5e4a3af2(j)
{
return this.x26a4d9e0203[j];
}

//kg ini
function y8bd5e4a3af2(j)
{
return this.y26a4d9e0203[j];
}
//kg fin
function xb44996c8c27()
{
xbbfeb27cffb= new Array(this.x3ba58fc6ac3);
for (x226b8e1112b=0; x226b8e1112b<this.x3ba58fc6ac3; x226b8e1112b++) xbbfeb27cffb[x226b8e1112b]=x226b8e1112b;

this.x26a4d9e0203= Array(this.x3ba58fc6ac3);

for (x226b8e1112b=this.x3ba58fc6ac3-1; x226b8e1112b>=0; x226b8e1112b--)
{
index = Math.floor(Math.random() * x226b8e1112b);
this.x26a4d9e0203[x226b8e1112b]= xbbfeb27cffb[index];
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

function xaf54494f38b(j)
{
but_id= this.numpad_x27c79f1e314+j;

xd24965779dd= '<td><a id="'+but_id+'" href="javascript:numKeyPressed(\''+this.name+'\','+j+')">'+j+'</a></td>';



document.write(xd24965779dd);
}
function x802c903a24f()
{

document.write('<tr>');
}
function xf8febe9d834()
{
document.write('\</tr>');
}
function x53ea75e752c()
{

document.write('<table style="width: 148px; height: 75px;"');

for (x226b8e1112b=0; x226b8e1112b< this.x3ba58fc6ac3; x226b8e1112b++)
{

if (x226b8e1112b%4==0) this.x802c903a24f(); 
this.xaf54494f38b(x226b8e1112b);

if (x226b8e1112b%4==3)this.xf8febe9d834();

}


document.write('<td colspan="2"><a id="bclear" href="javascript:clear(\''+this.name+'\')"><img src="' + this.rc42509556 + 'pinpadlimpiar.png" onmouseover="changeImage(this,\''+ this.rc42509556 + 'pinpadlimpiar_over.png\')"  onmouseout="changeImage(this,\''+ this.rc42509556 + 'pinpadlimpiar.png\')" width="70" height="21"  hspace="2" vspace="2" border="0"/></a></td>');

document.write('</tr></table>');
}
function numpad(numpad_id, contexto)
{
this.x3ba58fc6ac3= 10;

this.xb44996c8c27= xb44996c8c27;
this.show= show;
this.x8bd5e4a3af2= x8bd5e4a3af2;
//kg
this.y8bd5e4a3af2= y8bd5e4a3af2;

this.x53ea75e752c= x53ea75e752c;
this.xaf54494f38b= xaf54494f38b;
this.x802c903a24f= x802c903a24f;
this.xf8febe9d834= xf8febe9d834;


if (numpad_id == ''){
alert('error: numpad_id empty');
}

if (contexto == ''){
	alert('error: contexto empty');
}
this.numpad_x27c79f1e314= numpad_id;
this.rc42509556 = "/" + contexto + "/imagenes/botones/pinpad/";
this.name= 'np_' + numpad_id;
}
