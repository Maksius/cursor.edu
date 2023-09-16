const container = document.querySelector('.characters-list');
const containerPlanets = document.querySelector('#planets-list');
const next = document.getElementById('next');
const planets = document.getElementById('planets');
const input = document.querySelector('input[type=number]');
const title = document.querySelector('h2');
const mainUrl = 'https://swapi.dev/api';
const planetsUrl = `${mainUrl}/planets/`;

let planetsUrlNext = null;
async function fetchPlanets(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    data.results.forEach(planet => {
      const planetName = document.createElement('li');
      planetName.innerText = planet.name;
      containerPlanets.appendChild(planetName);
      planetsUrlNext = data.next;
    });
  } catch (error) {
    return console.log('Error fetching', error);
  }
};

function showPlanets(e) {
  e.preventDefault();
  if(e.target.id === 'planets' && containerPlanets.children) {
    containerPlanets.replaceChildren();
    fetchPlanets(planetsUrl);
  }
  if(e.target.id === 'next' && containerPlanets.children) {
    containerPlanets.replaceChildren();
    fetchPlanets(planetsUrlNext);
  }
};

function characterInfo(char) {
  const character = document.createElement("div");
  character.className = 'character';
  const image = document.createElement("div");
  image.className = 'image';
  const photo = document.createElement('img');
  const back = document.createElement("div");
  back.className = 'back';
  const desc = document.createElement("div");
  desc.className = 'desc';
  const name = document.createElement('span');
  name.className = 'name';
  const birth = document.createElement('span');
  birth.className = 'birth';
  const gender = document.createElement('i');

  photo.src = imgs[char.url];
  name.innerText = `${char.name}`;
  birth.innerText = `${char.birth_year}`;
  if (char.gender === 'male') {
    character.classList.add('male');
    gender.classList.add('icon-male');
  } else if (char.gender === 'female') {
    character.classList.add('female');
    gender.classList.add('icon-female');
  } else {
    character.classList.add('alien');
    gender.classList.add('icon-yoda');
  }

  character.appendChild(image);
  character.appendChild(back);
  image.appendChild(photo);
  back.appendChild(desc);
  desc.appendChild(name);
  desc.appendChild(birth);
  desc.appendChild(gender);
  container.appendChild(character);
};

function checkData() {
  const id = input.value;
  if(id >= 1 && id <= 6) {
    container.innerHTML = '';
    fetch(mainUrl + `/films/${id}`)
    .then(response => response.json())
    .then(data => {
      title.innerText = `Episode ${data.episode_id}: ${data.title}`;
      const pers = data.characters;
      pers.forEach(charURL => {
        fetch(charURL)
        .then(response => response.json())
        .then(charData => {
          characterInfo(charData)
        });
      });
    })
    .catch(error => console.log(error));
  } else {
    title.innerText = `Incorrect episode`;
  }
};

const imgs = {
  'https://swapi.dev/api/people/1/': 'https://static.wikia.nocookie.net/p__/images/8/84/Lukeskywalker.jpg/revision/latest/scale-to-width-down/1200?cb=20141111160806&path-prefix=protagonist',
  'https://swapi.dev/api/people/2/': 'https://assets.wfcdn.com/im/97647643/resize-h755-w755%5Ecompr-r85/9616/96161845/C-3Po+%28Star+Wars+IX%29+Cardboard+Standup.jpg',
  'https://swapi.dev/api/people/3/': 'https://static.wikia.nocookie.net/rustarwars/images/1/1a/R2d2.jpg/revision/latest?cb=20120924084739',
  'https://swapi.dev/api/people/4/': 'https://m.media-amazon.com/images/I/81LhPtQBklL.jpg',
  'https://swapi.dev/api/people/5/': 'https://assets.wfcdn.com/im/16916555/resize-h755-w755%5Ecompr-r85/6297/62973377/Star+Wars+Princess+Leia+Organa+Life+Size+Cardboard+Stand+Up.jpg',
  'https://swapi.dev/api/people/6/': 'https://static.wikia.nocookie.net/rustarwars/images/8/81/Owen-OP.jpg/revision/latest?cb=20180607092301',
  'https://swapi.dev/api/people/7/': 'https://static.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png/revision/latest?cb=20221005045303',
  'https://swapi.dev/api/people/8/': 'https://static.wikia.nocookie.net/rustarwars/images/4/41/R5_negtd.jpg/revision/latest/scale-to-width-down/1000?cb=20180125121726',
  'https://swapi.dev/api/people/9/': 'https://static.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20130305010406',
  'https://swapi.dev/api/people/10/': 'https://static.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg/revision/latest?cb=20111115052816',
  'https://swapi.dev/api/people/11/': 'https://snworksceo.imgix.net/bsd/e08b54af-db5d-4a31-be34-260e5a6da34a.sized-1000x1000.jpg?w=1000',
  'https://swapi.dev/api/people/12/': 'https://static.wikia.nocookie.net/rustarwars/images/c/c1/Tarkininfobox.jpg/revision/latest?cb=20140521091626',
  'https://swapi.dev/api/people/13/': 'https://www.hollywoodmegastore.com/pub/media/catalog/product/cache/c9e0b0ef589f3508e5ba515cde53c5ff/2/9/2974_chewbacca_swix_37x90.jpg',
  'https://swapi.dev/api/people/14/': 'https://bamfstyle.com/wp-content/uploads/2016/05/hansolo-main.png',
  'https://swapi.dev/api/people/15/': 'https://static.wikia.nocookie.net/battlefront/images/e/ec/Greedo_white_bg.jpg/revision/latest?cb=20160310041544',
  'https://swapi.dev/api/people/16/': 'https://static.wikia.nocookie.net/star-wars-canon/images/4/44/Jabba.png/revision/latest?cb=20150824043105',
  'https://swapi.dev/api/people/18/': 'https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg',
  'https://swapi.dev/api/people/19/': 'https://static.wikia.nocookie.net/rustarwars/images/3/39/%D0%9F%D0%BE%D1%80%D0%BA%D0%B8%D0%BD%D1%81.jpg/revision/latest/thumbnail/width/360/height/360?cb=20220309183207',
  'https://swapi.dev/api/people/20/': 'https://m.media-amazon.com/images/I/91Au8mepKtL.jpg',
  'https://swapi.dev/api/people/21/': 'https://www.sosyncd.com/wp-content/uploads/2022/07/26-1.png',
  'https://swapi.dev/api/people/22/': 'https://static.thcdn.com/images/large/original/productimg/1600/1600/11831338-2094595791500195.jpg',
  'https://swapi.dev/api/people/23/': 'https://m.media-amazon.com/images/I/61PacY2NuqL.jpg',
  'https://swapi.dev/api/people/24/': 'https://www.previewsworld.com/SiteImage/MainImage/STL096688',
  'https://swapi.dev/api/people/25/': 'https://bamfstyle.com/wp-content/uploads/2019/05/lando-main1.jpg',
  'https://swapi.dev/api/people/26/': 'https://assets.mycast.io/characters/lobot-635847-normal.jpg?1588268433',
  'https://swapi.dev/api/people/27/': 'https://media.entertainmentearth.com/assets/images/e70322ba0fec410996603fcd54b7877dxl.jpg',
  'https://swapi.dev/api/people/28/': 'https://static.wikia.nocookie.net/rustarwars/images/d/d9/MonMothma2.jpg/revision/latest?cb=20090430121312',
  'https://swapi.dev/api/people/29/': 'https://static.wikia.nocookie.net/starwars/images/d/de/Arvel-crynyd.jpg/revision/latest?cb=20120113223349',
  'https://swapi.dev/api/people/30/': 'https://d1w8cc2yygc27j.cloudfront.net/3166570202276520077/3771887854356145309.jpg',
  'https://swapi.dev/api/people/31/': 'https://static.wikia.nocookie.net/battlefront/images/0/06/Nien_Nunb_white_bg.jpg/revision/latest?cb=20160310041139',
  'https://swapi.dev/api/people/32/': 'https://static.wikia.nocookie.net/starwars/images/6/66/Qui-Gon_Jinn_SWFB.png/revision/latest?cb=20160910051518',
  'https://swapi.dev/api/people/33/': 'https://i.pinimg.com/1200x/04/2e/b1/042eb1139bcde2d8cd3c6f91dc34ba93.jpg',
  'https://swapi.dev/api/people/34/': 'https://swrpggm.com/wp-content/uploads/2023/06/Finis-Valorum_FE.png',
  'https://swapi.dev/api/people/35/': 'https://i.ebayimg.com/images/g/C0gAAOSwtD5iSKX6/s-l1200.webp',
  'https://swapi.dev/api/people/36/': 'https://s.hdnux.com/photos/21/65/12/4674208/6/1200x0.jpg',
  'https://swapi.dev/api/people/37/': 'https://swrpggm.com/wp-content/uploads/2022/12/Roos-Tarpals_FE.jpg',
  'https://swapi.dev/api/people/38/': 'https://swrpggm.com/wp-content/uploads/2022/07/Rugor-Nass_FE.png.webp',
  'https://swapi.dev/api/people/39/': 'https://static.wikia.nocookie.net/starwars/images/4/4c/RicOlieHS-SWE.png/revision/latest?cb=20120226230538',
  'https://swapi.dev/api/people/40/': 'https://upload.wikimedia.org/wikipedia/ru/2/22/Toydaria2.jpg',
  'https://swapi.dev/api/people/41/': 'https://i.pinimg.com/originals/8a/90/dc/8a90dcda66d0da09fa1a74bab9af33d2.jpg',
  'https://swapi.dev/api/people/42/': 'https://static.wikia.nocookie.net/starwars/images/7/72/PanakaHS-TPM.png/revision/latest?cb=20130126044005',
  'https://swapi.dev/api/people/43/': 'https://i.pinimg.com/1200x/76/cb/62/76cb623e68c0f97fa9605fba85a0f488.jpg',
  'https://swapi.dev/api/people/44/': 'https://www.pngkey.com/png/detail/75-752389_darth-maul-star-wars-darth-maul-png.png',
  'https://swapi.dev/api/people/45/': 'https://rpggamer.org/uploaded_images/Bib_Fortuna1.jpg',
  'https://swapi.dev/api/people/46/': 'https://m.media-amazon.com/images/I/61ik6VGmfWL.jpg',
  'https://swapi.dev/api/people/47/': 'https://www.jedipedia.net/w/images/6/6e/Ratts_Tyerell.jpg',
  'https://swapi.dev/api/people/48/': 'https://www.scabard.com/user/PrincessPie/image/Dud%20Bolt.jpg',
  'https://swapi.dev/api/people/49/': 'https://static.wikia.nocookie.net/rustarwars/images/5/50/Gasganp.jpg/revision/latest?cb=20071227204846',
  'https://swapi.dev/api/people/50/': 'https://static.wikia.nocookie.net/rustarwars/images/6/62/Ben_quadinaros2.jpg/revision/latest?cb=20100828120944',
  'https://swapi.dev/api/people/51/': 'https://www.giantbomb.com/a/uploads/scale_small/3/34651/3375048-mace2.jpg',
  'https://swapi.dev/api/people/52/': 'https://static.wikia.nocookie.net/rustarwars/images/9/9e/KiAdiMundi.jpg/revision/latest?cb=20080620112104',
  'https://swapi.dev/api/people/53/': 'https://m.media-amazon.com/images/I/71lW2TO19OL.jpg',
  'https://swapi.dev/api/people/54/': 'https://static.wikia.nocookie.net/starwars/images/b/b6/Eeth_Koth_profile.png/revision/latest?cb=20131103213648',
  'https://swapi.dev/api/people/55/': 'https://static.wikia.nocookie.net/rustarwars/images/b/ba/AdiGallia.jpg/revision/latest?cb=20081201163220',
  'https://swapi.dev/api/people/56/': 'https://comicvine.gamespot.com/a/uploads/scale_medium/0/77/214057-27080-saesee-tinn.jpg',
  'https://swapi.dev/api/people/57/': 'https://swrpggm.com/wp-content/uploads/2022/07/Yarael-Poof_FE.png',
  'https://swapi.dev/api/people/58/': 'https://static.wikia.nocookie.net/starwars/images/c/c4/Plo_Koon_TPM.png/revision/latest?cb=20130911190623',
  'https://swapi.dev/api/people/59/': 'https://images.squarespace-cdn.com/content/v1/5fbc4a62c2150e62cfcb09aa/2be14303-fb5d-47f4-94fd-3a944e53f9d2/AVvXsEjA30Z_QKmXop4F31SDwV8QqNOh.jpg',
  'https://swapi.dev/api/people/60/': 'https://static.wikia.nocookie.net/starwars/images/7/75/Typho_CVD.jpg/revision/latest?cb=20070909042751',
  'https://swapi.dev/api/people/61/': 'https://cosplayers.acparadise.com/106/106-016240b850d3a350eb55090a79e6e9f9.jpg',
  'https://swapi.dev/api/people/62/': 'https://i.pinimg.com/1200x/32/8b/92/328b92044486e11deddfb85fa7f52bf2.jpg',
  'https://swapi.dev/api/people/63/': 'https://m.media-amazon.com/images/I/51LFXj6oc6L._AC_UF894,1000_QL80_.jpg',
  'https://swapi.dev/api/people/64/': 'https://img.artpal.com/206231/7-19-9-14-10-32-16m.jpg',
  'https://swapi.dev/api/people/65/': 'https://static.wikia.nocookie.net/disney/images/b/b9/Barris_Offee.jpg/revision/latest?cb=20200213073433',
  'https://swapi.dev/api/people/66/': 'https://static.wikia.nocookie.net/rustarwars/images/8/8b/Dorme.jpg/revision/latest?cb=20120719182734',
  'https://swapi.dev/api/people/67/': 'https://i.pinimg.com/1200x/90/52/53/90525308f9a5a6667b8fa9d7e02415b6.jpg',
  'https://swapi.dev/api/people/68/': 'https://static.wikia.nocookie.net/jedipedia/images/0/0d/Bail.jpg/revision/latest?cb=20060528210228&path-prefix=de',
  'https://swapi.dev/api/people/69/': 'https://comicvine.gamespot.com/a/uploads/scale_small/7/73290/1358702-jango.jpg',
  'https://swapi.dev/api/people/70/': 'https://comicvine.gamespot.com/a/uploads/original/1/15317/322749-47126-zam-wesell.jpg',
  'https://swapi.dev/api/people/71/': 'https://static.wikia.nocookie.net/swfanon/images/8/82/Dexter.jpg/revision/latest?cb=20080628044024',
  'https://swapi.dev/api/people/72/': 'https://static.wikia.nocookie.net/starwars/images/7/73/Lama_Su.jpg/revision/latest?cb=20080117165735',
  'https://swapi.dev/api/people/73/': 'https://static.wikia.nocookie.net/starwars/images/9/9c/TaunWe.jpg/revision/latest?cb=20080117164920',
  'https://swapi.dev/api/people/74/': 'https://static.wikia.nocookie.net/rustarwars/images/4/44/Jocasta_Nu.jpg/revision/latest?cb=20100706162739',
  'https://swapi.dev/api/people/75/': 'https://static.wikia.nocookie.net/rustarwars/images/7/77/R4-G9.jpg/revision/latest?cb=20181027073926',
  'https://swapi.dev/api/people/76/': 'https://static.wikia.nocookie.net/rustarwars/images/e/e8/TamborBoomHeadshot.jpg/revision/latest?cb=20120331131015',
  'https://swapi.dev/api/people/77/': 'https://static.wikia.nocookie.net/starwars/images/4/4f/San_hill.jpg/revision/latest?cb=20071203213757',
  'https://swapi.dev/api/people/78/': 'https://static.wikia.nocookie.net/rustarwars/images/4/44/Shaak_Ti_Big_Headshot.jpg/revision/latest?cb=20080720170648',
  'https://swapi.dev/api/people/79/': 'https://static.wikia.nocookie.net/dominios-encantados/images/0/0e/WIKI_GRIEVOUS.png/revision/latest?cb=20150601175321&path-prefix=es',
  'https://swapi.dev/api/people/80/': 'https://static.wikia.nocookie.net/starwars/images/3/37/Tarfful_RotS.png/revision/latest/scale-to-width-down/1000?cb=20230729055446',
  'https://swapi.dev/api/people/81/': 'https://swrpggm.com/wp-content/uploads/2023/05/Raymus-Antilles_FE.png',
  'https://swapi.dev/api/people/82/': 'https://static.wikia.nocookie.net/rustarwars/images/5/5f/%D0%A1%D0%BB%D0%B0%D0%B9_%D0%9C%D1%83%D1%80.jpg/revision/latest?cb=20120522072443',
  'https://swapi.dev/api/people/83/': 'https://static.wikia.nocookie.net/rustarwars/images/f/f2/Pauan.png/revision/latest?cb=20130108141409',
}






































planets.addEventListener('click', showPlanets);
next.addEventListener('click', showPlanets);