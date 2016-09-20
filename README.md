# Overengineered Diplomacy
A few of us decided to play diplomacy over Slack.
... then we decided to build things to delay and publicize the friend-death.

## Directory Structure 
This repository holds the hopes and dreams of a generation by using the
best technologies that web 3.0 have to offer.

- `/scripts`: These scripts populate the json files in the `/data` directory.

- `/data`: This is where all the algorithmically compiled "dynamic" information that powers
the game interface are kept.

- `/css`, `/js`, and `/img`: These hold the supporting content behind the ultimate Diplomacy user experience.

## Compiling the Maps
Map data for a game should come from [diplom.org](http://www.diplom.org/dpjudge/new/?page=MapFiles) and 
we have scripts to convert these files to json.  The json files are
then used by Overengineered Diplomacy for things like move rendering
and transcript parsing.