# Neosavvy's Angular 2 Seed


### Proposed Architecture:
* angular-2-seed/
    * src/
        * ts/
            * components/
                * common/                           -- folder for any common-use components: buttons, forms, etc
                    * commonComp1/
                * feature1/                         -- feature-specific folders: contains a parent feature component and sub-folders for optional child components
                    * feature1.component.ts         -- logic
                    * feature1.component.html       -- template
                    * feature1.component.css        -- styling
                    * feature1.routes.ts            -- routing file for this feature and its sub-components, should be imported by app.routes.ts
                    * f1comp1/                      -- sub-component for feature1
                        * f1comp1.component.ts
                        * f1comp1.component.html
                        * f1comp1.component.css
                * feature2/
            * app.component.ts                  -- root application component
            * app.routes.ts                     -- master route configuration file
        * css/
        * images/
        * index.html                -- receives all bundles, is delivered to browser
        * main.ts                   -- separate bundle for application code
        * polyfills.ts              -- separate bundle for necessary polyfills
        * vendor.ts                 -- separate bundle for stable vendor files
    * test/
        * ts/
            * feature1/
                * f1comp1/
                    * f1comp1.spec.ts
            * feature2/
            * app.spec.ts
    * config/
        * webpack/
            * webpack.config.js
        * karma/
            * karma.conf.js
    * typings                       -- definition folder for typescript
    * package.json
    * tsconfig.json
    * typings.json
    * tslint.json