# debian-nodejs
Dockerized Nodejs service, built on top of official [Debian](https://hub.docker.com/_/debian/) images with supervisor.

# Image tags
* thinegan/debian-nodejs:jessie (Debian GNU/Linux 8)

# Installed packages
* [11, bullseye, latest (bullseye/docker/Dockerfile)]

# Image specific:
* supervisor
* nodejs - v7.9.0
* npm - 4.5.0

# Config:
* Dependencies Package: package.json
* server app.js
* path /var/nodejs/
* supervisor run : /usr/bin/node /var/nodejs/app.js
* exposed port 8080
* default command: /usr/bin/supervisord

# Run example
```console
$docker run -d -P --name test_nodejs thinegan/debian-nodejs:jessie
$docker port test_nodejs 8080
0.0.0.0:32781

$curl http://localhost:32781
Hello, welcome to our first contained application!
```

# Issues
If you run into any problems with this image, please check (and potentially file new) issues on the [thinegan/debian-nodejs](https://github.com/thinegan/debian-nodejs) repo, which is the source for this image.

