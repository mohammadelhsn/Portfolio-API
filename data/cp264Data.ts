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
		title: '📝 Assignments',
		description: 'Generated documentation for each assignment',
		numberOfEntries: 10,
	},
	{
		title: '🔬 Labs',
		description: 'Generated documentation for each lab',
		numberOfEntries: 9,
	},
	{
		title: '💡 Examples',
		description:
			'Below are documented example programs that explore various C programming concepts and data structures:',
		numberOfEntries: 31,
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
		items: ['Arrays and Linked Lists', 'Stacks and Queues', 'Recursion'],
		title: 'Core Data Structures',
		eventKey: '0',
	},
	{
		items: [
			'Trees and Binary Search Trees (BST)',
			'Graphs and Graph Algorithms',
		],
		title: 'Trees & Graphs',
		eventKey: '1',
	},
	{
		items: ['Hash Tables', 'Sorting and Searching algorithms'],
		title: 'Algorithms & Hashing',
		eventKey: '2',
	},
];

export const TechData = [
	{
		bolded: 'Programming Language:',
		nonBolded: 'C',
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
				id: 't04',
				name: 'Task 4 - Print Entered Name',
				description:
					'Create a program that prompts the user to enter their name and then prints a greeting message including the entered name.',
				objectives: [
					'Prompt the user for input',
					'Store the user input in a variable',
					'Print a personalized greeting message using the entered name',
				],
				sampleOutput: `Please enter your name: Mohammad
Pleased to meet you 
Mohammad`,
				skills: ['Python', 'Input Handling', 'Output Formatting', 'Variables'],
			},
			{
				id: 't06',
				name: 'Task 6 - Calculate Total Pay',
				description:
					'Create a program that calculates and displays the total pay based on a fixed salary and bonus.',
				objectives: [
					'Define fixed values for salary and bonus',
					'Calculate total pay by summing salary and bonus',
					'Display the result using a print statement',
				],
				sampleOutput: `Your pay is 3700.0`,
				skills: [
					'Python',
					'Variables',
					'Arithmetic Operations',
					'Output Formatting',
				],
			},
		],
	},
	{
		name: 'Lab 2',
		id: 'elha7950_l02',
		tasks: [
			{
				id: 't01',
				name: 'Task 1 - Celsius to Fahrenheit Converter',
				description:
					'Build a program that converts a temperature value from Celsius to Fahrenheit using the standard conversion formula.',
				objectives: [
					'Prompt the user to enter a temperature in Celsius',
					'Use the formula: Fahrenheit = (9/5) * Celsius + 32',
					'Display the result in Fahrenheit using formatted output',
				],
				sampleOutput: `Temperature (C): 25

Temperature (F): 77.0`,
				skills: [
					'Python',
					'User Input',
					'Arithmetic Operations',
					'Constants',
					'Formatted Output',
				],
			},
			{
				id: 't02',
				name: 'Task 2 - Fahrenheit to Celsius Converter',
				description:
					'Create a program that converts a temperature value from Fahrenheit to Celsius using the standard conversion formula.',
				objectives: [
					'Prompt the user to enter a temperature in Fahrenheit',
					'Use the formula: Celsius = (Fahrenheit - 32) * (5/9)',
					'Display the result in Celsius using formatted output',
				],
				sampleOutput: `Temperature (F): 77

Temperature (C): 25.0`,
				skills: [
					'Python',
					'User Input',
					'Arithmetic Operations',
					'Constants',
					'Formatted Output',
				],
			},
			{
				id: 't03',
				name: 'Task 3 - Dog Grooming Income Calculator',
				description:
					'Create a program that calculates the total income for a dog grooming business based on the number of large and small dogs groomed in a day.',
				objectives: [
					'Prompt the user to enter the number of large and small dogs groomed',
					'Use fixed rates: $75 for large dogs, $50 for small dogs',
					'Calculate the total earnings for the day',
					'Display the result using formatted output',
				],
				sampleOutput: `Number of large dogs groomed: 3
Number of small dogs groomed: 2

Total earned for the day: $ 325`,
				skills: [
					'Python',
					'User Input',
					'Constants',
					'Arithmetic Calculations',
					'Formatted Output',
				],
			},
			{
				id: 't04',
				name: 'Task 4 - Multiply Two Fractions',
				description:
					'Write a program that multiplies two fractions using the formula: r = (n1/d1) * (n2/d2), where n1 and d1 are the first numerator and denominator, and n2 and d2 are the second.',
				objectives: [
					'Prompt the user to enter numerators and denominators for two fractions',
					'Use the formula: r = (n1 / d1) * (n2 / d2)',
					'Calculate the result as a floating-point product',
					'Display the result using formatted output',
				],
				sampleOutput: `First numerator: 1
First denominator: 2
Second numerator: 3
Second denominator: 4

Product: 0.375`,
				skills: [
					'Python',
					'User Input',
					'Fraction Arithmetic',
					'Formatted Output',
					'Order of Operations',
				],
			},
			{
				id: 't05',
				name: 'Lab 2, Task 5 - Weekly Pay Calculator',
				description:
					'Write and test a program that asks the user to input their hourly rate of pay and the number of hours worked in the past week, then calculates and outputs their total pay for the week.',
				objectives: [
					'Prompt the user to enter their hourly rate as a float',
					'Prompt the user to enter the number of hours worked as a float',
					'Multiply the hourly rate by the hours worked to calculate total pay',
					'Print the total weekly pay using an f-string',
				],
				sampleOutput: `Hourly rate of pay: 18.5
Hours worked in the week: 40

Total pay for the week: $ 740.0`,
				skills: [
					'Python',
					'User Input',
					'Float Data Type',
					'Arithmetic Operations',
					'Formatted Strings (f-strings)',
				],
			},
			{
				id: 't06',
				name: 'Lab 2, Task 6 - Mortgage Payment Calculator',
				description:
					'This program calculates and prints the monthly mortgage payment based on the principal, number of years, and yearly interest rate using the standard loan amortization formula.',
				objectives: [
					'Prompt the user to enter the mortgage principal as an integer',
					'Prompt the user to enter the number of years as an integer',
					'Prompt the user to enter the yearly interest rate as a float (percentage)',
					'Convert the yearly interest rate to a monthly rate',
					'Calculate the number of total payments (months)',
					'Apply the loan payment formula to compute the monthly payment',
					'Print the monthly payment using an f-string',
				],
				sampleOutput: `Mortgage principal ($): 250000
Number of years: 25
Yearly interest rate (%): 4.5

The monthly payments are: $ 1386.1443745454062`,
				skills: [
					'Python',
					'User Input',
					'Float and Integer Data Types',
					'Mathematical Expressions',
					'Loan Payment Formula',
					'Formatted Strings (f-strings)',
				],
			},
			{
				id: 't07',
				name: 'Lab 2, Task 7 - Flyer Distribution Calculator',
				description:
					'A charity wants to evenly distribute flyers among volunteers. This program prompts the user to enter the number of flyers and volunteers, then calculates and prints how many flyers each volunteer should get and how many will be left over.',
				objectives: [
					'Prompt the user to enter the number of flyers as an integer',
					'Prompt the user to enter the number of volunteers as an integer',
					'Use integer division to calculate how many flyers each volunteer gets',
					'Use the modulus operator to calculate how many flyers are left over',
					'Print both values using formatted output',
				],
				sampleOutput: `Number of flyers: 53
Number of volunteers: 5

Flyers per volunteer: 10
Flyers left over: 3`,
				skills: [
					'Python',
					'User Input',
					'Integer Division',
					'Modulus Operator',
					'Formatted Strings (f-strings)',
				],
			},
			{
				id: 't08',
				name: 'Lab 2, Task 8 - BMI and BMI Prime Calculator',
				description:
					"This program calculates and prints the user's Body Mass Index (BMI) and BMI Prime. The user provides their height and weight, and chooses the appropriate BMI upper limit based on their region. The program uses this to compute BMI Prime as a ratio of the BMI to the upper limit.",
				objectives: [
					'Prompt the user to enter their height in meters as a float',
					'Prompt the user to enter their weight in kilograms as a float',
					'Prompt the user to enter the BMI upper limit (23 or 25) as an integer',
					'Calculate BMI using the formula: weight / height^2',
					'Calculate BMI Prime as BMI / upper limit',
					'Print both BMI and BMI Prime, rounded to two decimal places',
				],
				sampleOutput: `Enter your height (m): 1.75
Enter your weight (kg): 68
Enter your upper limit BMI (23 if you are from South East Asia and Southern China, 25 for everyone else): 25

Body Mass Index (kg/m^2) = 22.2
BMI Prime = 0.89`,
				skills: [
					'Python',
					'User Input',
					'Float and Integer Data Types',
					'Arithmetic Operations',
					'Rounding',
					'Formatted Strings (f-strings)',
				],
			},
			{
				id: 't09',
				name: 'Lab 2, Task 9 - Open-Top Cylinder Cost Calculator',
				description:
					'This program calculates the cost of producing open-top cylindrical containers. The user provides the diameter, height, material cost per square cm, and number of containers. The surface area is the sum of the side and base area. Pi is stored as 3.14.',
				objectives: [
					'Prompt the user to enter the diameter of the base in cm',
					'Prompt the user to enter the height of the cylinder in cm',
					'Prompt the user to enter the cost of material per cm²',
					'Prompt the user to enter the number of containers to produce',
					'Calculate the radius from the diameter',
					'Calculate the surface area using the formula: (2πrh + πr²)',
					'Calculate the cost for one container and the total cost for all',
					'Print both the cost for one and all containers',
				],
				sampleOutput: `Diameter of container base (cm): 10
Height of container (cm): 20
Cost of material ($/cm^2): 0.05
Number of containers: 3

The total cost of one containers is $ 109.9
The total cost of all containers is $ 329.7`,
				skills: [
					'Python',
					'User Input',
					'Constants',
					'Arithmetic Operations',
					'Area Calculations',
					'Formatted Strings (f-strings)',
				],
			},
			{
				id: 't10',
				name: 'Lab 2, Task 10 - Meal Cost Calculator with Tax and Tip',
				description:
					'This program asks the user for the cost of a meal and the percentages for tax and tip, then prints a formatted bill. The tip is applied only to the food cost, not the tax.',
				objectives: [
					'Prompt the user to enter the cost of the meal as a float',
					'Prompt the user to enter the sales tax percentage as a float and convert it to a decimal',
					'Prompt the user to enter the tip percentage as a float and convert it to a decimal',
					'Calculate the tax and tip amounts based on the food charge',
					'Calculate the total by summing the food charge, tax, and tip',
					'Print a formatted bill showing the subtotal, tax, tip, and total',
				],
				sampleOutput: `Food Charge: $50
Sales Tax in (%): 13
Tip in (%): 15

Cost of meal:
Subtotal: $ 50.0
     Tax: $ 6.5
     Tip: $ 7.5
------------------
   Total: $ 64.0`,
				skills: [
					'Python',
					'User Input',
					'Percentage Calculations',
					'Float Data Type',
					'Arithmetic Operations',
					'Formatted Strings (f-strings)',
				],
			},
			{
				name: 'Lab 2, Task 11 - Projected Profit Calculator',
				id: 't11',
				description:
					'A company has determined that its annual profit is typically 18 percent of total sales. This program asks the user to enter the projected amount of total sales and displays the calculated profit based on a fixed 18% rate.',
				objectives: [
					'Prompt the user to enter the projected total annual sales as a float',
					'Store the profit percentage (18%) as a constant',
					'Calculate the projected profit by multiplying the sales by the percentage',
					'Print the result using an f-string',
				],
				sampleOutput: `Enter projected annual sales: $100000

The projected profit on sales of $ 100000.0 is $ 18000.0`,
				skills: [
					'Python',
					'User Input',
					'Constants',
					'Float Data Type',
					'Arithmetic Operations',
					'Formatted Strings (f-strings)',
				],
			},
			{
				name: 'Lab 2, Task 12 - Time Conversion from Seconds',
				id: 't12',
				description:
					'This program takes a number of seconds as input and calculates the equivalent duration in days, hours, minutes, and seconds using floor division and remainders.',
				objectives: [
					'Prompt the user to enter a total time in seconds as an integer',
					'Use constants to define the number of seconds in a day, hour, and minute',
					'Use floor division to determine days, hours, and minutes',
					'Use modulus to update remaining seconds at each step',
					'Print the result in days, hours, minutes, and seconds format',
				],
				sampleOutput: `Number of seconds: 100000

Days: 1 Hours: 3 Minutes: 46 Seconds: 40`,
				skills: [
					'Python',
					'User Input',
					'Constants',
					'Integer Division',
					'Modulus Operator',
					'Formatted Strings (f-strings)',
				],
			},
			{
				name: 'Lab 2, Task 13 - Final Grade Calculator',
				id: 't13',
				description:
					'This program calculates the final grade for a student based on a midterm worth 35% and an exam worth 65% of the course grade. The user inputs the two grades, and the final result is printed rounded to one decimal place.',
				objectives: [
					'Prompt the user to enter the midterm and exam marks as floats',
					'Store the weightings for midterm and exam as constants (0.35 and 0.65)',
					'Calculate the weighted average using the formula: midterm * 0.35 + exam * 0.65',
					'Round the final result to one decimal place',
					'Print the final grade using an f-string',
				],
				sampleOutput: `Midterm mark (%): 72
Exam mark (%): 83

Final Grade (%): 79.9`,
				skills: [
					'Python',
					'User Input',
					'Constants',
					'Float Arithmetic',
					'Weighted Average',
					'Rounding',
					'Formatted Strings (f-strings)',
				],
			},
			{
				name: 'Lab 2, Task 14 - Mac & Cheese Ingredient Calculator',
				id: 't14',
				description:
					'This program calculates the required ingredients to make a user-defined number of servings of Mac and Cheese. The base recipe makes 6 servings and uses constants for ingredient amounts. The output is scaled proportionally and displayed to two decimal places.',
				objectives: [
					'Prompt the user to enter the number of servings as an integer',
					'Store the default ingredient amounts for 6 servings as constants',
					'Calculate a scaling factor based on the desired servings',
					'Multiply each ingredient by the scaling factor',
					'Print the adjusted ingredient list with two decimal places',
				],
				sampleOutput: `Enter servings of Mac & Cheese: 3

3 serving(s) of Mac & Cheese requires:
milk (cups): 2.0
butter (tablespoons): 4.0
flour (cups): 0.25
salt (teaspoons): 1.0`,
				skills: [
					'Python',
					'User Input',
					'Constants',
					'Arithmetic Operations',
					'Scaling Recipes',
					'Formatted Output',
				],
			},
		],
	},
	{
		name: 'Lab 3',
		id: 'elha7950_l03',
		tasks: [],
	},
	{
		name: 'Lab 4',
		id: 'elha7950_l04',
		tasks: [
			{
				id: 't01',
				name: 'Calculate Diameter of a Circle',
				description:
					'Prompt the user to enter a radius and print the diameter of the circle.',
				objectives: [
					'Get radius from user',
					'Use the diameter function to compute diameter',
					'Print the result',
				],
				sampleOutput: 'Enter radius: 5\nDiameter: 10.0',
				skills: ['Python', 'Functions', 'Math'],
			},
			{
				id: 't02',
				name: 'Calculate Circumference',
				description:
					'Prompt the user to enter a radius and compute the circumference of a circle.',
				objectives: [
					'Get radius from user',
					'Use the circumference function',
					'Print the result',
				],
				sampleOutput: 'Enter radius: 3\nCircumference: 18.85',
				skills: ['Python', 'Functions', 'Math', 'pi'],
			},
			{
				id: 't03',
				name: 'Area of a Circle',
				description:
					'Prompt the user for a radius and print the area using the area function.',
				objectives: [
					'Get radius from user',
					'Call the area function',
					'Display the result',
				],
				sampleOutput: 'Enter radius: 2\nArea: 12.57',
				skills: ['Python', 'Functions', 'Math'],
			},
			{
				id: 't04',
				name: 'Square Pyramid Geometry',
				description:
					'Compute slant height, area, and volume of a square pyramid using base and height.',
				objectives: [
					'Prompt user for base and height',
					'Use square_pyramid function',
					'Display all three results',
				],
				sampleOutput:
					'Base: 4\nHeight: 6\nSlant Height: 7.2\nArea: 80.0\nVolume: 32.0',
				skills: ['Python', 'Functions', 'Return Tuples'],
			},
			{
				id: 't05',
				name: 'Right Triangle Properties',
				description:
					'Given adjacent and opposite sides, compute the hypotenuse, perimeter, and area.',
				objectives: [
					'Prompt user for two sides',
					'Use right_triangle function',
					'Output all results',
				],
				sampleOutput:
					'Adjacent: 3\nOpposite: 4\nHypotenuse: 5.0\nPerimeter: 12.0\nArea: 6.0',
				skills: ['Python', 'Pythagoras', 'Functions'],
			},
			{
				id: 't06',
				name: 'Pythagorean Circle',
				description:
					'Calculate circle properties (radius, diameter, circumference, area) based on triangle sides.',
				objectives: [
					'Prompt user for s1 and s2',
					'Use pythag function',
					'Display results',
				],
				sampleOutput:
					's1: 3\ns2: 4\nRadius: 5.0\nDiameter: 10.0\nCircumference: 31.4\nArea: 78.54',
				skills: ['Python', 'Functions', 'Chaining'],
			},
			{
				id: 't07',
				name: 'Total Coin Value',
				description:
					'Ask user for number of nickels, dimes, quarters, loonies, and toonies. Print total dollar value.',
				objectives: [
					'Prompt for coin counts',
					'Use total_change function',
					'Output total value',
				],
				sampleOutput:
					'Nickels: 3\nDimes: 2\nQuarters: 1\nLoonies: 4\nToonies: 0\nTotal: $6.05',
				skills: ['Python', 'Functions', 'Constants'],
			},
			{
				id: 't08',
				name: 'Computer Purchase Cost',
				description:
					'Calculate the total purchase cost of computers including commission.',
				objectives: [
					'Prompt for unit price, quantity, and commission percent',
					'Use computer_costs function',
					'Output both pre-commission and total cost',
				],
				sampleOutput:
					'Cost: 1000\nQty: 2\nCommission: 10\nBefore: $2000.0\nAfter: $2200.0',
				skills: ['Python', 'Functions', 'Percentages'],
			},
			{
				id: 't09',
				name: 'Multiply Two Fractions',
				description:
					'Multiply two user-defined fractions and return numerator, denominator, and decimal result.',
				objectives: [
					'Prompt for both fractions',
					'Use fraction_product function',
					'Display numerator, denominator, and float result',
				],
				sampleOutput: '1/2 * 3/4 = 3/8 = 0.375',
				skills: ['Python', 'Functions', 'Fractions'],
			},
			{
				id: 't10',
				name: 'Future Population',
				description:
					'Estimate population after a number of years given birth, death, and immigration rates.',
				objectives: [
					'Prompt for initial pop, birth/death/immigration intervals, and years',
					'Use population function',
					'Display new population',
				],
				sampleOutput: 'New population after 5 years: 34567890',
				skills: ['Python', 'Math', 'Functions'],
			},
		],
		constants: [
			{
				name: 'NICKEL_VALUE',
				value: '0.05',
				description: 'Value of a nickel in dollars',
			},
			{
				name: 'DIME_VALUE',
				value: '0.10',
				description: 'Value of a dime in dollars',
			},
			{
				name: 'QUARTER_VALUE',
				value: '0.25',
				description: 'Value of a quarter in dollars',
			},
			{
				name: 'LOONIE_VALUE',
				value: '1.00',
				description: 'Value of a loonie in dollars',
			},
			{
				name: 'TOONIE_VALUE',
				value: '2.00',
				description: 'Value of a toonie in dollars',
			},
			{ name: 'SECONDS_PER_MINUTE', value: '60' },
			{ name: 'SECONDS_PER_HOUR', value: '3600' },
			{ name: 'SECONDS_PER_DAY', value: '86400' },
			{ name: 'SECONDS_PER_WEEK', value: '604800' },
			{ name: 'SECONDS_PER_MONTH', value: '2419200' },
			{ name: 'SECONDS_PER_YEAR', value: '31536000' },
			{
				name: 'FREEZE_DIFFERENCE',
				value: '32',
				description:
					'Difference between Celsius and Fahrenheit freezing points',
			},
			{ name: 'SECONDS_IN_A_DAY', value: '86400' },
			{ name: 'SECONDS_IN_AN_HOUR', value: '3600' },
			{ name: 'SECONDS_IN_A_MIN', value: '60' },
		],
		functions: [
			{
				functionName: 'diameter',
				signature: 'diameter(radius: float) -> float',
				description: 'Returns the diameter of a circle given the radius.',
			},
			{
				functionName: 'circumference',
				signature: 'circumference(radius: float) -> float',
				description: 'Returns the circumference of a circle given the radius.',
			},
			{
				functionName: 'area',
				signature: 'area(radius: float) -> float',
				description: 'Returns the area of a circle given the radius.',
			},
			{
				functionName: 'square_pyramid',
				signature:
					'square_pyramid(base: float, height: float) -> tuple[float, float, float]',
				description:
					'Calculates slant height, area, and volume of a square pyramid.',
			},
			{
				functionName: 'right_triangle',
				signature:
					'right_triangle(adjacent: float, opposite: float) -> tuple[float, float, float]',
				description:
					'Calculates hypotenuse, perimeter, and area of a right triangle.',
			},
			{
				functionName: 'pythag',
				signature:
					'pythag(s1: float, s2: float) -> tuple[float, float, float, float]',
				description:
					'Returns radius, diameter, circumference, and area of a circle defined by a right triangle.',
			},
			{
				functionName: 'total_change',
				signature:
					'total_change(nickels: int, dimes: int, quarters: int, loonies: int, toonies: int) -> float',
				description: 'Calculates total value of Canadian coins.',
			},
			{
				functionName: 'computer_costs',
				signature:
					'computer_costs(computer_cost: float, computers_bought: int, commission_percent: float) -> tuple[float, float]',
				description:
					'Calculates pre-commission and total cost for computer purchases.',
			},
			{
				functionName: 'fraction_product',
				signature:
					'fraction_product(num1: int, den1: int, num2: int, den2: int) -> tuple[int, int, float]',
				description: 'Multiplies two fractions and returns the result.',
			},
			{
				functionName: 'population',
				signature:
					'population(size: int, births: int, deaths: int, immigrants: int, years: int) -> int',
				description:
					'Estimates future population based on demographic intervals.',
			},
			{
				functionName: 'slope',
				signature: 'slope(x1: float, y1: float, x2: float, y2: float) -> float',
				description: 'Calculates the slope between two points.',
			},
			{
				functionName: 'c_to_f',
				signature: 'c_to_f(celsius: int) -> float',
				description: 'Converts Celsius temperature to Fahrenheit.',
			},
			{
				functionName: 'f_to_c',
				signature: 'f_to_c(fahrenheit: int) -> float',
				description: 'Converts Fahrenheit temperature to Celsius.',
			},
			{
				functionName: 'time_values',
				signature: 'time_values(seconds: int) -> tuple[int, int, int]',
				description:
					'Returns the number of days, hours, and minutes in a given number of seconds.',
			},
			{
				functionName: 'time_split',
				signature:
					'time_split(initial_seconds: int) -> tuple[int, int, int, int]',
				description:
					'Breaks total seconds into days, hours, minutes, and seconds.',
			},
		],
	},

	{
		name: 'Lab 5',
		id: 'elha7950_l05',
		tasks: [],
		functions: [],
	},
	{
		name: 'Lab 6',
		id: 'elha7950_l06',
		tasks: [],
		functions: [],
	},
	{
		name: 'Lab 7',
		id: 'elha7950_l07',
		tasks: [],
		functions: [],
	},
	{
		name: 'Lab 8',
		id: 'elha7950_l08',
		tasks: [],
		functions: [],
	},
	{
		name: 'Lab 9',
		id: 'elha7950_l09',
		tasks: [],
		functions: [],
	},
	{
		name: 'Lab 10',
		id: 'elha7950_l10',
		tasks: [],
		functions: [],
	},
	{
		name: 'Lab 11',
		id: 'elha7950_l11',
		tasks: [],
		functions: [],
	},
];
export const AssignmentData: AssessmentDataType[] = [
	{
		name: 'Assignment 1',
		id: 'elha7950_a01',
		tasks: [
			{
				id: 't01',
				name: 'Task 1 - Quotes and Print Statements',
				description:
					'This task demonstrates your understanding of the use of single, double, and triple quotes in Python by using four print functions to output specific lines of text.',
				objectives: [
					'Use single quotes to print a sentence that includes double quotes',
					'Use triple double-quotes to print a multi-line paragraph',
					'Use double quotes to print a regular sentence',
					'Use triple single-quotes to print a quote that includes both single and double quotation marks',
				],
				sampleOutput: `What is a "program"?
A program is a sequence of instructions that specifies how to perform a computation. The details look different in different languages, but a few basic instructions appear in just about every language:
input: Get data from the keyboard, a file, or some other device.
output: Display data on the screen or send data to a file or other device.
math: Perform basic mathematical operations like addition and multiplication.
conditional execution: Check for certain conditions and execute the appropriate code.
repetition: Perform some action repeatedly, usually with some variation.
Believe it or not, that's pretty much all there is to it.
"You have enemies? Good. That means you've stood up for something, sometime in your life." Winston Churchill`,
				skills: ['Python', 'Print Statements', 'Quotes', 'Multiline Strings'],
			},
			{
				id: 't02',
				name: 'Task 2 - Age and Favourite Band',
				description:
					'This program asks the user for their age and their favourite band, then prints a formatted sentence with their responses.',
				objectives: [
					'Prompt the user to enter their age as an integer',
					'Prompt the user to enter their favourite band as a string',
					'Store the input values in variables',
					'Use an f-string to print a sentence combining both inputs',
				],
				sampleOutput: `What is your age? 20
What is your favourite band? Coldplay

I am 20 years old and Coldplay is my favourite band.`,
				skills: [
					'Python',
					'User Input',
					'Variables',
					'Data Types',
					'Formatted Strings (f-strings)',
				],
			},
			{
				id: 't03',
				name: 'Task 3 - Miles to Kilometres Converter',
				description:
					'This program asks the user for a length in miles and prints the equivalent length in kilometres using 1.61 as the conversion factor.',
				objectives: [
					'Prompt the user to enter a length in miles as a float',
					'Store the input in a variable',
					'Define a constant for the conversion factor (1.61)',
					'Multiply miles by the conversion factor to calculate kilometres',
					'Print the result using an f-string',
				],
				sampleOutput: `Length in miles: 5

Length in km: 8.05`,
				skills: [
					'Python',
					'User Input',
					'Float Data Type',
					'Constants',
					'Mathematical Operations',
					'Formatted Strings (f-strings)',
				],
			},
			{
				id: 't04',
				name: 'Task 4 - Dosa Cost Calculator',
				description:
					'This program asks the user for the cost of one dosa and the number of dosas they want, then calculates and prints the total cost.',
				objectives: [
					'Prompt the user to enter the cost of one dosa as a float',
					'Prompt the user to enter the number of dosas as an integer',
					'Calculate the total cost by multiplying the two values',
					'Print the total cost using an f-string',
				],
				sampleOutput: `Cost of 1 dosa: $2.5
Number of dosa(s): 4

Total cost of 4 dosas: $ 10.0`,
				skills: [
					'Python',
					'User Input',
					'Float and Integer Data Types',
					'Arithmetic Operations',
					'Formatted Strings (f-strings)',
				],
			},
			{
				id: 't05',
				name: 'Task 5 - Compound Interest Calculator',
				description:
					'This program calculates and prints compound interest using the formula A = P(1 + r/n)^(nt), where P is the principal amount, r is the annual interest rate (decimal), t is the number of years, n is the number of times interest is compounded per year, and A is the accumulated amount.',
				objectives: [
					'Prompt the user to enter the principal amount as a float',
					'Prompt the user to enter the interest rate as a percentage and convert it to a decimal',
					'Prompt the user to enter the number of years',
					'Prompt the user to enter the number of times the interest is compounded per year',
					'Apply the compound interest formula to calculate the accumulated amount',
					'Print the final balance using an f-string',
				],
				sampleOutput: `Principal: $1000
Interest (%): 5
Number of years: 2
Number of times interest compounded per year: 4

Balance: $ 1104.486328125`,
				skills: [
					'Python',
					'User Input',
					'Float and Integer Data Types',
					'Mathematical Expressions',
					'Formatted Strings (f-strings)',
					'Compound Interest Formula',
				],
			},
		],
	},
	{
		name: 'Assignment 2',
		id: 'elha7950_a02',
		tasks: [],
	},
	{
		name: 'Assignment 3',
		id: 'elha7950_a03',
		tasks: [],
		functions: [],
	},
	{
		name: 'Assignment 4',
		id: 'elha7950_a04',
		tasks: [],
		functions: [],
	},
	{
		name: 'Assignment 5',
		id: 'elha7950_a05',
		tasks: [],
		functions: [],
	},
	{
		name: 'Assignment 6',
		id: 'elha7950_a06',
		tasks: [],
		functions: [],
	},
	{
		name: 'Assignment 7',
		id: 'elha7950_a07',
		tasks: [],
		functions: [],
	},
	{
		name: 'Assignment 8',
		id: 'elha7950_a08',
		tasks: [],
		functions: [],
	},
	{
		name: 'Assignment 9',
		id: 'elha7950_a09',
		tasks: [],
		functions: [],
	},
];
