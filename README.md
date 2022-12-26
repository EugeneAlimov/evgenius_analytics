# evgenius_analytics

  An application for collecting, storing, analyzing data on process equipment based on Siemens controllers.
Technology stack:
  - web server: Django + Django Rest Framework + djoser + simple-jwt + Web Sockets;
  - OPS server: Node-red + extension nodes for queries to the PLC and saving the received data to the database;
  - front-end: React + Redux, React-router, MUI, Chart JS, Web Sockets.
  
  Main features at the moment:
  - export from an excel file of a list of PLC tags to a web server database;
  - building this list in the analytics window, choosing from the list of tags necessary for analysis, editing the list of selected tags and building graphs for analysis;
  - a separate tab with a ready-made set of graphs that display the main parameters of the technological process in real time (in the process of adding new functions);
  - user accounts (users can create their own sets of real-time charts and history analysis)
