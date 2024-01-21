- fix routes based on user routes
- test product controller endpoints
- test create user endpoint
- create order creation flow
    - POST { userId=string, productCartIds: string[] }
    - get productCart by productCartIds and ordered=false 
    - check every product count
    - create order row
    - make ordered property of every productCart to true


run DB
`docker compose up -d`