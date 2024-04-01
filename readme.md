# BFF WORKSHOP

> Workshop & project templates around the BFF (Backend For Frontend) pattern

* ASP NET - Blazor
* Express - Angular
* Nextjs - React
* Nuxt - Vue
* Yew - Rust (coming)

## FEATURES

* Add material UI design system
    * color primary by techno
    * layout with app bar & collapsable sidemenu to rail

* Expose custom server endpoint to "/version"
    * return { version: "1.0.0" }

* Expose frontend web application with SSR
    * pre-rendering page with data
    * fallback into interactive UI

* OIDC & cookie authentication
    * Handle OIDC auth over keycloak SSO
    * Cookie & antiforgery token
    * Login / Logout clean process

* Proxying downsteam REST API
    * Proxying jsonplaceholder "todos" API with route "/api/todos"

* Gateway GraphQL over downstream subgraph
    * Gateway over "countries" graph trevorblades

* Light & dark theme
    * Theme switcher implementation

* I18N
    * I18N switcher : FR & EN

## DOCUMENTATION (./doc)

> Open documentation using mdbook

```console
cd ./doc
mdbook serve
```

## SOURCES (./src)

### ASP.NET - Blazor

* ✅ Material UI
* ✅ Version endpoint
* ✅ Server side rendering
* ✅ OIDC / Cookie authentication
* ✅ Proxying API
* ✅ GraphQL gateway
* ✅ Light / Dark theme
* 🚫 I18N

### Express - Angular

* ✅ Material UI
* ✅ Version endpoint
* ✅ Server side rendering
* 🚫 OIDC / Cookie authentication
* ✅ Proxying API
* 🚫 GraphQL gateway
* 🚫 Light / Dark theme
* 🚫 I18N

### Nextjs - React

* ✅ Material UI
* ✅ Version endpoint
* ✅ Server side rendering
* 🚫 OIDC / Cookie authentication
* 🚫 Proxying API
* 🚫 GraphQL gateway
* 🚫 Light / Dark theme
* 🚫 I18N

### Nuxt - Vue

* ✅ Material UI
* ✅ Version endpoint
* ✅ Server side rendering
* 🚫 OIDC / Cookie authentication
* ✅ Proxying API
* 🚫 GraphQL gateway
* 🚫 Light / Dark theme
* 🚫 I18N
