# Docker Setup for Gamio Maintenance

This project has been configured to run with Docker for both development and production environments.

## Prerequisites

- Docker
- Docker Compose

## Development Environment

To start the development environment with hot-reloading:

```bash
docker-compose up dev
```

This will start the Next.js application in development mode with Turbopack on http://localhost:3000.

## Production Environment

To build and start the production environment:

```bash
docker-compose up prod --build
```

This will build the application and start it in production mode on http://localhost:3000.

## Building the Docker Image Separately

If you want to build the Docker image separately:

```bash
docker build -t gamio-maintenance .
```

And then run it:

```bash
docker run -p 3000:3000 gamio-maintenance
```

## Configuration

- The development service mounts your local directory into the container, enabling hot-reloading
- The production service uses a multi-stage build for an optimized container 