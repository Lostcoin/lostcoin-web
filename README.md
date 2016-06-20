# lostcoin-web
Web app for Lostcoin.

# Installation
1. `npm install -g bower`
2. `npm install -g gulp`
3. Clone the project and install dependencies by running `bower install` and `npm install` in the project directory
4. `gulp` to build the project
5. `cd dist` and `python -m SimpleHTTPServer` to host the project on `http://localhost:8000` on a Mac.

# Task
* `x done` The app should have entry categories
* `x done` You should have the ability to add custom categories 
* `x done` It should be possible to add/remove them and entries should go uncategorized if category is removed
* `x not clear` You should be able to group entries into families, implement it in the easiest way possible e.g. let's say users with the same last name are the family
* `x done` Some graphs
* `x done partially` weekly based reports – per user or per family - simple cards will do
* `x done` please use Angular for the front, Node for the back and Postgres as db
* `x done` we love comments and neat code. 
* `x done` we’re expecting you to spend between 4 – 10 hours on this.

# Explicit Exclusions
* no currency
* no timezones
* no real logins
* no editing/deleting transactions
* no responsive layout
* no date validations