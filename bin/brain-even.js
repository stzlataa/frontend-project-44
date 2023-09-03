#!/usr/bin/env node

import {greetings} from '../src/cli.js';

import {isEvenGame} from '../src/brainEven.js'

isEvenGame(greetings());
