import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Incidentes extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  curp: string;

  @property({
    type: 'string',
    required: true,
  })
  calle: string;

  @property({
    type: 'number',
    required: true,
  })
  numero: number;

  @property({
    type: 'string',
    required: true,
  })
  delegacion: string;

  @property({
    type: 'string',
    required: true,
  })
  colonia: string;

  @property({
    type: 'string',
  })
  comentario?: string;

  @property({
    type: 'string',
    required: true,
    default: "reportado",
  })
  estado: string;

  @property({
    type: 'string',
    required: true,
  })
  tipo_reporte: string;


  constructor(data?: Partial<Incidentes>) {
    super(data);
  }
}

export interface IncidentesRelations {
  // describe navigational properties here
}

export type IncidentesWithRelations = Incidentes & IncidentesRelations;
