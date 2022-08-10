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

### Use
```shell
# run tests using built-in Electron browser
docker-compose run e2e-electron

# run tests using Chrome browser pre-installed in cypress/included image
docker-compose run e2e-chrome

# run tests using Firefox browser (also pre-installed)
docker-compose run e2e-firefox
```
