# simple-docker
First Docker file.

# Docker commands learned
Learned commands such as
docker run to run an image using the -d flag to detach the image run and its log in the same command line session.
a flag of -p helps bind a docker port to our local system environment -- local_port:docker_port
docker pull  to pullan image from a Docker hub.
docker ps to show all the active containers, adding a -a flag shows all containers.
docker images shows all images found on our local system.
docker logs shows the current logs of a container running.
docker stop to stop a docker container from running.
docker start to rerun a stoped container

# Dockerfile Directives
FROM to state the base image on which the docker build will depend.
RUN to run a command in the Docker image
COPY to copy directories and files into the Docker environment
WORKDIR to state the working directory from which all commands it precedes will run
CMD Last command in a Dockerfile  used to run the application.

# Built a docker image using
 docker build -f src\Dockerfile -t first-app:1.0 .
