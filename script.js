document.getElementById("entrar").addEventListener("click",mostrarCarta);

function mostrarCarta(){

document.querySelector(".contenedor").innerHTML=`

<h1>Hola, mi amor. ❤️</h1>

<p class="frase">

No sabía muy bien cómo hacerte un regalo... así que hice esto.

<br><br>

Capaz no sea perfecto, pero cada pedacito de esta página lo hice pensando en vos.

<br><br>

Quería que tuvieras un lugar al que pudieras volver siempre que necesitaras acordarte de cuánto te amo.

<br><br>

Sé que estos días vienen siendo difíciles.

Ojalá pudiera hacer que te doliera un poquito menos todo, abrazarte fuerte y hacer que descanses tranquila.

<br><br>

Como no puedo hacer eso ahora mismo...

quiero que al menos recuerdes algo.

<br><br>

<b>Nunca estás sola.</b>

</p>

<img src="img/foto1.jpg">

<img src="img/foto2.jpg">

<br><br>

<button onclick="segundaParte()">

Seguí leyendo ❤️

</button>

`;

}
function segundaParte(){

document.querySelector(".contenedor").innerHTML=`

<h1>Hay algo más... ❤️</h1>

<p class="frase">

Gracias por hacerme sentir tan querida.

<br><br>

Gracias por cada risa, por cada abrazo, por cada momento que compartimos.

<br><br>

Sos una persona increíble y ojalá pudiera hacer que todos los días difíciles fueran un poquito más fáciles.

<br><br>

Quiero que nunca dudes de algo:

<b>te elijo hoy, mañana y todos los días.</b>

<br><br>

Y si alguna vez volvés a sentirte triste...

volvé a abrir esta página.

Porque todo lo que hay acá lo hice pensando en vos.

</p>

<button onclick=<button onclick="reproducirMusica()">

🎵 Escuchá esto mientras terminás de leer 🤍

</button>

<br><br>

<button onclick="abrazo()">

🤍 Un abrazo virtual

</button>

`;

}

function abrazo(){

document.querySelector(".contenedor").innerHTML=`

<h1>🤍 Una última carta...</h1>

<p class="frase">

Mi amor...

<br><br>

No sé si alguna vez llegás a darte cuenta de lo increíble que sos.

<br><br>

Yo sí.

<br><br>

Te miro y veo a una mujer fuerte, con un corazón enorme, que siempre intenta dar lo mejor de ella, incluso cuando está cansada o cuando las cosas no vienen fáciles.

<br><br>

Y veo a una madre hermosa, que lucha todos los días por sus hijas. Veo el amor tan grande que les tenés, y eso hace que te admire todavía más.

<br><br>

Ojalá pudiera hacer un montón de cosas por vos. Sacarte los dolores, el cansancio y hacer que los días difíciles pesen un poquito menos.

<br><br>

Y si hay algo que deseo de verdad, es poder seguir compartiendo la vida con vos, acompañándote, viéndote sonreír y estando en los días lindos, pero también en los que cuestan un poquito más.

<br><br>

Gracias por dejarme quererte.

<br><br>

Y gracias por ser exactamente la persona de la que me enamoré.

<br><br>

<b>Te amo muchísimo.</b>

<br><br>

Con todo mi amor.

<br><br>

❤️ Iara ❤️

</p>

<br><br>

<button onclick="location.reload()">
🌷 Volver al principio
</button>

<p style="margin-top:20px;color:#777;font-size:15px;">
Hecho con todo mi amor para vos. ❤️
</p>
`;

}

for(let i=0;i<30;i++){

const corazon=document.createElement("div");

corazon.className="corazon";

corazon.innerHTML="❤️";

corazon.style.left=Math.random()*100+"vw";

corazon.style.animationDuration=(5+Math.random()*5)+"s";

corazon.style.animationDelay=Math.random()*5+"s";

document.getElementById("corazones").appendChild(corazon);
function reproducirMusica(){

const musica=document.getElementById("musica");

if(musica.paused){
musica.play();
}else{
musica.pause();
}

}
}