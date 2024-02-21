## Overview

Welcome to Datespots!

Datespots is your go-to platform for discovering the perfect date spots in your city. Whether you're planning a romantic evening or a casual outing, Datespots has you covered. Simply enter your city and explore a curated selection of date spots, complete with information on food options and ambiance.

But Datespots is more than just a directory. With our review feature, you can share your experiences and insights, helping others find the ideal spot for their next date. Plus, for venue owners and administrators, we offer an intuitive admin panel to manage listings and ensure a seamless experience for users.

Discover, review, and plan your next unforgettable date with Datespots.

## Local development environment setup

(This is a work in Progress!)

If you do not want to set up the project yourself, u can check the project on: https://www.datespots.online

## Prerequisites
Docker installed on your machine. Download and install Docker from the official source: (https://www.docker.com/products/docker-desktop/)

## Using Docker
1. Copy the .env.example file and rename it to .env, fill in your own information. 
    1. Required google places api key
    2. Required address api key from postcode.nl
    3. Required Mailgun key to send emails
    4. Required aws credentials to store and serve images


2. Use your Terminal to navigate to the project directory

3. Run `composer install` & `sail npm install` first to install the correct dependencies & packages.

4. Run the following command to set up the local development environment using Docker:

`sail up` or `sail up -d` 
(use the -d flag to run it in detached mode)

This command will start the containers defined in the docker-compose.yml file.

5. Open a new terminal tab in the same location and Run the following command:

`sail npm run dev`

This command will serve the front-end.

6. Access the project using a browser at http://localhost This page should display the front page of Datespots.
