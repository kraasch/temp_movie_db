
serve:
	cd ./movie-db/ && ng serve movie-db

build:
	cd ./movie-db/ && ng build movie-db

upload:
	make build
	ssh_deploy ssh_deploy.conf

