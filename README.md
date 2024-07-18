# Criação de uma pequena aplicação com a api de usuários do GitHub


## Paginação

A aplicação apresenta sua páginação dívidia em 4 partes, sendo essas a "Home", "Data", "Login" e "Compare"


```js
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/compare",
    element: <Compare/>,
  },
  {
    path: "/data/:name",
    element: <Data/>,
  }
])
```

## Home
![Home]("./src/assets/Home.png")
## Data
![Home]("./src/assets/Data.png")
## login
![Home]("./src/assets/Login.png")
## Compare
![Home]("./src/assets/comp1.png")
![Home]("./src/assets/comp2.png")



- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
