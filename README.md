# Neosavvy's Angular 2 Seed


### Proposed Architecture:
* angular-2-seed/
  * src/
    * ts/
      * common/                         -- folder for any common-use components
        * commonComp1/
      * feature1/                       -- feature-specific folders
        * f1comp1/                      -- each component folder houses three files:
          * f1comp1.component.ts        -- logic
          * f1comp1.component.html      -- template
          * f1comp1.component.css       -- styling
      * feature2/
      * app.component.ts                -- root application component
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
      * webpack.common.js
      * webpack.dev.js
      * webpack.prod.js
      * webpack.test.js
    * karma/
      * karma.conf.js
  * package.json
  * tsconfig.json               -- immovable
  * typings.json                -- immovable

#### Notes:
* looks like tsconfig.json and typings.json need to be placed in the root of the project directory. Sorry Adam :(
* config/ makes sense to me outside of src/, but it can be moved inside of src/ if deemed more elegant