# BuildIoApiV1.DefaultApi

All URIs are relative to *https://app.build.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV1AppsIdBuildsPost**](DefaultApi.md#apiV1AppsIdBuildsPost) | **POST** /api/v1/apps/{id}/builds | create build
[**apiV1MeGet**](DefaultApi.md#apiV1MeGet) | **GET** /api/v1/me | identity
[**apiV1OidcLoginGet**](DefaultApi.md#apiV1OidcLoginGet) | **GET** /api/v1/oidc-login | kubernetes oidc-login
[**app**](DefaultApi.md#app) | **GET** /api/v1/apps/{id} | show app
[**apps**](DefaultApi.md#apps) | **GET** /api/v1/apps | list apps
[**configVars**](DefaultApi.md#configVars) | **GET** /api/v1/apps/{app_id_or_name}/config-vars | list all config-vars
[**createApp**](DefaultApi.md#createApp) | **POST** /api/v1/apps | create app
[**createNamespace**](DefaultApi.md#createNamespace) | **POST** /api/v1/namespaces | create a namespace
[**deleteConfigVar**](DefaultApi.md#deleteConfigVar) | **DELETE** /api/v1/apps/{app_id_or_name}/config-vars/{key} | delete config-var
[**deleteNamespace**](DefaultApi.md#deleteNamespace) | **DELETE** /api/v1/namespaces/{namespace_id_or_name} | delete a namespace
[**listDynos**](DefaultApi.md#listDynos) | **GET** /api/v1/apps/{id}/dynos/list | list dynos
[**namespace**](DefaultApi.md#namespace) | **GET** /api/v1/namespaces/{namespace_id_or_name} | show namespace
[**namespaces**](DefaultApi.md#namespaces) | **GET** /api/v1/namespaces | list all namespaces
[**restartAllDynos**](DefaultApi.md#restartAllDynos) | **DELETE** /api/v1/apps/{id}/dynos | restart all dynos
[**restartDynos**](DefaultApi.md#restartDynos) | **DELETE** /api/v1/apps/{id}/dynos/{dyno} | restart specific dynos
[**setConfigVars**](DefaultApi.md#setConfigVars) | **PATCH** /api/v1/apps/{app_id_or_name}/config-vars | set or update config-vars
[**team**](DefaultApi.md#team) | **GET** /api/v1/teams/{id} | show team
[**teams**](DefaultApi.md#teams) | **GET** /api/v1/teams | list all teams



## apiV1AppsIdBuildsPost

> apiV1AppsIdBuildsPost(id, opts)

create build

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let id = "id_example"; // String | app id or name
let opts = {
  'apiV1AppsIdBuildsPostRequest': new BuildIoApiV1.ApiV1AppsIdBuildsPostRequest() // ApiV1AppsIdBuildsPostRequest | 
};
apiInstance.apiV1AppsIdBuildsPost(id, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| app id or name | 
 **apiV1AppsIdBuildsPostRequest** | [**ApiV1AppsIdBuildsPostRequest**](ApiV1AppsIdBuildsPostRequest.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## apiV1MeGet

> ApiV1MeGet200Response apiV1MeGet()

identity

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
apiInstance.apiV1MeGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiV1MeGet200Response**](ApiV1MeGet200Response.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apiV1OidcLoginGet

> ApiV1OidcLoginGet200Response apiV1OidcLoginGet(opts)

kubernetes oidc-login

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure API key authorization: api_key
let api_key = defaultClient.authentications['api_key'];
api_key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//api_key.apiKeyPrefix = 'Token';
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let opts = {
  'region': "us-test-1" // String | 
};
apiInstance.apiV1OidcLoginGet(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **region** | **String**|  | [optional] 

### Return type

[**ApiV1OidcLoginGet200Response**](ApiV1OidcLoginGet200Response.md)

### Authorization

[api_key](../README.md#api_key), [bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## app

> App app(id)

show app

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let id = "id_example"; // String | app id or name
apiInstance.app(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| app id or name | 

### Return type

[**App**](App.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## apps

> [App] apps(opts)

list apps

List all apps

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let opts = {
  'teamId': "teamId_example" // String | team id or name
};
apiInstance.apps(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **teamId** | **String**| team id or name | [optional] 

### Return type

[**[App]**](App.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## configVars

> {String: String} configVars(appIdOrName)

list all config-vars

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let appIdOrName = "appIdOrName_example"; // String | app id or name
apiInstance.configVars(appIdOrName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appIdOrName** | **String**| app id or name | 

### Return type

**{String: String}**

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createApp

> App createApp(opts)

create app

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let opts = {
  'createAppRequest': new BuildIoApiV1.CreateAppRequest() // CreateAppRequest | 
};
apiInstance.createApp(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createAppRequest** | [**CreateAppRequest**](CreateAppRequest.md)|  | [optional] 

### Return type

[**App**](App.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createNamespace

> Namespace createNamespace(opts)

create a namespace

Create a namespace

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let opts = {
  'createNamespaceRequest': new BuildIoApiV1.CreateNamespaceRequest() // CreateNamespaceRequest | 
};
apiInstance.createNamespace(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createNamespaceRequest** | [**CreateNamespaceRequest**](CreateNamespaceRequest.md)|  | [optional] 

### Return type

[**Namespace**](Namespace.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteConfigVar

> deleteConfigVar(appIdOrName, key)

delete config-var

Delete a config-var

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let appIdOrName = "appIdOrName_example"; // String | app id or name
let key = "key_example"; // String | config var key
apiInstance.deleteConfigVar(appIdOrName, key).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appIdOrName** | **String**| app id or name | 
 **key** | **String**| config var key | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## deleteNamespace

> deleteNamespace(namespaceIdOrName)

delete a namespace

Delete a namespace

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let namespaceIdOrName = "namespaceIdOrName_example"; // String | Namespace name or ID
apiInstance.deleteNamespace(namespaceIdOrName).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespaceIdOrName** | **String**| Namespace name or ID | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## listDynos

> [Dyno] listDynos(id)

list dynos

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let id = "id_example"; // String | app id or name
apiInstance.listDynos(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| app id or name | 

### Return type

[**[Dyno]**](Dyno.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## namespace

> Namespace namespace(namespaceIdOrName)

show namespace

Show a namespace

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let namespaceIdOrName = "namespaceIdOrName_example"; // String | Namespace name or ID
apiInstance.namespace(namespaceIdOrName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespaceIdOrName** | **String**| Namespace name or ID | 

### Return type

[**Namespace**](Namespace.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## namespaces

> [Namespace] namespaces()

list all namespaces

List all namespaces

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
apiInstance.namespaces().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Namespace]**](Namespace.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restartAllDynos

> restartAllDynos(id)

restart all dynos

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let id = "id_example"; // String | app id or name
apiInstance.restartAllDynos(id).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| app id or name | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## restartDynos

> restartDynos(id, dyno)

restart specific dynos

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let id = "id_example"; // String | app id or name
let dyno = "dyno_example"; // String | dyno name
apiInstance.restartDynos(id, dyno).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| app id or name | 
 **dyno** | **String**| dyno name | 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## setConfigVars

> setConfigVars(appIdOrName, opts)

set or update config-vars

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let appIdOrName = "appIdOrName_example"; // String | app id or name
let opts = {
  'requestBody': {key: "null"} // {String: String} | 
};
apiInstance.setConfigVars(appIdOrName, opts).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appIdOrName** | **String**| app id or name | 
 **requestBody** | [**{String: String}**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## team

> Team team(id)

show team

Show a team

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
let id = "id_example"; // String | Team name or ID
apiInstance.team(id).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Team name or ID | 

### Return type

[**Team**](Team.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## teams

> [Team] teams()

list all teams

List all teams

### Example

```javascript
import BuildIoApiV1 from 'build_io_api_v1';
let defaultClient = BuildIoApiV1.ApiClient.instance;
// Configure Bearer access token for authorization: bearer
let bearer = defaultClient.authentications['bearer'];
bearer.accessToken = "YOUR ACCESS TOKEN"
// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new BuildIoApiV1.DefaultApi();
apiInstance.teams().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Team]**](Team.md)

### Authorization

[bearer](../README.md#bearer), [oauth2](../README.md#oauth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

