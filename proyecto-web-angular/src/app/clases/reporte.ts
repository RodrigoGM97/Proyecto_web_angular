import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Reporte {
    
    constructor (
        public id?:number,
        public fecha?:string,
        public curp?:string,
        public calle?:string,
        public numero?:string,
        public delegacion?:string,
        public colonia?:string,
        public comentario?:string,
        public estado?:string,
        public tipo_reporte?:string
    )
    {
        
    }
}