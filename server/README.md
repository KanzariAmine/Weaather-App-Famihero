## Quick Start:

#### Step 1: Install Node js, PostgreSQL

```sh
# Install Nodejs 
https://github.com/nvm-sh/nvm

#Install PostgreSQL
https://www.postgresqltutorial.com/install-postgresql-linux/
```

#### Step 2: Create data base 
```bash
#Copy this command in terminal to open postgreSQL CLI
psql -U postgres -h localhost 

# Add a password to postgres (super user by default)
ALTER USER postgres PASSWORD <'your password'>;

#Create the Data base and the Array 
You can find the command in database.sql file

```

#### Step 3: Run server
```bash
# Serve on localhost:3000
npm start or yarn start
```

#### Step 4: Login With
```bash
Email: test@test.com
Password: test
```
