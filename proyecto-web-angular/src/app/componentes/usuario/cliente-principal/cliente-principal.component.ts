import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { TranslateService } from '@ngx-translate/core';
import { GrafUsuarioPrincService } from "../../../services/grafica/graf-usuario-princ.service";
import { ActivatedRoute } from '@angular/router';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cliente-principal',
  templateUrl: './cliente-principal.component.html',
  styleUrls: ['./cliente-principal.component.scss']
})
export class ClientePrincipalComponent implements OnInit {
  name = 'Angular 5';
  lat:any;
  lng:any;
  
  public activeLang = 'es';
  show:boolean = false;
  toggleCollapse() {
    this.show = !this.show
  }

  public pieChartLabels = ['Agua', 'Luz'];
  public pieChartData = [1000, 1000];
  public pieChartType = 'pie';
  public count;
  count_agua:number = 0;
  count_luz:number = 0;
  
  
  /*public lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Reportes de Agua' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Reportes de Luz' }
  ];
  public lineChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'July'];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'white',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'blue',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(237, 113, 113,0.2)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;*/

  constructor(public grafUsuarioPrincService: GrafUsuarioPrincService, private translate:TranslateService, private route:ActivatedRoute) {
    this.translate.setDefaultLang('es');
    if (navigator)
    {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }

    this.getGrafData("luz");
    //this.count_luz = this.count;
    this.getGrafData("agua");
    //this.count_agua = this.count;
    
    console.log("c: "+this.count_agua);
    this.pieChartData = [this.count_agua, this.count_agua];
   }

  ngOnInit() {
    
  }

  /*public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 1; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }

  private generateNumber(i: number) {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public hideOne() {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }

  public pushOne() {
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);
  }

  public changeColor() {
    this.lineChartColors[1].borderColor = 'green';
    this.lineChartColors[1].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel() {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
    // this.chart.update();
  }*/

  public  cambiarLenguaje(lang){
    this.activeLang = lang;
    this.translate.use(lang);
  }

  getGrafData(tipo_reporte:string)
  {
    this.count = [];
    this.grafUsuarioPrincService.getGrafData(tipo_reporte).subscribe((data:{}) => {
      console.log(data);
      this.count = Object.keys(data).length;
      console.log("count: "+typeof(this.count));
      console.log("count: "+this.count);
      if (tipo_reporte == "luz")
      {
        this.count_luz= this.count;
        console.log(tipo_reporte+" "+typeof(this.count_luz));
        console.log(tipo_reporte+" "+this.count_luz);
      }
      else if (tipo_reporte == "agua")
      {
        this.count_agua = this.count;
        console.log(tipo_reporte+" "+typeof(this.count_agua));
        console.log(tipo_reporte+" "+this.count_agua);
      }
      
      
      console.log(tipo_reporte+" "+typeof(this.count_agua));
      console.log(tipo_reporte+" "+this.count_agua);
    })
    console.log("asignacion_funcion2: "+typeof(this.count_luz));
    console.log("asignacion_funcion2: "+this.count_luz);
  }
}
