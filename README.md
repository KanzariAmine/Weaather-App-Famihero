# Weaather-App-Famihero

## Quick Start:

#### Step 1: Install Node js, PostgreSQL

```sh
# Install Nodejs 
https://github.com/nvm-sh/nvm

# Install PostgreSQL
https://www.postgresqltutorial.com/install-postgresql-linux/
```

#### Step 2: Create data base 
```bash
# Copy this command in terminal to open postgreSQL CLI
psql -U postgres -h localhost 

# Add a password to postgres (super user by default)
ALTER USER postgres PASSWORD <'your password'>;

# Create the Data base and the Array 
"You can find the command in database.sql file"

```

#### Step 4: Clone the repo
```bash
$ https://github.com/KanzariAmine/Weaather-App-Famihero.git
```


#### Step 5: Put your credentials in the .env file
```sh
DB_USER = ADD_DB_USER
DB_PASSWORD = ADD_PASSWORD_FOR_THIS_USER
DB_HOST= ADD_THE_DB_URL
DB_PORT= ADD_THE_DB_PORT
DB_NAME= ADD_DB_NAME

WEATHER_API_KEY= ADD_YOUR_API_KEY_FOR_WEATHER_API

```
#### Step 6:  Install the dependencies for project
```bash
# Go to server folder to install dependencies
$ cd server
$ npm install 
# Go to client folder to install dependencies
$ cd client
$ npm install 
```

#### Step 7: Run a project
```bash
# Open Terminal go to server folder 
$ npm run dev
```
### Note
```bash
# For more information a bout PostgreSQL
https://www.postgresqltutorial.com/
```
