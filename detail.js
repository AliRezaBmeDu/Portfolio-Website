const proj_db = [
    {
        titleMobile: "Tonic",
        closeButtonIcon: "./icons/closeButtonIcon.png",
        overheadMobile: ["Canopy", "Back End Dev", "2015"],
        shortdescMobile: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        descMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgMobile: "./works/project01.png",
        builtwithMobile: ["HTML", "CSS", "javaScript"],
        liveIcon: "./icons/liveIcon.png",
        sourceIcon: "./icons/sourceIcon.png",
        titleDesktop: "Tonic",
        overheadDesktop: ["Canopy", "Back End Dev", "2015"],
        shortdescDesktop: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        descDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgDesktop: "./images/desktop/project01.png",
        builtwithDesktop: ["HTML","CSS","javaScript"],
        
    },
    {
        titleMobile: "Multi-Post Stories",
        closeButtonIcon: "./icons/closeButtonIcon.png",
        overheadMobile: ["Canopy", "Back End Dev", "2015"],
        shortdescMobile: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        descMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgMobile: "./works/project02.png",
        builtwithMobile: ["HTML", "CSS", "javaScript"],
        liveIcon: "./icons/liveIcon.png",
        sourceIcon: "./icons/sourceIcon.png",
        titleDesktop: "Multi-Post Stories",
        overheadDesktop: ["FACEBOOK", "Full Stack Dev", "2015"],
        shortdescDesktop: "Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
        descDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgDesktop: "./images/desktop/project02.png",
        builtwithDesktop: ["HTML","Ruby on rails","CSS","javaScript"],
        
    },
    {
        titleMobile: "Tonic",
        closeButtonIcon: "./icons/closeButtonIcon.png",
        overheadMobile: ["Canopy", "Back End Dev", "2015"],
        shortdescMobile: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        descMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgMobile: "./works/project03.png",
        builtwithMobile: ["HTML", "CSS", "javaScript"],
        liveIcon: "./icons/liveIcon.png",
        sourceIcon: "./icons/sourceIcon.png",
        titleDesktop: "FACEBOOK360",
        overheadDesktop: ["FACEBOOK", "Full Stack Dev", "2015"],
        shortdescDesktop: "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
        descDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgDesktop: "./images/desktop/project03.png",
        builtwithDesktop: ["HTML","Ruby on rails","CSS","javaScript"],
        
    },
    {
        titleMobile: "Multi-Post Stories",
        closeButtonIcon: "./icons/closeButtonIcon.png",
        overheadMobile: ["Canopy", "Back End Dev", "2015"],
        shortdescMobile: "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        descMobile: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgMobile: "./works/project04.png",
        builtwithMobile: ["HTML", "CSS", "javaScript"],
        liveIcon: "./icons/liveIcon.png",
        sourceIcon: "./icons/sourceIcon.png",
        titleDesktop: "Uber Navigation",
        overheadDesktop: ["Uber", "Lead Developer", "2018"],
        shortdescDesktop: "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
        descDesktop: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
        imgDesktop: "./images/desktop/project04.png",
        builtwithDesktop: ["HTML","Ruby on rails","CSS","javaScript"],
        
    }
]

const buttonID = {
    see1: 0, see2: 1, see3: 2, see4: 3
}

//........Building the Work Section........//

const workContainer = document.getElementById("works");
for(i=0; i<4; i++){
    const singleProject = document.createElement('div');
    singleProject.classList.add("project-card");
    singleProject.id = `${i+1}-project`;
    //img Desktop
    const imgWrapDtop = document.createElement('a')
    imgWrapDtop.href = "";
    imgWrapDtop.classList.add('project-img','desktop');
    const imgDtop = document.createElement('img');
    imgDtop.src = proj_db[i].imgDesktop;
    imgWrapDtop.appendChild(imgDtop);
    //img Mobile
    const imgWrapMobile = document.createElement('a')
    imgWrapMobile.href = "";
    imgWrapMobile.classList.add('project-img','mobile');
    const imgMobile = document.createElement('img');
    imgMobile.src = proj_db[i].imgMobile;
    imgWrapMobile.appendChild(imgMobile);
    //proj-desktop:: first key letter-d
    const dProjDtop = document.createElement('div'); //81no.line
    //first title
    const mFirstTitle = document.createElement('h1');
    mFirstTitle.textContent = proj_db[i].titleMobile;
    mFirstTitle.classList.add('mobile');
    mFirstTitle.classList.add('title');
    const dFirstTitle = document.createElement('h1');
    dFirstTitle.textContent = proj_db[i].titleDesktop;
    dFirstTitle.classList.add('desktop');
    //proj-overhead
    const dProjOverhead = document.createElement('div');
    dProjOverhead.classList.add('project-overhead');
    const dOverhead =document.createElement('ul');
    dOverhead.classList.add('overhead');
    if(i==0){
        dOverhead.classList.add('new');
    }
    //mobile
        const mLiElem1 = document.createElement('li');
        mLiElem1.classList.add('overhead-1','mobile');
        mLiElem1.textContent = proj_db[i].overheadMobile[0];
        const mLiElem2 = document.createElement('li');
        mLiElem2.textContent = proj_db[i].overheadMobile[1];
        mLiElem2.classList.add('mobile');
        const mLiElem3 = document.createElement('li');
        mLiElem3.textContent = proj_db[i].overheadMobile[2];
        mLiElem3.classList.add('mobile');
        dOverhead.appendChild(mLiElem1);
        dOverhead.appendChild(mLiElem2);
        dOverhead.appendChild(mLiElem3);
    //desktopOverheadlist
    const dLiElem1 = document.createElement('li');
    dLiElem1.classList.add('overhead-1');
    dLiElem1.classList.add('desktop');
    dLiElem1.textContent = proj_db[i].overheadDesktop[0];
    const dLiElem2 = document.createElement('li');
    dLiElem2.textContent = proj_db[i].overheadDesktop[1];
    dLiElem2.classList.add('desktop');
    const dLiElem3 = document.createElement('li');
    dLiElem3.textContent = proj_db[i].overheadDesktop[2];
    dLiElem3.classList.add('desktop');
    dOverhead.appendChild(dLiElem1);
    dOverhead.appendChild(dLiElem2);
    dOverhead.appendChild(dLiElem3);
    dProjOverhead.appendChild(dOverhead);
    //description part
    const mProjectDetail = document.createElement('p'); //90no.line
    mProjectDetail.classList.add('project-detail','mobile');
    mProjectDetail.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required.";

    const dProjectDetail = document.createElement('p'); //90no.line
    dProjectDetail.classList.add('project-detail','desktop');
    dProjectDetail.textContent = proj_db[i].shortdescDesktop[i];

    const dBuiltWith = document.createElement('ul');
    dBuiltWith.classList.add('built-with');
    if(i==0){
        dBuiltWith.classList.add('newbltwth');
    }
    //list of tech
    const dLiTech1 = document.createElement('li');
    const dLiButton1 = document.createElement('button');
    dLiButton1.classList.add('build');
    dLiButton1.textContent = 'HTML';
    dLiTech1.appendChild(dLiButton1);
    dBuiltWith.appendChild(dLiTech1);

    if(i==2 || i==3){
        const dLiTech4 = document.createElement('li');
        dLiTech4.classList.add('desktop');
        const dLiButton4 = document.createElement('button');
        dLiButton4.classList.add('build','desktop');
        dLiButton4.textContent = 'Ruby on rails';
        dLiTech4.appendChild(dLiButton4);
        dBuiltWith.appendChild(dLiTech4);
    }

    const dLiTech2 = document.createElement('li');
    const dLiButton2 = document.createElement('button');
    dLiButton2.classList.add('build');
    dLiButton2.textContent = 'CSS';
    dLiTech2.appendChild(dLiButton2);
    dBuiltWith.appendChild(dLiTech2);

    const dLiTech3 = document.createElement('li');
    const dLiButton3 = document.createElement('button');
    dLiButton3.classList.add('build');
    dLiButton3.classList.add('lastBuild');
    dLiButton3.textContent = 'javaScript';
    dLiTech2.appendChild(dLiButton3);
    dBuiltWith.appendChild(dLiTech3);


    const dSeeButton = document.createElement('button');
    dSeeButton.classList.add('see');
    dSeeButton.textContent = "See Project";

    dProjDtop.appendChild(dFirstTitle);
    dProjDtop.appendChild(mFirstTitle);
    dProjDtop.appendChild(dProjOverhead);
    dProjDtop.appendChild(mProjectDetail);
    dProjDtop.appendChild(dProjectDetail);
    dProjDtop.appendChild(dBuiltWith);
    dProjDtop.appendChild(dSeeButton);

    //changeblock
    if(i==0 || i==2){
        singleProject.appendChild(imgWrapDtop)
        singleProject.appendChild(imgWrapMobile)
        singleProject.appendChild(dProjDtop)
    }else{
        singleProject.appendChild(imgWrapMobile)
        singleProject.appendChild(dProjDtop)
        singleProject.appendChild(imgWrapDtop)
        }
    
    workContainer.appendChild(singleProject);
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


