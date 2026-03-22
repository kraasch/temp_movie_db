
serve:
	cd ./movie-db/ && ng serve movie-db

build:
	cd ./movie-db/ && ng build movie-db

upload:
	make build
	ssh_deploy ssh_deploy.conf

topages:
	@#cd ./movie-db/ && ng build --output-path docs --base-href=https://kraasch.github.io/demo_movie_db/
	cd ./movie-db/ && ng deploy --base-href=https://kraasch.github.io/demo_movie_db/

