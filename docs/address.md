# Address Api Spec

## Create Addres Api

Endpoints : `POST` /api/contacts/:contactId/addresses

headers :

- Authorization: token

### Request Body:

```json
{
	"street": "jalan binjai",
	"city": "medan",
	"province": "sumatera utara",
	"country": "indonesia",
	"postalCode": "23232"
}
```

### Response Body Success :

```json
{
	"data": {
		"id": 1,
		"street": "jalan binjai",
		"city": "medan",
		"province": "sumatera utara",
		"country": "indonesia",
		"postalCode": "23232"
	}
}
```

```json
{
	"errors": "city is required"
}
```

## Update Address Api

Endpoints : `PUT` /api/contacts/:contactId/addresses/:addressesId

Headers :

- Authorization: token

### Requets Body :

```json
{
	"street": "jalan binjai",
	"city": "medan",
	"province": "sumatera utara",
	"country": "indonesia",
	"postalCode": "23232"
}
```

### Response Body Success :

```json
{
	"data": {
		"id": 1,
		"street": "jalan binjai",
		"city": "medan",
		"province": "sumatera utara",
		"country": "indonesia",
		"postalCode": "23232"
	}
}
```

### Response Body Errors :

```json
{
	"errors": ""
}
```

## Get Address Api

Endpoints : `GET` /api/contacts/:contactId/adresses/:adressesId

### Response Body Success :

```json
{
	"data": {
		"id": 1,
		"street": "jalan binjai",
		"city": "medan",
		"province": "sumatera utara",
		"country": "indonesia",
		"postalCode": "23232"
	}
}
```

### Response Body Errors :

```json
{
	"errors": "out of the range"
}
```

## List Address Api

Endpoints : `GET` /api/contacts/:contactId/addresses

Headers : `Authorizaton: token`

Headers:

- Authorization: token

### Response Body Success

```json
{
	"data": [
		{
			"id": 1,
			"street": "jalan binjai",
			"city": "medan",
			"province": "sumatera utara",
			"country": "indonesia",
			"postalCode": "23232"
		},
		{
			"id": 1,
			"street": "jalan durian",
			"city": "kuala lumpur",
			"province": "johor",
			"country": "malaysia",
			"postalCode": "4332"
		}
	]
}
```

### Response Body Errors

```json
{
	"errors": "Adresses is empty"
}
```

## Remove Address Api

Endpoints : `DELETE` /api/contacts/:contactId/addresses/:addressesId

Headers :

- Authorization : token

### Response Body Success :

```json
{
	"data": "ok"
}
```

### Response Body Errors :

```json
{
	"errors": "Address id is not found"
}
```
