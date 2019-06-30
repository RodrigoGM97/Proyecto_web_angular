import {ReportesApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ReportesApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new ReportesApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
