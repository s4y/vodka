//startgnumessage//
/*
This file is part of Vodka.

Vodka is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Vodka is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Vodka.  If not, see <https://www.gnu.org/licenses/>.
*/
//endgnumessage//
//testname// functions_async_reset
//startdescription//
/*
somewhat elaborate test to make sure that reset works: I have to cram an expectation into a list in order to make sure it doesn't ff right away, then I have to ff it by carring it, then I have to reset it inside a begin so it doesn't ff again before I can screenshot it. Not sure it's the best way but it's... a way
*/
//enddescription//
//testspec// |Shift|~|b|i|n|d|Shift|@|b|Shift|(|Shift|Tab|Enter|Shift|~|c|r|a|m|Shift|@|Backspace|Shift|~|s|e|t|-|i|m|m|e|d|i|a|t|e|Tab|Shift|~|f|f|-|w|i|t|h|Tab|Shift|*|Tab|Shift|#|Shift|Tab|Shift|~|Backspace|Shift|&| |a|Enter|Shift| |Shift|~|Shift|+|Shift|@|a|Shift|#|1|Shift|Tab|Tab|Tab|Tab|Shift|@|b|Shift|Tab|Enter|ArrowRight|Shift|~|c|a|r|Shift|@|b|Shift|Tab|Enter|ArrowRight|Shift|~|b|e|g|i|n|Shift| |Tab|Shift|~|r|e|s|e|t|Shift|@|Backspace|Shift|~|c|a|r|Shift|@|b|Shift|Tab|Tab|Shift|#|Shift|Tab|Enter
//starttest//
var harness = require('../testharness');

var testactions = [];

testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyB'});
		testactions.push({type:'keyup',code:'KeyB'});
testactions.push({type:'keydown',code:'KeyI'});
		testactions.push({type:'keyup',code:'KeyI'});
testactions.push({type:'keydown',code:'KeyN'});
testactions.push({type:'keydown',code:'KeyD'});
		testactions.push({type:'keyup',code:'KeyN'});
		testactions.push({type:'keyup',code:'KeyD'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit2'});
		testactions.push({type:'keyup',code:'Digit2'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyB'});
		testactions.push({type:'keyup',code:'KeyB'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Digit9'});
		testactions.push({type:'keyup',code:'Digit9'});
		testactions.push({type:'keyup',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Enter'});
		testactions.push({type:'keyup',code:'Enter'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyC'});
		testactions.push({type:'keyup',code:'KeyC'});
testactions.push({type:'keydown',code:'KeyR'});
testactions.push({type:'keydown',code:'KeyA'});
		testactions.push({type:'keyup',code:'KeyR'});
testactions.push({type:'keydown',code:'KeyM'});
		testactions.push({type:'keyup',code:'KeyA'});
		testactions.push({type:'keyup',code:'KeyM'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit2'});
		testactions.push({type:'keyup',code:'Digit2'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backspace'});
		testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'Backspace'});
		testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyS'});
testactions.push({type:'keydown',code:'KeyE'});
testactions.push({type:'keydown',code:'KeyT'});
		testactions.push({type:'keyup',code:'KeyS'});
		testactions.push({type:'keyup',code:'KeyE'});
testactions.push({type:'keydown',code:'Minus'});
		testactions.push({type:'keyup',code:'KeyT'});
		testactions.push({type:'keyup',code:'Minus'});
testactions.push({type:'keydown',code:'KeyI'});
		testactions.push({type:'keyup',code:'KeyI'});
testactions.push({type:'keydown',code:'KeyM'});
		testactions.push({type:'keyup',code:'KeyM'});
testactions.push({type:'keydown',code:'KeyM'});
testactions.push({type:'keydown',code:'KeyE'});
		testactions.push({type:'keyup',code:'KeyM'});
		testactions.push({type:'keyup',code:'KeyE'});
testactions.push({type:'keydown',code:'KeyD'});
		testactions.push({type:'keyup',code:'KeyD'});
testactions.push({type:'keydown',code:'KeyI'});
testactions.push({type:'keydown',code:'KeyA'});
		testactions.push({type:'keyup',code:'KeyI'});
testactions.push({type:'keydown',code:'KeyT'});
		testactions.push({type:'keyup',code:'KeyA'});
testactions.push({type:'keydown',code:'KeyE'});
		testactions.push({type:'keyup',code:'KeyT'});
		testactions.push({type:'keyup',code:'KeyE'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyF'});
		testactions.push({type:'keyup',code:'KeyF'});
testactions.push({type:'keydown',code:'KeyF'});
		testactions.push({type:'keyup',code:'KeyF'});
testactions.push({type:'keydown',code:'Minus'});
		testactions.push({type:'keyup',code:'Minus'});
testactions.push({type:'keydown',code:'KeyW'});
testactions.push({type:'keydown',code:'KeyI'});
		testactions.push({type:'keyup',code:'KeyW'});
		testactions.push({type:'keyup',code:'KeyI'});
testactions.push({type:'keydown',code:'KeyT'});
		testactions.push({type:'keyup',code:'KeyT'});
testactions.push({type:'keydown',code:'KeyH'});
		testactions.push({type:'keyup',code:'KeyH'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Digit8'});
		testactions.push({type:'keyup',code:'ShiftLeft'});
		testactions.push({type:'keyup',code:'Digit8'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit3'});
		testactions.push({type:'keyup',code:'Digit3'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backspace'});
		testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'Backspace'});
		testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Digit7'});
		testactions.push({type:'keyup',code:'Digit7'});
		testactions.push({type:'keyup',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Space'});
testactions.push({type:'keydown',code:'KeyA'});
		testactions.push({type:'keyup',code:'Space'});
		testactions.push({type:'keyup',code:'KeyA'});
testactions.push({type:'keydown',code:'Enter'});
		testactions.push({type:'keyup',code:'Enter'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Space'});
		testactions.push({type:'keyup',code:'Space'});
		testactions.push({type:'keyup',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Equal'});
		testactions.push({type:'keyup',code:'Equal'});
		testactions.push({type:'keyup',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit2'});
		testactions.push({type:'keyup',code:'Digit2'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyA'});
		testactions.push({type:'keyup',code:'KeyA'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit3'});
		testactions.push({type:'keyup',code:'ShiftRight'});
		testactions.push({type:'keyup',code:'Digit3'});
testactions.push({type:'keydown',code:'Digit1'});
		testactions.push({type:'keyup',code:'Digit1'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit2'});
		testactions.push({type:'keyup',code:'Digit2'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyB'});
		testactions.push({type:'keyup',code:'KeyB'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Enter'});
		testactions.push({type:'keyup',code:'Enter'});
testactions.push({type:'keydown',code:'ArrowRight'});
		testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyC'});
		testactions.push({type:'keyup',code:'KeyC'});
testactions.push({type:'keydown',code:'KeyA'});
testactions.push({type:'keydown',code:'KeyR'});
		testactions.push({type:'keyup',code:'KeyA'});
		testactions.push({type:'keyup',code:'KeyR'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit2'});
		testactions.push({type:'keyup',code:'Digit2'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyB'});
		testactions.push({type:'keyup',code:'KeyB'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Enter'});
		testactions.push({type:'keyup',code:'Enter'});
testactions.push({type:'keydown',code:'ArrowRight'});
		testactions.push({type:'keyup',code:'ArrowRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyB'});
		testactions.push({type:'keyup',code:'KeyB'});
testactions.push({type:'keydown',code:'KeyE'});
		testactions.push({type:'keyup',code:'KeyE'});
testactions.push({type:'keydown',code:'KeyG'});
		testactions.push({type:'keyup',code:'KeyG'});
testactions.push({type:'keydown',code:'KeyI'});
		testactions.push({type:'keyup',code:'KeyI'});
testactions.push({type:'keydown',code:'KeyN'});
		testactions.push({type:'keyup',code:'KeyN'});
testactions.push({type:'keydown',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Space'});
		testactions.push({type:'keyup',code:'Space'});
		testactions.push({type:'keyup',code:'ShiftLeft'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyR'});
testactions.push({type:'keydown',code:'KeyE'});
		testactions.push({type:'keyup',code:'KeyR'});
		testactions.push({type:'keyup',code:'KeyE'});
testactions.push({type:'keydown',code:'KeyS'});
testactions.push({type:'keydown',code:'KeyE'});
testactions.push({type:'keydown',code:'KeyT'});
		testactions.push({type:'keyup',code:'KeyS'});
		testactions.push({type:'keyup',code:'KeyE'});
		testactions.push({type:'keyup',code:'KeyT'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit2'});
		testactions.push({type:'keyup',code:'Digit2'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backspace'});
		testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'Backspace'});
		testactions.push({type:'keyup',code:'Backspace'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Backquote'});
		testactions.push({type:'keyup',code:'Backquote'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyC'});
		testactions.push({type:'keyup',code:'KeyC'});
testactions.push({type:'keydown',code:'KeyA'});
testactions.push({type:'keydown',code:'KeyR'});
		testactions.push({type:'keyup',code:'KeyA'});
		testactions.push({type:'keyup',code:'KeyR'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit2'});
		testactions.push({type:'keyup',code:'Digit2'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'KeyB'});
		testactions.push({type:'keyup',code:'KeyB'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Digit3'});
		testactions.push({type:'keyup',code:'Digit3'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Tab'});
		testactions.push({type:'keyup',code:'Tab'});
		testactions.push({type:'keyup',code:'ShiftRight'});
testactions.push({type:'keydown',code:'Enter'});
		testactions.push({type:'keyup',code:'Enter'});

harness.runTestNew(testactions, 'direct');
//endtest//
