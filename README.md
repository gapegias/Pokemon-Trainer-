# **Pokémon Trainer App**
## **Idea**
Build a Pokémon Trainer web app using the Angular Framework. 
The application allows a user to collect Pokémon ( Generation I) received from the PokeAPI.
User must enter username before being able to collect any Pokémon and be able to view the Pokémon that have been collected

See website here: https://pokemon-trainer-dedv.vercel.app

## **Set up the development environment**
Make sure you have the following tools available:
  - NPM/Node.js (LTS – Long Term Support version)
  - Angular CLI
  - Visual Studio Code Text Editor/ IntelliJ
  - Browser Developer Tools for testing and debugging
  - Trainer API: https://github.com/dewald-els/noroff-assignment-api

## **Requirements for the pokemon trainer app**

## **1. Login Page**

<img src="/pictures/loginPage.png">

The first thing a user should see is the "Login page" where:
 - the user must be able to enter their "Trainer name" before being able to collect any Pokémon
 - there should be a button that saves the Trainer name to the Trainer API and in session storage
 - app must then be redirected to the main page, the Pokémon Catalogue page
 - users may NOT be able to see the Pokémon Catalogue without have a Trainer name stored in session storage,  achieving this functionality by using a Guard service
 - if username exists in session storage, automatically redirect from the landing page to the Pokémon Catalogue page

## **2. Trainer Page**

<img src="/pictures/pokemonCataloguePage.png">

A user: 
 - may only view this page if there is a Trainer name that exists in session storage
 - redirect back to the Landing page if they do not have a Trainer name stored in session storage
The Trainer page should:
 - list the Pokémon that the trainer has collected
  - for each collected Pokémon, display the Pokémon name, image and other information
  - user/trainer must also be able to remove/release a Pokémon from their collection from the Trainer page
  
  catch <img src="/pictures/catchButtonAfterCapture.png"> not catch <img src="/pictures/catchButtonBeforeCapture.png">

## **3. Pokémon Catalogue Page**

<img src="/pictures/trainerPage.png">

The Catalogue page: 
 - may NOT be viewed if there is no Trainer name stored in session storage 
 - list the Pokémon name, image and other information
 - get all the Pokémon and store it in session storage, so when the page is reloaded, read from session storage rather than the API 
 
 ## **Navigation bar**
 
 <img src="/pictures/navbar.png">
 
 Create a navigation bar with 3 buttons:
  - pokemons, user navigate to Pokemon Catalogue Page
  - trainer, user navigate to Trainer Page
  - logout, user navigate to Login Page, by delete user from session storage 
 
