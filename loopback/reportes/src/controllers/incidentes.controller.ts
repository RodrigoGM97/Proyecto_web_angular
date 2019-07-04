import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
  getModelRelations,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Incidentes} from '../models';
import {IncidentesRepository} from '../repositories';
import { pathExists } from 'fs-extra';

export class IncidentesController {
  constructor(
    @repository(IncidentesRepository)
    public incidentesRepository : IncidentesRepository,
  ) {}

  @post('/incidentes', {
    responses: {
      '200': {
        description: 'Incidentes model instance',
        content: {'application/json': {schema: {'x-ts-type': Incidentes}}},
      },
    },
  })
  async create(@requestBody() incidentes: Incidentes): Promise<Incidentes> {
    return await this.incidentesRepository.create(incidentes);
  }

  @get('/incidentes/count', {
    responses: {
      '200': {
        description: 'Incidentes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Incidentes)) where?: Where<Incidentes>,
  ): Promise<Count> {
    return await this.incidentesRepository.count(where);
  }

  @get('/incidentes', {
    responses: {
      '200': {
        description: 'Array of Incidentes model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Incidentes}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Incidentes)) filter?: Filter<Incidentes>,
  ): Promise<Incidentes[]> {
    return await this.incidentesRepository.find(filter);
  }

  @patch('/incidentes', {
    responses: {
      '200': {
        description: 'Incidentes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() incidentes: Incidentes,
    @param.query.object('where', getWhereSchemaFor(Incidentes)) where?: Where<Incidentes>,
  ): Promise<Count> {
    return await this.incidentesRepository.updateAll(incidentes, where);
  }

  @get('/incidentesOrgByTipo/{tipo_reporte}', {
    responses: {
      '200': {
        description: 'Incidentes model instance',
        content: {'application/json': {schema: {'x-ts-type': Incidentes}}},
      },
    },
  })
  async getIncidentesOrgByTipo(@param.path.string('tipo_reporte') tipo_reporte : string) : Promise<Incidentes[]> {
    return await this.incidentesRepository.getIncidentesOrgByTipo(tipo_reporte);
  }


  @get('/incidentesByTipoWithDelegacion/{tipo_reporte}&{delegacion}&{colonia}&{fecha}', {
    responses: {
      '200': {
        description: 'Incidentes model instance',
        content: {'application/json': {schema: {'x-ts-type': Incidentes}}},
      },
    },
  })
  async getIncidentesOrgWithDelAndColAndFecha(@param.path.string('tipo_reporte') tipo_reporte : string, @param.path.string('delegacion') delegacion:string, @param.path.string('colonia') colonia : string, @param.path.string('fecha') fecha:string) : Promise<Incidentes[]> {
    return await this.incidentesRepository.getIncidentesOrgWithDelAndColAndFecha(tipo_reporte, delegacion, colonia, fecha);
  }

  @get('/incidentesAdmin/{delegacion}&{colonia}&{fecha}', {
    responses: {
      '200': {
        description: 'Incidentes model instance',
        content: {'application/json': {schema: {'x-ts-type': Incidentes}}},
      },
    },
  })
  async getIncidentesAdmin(@param.path.string('delegacion') delegacion:string, @param.path.string('colonia') colonia : string, @param.path.string('fecha') fecha:string) : Promise<Incidentes[]> {
    return await this.incidentesRepository.getIncidentesAdmin(delegacion, colonia, fecha);
  }

  @get('/incidentes/{id}', {
    responses: {
      '200': {
        description: 'Incidentes model instance',
        content: {'application/json': {schema: {'x-ts-type': Incidentes}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Incidentes> {
    return await this.incidentesRepository.findById(id);
  }

  @patch('/incidentes/{id}', {
    responses: {
      '204': {
        description: 'Incidentes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() incidentes: Incidentes,
  ): Promise<void> {
    await this.incidentesRepository.updateById(id, incidentes);
  }

  @put('/incidentes/{id}', {
    responses: {
      '204': {
        description: 'Incidentes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() incidentes: Incidentes,
  ): Promise<void> {
    await this.incidentesRepository.replaceById(id, incidentes);
  }

  @del('/incidentes/{id}', {
    responses: {
      '204': {
        description: 'Incidentes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.incidentesRepository.deleteById(id);
  }
}
