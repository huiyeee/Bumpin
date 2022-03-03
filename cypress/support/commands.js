// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";
import { attachCustomCommands } from "cypress-firebase";

const fbConfig = {
  apiKey: "AIzaSyDuJQZwWP0kPYDRKd1Ctmu9K7bIe9QkCZU",
  authDomain: "bumpin-7d62f.firebaseapp.com",
  databaseURL: "https://bumpin-7d62f-default-rtdb.firebaseio.com",
  projectId: "bumpin-7d62f",
  storageBucket: "bumpin-7d62f.appspot.com",
  messagingSenderId: "197232644599",
  appId: "1:197232644599:web:769da6c0673efc09e11ef2",
};

firebase.initializeApp(fbConfig);

attachCustomCommands({ Cypress, cy, firebase });