# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG PYTHON_VERSION=3.9.0
FROM python:${PYTHON_VERSION}-slim as base


WORKDIR /app

# Copy the source code into the container.
COPY . .

RUN pip install -r requirements.txt

# Expose the port that the application listens on.
EXPOSE 5000

# Run the application.
CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
