## create docker image buster
docker build -t  ms01-buster  .

## run our docker buster image
docker run -d --name ms01 -p 8080:3000 ms01-buster

## run docker container using a file to load env values
docker run -d --name ms01-b -p 8080:3000  --env-file development/env_file  ms01-buster


## create docker image alpine
docker build -t ms01-alpine .

## define a version to upload
docker build -t ms01-alpine .
## run our docker alpine image
docker run -d --name ms01.1 -p 8081:3000 ms01-alpine

## run our dociker alpine image with load env values
docker run -d --name ms01-a -p 8081:3000 --env-file development/env_file ms01-alpine

## define a version to upload
docker build -t ms01-alpine:v1 .

## check info out registry an see the value of Container Regtistry, then set in a variable
ibmcloud cr info

## set variable MY_REGISTRY_CONTAINER
export MY_REGISRY=<container_registry_value>

## check the value
echo $MY_REGISTRY

## check our namespace in IBM CLOUD
ibmcloud cr namespaces

## that value set in a variable
export MY_NAMESPACE=<namepace_value>

## check the value
echo $MY_NAMESPACE

## tag our docker alpine image
docker tag ms01-alpine:v1 $MY_REGISTRY/$MY_NAMESPACE/ms01-alpine:1

## push the taged image to the registry
docker push $MY_REGISTRY/$MY_NAMESPACE/ms01-alpine:1

## verify the image is in IBM Cloud
ibmcloud cr images