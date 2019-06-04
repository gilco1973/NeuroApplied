@ECHO OFF
CLS

ECHO ng build + ng serve with proxy
ECHO git pull && call git pull && ECHO ng build && call ng build && ECHO ng serve --proxy-config proxy.config.json && call ng serve --proxy-config proxy.config.json
GOTO End

ECHO Done.