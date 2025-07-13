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
		description: 'Documentation for each assignment',
		numberOfEntries: 1,
	},
	{
		title: 'Labs',
		description: 'Documentation for each lab',
		numberOfEntries: 9,
	},
	{
		title: 'Examples',
		description:
			'Below are documented example programs that explore various C programming concepts and data structures:',
		numberOfEntries: 0,
	},
];

export const EXAMPLEDATA: ExampleData[] = [
	{
		title: '01 - C Program Structure & Organization',
		url: `/01-C-Program-Structure-and-Organization/`,
	},
	{
		title: '02 - Data Types, Variables & Controls',
		url: '/02-Data type-variables-and-controls/',
	},
	{
		title: '03 - Basic Operations',
		url: '/03-Basic-Operations/',
	},
	{
		title: '04 - Bitwise Operations',
		url: '/04-Bitwise-Operations/',
	},
	{
		title: '05 - Flow Control',
		url: '/05-Flow-Control/',
	},
	{
		title: '06 - Functions',
		url: '/06-Functions/',
	},
	{
		title: '07 - Specifiers & Scope',
		url: '/07-Specifiers-and-Scope/',
	},
	{
		title: '08 - Pointers',
		url: '/08-Pointers/',
	},
	{
		title: '09 - Arrays',
		url: '/09-Arrays/',
	},
	{
		title: '10 - Array-sort',
		url: '/10-Array-sort/',
	},
	{
		title: '11 - 2D Arrays',
		url: '/11-2D-arrays/',
	},
	{
		title: '12 - String',
		url: '/12-String/',
	},
	{
		title: '13 - Structure',
		url: '/13-Structure/',
	},
	{
		title: '14 - Union',
		url: '/14-Union/',
	},
	{
		title: '15 - Enumeration',
		url: '/15-Enumeration/',
	},
	{
		title: '16 - File Read',
		url: '/16-File-Read/',
	},
	{
		title: '17 - File Write',
		url: '/17-File-Write/',
	},
	{
		title: '18 - CSV File Read & Write',
		url: '/18-CSV-File-Read-and-Write/',
	},
	{
		title: '19 - LinkedLists',
		url: '/19-LinkedLists/',
	},
	{
		title: '20 - LinkedList Separate',
		url: '/20-LinkedList-Separate/',
	},
	{
		title: '21 - Queues',
		url: '/21-Queues/',
	},
	{
		title: '22 - Stacks',
		url: '22-Stacks',
	},
	{
		title: '23 - Stack Applications',
		url: '/23-Stack-Applications/',
	},
	{
		title: '24 - Trees',
		url: '/24-Trees/',
	},
	{
		title: '25 - Tree Applications',
		url: '/25-Tree-Applications/',
	},
	{
		title: '26 - AVL Trees',
		url: '/26-AVL-Trees',
	},
	{
		title: '27 - Red Black Tree & Others',
		url: '/27-Red-Black-Tree-and-Others/',
	},
	{
		title: '28 - Hash Tables',
		url: '/28-Hash-Tables',
	},
	{
		title: '29 - Heaps',
		url: '/29-Heaps/',
	},
	{
		title: '30 - Graph representations & Operations',
		url: '/30-Graph-representations-and-operations/',
	},
	{
		title: '31 - Application algorithms on graphs',
		url: '/31-Application-algorithms-on-graphs/',
	},
];

export const TopicsData = [
	{
		items: [
			'ARMv7 architecture and instruction set',
			'Assembly language programming',
			'CPU registers and pipeline',
		],
		title: 'ARM Fundamentals',
		eventKey: '0',
	},
	{
		items: [
			'Interrupts and exceptions',
			'Memory organization and addressing modes',
			'Embedded systems and interfacing',
		],
		title: 'System Architecture Concepts',
		eventKey: '1',
	},
	{
		items: ['Input/output programming', 'Debugging and simulation tools'],
		title: 'Practical Development Tools',
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
	{
		name: 'Lab 1',
		id: 'elha7950_l01',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description:
					'Assign values to registers r0 and r1, then add them and store the result in r2.',
				objectives: [
					'Store immediate values in registers',
					'Perform addition using register contents',
				],
				sampleOutput: 'r0 = 9, r1 = 14, r2 = 23',
				skills: ['Assembly', 'Register Assignment', 'Addition'],
			},
			{
				name: 'Task 2',
				id: 't02',
				description:
					'Move the number 8 into r3, then double its value by adding it to itself.',
				objectives: [
					'Use MOV instruction',
					'Perform self-addition on a register',
				],
				sampleOutput: 'r3 = 16',
				skills: ['Assembly', 'MOV Instruction', 'Arithmetic Operations'],
			},
			{
				name: 'Task 3',
				id: 't03',
				description:
					'Understand and correct invalid instruction syntax; perform valid addition using a register and an immediate value.',
				objectives: [
					'Identify syntax issues in instructions',
					'Perform addition using valid operands',
				],
				sampleOutput: 'r4 = 21',
				skills: ['Assembly', 'Instruction Syntax', 'Debugging'],
			},
		],
	},
	{
		name: 'Lab 2',
		id: 'elha7950_l02',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description:
					'Load values from memory addresses A and B into registers, add them, and store the result in a memory location labeled Result.',
				objectives: [
					'Use `ldr` to load immediate addresses and dereference them',
					'Perform addition on values loaded from memory',
					'Use `str` to store the result back to memory',
				],
				sampleOutput: 'A = 4, B = 8, Result = 12',
				skills: [
					'Assembly',
					'Memory Access (LDR/STR)',
					'Data Movement Between Memory and Registers',
				],
			},
			{
				name: 'Task 2',
				id: 't02',
				description:
					'Load values from memory labels First and Second, perform addition and subtraction, then store the results in memory at Total and Diff.',
				objectives: [
					'Load and use multiple memory locations',
					'Perform addition and subtraction on register values',
					'Store computed results to designated memory locations',
				],
				sampleOutput: 'First = 4, Second = 8, Total = 12, Diff = -4',
				skills: [
					'Assembly',
					'Arithmetic Operations',
					'Memory Management',
					'Debugging (bracket and label issues)',
				],
			},
			{
				name: 'Task 3',
				id: 't03',
				description:
					'Copy the contents of a 3-element vector from memory label Vec1 to Vec2 using register-based memory addressing.',
				objectives: [
					'Access and manipulate sequential memory locations',
					'Use arithmetic to traverse arrays in memory',
					'Store values to a separate vector',
				],
				sampleOutput: 'Vec1 = [1, 2, 3], Vec2 = [1, 2, 3]',
				skills: [
					'Assembly',
					'Vector Memory Operations',
					'Loop Unrolling (manual repetition)',
				],
			},
		],
		constants: [
			{
				name: 'A',
				value: '4',
				description: 'First operand stored in memory (Task 1)',
			},
			{
				name: 'B',
				value: '8',
				description: 'Second operand stored in memory (Task 1)',
			},
			{
				name: 'First',
				value: '4',
				description: 'First input value in Task 2',
			},
			{
				name: 'Second',
				value: '8',
				description: 'Second input value in Task 2',
			},
			{
				name: 'Vec1',
				value: '[1, 2, 3]',
				description: 'Source vector of three integers (Task 3)',
			},
		],
	},
	{
		name: 'Lab 3',
		id: 'elha7950_l03',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description:
					'Implement a simple countdown using a loop that decrements a register and uses a branch instruction to repeat until zero.',
				objectives: [
					'Use `mov` to initialize a register',
					'Use `sub`, `cmp`, and `bge` to control a loop',
				],
				sampleOutput: 'Registers count down: 4, 3, 2, 1, 0 (loop exits)',
				skills: [
					'Assembly',
					'Loop Control',
					'Branching',
					'Register Manipulation',
				],
			},
			{
				name: 'Task 2',
				id: 't02',
				description:
					'Implement a countdown using a memory-loaded constant instead of a hardcoded value. Decrement and loop using the value from memory.',
				objectives: [
					'Load a value from memory using `ldr`',
					'Apply conditional branching using a loop',
				],
				sampleOutput: 'COUNTER starts at 5, decrements to 0, then exits',
				skills: [
					'Assembly',
					'Memory Access',
					'Looping with Memory',
					'Branching',
				],
			},
			{
				name: 'Task 3',
				id: 't03',
				description:
					'Create an infinite loop that toggles LEDs using a private timer to delay the changes, with rotation of the LED bits to animate a pattern.',
				objectives: [
					'Use hardware-mapped memory (LEDs and timer)',
					'Configure and check timer control and status',
					'Manipulate output using bitwise operations',
				],
				sampleOutput: 'LED pattern rotates every second based on timer timeout',
				skills: [
					'Assembly',
					'I/O Programming',
					'Timers and Interrupts',
					'Bitwise Operations (rotate)',
					'Hardware Interfacing',
				],
			},
		],
		constants: [
			{
				name: 'COUNTER',
				value: '5',
				description: 'Initial value for countdown in Task 2',
			},
			{
				name: 'LED_BITS',
				value: '0x0F0F0F0F',
				description: 'Initial pattern used for LED output in Task 3',
			},
			{
				name: 'DELAY_TIME',
				value: '200000000',
				description: 'Timer delay value for approximately 1 second at 200 MHz',
			},
			{
				name: 'TIMER',
				value: '0xfffec600',
				description: 'Memory-mapped address for the private timer',
			},
			{
				name: 'LEDS',
				value: '0xff200000',
				description: 'Memory-mapped address for the LEDs',
			},
		],
	},
	{
		name: 'Lab 4',
		id: 'elha7950_l04',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description:
					'Traverse through a list of integers using post-increment addressing, summing all values into a register.',
				objectives: [
					'Use post-increment addressing to traverse memory',
					'Sum all values in a list using register arithmetic',
					'Compare addresses to determine end of list',
				],
				sampleOutput: 'Sum of list: 16',
				skills: ['Assembly', 'Memory Traversal', 'Post-Increment', 'Summation'],
			},
			{
				name: 'Task 2',
				id: 't02',
				description:
					'Traverse a list and count the number of elements by computing the range of memory and dividing by element size.',
				objectives: [
					'Calculate list length using address difference',
					'Traverse a list and count iterations',
				],
				sampleOutput: 'List length: 9',
				skills: [
					'Assembly',
					'Memory Arithmetic',
					'Bit Shifting',
					'List Traversal',
				],
			},
			{
				name: 'Task 3',
				id: 't03',
				description:
					'Traverse a list to find the minimum and maximum values by comparing each element against running min/max values.',
				objectives: [
					'Traverse list using post-increment',
					'Use conditional move instructions to track min and max',
				],
				sampleOutput: 'Min: -9, Max: 12',
				skills: [
					'Assembly',
					'Conditional Execution',
					'List Traversal',
					'Finding Extremes',
				],
			},
		],
		constants: [
			{
				name: 'Data',
				value: '[4, 5, -9, 0, 3, 0, 8, -7, 12]',
				description: 'Integer list used for all tasks',
			},
		],
	},
	{
		name: 'Lab 5',
		id: 'elha7950_l05',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description:
					'Call a subroutine to calculate the total of a list of integers, using register-based list traversal.',
				objectives: [
					'Use subroutines in assembly with `bl` and `bx`',
					'Traverse and sum list elements with post-increment',
					'Return values through registers (r0)',
				],
				sampleOutput: 'Total = 16',
				skills: [
					'Assembly',
					'Subroutines',
					'Memory Traversal',
					'Register Usage and Stack Operations',
				],
			},
			{
				name: 'Task 2',
				id: 't02',
				description:
					'Call a subroutine that counts how many positive, negative, and zero values are present in a list.',
				objectives: [
					'Use comparison and conditional addition instructions (`addeq`, `addgt`, `addlt`)',
					'Call and return from subroutines',
					'Maintain multiple counters during memory traversal',
				],
				sampleOutput: 'Positives = 5, Negatives = 2, Zeros = 2',
				skills: [
					'Assembly',
					'Subroutines',
					'Conditional Execution',
					'Memory Traversal and Counting',
				],
			},
		],
		constants: [
			{
				name: 'Data',
				value: '[4, 5, -9, 0, 3, 0, 8, -7, 12]',
				description: 'Integer list used for both tasks',
			},
		],
		functions: [
			{
				functionName: 'list_total',
				signature: 'int list_total(int* start, int* end)',
				description:
					'Sums all values in the list between the start and end addresses using post-increment addressing. Returns the total in r0.',
			},
			{
				functionName: 'list_stats',
				signature:
					'void list_stats(int* start, int* end, int* zeroCount, int* positiveCount, int* negativeCount)',
				description:
					'Counts the number of zero, positive, and negative integers in a list. Results are stored in r1 (zeros), r2 (positives), and r3 (negatives).',
			},
		],
	},
	{
		name: 'Lab 6',
		id: 'elha7950_l06',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description:
					'Compare two null-terminated strings up to a maximum length using iterative character comparison and stack frame management.',
				objectives: [
					'Work with stack frames and function prologues/epilogues',
					'Use byte loads and compare instructions to implement string comparison',
					'Return comparison result in r0, following strncmp conventions',
				],
				sampleOutput:
					'Returns 0 if strings are equal up to length; non-zero indicating lexicographic difference otherwise',
				skills: [
					'Assembly',
					'Stack Frame Handling',
					'String Comparison',
					'Conditional Branching',
				],
			},
			{
				name: 'Task 2',
				id: 't02',
				description:
					'Find minimum and maximum values in a list using a subroutine with parameters passed via the stack.',
				objectives: [
					'Manipulate stack to pass parameters and save registers',
					'Traverse a list in memory to find min and max',
					'Store results at provided memory addresses',
				],
				sampleOutput: 'Min = -9, Max = 12',
				skills: [
					'Assembly',
					'Stack Frames',
					'Memory Traversal',
					'Conditional Moves',
				],
			},
			{
				name: 'Task 3',
				id: 't03',
				description:
					'Find the common prefix of two null-terminated strings and store the result in a buffer, respecting buffer size limits.',
				objectives: [
					'Use stack frame management and parameter passing',
					'Iterate strings byte-by-byte comparing characters',
					'Store matched prefix with null-terminator in output buffer',
				],
				sampleOutput:
					'Common prefix of "pandemic" and "pandemonium" is "pandem"',
				skills: [
					'Assembly',
					'String Processing',
					'Stack and Memory Management',
					'Conditional Branching',
				],
			},
		],
		constants: [
			{
				name: 'SIZE',
				value: '80',
				description:
					'Maximum string size and buffer length for string operations',
			},
		],
		functions: [
			{
				functionName: 'strncmp',
				signature:
					'int strncmp(const char* str1, const char* str2, int max_len)',
				description:
					'Compares two strings up to max_len characters. Returns 0 if equal, negative if str1 < str2, positive if str1 > str2.',
			},
			{
				functionName: 'MinMax',
				signature: 'void MinMax(int* start, int* end, int* min, int* max)',
				description:
					'Finds minimum and maximum integer values in a list, storing results via pointers.',
			},
			{
				functionName: 'FindCommon',
				signature:
					'void FindCommon(const char* first, const char* second, char* common, int size)',
				description:
					'Finds the common prefix of two strings and stores it in a buffer up to a maximum size.',
			},
		],
	},
	{
		name: 'Lab 7',
		id: 'elha7950_l07',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description: `Subroutines for working with characters and UART I/O.
         Includes reading and printing characters, checking character types (letter, uppercase, lowercase),
         and printing formatted output to UART.`,
				objectives: [
					'Implement UART input/output for characters and strings',
					'Check if a character is a letter, uppercase, or lowercase',
					'Use stack frames and subroutine calls properly',
				],
				skills: [
					'UART communication',
					'Character classification',
					'Stack management',
					'Subroutine calls in assembly',
				],
				sampleOutput: `Char: a
Letter: T
Lower: T
Upper: F
`,
			},
			{
				name: 'Task 2',
				id: 't02',
				description: `Subroutines for checking if a null-terminated string is a palindrome,
         ignoring non-letter characters and case differences.`,
				objectives: [
					'Process strings by scanning characters from both ends',
					'Ignore case and non-letter characters during palindrome check',
					'Utilize character classification and conversion subroutines',
				],
				skills: [
					'String manipulation',
					'Stack management',
					'Conditional branching',
					'Character case conversion',
				],
				sampleOutput: `otto
T
RaceCar
T
A man, a plan, a canal, Panama!
T
David
F
`,
			},
		],
		functions: [
			{
				functionName: 'ReadChar',
				signature: 'char ReadChar(void)',
				description:
					'Reads a single character from UART if available, returns 0 if empty.',
			},
			{
				functionName: 'PrintChar',
				signature: 'void PrintChar(char c)',
				description: 'Prints a single character to UART.',
			},
			{
				functionName: 'PrintString',
				signature: 'void PrintString(const char* str)',
				description: 'Prints a null-terminated string to UART.',
			},
			{
				functionName: 'PrintTrueFalse',
				signature: 'void PrintTrueFalse(bool value)',
				description: 'Prints "T" for true or "F" for false to UART.',
			},
			{
				functionName: 'isLowerCase',
				signature: 'bool isLowerCase(char c)',
				description: 'Returns true if character is lowercase letter.',
			},
			{
				functionName: 'isUpperCase',
				signature: 'bool isUpperCase(char c)',
				description: 'Returns true if character is uppercase letter.',
			},
			{
				functionName: 'isLetter',
				signature: 'bool isLetter(char c)',
				description:
					'Returns true if character is any letter (uppercase or lowercase).',
			},
			{
				functionName: 'toLower',
				signature: 'char toLower(char c)',
				description:
					'Converts an uppercase letter to lowercase; otherwise returns character unchanged.',
			},
			{
				functionName: 'Palindrome',
				signature: 'bool Palindrome(char* start, char* end)',
				description: `Returns true if the string (between start and end) is a palindrome,
         ignoring case and non-letter characters.`,
			},
		],
		constants: [
			{
				name: 'UART_BASE',
				value: '0xff201000',
				description: 'Base address for UART hardware registers.',
			},
			{
				name: 'ENTER',
				value: '0x0a',
				description: 'ASCII newline character for UART output.',
			},
			{
				name: 'VALID',
				value: '0x8000',
				description: 'UART data valid flag mask.',
			},
			{
				name: 'DIFF',
				value: "'a' - 'A'",
				description:
					'ASCII difference between lowercase and uppercase letters.',
			},
		],
	},
	{
		name: 'Lab 8',
		id: 'elha7950_l08',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description: `Uses a subroutine to write null-terminated strings to UART, adding an ENTER newline after each string.`,
				objectives: [
					'Understand UART string output',
					'Implement subroutine for writing strings',
					'Use stack to preserve registers during subroutine calls',
				],
				skills: [
					'UART communication',
					'Subroutine calls and stack management',
					'String manipulation in assembly',
				],
				sampleOutput: `First string
Second string
Third string
Last string
`,
			},
			{
				name: 'Task 2',
				id: 't02',
				description: `Reads ENTER-terminated strings from UART into memory buffers with fixed size, handling buffer limits.`,
				objectives: [
					'Implement UART string input',
					'Handle buffer size limits and null termination',
					'Manage registers and loops in assembly',
				],
				skills: [
					'UART input handling',
					'Memory buffer management',
					'Conditional branching and loops',
				],
				sampleOutput: `(User input echoed after pressing ENTER for each string)
`,
			},
			{
				name: 'Task 3',
				id: 't03',
				description: `Echoes characters from UART input back to UART output until ENTER is pressed.`,
				objectives: [
					'Implement UART echo functionality',
					'Poll UART for valid data',
					'Use subroutines to simplify code',
				],
				skills: [
					'UART polling',
					'Subroutine usage',
					'Basic input-output processing',
				],
				sampleOutput: `(User types characters; each character appears immediately on UART output until ENTER is pressed)
`,
			},
		],
		functions: [
			{
				functionName: 'WriteString',
				signature: 'void WriteString(const char* str)',
				description: `Writes a null-terminated string to UART, then appends an ENTER newline character.`,
			},
			{
				functionName: 'ReadString',
				signature: 'void ReadString(char* buffer, int size)',
				description: `Reads characters from UART into buffer until ENTER is pressed or buffer is full.`,
			},
			{
				functionName: 'EchoString',
				signature: 'void EchoString(void)',
				description: `Reads characters from UART and writes them back to UART until ENTER is received.`,
			},
		],
		constants: [
			{
				name: 'UART_BASE',
				value: '0xff201000',
				description: 'Base address for UART hardware registers.',
			},
			{
				name: 'ENTER',
				value: '0x0A',
				description: 'ASCII newline (ENTER) character.',
			},
			{
				name: 'VALID',
				value: '0x8000',
				description: 'UART data valid mask.',
			},
			{
				name: 'SIZE',
				value: '20',
				description: 'Buffer size for string storage (bytes).',
			},
		],
	},
	{
		name: 'Lab 9',
		id: 'elha7950_l09',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description: `Set up ARM interrupt vectors, configure the Generic Interrupt Controller (GIC), and enable IRQ interrupts. The main program idles, waiting for interrupts.`,
				objectives: [
					'Understand ARM vector table setup',
					'Configure processor modes and stack pointers',
					'Initialize the ARM Generic Interrupt Controller (GIC)',
					'Enable IRQ interrupts',
				],
				skills: [
					'ARM processor modes and CPSR configuration',
					'Interrupt vector table programming',
					'GIC configuration for ARM Cortex-A9',
				],
				sampleOutput: `(No direct UART output; system is initialized and idles waiting for interrupts)
`,
			},
			{
				name: 'Task 2',
				id: 't02',
				description: `Configure and set a hardware timer. Implement the timer interrupt service routine (ISR) that outputs the string "Timeout" to the UART when the timer interrupt fires.`,
				objectives: [
					'Configure hardware timer registers',
					'Set timer period and control registers',
					'Write an ISR to handle timer interrupts',
					'Send string output via UART within ISR',
				],
				skills: [
					'ARM timer programming',
					'Interrupt service routine writing',
					'UART output handling from ISR',
				],
				sampleOutput: `Timeout
`,
			},
		],
		functions: [
			{
				functionName: 'CONFIG_GIC',
				signature: 'void CONFIG_GIC(void)',
				description: `Configures the Generic Interrupt Controller to enable interrupt ID 72 (timer interrupt), sets CPU target and priority mask, and enables interrupt forwarding.`,
			},
			{
				functionName: 'CONFIG_INTERRUPT',
				signature: 'void CONFIG_INTERRUPT(int ID, int CPU_target)',
				description: `Configures individual interrupt in GIC for a given interrupt ID and CPU target, setting enable bit and processor target.`,
			},
			{
				functionName: 'TIMER_SETTING',
				signature: 'void TIMER_SETTING(void)',
				description: `Sets up the hardware timer by writing the timer period and control registers.`,
			},
			{
				functionName: 'INTER_TIMER_ISR',
				signature: 'void INTER_TIMER_ISR(void)',
				description: `Interrupt Service Routine triggered on timer interrupt; outputs "Timeout" string via UART and clears the timer interrupt.`,
			},
		],
		constants: [
			{
				name: 'UART_ADDR',
				value: '0xff201000',
				description: 'Base address for UART registers.',
			},
			{
				name: 'TIMER_BASE',
				value: '0xff202000',
				description: 'Base address for hardware timer registers.',
			},
			{
				name: 'ENTER',
				value: '0x0A',
				description: 'ASCII newline character for UART output.',
			},
		],
	},
];

export const AssignmentData: AssessmentDataType[] = [
	{
		name: 'Assignment 1',
		id: 'elha7950_a01',
		tasks: [
			{
				name: 'Task 1',
				id: 't01',
				description: `
        Convert a list of hexadecimal values stored in memory into their ASCII character
        representations by using a lookup table. Store the resulting ASCII characters
        into a new memory location (starting at 0x00001500).
      `,
				objectives: [
					'Load addresses of data arrays and lookup tables into registers',
					'Iterate through a list of 32-bit hexadecimal numbers',
					'Use each value as an index into a lookup table of ASCII character codes',
					'Store ASCII bytes sequentially in memory',
					'Use post-increment addressing for efficient memory traversal',
				],
				skills: [
					'ARM assembly memory addressing',
					'Pointer arithmetic and post-increment addressing mode',
					'Indexed lookup table usage',
					'Byte and word load/store instructions',
				],
				sampleOutput: `
        Memory at 0x00001500 contains: 41 42 43 31 32 34 39 33 44 46 45 37 35 36 38 30
        // Corresponding ASCII characters: "ABC12493DFE75680"
      `,
			},
		],
	},
];
