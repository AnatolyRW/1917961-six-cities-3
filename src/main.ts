import 'reflect-metadata';
import { Container } from 'inversify';
import AppLication from './app/application.js';
import { ConfigInterface } from './common/config/config.interface.js';
import ConfigService from './common/config/config.service.js';
import { LoggerInterface } from './common/logger/logger.interface.js';
import LoggerService from './common/logger/logger.service.js';
import { Component } from './types/component.types.js';

const applicationContainer = new Container();
applicationContainer.bind<AppLication>(Component.Application).to(AppLication).inSingletonScope();
applicationContainer.bind<LoggerInterface>(Component.LoggerInterface).to(LoggerService).inSingletonScope();
applicationContainer.bind<ConfigInterface>(Component.ConfigInterface).to(ConfigService).inSingletonScope();

const aplication = applicationContainer.get<AppLication>(Component.Application);
await aplication.init();
