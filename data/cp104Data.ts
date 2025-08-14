import type {
	pageData,
	TaskData,
	ExampleData,
	FunctionsData,
	ConstantsData,
	AssessmentDataType,
} from '../interfaces/General';
import Task from '../structures/Task';
import Functions from '../structures/Functions';
import Constant from '../structures/Constant';
import Assessment from '../structures/Assessment';
/**
 *
 */
export const baseURL = 'https://mohammadelhsn.github.io/';

export const PAGEDATA: pageData[] = [
	{
		title: 'Assignments',
		description: 'Generated documentation for each assignment',
		numberOfEntries: 9,
	},
	{
		title: 'Labs',
		description: 'Generated documentation for each lab',
		numberOfEntries: 11,
	},
	{
		title: 'Examples',
		description: 'Generated documentation for each example',
		numberOfEntries: 0,
	},
];

export const EXAMPLEDATA: ExampleData[] = [];

export const TopicsData = [
	{
		items: [
			'Variables and Data Types',
			'Control Structures (if-else, loops)',
			'Functions',
		],
		title: 'Programming Fundamentals',
		eventKey: '0',
	},
	{
		items: ['Lists, Tuples, and Dictionaries', 'File I/O', 'Error Handling'],
		title: 'Core Python Features',
		eventKey: '1',
	},
	{
		items: ['Basic Algorithms (Searching, Sorting)'],
		title: 'Basic Algorithms',
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
			new Task(
				'Task 4 - Print Entered Name',
				't04',
				'Create a program that prompts the user to enter their name and then prints a greeting message including the entered name.',
				[
					'Prompt the user for input',
					'Store the user input in a variable',
					'Print a personalized greeting message using the entered name',
				],
				`Please enter your name: Mohammad
Pleased to meet you 
Mohammad`,
				['Python', 'Input Handling', 'Output Formatting', 'Variables']
			),
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
		tasks: [
			{
				name: 'Print Poem with Triple Quotes',
				id: 't01',
				description: `Use a single print function with triple double quotes to print a poem with indentation and a quote.`,
				objectives: [
					'Use triple-quoted strings for multiline output',
					'Preserve line breaks and indentation',
				],
				sampleOutput: `'I'm a Little Astronaut' by Jean Warren
I'm a little astronaut
    Flying to the moon.
        My rocket is ready,
        We blast off soon.
I climb aboard
    And close the hatch.
        5-4-3-2-1, off we blast!`,
				skills: ['Python', 'Print Formatting'],
			},
			{
				name: 'Multiple Prints with Indentation',
				id: 't02',
				description: `Use multiple print statements and double quotes to output a poem with indentation.`,
				objectives: [
					'Use multiple print calls',
					'Format indentation using spaces',
				],
				sampleOutput: `"Twinkle Twinkle Little Star" by Jane Taylor
Twinkle, twinkle, little star,
    How I wonder what you are!
        Up above the world so high,
        Like a diamond in the sky.
Twinkle, twinkle, little star,
    How I wonder what you are!`,
				skills: ['Python', 'Print Formatting'],
			},
			{
				name: 'Print Selected Quotes',
				id: 't03',
				description: `Print selected quotes from Mark Twain using multiple print statements with appropriate quotation marks.`,
				objectives: ['Handle quotes inside strings', 'Print multiple lines'],
				sampleOutput: `Selected quotes from Mark Twain:
"Do the right thing. It will gratify some people and astonish the rest."
"All generalizations are false, including this one."
"It is better to keep your mouth closed and let people think you are a fool
than to open it and remove all doubt."`,
				skills: ['Python', 'String Literals'],
			},
			{
				name: 'Calculate Discount',
				id: 't04',
				description: `Ask user for a number and percent (floats), then calculate and print the discount.`,
				objectives: [
					'Get user input and convert to float',
					'Perform percentage calculations',
					'Format output to one decimal place',
				],
				sampleOutput: `A 20.0 discount on 100.0 is 20.0`,
				skills: ['Python', 'User Input', 'Arithmetic'],
			},
			{
				name: 'Calculate Difference',
				id: 't05',
				description: `Ask user for two integers, calculate and print the difference with integer formatting.`,
				objectives: [
					'Get user input and convert to int',
					'Perform subtraction',
					'Format output as integer',
				],
				sampleOutput: `The difference between 20 and 10 is 10`,
				skills: ['Python', 'User Input', 'Arithmetic'],
			},
			{
				name: 'Calculate Total Cost',
				id: 't06',
				description: `Ask user for a float cost and int quantity, print total cost with formatting.`,
				objectives: [
					'Get user input as mixed types',
					'Multiply and format output to 2 decimals',
				],
				sampleOutput: `Given a cost of $10.00 and a quantity of 5 the total is $50.00`,
				skills: ['Python', 'User Input', 'Arithmetic'],
			},
			{
				name: 'Sum Meal Costs',
				id: 't07',
				description: `Ask user for three meal costs as floats, print each and total with aligned formatting.`,
				objectives: [
					'Input multiple floats',
					'Sum values',
					'Align output columns',
				],
				sampleOutput: `
Meal         Cost
Breakfast    $ 10.50
Lunch        $ 12.00
Supper       $ 15.25
Total        $ 37.75`,
				skills: ['Python', 'Input', 'String Formatting'],
			},
			{
				name: 'Sum Cubic Metres',
				id: 't08',
				description: `Ask user for three float amounts (dirt, gravel, sand), print each and total aligned.`,
				objectives: ['Float input and sum', 'Align decimal formatting'],
				sampleOutput: `
Material   Cubic Metres
Dirt       10.0
Gravel     20.0
Sand       15.0
Total      45.0`,
				skills: ['Python', 'Input', 'String Formatting'],
			},
			{
				name: 'Sum Clothing Costs',
				id: 't09',
				description: `Ask user for three float clothing costs, print each and total cost aligned.`,
				objectives: [
					'Float input',
					'Sum and format with currency',
					'Align columns',
				],
				sampleOutput: `
Clothes      Cost
Sweatband    $ 12.00
Pants        $ 20.00
Jacket       $ 50.00
Total        $ 82.00`,
				skills: ['Python', 'Input', 'String Formatting'],
			},
			{
				name: 'Print Date with Leading Zeros',
				id: 't10',
				description: `Ask user for year, month, and day as int, print in yyyy/mm/dd format with leading zeros.`,
				objectives: ['Integer input', 'Format with leading zeros'],
				sampleOutput: `
The date: 2023/01/05`,
				skills: ['Python', 'Input', 'String Formatting'],
			},
			{
				name: 'Format Locations with Width and Alignment',
				id: 't11',
				description: `Print three strings with fixed width (20 chars) and different alignments with fill character '-'.`,
				objectives: ['String formatting with alignment', 'Use fill characters'],
				sampleOutput: `
left--------------------
-------middle--------
--------------------right`,
				skills: ['Python', 'String Formatting'],
			},
			{
				name: 'Sum Integers with Underscore Formatting',
				id: 't12',
				description: `Sum three integers and print each and the total with right-aligned underscore padding.`,
				objectives: [
					'Integer arithmetic',
					'Format output with padding and alignment',
				],
				sampleOutput: `
Values
First:  __100
Second: __34
Third:  __933
Total:  __1067`,
				skills: ['Python', 'String Formatting'],
			},
			{
				name: 'Convert Seconds to H:M:S',
				id: 't13',
				description: `Ask user for seconds as int, convert and print hours, minutes, and seconds.`,
				objectives: [
					'Integer input',
					'Arithmetic with division and modulus',
					'Formatted output',
				],
				sampleOutput: `
There are 1 hour(s), 30 minute(s), and 15 second(s) in 5415 second(s)`,
				skills: ['Python', 'Arithmetic', 'Input'],
			},
			{
				name: 'Convert Minutes to Days, Hours, Minutes',
				id: 't14',
				description: `Ask user for minutes as int, convert and print days, hours, and minutes.`,
				objectives: [
					'Integer input',
					'Arithmetic with division and modulus',
					'Formatted output',
				],
				sampleOutput: `
There are 2 day(s), 5 hour(s), and 30 minute(s) in 3090 minute(s)`,
				skills: ['Python', 'Arithmetic', 'Input'],
			},
			{
				name: 'Formatting Outputs and Errors',
				id: 't15',
				description: `Demonstrate printing variables with various format specifiers. Comment out lines that cause errors.`,
				objectives: [
					'Use format specifiers for int, float, string',
					'Understand type compatibility in formatting',
					'Comment out code that causes errors',
				],
				sampleOutput: `
654321
654321.000000
Hello World`,
				skills: ['Python', 'Formatting', 'Error Handling'],
			},
		],
		constants: [],
		functions: [],
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
		constants: [
			{
				name: 'ACC_DUE_TO_GRAVITY',
				value: '9.8',
				description: 'Acceleration due to gravity (m/s^2)',
			},
			{
				name: 'NO_FRIENDS',
				value: '0',
				description: 'Discount for no friends',
			},
			{
				name: 'ONE_FRIEND',
				value: '5 / 100',
				description: 'Discount for 1 friend',
			},
			{
				name: 'TWO_FRIENDS',
				value: '10 / 100',
				description: 'Discount for 2 friends',
			},
			{
				name: 'THREE_FRIENDS',
				value: '15 / 100',
				description: 'Discount for 3 or more friends',
			},
			{
				name: 'TAX_RATE',
				value: '3.625 / 100',
				description: 'Tax deduction rate',
			},
			{ name: 'I', value: "'I'", description: 'Roman numeral for 1' },
			{ name: 'V', value: "'V'", description: 'Roman numeral for 5' },
			{ name: 'X', value: "'X'", description: 'Roman numeral for 10' },
			{
				name: 'UNKNOWN',
				value: '0',
				description: 'Unknown wind speed threshold',
			},
			{ name: 'BREEZE', value: '39', description: 'Minimum speed for Breeze' },
			{
				name: 'STRONG_WIND',
				value: '62',
				description: 'Minimum speed for Strong Wind',
			},
			{
				name: 'GALE_WIND',
				value: '89',
				description: 'Minimum speed for Gale Wind',
			},
			{
				name: 'WHOLE_GALE',
				value: '118',
				description: 'Minimum speed for Whole Gale',
			},
			{
				name: 'LITTLE_DAMAGE',
				value: '5',
				description: 'Earthquake intensity for little damage',
			},
			{
				name: 'SOME_DAMAGE',
				value: '5.5',
				description: 'Earthquake intensity for some damage',
			},
			{
				name: 'SERIOUS_DAMAGE',
				value: '6.5',
				description: 'Earthquake intensity for serious damage',
			},
			{
				name: 'DISASTER',
				value: '7.5',
				description: 'Earthquake intensity for disaster',
			},
			{
				name: 'FULL_TIME_LONG',
				value: '5 / 100',
				description: 'Raise for full-time ≥ 10 yrs',
			},
			{
				name: 'FULL_TIME_SHORT',
				value: '1.5 / 100',
				description: 'Raise for full-time < 4 yrs',
			},
			{
				name: 'PART_TIME_LONG',
				value: '3 / 100',
				description: 'Raise for part-time > 10 yrs',
			},
			{
				name: 'PART_TIME_SHORT',
				value: '1 / 100',
				description: 'Raise for part-time < 4 yrs',
			},
			{ name: 'OTHERS', value: '2 / 100', description: 'Default raise' },
			{
				name: 'LOAN_MIN_YEARS',
				value: '5',
				description: 'Minimum years for loan eligibility',
			},
			{
				name: 'LOAN_MIN_SALARY',
				value: '30000',
				description: 'Minimum salary for loan eligibility',
			},
			{ name: 'INFANT', value: '3', description: 'Age threshold for infants' },
			{ name: 'SENIOR', value: '65', description: 'Age threshold for seniors' },
			{
				name: 'STUDENT_MIN',
				value: '10',
				description: 'Minimum age for students',
			},
			{
				name: 'STUDENT_MAX',
				value: '18',
				description: 'Maximum age for students',
			},
			{ name: 'ADULT_MIN', value: '18', description: 'Minimum age for adults' },
			{ name: 'ADULT_MAX', value: '65', description: 'Maximum age for adults' },
			{ name: 'KID_MIN', value: '3', description: 'Minimum age for kids' },
			{ name: 'KID_MAX', value: '10', description: 'Maximum age for kids' },
			{
				name: 'INFANT_PRICE',
				value: '0',
				description: 'Ticket price for infants',
			},
			{
				name: 'SENIOR_PRICE',
				value: '4.00',
				description: 'Ticket price for seniors',
			},
			{
				name: 'STUDENT_PRICE_IN',
				value: '1.00',
				description: 'In-school student ticket price',
			},
			{
				name: 'STUDENT_PRICE_OUT',
				value: '3.00',
				description: 'Out-of-school student ticket price',
			},
			{
				name: 'ADULT_PRICE',
				value: '5.00',
				description: 'Ticket price for adults',
			},
			{
				name: 'KID_PRICE',
				value: '2.00',
				description: 'Ticket price for kids',
			},
			{ name: 'BURGER_PRICE', value: '6.00', description: 'Price of burger' },
			{ name: 'WINGS', value: '8.00', description: 'Price of wings' },
			{ name: 'FRIES', value: '1.50', description: 'Price of fries combo' },
			{ name: 'SALAD', value: '2.00', description: 'Price of salad combo' },
		],
		functions: [
			{
				functionName: 'magic_date',
				signature: '(day: number, month: number, year: number) => boolean',
				description: 'Determines if a date is magic: day * month == year',
			},
			{
				functionName: 'get_weight',
				signature: '(mass: number) => [number, string]',
				description:
					'Calculates weight and classifies as heavy, light, or average',
			},
			{
				functionName: 'gym_cost',
				signature: '(cost: number, friends: number) => number',
				description:
					'Calculates gym membership cost after discount by number of friends',
			},
			{
				functionName: 'closest',
				signature: '(target: number, v1: number, v2: number) => number',
				description:
					'Returns the value closest to target, preferring v1 if equal',
			},
			{
				functionName: 'is_leap',
				signature: '(year: number) => boolean',
				description: 'Determines if year is a leap year',
			},
			{
				functionName: 'is_divisible',
				signature: '(n: number, i: number, j: number) => boolean',
				description: 'Checks if n is divisible by both i and j',
			},
			{
				functionName: 'get_pay',
				signature: '(hourly_rate: number, hours_worked: number) => number',
				description: 'Calculates net wage with overtime and tax deduction',
			},
			{
				functionName: 'roman_numeral',
				signature: '(n: number) => string | null',
				description: 'Converts number 1-10 to Roman numeral',
			},
			{
				functionName: 'wind_speed',
				signature: '(speed: number) => string',
				description: 'Categorizes wind speed into descriptive category',
			},
			{
				functionName: 'richter',
				signature: '(intensity: number) => string',
				description:
					'Describes earthquake damage level from Richter scale value',
			},
			{
				functionName: 'quadrant',
				signature: '(x: number, y: number) => string',
				description: 'Determines coordinate quadrant or axis location',
			},
			{
				functionName: 'pay_raise',
				signature: '(status: string, years: number, salary: number) => number',
				description:
					'Calculates pay raise based on employment status and years',
			},
			{
				functionName: 'loan',
				signature: '() => boolean',
				description:
					'Determines if employee qualifies for loan based on years and salary',
			},
			{
				functionName: 'ticket',
				signature: '() => number',
				description: 'Calculates ticket price based on age and student status',
			},
			{
				functionName: 'fast_food',
				signature: '() => number',
				description: 'Calculates fast food order price with optional combos',
			},
		],
		tasks: [
			{
				name: 'Magic Date',
				id: 't01',
				description:
					'Determines if a date is magic. A date is magic if day * month equals year.',
				objectives: [
					'Understand date arithmetic',
					'Implement condition checking',
					'Return boolean result',
				],
				sampleOutput: 'True',
				skills: ['Python', 'Conditionals', 'Boolean Logic'],
			},
			{
				name: 'Weight Classification',
				id: 't02',
				description:
					"Describes a mass's weight as heavy (>1000 N), light (<10 N), or average.",
				objectives: [
					'Calculate weight',
					'Compare numeric ranges',
					'Return weight and classification',
				],
				sampleOutput: "(49.0, 'average')",
				skills: ['Python', 'Arithmetic', 'Conditionals'],
			},
			{
				name: 'Gym Cost Calculation',
				id: 't03',
				description:
					'Calculates gym membership cost applying discount based on number of friends signed up.',
				objectives: [
					'Apply discount logic',
					'Use constants',
					'Return final cost',
				],
				sampleOutput: '45.0',
				skills: ['Python', 'Arithmetic', 'Conditionals'],
			},
			{
				name: 'Closest Value',
				id: 't04',
				description:
					'Determines which of two values is closest to a target value.',
				objectives: [
					'Calculate differences',
					'Compare distances',
					'Return closest value',
				],
				sampleOutput: '3.4',
				skills: ['Python', 'Math', 'Conditionals'],
			},
			{
				name: 'Leap Year Check',
				id: 't05',
				description:
					'Determines if a year is a leap year based on divisibility rules.',
				objectives: [
					'Understand leap year rules',
					'Use modulo operator',
					'Return boolean result',
				],
				sampleOutput: 'False',
				skills: ['Python', 'Modulo', 'Boolean Logic'],
			},
			{
				name: 'Divisibility Check',
				id: 't06',
				description:
					'Checks if a number is evenly divisible by two other numbers.',
				objectives: [
					'Modulo operations',
					'Boolean logic',
					'Return boolean result',
				],
				sampleOutput: 'True',
				skills: ['Python', 'Modulo', 'Boolean Logic'],
			},
			{
				name: 'Net Pay Calculation',
				id: 't07',
				description:
					'Calculates employee net wage including overtime pay and tax deduction.',
				objectives: [
					'Calculate gross pay',
					'Apply tax rate',
					'Return net pay rounded',
				],
				sampleOutput: '2025.78',
				skills: ['Python', 'Arithmetic', 'Conditionals'],
			},
			{
				name: 'Roman Numeral Conversion',
				id: 't08',
				description:
					'Converts integers 1 through 10 to their Roman numeral equivalent.',
				objectives: [
					'Map numbers to Roman numerals',
					'Handle edge cases',
					'Return string or null',
				],
				sampleOutput: "'VII'",
				skills: ['Python', 'String Manipulation', 'Conditionals'],
			},
			{
				name: 'Wind Speed Category',
				id: 't09',
				description:
					'Categorizes wind speed into descriptive categories like Breeze or Hurricane.',
				objectives: [
					'Use thresholds',
					'Return category string',
					'Handle unknown speeds',
				],
				sampleOutput: "'Gale Winds'",
				skills: ['Python', 'Conditionals', 'Constants'],
			},
			{
				name: 'Earthquake Damage Level',
				id: 't10',
				description:
					'Determines earthquake damage description based on Richter scale intensity.',
				objectives: [
					'Compare intensity levels',
					'Return damage description',
					'Use constants',
				],
				sampleOutput: "'Serious damage: walls may crack or fall'",
				skills: ['Python', 'Conditionals', 'Constants'],
			},
			{
				name: 'Coordinate Quadrant',
				id: 't11',
				description:
					'Determines location on Cartesian plane of (x, y) coordinates.',
				objectives: [
					'Check axis conditions',
					'Determine quadrant',
					'Return location string',
				],
				sampleOutput: "'Y-Axis'",
				skills: ['Python', 'Conditionals', 'Geometry'],
			},
			{
				name: 'Pay Raise Calculation',
				id: 't12',
				description:
					'Calculates salary increase based on employment status and years of service.',
				objectives: [
					'Check employment type',
					'Apply raise percentages',
					'Return new salary',
				],
				sampleOutput: '25375',
				skills: ['Python', 'Conditionals', 'Arithmetic'],
			},
			{
				name: 'Loan Eligibility',
				id: 't13',
				description:
					'Determines if employee qualifies for a loan based on years employed and salary.',
				objectives: [
					'Gather user input',
					'Check eligibility criteria',
					'Return boolean result',
				],
				sampleOutput: 'True',
				skills: ['Python', 'Input/Output', 'Conditionals'],
			},
			{
				name: 'Ticket Pricing',
				id: 't14',
				description:
					'Calculates school play ticket price based on age and student status.',
				objectives: [
					'Handle age categories',
					'Ask for student status',
					'Return ticket price',
				],
				sampleOutput: '1.00',
				skills: ['Python', 'Input/Output', 'Conditionals'],
			},
			{
				name: 'Fast Food Order Price',
				id: 't15',
				description: 'Calculates meal price based on order and combo options.',
				objectives: [
					'Gather order input',
					'Add side prices if combo',
					'Return total price',
				],
				sampleOutput: '7.5',
				skills: ['Python', 'Input/Output', 'Conditionals'],
			},
		],
	},
	{
		name: 'Lab 6',
		id: 'elha7950_l06',
		constants: [
			{
				name: 'SPACE_CHAR',
				value: "' '",
				description: 'Space character used for formatting',
			},
		],
		functions: [
			{
				functionName: 'sum_even',
				signature: '(num: number) => number',
				description:
					'Sums and returns the total of all even numbers from 2 to num (inclusive).',
			},
			{
				functionName: 'sum_odd',
				signature: '(num: number) => number',
				description:
					'Sums and returns the total of all odd numbers from 1 to num (inclusive).',
			},
			{
				functionName: 'sum_all',
				signature:
					'(start: number, finish: number, increment: number) => number',
				description:
					'Sums and returns all numbers from start to finish (inclusive) by increment.',
			},
			{
				functionName: 'sum_partial_harmonic',
				signature: '(n: number) => number',
				description:
					'Sums and returns the total of a partial harmonic series from 1 to n.',
			},
			{
				functionName: 'draw_rectangle',
				signature: '(height: number, width: number, char: string) => void',
				description:
					'Prints a rectangle of given height and width using the specified character.',
			},
			{
				functionName: 'draw_triangle',
				signature: '(height: number, char: string) => void',
				description:
					'Prints a triangle of given height using the specified character.',
			},
			{
				functionName: 'draw_arrow',
				signature: '(width: number, char: string) => void',
				description:
					'Prints an arrow shape with given width using the specified character.',
			},
			{
				functionName: 'draw_hollow_triangle',
				signature: '(width: number, char: string) => void',
				description:
					'Prints a hollow triangle of given width using the specified character.',
			},
			{
				functionName: 'bottles_of_beer',
				signature: '(n: number) => void',
				description:
					"Prints n verses of the song '99 Bottles of Beer on the Wall'.",
			},
			{
				functionName: 'treadmill',
				signature:
					'(burnt_per_minute: number, start: number, end: number, inc: number) => void',
				description:
					'Calculates and prints calories burnt on a treadmill over a given time range.',
			},
			{
				functionName: 'retirement',
				signature: '(age: number, salary: number, increase: number) => void',
				description:
					'Calculates and prints a table of earnings from current age to retirement at 65.',
			},
			{
				functionName: 'gic',
				signature: '(value: number, years: number, rate: number) => number',
				description:
					'Calculates and prints GIC value over years and returns the final value.',
			},
			{
				functionName: 'lumber',
				signature:
					'(b_min: number, b_max: number, b_inc: number, h_min: number, h_max: number, h_inc: number) => void',
				description:
					'Prints a table of engineering properties of lumber for given base and height ranges.',
			},
			{
				functionName: 'ia_hours',
				signature: '(ia_count: number) => number',
				description:
					'Calculates total hours worked by Instructional Assistants over 6 weeks.',
			},
			{
				functionName: 'statistics',
				signature: '(n: number) => [number, number, number, number]',
				description:
					'Collects n user values, then returns min, max, total, and average.',
			},
		],
		tasks: [
			{
				name: 'Sum Even Numbers',
				id: 't01',
				description:
					'Sum all even numbers from 2 up to the given number (inclusive).',
				objectives: ['Use for loops', 'Accumulate sums', 'Return integer sum'],
				sampleOutput: '3852',
				skills: ['Loops', 'Arithmetic'],
			},
			{
				name: 'Sum Odd Numbers',
				id: 't02',
				description:
					'Sum all odd numbers from 1 up to the given number (inclusive).',
				objectives: ['Use for loops', 'Accumulate sums', 'Return integer sum'],
				sampleOutput: '3849',
				skills: ['Loops', 'Arithmetic'],
			},
			{
				name: 'Sum All with Increment',
				id: 't03',
				description:
					'Sum numbers from start to finish, incrementing by a given amount.',
				objectives: [
					'Use for loops with increments',
					'Accumulate sums',
					'Return integer sum',
				],
				sampleOutput: '45',
				skills: ['Loops', 'Arithmetic'],
			},
			{
				name: 'Sum Partial Harmonic',
				id: 't04',
				description: 'Calculate sum of partial harmonic series from 1 to n.',
				objectives: ['Use loops', 'Perform float division', 'Return float sum'],
				sampleOutput: '1.8333333333',
				skills: ['Loops', 'Arithmetic', 'Floats'],
			},
			{
				name: 'Draw Rectangle',
				id: 't05',
				description:
					'Print a rectangle with specified height, width, and character.',
				objectives: ['Use loops', 'Print formatted output'],
				sampleOutput: '###########',
				skills: ['Loops', 'Printing'],
			},
			{
				name: 'Draw Triangle',
				id: 't06',
				description:
					'Print a triangle with specified height using given character.',
				objectives: ['Use loops', 'Format spaces and characters'],
				sampleOutput: '     $',
				skills: ['Loops', 'Printing'],
			},
			{
				name: 'Draw Arrow',
				id: 't07',
				description: 'Print an arrow shape with given width and character.',
				objectives: ['Use loops', 'Print increasing and decreasing patterns'],
				sampleOutput: '*\n**\n***\n**\n*',
				skills: ['Loops', 'Printing'],
			},
			{
				name: 'Draw Hollow Triangle',
				id: 't08',
				description:
					'Print a hollow triangle shape with given width and character.',
				objectives: ['Use loops', 'Print spaces inside shape'],
				sampleOutput: '*\n**\n* *\n***',
				skills: ['Loops', 'Printing'],
			},
			{
				name: 'Bottles of Beer',
				id: 't09',
				description: "Print verses of the '99 Bottles of Beer' song.",
				objectives: [
					'Use loops',
					'Conditional pluralization',
					'Print formatted strings',
				],
				sampleOutput: '99 bottles of beer on the wall, 99 bottles of beer.',
				skills: ['Loops', 'Conditionals', 'Printing'],
			},
			{
				name: 'Treadmill Calories',
				id: 't10',
				description:
					'Calculate and print calories burned over time intervals on treadmill.',
				objectives: [
					'Use loops',
					'Perform float multiplication',
					'Print formatted output',
				],
				sampleOutput: 'Calories burned after 5 minutes: 19.5',
				skills: ['Loops', 'Arithmetic', 'Printing'],
			},
			{
				name: 'Retirement Salary Table',
				id: 't11',
				description:
					'Print salary progression table from current age to 65 with yearly increase.',
				objectives: [
					'Use loops',
					'Calculate yearly increases',
					'Print formatted table',
				],
				sampleOutput: '25 56000.00\n26 56840.00',
				skills: ['Loops', 'Arithmetic', 'Printing'],
			},
			{
				name: 'GIC Value Table',
				id: 't12',
				description:
					'Print GIC value over years and return the final value after interest accrual.',
				objectives: [
					'Use loops',
					'Calculate compound interest',
					'Print formatted table',
					'Return final value',
				],
				sampleOutput: 'Year 0 Value 10.00\nYear 10 Value 10240.00',
				skills: ['Loops', 'Arithmetic', 'Printing', 'Return Values'],
			},
			{
				name: 'Lumber Engineering Table',
				id: 't13',
				description:
					'Print table of lumber engineering properties for ranges of base and height.',
				objectives: [
					'Use nested loops',
					'Calculate engineering properties',
					'Print formatted output',
				],
				sampleOutput: 'Base 2 Height 2 CSA 4.00 MoI 1.33 SM 1.33',
				skills: ['Nested Loops', 'Arithmetic', 'Printing'],
			},
			{
				name: 'IA Hours',
				id: 't14',
				description:
					'Calculate total IA work hours over 6 weeks by querying input each week.',
				objectives: [
					'Use nested loops',
					'Collect input',
					'Accumulate total hours',
				],
				sampleOutput: 'Total hours: 48.5',
				skills: ['Loops', 'Input', 'Accumulation'],
			},
			{
				name: 'Statistics',
				id: 't15',
				description:
					'Collect n values from user and compute min, max, total, and average.',
				objectives: [
					'Use loops',
					'Collect input',
					'Calculate statistics',
					'Return multiple values',
				],
				sampleOutput: '(2.0, 99.0, 230.0, 46.0)',
				skills: ['Loops', 'Input', 'Arithmetic', 'Return Values'],
			},
		],
	},
	{
		id: 'elha7950_l07',
		name: 'Lab 7',
		tasks: [
			{
				id: 't01',
				name: 'hi_lo_game',
				description: 'Plays a random higher-lower guessing game.',
				objectives: [
					'Use random.randint to generate a number',
					'Loop user guesses until correct',
					'Count number of guesses',
					'Give feedback if guess is too high or low',
				],
				sampleOutput: 'Congratulations! You got it! You made X guesses.',
				skills: ['loops', 'conditionals', 'user input'],
			},
			{
				id: 't02',
				name: 'power_of_two',
				description:
					'Determines the nearest power of 2 greater than or equal to a given target.',
				objectives: [
					'Calculate powers of two in a loop',
					'Return first power of two >= target',
				],
				sampleOutput: '4',
				skills: ['loops', 'exponentiation'],
			},
			{
				id: 't03',
				name: 'population_growth',
				description:
					'Calculates years to reach a target population based on growth rate.',
				objectives: [
					'Calculate growth year by year',
					'Use a while loop',
					'Return the number of years needed',
				],
				sampleOutput: '22',
				skills: ['loops', 'arithmetic operations'],
			},
			{
				id: 't04',
				name: 'sum_squares',
				description:
					'Determines the sum of squares closest to and greater than or equal to a target value.',
				objectives: ['Calculate sum of squares', 'Stop when sum >= target'],
				sampleOutput: '30',
				skills: ['loops', 'arithmetic'],
			},
			{
				id: 't05',
				name: 'positive_statistics',
				description:
					'Collects positive numbers from user input and calculates min, max, total, average.',
				objectives: [
					'Loop user input until negative number',
					'Track min, max, total, and count',
					'Calculate average',
				],
				sampleOutput: '(1.0, 9.0, 22.0, 5.5)',
				skills: ['loops', 'conditionals', 'user input'],
			},
			{
				id: 't06',
				name: 'num_categories',
				description:
					'Counts number of positive, negative, and zero values entered until -999 is input.',
				objectives: [
					'Loop user input until sentinel value -999',
					'Count categories of numbers',
				],
				sampleOutput: '(2, 3, 5)',
				skills: ['loops', 'conditionals', 'user input'],
			},
			{
				id: 't07',
				name: 'meal_costs',
				description:
					'Collects meal costs per day and sums breakfast, lunch, supper totals.',
				objectives: [
					'Loop through multiple days',
					'Sum costs per meal category',
					'Ask user if another day should be entered',
				],
				sampleOutput: '(25.50, 30.00, 45.75, 101.25)',
				skills: ['loops', 'user input', 'arithmetic'],
			},
			{
				id: 't08',
				name: 'budget',
				description:
					'Collects monthly expenses and reports surplus, deficit, or balanced budget.',
				objectives: [
					'Loop user expenses until 0',
					'Calculate total expenses and remaining balance',
					'Determine budget status',
				],
				sampleOutput: "(450.0, -250.0, 'Deficit')",
				skills: ['loops', 'conditionals', 'user input'],
			},
			{
				id: 't09',
				name: 'get_int',
				description:
					'Prompts user for an integer between low and high until valid input.',
				objectives: ['Validate input range', 'Repeat prompt until valid'],
				sampleOutput: '50',
				skills: ['loops', 'input validation'],
			},
			{
				id: 't10',
				name: 'employee_payroll',
				description:
					'Calculates net payroll for multiple employees including overtime and tax.',
				objectives: [
					'Loop employee data input until ID 0',
					'Calculate gross pay and net pay with tax',
					'Sum total and average net pay',
				],
				sampleOutput: '(4500.75, 375.06)',
				skills: ['loops', 'arithmetic', 'conditionals'],
			},
		],
		functions: [
			{
				functionName: 'hi_lo_game',
				signature: 'hi_lo_game(high: int) -> int',
				description:
					'Plays a random higher-lower guessing game and returns number of guesses.',
			},
			{
				functionName: 'power_of_two',
				signature: 'power_of_two(target: int) -> int',
				description:
					'Returns the smallest power of 2 greater than or equal to target.',
			},
			{
				functionName: 'population_growth',
				signature:
					'population_growth(target: int, current: int, rate: float) -> int',
				description:
					'Calculates years to reach target population from current with given growth rate.',
			},
			{
				functionName: 'sum_squares',
				signature: 'sum_squares(target: int) -> int',
				description: 'Returns sum of squares >= target.',
			},
			{
				functionName: 'positive_statistics',
				signature: 'positive_statistics() -> tuple(float, float, float, float)',
				description:
					'Gets positive numbers from user and returns min, max, total, average.',
			},
			{
				functionName: 'num_categories',
				signature: 'num_categories() -> tuple(int, int, int)',
				description: 'Counts negatives, zeroes, and positives from user input.',
			},
			{
				functionName: 'meal_costs',
				signature: 'meal_costs() -> tuple(float, float, float, float)',
				description: 'Totals meal costs over multiple days.',
			},
			{
				functionName: 'budget',
				signature: 'budget(available: float) -> tuple(float, float, str)',
				description: 'Tracks expenses and determines budget status.',
			},
			{
				functionName: 'get_int',
				signature: 'get_int(low: int, high: int) -> int',
				description: 'Prompts user for valid integer input within range.',
			},
			{
				functionName: 'employee_payroll',
				signature: 'employee_payroll() -> tuple(float, float)',
				description: 'Calculates total and average net payroll for employees.',
			},
		],
		constants: [
			{
				name: 'TAX_AMOUNT',
				value: '3.625 / 100',
				description: 'Tax amount used for payroll calculation.',
			},
		],
	},
	{
		name: 'Lab 8',
		id: 'elha7950_l08',
		tasks: [
			{
				id: 't01',
				name: 'get_weekday_name',
				description: 'Returns the name of a day of the week given its number.',
				objectives: [
					'Return weekday name from integer 1-7',
					'Map 1 to Sunday, 7 to Saturday',
				],
				sampleOutput: `"Monday"`,
				skills: ['indexing', 'list access', 'basic function'],
			},
			{
				id: 't02',
				name: 'get_month_name',
				description: 'Returns the name of a month given its number.',
				objectives: [
					'Return month name from integer 1-12',
					'Map 1 to January, 12 to December',
				],
				sampleOutput: `"February"`,
				skills: ['indexing', 'list access', 'basic function'],
			},
			{
				id: 't03',
				name: 'get_digit_name',
				description: 'Returns the name of a digit given its number.',
				objectives: [
					'Return digit name from integer 0-9',
					'Map 0 to zero, 9 to nine',
				],
				sampleOutput: `"two"`,
				skills: ['indexing', 'list access', 'basic function'],
			},
			{
				id: 't04',
				name: 'generate_integer_list',
				description:
					'Generates a list of random integers between low and high.',
				objectives: [
					'Generate n random integers',
					'Each integer between low and high inclusive',
				],
				sampleOutput: '[...random integers...]',
				skills: ['random.randint', 'loops', 'list manipulation'],
			},
			{
				id: 't05',
				name: 'get_lotto_numbers',
				description: 'Generates a sorted list of unique lottery numbers.',
				objectives: [
					'Generate n unique random integers in range low to high',
					'Return sorted list',
				],
				sampleOutput: '[5, 11, 23, 34, 42, 48]',
				skills: ['random.randint', 'loops', 'list manipulation', 'sorting'],
			},
			{
				id: 't06',
				name: 'list_stats',
				description:
					'Returns smallest, largest, total, and average of a list of values.',
				objectives: [
					'Find smallest and largest value',
					'Calculate total sum',
					'Calculate average',
				],
				sampleOutput: '(-79, 96, 71, 7.1)',
				skills: ['list sorting', 'loops', 'arithmetic'],
			},
			{
				id: 't07',
				name: 'list_categorize',
				description:
					'Returns counts of negatives, positives, zeroes, evens, and odds in a list.',
				objectives: [
					'Count number of negative values',
					'Count number of positive values',
					'Count number of zeros',
					'Count number of even values',
					'Count number of odd values',
				],
				sampleOutput: '(5, 4, 1, 6, 4)',
				skills: ['conditionals', 'loops', 'modulo operations'],
			},
			{
				id: 't08',
				name: 'linear_search',
				description:
					'Searches for value in list and returns its first index or -1 if not found.',
				objectives: [
					'Find first index of a value in list',
					'Return -1 if value not found',
				],
				sampleOutput: '2',
				skills: ['loops', 'conditionals'],
			},
			{
				id: 't09',
				name: 'many_search',
				description:
					'Returns list of all indexes where value occurs in the list.',
				objectives: [
					'Find all indexes of value in list',
					'Return empty list if none found',
				],
				sampleOutput: '[1, 5]',
				skills: ['loops', 'list appending', 'conditionals'],
			},
			{
				id: 't10',
				name: 'min_search',
				description:
					'Returns list of indexes of the minimum value(s) in the list.',
				objectives: [
					'Find minimum value',
					'Return list of all indexes with that minimum',
				],
				sampleOutput: '[2, 9]',
				skills: ['list copying', 'sorting', 'loops'],
			},
			{
				id: 't11',
				name: 'dot_product',
				description: 'Calculates the dot product of two lists of numbers.',
				objectives: [
					'Multiply corresponding elements',
					'Sum the products',
					'Lists must be the same length',
				],
				sampleOutput: '135.0',
				skills: ['loops', 'arithmetic', 'list indexing'],
			},
			{
				id: 't12',
				name: 'list_sums',
				description: 'Calculates element-wise sums of two lists of numbers.',
				objectives: [
					'Sum corresponding elements from two lists',
					'Return list of sums',
					'Lists must be the same length',
				],
				sampleOutput: '[18, 5, 17, 6, 7]',
				skills: ['loops', 'list appending', 'arithmetic'],
			},
			{
				id: 't13',
				name: 'union',
				description:
					'Returns the union of two lists (unique elements from both).',
				objectives: [
					'Combine all unique elements from both lists',
					'No duplicates in the result',
				],
				sampleOutput: '[10, 3, 1, 8, 2, 7, 6, 32, 99]',
				skills: ['loops', 'list membership', 'conditionals'],
			},
			{
				id: 't14',
				name: 'intersection',
				description:
					'Returns the intersection of two lists (elements in both).',
				objectives: [
					'Find elements present in both lists',
					'Return unique elements only',
				],
				sampleOutput: '[10, 3]',
				skills: ['loops', 'list membership', 'conditionals'],
			},
			{
				id: 't15',
				name: 'symmetric_difference',
				description: 'Returns elements in one list or the other but not both.',
				objectives: [
					'Find elements unique to each list',
					'Return combined list without duplicates',
				],
				sampleOutput: '[1, 8, 2, 7, 6, 32, 99]',
				skills: ['loops', 'list membership', 'conditionals'],
			},
		],
		functions: [
			{
				functionName: 'get_weekday_name',
				signature: 'get_weekday_name(d: number) => string',
				description:
					'Returns the weekday name for a given number (1=Sunday, 7=Saturday).',
			},
			{
				functionName: 'get_month_name',
				signature: 'get_month_name(m: number) => string',
				description:
					'Returns the month name for a given number (1=January, 12=December).',
			},
			{
				functionName: 'get_digit_name',
				signature: 'get_digit_name(n: number) => string',
				description: 'Returns the digit name for a given number (0 to 9).',
			},
			{
				functionName: 'generate_integer_list',
				signature:
					'generate_integer_list(n: number, low: number, high: number) => number[]',
				description:
					'Generates a list of n random integers between low and high (inclusive).',
			},
			{
				functionName: 'get_lotto_numbers',
				signature:
					'get_lotto_numbers(n: number, low: number, high: number) => number[]',
				description:
					'Generates a sorted list of n unique random lottery numbers between low and high.',
			},
			{
				functionName: 'list_stats',
				signature:
					'list_stats(values: number[]) => [smallest: number, largest: number, total: number, average: number]',
				description:
					'Returns statistics (min, max, total, average) for a list of numbers.',
			},
			{
				functionName: 'list_categorize',
				signature:
					'list_categorize(values: number[]) => [negatives: number, positives: number, zeroes: number, evens: number, odds: number]',
				description:
					'Counts negatives, positives, zeroes, evens, and odds in a list.',
			},
			{
				functionName: 'linear_search',
				signature: 'linear_search(values: any[], value: any) => number',
				description:
					'Returns the index of first occurrence of value in values, or -1 if not found.',
			},
			{
				functionName: 'many_search',
				signature: 'many_search(values: any[], value: any) => number[]',
				description:
					'Returns a list of all indexes where value occurs in values.',
			},
			{
				functionName: 'min_search',
				signature: 'min_search(values: any[]) => number[]',
				description:
					'Returns a list of indexes of the minimum value(s) in values.',
			},
			{
				functionName: 'dot_product',
				signature:
					'dot_product(source1: number[], source2: number[]) => number',
				description:
					'Calculates and returns the dot product of two same-length lists.',
			},
			{
				functionName: 'list_sums',
				signature:
					'list_sums(source1: number[], source2: number[]) => number[]',
				description:
					'Returns a list of element-wise sums of two same-length lists.',
			},
			{
				functionName: 'union',
				signature: 'union(source1: any[], source2: any[]) => any[]',
				description:
					'Returns a list representing the union of unique elements from both lists.',
			},
			{
				functionName: 'intersection',
				signature: 'intersection(source1: any[], source2: any[]) => any[]',
				description:
					'Returns a list representing the intersection of elements present in both lists.',
			},
			{
				functionName: 'symmetric_difference',
				signature:
					'symmetric_difference(source1: any[], source2: any[]) => any[]',
				description:
					'Returns a list of elements present in one list but not both (symmetric difference).',
			},
		],
		constants: [
			{
				name: 'WEEKDAYS',
				description: 'List of weekday names starting with Sunday at index 0.',
				value: 'Sunday | Monday | Wednesday | Thursday | Friday | Saturday',
			},
			{
				name: 'MONTHS',
				description: 'List of month names starting with January at index 0.',
				value:
					'January | February | March | April | May | June | July | August | September | October | November | December',
			},
			{
				name: 'DIGITS',
				description: 'List of digit names from zero to nine.',
				value:
					'zero | one | two | three | four | five | six | seven | eight | nine',
			},
		],
	},
	{
		name: 'Lab 9',
		id: 'elha7950_l09',
		tasks: [
			{
				name: 'Hydroxide Check',
				id: 't01',
				description: 'Determines if a chemical formula is a hydroxide.',
				objectives: ['String operations'],
				sampleOutput: 'True',
				skills: ['String'],
			},
			{
				name: 'URL Categorizer',
				id: 't02',
				description: 'Categorizes a URL as business, non-profit, or other.',
				objectives: ['String suffix check'],
				sampleOutput: 'business',
				skills: ['String'],
			},
			{
				name: 'Parse Product Code',
				id: 't03',
				description: 'Parses a product code into category, ID, and qualifiers.',
				objectives: ['Slicing'],
				sampleOutput: "('ATV', '3482', 'S14')",
				skills: ['String'],
			},
			{
				name: 'Validate Product Code',
				id: 't04',
				description: 'Validates product code parts for format.',
				objectives: ['Validation', 'Slicing'],
				sampleOutput: '(True, True, False)',
				skills: ['String'],
			},
			{
				name: 'Password Strength Checker',
				id: 't05',
				description:
					'Checks the strength of a password based on length and character types.',
				objectives: ['Validation', 'Print output'],
				sampleOutput: 'not long enough\nno upper case\nno lower case',
				skills: ['String'],
			},
			{
				name: 'Palindrome Check',
				id: 'L9T06',
				description: 'Checks if a string is a palindrome, ignoring case.',
				objectives: ['Reversing', 'Case handling'],
				sampleOutput: 'True',
				skills: ['String'],
			},
			{
				name: 'Vowel Counter',
				id: 't07',
				description: 'Counts vowels in a string.',
				objectives: ['Character analysis'],
				sampleOutput: '5',
				skills: ['String'],
			},
			{
				name: 'Digit Counter',
				id: 't08',
				description: 'Counts digits in a string.',
				objectives: ['Character classification'],
				sampleOutput: '2',
				skills: ['String'],
			},
			{
				name: 'Special Character Counter',
				id: 't09',
				description: 'Counts special characters in a string.',
				objectives: ['Character classification'],
				sampleOutput: '2',
				skills: ['String'],
			},
			{
				name: 'Text Analyzer',
				id: 't10',
				description:
					'Counts uppercase, lowercase, digits, and whitespace in a string.',
				objectives: ['String parsing'],
				sampleOutput: '(3, 72, 0, 15)',
				skills: ['String'],
			},
			{
				name: 'Disemvowel',
				id: 't11',
				description: 'Removes vowels from a string while preserving case.',
				objectives: ['List operations', 'Join'],
				sampleOutput: "' thnk yr bk s n ttr pc f grbg.'",
				skills: ['String'],
			},
			{
				name: 'Comma to Period Replace',
				id: 't12',
				description: 'Replaces commas in a string with periods.',
				objectives: ['String replace'],
				sampleOutput: "'Number 1. Number 2. Number 3.'",
				skills: ['String'],
			},
			{
				name: 'Digit Sum',
				id: 't13',
				description: 'Calculates the total of all digits in a string.',
				objectives: ['Digit extraction'],
				sampleOutput: '10',
				skills: ['String'],
			},
			{
				name: 'String Distance',
				id: 't14',
				description: 'Calculates distance between two equal-length strings.',
				objectives: ['Comparison'],
				sampleOutput: '5',
				skills: ['String'],
			},
			{
				name: 'Expression Calculator',
				id: 't15',
				description: 'Evaluates a basic arithmetic expression.',
				objectives: ['Evaluation', 'Conditionals'],
				sampleOutput: '9',
				skills: ['String'],
			},
		],
		functions: [
			{
				functionName: 'is_hydroxide',
				signature: 'is_hydroxide(chemical: str) -> bool',
				description: "Returns True if a chemical ends in 'OH'.",
			},
			{
				functionName: 'url_categorize',
				signature: 'url_categorize(url: str) -> str',
				description: 'Categorizes a URL as business, non-profit, or other.',
			},
			{
				functionName: 'parse_code',
				signature: 'parse_code(product_code: str) -> tuple[str, str, str]',
				description: 'Parses product code into parts.',
			},
			{
				functionName: 'validate_code',
				signature:
					'validate_code(product_code: str) -> tuple[bool, bool, bool]',
				description: 'Validates format of product code.',
			},
			{
				functionName: 'password_strength',
				signature: 'password_strength(password: str) -> None',
				description: 'Prints feedback on password strength.',
			},
			{
				functionName: 'is_palindrome',
				signature: 'is_palindrome(s: str) -> bool',
				description: 'Checks if string is a palindrome.',
			},
			{
				functionName: 'vowel_count',
				signature: 'vowel_count(s: str) -> int',
				description: 'Counts number of vowels in a string.',
			},
			{
				functionName: 'digit_count',
				signature: 'digit_count(s: str) -> int',
				description: 'Counts number of digits in a string.',
			},
			{
				functionName: 'count_special_chars',
				signature: 'count_special_chars(s: str) -> int',
				description: 'Counts number of special characters in a string.',
			},
			{
				functionName: 'text_analyze',
				signature: 'text_analyze(txt: str) -> tuple[int, int, int, int]',
				description: 'Analyzes string character categories.',
			},
			{
				functionName: 'dsmvwl',
				signature: 'dsmvwl(string: str) -> str',
				description: 'Removes vowels from a string.',
			},
			{
				functionName: 'comma_period_replace',
				signature: 'comma_period_replace(string: str) -> str',
				description: 'Replaces commas with periods.',
			},
			{
				functionName: 'total_digits',
				signature: 'total_digits(string: str) -> int',
				description: 'Sums all digits in a string.',
			},
			{
				functionName: 'str_distance',
				signature: 'str_distance(s1: str, s2: str) -> int',
				description: 'Calculates character mismatch count between two strings.',
			},
			{
				functionName: 'calculate',
				signature: 'calculate(expr: str) -> float',
				description: 'Evaluates a simple expression with one-digit operands.',
			},
		],
		constants: [
			{ name: 'VOWELS', value: '["a", "e", "i", "o", "u"]' },
			{ name: 'SPECIAL_CHARS', value: '["#", "@", "$", "%", "&", "!"]' },
			{ name: 'ADDITION_CHAR', value: '"+"' },
			{ name: 'SUBTRACTION_CHAR', value: '"-"' },
			{ name: 'MULTIPLICATION_CHAR', value: '"*"' },
			{ name: 'MODULUS', value: '"%"' },
		],
	},
	{
		id: 'elha7950_l10',
		name: 'Lab 10',
		tasks: [
			{
				id: 't01',
				name: 'Lab 10 Task 1',
				description:
					'Find the n-th record in a comma-delimited sequential file.',
				objectives: ['File input', 'Line indexing', 'String splitting'],
				sampleOutput: 'Outputs the fields of the record at line n.',
				skills: ['file handling', 'list processing', 'string splitting'],
			},
			{
				id: 't02',
				name: 'Lab 10 Task 2',
				description: 'Find the record for a given ID in a sequential file.',
				objectives: ['Search by ID', 'File reading', 'Conditional matching'],
				sampleOutput: 'Returns the record with the given ID.',
				skills: ['file handling', 'looping', 'conditional logic'],
			},
			{
				id: 't03',
				name: 'Lab 10 Task 3',
				description: 'Find the customer with the largest balance.',
				objectives: ['Max value lookup', 'File reading', 'Data parsing'],
				sampleOutput: 'Prints the record with the largest balance.',
				skills: ['file handling', 'float comparison'],
			},
			{
				id: 't04',
				name: 'Lab 10 Task 4',
				description: 'Find the customer with the earliest sign-up date.',
				objectives: ['Min value lookup', 'Date string comparison'],
				sampleOutput: 'Prints the earliest sign-up record.',
				skills: ['file reading', 'string comparison'],
			},
			{
				id: 't05',
				name: 'Lab 10 Task 5',
				description: 'Appends a customer record to a CSV file.',
				objectives: ['File append', 'List to string conversion'],
				sampleOutput: 'Appends new customer data to file.',
				skills: ['file writing', 'string formatting'],
			},
			{
				id: 't06',
				name: 'Lab 10 Task 6',
				description:
					'Returns statistics (min, max, total, average) on the numbers in a file.',
				objectives: ['Statistical calculations', 'File processing'],
				sampleOutput: 'Displays smallest, largest, total, average.',
				skills: ['math operations', 'file reading'],
			},
			{
				id: 't07',
				name: 'Lab 10 Task 7',
				description: 'Appends the maximum number from a file to the end.',
				objectives: ['Max value extraction', 'File writing'],
				sampleOutput: 'Appends max number to file.',
				skills: ['list sorting', 'file appending'],
			},
			{
				id: 't08',
				name: 'Lab 10 Task 8',
				description: 'Appends a number that is the last number + 1.',
				objectives: ['Incremental logic', 'File manipulation'],
				sampleOutput: 'Appends last number + 1 to file.',
				skills: ['file reading', 'arithmetic'],
			},
			{
				id: 't09',
				name: 'Lab 10 Task 9',
				description: 'Counts how many times a number appears in a file.',
				objectives: ['Frequency count', 'File scanning'],
				sampleOutput: 'Prints the count of the value.',
				skills: ['counting', 'file reading'],
			},
			{
				id: 't10',
				name: 'Lab 10 Task 10',
				description: 'Counts how many times a word appears in a file.',
				objectives: ['Word frequency', 'Case-sensitive matching'],
				sampleOutput: 'Prints word count result.',
				skills: ['string matching', 'file iteration'],
			},
			{
				id: 't11',
				name: 'Lab 10 Task 11',
				description: 'Finds the last word with the longest length in a file.',
				objectives: ['Longest word lookup', 'String length comparison'],
				sampleOutput: 'Displays last longest word.',
				skills: ['file processing', 'length comparison'],
			},
			{
				id: 't12',
				name: 'Lab 10 Task 12',
				description: 'Finds the first word with the shortest length in a file.',
				objectives: ['Shortest word lookup', 'Early return'],
				sampleOutput: 'Displays first shortest word.',
				skills: ['file reading', 'string processing'],
			},
			{
				id: 't13',
				name: 'Lab 10 Task 13',
				description: 'Copies contents from one file to another.',
				objectives: ['File copy', 'Overwrite destination'],
				sampleOutput: 'Copies entire file.',
				skills: ['file read/write', 'looping'],
			},
			{
				id: 't14',
				name: 'Lab 10 Task 14',
				description: 'Copies n records from one file to another.',
				objectives: ['File copy', 'Truncate based on line count'],
				sampleOutput: 'Copies only n lines.',
				skills: ['slicing', 'file reading'],
			},
		],
		functions: [
			{
				functionName: 'customer_record',
				signature: 'def customer_record(fh, n)',
				description: 'Returns the n-th record from a comma-delimited file.',
			},
			{
				functionName: 'customer_by_id',
				signature: 'def customer_by_id(fh, id_number)',
				description: 'Finds and returns the record for a given customer ID.',
			},
			{
				functionName: 'customer_best',
				signature: 'def customer_best(fh)',
				description: 'Returns the record with the largest balance.',
			},
			{
				functionName: 'customer_first',
				signature: 'def customer_first(fh)',
				description: 'Returns the customer with the earliest sign-up date.',
			},
			{
				functionName: 'customer_append',
				signature: 'def customer_append(fh, fields)',
				description: 'Appends a new customer record to a CSV file.',
			},
			{
				functionName: 'number_stats',
				signature: 'def number_stats(fh)',
				description:
					'Calculates and returns min, max, total, and average from a file.',
			},
			{
				functionName: 'append_max_num',
				signature: 'def append_max_num(fh)',
				description: 'Appends the max number in the file to the end.',
			},
			{
				functionName: 'append_increment',
				signature: 'def append_increment(fh)',
				description: 'Appends the last number in the file plus one.',
			},
			{
				functionName: 'count_frequency_value',
				signature: 'def count_frequency_value(fh, value)',
				description: 'Counts how many times a number appears in a file.',
			},
			{
				functionName: 'count_frequency_word',
				signature: 'def count_frequency_word(fh, word)',
				description:
					'Counts how many times a word appears in a file (case-sensitive).',
			},
			{
				functionName: 'find_longest',
				signature: 'def find_longest(fh)',
				description: 'Returns the last word with the longest length.',
			},
			{
				functionName: 'find_shortest',
				signature: 'def find_shortest(fh)',
				description: 'Returns the first word with the shortest length.',
			},
			{
				functionName: 'file_copy',
				signature: 'def file_copy(fh_1, fh_2)',
				description: 'Copies all content from one file to another.',
			},
			{
				functionName: 'file_copy_n',
				signature: 'def file_copy_n(fh_1, fh_2, n)',
				description: 'Copies n lines from one file to another.',
			},
		],
		constants: [],
	},
	{
		id: 'elha7950_l11',
		name: 'Lab 11',
		tasks: [
			{
				id: 't01',
				name: 'Lab 11 Task 1',
				description:
					"Generates a 2D list of numbers of the given type, 'float' or 'int'.",
				objectives: [
					'Random number generation',
					'Matrix creation',
					'Uniform vs randint usage',
				],
				sampleOutput: '2D list of random floats or ints',
				skills: ['random', '2D lists'],
			},
			{
				id: 't02',
				name: 'Lab 11 Task 2',
				description:
					"Generates a 2D list of random lower case letter ('a' - 'z') values.",
				objectives: ['Random character generation', 'Matrix creation'],
				sampleOutput: '2D list of lowercase letters',
				skills: ['random', 'strings', '2D lists'],
			},
			{
				id: 't03',
				name: 'Lab 11 Task 3',
				description:
					'Prints the contents of a 2D list in a formatted table (float values).',
				objectives: ['Formatted print', 'Looping through 2D list'],
				sampleOutput: 'Printed float matrix with row/column headers',
				skills: ['formatting', 'printing'],
			},
			{
				id: 't04',
				name: 'Lab 11 Task 4',
				description:
					'Prints the contents of a 2D list of strings in a formatted table.',
				objectives: ['Formatted print', 'Row and column headings'],
				sampleOutput: 'Printed char matrix with spacing',
				skills: ['formatting', '2D list traversal'],
			},
			{
				id: 't05',
				name: 'Lab 11 Task 5',
				description:
					'Generates a 2D list of character values from a list of words.',
				objectives: ['Convert words to character matrix'],
				sampleOutput: "[['c', 'a', 't'], ['d', 'o', 'g']]",
				skills: ['strings', '2D lists'],
			},
			{
				id: 't06',
				name: 'Lab 11 Task 6',
				description:
					'Returns statistics on a 2D list: min, max, total, average.',
				objectives: ['Matrix traversal', 'Basic statistics'],
				sampleOutput: '(smallest, largest, total, average)',
				skills: ['math', 'list processing'],
			},
			{
				id: 't07',
				name: 'Lab 11 Task 7',
				description:
					'Finds the first locations [row, column] of the smallest and largest values.',
				objectives: ['Track positions during traversal'],
				sampleOutput: '([row, col], [row, col])',
				skills: ['comparison', 'list indexing'],
			},
			{
				id: 't08',
				name: 'Lab 11 Task 8',
				description:
					'Finds the first value smaller than n and returns its [row, column].',
				objectives: ['Early exit on condition', 'Matrix scan'],
				sampleOutput: '[row, col] or []',
				skills: ['conditional search', 'loops'],
			},
			{
				id: 't09',
				name: 'Lab 11 Task 9',
				description: 'Counts appearances of a character in a matrix.',
				objectives: ['Frequency count'],
				sampleOutput: 'int',
				skills: ['counting', '2D list traversal'],
			},
			{
				id: 't10',
				name: 'Lab 11 Task 10',
				description: 'Finds rows in matrix that exactly match a word.',
				objectives: ['Join row and compare'],
				sampleOutput: 'list of row indices',
				skills: ['string join', 'list comparison'],
			},
			{
				id: 't11',
				name: 'Lab 11 Task 11',
				description: 'Finds columns in matrix that exactly match a word.',
				objectives: ['Column-wise traversal', 'String building'],
				sampleOutput: 'list of column indices',
				skills: ['nested loops', 'index tracking'],
			},
			{
				id: 't12',
				name: 'Lab 11 Task 12',
				description:
					'Checks if a word matches the diagonal of a square matrix.',
				objectives: ['Diagonal scan'],
				sampleOutput: 'True or False',
				skills: ['index matching', 'matrix traversal'],
			},
			{
				id: 't13',
				name: 'Lab 11 Task 13',
				description:
					'Multiplies every element in a numeric matrix by a scalar.',
				objectives: ['In-place modification'],
				sampleOutput: 'None',
				skills: ['matrix manipulation', 'math'],
			},
			{
				id: 't14',
				name: 'Lab 11 Task 14',
				description:
					'Transposes a matrix (rows become columns and vice versa).',
				objectives: ['Transpose operation'],
				sampleOutput: 'transposed matrix',
				skills: ['list manipulation', 'matrix math'],
			},
			{
				id: 't15',
				name: 'Lab 11 Task 15',
				description:
					'Checks whether two matrices are equal in content and shape.',
				objectives: ['Matrix comparison'],
				sampleOutput: 'True or False',
				skills: ['comparison', 'matrix structure'],
			},
		],
		functions: [
			{
				functionName: 'generate_matrix_num',
				signature:
					'generate_matrix_num(rows: int, cols: int, low: float, high: float, value_type: str) -> list',
				description:
					'Generates a 2D list of either random floats or ints, depending on the specified value type.',
			},
			{
				functionName: 'generate_matrix_char',
				signature: 'generate_matrix_char(rows: int, cols: int) -> list',
				description: 'Generates a 2D list of random lowercase letters.',
			},
			{
				functionName: 'print_matrix_num',
				signature: 'print_matrix_num(matrix: list, value_type: str) -> None',
				description:
					'Prints a 2D numeric matrix with formatting and headers, using 2 decimals for floats.',
			},
			{
				functionName: 'print_matrix_char',
				signature: 'print_matrix_char(matrix: list) -> None',
				description:
					'Prints a 2D character matrix with proper alignment and headers.',
			},
			{
				functionName: 'words_to_matrix',
				signature: 'words_to_matrix(word_list: list) -> list',
				description:
					'Converts a list of equal-length words into a 2D list of characters.',
			},
			{
				functionName: 'matrix_stats',
				signature: 'matrix_stats(matrix: list) -> tuple',
				description:
					'Calculates and returns the smallest, largest, total, and average values of a numeric matrix.',
			},
			{
				functionName: 'find_position',
				signature: 'find_position(matrix: list) -> tuple',
				description:
					'Finds the [row, col] positions of the smallest and largest values in a numeric matrix.',
			},
			{
				functionName: 'find_less',
				signature: 'find_less(matrix: list, n: float) -> list',
				description:
					'Finds the position [row, col] of the first number in the matrix less than a target value.',
			},
			{
				functionName: 'count_frequency',
				signature: 'count_frequency(matrix: list, char: str) -> int',
				description:
					'Counts how many times a given character appears in a 2D list of strings.',
			},
			{
				functionName: 'find_word_horizontal',
				signature: 'find_word_horizontal(matrix: list, word: str) -> list',
				description:
					'Finds all rows in which the concatenated characters equal the given word.',
			},
			{
				functionName: 'find_word_vertical',
				signature: 'find_word_vertical(matrix: list, word: str) -> list',
				description:
					'Finds all columns in which the vertical concatenated characters equal the given word.',
			},
			{
				functionName: 'find_word_diagonal',
				signature: 'find_word_diagonal(matrix: list, word: str) -> bool',
				description:
					'Checks if a word matches the main diagonal of a square character matrix.',
			},
			{
				functionName: 'matrix_scalar_multiply',
				signature: 'matrix_scalar_multiply(matrix: list, num: float) -> None',
				description:
					'Multiplies every value in a numeric matrix by a scalar value (in-place).',
			},
			{
				functionName: 'matrix_transpose',
				signature: 'matrix_transpose(matrix: list) -> list',
				description:
					'Returns the transpose of a matrix (rows become columns and vice versa).',
			},
			{
				functionName: 'matrix_equal',
				signature: 'matrix_equal(matrix1: list, matrix2: list) -> bool',
				description:
					'Returns True if both matrices are equal in size and content; otherwise returns False.',
			},
		],
		constants: [
			{
				name: 'LETTERS',
				value: 'list[str]',
				description:
					"List of all lowercase ASCII letters from 'a' to 'z'. Used for generating random character matrices.",
			},
			{
				name: 'SPACE_CHAR',
				value: 'str',
				description:
					'Single space character used for formatting printed matrices.',
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
		tasks: [
			{
				name: 'Calculate Annual Tax',
				id: 't01',
				description: `This program calculates the annual tax paid by a company. The company's annual tax is 18.5 percent of total billing. The program asks the user to enter the projected total sales and prints the tax that is to be paid on that amount. The program must not ask the user for the tax rate, it should be defined as a constant.`,
				objectives: [
					'Prompt user for total sales',
					'Use a constant for tax rate (18.5%)',
					'Calculate annual tax based on total sales and tax rate',
					'Display a formatted tax report',
				],
				sampleOutput: `Enter the total sales: $100000
Projected Tax Report
--------------------------
Total sales:   $ 100000
Annual tax:    % 18.5
--------------------------
Tax:           $ 18500`,
				skills: ['Python', 'Constants', 'Input/Output', 'Basic Arithmetic'],
			},
			{
				name: 'Digit Difference',
				id: 't02',
				description: `This program asks the user to enter a positive digit number, then calculates the difference between the tens digit and the ones digit.`,
				objectives: [
					'Prompt user for a positive digit number',
					'Extract tens and ones digits using integer division and modulus',
					'Calculate difference between tens and ones digits',
					'Display the difference',
				],
				sampleOutput: `Enter a positive digit number: 56

The difference of the digits of 56 is -1`,
				skills: ['Python', 'Integer Division', 'Modulus', 'Input/Output'],
			},
			{
				name: 'Reformat Date',
				id: 't03',
				description: `This program asks the user for an integer representing a date in the format YYYYMMDD and prints the date reformatted as YYYY/MM/DD. The program uses integer division and modulus to extract date parts.`,
				objectives: [
					'Prompt user to enter date as integer YYYYMMDD',
					'Extract year, month, and day using integer division and modulus',
					'Print reformatted date in YYYY/MM/DD format',
				],
				sampleOutput: `Enter a date in the format YYYYMMDD: 20231007

The reformatted date: 2023/10/07`,
				skills: ['Python', 'Integer Division', 'Modulus', 'Date Formatting'],
			},
			{
				name: 'Flyers Distribution',
				id: 't04',
				description: `This program divides a number of flyers evenly amongst delivery people for distribution. It asks the user for the number of flyers and delivery people, then prints flyers per person and leftovers.`,
				objectives: [
					'Prompt user for number of flyers and delivery people',
					'Calculate flyers per delivery person using integer division',
					'Calculate leftover flyers using modulus',
					'Display results',
				],
				sampleOutput: `Number of flyers: 100
Number of delivery people: 6

Flyers per delivery person: 16
Flyers left over: 4`,
				skills: ['Python', 'Integer Division', 'Modulus', 'Input/Output'],
			},
			{
				name: 'Foundation and Wall Cost Calculator',
				id: 't05',
				description: `This program calculates the cost of concrete and bricks needed for a foundation and walls based on user inputs for dimensions and costs.`,
				objectives: [
					'Prompt user for foundation and wall dimensions and costs',
					'Calculate concrete volume needed for foundation',
					'Calculate total concrete cost',
					'Calculate bricks needed for walls',
					'Calculate total bricks cost',
					'Calculate total cost and display all results',
				],
				sampleOutput: `Foundation length (m): 10
Foundation width (m): 5
Foundation height (m): 0.5
Wall height (m): 3
Cost of concrete ($/m^3): 125
Cost of bricks ($/m^2): 15

Concrete needed for foundation (m^3): 25.00
Cost of concrete: $3,125.00
Bricks needed for walls (m^2): 90.00
Cost of bricks: $1,350.00
Total cost: $4,475.00`,
				skills: [
					'Python',
					'Float Arithmetic',
					'Input/Output',
					'Volume Calculation',
				],
			},
		],
		constants: [
			{
				name: 'TAX_RATE',
				value: '18.5 / 100',
				description: 'Annual tax rate used for calculation in Task 1',
			},
		],
	},
	{
		name: 'Assignment 3',
		id: 'elha7950_a03',
		constants: [
			{
				name: 'SQUARE_FEET_PER_ACRE',
				value: '43560',
				description: 'Number of square feet in one acre',
			},
			{
				name: 'ACC_DUE_TO_GRAVITY',
				value: '9.8',
				description: 'Acceleration due to gravity in m/s^2',
			},
		],
		functions: [
			{
				functionName: 'footage_to_acres',
				signature: '(square_feet: number) => number',
				description: 'Converts square footage to acres.',
			},
			{
				functionName: 'lawn_mow_time',
				signature: '(width: number, length: number, speed: number) => number',
				description: 'Determines how long it takes to mow a rectangular lawn.',
			},
			{
				functionName: 'extract_date',
				signature:
					'(date_number: number) => [year: number, month: number, day: number]',
				description:
					'Extracts the year, month, and day from a date number in the format YYYYMMDD.',
			},
			{
				functionName: 'multiply_fractions',
				signature:
					'(num1: number, den1: number, num2: number, den2: number) => [num: number, den: number, product: number]',
				description:
					'Calculates and returns numerator, denominator, and product of two fractions.',
			},
			{
				functionName: 'falling_distance',
				signature: '(falling_time: number) => number',
				description:
					'Calculates distance an object has fallen due to gravity given the time it has fallen.',
			},
		],
		tasks: [
			{
				name: 'Convert Square Footage to Acres',
				id: 't01',
				description: 'Converts square footage to acres.',
				objectives: [
					'Implement a function that converts square feet to acres',
					'Use the constant SQUARE_FEET_PER_ACRE',
					'Return acres as a float',
				],
				sampleOutput: `3.2403703703703702`,
				skills: ['Python', 'Function Design', 'Arithmetic', 'Constants'],
			},
			{
				name: 'Calculate Lawn Mowing Time',
				id: 't02',
				description: 'Determines how long it takes to mow a rectangular lawn.',
				objectives: [
					'Implement a function to calculate time to mow lawn given width, length, and speed',
					'Use float inputs and outputs',
				],
				sampleOutput: `250`,
				skills: ['Python', 'Function Design', 'Arithmetic'],
			},
			{
				name: 'Extract Date Components',
				id: 't03',
				description:
					'Extracts the year, month, and day from a date number in the format YYYYMMDD.',
				objectives: [
					'Implement a function to extract year, month, and day from integer date',
					'Use integer division and modulus',
				],
				sampleOutput: `[1962, 10, 25]`,
				skills: ['Python', 'Integer Division', 'Modulus'],
			},
			{
				name: 'Multiply Fractions',
				id: 't04',
				description: 'Calculates and returns fraction values.',
				objectives: [
					'Implement a function to multiply two fractions',
					'Return numerator, denominator, and float product',
				],
				sampleOutput: `[3, 8, 0.375]`,
				skills: ['Python', 'Functions', 'Arithmetic'],
			},
			{
				name: 'Calculate Falling Distance',
				id: 't05',
				description:
					'Calculates distance an object has fallen due to gravity given the time it has fallen.',
				objectives: [
					'Implement a function to calculate falling distance using formula: distance = (g * t^2) / 2',
					'Use constant ACC_DUE_TO_GRAVITY',
				],
				sampleOutput: `1102.5`,
				skills: ['Python', 'Physics Formula', 'Constants'],
			},
		],
	},
	{
		name: 'Assignment 4',
		id: 'elha7950_a04',
		tasks: [
			{
				name: 'Day Name',
				id: 't01',
				description: `Returns the name of a day of the week given an integer day number. Day 1 is "Sunday", day 7 is "Saturday". Returns "Error" if the number is not valid.`,
				objectives: [
					'Accept an integer day number (1 to 7)',
					'Return corresponding day name',
					"Return 'Error' for invalid inputs",
				],
				sampleOutput: `Sunday`,
				skills: ['Python', 'Conditional Logic', 'Control Flow'],
			},
			{
				name: 'Pollution Ranking',
				id: 't02',
				description: `Returns the pollution level given an AQI (Air Quality Index). Handles various AQI ranges and returns 'Error' if negative.`,
				objectives: [
					'Accept Air Quality Index (integer)',
					'Return pollution category based on AQI range',
					"Return 'Error' if AQI is negative",
				],
				sampleOutput: `Very Unhealthy`,
				skills: ['Python', 'Conditional Logic'],
			},
			{
				name: 'Largest Average',
				id: 't03',
				description: `Returns the average of the two largest values among three given numbers.`,
				objectives: [
					'Accept three float values',
					'Determine two largest values',
					'Calculate and return their average',
				],
				sampleOutput: `16.0`,
				skills: ['Python', 'Arithmetic', 'Logic'],
			},
			{
				name: 'Colour Combine',
				id: 't04',
				description: `Determines the secondary RGB colour from mixing two primary RGB colours. Returns 'Error' if inputs are invalid.`,
				objectives: [
					"Accept two primary RGB colours ('red', 'green', 'blue')",
					'Return correct secondary colour based on combinations',
					"Return 'Error' for invalid input combinations",
				],
				sampleOutput: `yellow`,
				skills: ['Python', 'Conditional Logic'],
			},
			{
				name: 'Hoo Rah',
				id: 't05',
				description: `Returns a string based on divisibility of a number by 2 and/or 7, or 'Zip' if neither.`,
				objectives: [
					'Accept an integer',
					"Return 'Hoo' if divisible by 2",
					"Return 'Rah' if divisible by 7",
					"Return 'Hoo Rah' if divisible by both 2 and 7",
					"Return 'Zip' if divisible by neither",
				],
				sampleOutput: `Hoo Rah`,
				skills: ['Python', 'Modulo Operation', 'Conditional Logic'],
			},
		],
	},
	{
		name: 'Assignment 5',
		id: 'elha7950_a05',
		tasks: [
			{
				name: 'Calculate Factorial',
				id: 't01',
				description: 'Calculates and returns the factorial of a number.',
				objectives: [
					'Implement a function to calculate factorial of an integer > 0',
					'Use a loop to multiply all integers from 1 to number',
				],
				sampleOutput: `120`,
				skills: ['Python', 'Loops', 'Functions', 'Math'],
			},
			{
				name: 'Calories Treadmill Table',
				id: 't02',
				description:
					'Prints a table of calories burned every 5 minutes given calories per minute and total minutes.',
				objectives: [
					'Accept calories per minute (float) and total minutes (int)',
					'Print table every 5 minutes up to total minutes',
					'Format output aligned with 1 decimal place',
				],
				sampleOutput: `
  5  20.5
 10  41.0
 15  61.5
 20  82.0
      `.trim(),
				skills: ['Python', 'Loops', 'Formatting', 'Print Output'],
			},
			{
				name: 'Arrow Up',
				id: 't03',
				description:
					"Prints an arrow shape of '#' characters pointing upwards with a given number of rows.",
				objectives: [
					'Use loops to print an arrow shape',
					'Manage spacing and character alignment',
				],
				sampleOutput: `
   #
  # #
 #   #
#     #
      `.trim(),
				skills: ['Python', 'Loops', 'String Formatting'],
			},
			{
				name: 'Multiplication Table',
				id: 't04',
				description:
					'Prints a formatted multiplication table for a range of values.',
				objectives: [
					'Accept start and stop integers',
					'Print header row and separator line',
					'Print multiplication results aligned properly',
				],
				sampleOutput: `
    2  3  4
   -------
 2 | 4  6  8
 3 | 6  9 12
 4 | 8 12 16
      `.trim(),
				skills: ['Python', 'Loops', 'Formatting', 'Nested Loops'],
			},
			{
				name: 'Range Addition',
				id: 't05',
				description:
					"Uses a loop to sum a range of values starting from 'start', incremented by 'increment', for 'count' times.",
				objectives: [
					'Implement loop to calculate sum',
					'Add successive values increasing by increment',
				],
				sampleOutput: `190`,
				skills: ['Python', 'Loops', 'Arithmetic'],
			},
		],
		constants: [
			{
				name: 'CHAR',
				value: '#',
				description: 'Character used for printing shapes.',
			},
			{
				name: 'SPACE_CHAR',
				value: ' ',
				description: 'Space character used for formatting.',
			},
		],
		functions: [
			{
				functionName: 'calc_factorial',
				signature: '(number: number) => number',
				description: 'Calculates factorial of a positive integer.',
			},
			{
				functionName: 'calories_treadmill',
				signature: '(per_min: number, minutes: number) => void',
				description: 'Prints calories burned every 5 minutes on treadmill.',
			},
			{
				functionName: 'arrow_up',
				signature: '(rows: number) => void',
				description: "Prints an upward arrow made of '#' characters.",
			},
			{
				functionName: 'multiplication_table',
				signature: '(start_num: number, stop_num: number) => void',
				description:
					'Prints a multiplication table from start_num to stop_num.',
			},
			{
				functionName: 'range_addition',
				signature:
					'(start: number, increment: number, count: number) => number',
				description:
					'Sums a range of numbers starting at start, incrementing by increment, count times.',
			},
		],
	},
	{
		name: 'Assignment 6',
		id: 'elha7950_a06',
		tasks: [
			{
				name: 'Total Wins',
				id: 't01',
				description:
					"Reads winning team names from input until empty input; counts wins for 'purple' and 'gold'.",
				objectives: [
					'Use a loop to repeatedly prompt user input',
					'Count wins for two teams based on input',
					'Stop input collection on empty string',
					'Return a tuple with counts',
				],
				sampleOutput: `('purple': 3, 'gold': 2)  // example`,
				skills: ['Python', 'Loops', 'Input', 'Conditionals', 'Tuples'],
			},
			{
				name: 'Detect Prime',
				id: 't02',
				description: 'Determines if a given integer > 1 is prime.',
				objectives: [
					'Check divisibility from 2 up to number-1',
					'Return True if prime, else False',
				],
				sampleOutput: `True`,
				skills: ['Python', 'Loops', 'Conditionals', 'Math'],
			},
			{
				name: 'Interest Table',
				id: 't03',
				description:
					'Prints a monthly loan interest and payment table until loan is paid off.',
				objectives: [
					'Calculate monthly interest based on yearly rate',
					'Update balance after each payment',
					'Adjust final payment if less than regular payment',
					'Print formatted table',
				],
				sampleOutput: `
Principal: $750.00
Interest Rate: 8.50%
Monthly Payment: $200
----------------------------------
Month Interest   Payment   Balance
----------------------------------
   1     5.31    200.00    555.31
   2     3.93    200.00    359.24
   3     2.54    200.00    161.78
   4     1.15    162.93      0.00
      `.trim(),
				skills: ['Python', 'Loops', 'Formatting', 'Math'],
			},
			{
				name: 'Count of Digits',
				id: 't04',
				description:
					'Counts the number of digits in an integer, including zero handling.',
				objectives: [
					'Handle negative numbers',
					'Return 1 if number is zero',
					'Count digits by integer division',
				],
				sampleOutput: `4`,
				skills: ['Python', 'Loops', 'Conditionals'],
			},
			{
				name: 'Factor Summation',
				id: 't05',
				description:
					'Calculates the sum of all factors of an integer excluding the integer itself.',
				objectives: [
					'Loop through all numbers less than the integer',
					'Add to sum if number divides evenly',
				],
				sampleOutput: `4  // for input 9, since factors are 1 and 3`,
				skills: ['Python', 'Loops', 'Conditionals', 'Math'],
			},
		],
		constants: [],
		functions: [
			{
				functionName: 'total_wins',
				signature: '() => [number, number]',
				description:
					"Returns a tuple of total wins for 'purple' and 'gold' from user input.",
			},
			{
				functionName: 'detect_prime',
				signature: '(number: number) => boolean',
				description: 'Determines if a number is prime.',
			},
			{
				functionName: 'interest_table',
				signature:
					'(principal_amount: number, interest_rate: number, payment: number) => void',
				description:
					'Prints monthly interest and payment table until loan is paid off.',
			},
			{
				functionName: 'count_of_digits',
				signature: '(number: number) => number',
				description: 'Counts digits of an integer.',
			},
			{
				functionName: 'factor_summation',
				signature: '(number: number) => number',
				description: 'Returns sum of factors excluding the number itself.',
			},
		],
	},
	{
		name: 'Assignment 7',
		id: 'elha7950_a07',
		tasks: [
			{
				name: 'List Factors',
				id: 't01',
				description:
					'Returns a list of factors of a positive integer excluding the number itself.',
				objectives: [
					'Calculate factors efficiently using sqrt optimization',
					'Exclude the number itself from the factors list',
					'Return factors sorted in ascending order',
				],
				sampleOutput: '[1, 3]',
				skills: ['Python', 'Loops', 'Math', 'Lists'],
			},
			{
				name: 'List Positives',
				id: 't02',
				description:
					'Reads positive integers from user input until 0 is entered; negative numbers ignored.',
				objectives: [
					'Prompt user for numbers repeatedly',
					'Add positive numbers to list',
					'Stop input on zero',
					'Ignore negative inputs',
				],
				sampleOutput: '[5, 10, 3]',
				skills: ['Python', 'Input', 'Loops', 'Conditionals', 'Lists'],
			},
			{
				name: 'Get Indexes',
				id: 't03',
				description:
					'Returns a list of all indexes where a target number appears in a list.',
				objectives: [
					'Search list for all occurrences of a value',
					'Collect and return list of indexes',
				],
				sampleOutput: '[0, 4, 6]',
				skills: ['Python', 'Loops', 'Lists'],
			},
			{
				name: 'List Subtract',
				id: 't04',
				description:
					'Removes from minuend list all values found in subtrahend list (in place).',
				objectives: [
					'Modify list in place',
					'Use helper function to find indexes',
					'Remove elements from end to avoid index shifting',
				],
				sampleOutput: 'None (modifies list in place)',
				skills: ['Python', 'Lists', 'Mutation', 'Helper Functions'],
			},
			{
				name: 'Verify Sorted',
				id: 't05',
				description:
					'Determines if a list is sorted in ascending order, returning status and index of first error.',
				objectives: [
					'Check if list is empty (sorted)',
					'Iterate and compare consecutive elements',
					'Return index of first out-of-order element or -1 if sorted',
				],
				sampleOutput: '[False, 1]',
				skills: ['Python', 'Loops', 'Conditionals'],
			},
		],
		constants: [],
		functions: [
			{
				functionName: 'list_factors',
				signature: '(number: number) => number[]',
				description: 'Returns list of factors excluding the number itself.',
			},
			{
				functionName: 'list_positives',
				signature: '() => number[]',
				description:
					'Reads positive numbers from user input into a list until 0 is entered.',
			},
			{
				functionName: 'get_indexes',
				signature: '(numbers: any[], target_number: any) => number[]',
				description: 'Finds all indexes of target_number in numbers list.',
			},
			{
				functionName: 'list_subtract',
				signature: '(minuend: any[], subtrahend: any[]) => void',
				description:
					'Removes all values from minuend that are in subtrahend, modifying minuend in place.',
			},
			{
				functionName: 'verify_sorted',
				signature: '(numbers: number[]) => [boolean, number]',
				description:
					'Returns (True, -1) if sorted ascending, else (False, index of first unsorted element).',
			},
		],
	},
	{
		name: 'Assignment 8',
		id: 'elha7950_a08',
		tasks: [
			{
				name: 'Add Spaces',
				id: 't01',
				description: `Creates a new sentence by adding spaces between concatenated words. Words start with uppercase letters.`,
				objectives: [
					'Identify word boundaries by uppercase letters',
					'Separate words with spaces',
					'Ensure only the first word starts with uppercase',
				],
				sampleOutput: `"Stop And Smell The Roses."`,
				skills: ['Python', 'String Manipulation', 'Loops'],
			},
			{
				name: 'Pluralize',
				id: 't02',
				description: `Pluralizes a string based on English pluralization rules.`,
				objectives: [
					"Add 'es' if word ends with 's', 'sh', 'ch', or 'ox'",
					"Replace 'y' with 'ies' if not preceded by 'a' or 'o'",
					"Add 's' otherwise",
				],
				sampleOutput: `"cities" for 'city', 'foxes' for 'fox'`,
				skills: ['Python', 'String Manipulation', 'Conditionals'],
			},
			{
				name: 'Common End',
				id: 't03',
				description: `Returns the longest common ending (suffix) between two strings.`,
				objectives: [
					'Compare strings from the end',
					'Return common suffix string',
					'Handle empty strings correctly',
				],
				sampleOutput: `"apple" for 'apple' and 'pineapple'`,
				skills: ['Python', 'String Manipulation', 'Loops'],
			},
			{
				name: 'Valid ISBN',
				id: 't04',
				description: `Validates an ISBN string format based on specified rules.`,
				objectives: [
					'Check length (17 characters)',
					'Check groups separated by dashes (5 groups)',
					"First group must be '978' or '979'",
					'Only digits and dashes allowed',
					'Last group is a single digit',
				],
				sampleOutput: `True for "978-3-16-148410-0"`,
				skills: ['Python', 'String Validation', 'Conditionals'],
			},
			{
				name: 'Has Word Chain',
				id: 't05',
				description: `Determines if a list of strings forms a word chain, where each word starts with the last letter of the previous.`,
				objectives: [
					'Iterate through list checking adjacent word conditions',
					'Return boolean result',
				],
				sampleOutput: `True for ["apple", "elephant", "turtle", "elephant"]`,
				skills: ['Python', 'Lists', 'Loops', 'String Manipulation'],
			},
		],
		constants: [
			{
				name: 'VALID_ISBN_LENGTH',
				value: '17',
				description: 'The required length for a valid ISBN string.',
			},
		],
		functions: [
			{
				functionName: 'add_spaces',
				signature: '(sentence: string) => string',
				description:
					'Inserts spaces into concatenated sentence based on uppercase letters.',
			},
			{
				functionName: 'pluralize',
				signature: '(string: string) => string',
				description: 'Returns the plural form of an English noun string.',
			},
			{
				functionName: 'common_end',
				signature: '(str1: string, str2: string) => string',
				description: 'Finds the longest common suffix of two strings.',
			},
			{
				functionName: 'valid_isbn',
				signature: '(isbn: string) => boolean',
				description:
					'Checks if ISBN string is valid according to format rules.',
			},
			{
				functionName: 'has_word_chain',
				signature: '(words: string[]) => boolean',
				description:
					'Determines if words form a chain where each starts with last letter of previous.',
			},
		],
	},
	{
		name: 'Assignment 9',
		id: 'elha7950_a09',
		tasks: [
			{
				name: 'File Top',
				id: 't01',
				description: `Prints the first count lines of a file (line numbering starts at 0). Stops if file is shorter than count.`,
				objectives: [
					'Read lines from a file',
					'Print only up to count lines',
					'Handle files shorter than count gracefully',
				],
				sampleOutput: `First 5 lines of file printed`,
				skills: ['Python', 'File Handling', 'Loops'],
			},
			{
				name: 'Read Integers',
				id: 't02',
				description: `Extracts positive integers from a file with comma-delimited numbers, ignoring non-numeric tokens.`,
				objectives: [
					'Parse lines of text',
					'Split by commas',
					'Filter and convert numeric tokens',
					'Return list of integers',
				],
				sampleOutput: `[12, 34, 56, 78]`,
				skills: ['Python', 'File Handling', 'String Parsing'],
			},
			{
				name: 'File Statistics',
				id: 't03',
				description: `Counts upper-case letters, lower-case letters, digits, whitespace characters, and other characters in a file.`,
				objectives: [
					'Read file content',
					'Classify characters',
					'Return counts for each category',
				],
				sampleOutput: `(10, 50, 12, 15, 3)`,
				skills: ['Python', 'File Handling', 'Character Classification'],
			},
			{
				name: 'Line Numbering',
				id: 't04',
				description: `Reads a file and writes it to another file, prefixing each line with its line number in format [number].`,
				objectives: [
					'Read and write files',
					'Prefix each line with line number starting at 0',
					'Write formatted lines to output file',
				],
				sampleOutput: `[0] First line text`,
				skills: ['Python', 'File Handling', 'File Writing'],
			},
			{
				name: 'Student Stats',
				id: 't05',
				description: `Analyzes a file with student records (surname, forename, id, mark) to find lowest and highest marks and average mark.`,
				objectives: [
					'Parse CSV lines',
					'Identify lowest and highest marks and corresponding IDs',
					'Calculate average mark',
				],
				sampleOutput: `('12345', '67890', 75.6)`,
				skills: ['Python', 'File Handling', 'Data Processing'],
			},
		],
		constants: [],
		functions: [
			{
				functionName: 'file_top',
				signature: '(file_handle: TextIO, count: number) => void',
				description: 'Prints the first count lines of a file.',
			},
			{
				functionName: 'read_integers',
				signature: '(file_handle: TextIO) => number[]',
				description:
					'Extracts positive integers from a file with comma-separated values.',
			},
			{
				functionName: 'file_statistics',
				signature:
					'(file_handle: TextIO) => [number, number, number, number, number]',
				description:
					'Counts uppercase, lowercase, digits, whitespace, and other characters in a file.',
			},
			{
				functionName: 'line_numbering',
				signature: '(fh_read: TextIO, fh_write: TextIO) => void',
				description:
					'Writes lines from one file to another with line numbers prefixed.',
			},
			{
				functionName: 'student_stats',
				signature: '(file_handle: TextIO) => [string, string, number]',
				description:
					'Returns the student IDs with lowest and highest marks and average mark from file.',
			},
		],
	},
];
