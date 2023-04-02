import { registerAs } from '@nestjs/config';

import { version } from '../../../package.json';

export default registerAs('swagger', () => ({
  title: 'Template-Nestjs',
  description: 'Description de la template',
  version,
}));
