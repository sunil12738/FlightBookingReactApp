#!/usr/bin/python
import random

# TODO : lot of unnecessary values

cities = ["mumbai", "delhi", "kanpur", "bengaluru", "kolkata"]
companies = ["indigo", "vistara", "goair", "spicejet", "airindia"]

print "var flight_data = [\n"

for x in xrange(1,2000):
	fromcity = random.randrange(0,len(cities)-1)
	tocity = random.randrange(0,len(cities)-1)
	company = random.randrange(0,len(companies)-1)
	name = companies[company] + str(random.randrange(100,150))
	price = str(random.randrange(1000,10000))
	# hack generate date in yyyy mm dd format
	# date
	temp1 = random.randrange(16,26) 
	if(temp1<10):
		fromdateD = "0" + str(temp1)
	else :
		fromdateD = str(temp1)
	# month
	temp2 = random.randrange(4,5)
	if(temp2<10):
		fromdateM = "0" + str(temp2)
	else :
		fromdateM = str(temp2)
	# year
	fromdateY = "2017"

	date = fromdateY + "-" + fromdateM + "-" + fromdateD

# 	departure time generate
	dept_timeH = str(random.randrange(0,23))
	dept_timeM = str(random.randrange(0,59))
	dept_time = dept_timeH + ":" + dept_timeM

#	arrival time generate
	arr_timeH = str(random.randrange(0,23))
	arr_timeM = str(random.randrange(0,59))
	arr_time = arr_timeH + ":" + arr_timeM
	# nicely generate the data
	# print "\t{"
	# print "\t\t\"fromcity\" : \"" + cities[fromcity] + "\","
	# print "\t\t\"tocity\" : \"" + cities[tocity] + "\","
	# print "\t\t\"company_name\" : \"" + companies[company] + "\"," 
	# print "\t\t\"flight_name\" : \"" + name + "\","
	# print "\t\t\"price\" : " + price + ","
	# print "\t\t\"date\" : \"" + date + "\","
	# print "\t\t\"dept_time\" : \"" + dept_time + "\","
	# print "\t\t\"arr_time\" : \"" + arr_time + "\","
	# print "\t},"
	print "\t{"		\
		+	"\"fromcity\" : \"" + cities[fromcity] + "\","		\
		+	"\"tocity\" : \"" + cities[tocity] + "\","		\
		+	"\"company_name\" : \"" + companies[company] + "\","	\
		+	"\"flight_name\" : \"" + name + "\","	\
		+	"\"price\" : " + price + ","	\
		+	"\"date\" : \"" + date + "\","		\
		+	"\"dept_time\" : \"" + dept_time + "\","	\
		+	"\"arr_time\" : \"" + arr_time + "\","	\
		+	"},"

print "]\n\nexport default flight_data"
# {
# 	fromcity
# 	tocity
# 	company
# 	name
# 	price
# 	date
# }