import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './web-reportes.datasource.json';

export class WebReportesDataSource extends juggler.DataSource {
  static dataSourceName = 'web_reportes';

  constructor(
    @inject('datasources.config.web_reportes', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
