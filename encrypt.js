

function encrypt() {
  const p = (document.getElementById("num1").value);
  const q = (document.getElementById("num2").value);
  const r = (document.getElementById("num3").value);
  const s = (document.getElementById("num4").value);

  //==================================================================
  const z= r*s;
  const n = p * q;
  const phi = (p - 1) * (q - 1);
  const si = (r - 1) * (s - 1);

//=========================GCD CALCULATION==============================
  
  function gcd(a,  b) {
    var t;
    while(1) {
       t= a%b;
       if(t==0)
       return b;
       a = b;
       b= t;
    }
 }
//============================MOD INVERSE=================================
  var modInverse = function(a, b) {
    a %= b;
    for (var x = 1; x < b; x++) {
        if ((a*x)%b == 1) {
            return x;
        }
    }
}
//=================================E CALCULATING===========================
var  e=3;
while(e<phi) {
  track = gcd(e,phi);
  if(track==1)
     break;
  else
     e++;
} 
console.log("value of e="+ e) 

//===============================G CALCULATING==============================

var g=3;
while(g<si) {
  track = gcd(g,si);
  if(track==1)
     break;
  else
     g++;
} 

console.log("value of g="+ g) 


//=====================================D AND T CALCULATING====================

var d = modInverse(e, phi);
var t= modInverse(g,si);
console.log("value of z="+z);
console.log("value of t="+t);

  
  console.log("d is"+d);
  console.log("n is= "+n);

//===================================ENCRYPTING PLAINTEXT=======================

var timenow=new Date().getTime();
var  message = document.getElementById("plaintext").value;
  var msglength=message.length;
  console.log("msg length is"+msglength)
  var ptxtno = new Array(msglength); cip=new Array(msglength);
  var tmp = new Array(msglength);
   var ptxtnoquotient=new Array(msglength);
      for(var i=0;i<msglength;i++){
     
        var t;
        ptxtno[i]=message.charCodeAt(i);
        ptxtnoquotient[i]=parseInt(ptxtno[i]/26);

        ptxtno[i]=ptxtno[i]%26;
        
        console.log(ptxtnoquotient[i])
        console.log(ptxtno[i])
      }
      
      
      console.log(" quotients are="+ptxtnoquotient) ;
      console.log(ptxtnoquotient) ;

for(var i=0;i<msglength;i++)
{
  var w;w=ptxtno[i];
  cip[i]  = (w ** e) % n;
  tmp[i] = cip[i] ;
  console.log(tmp[i]);
}  



console.log(tmp);
console.log(tmp.length);

//===============================SECOND ENCRYPTING CIPHERTEXT========================
var tmpone = " ";


cipnew=new Array(tmp);
 
for(var i=0;i<tmp.length;i++){
  var y;y=tmp[i];
  
  cipnew[i]=(y**g)%z;
  tmpone=tmpone+cipnew[i]+ " ";

}
console.log("second text is "+ tmpone);


var timeafter=new Date().getTime();
var timerequried=timeafter-timenow;
console.log("  Time required for encryption= "+timerequried);

//============================DISPLAYING CIPHER TEXT ON BROWSER==============================
 
  //document.getElementById("output1").innerHTML = "Public Key = (<strong>" + e + "</strong>,<strong>" + g + "</strong>,<strong>" + n + "</strong>,<strong>" + z + "</strong>)";
  //document.getElementById("output2").innerHTML = "Private Key = (<strong>" + d + "</strong>,<strong>" + t + "</strong>,<strong>" + n + "</strong>,<strong>" + z + "</strong>)";
  document.getElementById("output1").innerHTML = tmpone;

// document.getElementById("output4").innerHTML = "Encrypted text c2 = " + tmpone;

}

//=========================================END OF ENCRYPTION======================================





