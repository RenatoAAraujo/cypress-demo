# Cypress Demo
> This project integrates cypress and sorry-cypress (dashboard)

### Requirements
* [Docker](https://docs.docker.com/engine/install/debian/)
  
Create docker group, **you'll need to reboot after this**.
```shell
sudo groupadd docker
sudo usermod -aG docker $USER
```
* [Docker Compose](https://docs.docker.com/compose/install/)
* [git](https://git-scm.com/)
* [NPM](https://www.npmjs.com/)

### Run Tests
#### Local - dockercompose (no sorry-cypress integration)
```shell
# run tests using built-in Electron browser
docker-compose run e2e-electron

# run tests using Chrome browser pre-installed in cypress/included image
docker-compose run e2e-chrome

# run tests using Firefox browser (also pre-installed)
docker-compose run e2e-firefox
```
To run a specif test file add a command to [docker-compose.yml](docker-compose.yml), like so:
```yml
version: '3'
services:
    e2e-chrome:
        image: "cypress/included:8.4.0"
        command: "run --spec cypress/e2e/integration/examples/actions.cy.js"
        volumes:
            - ./cypress:/cypress
            - ./cypress.json:/cypress.json
```

#### Command line (with sorry-cypress integration)
To integrate with sorry-cypress, fist run:
```shell
docker-compose -f docker-compose.minio.yml
```
then:
```shell
npm isntall cy2 cypress
export CYPRESS_API_URL="http://localhost:1234/"
npx cy2 run --record --key XXX --parallel --ci-build-id `date +%s`
```
>To run test on parallel make sure to use the same "--ci-build-id"

>Access the dasboard on http://localhost:8080

