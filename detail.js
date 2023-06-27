const proj_db = [
    {
        titleMobile: "Tonic",
        closeButtonIcon: "./icons/closeButtonIcon.png",
        overheadMobile: ["Canopy", "Back End Dev", "2015"],
        descMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgMobile: "./works/project01.png",
        builtwithMobile: ["HTML", "CSS", "javaScript"],
        liveIcon: "./icons/liveIcon.png",
        sourceIcon: "./icons/sourceIcon.png",
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
        sourceIcon: "./icons/sourceIcon.png",
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
        sourceIcon: "./icons/sourceIcon.png",
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
        sourceIcon: "./icons/sourceIcon.png",
        titleDesktop: "Uber Navigation",
        overheadDesktop: ["Uber", "Lead Developer", "2018"],
        descDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgDesktop: "./images/desktop/project04.png",
        builtwithDesktop: ["HTML","Ruby on rails","CSS","javaScript"],
        
    }
]

const buttonID = {
    see1: 0, see2: 1, see3: 2, see4: 3
}
//--------Building Project Card for Mobile Version-----//
for(let i=0; i<4; i++){
    const projectCard = document.createElement("div"); //main card
    projectCard.id = `project-${i}`; //assigning an id to the project card
    const project = proj_db[i];
    // console.log("checkpoint 1");
    projectCard.classList.add("pro-mobile");

    const title = document.createElement("div");
    title.classList.add("top-div-popup");
    const h1 = document.createElement("h1");
    h1.textContent = project.titleMobile;

    const closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn"); // Add appropriate class for styling
    const closeButtonIcon = document.createElement("img");
    closeButtonIcon.src = project.closeButtonIcon;
    closeButtonIcon.classList.add("close-button-icon"); // Add appropriate class for styling
    closeBtn.appendChild(closeButtonIcon);
    title.appendChild(h1);
    title.appendChild(closeBtn);

    const overhead = document.createElement("ul");
    project.overheadMobile.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item;
        if (index === 0) {
        li.classList.add("first-child"); // Add a different class to the first child
        }
        overhead.appendChild(li);
    });
    overhead.classList.add('overheadPop');
    
    const imageCard = document.createElement("img");
    imageCard.src = project.imgMobile;
    imageCard.classList.add("pro-image");
    
    const description = document.createElement("p");
    description.textContent = project.descMobile;

    const builtwith = document.createElement("ul");
    builtwith.classList.add('builtwith-popup');
    project.builtwithMobile.forEach((tech) => {
        const li = document.createElement("li");
        const liDiv = document.createElement('div');
        liDiv.classList.add('tech-popup');
        liDiv.textContent = tech;
        li.appendChild(liDiv);
        builtwith.appendChild(li);
    });

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container"); // Add appropriate class for styling

    //live button
    const liveButton = document.createElement("div");
    liveButton.classList.add("button-popup"); // Add appropriate class for styling

    const liveButtonText = document.createElement("span");
    liveButtonText.textContent = "See live";
    const liveButtonIcon = document.createElement("img");
    liveButtonIcon.src = project.liveIcon;
    liveButtonIcon.classList.add("button-icon"); // Add appropriate class for styling

    liveButton.appendChild(liveButtonText);
    liveButton.appendChild(liveButtonIcon);

    //source button
    const sourceButton = document.createElement("div");
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
    document.body.appendChild(projectCard);
}

const seeBtns = document.querySelectorAll('.see');

const otherComp = document.querySelectorAll('header, section');

for(let i=0; i<4; i++){
    const popupPage = document.getElementById(`project-${i}`);
    popupPage.style.display = 'none';
}

seeBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
        const popupPage = document.getElementById(`project-${index}`);
        console.log("check it")
        popupPage.style.display = 'block';
        otherComp.forEach((subelements) => {
            subelements.classList.add('hide-seek');
          });
    });
});

const closeButtons = document.querySelectorAll('.pro-mobile .close-btn')

closeButtons.forEach((btnClose, index) => {
    btnClose.addEventListener('click', () => {
        const popupPage = document.getElementById(`project-${index}`);
        popupPage.style.display = 'none';
        otherComp.forEach((subelements) => {
            subelements.classList.remove('hide-seek');
          });
    });
});


// closeBtn.addEventListener('click', () => {
//     console.log("Hey, close button pressed!");
//     otherComp.forEach((subelements) => {
//         subelements.classList.remove('hide-seek');
//       });
//       result.forEach((proj_cont) => {
//         proj_cont.style.display = 'none';
//       })
      
//       const target = document.getElementById(flag);
//       flag = "";
//       target.scrollIntoView();

// });







// for (let i=0; i<4; i++){
//     let name = ".see"+ (i+1).toString();
//     const seeButton = document.querySelector('.see1');

// }



