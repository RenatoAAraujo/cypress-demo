# Cypress Demo

### Requirements
* [Docker](https://docs.docker.com/engine/install/debian/)
  
Create docker group, **you'll need to reboot after this**.
```shell
sudo groupadd docker
sudo usermod -aG docker $USER
```
* [Docker Compose](https://docs.docker.com/compose/install/)
* [git](https://git-scm.com/)
* [nodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)

### Run Cypress
build containers
```shell
npm run build
```
run containers and tests
```shell
npm run up
```

<!-- ### Run Tests
```shell
docker-compose up
``` -->
