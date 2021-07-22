## Marvel Characters


An application used to fetch data from official Marvel site. All the Marvel characters are displayed on the screen along with it's available comic,series, events and stories count. Clicking on the character will open up a new tab with more details on Marvel.com.

## Application url
[Marvel Characters](https://marvel-characters-tau.vercel.app/)
## Application screenshots

![img](https://i.imgur.com/hlWtqBN.png)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

`npm install`  

To Run Test Suite:  

`npm test -u`  

To Start Server:

`npm start`  

To Visit App:

`localhost:3000`  

## Reflection

  - This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  - The technology stack used in the project : `React`, `Jest`, `enzyme` and `scss`
  - All characters are fetched from /characters API made available by Marvel.com. Register [Marvel API](https://developer.marvel.com) to get API keys.
  - Private and public keys are required for this project. The Marvel APIs require hash generated from public key, private key and the current date, as the api call is made from the frontend.
  - Characters does not have images, are filtered out for better user experience. 
  - `.env` file expects below values:
    - REACT_APP_PUBLIC_KEY=<Public key from Marvel developer's portal>
    - REACT_APP_PRIVATE_KEY=<Public key from Marvel developer's portal>