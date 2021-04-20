# Yarn 2 & `getServerSideProps` props test case

## What is this?

Returning `{notFound: true}` in a page's [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) in Next.js while using Yarn 2 results in the page never loading.

## Prerequisites

- Node 15.13.0
- Yarn 1.22.10

## Reproduction

1. Clone this
1. Run `yarn install`
1. Run `yarn run dev`
1. Navigate to http://localhost:3000/test which should show the Next.js 404 page, which is expected
1. Stop the server
1. Run `yarn set version berry`
1. Run `yarn install`
1. Run `yarn run dev`
1. Navigate to http://localhost:3000/test will hang forever and maybe show Webpack errors on the console
