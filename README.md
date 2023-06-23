
# About

Small project leveraging the 3js library in order to render 3D animations of a simplified Solar System. Used some of the code from [discoverthreejs](https://discoverthreejs.com/) as a starting point. Using npm and webpack for dependency 
management and packaging.

# Building
To setup project after cloning, run `npm install` in the top level directory.

Execute `npm run build` to package source code into a bundle via webpack. Build artifacts
will appear in the `dist/` directory.

Use `npx vite` to run server. Should be able to see build artifacts if `dist/` directory is added to url.
use `npx vite build` to build prod version and run in server

# Special Notes
`vendor/` directory contains only the necessary dependencies for runtime