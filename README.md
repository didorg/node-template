# Node Template  
Template for quick tests.

##  dotenv priority
#### Files on the left have more priority than files on the right:

- `npm start`: `.env.development.local`, `.env.development`, `.env.local`, `.env`
- `npm run build`: `.env.production.local`, `.env.production`, `.env.local`, `.env`
- `npm test`: `.env.test.local`, `.env.test`, `.env` (note `.env.local` is missing)

These variables will act as the defaults if the machine does not explicitly set them.
Please refer to the [priority documentation](https://github.com/motdotla/dotenv) for more details.

[Source](https://create-react-app.dev/docs/adding-custom-environment-variables)  

