#!/usr/bin/env bash
function display_help {
  echo "Harbor"
  echo
  echo "Usage:" >&2
  echo "  harbor COMMAND [options] [arguments]"
  echo
  echo "Unknown commands are passed to the docker-compose binary."
  echo
  echo "docker-compose Commands:"
  echo "  harbor up        Start the application"
  echo "  harbor up -d     Start the application in the background"
  echo "  harbor stop      Stop the application"
  echo "  harbor down      Stop the application and remove related resources"
  echo "  harbor restart   Restart the application"
  echo "  harbor ps        Display the status of all containers"
  echo
  echo "Node Commands:"
  echo "  harbor node ...         Run a Node command"
  echo "  harbor node --version"
  echo
  echo "Npm Commands:"
  echo "  harbor npm ...        Run a Npm command"
  echo "  harbor npm test"
  echo
  echo "Customization:"
  echo "  harbor build --no-cache       Rebuild all of the harbor containers"

  exit 1
}

if [ $# -gt 0 ]; then
  if [ "$1" == "npm" ]; then
    shift 1
    docker-compose run --rm app npm "$@"
  elif [ "$1" == "node" ]; then
    shift 1
    docker-compose run --rm app node "$@"
  elif [ "$1" == "help" ] || [ "$1" == "--help" ] || [ "$1" == "-h" ]; then
    display_help
  else
    docker-compose -f ./docker-compose.yaml "$@"
  fi
else
  display_help
fi