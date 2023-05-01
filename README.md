# Regular Expression Tutorial
Regular Expression(Regex) is a tool in programming  used for pattern matching and minpulaitons of strings. It can be used to search and replace specific information from strings with much greater precision compared to literal string which only apply to the one character refered to specifically.


## Summary
The regex I would be showcasing today is used check if a string of characters matches the pattern of email address

<code>const emailRegex =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const testEmail1 = `john.doe_123@example.com`;

console.log(emailRegex.test(testEmail1));</code>
In this instance, the testEmail is valide given that it follows the standard of the criteria given above

<code> const emailRegex =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const testEmail2 = `JohnWayne123`;


console.log(emailRegex.test(testEmail1)); </code>
In this instance, the testEmail2 is not valid because it did not follow the standard criteria

In the following I would break down each components to give a better understanding as to how the expressions work


## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Flags](#flags)
- [Character Escapes](#character-escapes)

## Regex Components
<code>const emailRegex =  /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;</code>
### Anchors
The anchors are used to mark the beginning and the end of a regular expression
It starts with the ^ character in the beginning and ends with the $ character signal the end of the regex.
### Quantifiers
The quantifiers component made up the pattern matching portion of the regular expression
It can be denote with the sintax //Regex.match(String);

The following code is a demonstration
<code> const test = 'happytuesday';
const quantifers = /happy*/;
console.log(test.match(quantifers));</code>

In this example, we are using the /*/ universal quantifer to check if the above "test" string has string value that matches "happy",
and if it does, it would return the string test
### Grouping Constructs
The grouping constructs in this context  would be the () that is used to match parts of the hex value. 
<code>([a-z0-9_\.-]+)</code>
In this case, everything inside the () bracket is a matching pair that is captured. It means that ththis specific part of string must be matched in the regex pattern. This portion of the code captures the username portion of the email address which consists of one or more caracters in the set (lowercase letters, digits, underscore, period, or hyphen).

### Bracket Expressions
In regex, the bracket expressions are used to define a character set, which is a group of characters that can match a single character in the input string. Bracket expressions are denoted by [].
In the code: <code> ([a-z0-9_\.-]+)</code>, everything inside the [] is captured as a group that can be match as a single character in the input string. This allows users to specify multiple possible characters for a single position in the input string.
### Character Classes
The character classes in regular expressions are a set of character classes that are predefined, kind of like a group of variables associated to a character that are denoted by "\" followed by a specific character. It would be easier to explain as a demonstration.

For example:
"\d" repressent any digis from 0-9, which is equivalent to [0-9]
"\D" represents any non digits characters which is equivalent to [^0-9]
"\w" represents any word character that are alphanumeric characters indlucing underscores which is equivalent to [A-Za-z0-9_]

### The OR Operator
The Or operator in Regex is denoted with a "|". It is used to specify alternative patterns that can be matched within input string.

For example:
'Basketball|Soccer' would match a string of character that includes either the word apple or the world orange.
### Flags
The flags in regular expressions are single character options that control the behavior of the regex pattern during matching. 
*They can be specified after the closing delimiter of a regex or as the second argument.

Examples:
'g' is the global flag that enables the global search, it would find all instance of strings that matches the pattern in the code
'i' is the case insensitive flag that makes the regex pattern case insensitvie 
### Character Escapes
The character escapes in regex are used to denote special characters that have a specific meaning within the regex pattern that otherwise would be treated as a special characters.

Examples:
'\\' escapes the backslash itself, which is necessary when you want to include a literal bacslash in the pattern
'\n' represents a newline character.
'\t' represents a tab character
'\r' represent the return character
## Author
[Github](https://github.com/OppedRawen?tab=repositories) 
My name is David Yu, I'm a full stack developer who specialize in javascript development
