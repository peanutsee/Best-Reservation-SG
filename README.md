# CZ2006 Project 
## Table of Contents
1. Setup Guide 
2. Running Development Environment
3. Developing Guide
4. GIT Practises

## Setup Guide 
You will only need to set up <strong>once</strong> unless you screwed up somewhere. 

There are a few dependencies that this project runs on. Please check to make sure you have them installed (and configured the PATH in your user/global system).

1. NodeJS 16+
2. Python 3.9+
3. Any IDE of your choice (I use Python - PyCharm, JavaScript - VSC)
4. Docker Desktop (optional)
5. GitHub Desktop (optional)
6. Register for CircleCI account (optional)

Once you check that you have the dependencies above, you are ready to clone the project repository to your local computer. Follow these steps in order, for Mac users, Google the correct commands:

Navigate to Desktop in your Commmand Prompt
```
git clone https://github.com/peanutsee/CZ2006-Project.git
```

Navigate into the project folder 
```
cd cz2006-project
```

Create Python environment 
```
pip install virtualenv
virtualenv pyenv
```

Start Python env
```
pyenv\Scripts\activate
```

Download dependencies in `backend` folder
```
cd backend
pip install -r requirements.txt
```

Download dependencies in `frontend` folder
```
cd ../frontend #if you are in backend folder

cd /frontend #if you are in project root folder

npm install 
```

You are done setting up the development environment. 

## Running Development Environment 
You should do this before you start developing the codes. 

### Running Without Docker
Start Python env (MUST START)
```
pyenv\Scripts\activate
```

Start `backend` services
```
cd /backend #go to backend dir
python manage.py runserver
```
`backend` services runs on port 8000 by default.

Start `frontend` services
```
cd /frontend #go to frontend dir
npm start 
```
`frontend` services runs on port 3000 by default.

### Running on Docker
Navigate to dir with `docker-compose.yaml`
Build images
```
docker-compose build
```
Run containers 
```
docker-compose up
```

## Developing Guide
This is a general development guide. Please refer to the respective frontend and backend development guides for a more indepth guide (ETC 18 February 2022).

### Frontend Stack
- React.JS
- Redux
- Bootstrap 5 CSS
- Jest 
- JavaScript ES6

### Backend Stack
- Django 
- Python 
- Django Rest Framework 
- Simple JWT Authentication 
- Postman 

### DevOps
- CircleCI 
- Docker 
- Git VCS
- Kanban Boards

If you run into any trouble during development, there are a few options to try:
1. No idea if what the issue is, Google until you find a solution. 
2. Have an idea of what the issue is, Google a specifc solution.
3. No idea where to start searching, Google until you find a solution.

While finding solutions on Google, it is good to <strong>understand</strong> what the issue is and what the solution is going to fix. This helps with your learning as well as extensions in the future. This project should not and will not be built on top a Hackathon-styled development process. 

Now, if you are still lost, please <strong>don't</strong> start spamming your friends for answers. This will reduce your learning opportunities. 

1. Start by breaking the problem down into subproblems.
2. Solve the subproblems.
3. Merge the solutions to the subproblems to form the solution.
4. Optimize and refactor the code.

Sounds familiar? Yes. A bit like building algorithms ;) Enjoy the learning process. 

Still don't know where to start? Ask your friends for hints but don't expect them to do for you (unless the deadline is in an hour!)

1. For backend related problem, look for Kai Yun.
2. For frontend and devops related problem, look for Darryl.

We may not know the solutions to your problem (we are not gods), but we can give you some general directions :O

## GIT Practices
There are many versions of git practices, but I am going to introduce the one I commonly use for my projects (usually between 5-6 people). Anyway, try to think of github or gitas a tree... Trees have branches... Branches have leaves... You see why soon :)

### Defining Branches 
`main` branch will be defined as hosting branch (no dev changes should be committed to this branch).

### Pushing a new change
This should happen when you want to update a new change in the program 
```
git branch # CHECK YOU ARE IN THE CORRECT BRANCH!!
git status
git add .
git commit -m "PLEASE WRITE A PROPER COMMIT MESSAGE"
git push origin main
```
Please push to main for now, until I think of a better way to do VCS (Yes, there is an option to use different branch and subversioning).

### Pulling a new change 
I highly recommend that you do this before you start developing! This can reduce the chances of a merge conflict (It's tedious to solve, but I will address this below).
```
git fetch 
```
This checks if there are any changes.
```
git pull origin main
```
This checks and pulls any changes to your local repository. 
So, you see, to save yourself some time, just do a git pull  :)

### Conflicts while pushing a new change
This is a very common issue, but hard to solve. 
Let's suppose you want to push your things onto the remote repository but there is a conflict. YOU PULL THE CHANGES. I REPEAT. YOU PULL THE CHANGES. Then you add your own changes. Too bad if you have to restart :) So DO A GIT PULL! 

This is because, only you know what changes you've made. The other parties don't! 

PS: If you have a better solution to deconflict a conflict, please suggest. I don't know of a better solution to do this yet.

### Extra Juice 
I am gonna include some more commonly used git commands 

Check for local git repo
```
git remote -v
```

Checkout to another branch (to change branch)
```
git checkout <branch_name>
```
