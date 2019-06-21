import { FormControl, FormGroup, Validators } from '@angular/forms';

export class Reporte {
    
    constructor (
        public ine?:string,
        public comentario?:string,
        public delegacion?:string,
        public colonia?:string,
        public calle?:string,
        public numero?:number,
        public fecha?:string
    )
    {
        
    }
}