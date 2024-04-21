const htmlBtn = document.getElementById("htmlBtn");
const jsBtn = document.getElementById("jsBtn");
const reactBtn = document.getElementById("reactBtn");
const otherBtn = document.getElementById("otherBtn");
const aboutSkillContainer = document.getElementById("aboutSkillContainer");
const skillsArray = [
  {
    name: "Html",
    body: [
      "Well at Tooele technical college I learnt how to code websites using HTML. This is probably the skill I have used the most as all websites need a front end.",
      "In addition to HTML I am also very familiar with CSS. I am more than confident with styling elements whether that be setting their base styles, making them reactive to users, or animating them.",
    ],
  },
  {
    name: "JavaScript",
    body: [
      "JavaScript is another one of my best skills as I find it to be the key to really turning a webpage into a website. I feel confident handling almost any operations using javascript.",
      "NODE.JS: I’m also confident using NODE.JS. When creating backends for websites this is often my go to as express combined with mongo/mongoose database makes for a really great combination.s",
    ],
  },
  {
    name: "React",
    body: [
      "Sort of a combination of both the HTML and Javascript skills but I am also proficient in react, and have used it for the web as well as native application development in a handful of projects.",
    ],
  },
  {
    name: "Other Skills",
    body: [
      "JAVA: I have built a handful of native android applications using Java, and would love the opportunity to work with it more.",
      "PHP: Similar to my experience with Java. Well it isn’t my go to, I have built out a handful of websites using PHP, and also like java would like to get to work with it more.",
      "SQL: I also have experience using SQL and find it to be a great solution when the database I’m building might require a more rigid structure to it.",
    ],
  },
];

let selectedSkill = "0";

const selectSkill = (elementSelected) => {
  aboutSkillContainer.innerHTML = "";
  const elements = [htmlBtn, jsBtn, reactBtn, otherBtn];
  elements.forEach((element) => {
    if (element.id == elementSelected.id) {
      element.classList = element.classList + " selected";
    } else {
      element.classList = "skillBtn";
    }
  });

  const selectedSkill = elementSelected.value;

  // skillsArray[selectedSkill];

  const skillTitle = document.createElement("h3");
  skillTitle.classList = "skillTitle";
  skillTitle.textContent = skillsArray[selectedSkill].name;
  aboutSkillContainer.appendChild(skillTitle);
  skillsArray[selectedSkill].body.forEach((pera) => {
    const element = document.createElement("p");
    element.classList = "skillBodyTxt";
    element.textContent = pera;
    aboutSkillContainer.appendChild(element);
  });
};

selectSkill(htmlBtn);
