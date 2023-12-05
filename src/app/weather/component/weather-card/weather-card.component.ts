import { Component, Input, OnInit } from '@angular/core';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent implements OnInit{
  @Input() weatherDatasInput!: WeatherDatas

  ngOnInit(): void {
      console.log('DADOS RECEBIDOS DO COMPONENT PAI - weather-card',
        this.weatherDatasInput

      )
  }

}
