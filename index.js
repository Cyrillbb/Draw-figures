'use strict'

import { State } from './src/models/state';
import { Canvas } from './src/views/canvas';
import { Controller } from './src/controllers/controller';
import { Form } from './src/views/form';
import { ErrorModal } from './src/views/errorModal';
import { HelpWindow } from './src/views/helpWindow';

const controller = new Controller(new State(), new Form(), new Canvas(), new ErrorModal(), new HelpWindow());