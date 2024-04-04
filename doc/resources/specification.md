# Specification

> To add a "BFF/Frontend" stack reference to this repository, here is the following specifications :

## Material UI
* Add material UI design system
    * color primary by techno
    * layout with app bar & collapsable sidemenu to rail

## Custom endpoint
* Expose custom server endpoint to "/version"
    * return { version: "1.0.0" }

## Server side rendering
* Expose frontend web application with SSR
    * pre-rendering page with data
    * fallback into interactive UI

## OIDC & cookie authentication
* Handle OIDC auth over keycloak SSO
* Cookie & antiforgery token
* Login / Logout clean process

## Proxying API
* Proxying downsteam REST API
    * Proxying jsonplaceholder "todos" API with route "/api/todos"
    * [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
    * Page listing posts exposed by API

## GraphQL gateway
* Gateway GraphQL over downstream subgraph
    * Gateway over "countries" graph trevorblades
    * [https://countries.trevorblades.com/](https://countries.trevorblades.com/)
    * Page listing continents exposed by API

## Auto generated SDK
* SDK to consume BFF GraphQL schema
    * Auto generate it from BFF url
    * Use it in frontend application

## Light / Dark theme
* Theme switcher implementation

## I18N
* I18N switcher : FR & EN

## Feature management
* BFF expose feature management configuration
    * Enable / disable flag from config and show "User" page link in sidemenu accordingly (A/B testing)
