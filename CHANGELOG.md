<!--
  - SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
# Changelog

## [7.0.4](https://github.com/nextcloud/webpack-vue-config/tree/v7.0.4) (2026-08-10)
[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v7.0.3...v7.0.4)

### Fixes
* fix(deps): downgrade `webpack-cli` from `7.0.0` to `6.0.1` to avoid breaking changes with `--node-env` CLI option [#803](https://github.com/nextcloud-libraries/webpack-vue-config/pull/803) ([ShGKme](https://github.com/ShGKme))
* fix(deps): downgrade broken `node-polyfill-webpack-plugin` to 4.0.0 [#802](https://github.com/nextcloud-libraries/webpack-vue-config/pull/802) ([ShGKme](https://github.com/ShGKme))

### Changes
* build: replace `terser-webpack-plugin` with its actual renamed version `minimizer-webpack-plugin` [#805](https://github.com/nextcloud-libraries/webpack-vue-config/pull/805) ([ShGKme](https://github.com/ShGKme))


## [7.0.3](https://github.com/nextcloud/webpack-vue-config/tree/v7.0.3) (2026-08-04)
[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v7.0.2...v7.0.3)

### Fixes
* fix: workaround for broken styles by BOM chars with postcss >=8.5.24 with mini-css-extract-plugin [#798](https://github.com/nextcloud-libraries/webpack-vue-config/pull/798) ([ShGKme](https://github.com/ShGKme))

## [7.0.2](https://github.com/nextcloud/webpack-vue-config/tree/v7.0.2) (2025-11-18)
[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v7.0.1...v7.0.2)

### Fixes
* fix: define vue compile time flags [#698](https://github.com/nextcloud-libraries/webpack-vue-config/pull/698) ([ShGKme](https://github.com/ShGKme))

## [7.0.1](https://github.com/nextcloud/webpack-vue-config/tree/v7.0.1) (2025-11-07)
[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v7.0.0...v7.0.1)

### Changed
* chore: update Node and NPM version [#695](https://github.com/nextcloud-libraries/webpack-vue-config/pull/695) ([susnux](https://github.com/susnux))
  This package now does officially work with Node 22 and Node 24.
* ci: update workflows from organization [#694](https://github.com/nextcloud-libraries/webpack-vue-config/pull/694) ([susnux](https://github.com/susnux))

## [7.0.0](https://github.com/nextcloud/webpack-vue-config/tree/7.0.0) (2025-11-03)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v6.3.2...7.0.0)

### 💥 BREAKING CHANGES

Apps on **Vue 2** are now required an explicit legacy `vue-loader` installation:

```sh
npm i -D vue-loader@legacy
```

- feat!: require explicit `vue-loader@legacy` for Vue 2, remove hidden install [#688](https://github.com/nextcloud-libraries/webpack-vue-config/pull/688) ([ShGKme](https://github.com/ShGKme))

## [v6.3.2](https://github.com/nextcloud/webpack-vue-config/tree/v6.3.2) (2025-10-27)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v6.3.1...v6.3.2)

### Fixes
* fix(deps): downgrade broken `node-polyfill-webpack-plugin` from 4.1.0 to 4.0.0 [#691](https://github.com/nextcloud-libraries/webpack-vue-config/pull/691) ([ShGKme](https://github.com/ShGKme))

## [v6.3.1](https://github.com/nextcloud/webpack-vue-config/tree/v6.3.1) (2025-10-25)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v6.3.0...v6.3.1)

### Fixes
* fix: remove `vue$` alias to support dependencies with different Vue version [#672](https://github.com/nextcloud-libraries/webpack-vue-config/pull/672) ([ShGKme](https://github.com/ShGKme))

### Dependencies
* chore(deps-dev): Bump webpack from 5.98.0 to 5.99.5 [#665](https://github.com/nextcloud-libraries/webpack-vue-config/pull/665) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump node-polyfill-webpack-plugin from 4.0.0 to 4.1.0 [#664](https://github.com/nextcloud-libraries/webpack-vue-config/pull/664) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump webpack from 5.99.5 to 5.99.6 [#667](https://github.com/nextcloud-libraries/webpack-vue-config/pull/667) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump http-proxy-middleware from 2.0.7 to 2.0.9 [#668](https://github.com/nextcloud-libraries/webpack-vue-config/pull/668) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump webpack from 5.99.6 to 5.99.7 [#669](https://github.com/nextcloud-libraries/webpack-vue-config/pull/669) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump sass from 1.86.3 to 1.87.0 [#670](https://github.com/nextcloud-libraries/webpack-vue-config/pull/670) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump @babel/core from 7.26.10 to 7.27.1 [#671](https://github.com/nextcloud-libraries/webpack-vue-config/pull/671) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump webpack from 5.99.7 to 5.99.8 [#673](https://github.com/nextcloud-libraries/webpack-vue-config/pull/673) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump sass from 1.87.0 to 1.89.0 [#675](https://github.com/nextcloud-libraries/webpack-vue-config/pull/675) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump webpack from 5.99.8 to 5.99.9 [#676](https://github.com/nextcloud-libraries/webpack-vue-config/pull/676) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump @babel/core from 7.27.1 to 7.27.4 [#677](https://github.com/nextcloud-libraries/webpack-vue-config/pull/677) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump sass from 1.89.0 to 1.89.1 [#678](https://github.com/nextcloud-libraries/webpack-vue-config/pull/678) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump webpack-dev-server from 5.2.1 to 5.2.2 [#680](https://github.com/nextcloud-libraries/webpack-vue-config/pull/680) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump sass from 1.89.1 to 1.89.2 [#681](https://github.com/nextcloud-libraries/webpack-vue-config/pull/681) ([dependabot[bot]](https://github.com/dependabot[bot]))
* chore(deps-dev): Bump pbkdf2 from 3.1.2 to 3.1.3 [#683](https://github.com/nextcloud-libraries/webpack-vue-config/pull/683) ([dependabot[bot]](https://github.com/dependabot[bot]))
* [main] Fix npm audit [#684](https://github.com/nextcloud-libraries/webpack-vue-config/pull/684) ([nextcloud-command](https://github.com/nextcloud-command))
pull/686
* [main] Fix npm audit [#687](https://github.com/nextcloud-libraries/webpack-vue-config/pull/687) ([nextcloud-command](https://github.com/nextcloud-command))

### Other changes
* ci: update reuse.yml workflow from template [#685](https://github.com/nextcloud-libraries/webpack-vue-config/pull/685) ([susnux](https://github.com/susnux))
* ci: update npm-publish.yml workflow from template by @susnux in https://github.com/nextcloud-libraries/webpack-vue-config/

## [v6.3.0](https://github.com/nextcloud/webpack-vue-config/tree/v6.3.0) (2025-04-08)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v6.2.0...v6.3.0)

### 📝 Note on Vue 2 support

This package now supports both **Vue 2** and **Vue 3** by installing legacy `vue-loader` for Vue 2 in a `postinstall` script.

In Vue 2 it may result in different `vue-loader` version in the `package-lock.json` and `node_modules`.

#### Troubleshooting in Vue 2 apps

In case of `npm error code ENOTEMPTY` - remove `node_modules` and try again:

```sh
# In case of "npm error code ENOTEMPTY" in Vue 2
rm -rf node_modules
```

To avoid any errors and have explicitly specified `vue-loader` - install it as a dependency:

```sh
# Install legacy vue-loader for Vue 2
npm i -D vue-loader@legacy
```

### 🚀 Features

* feat: Vue 2 and Vue 3 compatibility [#658](https://github.com/nextcloud-libraries/webpack-vue-config/pull/658) ([ShGKme](https://github.com/ShGKme))

### Dependencies

* chore(deps): Bump cookie and express [#619](https://github.com/nextcloud-libraries/webpack-vue-config/pull/619) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.79.4 to 1.79.5 [#621](https://github.com/nextcloud-libraries/webpack-vue-config/pull/621) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.25.7 to 7.25.8 [#622](https://github.com/nextcloud-libraries/webpack-vue-config/pull/622) ([dependabot](https://github.com/dependabot))
* chore(ci): remove publish to GitHub Registry [#620](https://github.com/nextcloud-libraries/webpack-vue-config/pull/620) ([ShGKme](https://github.com/ShGKme))
* chore(deps-dev): Bump sass from 1.79.5 to 1.80.3 [#623](https://github.com/nextcloud-libraries/webpack-vue-config/pull/623) ([dependabot](https://github.com/dependabot))
* [main] Fix npm audit [#624](https://github.com/nextcloud-libraries/webpack-vue-config/pull/624) ([nextcloud-command](https://github.com/nextcloud-command))
* chore(deps-dev): Bump sass from 1.80.3 to 1.80.4 [#625](https://github.com/nextcloud-libraries/webpack-vue-config/pull/625) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.25.8 to 7.26.0 [#626](https://github.com/nextcloud-libraries/webpack-vue-config/pull/626) ([dependabot](https://github.com/dependabot))
* [main] Fix npm audit [#627](https://github.com/nextcloud-libraries/webpack-vue-config/pull/627) ([nextcloud-command](https://github.com/nextcloud-command))
* chore(deps-dev): Bump webpack from 5.95.0 to 5.96.1 [#628](https://github.com/nextcloud-libraries/webpack-vue-config/pull/628) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.80.4 to 1.80.6 [#629](https://github.com/nextcloud-libraries/webpack-vue-config/pull/629) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass-loader from 16.0.2 to 16.0.3 [#630](https://github.com/nextcloud-libraries/webpack-vue-config/pull/630) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.80.6 to 1.81.0 [#631](https://github.com/nextcloud-libraries/webpack-vue-config/pull/631) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.81.0 to 1.82.0 [#634](https://github.com/nextcloud-libraries/webpack-vue-config/pull/634) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack from 5.96.1 to 5.97.1 [#633](https://github.com/nextcloud-libraries/webpack-vue-config/pull/633) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass-loader from 16.0.3 to 16.0.4 [#635](https://github.com/nextcloud-libraries/webpack-vue-config/pull/635) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump node-polyfill-webpack-plugin from 4.0.0 to 4.1.0 [#636](https://github.com/nextcloud-libraries/webpack-vue-config/pull/636) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack-dev-server from 5.1.0 to 5.2.0 [#638](https://github.com/nextcloud-libraries/webpack-vue-config/pull/638) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.82.0 to 1.83.0 [#637](https://github.com/nextcloud-libraries/webpack-vue-config/pull/637) ([dependabot](https://github.com/dependabot))
* chore(deps): Bump nanoid from 3.3.7 to 3.3.8 in /tests [#639](https://github.com/nextcloud-libraries/webpack-vue-config/pull/639) ([dependabot](https://github.com/dependabot))
* chore(deps): Bump nanoid from 3.3.7 to 3.3.8 [#640](https://github.com/nextcloud-libraries/webpack-vue-config/pull/640) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.83.0 to 1.83.1 [#642](https://github.com/nextcloud-libraries/webpack-vue-config/pull/642) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump ts-loader from 9.5.1 to 9.5.2 [#643](https://github.com/nextcloud-libraries/webpack-vue-config/pull/643) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.83.1 to 1.83.4 [#644](https://github.com/nextcloud-libraries/webpack-vue-config/pull/644) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.26.0 to 7.26.7 [#645](https://github.com/nextcloud-libraries/webpack-vue-config/pull/645) ([dependabot](https://github.com/dependabot))
* [main] Fix npm audit [#632](https://github.com/nextcloud-libraries/webpack-vue-config/pull/632) ([nextcloud-command](https://github.com/nextcloud-command))
* chore(deps-dev): Bump sass from 1.83.4 to 1.84.0 [#646](https://github.com/nextcloud-libraries/webpack-vue-config/pull/646) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.26.7 to 7.26.9 [#647](https://github.com/nextcloud-libraries/webpack-vue-config/pull/647) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack from 5.97.1 to 5.98.0 [#648](https://github.com/nextcloud-libraries/webpack-vue-config/pull/648) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.84.0 to 1.85.0 [#649](https://github.com/nextcloud-libraries/webpack-vue-config/pull/649) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass-loader from 16.0.4 to 16.0.5 [#650](https://github.com/nextcloud-libraries/webpack-vue-config/pull/650) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @nextcloud/eslint-config from 8.4.1 to 8.4.2 in /tests [#651](https://github.com/nextcloud-libraries/webpack-vue-config/pull/651) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.85.0 to 1.85.1 [#653](https://github.com/nextcloud-libraries/webpack-vue-config/pull/653) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.26.9 to 7.26.10 [#654](https://github.com/nextcloud-libraries/webpack-vue-config/pull/654) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.85.1 to 1.86.0 [#655](https://github.com/nextcloud-libraries/webpack-vue-config/pull/655) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack-dev-server from 5.2.0 to 5.2.1 [#656](https://github.com/nextcloud-libraries/webpack-vue-config/pull/656) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.86.0 to 1.86.3 [#660](https://github.com/nextcloud-libraries/webpack-vue-config/pull/660) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack-cli from 5.1.4 to 6.0.1 [#641](https://github.com/nextcloud-libraries/webpack-vue-config/pull/641) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump babel-loader from 9.2.1 to 10.0.0 [#652](https://github.com/nextcloud-libraries/webpack-vue-config/pull/652) ([dependabot](https://github.com/dependabot))
* chore(deps): downgrade node-polyfill-webpack-plugin to 4.0.0 [#659](https://github.com/nextcloud-libraries/webpack-vue-config/pull/659) ([ShGKme](https://github.com/ShGKme))

## [v6.2.0](https://github.com/nextcloud/webpack-vue-config/tree/v6.2.0) (2024-10-04)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v6.1.1...v6.2.0)

### ⚠️ Breaking

* `sass-loader` is upgraded from `v14` to `v16` with modern Sass JS API.
  This is not expected to be a breaking change. But it might affect configs with custom `sass` configuration.
  See SASS docs for details: https://sass-lang.com/documentation/js-api/interfaces/legacystringoptions/

### Dependencies

* chore(deps-dev): Bump @babel/core from 7.25.2 to 7.25.7 [#618](https://github.com/nextcloud-libraries/webpack-vue-config/pull/618) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.79.3 to 1.79.4 [#617](https://github.com/nextcloud-libraries/webpack-vue-config/pull/617) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack from 5.94.0 to 5.95.0 [#615](https://github.com/nextcloud-libraries/webpack-vue-config/pull/615) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass-loader from 14.2.1 to 16.0.2 [#612](https://github.com/nextcloud-libraries/webpack-vue-config/pull/612) ([dependabot](https://github.com/dependabot))

## [v6.1.1](https://github.com/nextcloud/webpack-vue-config/tree/v6.1.1) (2024-09-23)

### 🐛 Bug Fix

* fix: include `process` Node polyfill [#613](https://github.com/nextcloud-libraries/webpack-vue-config/pull/613) ([ShGKme](https://github.com/ShGKme))

## [v6.1.0](https://github.com/nextcloud/webpack-vue-config/tree/v6.1.0) (2024-09-17)
* Update package npm version [#608](https://github.com/nextcloud-libraries/webpack-vue-config/pull/608) ([skjnldsv](https://github.com/skjnldsv))
* Fix npm audit [#609](https://github.com/nextcloud-libraries/webpack-vue-config/pull/609) ([nextcloud-command](https://github.com/nextcloud-command))
* Dependencies update

## [v6.0.1](https://github.com/nextcloud/webpack-vue-config/tree/v6.0.1) (2024-01-29)

[Full Changelog](https://github.com/nextcloud/webpack-vue-config/compare/v5.5.1...v6.0.0)

### 🐛 Bug Fix

* fix: ignore `./locale` import from `moment/min/moment-with-locales` [#533](https://github.com/nextcloud-libraries/webpack-vue-config/pull/533) ([ShGKme](https://github.com/ShGKme))

### Dependencies

* chore(deps-dev): Bump sass from 1.65.1 to 1.66.1 [#492](https://github.com/nextcloud-libraries/webpack-vue-config/pull/492) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.22.10 to 7.22.11 [#494](https://github.com/nextcloud-libraries/webpack-vue-config/pull/494) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump vue-loader from 15.10.1 to 15.10.2 [#495](https://github.com/nextcloud-libraries/webpack-vue-config/pull/495) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.22.11 to 7.22.17 [#496](https://github.com/nextcloud-libraries/webpack-vue-config/pull/496) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.22.17 to 7.22.19 [#497](https://github.com/nextcloud-libraries/webpack-vue-config/pull/497) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.66.1 to 1.67.0 [#498](https://github.com/nextcloud-libraries/webpack-vue-config/pull/498) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.22.19 to 7.22.20 [#499](https://github.com/nextcloud-libraries/webpack-vue-config/pull/499) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.67.0 to 1.68.0 [#500](https://github.com/nextcloud-libraries/webpack-vue-config/pull/500) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @nextcloud/eslint-config from 8.2.1 to 8.3.0 in /tests [#501](https://github.com/nextcloud-libraries/webpack-vue-config/pull/501) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.22.20 to 7.23.0 [#502](https://github.com/nextcloud-libraries/webpack-vue-config/pull/502) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.68.0 to 1.69.0 [#503](https://github.com/nextcloud-libraries/webpack-vue-config/pull/503) ([dependabot](https://github.com/dependabot))
* chore(deps): Bump postcss from 8.4.26 to 8.4.31 in /tests [#504](https://github.com/nextcloud-libraries/webpack-vue-config/pull/504) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.23.0 to 7.23.2 [#505](https://github.com/nextcloud-libraries/webpack-vue-config/pull/505) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.69.0 to 1.69.3 [#506](https://github.com/nextcloud-libraries/webpack-vue-config/pull/506) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump ts-loader from 9.4.4 to 9.5.0 [#508](https://github.com/nextcloud-libraries/webpack-vue-config/pull/508) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack from 5.88.2 to 5.89.0 [#507](https://github.com/nextcloud-libraries/webpack-vue-config/pull/507) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/traverse from 7.23.0 to 7.23.2 in /tests [#509](https://github.com/nextcloud-libraries/webpack-vue-config/pull/509) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.69.3 to 1.69.4 [#511](https://github.com/nextcloud-libraries/webpack-vue-config/pull/511) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump vue-loader from 15.10.2 to 15.11.1 [#510](https://github.com/nextcloud-libraries/webpack-vue-config/pull/510) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump browserify-sign from 4.2.1 to 4.2.2 [#512](https://github.com/nextcloud-libraries/webpack-vue-config/pull/512) ([dependabot](https://github.com/dependabot))
* chore(deps): Bump vue from 2.7.14 to 2.7.15 in /tests [#513](https://github.com/nextcloud-libraries/webpack-vue-config/pull/513) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.69.4 to 1.69.5 [#515](https://github.com/nextcloud-libraries/webpack-vue-config/pull/515) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump vue-template-compiler from 2.7.14 to 2.7.15 [#514](https://github.com/nextcloud-libraries/webpack-vue-config/pull/514) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.23.2 to 7.23.3 [#516](https://github.com/nextcloud-libraries/webpack-vue-config/pull/516) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump ts-loader from 9.5.0 to 9.5.1 [#517](https://github.com/nextcloud-libraries/webpack-vue-config/pull/517) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.23.3 to 7.23.5 [#519](https://github.com/nextcloud-libraries/webpack-vue-config/pull/519) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump node-polyfill-webpack-plugin from 2.0.1 to 3.0.0 [#520](https://github.com/nextcloud-libraries/webpack-vue-config/pull/520) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.23.5 to 7.23.6 [#521](https://github.com/nextcloud-libraries/webpack-vue-config/pull/521) ([dependabot](https://github.com/dependabot))
* chore: update workflows from templates [#522](https://github.com/nextcloud-libraries/webpack-vue-config/pull/522) ([nextcloud-command](https://github.com/nextcloud-command))
* chore(deps-dev): Bump vue-template-compiler from 2.7.15 to 2.7.16 [#524](https://github.com/nextcloud-libraries/webpack-vue-config/pull/524) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.23.6 to 7.23.7 [#525](https://github.com/nextcloud-libraries/webpack-vue-config/pull/525) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass-loader from 13.3.2 to 13.3.3 [#526](https://github.com/nextcloud-libraries/webpack-vue-config/pull/526) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.69.5 to 1.69.6 [#527](https://github.com/nextcloud-libraries/webpack-vue-config/pull/527) ([dependabot](https://github.com/dependabot))
* chore(deps): Bump vue from 2.7.15 to 2.7.16 in /tests [#528](https://github.com/nextcloud-libraries/webpack-vue-config/pull/528) ([dependabot](https://github.com/dependabot))
* chore(deps-peer): Bump Vue from 2.7.14 to 2.7.16 [#523](https://github.com/nextcloud-libraries/webpack-vue-config/pull/523) ([ShGKme](https://github.com/ShGKme))
* chore(deps-dev): Bump sass from 1.69.6 to 1.69.7 [#529](https://github.com/nextcloud-libraries/webpack-vue-config/pull/529) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump follow-redirects from 1.15.2 to 1.15.4 [#530](https://github.com/nextcloud-libraries/webpack-vue-config/pull/530) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @nextcloud/browserslist-config from 2.3.0 to 3.0.0 in /tests [#493](https://github.com/nextcloud-libraries/webpack-vue-config/pull/493) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump style-loader from 3.3.3 to 3.3.4 [#531](https://github.com/nextcloud-libraries/webpack-vue-config/pull/531) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump css-loader from 6.8.1 to 6.9.0 [#532](https://github.com/nextcloud-libraries/webpack-vue-config/pull/532) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump css-loader from 6.9.0 to 6.9.1 [#536](https://github.com/nextcloud-libraries/webpack-vue-config/pull/536) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.69.7 to 1.70.0 [#535](https://github.com/nextcloud-libraries/webpack-vue-config/pull/535) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @nextcloud/stylelint-config from 2.3.1 to 2.4.0 in /tests [#537](https://github.com/nextcloud-libraries/webpack-vue-config/pull/537) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack from 5.89.0 to 5.90.0 [#538](https://github.com/nextcloud-libraries/webpack-vue-config/pull/538) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @babel/core from 7.23.7 to 7.23.9 [#539](https://github.com/nextcloud-libraries/webpack-vue-config/pull/539) ([dependabot](https://github.com/dependabot))

## [v6.0.0](https://github.com/nextcloud/webpack-vue-config/tree/v6.0.0) (2023-08-16)

[Full Changelog](https://github.com/nextcloud/webpack-vue-config/compare/v5.5.1...v6.0.0)

### Breaking
* chore: update node engines to next LTS [#470](https://github.com/nextcloud-libraries/webpack-vue-config/pull/470) ([nextcloud-command](https://github.com/nextcloud-command))
  We now supports node `^20.0.0` and npm `^9.0.0`

### :bug: Bug Fix
* fix: pass ts to ts-loader before babel [#472](https://github.com/nextcloud-libraries/webpack-vue-config/pull/472) ([skjnldsv](https://github.com/skjnldsv))
* fix: polyfill node:Buffer by default [#489](https://github.com/nextcloud-libraries/webpack-vue-config/pull/489) ([ShGKme](https://github.com/ShGKme))
* Revert "Disable cache in dev mode" [#456](https://github.com/nextcloud-libraries/webpack-vue-config/pull/456) ([pulsejet](https://github.com/pulsejet))
* Update rules to prevent prettier to run [#475](https://github.com/nextcloud-libraries/webpack-vue-config/pull/475) ([christianlupus](https://github.com/christianlupus))

### Dependencies
* chore: Fix URLs after package was transfered [#484](https://github.com/nextcloud-libraries/webpack-vue-config/pull/484) ([susnux](https://github.com/susnux))
* chore(deps-dev): Bump @babel/core from 7.22.1 to 7.22.10 [#488](https://github.com/nextcloud-libraries/webpack-vue-config/pull/488) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump @nextcloud/stylelint-config from 2.3.0 to 2.3.1 in /tests [#477](https://github.com/nextcloud-libraries/webpack-vue-config/pull/477) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump babel-loader from 9.1.2 to 9.1.3 [#473](https://github.com/nextcloud-libraries/webpack-vue-config/pull/473) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump css-loader from 6.7.4 to 6.8.1 [#463](https://github.com/nextcloud-libraries/webpack-vue-config/pull/463) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass from 1.62.1 to 1.65.1 [#487](https://github.com/nextcloud-libraries/webpack-vue-config/pull/487) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump sass-loader from 13.3.0 to 13.3.2 [#467](https://github.com/nextcloud-libraries/webpack-vue-config/pull/467) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack from 5.88.1 to 5.88.2 [#482](https://github.com/nextcloud-libraries/webpack-vue-config/pull/482) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack-cli from 5.1.1 to 5.1.4 [#466](https://github.com/nextcloud-libraries/webpack-vue-config/pull/466) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump webpack-dev-server from 4.11.1 to 4.15.1 [#483](https://github.com/nextcloud-libraries/webpack-vue-config/pull/483) ([dependabot](https://github.com/dependabot))
* chore(deps-dev): Bump word-wrap from 1.2.3 to 1.2.4 in /tests [#478](https://github.com/nextcloud-libraries/webpack-vue-config/pull/478) ([dependabot](https://github.com/dependabot))
* fix: dependencies and audit [#485](https://github.com/nextcloud-libraries/webpack-vue-config/pull/485) ([skjnldsv](https://github.com/skjnldsv))

## [v5.5.1](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v5.5.1) (2023-04-25)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v5.5.0...v5.5.1)

#### :bug: Bug Fix
* [#449](https://github.com/nextcloud-libraries/webpack-vue-config/pull/449) Do not polyfill available in a web browser Node modules ([@ShGKme](https://github.com/ShGKme))

#### Committers: 1
- Grigorii K. Shartsev ([@ShGKme](https://github.com/ShGKme))

## [v5.5.0](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v5.5.0) (2023-03-15)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v5.4.0...v5.5.0)

**Implemented enhancements:**

- Add ts support [\#421](https://github.com/nextcloud-libraries/webpack-vue-config/pull/421) ([skjnldsv](https://github.com/skjnldsv))
- Add alias for resolving vue [\#432](https://github.com/nextcloud-libraries/webpack-vue-config/pull/432) ([raimund-schluessler](https://github.com/raimund-schluessler))
- Add public path config information for HMR [\#431](https://github.com/nextcloud-libraries/webpack-vue-config/pull/431) ([artonge](https://github.com/artonge))
- Resolve ts files [\#424](https://github.com/nextcloud-libraries/webpack-vue-config/pull/424) ([skjnldsv](https://github.com/skjnldsv))

**Fixed bugs:**

- Put vue as dependency to sync with vue-template-compiler [\#371](https://github.com/nextcloud-libraries/webpack-vue-config/pull/371) ([skjnldsv](https://github.com/skjnldsv))

**Merged dependencies:**

- Bump @babel/core from 7.19.6 to 7.20.12 
- Bump babel-loader from 8.2.5 to 9.1.2 
- Bump css-loader from 6.7.1 to 6.7.3 
- Bump json5 from 1.0.1 to 1.0.2 
- Bump loader-utils from 1.4.0 to 1.4.2 
- Bump sass from 1.55.0 to 1.59.2 
- Bump sass-loader from 13.1.0 to 13.2.0 
- Bump vue-loader from 15.10.0 to 15.10.1 
- Bump vue-template-compiler from 2.7.13 to 2.7.14 
- Bump webpack-cli from 4.10.0 to 5.0.1

## [v5.4.0](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v5.4.0) (2022-10-25)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v5.3.0...v5.4.0)

**Changed:**

* Upgrade packages minors and fix deep selector support [\#399](https://github.com/nextcloud-libraries/webpack-vue-config/pull/399) ([skjnldsv](https://github.com/skjnldsv))
  * @babel/core from `^7.16.7` to `^7.19.6`
  * babel-loader from `^8.2.3` to `^8.2.5`
  * css-loader from `^6.5.1` to `^6.7.1`
  * sass from `^1.47.0` to `^1.55.0`
  * sass-loader from `^13.0.1` to `^13.1.0`
  * vue-loader from `^15.9.8` to `^15.10.0`
  * vue-template-compiler from `^2.7.0` to `^2.7.13`
  * webpack from `^5.66.0` to `^5.74.0`
  * webpack-cli from `^4.9.1` to `^4.10.0`
  * webpack-dev-server from `^4.7.2` to `^4.11.1`

## [v5.3.0](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v5.3.0) (2022-08-10)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v5.2.1...v5.3.0)

**Changed:**

- Update engines versions to Node 16 with Npm 7 or Npm 8

## [v5.2.1](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v5.2.1) (2022-07-02)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v5.2.0...v5.2.1)

**Fixed bugs:**

- Fix vue-template-compiler version [\#356](https://github.com/nextcloud-libraries/webpack-vue-config/pull/356) ([skjnldsv](https://github.com/skjnldsv))

## [v5.2.0](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v5.2.0) (2022-07-02)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v5.1.0...v5.2.0)

**Merged pull requests:**

- Dependencies updates
- Bump vue-template-compiler from 2.6.14 to 2.7.0

## [v5.1.0](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v5.1.0) (2022-04-30)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v5.0.0...v5.1.0)

**Implemented enhancements:**

- Do not lint during build [\#318](https://github.com/nextcloud-libraries/webpack-vue-config/pull/318) ([skjnldsv](https://github.com/skjnldsv))

**Merged pull requests:**

- @nextcloud/eslint-config^8.0.0 compatibility
- Bump @babel/core to 7.17.10
- Bump async to 2.6.4
- Bump babel-loader to 8.2.5
- Bump css-loader to 6.7.1
- Bump eslint to 8.11.0
- Bump minimist to 1.2.6
- Bump node-forge to 1.3.0
- Bump sass to 1.51.0
- Bump stylelint to 14.6.0
## [v5.0.0](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v5.0.0) (2022-01-18)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v4.3.2...v5.0.0)

**Fixed bugs:**

- Fix devDependencies [\#279](https://github.com/nextcloud-libraries/webpack-vue-config/pull/279) ([skjnldsv](https://github.com/skjnldsv))

**Merged pull requests:**

- ⚠️ Eslint 8 [\#274](https://github.com/nextcloud-libraries/webpack-vue-config/pull/274) ([skjnldsv](https://github.com/skjnldsv))

## [v4.3.2](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v4.3.2) (2022-01-18)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v4.3.1...v4.3.2)

**Fixed bugs:**

- Fix devDependencies [\#279](https://github.com/nextcloud-libraries/webpack-vue-config/pull/279) ([skjnldsv](https://github.com/skjnldsv))

## [v4.3.1](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v4.3.1) (2022-01-17)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v4.3.0...v4.3.1)

**Dependencies updates:**

- Unpin webpack version [\#275](https://github.com/nextcloud-libraries/webpack-vue-config/pull/275) ([artonge](https://github.com/artonge))
- Bump stylelint-webpack-plugin from 3.1.0 to 3.1.1 [\#277](https://github.com/nextcloud-libraries/webpack-vue-config/pull/277) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump sass from 1.47.0 to 1.48.0 [\#276](https://github.com/nextcloud-libraries/webpack-vue-config/pull/276) ([dependabot[bot]](https://github.com/apps/dependabot))
- Bump sass to 1.47.0 [\#273](https://github.com/nextcloud-libraries/webpack-vue-config/pull/273) ([skjnldsv](https://github.com/skjnldsv))
- Bump sass from 1.46.0 to 1.47.0 [\#271](https://github.com/nextcloud-libraries/webpack-vue-config/pull/271) ([dependabot[bot]](https://github.com/apps/dependabot))

## [v4.3.0](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v4.3.0) (2022-01-07)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v4.2.0...v4.3.0)

**Fixed bugs:**

- Bump dependencies [\#269](https://github.com/nextcloud-libraries/webpack-vue-config/pull/269) ([skjnldsv](https://github.com/skjnldsv))

**Merged pull requests:**

- 4.3.0 [\#270](https://github.com/nextcloud-libraries/webpack-vue-config/pull/270) ([skjnldsv](https://github.com/skjnldsv))
- Change webpack config for more platform independency [\#268](https://github.com/nextcloud-libraries/webpack-vue-config/pull/268) ([dartcafe](https://github.com/dartcafe))
## [v4.2.0](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v4.2.0) (2021-11-29)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v4.1.2...v4.2.0)

- 4.2.0 [\#253](https://github.com/nextcloud-libraries/webpack-vue-config/pull/253) ([artonge](https://github.com/artonge))
- Update npm and node engines versions by @nextcloud-command in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/241>
- Bump eslint-webpack-plugin from 3.1.0 to 3.1.1 by @dependabot in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/244>
- Fix HMR by @jotoeri in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/246>
- Bump webpack-dev-server from 4.4.0 to 4.5.0 by @dependabot in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/249>
- Bump sass from 1.43.4 to 1.43.5 by @dependabot in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/252>
- Move stylelint to 14 by @skjnldsv in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/242>

## [v4.1.4](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v4.1.4) (2021-11-08)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v4.1.3...v4.1.4)

- Limit webpack update to patch versions of 5.46 by @artonge in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/238>

## [v4.1.3](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v4.1.3) (2021-11-08)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v4.1.2...v4.1.3)

**Merged pull requests:**

- Change webpack version in peerDep to match devDep by @artonge in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/233>
- Bump webpack from 5.46.0 to 5.62.1 by @dependabot in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/235>
- Bump css-loader from 6.5.0 to 6.5.1 by @dependabot in <https://github.com/nextcloud-libraries/webpack-vue-config/pull/236>

## [v4.1.2](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v4.1.2) (2021-11-03)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v4.1.1...v4.1.2)

**Merged pull requests:**

- Revert "Bump webpack from 5.46.0 to 5.61.0" [\#232](https://github.com/nextcloud-libraries/webpack-vue-config/pull/232) ([skjnldsv](https://github.com/skjnldsv))
- Revert "Bump eslint from 7.31.0 to 8.1.0" [\#231](https://github.com/nextcloud-libraries/webpack-vue-config/pull/231) ([skjnldsv](https://github.com/skjnldsv))

## [v4.1.1](https://github.com/nextcloud-libraries/webpack-vue-config/tree/v4.1.1) (2021-11-03)

[Full Changelog](https://github.com/nextcloud-libraries/webpack-vue-config/compare/v4.1.0...v4.1.1)

**Implemented enhancements:**

- Add style testing [\#230](https://github.com/nextcloud-libraries/webpack-vue-config/pull/230) ([skjnldsv](https://github.com/skjnldsv))
- Use Asset Modules plus upgrade to npm 7 [\#165](https://github.com/nextcloud-libraries/webpack-vue-config/pull/165) ([Pytal](https://github.com/Pytal))

**Merged pull requests:**

- Don't fail build by linter on development [\#163](https://github.com/nextcloud-libraries/webpack-vue-config/pull/163) ([jotoeri](https://github.com/jotoeri))
