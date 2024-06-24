import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';

interface MapInput{
  center: number[];
  zoom: number;
  minZoom: number;
  maxZoom: number;
}

interface pointDetails {
  point: number[];
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @Input() mapinput: MapInput = {
    "center": [ 13.8282, 80.5795 ],
    "zoom": 8,
    "minZoom": 3,
    "maxZoom": 18
  };

  @Input() pointdetails: pointDetails[] = [
    {
      point: [13.053864, 80.170521],
      title: "Job Chennai 1",
      description: "A general description 1"
    },
    {
      point: [13.057762, 80.218938],
      title: "Job Chennai 2",
      description: "A general description 2"
    },
    {
      point: [13.081928, 80.205066],
      title: "Job Chennai 3",
      description: "A general description 3"
    },
    {
      point: [13.059841, 80.231342],
      title: "Job Chennai 4",
      description: "A general description 4"
    },
    {
      point: [13.082838, 80.139977],
      title: "Job Chennai 5",
      description: "A general description 5"
    }
  ]


  @Input() sample: string = "Hello World";
  constructor() { }
  private map: any;

  private initMap(): void {
    console.log(this.pointdetails)
    if(typeof(this.mapinput) === 'string'){
      this.mapinput = JSON.parse(this.mapinput);
    }
    this.map = L.map('map', {
      center: this.mapinput.center as any,
      zoom: this.mapinput.zoom,
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: this.mapinput.maxZoom,
      minZoom: this.mapinput.minZoom,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    var locIcon = L.icon({
      iconUrl: 'https://modus-icons.trimble.com/modus-solid/svg/map-marker.svg',
  
      iconSize:     [38, 95], // size of the icon
      iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });

    if(typeof(this.pointdetails) === 'string'){
      this.pointdetails = JSON.parse(this.pointdetails);
    }

    this.pointdetails.forEach((point) => {
      var latLng = L.latLng(point.point[0], point.point[1]);
      var marker = L.marker(latLng, {icon: locIcon}).addTo(this.map);
      marker.bindPopup(`<h3>${point.title}</h3>${point.description}`).openPopup();
    });

  }

  ngAfterViewInit(): void { console.log(this.sample);this.initMap(); }
}
