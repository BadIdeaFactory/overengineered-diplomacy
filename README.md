# Overengineered Diplomacy
A few of us decided to play diplomacy over Slack... then we decided to build things to delay and publicize the friend-death.

Diplomacy is a game that breaks people.  It involves betreyal and backstabbing over a long period of time.  The premise is simple: the players are all world powers and they control armies.  Each power wants to control as much territory as possible.  All moves are deterministic, there is no randomness to the game.  However, people can lie about what they plan to do.

Playing diplomacy is a bad idea in itself, but writing code to publicly render an otherwise private game is a genuine waste of raw creative energy.


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
