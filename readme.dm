Example Tariff
json
Copy
Edit
{
  "id": "T1",
  "name": "Residential",
  "currency": "USD",
  "levels": [
    { "minConsumption": 0, "maxConsumption": 100, "rate": 0.10 },
    { "minConsumption": 101, "maxConsumption": 500, "rate": 0.15 },
    { "minConsumption": 501, "maxConsumption": 1000, "rate": 0.20 },
    { "minConsumption": 1001, "maxConsumption": null, "rate": 0.25 }
  ]
}
First 100 kWh → $0.10/kWh
Next 400 kWh (101-500) → $0.15/kWh
Next 500 kWh (501-1000) → $0.20/kWh
Above 1000 kWh → $0.25/kWh
=============================
How to Apply Tariffs in Billing
When generating a bill for a customer, the system should:

Identify the applicable tariff based on customer type (residential, commercial, etc.).
Fetch the consumption for the billing period from the meter readings.
Apply the correct rate for each tier based on the levels in the tariff.
Calculate total bill by summing the cost for each tier.
Example Calculation
Customer's Consumption = 750 kWh
Consumption Range	Rate	kWh Used	Cost
0 - 100 kWh	$0.10	100	$10
101 - 500 kWh	$0.15	400	$60
501 - 750 kWh	$0.20	250	$50
Total Bill		750	$120
4. Summary
✅ Multi-level tariff system with tiered pricing
✅ Efficient billing by applying correct rates based on consumption
✅ Supports dynamic tariff updates for different customer types

This model is scalable and flexible, allowing you to handle tariff changes dynamically. Let me know if you need further refinements! 🚀
