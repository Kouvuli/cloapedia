# 1. Folder Struture:

- Folder src: Contains source code of server
- pom.xml: packages management

# 2. API Documents:

-   Guardian API (v4): [Watch here](https://open-platform.theguardian.com/documentation/)
-   Cloapedia API (v1): [Watch here](https://documenter.getpostman.com/view/17594467/VUjTiMnj)

<br>

# 3. Response format:
## 3.1 Success response format:

-   **With no pagination**
<table>
  <tr>
    <th>Cloapedia API</th>
    <th>Guardian API</th>
  </tr>
  <tr>
    <td>{<pre>"status":"ok",<br>"message":"",<br>"data":{<br> ... <br>}</pre>}</td>
    <td>{<pre>"response": {
  "status": "ok",
  "userTier": "developer",
  "total": ,
  "content": {
    ...
  },
  "relatedContent":[
    ...
  ]
}</pre>}</td>
  </tr>
</table>

<br>

-   **With pagination**

<table>
  <tr>
    <th>Cloapedia API</th>
    <th>Guardian API</th>
  </tr>
  <tr>
    <td>{<pre>"pagination": {
    "last_visible_page": ,
    "has_next_page": ,
    "current_page":,
    "limit":
  },
  "status": "ok",
  "message": "",
  "data": [
    ...
  ]</pre>}</td>
    <td>{<pre>"response": {
  "status": "",
  "userTier": "",
  "total": ,
  "startIndex": ,
  "pageSize": ,
  "currentPage": ,
  "pages": ,
  "edition": {
      ...
  },
  "section": {
      ...
  },
  "results": [
      ...
  ]
}</pre>}</td>
  </tr>
</table>


-   **JWT response**
<table>
  <tr>
    <th>Cloapedia API</th>
  </tr>
  <tr>
    <td>{<pre>"token":"",
"id":,
"expired_date":,
"username":</pre>}</td>
  </tr>
</table>


## 3.2 Error response format:

-   **With no pagination**

<table>
  <tr>
    <th>Cloapedia API</th>
    <th>Guardian API</th>
  </tr>
  <tr>
    <td>{<pre>"status":"",
"message":""
"data": {
  ...
}</pre>}</td>
    <td>{<pre>"response": {
  "status": "ok",
  "userTier": "developer",
  "total": ,
  "content": {},
  "relatedContent":[]
}</pre>}</td>
  </tr>
</table>

<br>

-   **With pagination**
<table>
  <tr>
    <th>Cloapedia API</th>
    <th>Guardian API</th>
  </tr>
  <tr>
    <td>{<pre>"pagination": {
    "last_visible_page": ,
    "has_next_page": ,
    "current_page":,
    "limit":
  },
  "status": "failed",
  "message": "",
  "data": []</pre>}</td>
    <td>{<pre>"response": {
  "status": "",
  "userTier": "",
  "total": ,
  "startIndex": ,
  "pageSize": ,
  "currentPage": ,
  "pages": ,
  "edition": {
      ...
  },
  "section": {
      ...
  },
  "results": []
}</pre>}</td>
  </tr>
</table>



-   **JWT response**
<table>
  <tr>
    <th>Cloapedia API</th>
  </tr>
  <tr>
    <td>{<pre>"path": "",
"error": "",
"message": "",
"status":</pre>}</td>
  </tr>
</table>



# 3. Hosts:
- Server Host: https://splendid-app-server.herokuapp.com

