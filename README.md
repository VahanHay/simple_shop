- fix routes based on user routes +
- test product controller endpoints +
- test create user endpoint+
- create order creation flow
    - POST { userId=string, productCartIds: string[] }
    - get productCart by productCartIds and ordered=false 
    - check every product count
    - create order row
    - make ordered property of every productCart to true
- setup eslint
- add npm scripts to apply eslint fix
- remove all code comments
- add swagger docs
- add logger, revisit all logs and replace with appropriate log lib method (pay attention to type of logs - error | debug | info | warn) - https://github.com/winstonjs/winston

run DB
`docker compose up -d`