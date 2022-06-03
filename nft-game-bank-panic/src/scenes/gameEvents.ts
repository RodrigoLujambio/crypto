import Phaser from "phaser";
//event types
export const GET_PLAYER = 'GET_PLAYER'
export const LOGIN_PLAYER = 'LOGIN_PLAYER'
export const UPDATE_SCORE = 'UPDATE_SCORE'
export const GAME_OVER = 'GAME_OVER'
export const STARTGAME = 'STARTGAME'
export const gameEvents = new Phaser.Events.EventEmitter(); 