import type {
	pageData,
	TaskData,
	ExampleData,
	FunctionsData,
	ConstantsData,
	AssessmentDataType,
} from '../interfaces/General';
import Task from '../structures/Task';
import Function from '../structures/Functions';
import Constant from '../structures/Constant';
import Assessment from '../structures/Assessment';

/**
 *
 */
export const baseURL = 'https://mohammadelhsn.github.io/';

/**
 *
 */
export const PAGEDATA: pageData[] = [
	{
		title: 'Assignments',
		description: 'Generated documentation for each assignment',
		numberOfEntries: 10,
	},
	{
		title: 'Labs',
		description: 'Generated documentation for each lab',
		numberOfEntries: 8,
	},
	{
		title: '💡 Examples',
		description:
			'Below are documented example programs that explore various C programming concepts and data structures:',
		numberOfEntries: 0,
	},
];

export const EXAMPLEDATA: ExampleData[] = [];

export const TopicsData = [
	{
		items: [
			'Arrays and Lists',
			'Stacks and Queues',
			'Linked Lists (Singly and Doubly)',
		],
		title: 'Linear Data Structures',
		eventKey: '0',
	},
	{
		items: [
			'Recursion',
			'Binary Trees & Binary Search Trees (BST)',
			'Hash Tables',
		],
		title: 'Non-Linear Structures & Techniques',
		eventKey: '1',
	},
	{
		items: ['Sorting Algorithms (Bubble, Merge, Quick)', 'Big-O Notation'],
		title: 'Algorithms & Complexity',
		eventKey: '2',
	},
];

export const TechData = [
	{
		bolded: 'Programming Language:',
		nonBolded: 'Python',
	},
	{
		bolded: 'Development Environment:',
		nonBolded: 'VS Code (preferred), Eclipse',
	},
	{
		bolded: 'Version Control:',
		nonBolded: 'Git & GitHub',
	},
];

export const LabData: AssessmentDataType[] = [
	new Assessment(
		'Lab 1',
		'elha7950_l01',
		[
			new Task(
				'List Origins',
				't01',
				'Displays the string of available food origins from the Food class.',
				['Use class-level static methods', 'Work with class constants'],
				`Origins: 
1 Canadian
2 Chinese
3 Indian
...`,
				['Python', 'Classes', 'Static Methods']
			),
			new Task(
				'Create Food Object',
				't02',
				'Creates a Food object and displays its string representation.',
				['Use constructors', 'Print object state'],
				`Food(Ravioli, 7, vegetarian: True, 246 cal)`,
				['Python', 'Classes', 'Object Instantiation']
			),
			new Task(
				'Input Food From User',
				't03',
				'Gets food input from the user using the get_food function.',
				['Accept user input', 'Return a new Food object'],
				`Enter name: Samosa
Enter origin: 3
Is it vegetarian (True/False): True
Enter calories: 150
Result: Food(Samosa, 3, vegetarian: True, 150 cal)`,
				['Python', 'User Input', 'Objects']
			),
			new Task(
				'Read Food from String',
				't04',
				'Parses a string and creates a Food object using read_food.',
				['Parse formatted string', 'Create object from data'],
				`Input: "Spanakopita|5|True|260"
Output: Food(Spanakopita, 5, vegetarian: True, 260 cal)`,
				['Python', 'Parsing', 'Object Instantiation']
			),
			new Task(
				'Read Foods from File',
				't05',
				'Reads multiple food entries from a file and returns a list of Food objects.',
				['Handle file I/O', 'Build list of objects'],
				`File contains:
Pizza|1|False|400
Samosa|3|True|150

Output:
Food(Pizza, 1, vegetarian: False, 400 cal)
Food(Samosa, 3, vegetarian: True, 150 cal)`,
				['Python', 'File I/O', 'Lists']
			),
			new Task(
				'Write Foods to File',
				't06',
				'Writes Food objects to a file in a specific string format.',
				['Convert object to string format', 'Write to file'],
				`Output file:
Spanakopita|5|True|260`,
				['Python', 'File I/O', 'Serialization']
			),
			new Task(
				'Get Vegetarian Foods',
				't07',
				'Filters a list of Food objects to only include vegetarian ones.',
				['Filter objects based on attributes'],
				`Input list:
Food(Samosa, 3, vegetarian: True, 150 cal)
Food(Burger, 1, vegetarian: False, 500 cal)

Output:
Food(Samosa, 3, vegetarian: True, 150 cal)`,
				['Python', 'Filtering', 'Object Attributes']
			),
		],
		[
			new Function(
				'origins',
				'Food.origins() -> str',
				'Returns a string listing all food origin constants with labels.'
			),
			new Function(
				'get_food',
				'get_food() -> Food',
				'Prompts the user for food data and returns a Food object.'
			),
			new Function(
				'read_food',
				'read_food(line: str) -> Food',
				'Creates a Food object from a formatted string.'
			),
			new Function(
				'read_foods',
				'read_foods(fh: TextIO) -> list[Food]',
				'Reads lines from a file and returns a list of Food objects.'
			),
			new Function(
				'write_foods',
				'write_foods(fh: TextIO, foods: list[Food]) -> None',
				'Writes a list of Food objects to a file in string format.'
			),
			new Function(
				'get_vegetarian',
				'get_vegetarian(foods: list[Food]) -> list[Food]',
				'Returns a list of vegetarian Food objects from the input list.'
			),
		],
		[]
	),
	new Assessment(
		'Lab 2',
		'elha7950_l02',
		[
			new Task(
				'Stack Methods',
				't01',
				'Tests the core methods of the Stack class: `is_empty`, `push`, `pop`, and `peek`.',
				['Initialize stack', 'Test pushing and popping', 'Peek top value'],
				`Is_empty: True
Is_empty: False
Peeked 99
Peeked: 44
Popped: 44
...
Pushed: 99
Pushed: 22
Pushed: 33
...`,
				['Stack', 'Data Structures', 'Push/Pop']
			),
			new Task(
				'Array to Stack',
				't02',
				'Converts a list into a stack using `array_to_stack` utility.',
				['Transform array to stack', 'Use a helper function'],
				`Input: [11, 22, 33, 44]
Output Stack: [11, 22, 33, 44]`,
				['Stacks', 'Array Conversion', 'Python']
			),
			new Task(
				'Stack to Array',
				't03',
				'Converts a stack into a list using `stack_to_array`.',
				['Pop from stack', 'Append to array'],
				`Stack: [11, 22, 33, 44, 55]
Result Array: [11, 22, 33, 44, 55]`,
				['Stacks', 'Lists', 'Conversion']
			),
			new Task(
				'Generic Stack Test',
				't04',
				'Passes a sample stack into `stack_test`, which prints its contents.',
				['Call test function', 'Visualize stack elements'],
				`Output:
55
44
...
11`,
				['Stacks', 'Function Testing']
			),
			new Task(
				'Stack Test with Food',
				't05',
				'Reads Food objects from file and pushes them onto a stack before passing to `stack_test`.',
				['Read file', 'Push objects onto stack', 'Display stack'],
				`Input File: foods.txt
Stack:
Food(Pizza, ...)
Food(Samosa, ...)`,
				['Stacks', 'File I/O', 'Objects']
			),
		],
		[
			new Function(
				'array_to_stack',
				'array_to_stack(stack: Stack, source: list) -> None',
				'Pushes all values from a source list onto the given stack.'
			),
			new Function(
				'stack_to_array',
				'stack_to_array(stack: Stack, target: list) -> None',
				'Pops all values from the stack and appends them to a target list.'
			),
			new Function(
				'stack_test',
				'stack_test(stack: Stack) -> None',
				'Prints the contents of the stack by popping values without modifying the original.'
			),
		],
		[]
	),
	new Assessment(
		'Lab 3',
		'elha7950_l03',
		[
			new Task(
				'Queue Insert and Display',
				't01',
				'Reads Food objects from file and inserts them into a `Queue`, then prints the queue.',
				['Read from file', 'Insert into queue', 'Display queue'],
				'Queue contains: [Food(...), Food(...), ...]',
				['Queue', 'File Input', 'Data Structures']
			),
			new Task(
				'Queue Peek and Remove',
				't02',
				"Peeks and removes elements from a queue of Food objects until it's empty.",
				['Peek at front', 'Remove element', 'Loop until empty'],
				`The next value to be removed: Food(...)
The value removed: Food(...)`,
				['Queue', 'Dequeue Operation', 'Loops']
			),
			new Task(
				'Array to/from Queue + Test',
				't03',
				'Demonstrates use of utility functions to convert arrays to queues and vice versa, and then tests with `queue_test`.',
				['Convert between array and queue', 'Use test utility'],
				`Before array_to_queue
Array: [1,2,3,4,5]
Queue: Queue()
...
After pq_to_array
Array: [1,2,3,4,5]`,
				['Queue', 'Utilities', 'Testing']
			),
			new Task(
				'Priority Queue Insert + Peek',
				't04',
				'Inserts Food objects into a `Priority_Queue`, peeking at the top after each insert.',
				['Insert into priority queue', 'Peek after each insert'],
				`Top Priority Value: Food(...)`,
				['Priority Queue', 'Peek', 'Insert']
			),
			new Task(
				'Priority Queue Remove',
				't05',
				'Inserts Food objects into a `Priority_Queue`, then removes and prints each value in order of priority.',
				['Insert elements', 'Remove from queue', 'Display priority order'],
				`The removed value: Food(...)`,
				['Priority Queue', 'Remove', 'File Input']
			),
			new Task(
				'Array to/from Priority Queue + Test',
				't06',
				'Demonstrates use of utility functions to convert between an array and priority queue, and tests using `priority_queue_test`.',
				['Convert between array and priority queue', 'Test priority queue'],
				`After pq_to_array
Array: [1,2,3,4,5]`,
				['Priority Queue', 'Array Conversion', 'Utilities']
			),
		],
		[
			new Function(
				'array_to_queue',
				'array_to_queue(queue: Queue, source: list) -> None',
				'Inserts all values from a list into a queue.'
			),
			new Function(
				'queue_to_array',
				'queue_to_array(queue: Queue, target: list) -> None',
				'Removes all values from a queue and appends them to a list.'
			),
			new Function(
				'queue_test',
				'queue_test(source: list) -> None',
				'Tests queue functionality using given values.'
			),
			new Function(
				'array_to_pq',
				'array_to_pq(pq: Priority_Queue, source: list) -> None',
				'Inserts all values from a list into a priority queue.'
			),
			new Function(
				'pq_to_array',
				'pq_to_array(pq: Priority_Queue, target: list) -> None',
				'Removes all values from a priority queue and appends them to a list.'
			),
			new Function(
				'priority_queue_test',
				'priority_queue_test(source: list) -> None',
				'Tests priority queue functionality using given values.'
			),
		],
		[]
	),
	new Assessment(
		'Lab 4',
		'elha7950_l04',
		[
			new Task(
				'Food Class Key Handling',
				't01',
				'Verifies that the Food class handles `None` values appropriately when used as a key.',
				['Create Food object with None', 'Display output'],
				`Food(name='Spring Rolls', origin=1, is_vegetarian=None, calories=None)`,
				['Object Creation', 'Food Class', 'Key Testing']
			),
			new Task(
				'List._linear_search via find',
				't02',
				'Implements `_linear_search` as a helper in `List` class and uses it through `find` to locate a key.',
				['Implement private search method', 'Use find'],
				`Food(name='Lasagna', origin=7, ...)`,
				['Search', 'Linked List', 'Encapsulation']
			),
			new Task(
				'List insert, append, remove',
				't03',
				'Implements `insert`, `append`, and `remove` methods in the List class. Inserts and removes a food item.',
				['Add element', 'Remove element'],
				`[Food(...), Food(...), ...]`,
				['List Operations', 'Data Structures']
			),
			new Task(
				'List index, find, contains, count, max, min',
				't04',
				'Implements and tests key query and comparison operations in List class.',
				['Index search', 'Count matches', 'Find max/min'],
				`Index: 3
Find: Food(...)
Count: 1
Max: Food(...)
Min: Food(...)`,
				['List', 'Comparison', 'Search']
			),
			new Task(
				'List Get and Set Item',
				't05',
				'Implements `__getitem__` and `__setitem__` in List class. Replaces one Food with another using index.',
				['Get by index', 'Set by index'],
				`Get Item: Food(...)\nSet Item: Food(...)`,
				['List', 'Indexing', 'Overloading']
			),
			new Task(
				'Array/List Conversion Utilities',
				't06',
				'Implements `list_to_array` and `array_to_list` in utilities and converts between structures.',
				['Convert array to list', 'Convert list to array'],
				`[Food(...), Food(...), ...]`,
				['Conversion', 'Utility Functions']
			),
			new Task(
				'List Test Function',
				't07',
				'Implements `list_test` in utilities.py to test List with given Python list values.',
				['Pass values into List', 'Test structure'],
				`[h1, h2, h3, h4, h5]`,
				['Testing', 'Utility']
			),
		],
		[
			new Function(
				'list_to_array',
				'list_to_array(lst: List, target: list) -> None',
				'Moves all items from a Python list into a List structure.'
			),
			new Function(
				'array_to_list',
				'array_to_list(lst: List, source: list) -> None',
				'Moves all items from a List structure into a Python list.'
			),
			new Function(
				'list_test',
				'list_test(source: list) -> None',
				'Tests the List class by inserting elements from a list and printing output.'
			),
		],
		[]
	),
	new Assessment(
		'Lab 5',
		'elha7950_l05',
		[
			new Task(
				'Recursive Tree Function',
				't01',
				'Implements a recursive function using tree recursion: `f(x, y) = x - y` if `x < 0` or `y < 0`, otherwise `f(x, y) = f(x-1, y) + f(x, y-1)`.',
				['Tree recursion', 'Base and recursive cases'],
				`Result 1: -1
Result 2: 0
Result 3: 1
Result 4: 1
Result 5: 2
Result 6: 495`,
				['Recursion', 'Tree Recursion', 'Problem Solving']
			),
			new Task(
				'Greatest Common Denominator (GCD)',
				't02',
				'Implements recursive function to compute the GCD of two integers using the Euclidean algorithm.',
				['Euclidean recursion', 'Divisibility check'],
				`Result 1: 1
Result 2: 1
Result 3: 5
Result 4: 5
Result 5: -5
Result 6: -5`,
				['Recursion', 'Math', 'GCD']
			),
			new Task(
				'Vowel Count in String',
				't03',
				'Recursively counts the number of vowels in a string, case-insensitive.',
				['Check character against VOWELS', 'Recursive count'],
				`Result 1: 0
Result 2: 5
Result 3: 5
Result 4: 5
Result 5: 10
Result 6: 0
Result 7: 0`,
				['Recursion', 'String Processing', 'Counting']
			),
			new Task(
				'Exponentiation (to_power)',
				't04',
				'Implements recursive function for calculating `base^power`, handling positive, negative, and zero exponents.',
				['Base cases for power 0', 'Handle negative exponents'],
				`Result 1: 1
Result 2: 0
Result 3: 1
Result 4: 1
Result 5: 4
Result 6: 0.25
Result 7: 4
Result 8: 0.25
Result 9: -8`,
				['Recursion', 'Math', 'Exponentiation']
			),
			new Task(
				'Palindrome Check',
				't05',
				'Recursively determines whether a string is a palindrome. Ignores case and non-alphabetic characters.',
				['Filter non-letters', 'Base case 0 or 1', 'Recursively compare ends'],
				`Result 1: True
Result 2: True
Result 3: True
Result 4: True
Result 5: True
Result 6: False
Result 7: False`,
				['Recursion', 'String Validation', 'Palindrome']
			),
			new Task(
				'Bag to Set Conversion',
				't06',
				'Recursively converts a list (bag) into a set (no duplicates), preserving order of first occurrence.',
				['Remove duplicates', 'Recursive set construction'],
				`Result 1: []
Result 2: [99]
Result 3: [11, 22, 33, 44, 55]
Result 4: [55, 44, 33, 22, 11]
Result 5: [22, 33, 11, 55, 44]
Result 6: [99]
Result 7: [22, 33, 11, 55, 44]
Result 8: [4, 5, 3, 2]`,
				['Recursion', 'List Deduplication', 'Set Logic']
			),
		],
		[
			new Function(
				'recurse',
				'recurse(x: int, y: int) -> int',
				'Recursive tree function: `f(x, y) = x - y` if either x or y is negative; otherwise `f(x-1, y) + f(x, y-1)`.'
			),
			new Function(
				'gcd',
				'gcd(m: int, n: int) -> int',
				'Finds the greatest common divisor of two integers using recursion.'
			),
			new Function(
				'vowel_count',
				'vowel_count(s: str) -> int',
				'Counts the number of vowels in a string recursively.'
			),
			new Function(
				'to_power',
				'to_power(base: float, power: int) -> float',
				'Calculates the result of `base` raised to the `power` using recursion.'
			),
			new Function(
				'is_palindrome',
				'is_palindrome(s: str) -> bool',
				'Checks if a string is a palindrome using recursion. Ignores non-letter characters and case.'
			),
			new Function(
				'bag_to_set',
				'bag_to_set(bag: list) -> list',
				'Converts a list (bag) to a set by removing duplicates recursively.'
			),
		],
		[
			new Constant(
				'VOWELS',
				'"aeiou"',
				'String containing vowel characters used in vowel_count.'
			),
		]
	),
	new Assessment(
		'Lab 6',
		'elha7950_l06',
		[
			new Task(
				'Insert to Linked List',
				't01',
				'Tests inserting values into a linked list at the beginning, end, and middle using the `insert` method.',
				['Insert at index 0', 'Insert at count', 'Insert in middle'],
				`5
40
15`,
				['Linked Lists', 'Insertion']
			),
			new Task(
				'Linear Search in Linked List',
				't02',
				'Tests the `_linear_search` private helper method for locating a node and its predecessor in a linked list.',
				['Locate node', 'Track previous', 'Return index'],
				`Searching for 20:
Previous node: 30
Current node: 20
Index: 2`,
				['Linked Lists', 'Searching']
			),
			new Task(
				'Count, Max, Min in Linked List',
				't03',
				'Uses the `count`, `max`, and `min` methods on a linked list to count occurrences and find extreme values.',
				['Count elements', 'Find max', 'Find min'],
				`Count of 20: 2
Max value: 30
Min value: 10`,
				['Linked Lists', 'Aggregation', 'Counting']
			),
			new Task(
				'Find, Index, Contains in Linked List',
				't04',
				'Tests searching capabilities using `find`, `index`, and `__contains__` methods on a linked list.',
				['Check membership', 'Find index of element'],
				`Is 20 in the list: True
Index of 20: 0
Is 40 in the list: False`,
				['Linked Lists', 'Searching', 'Membership']
			),
			new Task(
				'Peek and Remove from Linked List',
				't05',
				'Tests the `peek` method for getting the front element and the `remove` method for deleting a value.',
				['Peek head', 'Remove node'],
				`Peek: 30
After removing 20:
30 10`,
				['Linked Lists', 'Access', 'Deletion']
			),
			new Task(
				'Get and Set Items by Index',
				't06',
				'Implements and tests the `__getitem__` and `__setitem__` methods to allow list-style access to linked list nodes.',
				['Indexing support', 'Element replacement'],
				`Element at index 1: 20
After setting element at index 1 to 50:
30 50 10`,
				['Linked Lists', 'Indexing', 'Mutation']
			),
		],
		[],
		[]
	),
	new Assessment(
		'Lab 7',
		'elha7950_l07',
		[
			new Task(
				'Compare ByLetter Objects',
				't01',
				'Compares two `ByLetter` instances to test the `==`, `>`, and `<=` operators.',
				['Equality comparison', 'Ordering comparison'],
				`True
False
True
False
False
True`,
				['BST', 'Custom Classes', 'Operator Overloading']
			),
			new Task(
				'Compare ByCode Objects',
				't02',
				'Tests comparison operators for `ByCode` instances with various code values.',
				['Equality comparison', 'Ordering by Morse code'],
				`True
False
True
False
False
True
True
False`,
				['BST', 'Custom Classes', 'Operator Overloading']
			),
			new Task(
				'Fill Letter BST',
				't03',
				'Uses the `fill_letter_bst` function to populate a BST with `ByLetter` values from DATA1 and prints the rightmost branch.',
				['Fill BST by letter', 'Traverse right branch'],
				`Z
Y
X
...`,
				['BST', 'Morse Code', 'Right Subtree Traversal']
			),
			new Task(
				'Fill Code BST',
				't04',
				'Uses `fill_code_bst` to populate a BST with `ByCode` values and traverses left and right biased paths.',
				['Fill BST by code', 'Test structure by path traversal'],
				`Z
Y
...
E
T
...`,
				['BST', 'Morse Code', 'Left/Right Subtree Traversal']
			),
			new Task(
				'Encode Morse',
				't05',
				"Encodes the string 'My name is Mohammad El-Hassan' using the letter-based BST.",
				['Encode letters to Morse', 'Use BST lookups'],
				`-- -.-- / -. .- -- . / .. ... / -- --- .... .- -- -- .- -.. / . .-.. -.... .- ... ... .- -.`,
				['BST', 'Morse Code', 'Encoding']
			),
			new Task(
				'Decode Morse',
				't06',
				'Decodes a Morse code string into English using a code-based BST.',
				['Decode Morse to letters', 'Use BST lookups'],
				`MY NAME IS MOHAMMAD ELHASSAN`,
				['BST', 'Morse Code', 'Decoding']
			),
		],
		[],
		[]
	),
	new Assessment(
		'Lab 8',
		'elha7950_l08',
		[
			new Task(
				'Hash Table Display',
				't01',
				'Implements the `hash_table` function to display a formatted table of hashed values and their slots without using a `Hash_Set`.',
				[
					'Display hashed values and corresponding slots',
					'Use built-in `hash()` function',
				],
				`Hash     Slot Key
-------- ---- --------------------
... (sample output with values and slots)`,
				['Hashing', 'Formatting', 'Printing', 'Modulo Operation']
			),
			new Task(
				'Call hash_table with Food objects',
				't02',
				'Reads 7 food objects from a file using `read_foods` and passes them to `hash_table` with 7 slots.',
				['Demonstrate hash_table with real data', 'Test slot distribution'],
				`Hash     Slot Key
-------- ---- --------------------
... (sample output with 7 foods)`,
				['File Reading', 'Hashing', 'Modular Arithmetic']
			),
			new Task(
				'Hash_Set insert and remove',
				't03',
				'Creates a `Hash_Set` with 7 slots, inserts five values, removes one value, and prints confirmation.',
				['Insert into Hash_Set', 'Remove from Hash_Set'],
				`Inserted 22
Inserted 33
Inserted 11
Inserted 55
Inserted 44
Removed: 22`,
				['Hash_Set', 'Insertion', 'Removal']
			),
			new Task(
				'Hash_Set debug output',
				't04',
				'Creates a `Hash_Set`, performs insertions and a removal, and calls `.debug()` to inspect internal structure.',
				['Print Hash_Set structure after modifications'],
				`(Expected output: Hash_Set structure by slot, e.g., slot 0: [33], ...)`,
				['Hash_Set', 'Debugging', 'Visualization']
			),
			new Task(
				'Hash_Set rehashing',
				't05',
				'Demonstrates `_rehash()` by comparing capacity before and after.',
				['Demonstrate rehashing mechanism', 'Observe resizing'],
				`Capacity before: 7
Capacity after: 13`,
				['Hash_Set', 'Rehashing', 'Capacity Expansion']
			),
		],
		[
			new Function(
				'hash_table',
				'hash_table(slots: int, values: list) -> None',
				"Prints a formatted hash table of values and their calculated slots using Python's built-in `hash()` function and modulo operation. Does not use a Hash_Set."
			),
		],
		[]
	),
];

export const AssignmentData: AssessmentDataType[] = [
	{
		name: 'Assignment 1',
		id: 'elha7950_a01',
		tasks: [
			{
				name: 'Remove Duplicates from List',
				id: 't01',
				description:
					'Removes all duplicate values from a list while preserving the order of the remaining elements.',
				objectives: [
					'Use loops and conditionals to track and remove duplicates',
					'Understand list mutation and index management',
				],
				sampleOutput: 'None (modifies the list in place)',
				skills: ['Python', 'Lists', 'Looping', 'In-Place Mutation'],
			},
			{
				name: 'List Subtraction',
				id: 't02',
				description:
					'Removes elements in the second list from the first list (in place).',
				objectives: [
					'Use helper functions to identify and remove elements',
					"Manipulate lists based on another list's values",
				],
				sampleOutput: 'None (modifies the list in place)',
				skills: [
					'Python',
					'List Manipulation',
					'Indexing',
					'In-Place Mutation',
				],
			},
			{
				name: 'Disemvowel a String',
				id: 't03',
				description:
					'Removes all vowels from a sentence while preserving spaces and letter casing.',
				objectives: [
					'Work with string manipulation and loops',
					'Use conditionals to filter characters',
				],
				sampleOutput:
					"'I think your book is an utter piece of garbage.' → ' thnk yr bk s n ttr pc f grbg.'",
				skills: ['Python', 'Strings', 'Looping', 'Conditionals'],
			},
			{
				name: 'Analyze File Character Types',
				id: 't04',
				description:
					'Analyzes an opened file and counts the number of uppercase, lowercase, digit, whitespace, and other characters.',
				objectives: [
					'Use file I/O operations and string methods to categorize characters',
					'Practice reading and analyzing file contents',
				],
				sampleOutput:
					'(Uppercase: 10, Lowercase: 25, Digits: 2, Whitespace: 8, Other: 5)',
				skills: ['Python', 'File I/O', 'Character Analysis', 'String Methods'],
			},
			{
				name: 'Leap Year Determination',
				id: 't05',
				description: 'Determines whether a given year is a leap year.',
				objectives: [
					'Apply conditional logic with modulus operators',
					'Understand leap year rules involving multiples of 4, 100, and 400',
				],
				sampleOutput: 'True (for year 1600)',
				skills: ['Python', 'Conditionals', 'Modulus Operator'],
			},
			{
				name: 'Validate Python Variable Name',
				id: 't06',
				description:
					'Determines if a string is a valid Python variable name based on naming rules.',
				objectives: [
					'Check string characters for validity',
					'Use string methods to test first character',
				],
				sampleOutput: "True (for 'var')",
				skills: ['Python', 'Strings', 'Conditionals'],
			},
			{
				name: 'Maximum Absolute Difference in List',
				id: 't07',
				description:
					'Returns the maximum absolute difference between adjacent values in a list without modifying the list.',
				objectives: [
					'Iterate through list indices carefully',
					'Compute absolute differences and track max value',
				],
				sampleOutput: '20 (from list [40, 20, 10, 5])',
				skills: ['Python', 'Lists', 'Looping', 'Math Operations'],
			},
			{
				name: 'Matrix Statistics',
				id: 't08',
				description:
					'Calculates smallest, largest, total, and average values in a 2D list (matrix).',
				objectives: [
					'Traverse nested lists (matrices)',
					'Aggregate statistics without modifying input',
				],
				sampleOutput:
					'(0, 9, 45, 4.5) for input [[0,1],[2,3],[4,5],[6,7],[8,9],[1,0]]',
				skills: ['Python', 'Nested Lists', 'Aggregation'],
			},
			{
				name: 'Matrix Addition',
				id: 't09',
				description:
					'Adds two matrices element-wise. Both matrices have the same dimensions.',
				objectives: [
					'Perform element-wise operations on nested lists',
					'Use assertions to validate input matrix dimensions',
				],
				sampleOutput:
					'[[6, 8], [10, 12], [5, 5]] (sum of [[0,1],[2,3],[4,5]] and [[6,7],[8,9],[1,0]])',
				skills: ['Python', 'Nested Lists', 'Matrix Arithmetic'],
			},
		],
		functions: [
			{
				functionName: 'clean_list',
				signature: 'clean_list(values: list) -> None',
				description:
					'Removes all duplicate values from a list, preserving order.',
			},
			{
				functionName: 'list_subtraction',
				signature: 'list_subtraction(minuend: list, subtrahend: list) -> None',
				description:
					'Modifies minuend to remove any elements that also exist in subtrahend.',
			},
			{
				functionName: 'dsmvwl',
				signature: 'dsmvwl(string: str) -> str',
				description:
					'Returns a version of the input string with all vowels removed.',
			},
			{
				functionName: 'file_analyze',
				signature: 'file_analyze(fv) -> tuple[int, int, int, int, int]',
				description:
					'Returns a tuple of character category counts from the file: uppercase, lowercase, digits, whitespace, and other.',
			},
			{
				functionName: 'is_leap_year',
				signature: 'is_leap_year(year: int) -> bool',
				description: 'Determines whether a given year is a leap year.',
			},
			{
				functionName: 'is_valid',
				signature: 'is_valid(name: str) -> bool',
				description:
					'Checks if a string is a valid Python variable name based on naming rules.',
			},
			{
				functionName: 'max_diff',
				signature: 'max_diff(a: list) -> int',
				description:
					'Returns the maximum absolute difference between adjacent values in a list.',
			},
			{
				functionName: 'matrix_stats',
				signature: 'matrix_stats(a: list) -> tuple[float, float, float, float]',
				description:
					'Calculates smallest, largest, total, and average values in a 2D list (matrix).',
			},
			{
				functionName: 'matrixes_add',
				signature: 'matrixes_add(a: list, b: list) -> list',
				description: 'Adds two matrices element-wise.',
			},
		],
	},
	{
		name: 'Assignment 2',
		id: 'elha7950_a02',
		tasks: [
			{
				name: 'Filter Foods by Origin',
				id: 't01',
				description:
					'Reads a list of foods from a file and filters foods based on their origin ID.',
				objectives: [
					'Read data from a file using helper functions',
					'Filter list items by an attribute',
					'Print results in a readable format',
				],
				sampleOutput: 'Food objects matching origin ID 7 printed one per line',
				skills: ['Python', 'File I/O', 'Filtering', 'Iteration'],
			},
			{
				name: 'Calculate Average Calories',
				id: 't02',
				description:
					'Reads a list of foods from a file and calculates the average calorie value.',
				objectives: [
					'Use helper functions to read structured data',
					'Calculate average of numerical attributes',
					'Print numeric output',
				],
				sampleOutput: 'Average calories: 247.35',
				skills: ['Python', 'File I/O', 'Aggregation', 'Statistics'],
			},
			{
				name: 'Sum Calories by Origin',
				id: 't03',
				description:
					'Reads foods from a file and calculates total calories for a specific origin.',
				objectives: [
					'Filter data by origin',
					'Sum calorie values',
					'Return and print numeric results',
				],
				sampleOutput: 'Total calories for origin 7: 12345',
				skills: ['Python', 'Data Filtering', 'Summation', 'File I/O'],
			},
			{
				name: 'Display Food Table',
				id: 't04',
				description:
					'Reads foods from a file and outputs them in a formatted table.',
				objectives: [
					'Read structured data from file',
					'Format and display tabular data',
					'Use helper functions effectively',
				],
				sampleOutput: 'Formatted table of food items printed',
				skills: ['Python', 'File I/O', 'String Formatting', 'Tabular Output'],
			},
			{
				name: 'Search Foods',
				id: 't05',
				description:
					'Searches for foods by origin, max calories, and other flags, then prints results.',
				objectives: [
					'Filter list by multiple criteria',
					'Use Boolean flags to refine search',
					'Iterate and print results',
				],
				sampleOutput:
					'List of Food objects matching criteria: origin=7, max calories=500, flag=True',
				skills: ['Python', 'Data Filtering', 'Conditional Logic', 'File I/O'],
			},
		],
		functions: [
			{
				functionName: 'read_foods',
				signature: 'read_foods(fv) -> list',
				description:
					'Reads food data from an open file and returns a list of Food objects.',
			},
			{
				functionName: 'by_origin',
				signature: 'by_origin(foods: list, origin: int) -> list',
				description: 'Filters a list of Food objects by their origin ID.',
			},
			{
				functionName: 'average_calories',
				signature: 'average_calories(foods: list) -> float',
				description: 'Calculates the average calories across all Food objects.',
			},
			{
				functionName: 'calories_by_origin',
				signature: 'calories_by_origin(foods: list, origin: int) -> int',
				description:
					'Returns the sum of calories for foods matching the origin.',
			},
			{
				functionName: 'food_table',
				signature: 'food_table(foods: list) -> None',
				description: 'Prints a formatted table of Food objects.',
			},
			{
				functionName: 'food_search',
				signature:
					'food_search(foods: list, origin: int, max_calories: int, flag: bool) -> list',
				description:
					'Returns a list of Food objects matching the origin, calories less than max_calories, and matching the flag.',
			},
		],
	},
	new Assessment(
		'Assignment 3',
		'elha7950_a03',
		[
			new Task(
				't01',
				'Combine Two Stacks Alternating',
				'Combines the elements of two stacks in alternating order. Remaining elements of the longer stack are added afterward.',
				[
					'Understand stack LIFO behavior',
					'Perform interleaved stack operations',
					'Use helper methods like `reverse`',
				],
				`Target after combining: [5, 3, 8, 6, 12, 1, 8, 7, 9, 14]`,
				['Python', 'Stacks', 'Custom Classes']
			),
			{
				id: 't02',
				name: 'Reverse a Stack',
				description:
					'Reverses the contents of a stack using a temporary structure.',
				objectives: [
					'Manipulate data in a LIFO structure',
					'Understand element transfer and order inversion',
				],
				sampleOutput: `Before: [1, 2, 3, 4, 5]\nAfter: [5, 4, 3, 2, 1]`,
				skills: ['Python', 'Stacks'],
			},
			{
				id: 't03',
				name: 'Check if String is Palindrome Using Stack',
				description:
					'Checks if a string is a palindrome using a stack, ignoring non-alphabet characters and case.',
				objectives: [
					'Use stacks to reverse character order',
					'Normalize input for character-only comparison',
				],
				sampleOutput: `Test Case 2: True`,
				skills: ['Python', 'Strings', 'Stacks', 'Text Normalization'],
			},
			{
				id: 't04',
				name: 'Evaluate Postfix Expression Using Stack',
				description:
					'Evaluates a mathematical expression written in postfix notation using a stack.',
				objectives: [
					'Apply postfix rules using a stack',
					'Handle integer and float arithmetic',
				],
				sampleOutput: `postfix("4 5 + 12 * 2 3 * -") → 102`,
				skills: ['Python', 'Postfix Evaluation', 'Stacks', 'Operators'],
			},
			{
				id: 't05',
				name: 'Solve Maze Using DFS and Stack',
				description:
					'Solves a maze represented as an adjacency list using depth-first search with a stack.',
				objectives: [
					'Apply DFS with backtracking using stacks',
					'Model maze traversal with decision trees',
				],
				sampleOutput: `Test Case 1: ['A', 'C', 'E', 'F', 'H', 'X']`,
				skills: ['Python', 'Stacks', 'Graphs', 'DFS'],
			},
		],
		[
			new Function(
				'stack_combine',
				'stack_combine(source1: Stack, source2: Stack) -> Stack',
				'Combines two stacks into one by alternating elements.'
			),
			{
				functionName: 'stack_reverse',
				signature: 'stack_reverse(source: Stack) -> None',
				description: "Reverses a stack's content in-place.",
			},
			{
				functionName: 'is_palindrome_stack',
				signature: 'is_palindrome_stack(string: str) -> bool',
				description: 'Checks if a string is a palindrome using a stack.',
			},
			{
				functionName: 'postfix',
				signature: 'postfix(string: str) -> float',
				description: 'Evaluates a postfix expression using a stack.',
			},
			{
				functionName: 'stack_maze',
				signature: 'stack_maze(maze: dict) -> list[str] | None',
				description: 'Solves a maze using DFS via stack traversal.',
			},
		],
		[
			new Constant(
				'OPERATORS',
				'+-*/',
				'Valid operators for postfix evaluation'
			),
		]
	),
	new Assessment(
		'Assignment 4',
		'elha7950_a04',
		[
			new Task(
				'Queue Split Alternating',
				't01',
				'Splits a queue into two alternating queues using iteration. The original queue is emptied.',
				[
					'Learn queue traversal',
					'Use boolean toggling to alternate values',
					'Understand iteration with queue removal',
				],
				`Queue: []
Target 1: [1, 3, 5, 7, 9, 11]
Target 2: [2, 4, 6, 8, 10]`,
				['Python', 'Queue', 'Iteration', 'Boolean Flags']
			),
			new Task(
				'Priority Queue Split by Key',
				't02',
				'Splits a priority queue into two based on a priority key. Values with priority higher than the key go to one queue, the rest go to another.',
				[
					'Understand priority queues',
					'Apply conditionals to split by key',
					'Dequeue and re-insert based on criteria',
				],
				`Source: []
Target 1: [1]
Target 2: [3, 5, 2]`,
				['Python', 'Priority Queue', 'Conditionals', 'Decomposition']
			),
			new Task(
				'Queue Equality Comparison',
				't03',
				'Checks if two queues are equal using the overridden `__eq__` method.',
				[
					'Implement queue equality',
					'Ensure order and values match',
					'Practice method overriding',
				],
				`Are queue1 and queue2 equal? True
Are queue1 and queue3 equal? False`,
				['Python', 'Queue', 'Method Overriding', 'Equality']
			),
			new Task(
				'Queue Circular Implementation Test',
				't04',
				'Extensively tests the behavior of a circular queue including wraparound, insertion, and removal.',
				[
					'Understand circular queues',
					'Test edge cases (wraparound)',
					'Debug using internal attributes',
				],
				`Appended: 1 ... Appended: 10
Is Full: True
Front: 0
Rear: None
...
[2, 3, 4, 5, 6, None, None, None, None, None]`,
				['Python', 'Circular Queue', 'Debugging', 'Edge Cases']
			),
		],
		[
			new Function(
				'queue_split_alt',
				'queue_split_alt(source: Queue) -> Tuple[Queue, Queue]',
				'Splits the source queue into two alternating target queues while preserving order. Empties the source queue.'
			),
			new Function(
				'pq_split_key',
				'pq_split_key(source: Priority_Queue, key: Any) -> Tuple[Priority_Queue, Priority_Queue]',
				'Splits a priority queue into two based on an external key. Higher-priority values go to one queue, others go to another.'
			),
		],
		[]
	),
	new Assessment(
		'Assignment 5',
		'elha7950_a05',
		[
			new Task(
				'List Equality Check',
				't01',
				'Tests the __eq__ method by comparing lists with same and different values or lengths.',
				[
					'Implement equality comparison for lists',
					'Validate behavior with different value orders and lengths',
				],
				`list1 == list2 | Value: True | Expected: True
list1 == list3 | Value: False | Expected: False`,
				['Python', 'List', 'Magic Methods']
			),
			new Task(
				'Clean List',
				't02',
				'Removes duplicate values from a list, keeping only the first occurrence of each.',
				[
					'Understand uniqueness filtering',
					'Test with different data types and structures',
				],
				`Before cleaning: [1, 2, 2, 3, 3, 4, 5, 5]
After cleaning: [1, 2, 3, 4, 5]`,
				['Python', 'List', 'Set', 'Uniqueness']
			),
			new Task(
				'Combine Lists',
				't03',
				'Combines two source lists into a target list in sorted order. Empties source lists.',
				['Combine sorted lists', 'Understand in-place list consumption'],
				`Combined list: [1, 2, 3, 4, 5, 6]`,
				['Python', 'Lists', 'Combining']
			),
			new Task(
				'List Intersection',
				't04',
				'Finds common elements in two lists and returns them in a target list.',
				['Intersect sorted lists', 'Use in-place merging'],
				`Intersection list: [3, 4, 5]`,
				['Python', 'List', 'Set Operations']
			),
			new Task(
				'Prepend to List',
				't05',
				'Adds a new element to the front of a list.',
				['Understand list front-insertion'],
				`List after prepend: ['a', 2, 1]`,
				['Python', 'List', 'Insertion']
			),
			new Task(
				'Remove Front Element',
				't06',
				'Removes and returns the first element from the list.',
				['Manage index-shifting in list after removal'],
				`Value removed from front: 1
List after removal: [2, 3, 4, 5]`,
				['Python', 'List', 'Index Handling']
			),
			new Task(
				'Remove All Occurrences',
				't07',
				'Removes all occurrences of a given value from the list.',
				['Iterate and remove all matches from list'],
				`List after removal: [1, 3, 4, 5]`,
				['Python', 'List', 'Filtering']
			),
			new Task(
				'Split List',
				't08',
				'Splits a list into two roughly equal parts.',
				['Handle odd/even list splitting', 'Empty list edge cases'],
				`Target1: [1, 2, 3] | Target2: [4, 5, 6]`,
				['Python', 'List', 'Splitting']
			),
			new Task(
				'Split Alternate List',
				't09',
				'Alternately splits list values into two separate lists.',
				['Alternate distribution of values'],
				`Target1: [1, 3, 5] | Target2: [2, 4, 6]`,
				['Python', 'List', 'Alternate Logic']
			),
			new Task(
				'Union of Two Lists',
				't10',
				'Updates a list with all values from two sources while avoiding duplicates.',
				['Use of sets for union', 'Retain unique items only'],
				`Updated list: [4, 6, 3, 1, 0, 2, 8]`,
				['Python', 'List', 'Set Union']
			),
			new Task(
				'Count in Sorted List',
				't11',
				'Counts the number of times a given key appears in a sorted list.',
				['Efficient scanning in sorted structure'],
				`Count: 2`,
				['Python', 'Sorted List', 'Counting']
			),
			new Task(
				'Remove Many in Sorted List',
				't12',
				'Removes all occurrences of a value from a sorted list.',
				['Handle duplicates in sorted structure'],
				`Values: [1, 3, 3, 3]`,
				['Python', 'Sorted List', 'Filtering']
			),
			new Task(
				'Split Sorted List',
				't13',
				'Splits a sorted list into two parts.',
				['Preserve order in split'],
				`Target1: [1, 2, 3] | Target2: [4, 5]`,
				['Python', 'Sorted List', 'Splitting']
			),
			new Task(
				'Split Alt in Sorted List',
				't14',
				'Alternates values into two sorted lists.',
				['Alternate and maintain sort order'],
				`Target1: [1, 3, 5] | Target2: [2, 4]`,
				['Python', 'Sorted List', 'Alternate Logic']
			),
			new Task(
				'Split Key in Sorted List',
				't15',
				'Splits a sorted list into two parts based on a key.',
				['Partition values relative to key'],
				`Target1: [1, 2, 3] | Target2: [4, 5, 6, 7]`,
				['Python', 'Sorted List', 'Key Comparison']
			),
		],
		[],
		[]
	),
	new Assessment(
		'Assignment 6',
		'elha7950_a06',
		[
			new Task(
				'Queue Insert and Remove',
				't01',
				'Tests insertion and removal operations on a linked queue.',
				[
					'Insert items into a queue',
					'Remove all elements and check order',
					'Test is_empty status',
				],
				`Inserted 10
Inserted 20
Inserted 30
3
Is the queue empty? False
Count: 3
Removed: 10
Count: 2
Removed: 20
Count: 1
Removed: 30
Final count: 0
Is the queue empty? True`,
				['Python', 'Queue', 'Linked Structures']
			),
			new Task(
				'Queue Equality',
				't02',
				'Checks if two queues are equal based on their content and order.',
				['Define equality logic for queues'],
				`True`,
				['Python', 'Queue', 'Equality']
			),
			new Task(
				'Move Front to Rear',
				't03',
				'Moves the front of one queue to the rear of another.',
				['Manipulate queue pointers directly'],
				`33\n44\n55\n10\n20\n30`,
				['Python', 'Queue', 'Linked Queue']
			),
			new Task(
				'Append Queue',
				't04',
				'Appends one queue to the end of another, preserving order.',
				['Preserve queue order while appending'],
				`11\n22\n33\n44\n11\n22\n33\n44\n55`,
				['Python', 'Queue', 'Appending']
			),
			new Task(
				'Combine Queues',
				't05',
				'Combines two queues into a target queue, emptying the sources.',
				['Move values from multiple queues into one'],
				`11\n33\n22\n44\nSource 1 count: 0\nSource 2 count: 0\nTarget count: 4`,
				['Python', 'Queue', 'Combining']
			),
			new Task(
				'Split Alternate Queue',
				't06',
				'Splits a queue into two by alternating elements.',
				['Distribute values alternately into two target queues'],
				`11\n33\n22\n44`,
				['Python', 'Queue', 'Alternate Logic']
			),
			new Task(
				'Priority Queue Insert',
				't07',
				'Inserts elements into a priority queue and verifies order.',
				['Insert maintaining priority'],
				`11\n22\n33\n44\n55`,
				['Python', 'Priority Queue']
			),
			new Task(
				'Priority Queue Split Alternate',
				't08',
				'Splits a priority queue into two alternate queues.',
				['Alternate split for priority structures'],
				``,
				['Python', 'Priority Queue']
			),
			new Task(
				'Deque Operations',
				't09',
				'Tests inserting at both ends, peeking, removing from both ends in a deque.',
				['Test double-ended queue behaviors'],
				`False\n2\n99\n100\n99\n100`,
				['Python', 'Deque']
			),
		],
		[],
		[]
	),
	new Assessment(
		'Assignment 7',
		'elha7950_a07',
		[
			new Task(
				'Clean Linked List',
				't01',
				'Removes duplicate values from a linked list, keeping only the first occurrence of each.',
				[
					'Understand linked list traversal and uniqueness filtering',
					'Test behavior with duplicate values',
				],
				`Output values:
99
99
99
99
99
Count after cleaning: 1`,
				['Python', 'Linked List', 'Uniqueness', 'Traversal']
			),
			new Task(
				'Combine Two Linked Lists',
				't02',
				'Combines two source linked lists into a target linked list, emptying the sources.',
				[
					'Combine linked lists by adjusting pointers',
					'Confirm source lists are empty after combining',
				],
				`Source list after combine: (empty)
Target list values:
11
22
33
44`,
				['Python', 'Linked List', 'Combining', 'Pointers']
			),
			new Task(
				'Split Linked List',
				't03',
				'Splits a linked list into two roughly equal parts, handling odd and even counts.',
				[
					'Traverse linked list to split into two parts',
					'Handle cases with odd and even number of nodes',
				],
				`T1 (odd count) values: 11, 22, 33
T2 (odd count) values: 44, 55

T1 (even count) values: 0, 1, 2, 3
T2 (even count) values: 4, 5, 6, 7`,
				['Python', 'Linked List', 'Splitting']
			),
			new Task(
				'Print Sorted Linked List',
				't04',
				'Prints all values from a sorted linked list.',
				['Traverse sorted linked list', "Display each node's value"],
				`Values:
11
22
33
44
55`,
				['Python', 'Sorted Linked List', 'Traversal']
			),
			new Task(
				'Union of Two Sorted Linked Lists',
				't05',
				'Creates a union of two sorted linked lists into a target list, emptying the sources.',
				[
					'Merge two sorted linked lists',
					'Ensure uniqueness and maintain sort order',
				],
				`Union list values: (all values from both sorted lists merged and unique)`,
				['Python', 'Sorted Linked List', 'Union', 'Merging']
			),
		],
		[],
		[]
	),
	new Assessment(
		'Assignment 8',
		'elha7950_a08',
		[
			new Task(
				'do_comparisons',
				't01',
				'Reads letters from a file and searches for each letter in a BST of Letter objects, updating comparison counts.',
				[
					'Read and process file line-by-line',
					'Search BST for each letter',
					'Update comparison counts in Letter objects',
				],
				`No direct output, but updates BST nodes' comparison counts`,
				['Python', 'File I/O', 'BST', 'Letter Class', 'Search', 'Counting']
			),
			new Task(
				'comparison_total',
				't02',
				'Sums the comparison counts from all Letter objects in the BST and returns the total.',
				[
					'Traverse BST in order',
					'Accumulate comparison counts',
					'Return total comparisons',
				],
				`Total comparisons (int) returned`,
				['Python', 'BST Traversal', 'Aggregation', 'Counting']
			),
			new Task(
				'letter_table',
				't03',
				'Prints a formatted table of letter counts and their percentage of the total count from the BST of Letter objects.',
				[
					'Calculate total letter count',
					'Format and print letter counts and percentages',
					'Handle zero total counts gracefully',
				],
				`Letter Count/Percent Table
Total Count: 100,000

Letter  Count       %
---------------------
A       8,167    8.17%
B       1,492    1.49%
...
Z         74    0.07%`,
				['Python', 'BST Traversal', 'Formatting', 'Statistics']
			),
		],
		[
			new Function(
				'do_comparisons',
				'(file_variable: file, bst: BST) -> None',
				'Reads letters from a file and updates comparison counts for each letter found in the BST.'
			),
			new Function(
				'comparison_total',
				'(bst: BST) -> int',
				'Returns the sum of comparison counts of all letters in the BST.'
			),
			new Function(
				'letter_table',
				'(bst: BST) -> None',
				'Prints a table showing counts and percentages of letters in the BST.'
			),
		],
		[]
	),
	new Assessment(
		'Assignment 9',
		'elha7950_a09',
		[
			new Task(
				'Insert Words into Hash Set',
				't01',
				'Reads words from a file and inserts each Word object into a hash set, tracking comparisons for each insertion.',
				[
					'Read and process words from a file',
					'Insert Word objects into a hash set',
					'Track and update comparison counts during insertion',
				],
				`Hash set size increases as words are inserted.\nComparisons are counted for each insert operation.`,
				['Python', 'Hash Set', 'File I/O']
			),
			new Task(
				'Calculate Total Comparisons and Max Word',
				't02',
				'Calculates the total number of comparisons for all Word objects in the hash set and identifies the word with the maximum comparisons.',
				[
					'Traverse the hash set',
					'Sum comparison counts for all Word objects',
					'Identify the Word object with the highest comparison count',
				],
				`Total comparisons and max comparison Word object returned.`,
				['Python', 'Hash Set', 'Traversal']
			),
		],
		[
			new Function(
				'insert_words',
				'(fv: file, hash_set: Hash_Set) -> None',
				'Reads words from a file and inserts each Word object into a hash set, tracking comparisons during insertion.'
			),
			new Function(
				'comparison_total',
				'(hash_set: Hash_Set) -> (int, Word)',
				'Calculates the total comparisons for all Word objects in the hash set and returns the word with the maximum comparisons.'
			),
		],
		[]
	),
	new Assessment(
		'Assignment 10',
		'elha7950_a10',
		[
			new Task(
				'Radix Sort on Array',
				't01',
				'Sorts an array of integers using the radix sort algorithm.',
				[
					'Implement radix sort on an array',
					'Handle edge cases like empty arrays and duplicates',
					'Validate correctness with multiple test cases',
				],
				`Input: [170, 45, 75, 90, 802, 24, 2, 66]
Output: [2, 24, 45, 66, 75, 90, 170, 802]`,
				['Python', 'Sorting', 'Radix Sort', 'Array']
			),
			new Task(
				'Radix Sort on Linked List',
				't02',
				'Sorts a linked list of integers using the radix sort algorithm.',
				[
					'Implement radix sort for singly linked list',
					'Preserve list integrity during sorting',
					'Test with varied input sizes and duplicates',
				],
				`Input List: [170, 45, 75, 90, 802, 24, 2, 66]
Sorted List: [2, 24, 45, 66, 75, 90, 170, 802]`,
				['Python', 'Sorting', 'Radix Sort', 'Linked List']
			),
			new Task(
				'Gnome Sort on Array',
				't03',
				'Sorts an array of integers using the gnome sort algorithm.',
				[
					'Implement gnome sort on an array',
					'Validate with various test cases including sorted and reversed arrays',
				],
				`Input: [5, 4, 3, 2, 1]
Output: [1, 2, 3, 4, 5]`,
				['Python', 'Sorting', 'Gnome Sort', 'Array']
			),
			new Task(
				'Gnome Sort on Deque',
				't04',
				'Sorts a deque of integers using the gnome sort algorithm.',
				[
					'Implement gnome sort on a doubly linked deque',
					'Test correctness and edge cases',
				],
				`Input Deque: [3, 2, 5, 3, 2, 1, 5]
Sorted Deque: [1, 2, 2, 3, 3, 5, 5]`,
				['Python', 'Sorting', 'Gnome Sort', 'Deque']
			),
		],
		[
			new Function(
				'radix_sort',
				'(data: list[int]) -> None',
				'Sorts a list of integers in place using radix sort.'
			),
			new Function(
				'radix_sort',
				'(lst: List) -> None',
				'Sorts a linked list of integers in place using radix sort.'
			),
			new Function(
				'gnome_sort',
				'(data: list[int]) -> None',
				'Sorts a list of integers in place using gnome sort.'
			),
			new Function(
				'gnome_sort',
				'(deque: Deque) -> None',
				'Sorts a deque of integers in place using gnome sort.'
			),
		],
		[]
	),
];
