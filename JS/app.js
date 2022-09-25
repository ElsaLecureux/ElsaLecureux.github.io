//Je souhaite créer une page d'accueil présentant deux animations loading:
//une pour faire un signe avec des ronds qui tournent 
// l'autre pour faire une chargement qui augmente en quelques secondes, quand il est à 100% une bouton apparait
// pour faire pparaitre un bouton après un certain temps, j'utilise la methode setTimeout:
/*setTimeout(createButton, 10ms)
//createButton () {

}*/
//au clic du bouton, m'a page CV se crée en JS

//Créer la page:
// Dans le HEADER:
// Je souhaite avoir ma photo avec mon nom, mon activité, les liens vers mon comptes (github, linkedin,mail):

//Je récupère l'element header avec javascript
const headerElm = document.querySelector('#header');
// Je crée une div avec la class 'container_name_and_work' pour y mettre mes titres
const containerNameWorkElm = document.createElement('div');
containerNameWorkElm.classList.add('container_name_and_work');
headerElm.append(containerNameWorkElm);
//Je crée un h1 avec le textContent 'Elsa Lécureux'
const h1Elm = document.createElement('h1');
h1Elm.textContent = 'Elsa Lécureux';
containerNameWorkElm.append(h1Elm);
//Je crée un h2 vace une class 'title_work' et le textContent 'Développeuse en cours formation'
const titleWorkElm = document.createElement('h2');
titleWorkElm.textContent = 'Développeuse Web en formation';
titleWorkElm.classList.add('title_work');
containerNameWorkElm.append(titleWorkElm);
//Je crée une div avec la class 'container_profil' pour y mettre ma photo mes liens
const containerProfilElm = document.createElement('div');
containerProfilElm.classList.add('container_profiles');
headerElm.append(containerProfilElm);
//je crée une div avec la class 'container_photo_profil' pour accueilir ma photo et la styliser ensuite
const containerPhotoProfilElm = document.createElement('div');
containerPhotoProfilElm.classList.add('container_photo_profil');
containerProfilElm.append(containerPhotoProfilElm);
//J'ajoute un element img au DOM dans ma div avec la class 'photo_profil'
const photoProfilElm = document.createElement('img');
photoProfilElm.src = "./images/photoresume.jpg";
photoProfilElm.alt = "Photo de profil d'Elsa Lécureux";
photoProfilElm.classList.add('photo_profil');
containerPhotoProfilElm.append(photoProfilElm);
//Je crée une div avec la class 'container_links' pour contenir mes liens
const container_links = document.createElement('div');
container_links.classList.add('container_links');
containerProfilElm.append(container_links);
//J'ajoute mes 3 liens avec leurs images, j'ajoute une class à chaque image
/*Github*/
const linkGithubElm = document.createElement('a');
linkGithubElm.href = "https://github.com/ElsaLecureux";
container_links.append(linkGithubElm);
const logoGithubElm = document.createElement('img');
logoGithubElm.src = "./images/github.svg";
logoGithubElm.alt = "logo de Github";
logoGithubElm.classList.add('link_github');
linkGithubElm.append(logoGithubElm);
/*Mail*/
const linkMailElm = document.createElement('a');
linkMailElm.href = "mailto:elsa.lecureux@gmail.com";
container_links.append(linkMailElm);
const logoMailElm = document.createElement('img');
logoMailElm.src = "./images/mail.svg";
logoMailElm.alt = "logo de Mail";
logoMailElm.classList.add('link_mail');
linkMailElm.append(logoMailElm);
/*Linkedin*/
const linkLinkedinElm = document.createElement('a');
linkLinkedinElm.href = "https://www.linkedin.com/in/elsa-lecureux";
container_links.append(linkLinkedinElm);
const logoLinkedinElm = document.createElement('img');
logoLinkedinElm.src = "./images/linkedin.svg";
logoLinkedinElm.alt = "logo de Linkedin";
logoLinkedinElm.classList.add('link_linkedin');
linkLinkedinElm.append(logoLinkedinElm);
// Dans le MAIN:
// ma présentation/actuellemnt et mes projets:

// Je récupère l'élément mainavec javascript
const mainElm = document.querySelector('#main');
//J'ajoute une div, dans laquelle je mets une h2 et des paragraphe pour me décrire
const containerPresentationElm = document.createElement('div');
containerPresentationElm.classList.add('container_presentation');
mainElm.append(containerPresentationElm);
const titlePresentationElm = document.createElement('h2');
titlePresentationElm.textContent = 'Quelques mots sur moi...';
titlePresentationElm.classList.add('title_presentation');
containerPresentationElm.append(titlePresentationElm);
const beforeParagraphElm = document.createElement('p');
beforeParagraphElm.textContent = 'Pâtissière de formation, j\'ai pu pendant 10ans explorer ma créativité et faire évoluer mon organisation et ma communication en travaillant puis en dirigeant une équipe.';
beforeParagraphElm.classList.add('before_paragraph');
containerPresentationElm.append(beforeParagraphElm);
//J'ajoute une autre div avec 'container_currently' un titre 'title_currently' et des paragraphes pour parler de ma formation
// mes projets
//J'ajoute une div 'container_projets' pour présenter mes projets


//Dans le FOOTER:
//J'ajoute juste paragraphe nom prenom, année avec une class name_year