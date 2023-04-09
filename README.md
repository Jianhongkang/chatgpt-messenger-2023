<div align="center">

  <img src="https://links.papareact.com/2i6" width="400" height="auto" />
  
  <h1>ChatGPT Clone with React.JS</h1>
  
  <p>
 ChatGPT Messenger 2.0 with REACT (Next.js 13, Firebase, Tailwind CSS, TypeScript)
  </p>
  
   
<h4>
      <a href="">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Jianhongkang/chatgpt-messenger-2023/blob/main/README.md">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Jianhongkang/chatgpt-messenger-2023/issues">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Jianhongkang/chatgpt-messenger-2023/issues">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

<!-- About the Project -->
## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots


<div >
<p ># login in </p>
<img  src='https://user-images.githubusercontent.com/110987982/230751376-e25f385a-6eeb-4eec-bfa5-e8d651e6d6b5.png' alt='image' />
<p ># main page </p>
<img src='https://user-images.githubusercontent.com/110987982/230751660-b686e6ea-926a-496e-a6c7-52908297fbba.png'/>
<p ># new chat </p>
<img src='https://user-images.githubusercontent.com/110987982/230751751-33f8afcf-0e77-439e-89f3-93ddf1204d3c.png'/>
<p ># query </p>
<img src='https://user-images.githubusercontent.com/110987982/230752058-664c6445-3e8b-4b7f-88c7-ba6867d7356d.png'/>
</div>


## <a href="">LIVE DEMO 💥</a>

![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)
![forthebadge](https://forthebadge.com/images/badges/for-you.svg)
![forthebadge](https://forthebadge.com/images/badges/powered-by-coffee.svg)

### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://#/">Typescript</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
<summary>Api</summary>
  <ul>
    <li><a href="https://developer.spotify.com">Openai for Developers</a></li>
  </ul>
</details>
<br />


## :toolbox: Getting Started

### :bangbang: Prerequisites

- Sign up for a Openai for Developer account <a href='https://platform.openai.com/docs/introduction/overview'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file
`GOOGLE_ID`
`GOOGLE_SECRET`
`GITHUB_ID`
`GITHUB_SECRET`
`NEXTAUTH_URL`
`NEXTAUTH_SECRET`
`OPENAI_API_KEY`
`FIREBASE_SERVICE_ACCOUNT_KEY`


### :gear: Installation

Install my-project with npm

```
npx create-next-app chatgpt-messenger-2023
```

```
cd chatgpt-messenger-2023
```

Install dependencies

### :test_tube: Install Tailwind CSS with Next.js

#### Install Tailwind CSS

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both `tailwind.config.js` and `postcss.config.js`.

```
npm install -D tailwindcss postcss autoprefixer
```

```
npx tailwindcss init -p
```

#### Configure your template paths

Add the paths to all of your template files in your `tailwind.config.js` file.
<br>

```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Add the Tailwind directives to your CSS

Add the `@tailwind` directives for each of Tailwind’s layers to your `./styles/globals.css` file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Install dependencies

<a href="https://github.com/SashenJayathilaka/Spotify-Clone/blob/master/package.json" target="_blank">🔶 Other Dependency Info</a>

<!-- Run Locally -->

### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/Jianhongkang/chatgpt-messenger-2023.git
```

Install dependencies
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

```bash
  npm install
```
## Getting Started

Start the server
First, run the development server:

```bash
  npm run dev
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

##### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
