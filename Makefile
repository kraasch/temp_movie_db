
serve:
	cd ./movie-db/ && ng serve movie-db

build:
	cd ./movie-db/ && ng build movie-db

upload:
	make build
	ssh_deploy ssh_deploy.conf

topages:
	cd ./movie-db/ && ng build --output-path docs --base-href=https://kraasch.github.io/temp_movie_db/

