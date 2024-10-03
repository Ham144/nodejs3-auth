# User API SPEC

## Register User Api

EndPoint : `POST` /api/users

### Request Body :

```json
{
	"username": "yafizham",
	"password": "password",
	"name": "ham"
}
```

### Response body success :

```json
{
	"username": "yafizham",
	"name": "ham"
}
```

### Response Body Error :

```json
{
	"errors": "username already registered"
}
```

## Login User Api

Endpoint : `POST` /api/users/login

### Request Body :

```json
{
	"username": "yafizham",
	"password": "password"
}
```

### Response Body Success:

```json
{
	"token": "uuid"
}
```

### Response Body Errors:

```json
{
	"errors": "username or password is wrong"
}
```

## Update User Api

Endpoints : `PATCH` /api/users/current

Headers : -`Authorization: token`

### Request Body :

```json
{
    name: "new given name" //optional,
    password: "new given password" //optional
}
```

### Response Body Success:

```json
{
	"username": "yafizham",
	"name": "new given name"
}
```

### Response Body Errors :

```json
{
	"errors": "new given name is too long, max 100"
}
```

## Get User Api

Endpoints `GET` /api/users/current

Headers: `Authorization: token`

### Response Body Success:

```json
{
	"data": {
		"username": "yafizham",
		"name": "new given name"
	}
}
```

### Response Body Errors :

```json
{
	"errors": "You are not authorized to get the data"
}
```

## Logout User Api

Endpoints : `DELETE` /api/users/logout

Headers : `Authorization: token`

### Repsonse Body Success:

```json
{
	"data": "ok"
}
```

### Response Body Errrors:

```json
{
	"errors": "You are not authorized"
}
```
