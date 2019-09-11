# Robot Video Creator - POC

Robot that creates YouTube videos from Wikipedia content (proof of concept)

## Credentials

### Algorithmia

File: `algorithmia.json`
```
{
    "apiKey": "YOUR_API_KEY_HERE"
}
```

### Watson Natural Language

File: `watson-nlu.json`

```
{
    "apikey": "YOUR_API_KEY_HERE",
    "iam_apikey_description": "",
    "iam_apikey_name": "",
    "iam_role_crn": "",
    "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/1d8581005ff64cf3bdba256dd17ec683::serviceid:ServiceId-73bf3ecb-e793-44d3-8d7a-cd5fc29c384f",
    "url": "https://gateway.watsonplatform.net/natural-language-understanding/api"
  }
```

### Google Search API

File: `google-search.json`

```
{
    "apiKey": "YOUR_API_KEY_HERE",
    "searchEngineId": "YOUR_SEARCH_ID_KEY_HERE"
}
```