
# Pronohub

Coter front du site Pronohub. Pronohub est un site de pronostic avec une charte graphique inspiré d'un certain site. 
Mention d'honneur a nos 4 développeur : Ismael, Noah, Alexis, Denis 

## Ordre d'installation des différentes parties du projet

- Back Office
- API
- Front

## Ordre de Run

- API:
    - ```bash
      php bin/console doctrine:schema:update --force
      ```
    - ```bash
      symfony serve
      ```
- Back Office:
    - ```bash
      php bin/console doctrine:schema:update --force
      ```
    - ```bash
      symfony serve
      ```
- Front:
    - ```bash
      npm install
      ```
    - ```bash
      npm start
      ```

## Environment Variables

Pour exécuter ce projet, vous devrez ajouter les variables d'environnement suivantes à votre fichier .env

`REACT_APP_API_URL = http://localhost:8000/api`

Valeur à changer selon l'environnement et le chemin utilisé.


## Installation

Start by cloning the project
```bash
  git clone https://github.com/Denis40-prog/PronoHub
  cd PronoHub
```

This project lunch by npm.
We using the node version 20.8.1.
To use this version run 
```bash
  nvm install
```

If you use a too much different version you can use nvm to switch quickly
```bash
  nvm use
```

Install all dependancies
```bash
  npm install
```

Launch the project
```bash
  npm run start
```
