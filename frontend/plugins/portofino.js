import Portofino from '@manydesigns/portofino';

export default function ({ $axios }) {
  Portofino.connect({ axiosInstance: $axios });
}
