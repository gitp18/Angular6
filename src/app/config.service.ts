import { Injectable } from '@angular/core';
import { configData } from './configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
	config = configData;
  constructor() { }
	getConfig(){
		return this.config;
	}
}
