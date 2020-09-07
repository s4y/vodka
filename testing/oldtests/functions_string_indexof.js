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

// test: functions_string_indexof
/*
string index-of, several cases. 1. finds the one-char string 2. fdoesn't find a one-char string 3. finds a multi-char string 4. doesn't find a multi-char string that has a partial match with the string
*/

	// |Shift|~|s|t|r|i|n|g|-|i|n|d|e|x|-|o|f|Tab|Shift|$|Shift|Enter|h|e|l|l|o|Tab|Enter|Shift|$|Shift|Enter|e|Tab|Enter|Shift|Tab|Shift|~|d|Backspace|s|t|r|i|n|g|-|i|n|d|e|x|-|o|f|Tab|Shift|$|Shift|Enter|h|e|l|l|o|Tab|Enter|Shift|$|Shift|Enter|x|Tab|Enter|Shift|Tab|Shift|~|s|t|r|i|n|g|-|i|n|d|e|x|-|o|f|Shift|Tab|Shift|$|Shift|Enter|h|e|l|l|o|Tab|Enter|Shift|$|Shift|Enter|e|l|Tab|Enter|Shift|Tab|Shift|~|s|t|r|i|n|g|-|i|n|d|e|x|-|o|f|Tab|Shift|$|h|Backspace|Shift|Enter|h|e|l|l|o|Tab|Enter|Shift|$|Shift|Enter|o|p|e|Tab|Enter|Shift|Tab|ArrowUp|ArrowUp|ArrowUp|Shift|Enter|ArrowDown|Shift|Enter|ArrowDown|Shift|Enter|ArrowDown|Shift|Enter
	
var harness = require('../testharness');

var testactions = [];

testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Backquote'
	});
testactions.push({
		type:'keyup',
		code:'Backquote'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'KeyS'
	});
testactions.push({
		type:'keydown',
		code:'KeyT'
	});
testactions.push({
		type:'keyup',
		code:'KeyS'
	});
testactions.push({
		type:'keyup',
		code:'KeyT'
	});
testactions.push({
		type:'keydown',
		code:'KeyR'
	});
testactions.push({
		type:'keydown',
		code:'KeyI'
	});
testactions.push({
		type:'keyup',
		code:'KeyR'
	});
testactions.push({
		type:'keyup',
		code:'KeyI'
	});
testactions.push({
		type:'keydown',
		code:'KeyN'
	});
testactions.push({
		type:'keydown',
		code:'KeyG'
	});
testactions.push({
		type:'keyup',
		code:'KeyN'
	});
testactions.push({
		type:'keyup',
		code:'KeyG'
	});
testactions.push({
		type:'keydown',
		code:'Minus'
	});
testactions.push({
		type:'keyup',
		code:'Minus'
	});
testactions.push({
		type:'keydown',
		code:'KeyI'
	});
testactions.push({
		type:'keyup',
		code:'KeyI'
	});
testactions.push({
		type:'keydown',
		code:'KeyN'
	});
testactions.push({
		type:'keydown',
		code:'KeyD'
	});
testactions.push({
		type:'keyup',
		code:'KeyN'
	});
testactions.push({
		type:'keyup',
		code:'KeyD'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'KeyX'
	});
testactions.push({
		type:'keyup',
		code:'KeyX'
	});
testactions.push({
		type:'keydown',
		code:'Minus'
	});
testactions.push({
		type:'keyup',
		code:'Minus'
	});
testactions.push({
		type:'keydown',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'KeyF'
	});
testactions.push({
		type:'keyup',
		code:'KeyO'
	});
testactions.push({
		type:'keyup',
		code:'KeyF'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'KeyH'
	});
testactions.push({
		type:'keyup',
		code:'KeyH'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'KeyL'
	});
testactions.push({
		type:'keyup',
		code:'KeyL'
	});
testactions.push({
		type:'keydown',
		code:'KeyL'
	});
testactions.push({
		type:'keyup',
		code:'KeyL'
	});
testactions.push({
		type:'keydown',
		code:'KeyO'
	});
testactions.push({
		type:'keyup',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Backquote'
	});
testactions.push({
		type:'keyup',
		code:'Backquote'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'KeyD'
	});
testactions.push({
		type:'keyup',
		code:'KeyD'
	});
testactions.push({
		type:'keydown',
		code:'Backspace'
	});
testactions.push({
		type:'keyup',
		code:'Backspace'
	});
testactions.push({
		type:'keydown',
		code:'KeyS'
	});
testactions.push({
		type:'keyup',
		code:'KeyS'
	});
testactions.push({
		type:'keydown',
		code:'KeyT'
	});
testactions.push({
		type:'keyup',
		code:'KeyT'
	});
testactions.push({
		type:'keydown',
		code:'KeyR'
	});
testactions.push({
		type:'keydown',
		code:'KeyI'
	});
testactions.push({
		type:'keyup',
		code:'KeyR'
	});
testactions.push({
		type:'keyup',
		code:'KeyI'
	});
testactions.push({
		type:'keydown',
		code:'KeyN'
	});
testactions.push({
		type:'keydown',
		code:'KeyG'
	});
testactions.push({
		type:'keyup',
		code:'KeyN'
	});
testactions.push({
		type:'keyup',
		code:'KeyG'
	});
testactions.push({
		type:'keydown',
		code:'Minus'
	});
testactions.push({
		type:'keyup',
		code:'Minus'
	});
testactions.push({
		type:'keydown',
		code:'KeyI'
	});
testactions.push({
		type:'keyup',
		code:'KeyI'
	});
testactions.push({
		type:'keydown',
		code:'KeyN'
	});
testactions.push({
		type:'keydown',
		code:'KeyD'
	});
testactions.push({
		type:'keyup',
		code:'KeyN'
	});
testactions.push({
		type:'keyup',
		code:'KeyD'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'KeyX'
	});
testactions.push({
		type:'keyup',
		code:'KeyX'
	});
testactions.push({
		type:'keydown',
		code:'Minus'
	});
testactions.push({
		type:'keyup',
		code:'Minus'
	});
testactions.push({
		type:'keydown',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'KeyF'
	});
testactions.push({
		type:'keyup',
		code:'KeyO'
	});
testactions.push({
		type:'keyup',
		code:'KeyF'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'KeyH'
	});
testactions.push({
		type:'keyup',
		code:'KeyH'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'KeyL'
	});
testactions.push({
		type:'keyup',
		code:'KeyL'
	});
testactions.push({
		type:'keydown',
		code:'KeyL'
	});
testactions.push({
		type:'keyup',
		code:'KeyL'
	});
testactions.push({
		type:'keydown',
		code:'KeyO'
	});
testactions.push({
		type:'keyup',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'KeyX'
	});
testactions.push({
		type:'keyup',
		code:'KeyX'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Backquote'
	});
testactions.push({
		type:'keyup',
		code:'Backquote'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'KeyS'
	});
testactions.push({
		type:'keyup',
		code:'KeyS'
	});
testactions.push({
		type:'keydown',
		code:'KeyT'
	});
testactions.push({
		type:'keyup',
		code:'KeyT'
	});
testactions.push({
		type:'keydown',
		code:'KeyR'
	});
testactions.push({
		type:'keydown',
		code:'KeyI'
	});
testactions.push({
		type:'keyup',
		code:'KeyR'
	});
testactions.push({
		type:'keyup',
		code:'KeyI'
	});
testactions.push({
		type:'keydown',
		code:'KeyN'
	});
testactions.push({
		type:'keydown',
		code:'KeyG'
	});
testactions.push({
		type:'keyup',
		code:'KeyN'
	});
testactions.push({
		type:'keyup',
		code:'KeyG'
	});
testactions.push({
		type:'keydown',
		code:'Minus'
	});
testactions.push({
		type:'keyup',
		code:'Minus'
	});
testactions.push({
		type:'keydown',
		code:'KeyI'
	});
testactions.push({
		type:'keyup',
		code:'KeyI'
	});
testactions.push({
		type:'keydown',
		code:'KeyN'
	});
testactions.push({
		type:'keydown',
		code:'KeyD'
	});
testactions.push({
		type:'keyup',
		code:'KeyN'
	});
testactions.push({
		type:'keyup',
		code:'KeyD'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'KeyX'
	});
testactions.push({
		type:'keyup',
		code:'KeyX'
	});
testactions.push({
		type:'keydown',
		code:'Minus'
	});
testactions.push({
		type:'keyup',
		code:'Minus'
	});
testactions.push({
		type:'keydown',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'KeyF'
	});
testactions.push({
		type:'keyup',
		code:'KeyO'
	});
testactions.push({
		type:'keyup',
		code:'KeyF'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'KeyH'
	});
testactions.push({
		type:'keyup',
		code:'KeyH'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'KeyL'
	});
testactions.push({
		type:'keyup',
		code:'KeyL'
	});
testactions.push({
		type:'keydown',
		code:'KeyL'
	});
testactions.push({
		type:'keyup',
		code:'KeyL'
	});
testactions.push({
		type:'keydown',
		code:'KeyO'
	});
testactions.push({
		type:'keyup',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'KeyL'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyL'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Backquote'
	});
testactions.push({
		type:'keyup',
		code:'Backquote'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'KeyS'
	});
testactions.push({
		type:'keyup',
		code:'KeyS'
	});
testactions.push({
		type:'keydown',
		code:'KeyT'
	});
testactions.push({
		type:'keyup',
		code:'KeyT'
	});
testactions.push({
		type:'keydown',
		code:'KeyR'
	});
testactions.push({
		type:'keydown',
		code:'KeyI'
	});
testactions.push({
		type:'keyup',
		code:'KeyR'
	});
testactions.push({
		type:'keyup',
		code:'KeyI'
	});
testactions.push({
		type:'keydown',
		code:'KeyN'
	});
testactions.push({
		type:'keydown',
		code:'KeyG'
	});
testactions.push({
		type:'keyup',
		code:'KeyN'
	});
testactions.push({
		type:'keyup',
		code:'KeyG'
	});
testactions.push({
		type:'keydown',
		code:'Minus'
	});
testactions.push({
		type:'keyup',
		code:'Minus'
	});
testactions.push({
		type:'keydown',
		code:'KeyI'
	});
testactions.push({
		type:'keyup',
		code:'KeyI'
	});
testactions.push({
		type:'keydown',
		code:'KeyN'
	});
testactions.push({
		type:'keydown',
		code:'KeyD'
	});
testactions.push({
		type:'keyup',
		code:'KeyN'
	});
testactions.push({
		type:'keyup',
		code:'KeyD'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'KeyX'
	});
testactions.push({
		type:'keyup',
		code:'KeyX'
	});
testactions.push({
		type:'keydown',
		code:'Minus'
	});
testactions.push({
		type:'keyup',
		code:'Minus'
	});
testactions.push({
		type:'keydown',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'KeyF'
	});
testactions.push({
		type:'keyup',
		code:'KeyO'
	});
testactions.push({
		type:'keyup',
		code:'KeyF'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'KeyH'
	});
testactions.push({
		type:'keyup',
		code:'KeyH'
	});
testactions.push({
		type:'keydown',
		code:'Backspace'
	});
testactions.push({
		type:'keyup',
		code:'Backspace'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'KeyH'
	});
testactions.push({
		type:'keyup',
		code:'KeyH'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'KeyL'
	});
testactions.push({
		type:'keyup',
		code:'KeyL'
	});
testactions.push({
		type:'keydown',
		code:'KeyL'
	});
testactions.push({
		type:'keyup',
		code:'KeyL'
	});
testactions.push({
		type:'keydown',
		code:'KeyO'
	});
testactions.push({
		type:'keyup',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'Digit4'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'KeyP'
	});
testactions.push({
		type:'keyup',
		code:'KeyO'
	});
testactions.push({
		type:'keydown',
		code:'KeyE'
	});
testactions.push({
		type:'keyup',
		code:'KeyP'
	});
testactions.push({
		type:'keyup',
		code:'KeyE'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keydown',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'Tab'
	});
testactions.push({
		type:'keyup',
		code:'ShiftRight'
	});
testactions.push({
		type:'keydown',
		code:'ArrowUp'
	});
testactions.push({
		type:'keyup',
		code:'ArrowUp'
	});
testactions.push({
		type:'keydown',
		code:'ArrowUp'
	});
testactions.push({
		type:'keyup',
		code:'ArrowUp'
	});
testactions.push({
		type:'keydown',
		code:'ArrowUp'
	});
testactions.push({
		type:'keyup',
		code:'ArrowUp'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'ArrowDown'
	});
testactions.push({
		type:'keyup',
		code:'ArrowDown'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'ArrowDown'
	});
testactions.push({
		type:'keyup',
		code:'ArrowDown'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'ArrowDown'
	});
testactions.push({
		type:'keyup',
		code:'ArrowDown'
	});
testactions.push({
		type:'keydown',
		code:'ShiftLeft'
	});
testactions.push({
		type:'keydown',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'Enter'
	});
testactions.push({
		type:'keyup',
		code:'ShiftLeft'
	});

harness.runTest(testactions, 'direct');