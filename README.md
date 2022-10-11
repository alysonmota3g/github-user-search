# Github User Search

a personal project for studies using github api to search users - [view project online](https://alysonmota-github-user-search.vercel.app/)

### What was used ?

- Vite JS

- Tailwindcss

- SWR

- Typescript

### Running on locally

```bash
# clone project
$ git clone https://github.com/alysonmota3g/github-user-search

# install dependences
$ yarn

# run
$ yarn dev

visit at http://127.0.0.1:5173/
```

### API limit

1. To fix limit in the github api you must generate a [personal token](https://github.blog/2013-05-16-personal-api-tokens/)

2. crete the file .env.local and add `VITE_GITHUB_TOKEN="your personal token"`
