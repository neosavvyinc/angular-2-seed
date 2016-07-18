# Neosavvy's Angular 2 Seed

### Architecture Overview
* The `src/ts/features` folder is subdivided into individual features, which are determined by slices of application state. A feature contains:
    * a parent component
    * optional store to declare the feature's slice of application state
    * optional child components, in a `components/` folder
    * optional common components (which should be used by multiple children), in `components/common`
    * optional services (which act only upon the feature's slice of application state), in `services/`
* The `src/ts/features` directory also contains a common folder. This contains:
    * simple components like buttons, inputs, forms for use across multiple features
    * an optional store that declares the slice of application state in use by multiple features
    * services that act upon the previously-declared common slice of application state
* Also in src/ts is a set of master files:
    * `app.component.ts` is the application's master component, to be bootstrapped by `main.ts`
    * `app.store.ts` serves as an import hub for the actions and reducers across the entire application
    * `app.routes.ts` functions similarly, but for routes

### Proposed Architecture:
* angular-2-seed/
    * src/
        * ts/
            * features/
                * common/                           -- folder for common-use features and components
                    * components/
                        * commonComp1.component.ts
                    * features/
                        * commonFeature1/
                * feature1/                         -- feature-specific submodule: contains the feature's parent comp, child comps, routes, actions, and reducers
                    * feature1.component.ts
                    * feature1.component.html
                    * feature1.component.scss
                    * feature1.routes.ts
                    * feature1.actions.ts
                    * feature1.reducers.ts
                    * components/
                        * common/
                        * f1comp1/
                            * f1comp1.component.ts
                            * f1comp1.component.html
                            * f1comp1.component.css
                        * f1comp2/
                    * services/
                        * f1service1.service.ts
                * feature2/
            * app.component.ts                  -- master application component: sets global template and renders router output
            * app.actions.ts                    -v
            * app.reducers.ts                   -- secondary master files import and plumb actions, reducers, and routes from all submodules
            * app.routes.ts                     -^
        * styles/
            * global-styles.scss        -- application-wide styles
            * global-variables.scss     -- application-wide variables; must import into a component's stylesheet for access
            * pre-load.css              -- pre-loaded by index.html to style the loading indicator
        * images/
        * index.html                -- receives all bundles, is delivered to browser
        * main.ts                   -- separate bundle for application code
        * polyfills.ts              -- separate bundle for necessary polyfills
        * vendor.ts                 -- separate bundle for stable vendor files
    * test/
        * ts/
            * features/
                * common/
                * feature1/
                    * feature1.component.spec.ts
                    * feature1.routes.spec.ts
                    * etc...
                    * common/
                    * components/
                        * f1comp1/
                            * f1comp1.spec.ts
                * feature2/
            * app.component.spec.ts
            * app.actions.spec.ts
            * etc...
    * config/
        * webpack/
            * webpack.config.js
        * karma/
            * karma.conf.js
            * karma.entry.js
    * typings
    * package.json
    * tsconfig.json
    * typings.json
    * tslint.json