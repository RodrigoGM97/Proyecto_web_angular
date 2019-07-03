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
import {Empleado} from '../models';
import {EmpleadoRepository} from '../repositories';

export class EmpleadoController {
  constructor(
    @repository(EmpleadoRepository)
    public empleadoRepository : EmpleadoRepository,
  ) {}

  @post('/empleados', {
    responses: {
      '200': {
        description: 'Empleado model instance',
        content: {'application/json': {schema: {'x-ts-type': Empleado}}},
      },
    },
  })
  async create(@requestBody() empleado: Empleado): Promise<Empleado> {
    return await this.empleadoRepository.create(empleado);
  }

  @get('/empleados/count', {
    responses: {
      '200': {
        description: 'Empleado model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(@param.query.object('where', getWhereSchemaFor(Empleado)) where:Where<Empleado>,): Promise<Count> {
    return await this.empleadoRepository.count(where);
  }

  @get('/empleadosByOrg/{org}', {
    responses: {
      '200': {
        description: 'Empleado model instance',
        content: {'application/json': {schema: {'x-ts-type': Empleado}}},
      },
    },
  })
  async findByOrg(@param.path.string('org') organizacion : string): Promise<Empleado[]> {
    return await this.empleadoRepository.findByOrg(organizacion);
  }

  @get('/empleados/admin/{org}', {
    responses: {
      '200': {
        description: 'Empleado model instance',
        content: {'application/json': {schema: {'x-ts-type': Empleado}}},
      },
    },
  })
  async getEmpleados(@param.path.string('org') organizacion : string): Promise<Empleado[]> {
    return await this.empleadoRepository.getEmpleados(organizacion);
  }

  @get('/empleados', {
    responses: {
      '200': {
        description: 'Array of Empleado model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Empleado}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Empleado)) filter?: Filter<Empleado>,
  ): Promise<Empleado[]> {
    return await this.empleadoRepository.find(filter);
  }

  @patch('/empleados', {
    responses: {
      '200': {
        description: 'Empleado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() empleado: Empleado,
    @param.query.object('where', getWhereSchemaFor(Empleado)) where?: Where<Empleado>,
  ): Promise<Count> {
    return await this.empleadoRepository.updateAll(empleado, where);
  }

  @get('/empleados/{id}', {
    responses: {
      '200': {
        description: 'Empleado model instance',
        content: {'application/json': {schema: {'x-ts-type': Empleado}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Empleado> {
    return await this.empleadoRepository.findById(id);
  }

  @patch('/empleados/{id}', {
    responses: {
      '204': {
        description: 'Empleado PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() empleado: Empleado,
  ): Promise<void> {
    await this.empleadoRepository.updateById(id, empleado);
  }

  @put('/empleados/{id}', {
    responses: {
      '204': {
        description: 'Empleado PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() empleado: Empleado,
  ): Promise<void> {
    await this.empleadoRepository.replaceById(id, empleado);
  }

  @del('/empleados/{id}', {
    responses: {
      '204': {
        description: 'Empleado DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.empleadoRepository.deleteById(id);
  }
}
