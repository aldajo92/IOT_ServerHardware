int value1 = 0;
int value2 = 0;

void setup() {
  Serial.begin(9600);
}

void loop() {
  value1++;
  value2++;
  Serial.print("value1=");
  Serial.print(value1);
  Serial.print(" value2=");
  Serial.print(value2);
  Serial.print("\n\r");
  delay(10);
}