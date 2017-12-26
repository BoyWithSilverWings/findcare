import axios from 'axios';
import { BASE_URL } from '../constants';

function setFilter(query, filters) {
  const disciplines = Array.from(filters.disciplines);
  const types = Array.from(filters.types);
  const states = Array.from(filters.states);
  console.log(disciplines, types, states);
  const body = {
    size: 20,
    query: {
      bool: {
        must: {
          match: {
            name: query,
          },
        },
        filter: [
          {
            match: {
              type: types.join(' '),
            },
          },
          {
            match: {
              state: states.join(' '),
            },
          },
          {
            match: {
              discipline: disciplines.join(' '),
            },
          },
        ],
      },
    },
  };
  return axios.post(`${BASE_URL}/filter`, body);
}

export default setFilter;
