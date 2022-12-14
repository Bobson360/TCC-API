# TCC API

## Routes ##


| Method                                        | Route     | Description                 | Context          |
| -                                             | -         | -                           | -                | 
| <span style="color: green;">[ GET ]</span>    | '/about'  | default route not logged in |Not logged in area| 
| <span style="color: green;">[ GET ]</span>    | '/'       | home page                   |logged in area    |
| <span style="color: yellow;">[ POST ]</span>  | '/login'  | login route                 |Not logged in area| 

## Content body ##

/login

request
```json
{
    "email": "String",
    "password": "String"
}
```
response
```json
{
    "success": "Boolean",
    "token": "String"
}
```

## Auth methods

## DB connection

