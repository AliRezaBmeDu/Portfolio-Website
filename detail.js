const proj_db = [
    {
        titleMobile: "Tonic",
        closeButtonIcon: "./icons/closeButtonIcon.png",
        overheadMobile: ["Canopy", "Back End Dev", "2015"],
        descMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgMobile: "./works/project01.png",
        builtwithMobile: ["HTML", "CSS", "javaScript"],
        liveIcon: "./icons/liveIcon.png",
        liveSource: "./icons/sourceIcon.png",
        titleDesktop: "Tonic",
        descDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgDesktop: "./images/desktop/project01.png",
        builtwithDesktop: ["HTML","CSS","javaScript"],
        
    },
    {
        titleMobile: "Multi-Post Stories",
        closeButtonIcon: "./icons/closeButtonIcon.png",
        overheadMobile: ["Canopy", "Back End Dev", "2015"],
        descMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgMobile: "./works/project02.png",
        builtwithMobile: ["HTML", "CSS", "javaScript"],
        liveIcon: "./icons/liveIcon.png",
        liveSource: "./icons/sourceIcon.png",
        titleDesktop: "Multi-Post Stories",
        overheadDesktop: ["FACEBOOK", "Full Stack Dev", "2015"],
        descDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgDesktop: "./images/desktop/project02.png",
        builtwithDesktop: ["HTML","Ruby on rails","CSS","javaScript"],
        
    },
    {
        titleMobile: "Tonic",
        closeButtonIcon: "./icons/closeButtonIcon.png",
        overheadMobile: ["Canopy", "Back End Dev", "2015"],
        descMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgMobile: "./works/project03.png",
        builtwithMobile: ["HTML", "CSS", "javaScript"],
        liveIcon: "./icons/liveIcon.png",
        liveSource: "./icons/sourceIcon.png",
        titleDesktop: "FACEBOOK360",
        overheadDesktop: ["FACEBOOK", "Full Stack Dev", "2015"],
        descDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgDesktop: "./images/desktop/project03.png",
        builtwithDesktop: ["HTML","Ruby on rails","CSS","javaScript"],
        
    },
    {
        titleMobile: "Multi-Post Stories",
        closeButtonIcon: "./icons/closeButtonIcon.png",
        overheadMobile: ["Canopy", "Back End Dev", "2015"],
        descMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgMobile: "./works/project04.png",
        builtwithMobile: ["HTML", "CSS", "javaScript"],
        liveIcon: "./icons/liveIcon.png",
        liveSource: "./icons/sourceIcon.png",
        titleDesktop: "Uber Navigation",
        overheadDesktop: ["Uber", "Lead Developer", "2018"],
        descDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgDesktop: "./images/desktop/project04.png",
        builtwithDesktop: ["HTML","Ruby on rails","CSS","javaScript"],
        
    }
]

const projectCard = document.createElement("div");
const title = document.createElement("div");
const overhead = document.createElement("ul");
const imageCard = document.createElement("img");
const description = document.createElement("p");
const builtwith = document.createElement("ul");

//--------Building Project Card for Mobile Version-----//
const project = proj_db[0];
projectCard.classList.add("pro-mobile");
title.classList.add("top-div-popup");
const h1 = document.createElement("h1");
h1.textContent = project.titleMobile;

const closeButton = document.createElement("button");
closeButton.classList.add("close-button"); // Add appropriate class for styling
const closeButtonIcon = document.createElement("img");
closeButtonIcon.src = project.closeButtonIcon;
closeButtonIcon.classList.add("close-button-icon"); // Add appropriate class for styling
closeButton.appendChild(closeButtonIcon);
title.appendChild(h1);
title.appendChild(closeButton);

project.overheadMobile.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    if (index === 0) {
      li.classList.add("first-child"); // Add a different class to the first child
    }
    overhead.appendChild(li);
  });

imageCard.src = project.imgMobile;
imageCard.classList.add("pro-image");
description.textContent = project.descMobile;
builtwith.classList.add('builtwith-popup');
project.builtwithMobile.forEach((tech) => {
    const li = document.createElement("li");
    const liDiv = document.createElement('button');
    liDiv.classList.add('tech-popup');
    liDiv.textContent = tech;
    builtwith.appendChild(li);
});

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons-container"); // Add appropriate class for styling

const liveButton = document.createElement("button");
liveButton.textContent = "See live";
liveButton.classList.add("button"); // Add appropriate class for styling

const sourceButton = document.createElement("button");
sourceButton.textContent = "See source";
sourceButton.classList.add("button"); // Add appropriate class for styling

//live button
const liveButton = document.createElement("button");
liveButton.classList.add("button-popup"); // Add appropriate class for styling

const liveButtonText = document.createElement("span");
liveButtonText.textContent = "See live";
const liveButtonIcon = document.createElement("img");
liveButtonIcon.src = project.liveIcon;
liveButtonIcon.classList.add("button-icon"); // Add appropriate class for styling

liveButton.appendChild(liveButtonText);
liveButton.appendChild(liveButtonIcon);

//source button
const sourceButton = document.createElement("button");
sourceButton.classList.add("button-popup"); // Add appropriate class for styling

const sourceButtonText = document.createElement("span");
sourceButtonText.textContent = "See source";
const sourceButtonIcon = document.createElement("img");
sourceButtonIcon.src = project.sourceIcon;
sourceButtonIcon.classList.add("button-icon"); // Add appropriate class for styling

sourceButton.appendChild(sourceButtonText);
sourceButton.appendChild(sourceButtonIcon);


buttonsContainer.appendChild(liveButton);
buttonsContainer.appendChild(sourceButton);

projectCard.appendChild(title);
projectCard.appendChild(overhead);
projectCard.appendChild(imageCard);
projectCard.appendChild(description);
projectCard.appendChild(builtwith);
projectCard.appendChild(buttonsContainer);
