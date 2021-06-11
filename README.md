<p align="center">
  <img width="300px" src="https://github.com/jxnprince/homebase/blob/main/react-app/public/images/logo.png" alt="title and logo">
</p>

Homebase is a workflow website for households, allowing for families to easily assign tasks and projects to each other.	Our website can help encourage you to get those household tasks complete by organizing how, when, and who should get them done. The user-friendly design is perfect for adults and children!

![User Dashboard](https://github.com/jxnprince/homebase/blob/main/react-app/public/images/user%20dashboard.png)

## Link to live site
https://home--base.herokuapp.com/

## Site Wiki
https://github.com/jxnprince/homebase/wiki

## Technologies
* Python
* Flask
* SQLAlchemy
* React
* Redux

## Key Features

### Teams

Authenticated users can create teams. Each team can be assigned a name, team members, and projects. This is a great feature that can help build community by allowing people to work towards a goal together. Parents can especially appreciate this feature as it allows them to easily divide tasks among their children.

![Team Page](https://github.com/jxnprince/homebase/blob/main/react-app/public/images/homebase.png)

## Challenge

One of the biggest challenges I encountered was when there was an accidental uploading one of the .venv files to GitHub. Unfortunately, it overwrote my own .venv file, and I was no longer allowed to enter my own shell environment. More trouble came when I realized that I could not install the dependencies on the recloned project. I was able to fix the issue by searching through an old commit. I realized that our Pipfile had also been changed as well, so that instead of having all the version numbers for the dependencies, there was just an asterisk. Once I reverted it back to the original Pipfile, I was able to install everything and get it working again.

```js
click = "*"
gunicorn = "*"
itsdangerous = "*"
python-dotenv = "*"
six = "*"
Flask = "*"
Flask-Cors = "*"
Flask-SQLAlchemy = "*"
Flask-WTF = "*"
```

```js
click = "==7.1.2"
gunicorn = "==20.0.4"
itsdangerous = "==1.1.0"
python-dotenv = "==0.14.0"
six = "==1.15.0"
Flask = "==1.1.2"
Flask-Cors = "==3.0.8"
Flask-SQLAlchemy = "==2.4.4"
Flask-WTF = "==0.14.3"
```

## Instructions
After cloning the repository to your local machine, follow the instructions below to start the app:

>1. In the root folder, run the following `pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt`
>2. Make a .env file based on the .env.example (add values where required)
>3. Create your PostgreSQL user, password, and database. The information must match your .env file.
>4. Enter your shell enviroment with `pipenv shell`
>5. `flask db upgrade`
>6. `flask seed all`
>7. `flask run`
>8. In the react-app folder, run `npm install` to install all frontend dependencies.
>9. In the frontend folder, `npm start` to start the react app.
