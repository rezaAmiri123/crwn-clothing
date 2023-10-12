node-10:
	nvm use v10.16.0

start:
	npm start

docker_compose:
	@echo Starting  docker compose
	docker-compose -f docker-compose.yaml up

