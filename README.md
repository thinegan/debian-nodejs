# debian-nodejs
Dockerized Nodejs service, built on top of official [Debian](https://hub.docker.com/_/debian/) images with supervisor.

# Image tags
* thinegan/debian-nodejs:jessie (Debian GNU/Linux 8)

# Installed packages
* [8.7, 8, jessie, latest (jessie/Dockerfile)](https://github.com/tianon/docker-brew-debian/blob/e8131d071a42b8e88cabbb0aa33023c7b66b7b93/jessie/Dockerfile)

# Image specific:
* supervisor
* nodejs

# Config:
* Dependencies Package: package.json
* server app.js
* path /var/nodejs/
* supervisor run : /usr/bin/node /var/nodejs/app.js
* exposed port 8080
* default command: /usr/bin/supervisord
