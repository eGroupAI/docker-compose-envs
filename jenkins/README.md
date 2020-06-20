## Jenkins Quick Start

1. Create dynamodata volume.
```sh
$ docker volume create --name=jenkins_home
```

2. Use docker compose to start.
```sh
$ cd jenkins && docker-compose up
```

If you want to run process in background use following instead.
```sh
$ cd jenkins && docker-compose up -d
```

3. Get Jenkins default password.

```sh
$ docker logs containerId
```
4. docker rebuild

```sh
$ sudo docker-compose build
```
5. docker shutdown

```sh
$ docker-compose down
```
6. update jenkins version

```sh
$ sudo docker pull jenkins/jenkins:lts
```
 