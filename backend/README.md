# CZ2006 Project - Backend Documentation 
## Table of Contents 
1. Starting a development environment 
2. Good/Must-have Habits
3. Conventions 

## Start a development environment
Yes, Darryl. We know. You already told us how!
But, let me repeat myself.

Navigate into dir with package.json 
```
cd backend
```
Install dependencies (this is a habit I developed over time)
```
pip install -r requirements.txt
```
Run environment 
```
python manage.py check
python manage.py runserver
```

EZPZ LEMON SQZY :P

## Good/Must-have Habits 
These habits are good to have and some are must to have to mitigate the headache from debugging dependencies-related issues and things like that.

Everytime you want to install a new dependency, PLEASE SAVE IT TO `requirements.txt`.
```
pip install <PACKAGE_NAME>
pip freeze >> requirements.txt
```


### Conventions 
TBC 18 February 2022