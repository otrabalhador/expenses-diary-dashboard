# Expenses Diary Dashboard

This dashboard integrates with [expenses-diary-api][expenses-diary-api].

[Demo][Demo]

## ROADMAP to V1:

### Main

    [ ] JWT
    [X] Integrate Category and Payment Origin
    [ ] Implement options for start template (category/payment_origin) for user to start
    [ ] Implement option to edit template (category/payment_origin)
    [ ] Screen with expenses overview

### Secondary

    [ ] Format table data to specific type
    [ ] Block create/edit button when pressed
    [ ] Find a better place to put loading snipper
    [ ] Prettier forms
    [ ] Only create when there is data
    [ ] Only edit when there is editted info


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


[expenses-diary-api]: https://github.com/otrabalhador/expenses-diary-api
[Demo]: https://expenses-diary.herokuapp.com/#/