up:
	docker compose up -d

bash:
	docker compose exec ui sh

restart:
	docker compose restart

stop:
	docker compose stop

build:
	docker compose up -d --build

down:
	docker compose down

logs:
	docker compose logs -f ui
