import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
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
