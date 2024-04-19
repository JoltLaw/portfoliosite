const contactMeForm = document.getElementById("contactMeForm");
const notifbar = document.getElementById("notifbar");
const notifTxt = document.getElementById("notifTxt");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBYpUqt1l04LIPOT9NYgMbO5PUZYrAwIME",
  authDomain: "portfoliosite-38167.firebaseapp.com",
  projectId: "portfoliosite-38167",
  storageBucket: "portfoliosite-38167.appspot.com",
  messagingSenderId: "748629915421",
  appId: "1:748629915421:web:f7ead63c2c4d6780e853f4",
  measurementId: "G-97YL80NMKK",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const hideNotifDisplay = () => {
  notifbar.style.display = "none";
};

const successNotif = (successTxt) => {
  notifTxt.textContent = successTxt;
  notifbar.style.display = "flex";
  notifbar.style.backgroundColor = "green";

  setTimeout(() => {
    hideNotifDisplay();
  }, 3000);
};

const failNotif = (reasonForFailure) => {
  notifTxt.textContent = reasonForFailure;
  notifbar.style.display = "flex";
  notifbar.style.backgroundColor = "red";

  setTimeout(() => {
    hideNotifDisplay();
  }, 3000);
};

const sendContactInfo = async () => {
  const email = document.getElementById("emailInput");
  const reason = document.getElementById("reasonInput");
  const extraInfo = document.getElementById("additionalDetailsInput");

  if (email.value == "" || reason.value == "") {
    email.value = "";
    reason.value = "";
    extraInfo.value = "";
    failNotif("Email & Reason need to be defined to submit form.");
    return;
  } else {
    try {
      const contactObj = {
        email: email.value,
        reason: reason.value,
        info: extraInfo.value,
      };

      const docRef = await addDoc(collection(db, "ContactForms"), contactObj);

      email.value = "";
      reason.value = "";
      extraInfo.value = "";
      successNotif("Form successfully submited!");
    } catch (err) {
      failNotif("Form failed to submit :(");
    }
  }
};

contactMeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  sendContactInfo();
});
