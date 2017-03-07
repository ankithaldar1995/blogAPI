
## Getting started

```sh
git clone https://github.com/apollostack/apollo-starter-kit
cd apollo-starter-kit
npm install
npm run start
```

Then open [http://localhost:8080/graphql](http://localhost:8080/graphql)

When you paste this on the left side of the page:

```
{
  testString
}
```

and hit the play button (cmd-return), then you should get this on the right side:

```json
{
  "data": {
    "testString": "It works!"
  }
}
```  
