# DTS Developer Challenge

This is a task manager app I built for the HMCTS developer challenge.

I used React for the frontend, and made 3 separate backends using Node.js (Express), Django, and Spring Boot — just to show flexibility with different stacks.

Each backend lets you create, view, update, and delete tasks. A task has a title, optional description, status, and due date.

The React frontend connects to whichever backend you want — just change the API URL in `src/api.js`.

### To run:

- For Node: `cd node-backend && npm install && npm start`
- For Django: `cd django-backend`, set up a virtual env, install requirements, and run `python manage.py runserver`
- For Spring Boot: `cd java-backend && mvn spring-boot:run`
- For React: `cd react-frontend && npm install && npm start`

That’s it. You can test the API and frontend locally.

