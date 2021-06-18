

let main = document.querySelector('main');
main.innerHTML = '<article> <h2>Frutas de One Piece</h2> <p>Frutas:</p> <ul><li><a href="#Mera Mera no Mi">Mera Mera no Mi</a></li> <li><a href="#Magu Magu no Mi">Magu Magu no Mi </a></li> <li><a href="#Ope Ope no Mi">Ope Ope no Mi</a></li></ul> <br><br><br><br> <h3>Mera Mera no Mi (Fruta do Fogo)</h3> <p> Tipo:Logia Quem consumiu: Portgas D. Ace e, posteriormente, Sabo Esta Akuma no Mi dá a seu usuário a habilidade de criar e controlar fogo, além de ele mesmo poder se transformar em fogo. Este recurso possibilita diferentes formas de ataques e defesa, ou até mesmo  uma mistura dos dois ao mesmo tempo, visto que o usuário pode se transformar em chamas para evitar ser atingido e ainda queimar seu adversário no processo.</p> <img src="https://s.aficionados.com.br/imagens/mera-mera-no-mi_cke.jpg" id="foto1"/> <button onclick="mera()">1</button> <button onclick="mera()">2</button> <button onclick="mera()">3</button> </article> <br><br><br><br> <div> <h3> Magu Magu no Mi (Fruta do Magma)</h3> <p>  Tipo:Logia Quem consumiu: Almirante Sakazuki  Permite que seu usuário transforme seu próprio corpo em puro magma, além de poder criar e controlar magma como desejar. O calor do magma criado é capaz de vaporizar um iceberg instantaneamente e ferver a água ao seu redor </p> <img src="https://s.aficionados.com.br/imagens/magu-magu_cke.jpg" id="foto2"/> <button onclick="magu()">1</button> <button onclick="magu()">2</button> <button onclick="magu()">3</button> </div> <section><h3>Ope Ope no Mi (Fruta da Operação)</h3> <p>Tipo:Paramecia Quem consumiu:Trafalgar Law    Esta fruta proporciona diferentes e incríveis poderes para quem a consome, motivo pelo qual passou a ser chamada de      Akuma no Mi Suprema". O primeiro poder é a capacidade de criar uma espécie de sala esférica,  dentro da qual o usuário tem total controle sobre o que estiver lá dentro, como pessoas, armas, veículos e tudo mais. O poder que fez dela uma das frutas mais cobiçadas é o de conceder juventude eterna a outra pessoa em troca da vida do usuário atual. </p> <img src="https://s.aficionados.com.br/imagens/ope-ope-no-mi-infobox_cke.jpg" id="foto3"/> <button onclick="op()">1</button> <button onclick="op()">2</button> <button onclick="op()">3</button> </section>';

let article = document.querySelector('article');
article.id = "Mera Mera no Mi";

let div = document.querySelector('div');
div.id = "Magu Magu no Mi";

let section = document.querySelector('section');
section.id = "Ope Ope no Mi";

let img1 = document.querySelector('img#foto1');
let imagemAtual=0;

function mera () {
    if (imagemAtual === 0) {
        img1.src="https://s.aficionados.com.br/imagens/mera-mera-no-mi_cke.jpg";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img1.src="https://static.wikia.nocookie.net/onepiece/images/2/29/Mera_Mera_no_Mi.png/revision/latest?cb=20140409083856&path-prefix=pt";
        imagemAtual = 2;
    } else {
        img1.src="https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/06/legiao_cLbNKEgfZ_z6.png.jpeg";
        imagemAtual = 0;
    }
}

let img2 = document.querySelector('img#foto2');

function magu () {
    if (imagemAtual === 0) {
        img2.src="https://s.aficionados.com.br/imagens/magu-magu_cke.jpg";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img2.src="http://pm1.narvii.com/6507/89cd2ec35604d447925ae850eb7e5d0fa0929608_00.jpg";
        imagemAtual = 2;
    } else {
        img2.src="https://pm1.narvii.com/6470/6cac7c8edef2e31cbf05d24ba46f507f2475371a_hq.jpg";
        imagemAtual = 0;
    }
}

let img3 = document.querySelector('img#foto3');

function op () {
    if (imagemAtual === 0) {
        img3.src="https://s.aficionados.com.br/imagens/ope-ope-no-mi-infobox_cke.jpg";
        imagemAtual = 1;
    } else if (imagemAtual === 1) {
        img3.src="http://pm1.narvii.com/6561/e59ef3f39d62ee0a9b701f4b9bc1186bd8e07c40_00.jpg";
        imagemAtual = 2;
    } else {
        img3.src="https://e1.pngegg.com/pngimages/431/346/png-clipart-trafalgar-d-water-law-trafalgar-law-from-one-piece-illustration.png";
        imagemAtual = 0;
    }
}



 
