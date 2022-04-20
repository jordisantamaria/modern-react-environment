# Parcel

## Dev server

It's very fast, using  watcher written in C++

```
yarn parcel src/index.html -p 3000 --open
```

## Hot reloading

Automatically rebuilds the changed files and update page. Sometimes reload page and others just update
some modules to avoid whole page refresh.

## Lazy mode

To avoid build all code when execute dev server and only build whats required to show page.

```
parcel 'pages/*.html' --lazy
```

## Caching

When restart dev server, parcel will only rebuild files that have changed since last time it ran.

Cache is stores in `.parcel-cache`, cache can be disabled by `--no-cache`

## HTTPS

To enable https and automatically generate a self-signed certificate
```
parcel src/index.html --https
```

## Auto install

Parcel automatically install plugins required for parse a files dependency, for example `.sass` file.

