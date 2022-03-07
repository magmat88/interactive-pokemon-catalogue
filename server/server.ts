import {
  URL_BASE,
  DASHBOARD_ROUTE,
  POKEMON_LIST_ROUTE,
  POKEMON_LIST_URL_ROUTE,
  POKEMON_DETAILS_BY_ID_URL_ROUTE,
  POKEMON_DETAILS_BY_ID_ROUTE,
  HOME_ROUTE,
} from '../src/config/constants';

const fastify = require('fastify')({ logger: true });
const path = require('path');
const axios = require('axios').default;

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '..', './build'),
});

fastify.get(HOME_ROUTE, async (request: any, reply: any) => {
  try {
    reply.sendFile('index.html');
  } catch (error) {
    console.log(error);
  }
});

fastify.get(POKEMON_LIST_ROUTE, (request: any, reply: any) => {
  try {
    axios
      .get(`${URL_BASE}${POKEMON_LIST_URL_ROUTE}`)
      .then(async (response: any) => {
        reply.send(response.data);
      });
  } catch (error) {
    console.log(error);
  }
});

fastify.get(POKEMON_DETAILS_BY_ID_ROUTE, (request: any, reply: any) => {
  try {
    axios
      .get(`${URL_BASE}${POKEMON_DETAILS_BY_ID_URL_ROUTE}`)
      .then(async (response: any) => {
        reply.send(response.data);
      });
  } catch (error) {
    console.log(error);
  }
});

fastify.get(DASHBOARD_ROUTE, async (req: any, reply: any) => {
  try {
    const pokemonListPromise = axios.get(`${URL_BASE}${POKEMON_LIST_ROUTE}`);
    const pokemonDetailsByIdPromise = axios.get(
      `${URL_BASE}${POKEMON_DETAILS_BY_ID_ROUTE}`
    );

    const [pokemonList, pokemonDetailsById] = await Promise.all([
      pokemonListPromise,
      pokemonDetailsByIdPromise,
    ]);

    const response = {
      pokemonList: pokemonDetailsById.data,
      pokemonDetailsById: pokemonDetailsById.data,
    };
    reply.send(response);
  } catch (error) {
    console.error(error);
  }
});

fastify.listen(
  process.env.PORT || 5000,
  '0.0.0.0',
  function (error: any, port: any) {
    if (error) {
      fastify.log.error(error);
      process.exit(1);
    }
    console.log(`Server is listening on port ${port}...`);
  }
);
