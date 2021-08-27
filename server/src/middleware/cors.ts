import cors from 'cors';
import config from '../config/config';

export default cors(config.cors);
