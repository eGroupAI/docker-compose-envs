# docker-compose-envs

This repository stores lots of docker compose environments for our developer.

## DynamoDB Quick Start

1. Create dynamodata volume.
```sh
$ docker volume create --name dynamodata
```

2. Use docker compose to start.
```sh
$ cd dynamoDB && docker-compose up
```

If you want to run process in background use following instead.
```sh
$ cd dynamoDB && docker-compose up -d
```
