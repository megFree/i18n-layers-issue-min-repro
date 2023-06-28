# nuxt i18n layers alter config min repo

## steps to reproduce
1. pnpm i -r -f
2. cd ./extends
3. pnpm run dev

## description
There're 2 projects and 1 module in repo:   
- base layer
- extends layer
- and i18n module

If you run "extends" project, you will see, that "localePath" doesn't work.   
If you remove "extends" config field from "extends" layer - all works fine.
