# Contact Api Spec

## Create contact Api

Endpoints: `POST` /api/contacts
Headers: `Authorization: token`

### Request Body :

```json
{
	"firstName": "yafiz",
	"lastName": "batubara",
	"email": "batubara@gmail.com",
	"phone": "08826279"
}
```

### Response Body Success :

```json
{
	"data": {
		"id": "autoIncrement",
		"firstName": "yafiz",
		"lastName": "batubara",
		"email": "batubara@gmail.com",
		"phone": "08826279"
	}
}
```

### Response Body Erros:

```json
{
	"errors": "Email is not valid"
}
```

## Update Contact Api

Endpoints: `PUT` /api/contact/:contactId

Headers: `Authorization: token`

### Request Body :

```json
{
	"firstName": "yafiz",
	"lastName": "batubara",
	"email": "batubara@gmail.com",
	"phone": "08826279"
}
```

### Response Body Success :

```json
{
	"data": {
		"id": 1,
		"firstName": "yafiz",
		"lastName": "batubara",
		"email": "batubara@gmail.com",
		"phone": "08826279"
	}
}
```

### Response Body Errors:

```json
{
	"errors": "Email is not valid format"
}
```

## Get Contact Api

Endpoints : `GET` /api/contacts/:contactId

headers: `Authorization: token`

### Response Body Success

```json
{
	"data": {
		"id": 1,
		"firstName": "yafiz",
		"lastName": "batubara",
		"email": "batubara@gmail.com",
		"phone": "08826279"
	}
}
```

### Response Body Erros :

```json
{
	"errors": "Can't find what you are looking for"
}
```

## Search Contact Api

Endpoints : `GET` /api/contacts/search

Headers : `Authorization: token`

QueryParams:

> name : firstaname or lastname optional,

> email: search by email using like

> phone: search by pone using like

> page: number or page to show, default(1)

> size : size per page or 'Take' in prisma

````

### Response Body Success :

```json
{
	"data":[
    {
		"id": 1,
		"firstName": "yafiz",
		"lastName": "batubara",
		"email": "batubara@gmail.com",
		"phone": "08826279"
	},
    {
		"id": 2,
		"firstName": "mastermind",
		"lastName": "masterplan",
		"email": "plan@gmail.com",
		"phone": "088626"
	},
    ],
    paging: {
        page: 1,
        totalPage: 3,
        totalItem : 30
    }
}
````

### Response Body Errors:

```json
{
	"errros": "can't find such user"
}
```

## Remove Contact Api

Endpoints: `DELETE` /api/contacts/:contactId

Headers: `Authorization: token`

### Response Body Success :

```json
{
	"data": "ok"
}
```

### Response Body Errors :

```json
{
	"errors": "failed to remove the contact"
}
```
