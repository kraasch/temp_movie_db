
build:
	cd ./movie-db/ && ng build movie-db

serve:
	cd ./movie-db/ && ng serve movie-db

upload:
	make build
	ssh_deploy ssh_deploy.conf

